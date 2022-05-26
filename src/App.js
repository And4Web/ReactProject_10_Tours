import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Tours tours={tours} />
    </div>
  );
}

export default App;
