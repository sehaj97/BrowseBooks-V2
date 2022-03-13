import { useState, useEffect } from 'react';
import { ImBooks } from "react-icons/im";
import { Card } from './components/Card';
import { Search } from "./components/Search";

function App() {
  const [books, setBooks] = useState(null);
  
  const [errorMessage, setErrorMessage] = useState('No Data Yet');
  return (
    <div className="container bg-cyan-900 mx-auto mt-3 font-thin text-center">
      <h1 className="text-3xl text-white"><ImBooks className="inline-block text-red-500" />BrowseBooks</h1>
      <Search setBooks={setBooks} setErrorMessage={setErrorMessage} errorMessage={errorMessage}/><ul className='divide-y divide-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 content-end mx-3'>
       { books ?
         books.docs.map((book, index)=>(
          <Card book={book} index={index}/>
         )) :
         <h1 className="text-3xl text-white">{errorMessage}</h1>
       }
     </ul>
    </div>
  );
}

export default App;
