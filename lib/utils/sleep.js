const sleep = (time, data) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
};

export default sleep;
