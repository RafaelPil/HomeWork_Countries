import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [countries, setCountries] = useState([]);
  const [sortASC, setSortASC] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [resetCountrie, setResetCountrie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      const data = await response.json();
      setCountries(data);
      setResetCountrie(data);
      setIsLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  const sortBtn = () => {
    setSortASC(!sortASC);
    setCountries(
      [...countries].sort((a, b) =>
        sortASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  };

  const filterByArea = () => {
    if (countries === resetCountrie) {
      setCountries(countries.filter((country) => country.area < 65300));
    } else {
      setCountries(resetCountrie);
    }
  };

  const filterByRegion = () => {
    if (countries === resetCountrie) {
      setCountries(countries.filter((country) => country.region === "Oceania"));
    } else {
      setCountries(resetCountrie);
    }
  };

  return (
    <div>
      <Header
        sortBtn={sortBtn}
        filterByArea={filterByArea}
        filterByRegion={filterByRegion}
      />
      {isLoading ? (
        <div className="flex justify-center">
          <h1 className="font-bold">Loading...</h1>
        </div>
      ) : (
        <Home countries={countries} />
      )}
    </div>
  );
}

export default App;
