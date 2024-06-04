import React, { useContext } from "react";
import { data } from "../context/Context";
import MyBookCard from "../card/MyBookCard";

function MyBooks() {
  const { mybooks } = useContext(data);

  return (
    <>
      {mybooks.length !== 0 ? (
        <div className="grid grid-cols-4 gap-4 w-[100%] p-8 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
          {mybooks &&
            mybooks.map((book, index) => {
              return (
                <div key={index}>
                  <MyBookCard book={book} />
                </div>
              );
            })}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full mt-60">
          <div className="pt-2 pb-2 pr-6 pl-6 border rounded-2xl pt-2 pb-2 pr-4 pl-4 bg-green-300 ">
            Add books to your Shelf to start reading
          </div>
        </div>
      )}
    </>
  );
}

export default MyBooks;
