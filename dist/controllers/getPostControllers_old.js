"use strict";
// function getController(res, req) {
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
exports.postController = exports.getController = void 0;
const dataStorage_1 = require("../models/dataStorage");
//import { connectToDataCollection } from '../models/mongo';
let saveData = [];
//let saveData = connectToDataCollection();
const getController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataIndex = saveData.findIndex(data => data.url == req.originalUrl);
    //const dataIndex = saveData.findOne({uer: req.originalUrl});
    if (dataIndex < 0) {
        res.status(404).send("Cannot find data!");
    }
    else
        res.status(201).send(saveData[dataIndex].json);
});
exports.getController = getController;
const postController = (req, res) => {
    const dataIndex = saveData.findIndex(data => data.url == req.originalUrl);
    if (dataIndex < 0) {
        saveData.push(new dataStorage_1.dataStorage(req.originalUrl, req.body));
    }
    else
        saveData[dataIndex] = new dataStorage_1.dataStorage(req.originalUrl, req.body);
    res.status(201).send("Done!");
};
exports.postController = postController;
