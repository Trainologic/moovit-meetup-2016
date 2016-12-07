import {Component} from "@angular/core";
import {getFullPath, root} from "./fileSystem";

@Component({
    selector: "directory",
    template: require("./directory.component.html"),
    styles: [require("./directory.component.css")]
})
export class DirectoryComponent {
    dir: FileSystemItem;

    constructor() {
        this.dir = root;
    }

    activate(item: FileSystemItem) {
        if(item.isFile) {
            return;
        }

        this.chdir(item);
    }

    chdir(item: FileSystemItem) {
        this.dir = item;
    }

    up() {
        if(this.dir.parent) {
            this.dir = this.dir.parent;
        }
    }

    getFullPath(item: FileSystemItem): string {
        return getFullPath(item);
    }
}

interface FileSystemItem {
    name: string;
    isDir: boolean;
    isFile: boolean;
    items: FileSystemItem[];
    parent: FileSystemItem;
}
