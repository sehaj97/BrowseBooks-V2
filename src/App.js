import { useState, useEffect } from 'react';
import { ImBooks } from "react-icons/im";
import { Card } from './components/Card';
import { Search } from "./components/Search";

function App() {
  const [books, setBooks] = useState(null);
  const [errorMessage, setErrorMessage] = useState('No Data Yet');
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  let filteredBooks = []
  if(books){
    filteredBooks = books.sort((itemA, itemB)=>{
    let order = (orderBy === "asc") ? 1 :-1;
    return(
      itemA[sortBy]<itemB[sortBy] ? -1*order:1*order
    )
  });
  }
  return (
    <div className="container bg-cyan-900 mx-auto mt-3 font-thin text-center">
      <h1 className="text-6xl text-white"><ImBooks className="inline-block text-red-500" />BrowseBooks</h1>
      <Search setBooks={setBooks} 
      books={filteredBooks} 
      setErrorMessage={setErrorMessage} 
      errorMessage={errorMessage} 
      orderBy={orderBy} 
      onOrderByChange={sortVal => {setOrderBy(sortVal)}} 
      sortBy={sortBy} 
      onSortByChange={sortVal => {setSortBy(sortVal)}}/><ul className='divide-y divide-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 content-end mx-3'>
       { books ?
         books.map((book, index)=>(
          <Card book={book} index={index}/>
         )) :
         <h1 className="text-3xl text-white">{errorMessage}</h1>
       }
     </ul>
    </div>
  );
}

export default App;
