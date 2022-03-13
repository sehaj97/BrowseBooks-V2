
export const Card = ({book, index}) => {
    return(
          <li className="px-3 py-3 flex items-start bg-slate-200" key={book.title+index} role="navigation" tabIndex={0} aria-label={'information On book '+book.title}>
          <div className="flex-grow">
            <div className="flex justify-center grid grid-cols-1 items-center">
              <div className="flex-none font-medium text-2xl text-blue-500" tabIndex={0} aria-label={book.title}>{book.title}</div>
              <div tabIndex={0} aria-label= {book.author_name ? book.author_name[0]: 'no author name found'}><b className="font-bold text-blue-500">Author:</b>  {book.author_name ? book.author_name[0]: 'no author name found'}</div>
              <span className="flex-grow" tabIndex={0} aria-label={book.first_publish_year ? book.first_publish_year : 'no date found'}><b className="font-bold text-blue-500">Published On:</b> {book.first_publish_year}</span>
              
              <img src={book.isbn?`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`: require(`../../assets/images/nobook.jpg`)}
                    alt={'image Of book '+book.title}
                    className="img-fit"
                    key={book.title + index}
                    tabIndex={0}
              />
            </div>
          </div>
        </li>
    )
}