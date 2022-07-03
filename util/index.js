function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
};

function random(to, from=1) {
  Math.floor(Math.random() * to) + from
};

export { range, random };
