const http = require('http');
const fs = require('fs');

// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
const server = http.createServer((req, res) => {
    // Read the comments.html file
    fs.readFile('/path/to/comments.html', 'utf8', (err, data) => {
        if (err) {
            // Handle error if the file cannot be read
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        // Set the response headers
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;

        // Send the file content to the client
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});