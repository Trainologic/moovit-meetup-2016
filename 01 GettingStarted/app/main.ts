import "reflect-metadata";
import "zone.js";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
