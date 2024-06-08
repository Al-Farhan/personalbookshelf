import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Card = ({ book, addToBookshelf }) => {

  const [isMyBook, setIsMyBook] = useState(false);
  const [myBooks, setMyBooks] = useState(
    JSON.parse(localStorage.getItem("myBooks")) || []
  );

  const checkIfMyBook = () => {
    const storedBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
    const found = storedBooks.some(
      (storedBook) => storedBook.title === book.title
    );
    setIsMyBook(found);
  };

  const add = () => {
    const updatedBooks = [...myBooks, book];
    // localStorage.setItem("myBooks", JSON.stringify(updatedBooks))
    addToBookshelf(book);
    setMyBooks(updatedBooks);
    setIsMyBook(true);
  };

  useEffect(() => {
    checkIfMyBook();
  }, [myBooks, book]);

  return (
    <div className="my-2 relative md:mx-auto md:max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
      <div className="bg-white p-7 rounded-md">
        <h1 className="font-bold text-xl mb-2">{book.title}</h1>
        <p>Edition Count: {book.edition_count} </p>
        {!isMyBook && (
          <div className="mt-2" onClick={add}>
            <Button />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
