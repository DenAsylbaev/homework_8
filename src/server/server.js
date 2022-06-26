const express = require('express');
const fs = require('fs');
const os = require('os');
const app = express();
const cart = require('./cartRouter');//обработчик всех запросов корзины

app.use(express.json());
app.use('/', express.static('src/public'));
app.use('/api/cart', cart);


// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/api/products', (req, res) => {
    fs.readFile('src/server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

// app.get('/api/cart/:id', (req, res) => {
//    // res.send(req.params.id);
//     res.send(req.query);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));

// console.log(`Hello, ${os.userInfo().username}`);
