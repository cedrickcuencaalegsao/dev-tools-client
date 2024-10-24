import axios from "axios";

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
    <div
      className="info-card w-[15rem] h-[10rem]"
      onClick={() => openUrl(data.documentation_url)}
    >
      <div className="flex px-4">
        <div className="mt-2 w-44">
          <div className="title">{data?.name}</div>
          <div className="description">{data?.description}</div>
        </div>

        <figure className="mt-2 h-[150px] w-[80px]">
          <img
            src={`http://127.0.0.1:8000/api/images/${data?.image}`}
            alt="Logo"
          />
        </figure>
      </div>
    </div>
  );
};
