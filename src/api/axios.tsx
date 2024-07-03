import axios from "axios";
import { useTokenStore } from "states/tokenStore";

const Axios = () => {
  const token = useTokenStore((state) => state.token);

  const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-type": "application/json",
      "x-auth-token": token,
    },
  });
  return {
    http,
  };
};

export { Axios };
