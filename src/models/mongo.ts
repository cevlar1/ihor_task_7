import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb+srv://dimarodkin1:zoGTN718Ge@cluster0.mtkzw87.mongodb.net/?retryWrites=true&w=majority')

export async function connectToDataCollection(){
    await client.connect();
   // await client.db().createCollection('usersData2');
    let coll = await client.db().listCollections({name: 'task7'}, { nameOnly: true }).toArray();
    if (coll.length == 0)
    {
        await client.db().createCollection('task7');
    }
    return await client.db().collection('task7');
}