function filterRange(arr, a, b) {
  // ваш код...
  //return arr.filter(item => (a <= item && item <= b));
  return arr.filter(
    function(key){
      if (a => key && key <= b) {
        return arr[key];
      }
    }
  )
}
