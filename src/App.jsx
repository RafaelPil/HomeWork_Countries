import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [countries, setCountries] = useState([]);
  const [sortASC, setSortASC] = useState(true);

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

  const sortBtn = () => {
    setSortAscending(!sortASC);
    setCountries(
      [...countries].sort((a, b) =>
        (sortASC ? a.name > b.name : a.name < b.name) ? 1 : -1
      )
    );
  };

  return (
    <div>
      <Header sortBtn={sortBtn} />
      <Home countries={countries} />
    </div>
  );
}

export default App;
