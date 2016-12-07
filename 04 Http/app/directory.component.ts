import {Component} from "@angular/core";
import {FileSystemItem} from "./fileSystem";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Component({
    selector: "directory",
    template: require("./directory.component.html"),
    styles: [require("./directory.component.css")]
})
export class DirectoryComponent {
    dir: FileSystemItem;

    constructor(private http: Http) {
    }

    async ngOnInit() {
        this.dir = await this.http.get("/api/dir", {search: "path=/"}).map(res => res.json()).toPromise();
    }

    activate(item: FileSystemItem) {
        if(item.isFile) {
            return;
        }

        this.chdir(item);
    }

    async chdir(item: FileSystemItem) {
        const path = this.join(this.dir.path, item.name);
        this.dir = await this.http.get("/api/dir?path=" + path).map(res => res.json()).toPromise();
    }

    async up() {
        if(this.dir.path == "/") {
            return;
        }

        const path = this.getDirName(this.dir.path);
        this.dir = await this.http.get("/api/dir?path=" + path).map(res => res.json()).toPromise();
    }

    join(path1, path2) {
        if(path1[path1.length-1]=="/") {
            return path1 + path2;
        }

        return path1 + "/" + path2;
    }

    getDirName(path: string): string {
        const index = path.lastIndexOf("/");
        if(index == -1) {
            return path;
        }

        const res = path.substring(0, index);
        if(res == "") {
            return "/"
        }

        return res;
    }
}
