import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const InfoCard = ({ data, isFavorite }) => {
  const navigate = useNavigate();

  const updateClicks = async (args) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/tool/${args}/clickcount`
      );
      return response.data;
    } catch (error) {
      console.log(error.data);
    }
    return false;
  };

  const openUrl = async (url) => {
    const update = await updateClicks(data.id);
    if (update) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const removeFavoriteFn = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite = favorite.filter((data) => {
      return data !== id;
    });

    localStorage.setItem("favorite", JSON.stringify(favorite));
    navigate("/home/all");
  };

  const addFavoriteFn = (id) => {
    const favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite.includes(id)) {
      favorite.push(id);
      navigate("/home/favorites");
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
  };

  return (
    <div className="info-card w-[15rem] h-[10rem]">
      <div className="flex flex-wrap px-4">
        <div className="mt-2 h-[7rem] basis-8/12">
          <div className="title">{data?.name}</div>
          <div className="description">{data?.description}</div>
        </div>

        <figure className="mt-2 h-[7rem] basis-4/12">
          <img
            src={`http://127.0.0.1:8000/api/images/${data?.image}`}
            alt="Logo"
          />
        </figure>

        <div className="basis-full">
          <div className="wrapper">
            <div className="basis-6/12">
              {isFavorite ? (
                <FaHeart
                  className="favorite-btn"
                  onClick={() => removeFavoriteFn(data.id)}
                />
              ) : (
                <FaRegHeart
                  className="favorite-btn"
                  onClick={() => addFavoriteFn(data.id)}
                />
              )}
            </div>
            <div className="basis-6/12 text-end">
              <span
                className="visit-link"
                onClick={() => openUrl(data.documentation_url)}
              >
                Visit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
