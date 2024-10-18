import { Search } from "../../components/Search";
import { InfoCard } from "../../components/ToolsInfoCard";
import { Suggestions } from "../../components/Suggestion";
import { Category } from "../../components/Category";

export const HomePage = () => {
  return (
    <div className="homepage-section">
      <div className="lg:px-8 md:px-3">
        <Search />
        <div className="suggestion-container">
        <Suggestions />
        </div>
        <Category />

        <div className="cards-container">
          <div className="flex justify-end">
            <InfoCard />
          </div>

          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
          <div className="flex justify-end">
            <InfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};
