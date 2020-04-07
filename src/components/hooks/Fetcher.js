import { useState, useEffect } from "react";
import axios from "axios";
const Fetcher = (url, dependencies) => {
  const [data, setData] = useState(" ");

  useEffect((url, dependencies) => {
    axios.get(url).then((res) => {
      setData(res.data.results).then(console.log(data));
    });
  }, dependencies);
  
  return [data] ;

};
export default Fetcher;