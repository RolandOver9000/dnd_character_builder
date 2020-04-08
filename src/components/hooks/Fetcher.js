import { useState, useEffect } from "react";
import axios from "axios";

const useFetcher = (url, dependencies) => {
  const [data, setData] = useState(" ");

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results);
    });
  }, dependencies);
  return [data] ;

};
export default useFetcher;