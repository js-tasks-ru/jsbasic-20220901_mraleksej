function ucFirst(str) {
  // ваш код...
  if (str != '') {
    let strUpper = str[0].toUpperCase() + str.slice(1);
    return strUpper;
  } else {
    return str;
  }
}
