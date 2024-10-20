import { Search } from "../../components/Search";
import { InfoCard } from "../../components/ToolsInfoCard";
import { Suggestions } from "../../components/Suggestion";
import { Category } from "../../components/Category";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GetAllTools } from "../../hooks/useGetTools";

export const HomePage = () => {
  const [tools, set_tools] = useState([]);
  const { getAllToolsFn } = GetAllTools();

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
        <Search />
        <div className="suggestion-container">
          <Suggestions />
        </div>
        <Category />

        <div className="cards-container">
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
