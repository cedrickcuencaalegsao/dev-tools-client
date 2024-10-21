export const InfoCard = ({ data }) => {
  console.log(data)
  const openUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="info-card w-[15rem] h-[10rem]"
      onClick={() => openUrl(data.documentationURL)}
    >
      <div className="flex px-4">
        <div className="mt-2 w-44">
          <div className="title">{data?.name}</div>
          <div className="description">{data?.description}</div>
        </div>

        <figure className="mt-2 h-[150px] w-[80px]">
          <img
            src={`http://127.0.0.1:8000/api/images/${data?.image}`}
            alt="Movie"
          />
        </figure>
      </div>
    </div>
  );
};
