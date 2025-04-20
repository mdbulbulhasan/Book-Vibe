import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addtoDB";
import Book from "../../pages/Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);


  const [sort, setSort] = useState("");

  const handleSort = (type) => {
    setSort(type);
    if(type === "pages"){
        const sortedByPage = [...readList].sort((a,b) => a.totalPage - b.totalPage);
        setReadList(sortedByPage);
        console.log(sortedByPage);

    }
    if(type === "ratings"){
        // soto the boro
        // a - b
        // And
        // boro theke soto
        // b - a
        const sortedByRatings = [...readList].sort((a, b) =>b.rating - a.rating);
        setReadList(sortedByRatings);
        console.log(sortedByRatings);
    }
  }

  // Worst Case
  const data = useLoaderData();

  // For outside data fetching
  useEffect(() => {
    const storedBookData = getStoreBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  return (
    <div>
      <details className="dropdown ">
        <summary className="btn m-1">sort by: {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>My Wish List </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center border-2 w-1/6 mx-auto rounded bg-gray-300 font-bold">
            Book I Read {readList.length}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 h-3/4 mx-auto gap-6 my-5">
            {readList.map((readBook) => (
              <Book key={readBook.id} singleBook={readBook}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
