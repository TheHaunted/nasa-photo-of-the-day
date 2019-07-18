import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import PhotoComponent from "./components/PhotoComponent.js";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=OXvnrGYi5ZH6ICO0ie6geuUkdmmKIxFE0gQJC9h0")
    .then(res => {
      console.log(res);
      setData(res.data)
    })
  }, []);

  return (
    <div className="App">
      <PhotoComponent title={data.title} url={data.url} explanation={data.explanation} />
    </div>
  );
}

export default App;
