export const customFetch = (url, method, json) => {
  if(!json) return fetch(url).then(res => res.json());

  return fetch(url, {
    method: method,
    body: JSON.stringify(json)
  })
    .then(res => res.json());
};
