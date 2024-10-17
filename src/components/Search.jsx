import { IoSearch } from "react-icons/io5";
export const Search = () => {
  return (
    <div className="wrapper search-container">
      <IoSearch className="icon" />
      <input
        type="text"
        placeholder="Search here..."
        // className="search-input"
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: "#000",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};
