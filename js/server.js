
// const http = require('http');
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//    let body = null;
//    try {
//       const ext = req.url.split('.')[1];
//       if(ext === 'svg') {
//          res.setHeader('Content-Type', 'image/svg+xml');
//       }
//       body = fs.readFileSync(`.${req.url}`)
//    } catch (err) {
//       body = fs.readFileSync(`./index.html`)
//    }
//    res.end(body)
// });

// server.listen(process.env.PORT || 3000)

const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.json());

app.get('/itemslist/:page', (req, res) => {
   const page = req.params.page;
   fs.readFile(`./database/items${page}.json`, 'utf8', (err, data) => {
      // console.log(data, "server.js data1")
      res.send(data);
   });
});


app.get('/basketlist', (req, res) => {
   // console.log(res, "server.js basketlist app")
   fs.readFile('./database/basket/basket.json', 'utf8', (err, data) => {
      console.log(data, "server.js data2")
      res.send(data);
   });
});




app.post('/itemslist', (req, res) => {
   const offset = 6;
   const filePath = `./database/items3.json`
   fs.readFile(filePath, 'utf8', (err, data) => {
      const list = JSON.parse(data || {});
      // const list = data 
      const amountOfData = Object.keys(list).length;
      const newID = offset + amountOfData + 1;
      const newItem = req.body;
      newItem.id = newID;
      list[newID] = newItem;
      fs.writeFile(filePath, JSON.stringify(list), (err) => {
         // if(err) {
         //    console.log(err)
         // }
         res.send(list);
      })
   });
});

app.post('/basketlist', (req, res) => {
   console.log(data, res, 'app.post basketlist')
   // const offset = 6;
   const filePath = `./database/basket/basket.json`
   fs.readFile(filePath, 'utf8', (err, data) => {
      const list = JSON.parse(data || {});
      // const list = data 
      const amountOfData = Object.keys(list).length;
      // const newID = offset + amountOfData + 1;
      const newID = amountOfData + 1;
      console.log(req.body, 'req.body dddddd')
      const newItem = req.body;
      newItem.id = newID;
      list[newID] = newItem;
      fs.writeFile(filePath, JSON.stringify(list), (err) => {
      // fs.writeFile(filePath, list, (err) => {
         // res.send(list);
         if(err){
            console.log(err);
         }
         // res.status(200).send(list)
         res.send(list) 
         res.end(list)
      })
   });
});

app.listen(3000, () => {
   console.log('server started');
});

