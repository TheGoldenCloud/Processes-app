const express = require('express');
const app = express();
const port = 4000;

app.get('/:id', (req, res) => {
  res.json({ "Persons id: ": req.params.id });
});


app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});