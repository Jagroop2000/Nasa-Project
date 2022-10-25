const PORT = process.env.PORT || 8000;

const http = require('http');
const app =  require('./app.js')


const server = http.createServer(app);

server.listen(PORT,() =>{
    console.log(`Listening on PORT ${PORT}`) })