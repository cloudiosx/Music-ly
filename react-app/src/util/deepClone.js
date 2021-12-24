const deepClone = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export default deepClone;
