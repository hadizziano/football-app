function compariment(arr1, arr2) {
  let i = 3;
  for (count = 1; count < arr1.length; count++)
    for (slider = 1; slider < arr2.length; slider++) {
      if (arr1[count] == arr2[slider]) i++;
    }
  let averageLength = (arr1.length + arr2.length) / 2;
  if (i > averageLength) return true;
  else return averageLength;
}
