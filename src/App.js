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
      const tours = await response.json();

      setLoading(false);
      setTours(tours);
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
