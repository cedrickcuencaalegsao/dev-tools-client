import { InfoCard } from "../../components/ToolsInfoCard";

export const FavoritePage = () => {
  const mockup_fav = [2, 13, 34, 20, 23, 43]; //Mga id ni sa tools

  return (
    <div className="favorite-section">
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
          <div className="flex justify-end">{/* <InfoCard /> */}</div>
        </div>
      </div>
    </div>
  );
};
