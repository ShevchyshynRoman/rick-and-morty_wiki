import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick and Morty <span className="text-primary">WiKi</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>

          <div className="col-8">
            <div className="row">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
