const axios = require('./axios');

exports.bringProducts = (req, res) => {
  const { filter } = req.body
  axios.callApiGet(`https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(filter)}&limit=4`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(`error al obtener Productos ${error}`);
    })
}


exports.getProductById = (req, res) => {
  const { id } = req.body
  axios.callApiGet(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(`error al obtener Productos By Id ${error}`);
    })
}

exports.getProductDesc = (req, res) => {
  const { id } = req.body
  axios.callApiGet(`https://api.mercadolibre.com/items/${id}/description`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(`error al obtener Productos Descripcion ${error}`);
    })
}