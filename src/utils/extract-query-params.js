export function extractQueryParams(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");
      const addSpace = value.replace("%20", " ");

      queryParams[key] = addSpace;

      return queryParams;
    }, {});
}
