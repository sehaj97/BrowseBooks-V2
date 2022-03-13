
export const Card = ({book, index}) => {
    return(
          <li className="px-3 py-3 flex items-start bg-slate-200" key={book.title+index}>
          <div className="flex-grow">
            <div className="flex justify-center grid grid-cols-1 items-center">
              <div className="flex-none font-medium text-2xl text-blue-500">{book.title}</div><br />
              
              <img
                            src={book.isbn?`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`: require(`../../assets/images/nobook.jpg`)}
                            alt={book.title}
                            className="img-fit"
                            key={book.title + index}
                        />
              <div><b className="font-bold text-blue-500">Author:</b>  {book.author_name ? book.author_name[0]: 'no author name found'}</div>
              <span className="flex-grow"><b className="font-bold text-blue-500">Published On:</b> {book.first_publish_year}</span>
            </div>
          </div>
        </li>
    )
}