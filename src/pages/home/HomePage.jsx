import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

// Hooks
import { GetAllTools } from "../../hooks/useGetTools";
import { searchTools } from "../../hooks/useSearchTools";
// Components
import { InfoCard } from "../../components/ToolsInfoCard";

export const HomePage = () => {
  const { getAllToolsFn } = GetAllTools();
  const { searchToolsFn } = searchTools();

  const [tools, set_tools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestionClass, set_suggestionClass] = useState("hidden");
  const [suggestions, set_suggestions] = useState([]);
  const [filterStatus, set_filterStatus] = useState("getlatest");

  const handleSearchFormFn = async (e) => {
    e.preventDefault();

    const response = await searchToolsFn(searchTerm);
    if (response?.status === 200) {
      set_tools(response?.data);
      set_suggestions(response?.suggestion);
      set_suggestionClass("block");
    } else {
      set_tools(await getAllToolsFn(filterStatus));
      set_suggestionClass("hidden");
    }
  };

  const handleSuggestionFn = async (suggest) => {
    const response = await searchToolsFn(suggest);
    set_tools(response?.data)
  };

  const effectFn = async () => {
    const data = await getAllToolsFn(filterStatus);
    set_tools(data);
  };

  useEffect(() => {
    effectFn();
  }, [filterStatus]);

  return (
    <div className="homepage-section">
      <div className="lg:px-8 md:px-3">
        <div className="wrapper search-container">
          <IoSearch className="icon" style={{ margin: "0px 10px 0px 10px" }} />
          <form onSubmit={handleSearchFormFn}>
            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
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

        <div className={`suggestion-container ${suggestionClass}`}>
          <span>Suggestion</span>
          {suggestions.map((data) => {
            return (
              <button
                className="suggest-btn"
                onClick={() => handleSuggestionFn(data)}
              >
                {data}
              </button>
            );
          })}
        </div>

        <div className="wrapper mt-3 pr-4 justify-end">
          <select
            className="category-dropdown"
            onChange={(e) => set_filterStatus(e.target.value)}
          >
            <option value={"getlatest"}>Newest</option>
            <option value={"getoldest"}>Oldest</option>
            <option value={"getatoz"}>A-Z</option>
            <option value={"getztoa"}>Z-A</option>
          </select>
        </div>

        {tools?.length === 0 && (
          <div className="mt-4 text-[3rem] text-center font-semibold">
            Tool Not Found...
          </div>
        )}

        <div className="cards-container border">
          {tools.map((data) => {
            return (
              <div className="flex justify-end">
                <InfoCard data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
