const express = require('express');
const app = express();
const fs = require('fs');
// 开启Gzip
// const compression = require('compression')
// app.use(compression());
app.use(express.static('build'));
console.log(`process.env.PORT`, process.env.PORT)
const listener = app.listen(process.env.PORT || 8989, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
