import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

export const InfoCard = ({ data }) => {
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
              <FaRegHeart
                className="favorite-btn"
                onClick={() => console.log("object")}
              />
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
