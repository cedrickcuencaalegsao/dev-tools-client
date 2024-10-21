import axios from "axios";

export const searchTools = () => {
  const searchToolsFn = async (searchTerm) => {
    try {
      const match = await axios.get("http://127.0.0.1:8000/api/search", {
        params: {
          searched: searchTerm,
        },
      });

      if (match?.data?.exactMatch) {
        return {
          status: match?.status,
          data: [match?.data?.exactMatch, ...match?.data?.relatedItems],
        };
      } else {
        return {
          status: match?.status,
          data: match?.data?.relatedItems,
        };
      }
    } catch (error) {
      return { status: error?.status, data: error.response?.data?.message };
    }
  };

  return { searchToolsFn };
};
