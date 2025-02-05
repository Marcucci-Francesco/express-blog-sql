import express from 'express';
const app = express();
const port = 3000;

import blog from './routers/blog';
import errorsHandler from './middlewares/errorsHandler';
import notFound from './middlewares/notFound';



app.use(express.json());
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.send('HELLO')
});

app.use('/blog', blog);


app.use(errorsHandler);

app.use(notFound);


app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`);
});