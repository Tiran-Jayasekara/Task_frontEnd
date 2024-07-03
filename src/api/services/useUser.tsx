import { useState } from "react";
import { Axios } from "api/axios";

const useUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { http } = Axios();

  const loginUser = async (userInfo: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await http.post(
        `${process.env.REACT_APP_BASE_URL}user/login`,
        userInfo
      );
      if (response?.data) {
        return response.data;
      }
    } catch (err) {
      console.log("Error in Login User Part", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loginUser,
    loading,
    error,
    success,
  };
};

export { useUser };
