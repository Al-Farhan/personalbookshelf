import React, { useState } from "react";
import Card from "./Card";

const MyBookshelf = () => {

  const [myBooks, setMyBooks] = useState(JSON.parse(localStorage.getItem("myBooks")) || []);

  if (!myBooks && !myBooks?.length > 0) {
    return <h2 className="text-center mt-4 text-red-500">No books in you Bookshelf!</h2>
  }

  return (
    <div className="flex items-center flex-col mt-4 mx-2">
      <h2 className="font-semibold text-xl">My Bookshelf</h2>
      <div className="gap-y-4">
        {myBooks?.map((myBook, index) => (
          <Card key={index} book={myBook} />
        ))}
      </div>
    </div>
  );
};

export default MyBookshelf;
