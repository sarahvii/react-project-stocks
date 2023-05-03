// db data

import { useState, useEffect } from 'react';
import './Search.css';

const symbolNames = [];

const FilteredSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/stocks/');
        const data = await response.json();
        setDatabase(data);
        console.log('Response:', data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // Fetch the data from the database
  //   fetch('http://localhost:9000/api/stocks/')
  //     .then(response => response.json())
  //     .then(data => setDatabase(data))
  //     .catch(error => console.error(error));
  // }, [database]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const filteredSymbols = database.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const symbols = filteredSymbols.map(({ symbol, name }) => [symbol, name]);
    console.log('Filtered symbols:', symbols);
    // Add the filtered symbols to the symbolNames array
    const newSymbolNames = symbolNames.concat(symbols);
    setSearchTerm('');
    console.log('New symbolNames:', newSymbolNames);
  };

  const filteredSymbols = Object.entries(database)
    .filter(([key, { name }]) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(([key, { symbol, name }]) => [symbol, name]);

  // const filteredSymbols = database.filter(({ name }) =>
  //   name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const filteredSymbols = symbolNames.filter(([symbol, name]) =>
  //   name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>FilteredSearchDB.js</h1>
      <p>Filter by company name:</p>

      {!showModal ? (
        <button type='button' onClick={handleShowModal}>
          Show List
        </button>
      ) : (
        <button type='button' onClick={handleCloseModal}>
          Close
        </button>
      )}
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <form onSubmit={handleSubmit}>
              <label>
                Filter by company name:
                <input
                  type='text'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </label>
              <button type='submit'>Search</button>
            </form>
            <ul>
              {filteredSymbols.map(([symbol, name]) => (
                <li key={symbol}>{`${name} (${symbol})`}</li>
              ))}
            </ul>
            <button type='button' onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilteredSearch;

// static data
// import { useState } from 'react';

// const symbolNames = [
//   ['AAPL', 'Apple Inc.'],
//   ['GOOGL', 'Alphabet Inc.'],
//   ['MSFT', 'Microsoft Corporation'],
//   ['META', 'Meta'],
//   ['AMZN', 'Amazon'],
//   ['NFLX', 'Netflix'],
// ];

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const handleSearchChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   // const handleSubmit = event => {
//   //   event.preventDefault();
//   //   console.log(`Submit with search term: ${searchTerm}`);
//   // };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const filteredSymbols = symbolNames.filter(([symbol, name]) =>
//       name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log('Filtered symbols:', filteredSymbols);
//   };

//     const filteredSymbols = symbolNames.filter(([symbol, name]) =>
//     name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>

//       <h2>This is the filtered search bar.</h2>

//       <p>Filter by company name:</p>

//       {!showModal ? (
//         <button type='button' onClick={handleShowModal}>
//           Show List
//         </button>
//       ) : (
//         <button type='button' onClick={handleCloseModal}>
//           Close
//         </button>
//       )}
//       {showModal && (
//         <div className='modal'>
//           <div className='modal-content'>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Filter by company name:
//                 <input
//                   type='text'
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//               </label>
//               <button type='submit'>Search</button>
//             </form>
//             <ul>
//               {filteredSymbols.map(([symbol, name]) => (
//                 <li key={symbol}>{`${name} (${symbol})`}</li>
//               ))}
//             </ul>
//             <button type='button' onClick={handleCloseModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

// import { useState } from 'react';

// basic
// const symbolNames = [
//   ['AAPL', 'Apple Inc.'],
//   ['GOOGL', 'Alphabet Inc.'],
//   ['MSFT', 'Microsoft Corporation'],
//   ['META', 'Meta'],
//   ['AAPL', 'Apple'],
//   ['AMZN', 'Amazon'],
//   ['NFLX', 'Netflix'],
// ];

// const FilteredSearch = () => {
//   const [searchSymbol, setSearchSymbol] = useState('');

//   const handleSearchChange = event => {
//     setSearchSymbol(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(`Search: ${searchSymbol}`);
//   };

//   const filteredSymbols = symbolNames.filter(([symbol, name]) =>
//     name.toLowerCase().includes(searchSymbol.toLowerCase())
//   );

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Filter by company name:
//           <input
//             type='text'
//             value={searchSymbol}
//             onChange={handleSearchChange}
//           />
//         </label>
//         <button type='submit'>Search</button>
//       </form>
//       <ul>
//         {filteredSymbols.map(([symbol, name]) => (
//           <li key={symbol}>{`${name} (${symbol})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FilteredSearch;
