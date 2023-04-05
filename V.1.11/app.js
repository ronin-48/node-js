//to controle ur website
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Allah akkbar')
})
// app.get('/ana', (req, res) => {
//   res.sendFile('Views/index.html', {root: __dirname})
// })


app.get('/admin', (req, res) => {
  res.render("index")
})







//start mongoose


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abdoubk:c4a@cluster0.qjywiog.mongodb.net/?retryWrites=true&w=majority")
  .then( (result) => {
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch( (err) => {
    console.log(err);
  }); 


//end mongoose




// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`)
// })