// server.js
/*import express from "express";
import bodyParser from "body-parser";
import pg from "pg";*/
const express = require('express');
const app = express();
const User = require ('./models/User');
const dbo = require ('./db');
//const { MongoClient } = require('mongodb');
const port = 3000; // You can choose any available port


dbo;

/*const uri = 'mongodb+srv://shailendarshai25:t8NlDcHflOD2qMv9@neebys.zf8vw5d.mongodb.net/?retryWrites=true&w=majority&appName=neebys';
const client = new MongoClient(uri, );

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

connectToDatabase();*/

app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Define a route
app.get('/', async(req, res) => {
    res.send('Hello from Express!');
});

app.get('/dashboard', (req, res) => {
    // Render the dashboard page
    res.send('Welcome to the dashboard!');
});

//user id
/*app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const usersCollection = client.db('neebys').collection('users');
        const existingUser = await usersCollection.findOne({ email });

        if (existingUser) {
            // User exists, compare passwords
            if (existingUser.password === password) {
                res.redirect('/dashboard');
            } else {
                res.status(401).send('Incorrect password');
            }
        } else {
            // User doesn't exist, create a new account
            const result = await usersCollection.insertOne({ email, password });
            console.log('New user inserted:', result.insertedId);
            res.redirect('/dashboard');
        }
    } catch (error) {
        console.error('Error processing login:', error);
        res.status(500).send('Internal Server Error');
    }
});
*/

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
