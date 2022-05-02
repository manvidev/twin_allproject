import axios from "axios";
import React, { useEffect, useState } from "react";
export const FetchApi = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(res);
      setData(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data)
  return (
    <div>
      <img src={data} alt="" />
    </div>
  );
};
