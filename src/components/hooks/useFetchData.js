import { useEffect, useState } from "react";
import _httpService from "../../services/http";
import { getApiState } from "../../utils/helperFunctions";

export const useFetchData = (url, initialState, callInitially) => {
  const [data, setData] = useState(getApiState("IDLE"));
  const [shouldCallApi, setShouldCallApi] = useState(callInitially);

  const fetchData = () => {
    if (!url) return null;
    const fetchFunc = () =>
      _httpService.get(url, {
        params: initialState,
      });
    setData(getApiState("PENDING"));
    fetchFunc()
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setData(getApiState("SUCCESS", res?.data));
        } else {
          const errorMsg = "error while fetching data";
          setData(getApiState("FAILED", errorMsg));
        }
      })
      .catch((e) => {
        console.log("rv");
        const errorMsg = e;
        setData(getApiState("FAILED", errorMsg));
      });
  };

  useEffect(() => {
    if (!shouldCallApi) return;

    fetchData();
  }, [url, fetch, shouldCallApi]);

  return [data, fetchData, setShouldCallApi];
};
