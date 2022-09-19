function namify(users) {
  // ваш код...
  let names = users.map(function(item) {
    return item.name;
  });
  return names;
}
