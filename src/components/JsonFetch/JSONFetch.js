import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JSONFetch = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("../dummydata.json");
    const dataRes = await response.json();
    setData(dataRes);
    console.log(data, "getDatasyncFunction");
  }

  useEffect(() => {
    getData();
    console.log(data, "useEffect");
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <p>In progress...</p>
    </div>
  );
};

export default JSONFetch;
