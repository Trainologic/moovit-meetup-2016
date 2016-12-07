"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require("express");
var path = require("path");
var fs = promisify(require("fs"));
var app = express();
app.get("/api/dir", function (req, res) {
    try {
        var itemPath = req.query.path;
        getDirectory(itemPath).then(function (item) {
            res.json(item);
        }).catch(function (err) {
            res.status(500);
            res.end();
        });
    }
    catch (err) {
        res.status(500);
        res.end();
    }
});
app.use(express.static('.'));
app.listen(3000, function () {
    console.log("Server is running");
});
function getDirectory(dirPath) {
    return __awaiter(this, void 0, void 0, function () {
        var item, names, _i, names_1, name_1, path_1, stat, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    item = {
                        path: dirPath,
                        name: path.basename(dirPath),
                        isFile: false,
                        isDir: true,
                        items: [],
                    };
                    return [4 /*yield*/, fs.readdir(dirPath)];
                case 1:
                    names = _a.sent();
                    _i = 0, names_1 = names;
                    _a.label = 2;
                case 2:
                    if (!(_i < names_1.length))
                        return [3 /*break*/, 7];
                    name_1 = names_1[_i];
                    path_1 = dirPath + "/" + name_1;
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fs.stat(path_1)];
                case 4:
                    stat = _a.sent();
                    item.items.push({
                        path: path_1,
                        name: name_1,
                        isFile: stat.isFile(),
                        isDir: stat.isDirectory(),
                        items: null,
                    });
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7: return [2 /*return*/, item];
            }
        });
    });
}
function promisify(func) {
    if (typeof func == "object") {
        var res = {};
        for (var key in func) {
            res[key] = promisify(func[key]);
        }
        return res;
    }
    return function (arg1) {
        var that = this;
        return new Promise(function (resolve, reject) {
            func(arg1, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
}
//# sourceMappingURL=main.js.map