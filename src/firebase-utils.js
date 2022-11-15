function transformToArray(data) {
  const toReturn = [];
  for (key in data) {
    const temp = {
      ...data[key],
      id: key,
    };
    toReturn.push(temp);
  }
  return toReturn;
}
