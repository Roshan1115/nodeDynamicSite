const express = require("express");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3000
const hbs = require("hbs");
var bodyparser = require('body-parser');

require("./db/connection")
const MessagesCollection = require("./db/models");
const { data } = require("jquery");

// setting path for static files frontend
const staticfile_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, '../templates/views')
const partial_path = path.join(__dirname, '../templates/partials')

// middle wares
app.use(express.static(staticfile_path))
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')))
// custom styling
// app.use('/myCss', express.static(path.join(__dirname, '../public/css')))
app.use('/myImages', express.static(path.join(__dirname, '../public/images')))

app.set('view engine', 'hbs')
app.set('views', views_path)
hbs.registerPartials(partial_path)
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: false }));


// routing
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// for sending message contact
app.post('/contact', async (req, res) => {
  try{

    const Data = new MessagesCollection({
      Name : req.body.name,
      Email : req.body.email,
      Message : req.body.message
    })
    await Data.save();
  }catch(err){
    res.send(err)
  }

  // console.log(req.body.name);
  // console.log(req.body.email);
  // console.log(req.body.message);
})

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
})