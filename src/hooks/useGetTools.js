import axios from "axios";

export const GetAllTools = () => {
  const getAllToolsFn = async (sortStatus) => {
    try {
      const data = await axios.get(
        `http://127.0.0.1:8000/api/tools/${sortStatus}`
      );
      return data?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllToolsFn };
};

export const GetTrendingTools = () => {
  const getTrendingFn = async () => {
    try {
      const data = await axios.get("http://127.0.0.1:8000/api/trending");
      return data?.data?.data;
    } catch (error) {}
  };
  return { getTrendingFn };
};
