import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDb } from "../../utility/addtoDB";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
     
  const { id } = useParams();
  const bookId = parseInt(id);
  // console.log(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;
  //   console.log(singleBook);

  const handleMarkAsRead = (id) => {
    // Store with id
    // Where to store: apatoto in local storage
    // Which way to store: array or collection
    // if book already exist then show a alert
    // if book not exist the push in the collection or array
    // MySwal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    //   });
    toast("Wow so easy!");
    addToStoreDb(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <ToastContainer />
      <button
        onClick={() => {
          handleMarkAsRead(id);
        }}
        className="btn btn-accent"
      >
        Marked as Read
      </button>
      <button className="btn btn-info m-2">add to WishList</button>
    </div>
  );
};

export default BookDetails;
