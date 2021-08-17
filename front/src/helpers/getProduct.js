export const getProduct = async (filter) => {
  const url =
    `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(filter)}&limit=4`;
  const response = await fetch(url);
  const resultsApi = await response.json();
  if (resultsApi.results.length > 0) {
    let addfilter = {
      id: 'filter1',
      name: filter.charAt(0).toUpperCase() + filter.slice(1)
    }
    let filters = [];
    const { results } = resultsApi;
    if (resultsApi.filters.length > 0) {
      const [{ values }] = resultsApi.filters;
      filters = [addfilter, ...values];
    }
    else {
      filters = [addfilter, ...filters]
    }
    const productResult = {
      categories: filters,
      items: results
    }
    return productResult;
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

