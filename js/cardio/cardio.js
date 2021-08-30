const reverse = (str) => {
  const arr = str.split('');
  const result = arr.map((char, i, arr) => arr[arr.length - 1 - i]).join('');

  return result;
};

const output = reverse('oyinkan');
console.log(output);
