const reverse = (str) => {
  const arr = str.split('');
  const result = arr.map((char, i, arr) => arr[arr.length - 1 - i]).join('');

  return result;
};
const maxChar = (str) => {
  const arr = str.split('');
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }

  return count;
};
const output = maxChar('javascript');
console.log(output);
