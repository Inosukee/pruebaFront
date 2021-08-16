export const getProduct = async (filter) => {
  const url =
    `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(filter)}&limit=4`;
  const response = await fetch(url);
  const { results } = await response.json();
  if (results) {
    const products = results.map(product => {
      return {
        id: product.id,
        title: product.title,
        img: product.thumbnail,
        price: product.price
      }
    })
    return products;
  }

}


export const getProductByid = async (id) => {
  const url =
    `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  const productResponse = await response.json();
  return productResponse;
}


export const getProductDesc = async (id) => {
  const url =
    `https://api.mercadolibre.com/items/${id}/description`;
  const response = await fetch(url);
  const productResponse = await response.json();
  return productResponse;
}

