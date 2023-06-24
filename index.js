const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
app.listen(port, (err) => {
    if (err) {
        console.log(`Server is running on port ${port}: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);

})