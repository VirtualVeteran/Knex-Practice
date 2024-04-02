const app = require('./src/app');

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Trying another port...`);
    server.listen(0); // Listen on any available port
  } else {
    console.error(error);
  }
});