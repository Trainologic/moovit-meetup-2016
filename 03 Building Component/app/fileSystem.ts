import {Component} from "@angular/core";

interface FileSystemItem {
    name: string;
    isDir: boolean;
    isFile: boolean;
    items: FileSystemItem[];
    parent: FileSystemItem;
}

export const root: FileSystemItem = {
    name: "C:",
    isDir: true,
    isFile: false,
    items: [
        {name: "Program Files", isDir: true, isFile: false, items: [
            {name: "2.txt", isDir: false, isFile: true, items: null, parent: null},
        ], parent: null},
        {name: "Program Files (x86)", isDir: true, isFile: false, items: null, parent: null},
        {name: "1.txt", isDir: false, isFile: true, items: null, parent: null},
    ],
    parent: null,
};

export function fixParent(root: FileSystemItem) {
    if(root.items) {
        for (let item of root.items) {
            item.parent = root;

            fixParent(item);
        }
    }
}

export function getFullPath(item: FileSystemItem): string {
    if(!item.parent) {
        return item.name;
    }

    return getFullPath(item.parent) + "/" + item.name;
}

fixParent(root);