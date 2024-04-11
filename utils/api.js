import { NEXT_PUBLIC_API_URLS, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(`${NEXT_PUBLIC_API_URLS}${endpoint}`, options);
  const data = await res.json();

  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${NEXT_PUBLIC_API_URLS}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};
