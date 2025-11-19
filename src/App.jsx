import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    // console.log(res.data);

    setUserData(res.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h1 className="text-gray-400 absolute top-1/2 left-1/2 font-bold text-2xl -translate-x-1/2 -translate-y-1/2">Loading...</h1>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="h-screen p-4 bg-black text-white overflow-auto">
      <div className="flex flex-wrap gap-3 mx-auto h-[80%]">{printUserData}</div>

      <div className=" flex justify-center items-center gap-4 mt-20">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([])
            }
          }}
          className="bg-amber-500 text-black font-bold px-4 py-2 rounded active:scale-95"
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([])
          }}
          className="bg-amber-500 text-black font-bold px-4 py-2 rounded active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
