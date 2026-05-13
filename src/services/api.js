const fetchData = (url, options = {}) => {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export default fetchData;
