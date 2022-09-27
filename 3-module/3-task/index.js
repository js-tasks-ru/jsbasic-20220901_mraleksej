function camelize(str) {
  // ваш код...
  let array1 = str.split('-');
  let array2 = array1.map(
    (word, key) => key == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  return array2.join('');
}
