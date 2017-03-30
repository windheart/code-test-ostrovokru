function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

Function.prototype.curry = function curry() {
  var fn = this, acc = [].slice.call(arguments);
  var out = function() {
      var args = [].slice.call(arguments);
      if (args.length) [].push.apply(acc, args);
      if (acc.length < fn.length) return out;

      return fn.apply(null, acc);
  };

  return out();
};

function assert (a, b) {
  if (a !== b) {
    throw new Error();
  }
}
assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');
