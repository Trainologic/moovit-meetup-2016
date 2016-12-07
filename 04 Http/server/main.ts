import * as express from "express";
import * as path from "path";
import {FileSystemItem} from "../app/fileSystem";
const fs = promisify(require("fs"));

const app = express();

app.get("/api/dir", function(req, res) {
    try {
        const itemPath = req.query.path;
        getDirectory(itemPath).then(item => {
            res.json(item);
        }).catch(err => {
            res.status(500);
            res.end();
        });
    }
    catch(err) {
        res.status(500);
        res.end();
    }
});

app.use(express.static('.'));

app.listen(3000, ()=> {
    console.log("Server is running");
});

async function getDirectory(dirPath): Promise<FileSystemItem> {
    const item: FileSystemItem = {
        path: dirPath,
        name: path.basename(dirPath),
        isFile: false,
        isDir: true,
        items: [],
    };

    const names = await fs.readdir(dirPath);
    for(let name of names) {
        const path = dirPath + "/" + name;

        try {
            const stat = await fs.stat(path);
            item.items.push({
                path: path,
                name: name,
                isFile: stat.isFile(),
                isDir: stat.isDirectory(),
                items: null,
            });
        }
        catch(err) {
            //
            //  ignore that file
            //
        }
    }

    return item;
}

function promisify(func): any {
    if(typeof func == "object") {
        let res = {};
        for(let key in func) {
            res[key] = promisify(func[key]);
        }

        return res;
    }

    return function(arg1) {
        const that = this;

        return new Promise(function(resolve, reject) {
            func(arg1, function (err, data) {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });
    }
}
