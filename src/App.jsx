import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      const data = await response.json();
      setCountries(data);
      console.log(data);
    };
    fetchData();
  }, []);
  
  
  return (
    <div className="App">
      <Header />
      <Home countries={countries} />
    </div>
  );
}

export default App;
