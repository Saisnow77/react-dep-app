import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

  let [mydata, setData] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:6754/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div>
      <h1>Welcome to React Deployment</h1>

      {mydata.map((cv) => {
        return (
          <div key={cv.id}>
            <h1>Id: {cv.id}</h1>
            <h1>Name: {cv.title}</h1>
          </div>
        );
      })}
    </div>
  );
}