import { useEffect, useState } from "react";
import { InfoCard } from "../../components/ToolsInfoCard";
import { GetOneTool } from "../../hooks/useGetTools";

export const FavoritePage = () => {
  const { getOneToolFn } = GetOneTool();
  // const favorite_fake = [2, 13, 34, 20, 23, 43];
  const favorites = JSON.parse(localStorage.getItem("favorite"));

  const [favoriteTools, set_favoriteTools] = useState([]);

  const effectFn = async () => {
    const response = await getOneToolFn(favorites);
    set_favoriteTools(response);
  };

  useEffect(() => {
    effectFn();
  });
  return (
    <div className="favorite-section">
      <div className="lg:px-8 md:px-3">
        <div className="mb-[3.5rem]"></div>

        <div className="cards-container">
          {favoriteTools?.map((data) => {
            return (
              <div className="flex justify-end">
                <InfoCard data={data} isFavorite={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
