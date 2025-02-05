import connectionController from '../data/db';




const index = (req, res) => {
  res.send('sono la index')
};


const show = (req, res) => {
  const id = req.params.id;
  res.send('sono la show')
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
  res.send('sono la destroy')
}


export {
  index,
  show,
  store,
  update,
  modify,
  destroy
};