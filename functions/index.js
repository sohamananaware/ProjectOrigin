const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('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');

//api

//app config
const app = express();

//middlewares
app.use(cors({ origin : true}));
app.use(express.json());

//api roots

app.get('/' , (request , response)=>response.status(200).send('hello'))
app.post('/payments/create' , async(request , response)=>{
    const total = request.query.total;
    console.log('payment received ', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount : total,
        currency: "USD",
    });
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

//api command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/origin-tech-1eddc/us-central1/api