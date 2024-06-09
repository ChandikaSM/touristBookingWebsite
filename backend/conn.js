const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://sushmaj2347:Sushmita5678@cluster0.o9wdrqz.mongodb.net/touristData?retryWrites=true&w=majority';
const dbName = 'touristData';

async function connectToMongoDB() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB server');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = connectToMongoDB;
