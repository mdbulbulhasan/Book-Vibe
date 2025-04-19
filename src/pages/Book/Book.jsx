import React, { use } from "react";

const Book = ({ booksPromise, singleBook }) => {
  // const data = use(booksPromise);
  // console.log(data);
  console.log(singleBook);
  const {bookName, author, image, rating, category} = singleBook;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="p-3">
        <img className="w-64 h-64 rounded-2xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {author}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
