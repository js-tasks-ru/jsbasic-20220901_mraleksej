function truncate(str, maxlength) {
  // ваш код...
  if (str.length >= maxlength) {
    return str.replace(str.slice(maxlength - 1, str.length),"…");
    }
  return str;
}
