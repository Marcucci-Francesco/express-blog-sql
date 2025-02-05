const express = require('express');
const app = express();
const port = 3000;

const routerPost = require('./routers/routerPost');



app.use(express.json());



app.get('/', (req, res) => {
  res.send('HELLO')
});

app.use('/blog', routerPost);




app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`);
});