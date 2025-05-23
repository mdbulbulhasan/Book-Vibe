import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allbooks, setAllBooks] = useState([]);

  // No 1. Fetch data using useEffect
  // useEffect(() => {
  //     fetch('booksData.json').then(res => res.json()).then(data => {
  //         setAllBooks(data);
  //     })
  // }, [])

  // No-2: Load books data using promise, send this promise as a props and using use to use the data in that component
  //   const booksPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
