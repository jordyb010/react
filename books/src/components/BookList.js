import { useState } from "react";
import React from "react";
import Book from "./Book";
import "./BookList.css";



const Booklist = () => {
const [searchInpute, setsearchInpute] = useState('')

  const [books, setBooks] = useState([
    {
      title: "lang levende liefde",
      author: "menno stoop",
      image: "./images/foto.png",
    },
    {
      title: "de grijze jager",
      author: "menno stoop",
      image: "./images/foto.png",
    },
    {
      title: "het leven van een loser",
      author: "menno stoop",
      image: "./images/foto.png",
    },
  ]);

  const handleChange = (e) => {
    // e.preventDefault();
    setsearchInpute(e.target.value);

    const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInpute.toLowerCase())
    
    );
    setBooks (filteredBooks)
  };

 

  return (
    <section className="container">
      <div className="search">
        <input  
        type='text'
        placeholder="zoek een title"
        onChange={handleChange}
        value={searchInpute}
        name="search"
        />
      </div>
      {books.map((book) => (
        <Book title={book.title} author={book.author} image={book.image} />
      ))}
    </section>
  );
};

export default Booklist;
