import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import { getCardsData } from "./api/api";
import { Filters } from './components/Filters/Filters';
import { Cards } from './components/Cards/Cards';
import { Pagination } from './components/Pagination/Pagination';
import { Search } from './components/Search/Search';


const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function response() {
      try {
        const data = await getCardsData(pageNumber, search);

        setFetchedData(data);
      } catch {
        alert('Cant load cards data')
      }
    }

    response();
  }, [pageNumber, search])

  const { info, results } = fetchedData;
  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick and Morty <span className="text-primary">WiKi</span>
      </h1>

      <Search
        search={search}
        setSearch={setSearch}
        setPageNumber={setPageNumber}
      />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>

          <div className="col-8">
            <div className="row">
              {results && (
                <Cards
                  cardsData={results}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
