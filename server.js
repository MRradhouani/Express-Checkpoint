const express = require("express");
const hbs = require('hbs')
const app = express();


app.use(express.static('public'));



// addRequestDate = (req, res, next) => {
//     let requestAt = new Date()
//     console.log(requestAt)
//     next()
// }
app.set('view engine', hbs)

app.get('/Home', (req, res) => {

    res.render('home.hbs')
}
)

app.get('/service', (req, res) => {

    res.render('service.hbs')
}
)

app.get('/contact', (req, res) => {

    res.render('contact.hbs' )
}
)


// app.use(express.static(path.join(__dirname, '/views')));


// app.get('/Home', addRequestDate, (req, res) => {
//     res.sendFile(__dirname + '/public/home.html')
// })

// app.get('/Service', addRequestDate, (req, res) => {
//     res.sendFile(__dirname + '/public/service.html')
// })

// app.get('/Contact', addRequestDate, (req, res) => {
//     res.sendFile(__dirname + '/public/contact.html')
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(` service is runing ${port}`);
})