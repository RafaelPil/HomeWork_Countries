import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardList from "./CardList";

function Home() {
  const [countries, setCountries] = useState([]);
  const [sortASC, setSortASC] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [resetCountrie, setResetCountrie] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

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
      // console.log(data);
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
        <>
          <CardList countries={currentCountries} />
          <ul className="pagination flex flex-wrap justify-center">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item m-2 mt-10">
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-slate-300 rounded-full px-2 py-0 text-blue-600"
                      : ""
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Home;
