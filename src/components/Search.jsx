import { IoSearch } from "react-icons/io5";
export const Search = () => {
  return (
    <div>
      <IoSearch className="icon" />
      <input
        type="text"
        placeholder="Search Recipe here..."
      />
    </div>
  );
};
