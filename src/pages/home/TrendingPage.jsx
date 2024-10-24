import { useEffect, useState } from "react";
import { InfoCard } from "../../components/ToolsInfoCard";
import { GetTrendingTools } from "../../hooks/useGetTools";

export const TrendingPage = () => {
  const { getTrendingFn } = GetTrendingTools();

  const [tools, set_tools] = useState([]);

  const effectFn = async () => {
    const response = await getTrendingFn();
    set_tools(response);
  };

  useEffect(() => {
    effectFn();
  }, []);

  return (
    <div className="trending-section">
      <div className="lg:px-8 md:px-3">
        <div className="wrapper mt-5 pr-4 justify-end">
          <select className="category-dropdown">
            <option selected>Newest</option>
            <option>Oldest</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </div>

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
