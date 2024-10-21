import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

// Hooks
import { GetAllTools } from "../../hooks/useGetTools";
import { searchTools } from "../../hooks/useSearchTools";

// Components
import { InfoCard } from "../../components/ToolsInfoCard";
import { Suggestions } from "../../components/Suggestion";
import { Category } from "../../components/Category";

export const HomePage = () => {
  const { getAllToolsFn } = GetAllTools();
  const { searchToolsFn } = searchTools();

  const [tools, set_tools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchFormFn = async (e) => {
    e.preventDefault();

    const response = await searchToolsFn(searchTerm);
    if (response?.status === 200) {
      set_tools(response?.data);
    } else {
      set_tools(await getAllToolsFn());
    }
  };

  useQuery({
    queryKey: ["tools", "all"],
    queryFn: async () => {
      const data = await getAllToolsFn();
      set_tools(data);
    },
  });

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

        <div className="suggestion-container">
          <Suggestions />
        </div>
        <Category />

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
