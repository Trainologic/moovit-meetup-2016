import {Component} from "@angular/core";

export interface FileSystemItem {
    path: string;
    name: string;
    isDir: boolean;
    isFile: boolean;
    items: FileSystemItem[];
}

// export const root: FileSystemItem = {
//     id: 1,
//     name: "C:",
//     isDir: true,
//     isFile: false,
//     items: [
//         {id: 2, name: "Program Files", isDir: true, isFile: false, items: [
//             {id: 3, name: "2.txt", isDir: false, isFile: true, items: null},
//         ]},
//         {id: 4, name: "Program Files (x86)", isDir: true, isFile: false, items: null},
//         {id: 5, name: "1.txt", isDir: false, isFile: true, items: null},
//     ],
// };
//
// export function fixParent(root: FileSystemItem) {
//     if(root.items) {
//         for (let item of root.items) {
//             item.parentId = root.id;
//
//             fixParent(item);
//         }
//     }
// }
//
// export function getFullPath(item: FileSystemItem): string {
//     if(!item.parentId) {
//         return item.name;
//     }
//
//     return getFullPath(find(root, item.parentId)) + "/" + item.name;
// }
//
// export function find(root: FileSystemItem, id: number): FileSystemItem {
//     if(root.id == id) {
//         return root;
//     }
//     if(root.items) {
//         for (let item of root.items) {
//             const res = find(item, id);
//             if(res) {
//                 return res;
//             }
//         }
//     }
//
//     return null;
// }
//
// export function toJSON(item: FileSystemItem) {
//     const clone = Object.assign({}, item, {items: null});
//
//     clone.path = getFullPath(clone);
//
//     if(item.items) {
//         const items = item.items.concat([]);
//         for(let i=0; i<items.length; i++) {
//             const item = items[i];
//             items[i] = Object.assign({}, item, {items: null});
//         }
//
//         clone.items = items;
//     }
//
//     return clone;
// }
//
// fixParent(root);