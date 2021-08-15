import { useEffect, useState } from "react";
import { getProduct } from "../helpers/getProduct";


export const useFetchProduct = (filter) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });
  useEffect(() => {
    getProduct(filter)
      .then(product => {
        setstate({
          data: product,
          loading: false
        })
      })
  }, [filter]);

  return state;
}