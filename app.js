const express = require("express")
const app = express()

const questions = require('./reference_content/question_category')
const horoscope = require('./reference_content/horoscope')
const astrologers = require('./reference_content/talkToAstrologer')
const feedbacks = require('./reference_content/feedbacks')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/question_category', (req, res) => {
    res.json(questions.data)
})

app.get('/horoscope', (req, res) => {
    res.json(horoscope.data)
})

app.get('/talkToAstrologer', (req, res) => {
    res.json(astrologers)
})

    app.get('/feedbacks', (req, res) => {
    res.json(feedbacks.data)
})

app.listen(3001, () => {
    console.log("Server is listening to port 5000...")
})
