const express = require("express");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3000
const hbs = require("hbs")
require("./db/connection")

// setting path for static files frontend
const staticfile_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, '../templates/views')
const partial_path = path.join(__dirname, '../templates/partials')

// middle wares
app.use(express.static(staticfile_path))
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')))

app.set('view engine', 'hbs')
app.set('views', views_path)
hbs.registerPartials(partial_path)


// routing
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
})