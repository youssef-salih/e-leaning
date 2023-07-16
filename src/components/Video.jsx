import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Video = () => {
  const [data, setData] = useState([]);

  // const videoCollectionRef = collection(db, "videos");

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/df7d5be0-3c52-44e6-8c00-7aabfb54dbbc")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <div className="h-full flex  p-5 justify-center">
        <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
          {data.map((datas) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-3"
              key={datas.name}
            >
              <Card src={datas.url} name={datas.name} thumb={datas.thumb} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
