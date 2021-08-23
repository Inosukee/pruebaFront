import { useEffect, useState } from "react";
import { getProduct, getProductByid, getProductDesc } from "../helpers/getProduct";


export const useFetchProduct = (filter) => {

  const [products, setProducts] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getProduct(filter)
      .then(product => {
        setProducts({
          data: product,
          loading: false
        })
      })
  }, [filter]);

  return products;
}


export const useFetchProductById = (id) => {

  const [product, setProduct] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getProductByid(id)
      .then(product => {
        setProduct({
          data: product,
          loading: false
        })
      })
  }, [id]);

  return product;
}


export const useFetchProductDesc = (id) => {

  const [productDesc, setProductDesc] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getProductDesc(id)
      .then(product => {
        setProductDesc({
          data: product,
          loading: false
        })
      })
  }, [id]);

  return productDesc;
}
