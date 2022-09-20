function camelize(str) {
  // ваш код...
  let array1 = str.split('-');
  let array2 = array1.map(
    function(word, key) {
      if (key == 0) {
        return word
      }
      else {
        return (word[0].toUpperCase() + word.slice(1))
      }
    }
  );
  return array2.join('');
}
