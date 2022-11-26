"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const { getController, postController } = require("./controllers/getPostControllers");
app.use(express_1.default.json());
app.get("*", getController);
app.post("*", postController);
app.listen(5000, () => {
    console.log("Listening to port 5000...");
});
