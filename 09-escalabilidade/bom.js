// Escalável: uso de banco de dados
const { MongoClient } = require('mongodb');
async function adicionar(item) {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('exemplo');
  await db.collection('dados').insertOne({ item });
  await client.close();
}