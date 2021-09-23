
const
  strKey = item => `${JSON.stringify(item)}(${typeof item})`,
  generateKey = args => args.map(strKey).join(','),
  memoize = (fn, length = 100) => {
    const cache = new Map();

    return (...args) => {
      const key = generateKey(args);

      return cache.has(key) ? cache.get(key) : (() => {
        const res = fn(...args);

        if (cache.size >= length) {
          const firstKey = cache.keys().next().value;

          cache.delete(firstKey);
        }
        cache.set(key, res);
        return res;
      })();
    };
  };

const
  fib = n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2)),
  fibMem = memoize(fib, 4);

console.log(fibMem(40));
console.log(fibMem(41));
console.log(fibMem(40));
console.log(fibMem(42));
console.log(fibMem(39));
console.log(fibMem(43));
console.log(fibMem(40));
