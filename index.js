const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});