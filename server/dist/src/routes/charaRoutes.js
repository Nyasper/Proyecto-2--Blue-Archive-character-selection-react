"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentsController_1 = require("../controllers/studentsController");
const categories_1 = require("../controllers/categories");
function charaRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        app.get('/', () => {
            return 'Proyecto 2 BACKEND';
        });
        app.get('/all', studentsController_1.getAllCharas);
        app.get('/:charaName', studentsController_1.getCharaByCharaName);
        app.get('/category/all', categories_1.getAllCategoryes);
        app.get('/category/:categoryName', studentsController_1.categoryController);
    });
}
exports.default = charaRoutes;
