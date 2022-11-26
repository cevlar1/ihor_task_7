// function getController(res, req) {

// }
import { RequestHandler} from "express"
import { dataStorage } from "../models/dataStorage";
import { connectToDataCollection } from '../models/mongo';

//let saveData: dataStorage[] = [];
 

export const getController : RequestHandler = async (req, res) =>{
    //const dataIndex = saveData.findIndex(data => data.url == req.originalUrl)
    let saveData = await connectToDataCollection();
    const data = await saveData.findOne({url: req.originalUrl});
    if (data == null)
    {
        res.status(404).send("Cannot find data!");
    } else
    res.status(201).send(data.json);
};

export const postController : RequestHandler = async (req, res) =>{
    // const dataIndex = saveData.findIndex(data => data.url == req.originalUrl)
    let saveData = await connectToDataCollection();
    const data = await saveData.findOne({url: req.originalUrl});
  
    if (data == null)
    {
        await saveData.insertOne(new dataStorage(req.originalUrl, req.body));
    } else
    await saveData.replaceOne(data, new dataStorage(req.originalUrl, req.body));
    res.status(201).send("Done!");
};
