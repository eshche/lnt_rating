const ret = (data, delay = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

const filterList = (list, filter) => {
  return list.filter((item) => {
    const diff = filter.keys().filter((key) => item[key] != filter[key]);
    if (diff.length > 0) {
      return false;
    }
    return true;
  });
};

module.exports = {
  ret,
  filterList,
};
