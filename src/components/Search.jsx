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
          backgroundColor: 'transparent',
          border: '1px solid #ccc',
          color: '#000',
          padding: '8px',
          borderRadius: '4px'
        }}
      />
    </div>
  );
};
