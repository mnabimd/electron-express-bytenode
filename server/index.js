const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
   res.send({ data: 'API' });
});

// You can also serve static files
const publicDir = path.join(__dirname, './server/public');
app.use(express.static(publicDir));

app.get(/.*/, (req, res) => res.sendFile(path.join(publicDir, 'index.html')));

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
// Export the following info for electron app
module.exports = {
   url: `http://localhost:${port}/`,
   port
};
