import { useState } from 'react';
import React from 'react';
import Book from './Book';
import './BookList.css';

const Booklist = () => {
  const [books, setBooks] = useState([

    {
      title: 'lang levende liefde',
      author: 'menno stoop',
      image: './images/foto.png',
  },
  {
      title: 'de grijze jager',
      author: 'menno stoop',
      image: './images/foto.png',
  },
  {
      title:
       'het leven van een loser',
      author: 'menno stoop',
      image: './images/foto.png',
  },
  ]);
    return ( 
        <section className='container'>
          {books.map((book) =>(
            <Book title ={book.title} author={book.author} image={book.image}/>
          ))
          }
        </section>
     );
}
 
export default Booklist;