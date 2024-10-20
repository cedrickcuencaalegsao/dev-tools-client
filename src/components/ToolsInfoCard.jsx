import { useNavigate } from "react-router-dom";

export const InfoCard = ({ data }) => {
  const openUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  console.log(data);
  return (
    <div
      className="tooltip tooltip-bottom info-card w-[15rem] h-[10rem]"
      onClick={() => openUrl(data.documentationURL)}
      data-tip={data?.documentationURL}
      data-for="custom-tooltip"
    >
      <div className="flex px-4">
        <div className="mt-2 w-44">
          <div className="title">{data?.name}</div>
          <div className="description">{data?.description}</div>
        </div>

        <figure className="mt-2 h-[150px] w-[80px]">
          <img src={require("../images/assets/card-photo.png")} alt="Movie" />
        </figure>
      </div>
    </div>
  );
};
