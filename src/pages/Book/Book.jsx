// import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({singleBook }) => {
  // const data = use(booksPromise);
  // console.log(data);
  // console.log(singleBook);
  const { bookId, bookName, author, image, rating, category, tags, yearOfPublishing } =
    singleBook;
  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl border p-6">
        <figure className="p-4 bg-gray-200 w-2/3 mx-auto">
          <img className="h-52 rounded-sm" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center gap-5">
            {tags.map((tag) => ( 
              <button className="btn">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="text-gray-900 text-xl">By: {author}</p>
          <div className="border border-gray-400 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
