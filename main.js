const http = require('http');
const { parse } = require('querystring');
const mongoose = require('mongoose');
const Good = require('./db/good');

const port = process.env.PORT || 2000

const server = http.createServer((req, res) => {
    if (req.url === '/goods' && req.method === 'GET') {
        const total = Good.find({}, function(err, result){
            if(err) {
                console.error(err)
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            }
        })
    } else if (req.url.match(/\/goods\/([0-9]+)/) && req.method === 'GET') {
        id = req.url.split('/')[2]
        const singleitem = Good.findById(id, function (err, result) {
            if (err) {
                console.error(err)
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            }
        })
    } else if (req.url === '/goods' && req.method === 'POST') {
        var data = ""
        req.on('data', chunk => {
            data += chunk.toString();
        })
        req.on('end', () => {
            const good = new Good(JSON.parse(data))
            good.save().then(data => console.log(JSON.stringify(data))).catch(err => console.log(err))
            
            res.end('ok');
        });

    } else {
        res.end(JSON.stringify({ message: 'No Route' }));
    }
});
mongoose.connect('mongodb://db:27017/test', { useNewUrlParser: true, useUnifiedTopology: true }).then(res => server.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
})).catch(err => console.log(err));


