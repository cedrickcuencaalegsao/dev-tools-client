export const InfoCard = ({ data }) => {
  console.log(data);
  return (
    <div className="info-card w-[15rem] h-[10rem]">
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
