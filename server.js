const express = require("express");
const hbs = require('hbs')
const app = express();
const datetime = require('node-datetime');
var dt = datetime.create(new Date());
var jour = dt.format("W");
var hour = dt.format("H:M");

app.use(express.static('public'));



addRequestDate = (req, res, next) => {
    let requestAt = new Date()
    console.log(requestAt)
    next()
}
app.set('view engine', hbs)

app.get('/', addRequestDate, (req, res) => {
    if (hour < "17:00" && hour > "09:00") {
        if (jour != "sunday" && jour != "saturday") {
            res.render('home.hbs') ;
            res.render('service.hbs') ;
            res.render('contact.hbs') ;



        } else {
            res.render('error.hbs') ;
        }
    }

})


// app.get('/',addRequestDate, (req, res) => {

//     res.render('home.hbs')
// }
// )
// app.get('/Home',addRequestDate, (req, res) => {

//     res.render('home.hbs')
// }
// )

// app.get('/service',addRequestDate, (req, res) => {

//     res.render('service.hbs')
// }
// )

// app.get('/contact',addRequestDate, (req, res) => {

//     res.render('contact.hbs' )
// }
// )


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