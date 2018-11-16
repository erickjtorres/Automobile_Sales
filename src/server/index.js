const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log('Products server listening on port 3000')
})