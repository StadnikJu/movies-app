import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { isErrorWithMessage } from "@/common/utils";
import { setErrorAC } from "@/common/slices/errorSlice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set(
      "Authorization",
      `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
    );
    return headers;
  },
});

export const baseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    switch(result.error.status) {
      case "TIMEOUT_ERROR": 
      case "FETCH_ERROR":
      case "CUSTOM_ERROR":
      case "PARSING_ERROR": 
        api.dispatch(setErrorAC(result.error.error));
        break
      case 404: 
        if(isErrorWithMessage(result.error.data)) {
          api.dispatch(setErrorAC(result.error.data.status_message));
        } else {
          api.dispatch(setErrorAC(JSON.stringify(result.error.data)));
        }
        break
      case 401: 
      case 403:
      case 429: 
        if(isErrorWithMessage(result.error.data)) {
          api.dispatch(setErrorAC(result.error.data.status_message));
        } else {
          api.dispatch(setErrorAC(JSON.stringify(result.error.data)));
        }
        break
      default: 
        api.dispatch(setErrorAC("Some error"));
    }
  }
  return result;
};
 