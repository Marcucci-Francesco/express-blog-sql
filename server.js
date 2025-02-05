const express = require('express');
const app = express();
const port = 3000;

const blog = require('./routers/blog');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');



app.use(express.json());



app.get('/', (req, res) => {
  res.send('HELLO')
});

app.use(errorsHandler);

app.use(notFound);


app.use('/blog', blog);




app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`);
});