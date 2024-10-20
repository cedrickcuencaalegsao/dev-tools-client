import { Search } from "../../components/Search";
import { InfoCard } from "../../components/ToolsInfoCard";
import { Suggestions } from "../../components/Suggestion";
import { Category } from "../../components/Category";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const HomePage = () => {
  const [tools, set_tools] = useState([]);

  const getAllToolsFn = async () => {
    try {
      const data = await axios.get("http://127.0.0.1:8000/api/tools");
      set_tools(data?.data?.data);
    } catch (error) {}
  };

  useQuery({
    queryKey: ["tools", "all"],
    queryFn: getAllToolsFn,
  });

  return (
    <div className="homepage-section">
      <div className="lg:px-8 md:px-3">
        <Search />
        <div className="suggestion-container">
          <Suggestions />
        </div>
        <Category />

        <div className="cards-container">
          {tools.map((data) => {
            return (
              <div className="flex justify-end">
                <InfoCard data={data}/>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};
