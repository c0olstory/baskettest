const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.json());

app.get('/itemslist/:page', (req, res) => {
   const page = req.params.page;
   fs.readFile(`./database/items${page}.json`, 'utf8', (err, data) => {
      res.send(data);
   });
});


app.get('/basketlist', (req, res) => {
   fs.readFile('./database/basket/basket.json', 'utf8', (err, data) => {
      res.send(data);
   });
});

app.post('/itemslist', (req, res) => {
   const offset = 6;
   const filePath = `./database/items3.json`
   fs.readFile(filePath, 'utf8', (err, data) => {
      const list = JSON.parse(data || {});
      const amountOfData = Object.keys(list).length;
      const newID = offset + amountOfData + 1;
      const newItem = req.body;
      newItem.id = newID;
      list[newID] = newItem;
      fs.writeFile(filePath, JSON.stringify(list), (err) => {
         res.send(list);
      })
   });
});

app.post('/basketlist', (req, res) => {
   const filePath = `./database/basket/basket.json`
   fs.readFile(filePath, 'utf8', (err, data) => {
      const list = JSON.parse(data || {});
      // const list = data 
      const amountOfData = Object.keys(list).length;
      // const newID = amountOfData + 1; //?
      const newID = req.body.id; //?
      const newItem = req.body;
      console.log(req.body, 'req.body')
      // newItem.id = newID;
      list[newID] = newItem;
      fs.writeFile(filePath, JSON.stringify(list), (err) => {
         res.send(list) 
      })
   });
});

app.listen(3000, () => {
   console.log('server started');
});

