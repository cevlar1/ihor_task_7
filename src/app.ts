import express from "express";
const app = express();

const {getController, postController} = require("./controllers/getPostControllers");

app.use(express.json());
app.get("*", getController);
app.post("*", postController);

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
