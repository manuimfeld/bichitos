const addFilters = (key, value, filters, setFilters) => {
  let newObj = { ...filters };
  const values = newObj[key] || [];

  if (!values.includes(value)) {
    newObj[key] = [...values, value];
  } else {
    newObj[key] = values.filter((val) => val !== value);
  }

  setFilters(newObj);
};

export default addFilters;
