import { useEffect } from "react";
import { InfoCard } from "../../components/ToolsInfoCard";

export const FavoritePage = () => {
  // const favorite_fake = [2, 13, 34, 20, 23, 43];

  useEffect(() => {
    const favorites = localStorage.getItem("favorite");
    console.log(JSON.parse(favorites));
  });
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
