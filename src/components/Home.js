import React, { useState, useEffect } from "react";
import Card from "./Card";

const Home = () => {

  const [books, setBooks] = useState();
  const [searchedBooks, setSearchedBooks] = useState(); 
  const [myBooks, setMyBooks] = useState([])

  const addToBookshelf = (book) => {
    setMyBooks((prev) => [...prev, {id: Date.now(), ...book}])
  }

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${searchedBooks}&limit=10&page=1`,
          {
            method: "GET"
          }
        );
        const responseJson = await response.json();
        setBooks(responseJson);
      } catch (err) {
        console.log(err);
      }
    };

    getBooks();
  }, [searchedBooks]);

  useEffect(() => {
    const myBooks = JSON.parse(localStorage.getItem("myBooks"));

    if (myBooks && myBooks.length > 0) {
      setMyBooks(myBooks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("myBooks", JSON.stringify(myBooks))
  }, [myBooks])

  return (
    <div className="flex items-center flex-col mt-4">
      <h2>Search by Book Name:</h2>
      <div className="bg-white p-4 rounded-lg">
        <div className="relative bg-inherit">
          <input
            type="text"
            id="title"
            name="title"
            value={searchedBooks}
            onChange={(e) => setSearchedBooks(e.target.value)}
            className="peer bg-transparent h-10 w-72 rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            placeholder="Type inside me"
          />
          <label
            htmlFor="title"
            className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            Type title of the Book
          </label>
        </div>
      </div>
      <div className="gap-y-4 mx-2">
        {books?.docs?.map((book, index) => (
          <Card key={index} book={book} addToBookshelf={addToBookshelf} />
        )) }
      </div>
    </div>
  );
};

export default Home;
