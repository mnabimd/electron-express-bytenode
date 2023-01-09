const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// You can also serve static files but here I'll simply send Hello World
app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});

// Export the following info for electron app
module.exports = {
   url: `http://localhost:${port}/`,
   port
};
