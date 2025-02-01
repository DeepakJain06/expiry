const http = require('http');
const server = express();

http.get('/', function (req, res){
    res.send('Welcome to my hotel ... How i')
})

