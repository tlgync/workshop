/* eslint-disable no-unreachable */
export const Fetch = (url, requestOptions) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
      return false;
    })
    .then((json) => json)
    .catch(() => false);
