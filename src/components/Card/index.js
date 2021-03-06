import React from 'react';
const Card = ({book}) => {
    return( 
          <li className="px-3 py-3 flex items-start bg-slate-200" role="navigation" tabIndex={0} aria-label={book.title ? 'details on book '+book.title: 'no title found'}>
          <div className="flex-grow">
            <div className="flex justify-center grid grid-cols-1 items-center">
              <div className="flex-none font-medium text-2xl text-blue-500" tabIndex={0} aria-label={book.title ? book.title: 'no title found'}>{book.title ? book.title: 'no title found'}</div>
              <div tabIndex={0} aria-label= {book.author_name ? book.author_name[0]: 'no author name found'}><b className="font-bold text-blue-500">Author:</b>  {book.author_name ? book.author_name[0]: 'no author name found'}</div>
              <span className="flex-grow" tabIndex={0} aria-label={book.first_publish_year ? book.first_publish_year : 'no date found'}><b className="font-bold text-blue-500">Published On:</b> {book.first_publish_year ? book.first_publish_year : 'no date found'}</span>
              
              <img src={book.isbn?`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`: require(`../../assets/images/nobook.jpg`)}
                    alt={'image Of book '+book.title}
                    className="img-fit"
                    tabIndex={0}
              />
            </div>
          </div>
        </li>
    )
}

export default Card;