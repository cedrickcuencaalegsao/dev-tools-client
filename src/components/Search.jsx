import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setResult(null);

      const response = await axios.get("http://127.0.0.1:8000/api/search", {
        params: {
          searched: searchTerm,
        },
      });
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Invalid Search.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }

    console.log(result, error);
  };

  return (
    <div className="wrapper search-container">
      <IoSearch className="icon" style={{ margin: "0px 10px 0px 10px" }} />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            fontSize: "1em",
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            color: "#313131",
            borderRadius: "4px",
          }}
        />
      </form>
    </div>
  );
};
