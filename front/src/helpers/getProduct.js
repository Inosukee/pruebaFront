const { REACT_APP_URL } = process.env

export const getProduct = async (filter) => {
  const url = `${REACT_APP_URL}/api/getProduct`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filter: filter })
  };
  const response = await fetch(url, requestOptions);
  const resultsApi = await response.json();
  console.log(resultsApi);
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
    `${REACT_APP_URL}/api/getProductById`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id })
  };
  const response = await fetch(url, requestOptions);
  const productResponse = await response.json();
  return productResponse;
}


export const getProductDesc = async (id) => {
  const url =
    `${REACT_APP_URL}/api/getProductDesc`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id })
  };
  const response = await fetch(url, requestOptions);
  const productResponse = await response.json();
  return productResponse;
}

