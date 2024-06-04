import React, { useContext } from "react";
import { data } from "../context/Context";
import BookCard from "../card/BookCard";

function BookShelf() {
  const { bookdata, searchinput, setSearchinput } = useContext(data);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchinput(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center p-10">
        <input
          type="text"
          className="bg-[#D3D3D3] pt-2 pb-2 pl-4 pr-4 border border-[#000000] rounded-xl bg-opacity-10 text-[#00000]"
          placeholder="Get your book..."
          onChange={handleChange}
          value={searchinput}
        />
      </div>
      {searchinput ? (
        <div className="grid grid-cols-4 gap-4 w-[100%] p-8 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
          {bookdata &&
            bookdata.map((book, index) => {
              return (
                <div key={index}>
                  <BookCard book={book} />
                </div>
              );
            })}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-16">
          <button className="pt-2 pb-2 pr-6 pl-6 border rounded-2xl pt-2 pb-2 pr-4 pl-4 hover:shadow-2xl">
            Click on Home or All Books to view our Collection
          </button>
        </div>
      )}
    </>
  );
}

export default BookShelf;
