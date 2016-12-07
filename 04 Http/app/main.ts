import "reflect-metadata";
import "zone.js";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {DirectoryComponent} from "./directory.component";
import "./site.css!css";
import {ToolbarComponent} from "./toolbar.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [
        AppComponent,
        DirectoryComponent,
        ToolbarComponent,
    ],
    bootstrap: [AppComponent],
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
