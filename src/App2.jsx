// import { useState } from "react";
// import axios from "./axios";
import Counter from "./Counter/Counter";

const App2 = () => {
  // const [response, setResponse] = useState([]);

  // const fetchData = async () => {
  //   const result = axios.get("/list");
  //   setResponse(result.data);
  //   console.log(response);
  // };
  // fetchData();

  return (
    <div>
      <Counter></Counter>
      {/* {response.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))} */}
    </div>
  );
};

export default App2;
