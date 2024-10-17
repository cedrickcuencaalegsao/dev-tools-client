import { Search } from "../../components/Search";
import { InfoCard } from "../../components/ToolsInfoCard";
import { Suggestions } from "../../components/Suggestion";

export const HomePage = () => {
  return (
    <div className="homepage-section">
      <div className="lg:px-8 md:px-3">
        <Search />
        <Suggestions />

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
