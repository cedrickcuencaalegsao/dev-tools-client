import axios from "axios";

export const GetAllTools = () => {
  const getAllToolsFn = async () => {
    try {
      const data = await axios.get("http://127.0.0.1:8000/api/tools");
      return data?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllToolsFn };
};
