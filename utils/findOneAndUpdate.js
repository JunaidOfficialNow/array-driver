module.findOneAndUpdate = function(array, searchValue, updateValue) {
  const index = array.findIndex(value => value === searchValue);

  if (index === -1) {
    return array;
  }
  
  const updatedArray = [...array];
  updatedArray[index] = updateValue;
  return updatedArray;
}