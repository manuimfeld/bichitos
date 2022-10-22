const addFilters = (e, filters, setFilters) => {
  let newList = [...filters];

  if (!newList.includes(e)) {
    newList.push(e);
    setFilters(newList);
  } else {
    let index = newList.indexOf(e);
    setFilters(newList.filter((filter) => filter !== newList[index]));
  }
};

export default addFilters;
