import {createServer} from 'http';

const server = createServer();
const port = 8080;

server.on('request', (request, response) => {
  const data = [];
  request
    .on('data', (chunk) => data.push(chunk))
    .on('end', () => {
      const body = Buffer.concat(data).toString();
      const payload = JSON.parse(body);

      if (typeof payload.number === 'number') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify({
          status: 'OK'
        }));
        response.end();
      } else {
        response.statusCode = 500;
        response.end();
      }
    });
});

server.listen(port, () => console.info(`Server listening on port "${port}".`));
