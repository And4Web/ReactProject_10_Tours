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
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!tours.length) {
    return (
      <div>
        <h1>No Tours for today</h1>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
