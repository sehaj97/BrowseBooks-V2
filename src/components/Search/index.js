import { useState, useEffect } from 'react';
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";

const DropDown = ({toggle, orderBy, onOrderByChange, sortBy, onSortByChange}) => {
    if(!toggle){
        return null
    }
    return (    <div className="origin-top-right absolute mt-2 w-56
    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <div onClick={()=> {onSortByChange('title')}} tabIndex='0'
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Book Name {(sortBy === 'title')&&<BiCheck />}</div>
      <div onClick={()=> {onSortByChange('first_publish_year')}} tabIndex='0'
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Date {(sortBy === 'first_publish_year')&&<BiCheck />}</div>
      <div onClick={()=> {onOrderByChange('asc')}} tabIndex='0'
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
        role="menuitem">Asc {(orderBy === 'asc')&&<BiCheck />}</div>
      <div onClick={()=> {onOrderByChange('desc')}} tabIndex='0'
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Desc {(orderBy === 'desc')&&<BiCheck />}</div>
    </div>
  </div>)
}

export const Search = ({setBooks,books,setErrorMessage,errorMessage, orderBy, onOrderByChange, sortBy, onSortByChange}) => {
  const [toggleSort, setToggleSort] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

    function handleChange(e) {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
          
        if (!errorMessage) {
          setSearch(e.target.value);
        }
      }
      
    function handleSubmit(e) {
        e.preventDefault();
        if (!search) {
          setErrorMessage(`input is required.`);
        } else {
          setErrorMessage('');
          setQuery(search);
        }
      }

  useEffect(() => {
    try {
      getData()
    } catch {
      setErrorMessage('something went wrong')
    }

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}&fields=title,author_name,isbn,first_publish_year`);
      const data = await response.json();
      if(data){
        // store the data into our books variable
        setBooks(data.docs) ;
      }
      
    }
  }, [query]);

    return(
        <div className="py-5 mx-2">
            <form onSubmit={handleSubmit} className="mt-1 flex rounded-md shadow-sm">
                <input type="text" name="query" id="query" onChange={handleChange} 
                className="pl-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border-gray-300" placeholder="Search" />
                
                    
                <button type="submit" 
                    className="px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2" id="options-menu" aria-haspopup="true" aria-expanded="true"><BiSearch/>
                </button>
                
            
                <div className="flex items-center">
                    <div>
                    <button type="button" onClick={()=>{setToggleSort(!toggleSort)}}
                        className="justify-center px-4 py-2 bg-teal-500 border-2 border-teal-500 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        Sort By <BiCaretDown className="ml-2" />
                    </button>
                    <DropDown toggle={toggleSort}
                              orderBy={orderBy} 
                              onOrderByChange={(sortVal) => onOrderByChange(sortVal)} 
                              sortBy={sortBy} 
                              onSortByChange={(sortVal) => onSortByChange(sortVal)}/>
                    </div>
                </div>
            </form>
        </div>
    )
}