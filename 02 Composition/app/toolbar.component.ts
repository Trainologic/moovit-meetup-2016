import {Component} from "@angular/core";

@Component({
    selector: "toolbar",
    template: require("./toolbar.component.html"),
    styles: [require("./toolbar.component.css")],
})
export class ToolbarComponent {
    constructor() {
    }
}
