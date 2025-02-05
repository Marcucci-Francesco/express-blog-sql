import connectionController from '../data/db.js';

const index = (req, res) => {
  const sql = `SELECT * FROM posts`

  connectionController.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'query al database fallita' })
    res.json(results);
  })
};


const show = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM posts WHERE id = ?`;

  connectionController.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Post non trovato' });


    res.json(results)
  })

};


const store = (req, res) => {
  res.send('sono la store')
}

const update = (req, res) => {
  const id = req.params.id;
  res.send('sono la update')
}

const modify = (req, res) => {
  const id = req.params.id;
  res.send('sono la modify')
}

const destroy = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE * FROM posts WHERE id= ?`;

  connectionController.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Eliminazione della pizza non riuscita' });
    res.status(204);
  })
}


export {
  index,
  show,
  store,
  update,
  modify,
  destroy
};