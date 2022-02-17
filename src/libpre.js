function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Set the mod for system to work
 * @param mod
 */
var setMod = function setMod(mod) {
  global.MOD_ = mod;
  global.MOD_CUT = 1099511627776 % mod;
};
/**
 * @param args
 * @returns The sum of arguments after taking mod division
 */


var add = function add() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = args.length - 1; i >= 1; i--) {
    args[0] += args[i];
    args[0] = args[0] >= global.MOD_ ? args[0] - global.MOD_ : args[0];
  }

  return args[0];
};
/**
 * @param a
 * @param b
 * @returns (a - b) % mod
 */


var sub = function sub(a, b) {
  a += global.MOD_ - b;
  return a >= global.MOD_ ? a - global.MOD_ : a;
};
/**
 * Source: https://atcoder.jp/users/catoon
 * @param args
 * @returns Mod product of the arguments
 */


var mul = function mul() {
  var res = arguments.length <= 0 ? undefined : arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    res = ((res >> 20) * ((i < 0 || arguments.length <= i ? undefined : arguments[i]) >> 20) * global.MOD_CUT + (res & 4293918720) * ((i < 0 || arguments.length <= i ? undefined : arguments[i]) & 1048575) + (res & 1048575) * (i < 0 || arguments.length <= i ? undefined : arguments[i])) % global.MOD_;
  }

  return res;
};
/**
 *
 * @param base
 * @param exponent
 * @returns Power in mod division
 */


var pow = function pow(base, exponent) {
  var res = 1;

  while (exponent) {
    if (exponent & 1) res = mul(res, base);
    base = mul(base, base);
    exponent >>>= 1;
  }

  return res;
};
/**
 *
 * @param x
 * @returns The inverse modular of x
 */


var inv = function inv(x) {
  var a = 1;

  for (var b = 0, y = global.MOD_, q; y; _ref = [a, b - q * a], b = _ref[0], a = _ref[1], _ref) {
    var _ref, _ref2;

    q = y / x | 0, (_ref2 = [x, y - q * x], y = _ref2[0], x = _ref2[1], _ref2);
  }

  return a < 0 ? a + global.MOD_ : a;
};

var min = function min(a, b) {
  return a < b ? a : b;
};

var max = function max(a, b) {
  return a > b ? a : b;
};

var gcd = function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
};

var maxElement = function maxElement(elem) {
  var res = elem[0],
      pos = 0;

  for (var i = 0; i < elem.length; i++) {
    if (elem[i] > res) {
      res = elem[i];
      pos = i;
    }
  }

  return {
    res: res,
    pos: pos
  };
};

var minElement = function minElement(elem) {
  var res = elem[0],
      pos = 0;

  for (var i = 0; i < elem.length; i++) {
    if (elem[i] < res) {
      res = elem[i];
      pos = i;
    }
  }

  return {
    res: res,
    pos: pos
  };
};

var sort = function sort(array, comparator) {
  if (comparator === void 0) {
    comparator = function comparator(a, b) {
      return a < b;
    };
  }

  array.sort(function (x, y) {
    return comparator(x, y) ? -1 : 1;
  });
};

var copy = function copy(from) {
  if (from == null || typeof from != 'object') return from;
  if (from.constructor != Object && from.constructor != Array) return from;
  if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function || from.constructor == String || from.constructor == Number || from.constructor == Boolean) return new from.constructor(from);
  var to = new from.constructor();

  for (var name in from) {
    to[name] = typeof to[name] == 'undefined' ? copy(from[name]) : to[name];
  }

  return to;
};

var array = function array(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length === 0) {
    throw new Error('Please insert integer dimensional values');
  }

  var recursionNonObject = function recursionNonObject(depth) {
    return depth === args.length - 1 ? Array(args[depth]).fill(value) : Array(args[depth]).fill(0).map(function () {
      return recursionNonObject(depth + 1);
    });
  };

  var recursionObject = function recursionObject(depth) {
    return depth === args.length ? copy(value) : Array(args[depth]).fill(0).map(function () {
      return recursionObject(depth + 1);
    });
  };

  return typeof value != 'object' ? recursionNonObject(0) : recursionObject(0);
};

var setGlobalBuiltin = function setGlobalBuiltin() {
  global.min = min;
  global.max = max;
  global.gcd = gcd;
  global.minElement = minElement;
  global.maxElement = maxElement;
  global.sort = sort;
  global.copy = copy; // Math

  global.sqrt = function (x) {
    return Math.sqrt(x);
  };

  global.ceil = function (x) {
    return Math.ceil(x);
  };

  global.floor = function (x) {
    return Math.floor(x);
  };

  global.log = function (x, y) {
    return Math.log(x, y);
  };

  global.abs = function (x) {
    return x < 0 ? -x : x;
  };

  global.popCount32 = function (n) {
    n = n - (n >> 1 & 0x55555555);
    n = (n & 0x33333333) + (n >> 2 & 0x33333333);
    return (n + (n >> 4) & 0xF0F0F0F) * 0x1010101 >> 24;
  };

  global.popCount = function (n) {
    var bits = 0;

    while (n !== 0) {
      bits += global.popCount32(n | 0);
      n /= 0x100000000;
    }

    return bits;
  }; // Modint


  global.setMod = setMod;
  global.add = add;
  global.sub = sub;
  global.mul = mul;
  global.pow = pow;
  global.inv = inv; // Extra utils

  global.array = array;

  global.clog = function () {
    var _console;

    return (_console = console).log.apply(_console, arguments);
  }; // CONSTANT


  global.INT_MAX = Number.MAX_SAFE_INTEGER;
  global.INT_MIN = Number.MIN_SAFE_INTEGER;
  global.PI = Math.PI; // Override

  var originalSort = Array.prototype.sort;

  Array.prototype.sort = function (comp) {
    if (comp === void 0) {
      comp = function comp(x, y) {
        return +x < +y;
      };
    }

    originalSort.call(this, function (x, y) {
      return comp(x, y) ? -1 : 1;
    });
  };
};

/**
 * This will process your file into OJ's format
 * @param {any} main - The main function
 * @param {string} inputDir - The directory of input
 */
var fs = /*#__PURE__*/require('fs');

var configPath = './compe.config.json';
function proc(main, inputDir) {
  global.MOD_ = 998244353;
  global.MOD_CUT = 444595123;
  setGlobalBuiltin();

  if (fs.existsSync(configPath)) {
    if (!inputDir.endsWith(".js")) {
      if (!fs.existsSync(inputDir)) {
        console.log('Input directory does not exist');
        return;
      }

      var data = fs.readFileSync(inputDir, {
        encoding: 'utf-8'
      });
      var dataIndex = 0;
      data = data.split(/ |\n|\r/g);
      var processedData = [];

      for (var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;) {
        var chunk = _step.value;
        if (chunk.length > 0) processedData.push(chunk);
      }

      global.rnum = function (num) {
        return num ? processedData.slice(dataIndex, dataIndex += num).map(function (a) {
          return +a;
        }) : +processedData[dataIndex++];
      };

      global.rstr = function (num) {
        return num ? processedData.slice(dataIndex, dataIndex += num) : processedData[dataIndex++];
      };

      global.rbig = function (num) {
        return num ? processedData.slice(dataIndex, dataIndex += num).map(function (a) {
          return BigInt(a);
        }) : BigInt(processedData[dataIndex++]);
      };

      global.print = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        for (var _i = 0, _args = args; _i < _args.length; _i++) {
          var printData = _args[_i];
          process.stdout.write(String(printData));
        }
      };
    } else {
      var rawData = fs.readFileSync(inputDir, {
        encoding: "utf-8"
      }).split('\n');
      var beginIndex = null,
          endIndex = null;

      for (var i = rawData.length - 1; i >= 0; i--) {
        if (rawData[i].startsWith("*/")) {
          endIndex = i;
          break;
        }
      }

      if (endIndex) {
        for (var _i2 = endIndex - 1; _i2 >= 0; _i2--) {
          if (rawData[_i2].startsWith("/*")) {
            beginIndex = _i2;
            break;
          }
        }
      }

      if (!beginIndex) {
        console.log("No input data at the end of file found");
        return;
      }

      var _data = rawData.slice(beginIndex + 1, endIndex).join("\n").split(/ |\n|\r/g);

      var _processedData = [];
      var _dataIndex = 0;

      for (var _iterator2 = _createForOfIteratorHelperLoose(_data), _step2; !(_step2 = _iterator2()).done;) {
        var _chunk = _step2.value;
        if (_chunk.length > 0) _processedData.push(_chunk);
      }

      global.rnum = function (num) {
        return num ? _processedData.slice(_dataIndex, _dataIndex += num).map(function (a) {
          return +a;
        }) : +_processedData[_dataIndex++];
      };

      global.rstr = function (num) {
        return num ? _processedData.slice(_dataIndex, _dataIndex += num) : _processedData[_dataIndex++];
      };

      global.rbig = function (num) {
        return num ? _processedData.slice(_dataIndex, _dataIndex += num).map(function (a) {
          return BigInt(a);
        }) : BigInt(_processedData[_dataIndex++]);
      };

      global.print = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        for (var _i3 = 0, _args2 = args; _i3 < _args2.length; _i3++) {
          var printData = _args2[_i3];
          process.stdout.write(String(printData));
        }
      };
    }

    main();
  } else {
    var _data2 = '';
    process.stdin.on('data', function (c) {
      _data2 += c;
    });
    process.stdin.on('end', function () {
      var dataIndex = 0;
      _data2 = _data2.split(/ |\n|\r/g);
      var processedData = [];

      for (var _iterator3 = _createForOfIteratorHelperLoose(_data2), _step3; !(_step3 = _iterator3()).done;) {
        var _chunk2 = _step3.value;
        if (_chunk2.length > 0) processedData.push(_chunk2);
      }

      global.rnum = function (num) {
        return num ? processedData.slice(dataIndex, dataIndex += num).map(function (a) {
          return +a;
        }) : +processedData[dataIndex++];
      };

      global.rstr = function (num) {
        return num ? processedData.slice(dataIndex, dataIndex += num) : processedData[dataIndex++];
      };

      global.rbig = function (num) {
        return num ? processedData.slice(dataIndex, dataIndex += num).map(function (a) {
          return BigInt(a);
        }) : BigInt(processedData[dataIndex++]);
      };

      var dataBuffer = '';

      global.print = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        for (var _i4 = 0, _args3 = args; _i4 < _args3.length; _i4++) {
          var printData = _args3[_i4];
          dataBuffer += String(printData);
        }
      };

      main();
      console.log(dataBuffer);
    });
  }
}

var PriorityQueue = /*#__PURE__*/function () {
  /**
   *
   * @param comparator The comparator between 2 elements that return true if the left one will be smaller than the right one. By default it is A < B, resulting in a PQ returning biggest element.
   */
  function PriorityQueue(comparator) {
    if (comparator) {
      this.comparator = comparator;
    } else {
      this.comparator = function (a, b) {
        return a < b;
      };
    }

    this.elem = [];
  }
  /**
   * @returns Size of the PriorityQueue.
   */


  var _proto = PriorityQueue.prototype;

  _proto.swap = function swap(indexLeft, indexRight) {
    var _ref = [this.elem[indexRight], this.elem[indexLeft]];
    this.elem[indexLeft] = _ref[0];
    this.elem[indexRight] = _ref[1];
  }
  /**
   *
   * @param newElem
   * @returns Push the new element to the PriorityQueue
   */
  ;

  _proto.push = function push(newElem) {
    var current = this.elem.push(newElem) - 1;
    var parent = 0;

    while (current > 0) {
      parent = current >> 1;

      if (this.comparator(this.elem[current], this.elem[parent])) {
        break;
      }

      this.swap(current, parent);
      current = parent;
    }

    return;
  }
  /**
   * Remove the highest element from the data structure.
   * @returns The highest element
   */
  ;

  _proto.pop = function pop() {
    var first = this.top;
    var last = this.elem.pop();
    var size = this.size;
    if (size == 0) return first;
    this.elem[0] = last;
    var current = 0;
    var largest = 0,
        left = 0,
        right = 0;

    while (current < size) {
      largest = current;
      left = (current << 1) + 1;
      right = (current << 1) + 2;

      if (left < size && !this.comparator(this.elem[left], this.elem[largest])) {
        largest = left;
      }

      if (right < size && !this.comparator(this.elem[right], this.elem[largest])) {
        largest = right;
      }

      if (largest == current) break;
      this.swap(largest, current);
      current = largest;
    }

    return first;
  };

  _createClass(PriorityQueue, [{
    key: "size",
    get: function get() {
      return this.elem.length;
    }
    /**
     * Return the biggest element.
     */

  }, {
    key: "top",
    get: function get() {
      if (this.elem.length == 0) {
        throw new Error('PriorityQueue is empty');
      } else {
        return this.elem[0];
      }
    }
  }]);

  return PriorityQueue;
}();

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

var Deque = /*#__PURE__*/function (_Symbol$iterator) {
  function Deque(values) {
    this.head = 0;
    this.tail = 0;
    this.mask = 1;
    this.list = new Array(2);
    if (values) this.extend(values);
  }

  var _proto = Deque.prototype;

  _proto.extend = function extend(values) {
    for (var _iterator = _createForOfIteratorHelperLoose(values), _step; !(_step = _iterator()).done;) {
      var value = _step.value;
      this.push(value);
    }

    return this;
  };

  _proto.extendFront = function extendFront(values) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(values), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      this.pushFront(value);
    }

    return this;
  }
  /**
   *
   * @returns Element at the front
   */
  ;

  _proto._resize = function _resize(size, length) {
    var head = this.head,
        mask = this.mask;
    this.head = 0;
    this.tail = size;
    this.mask = length - 1; // Optimize resize when list is already sorted.

    if (head === 0) {
      this.list.length = length;
      return;
    }

    var sorted = new Array(length);

    for (var i = 0; i < size; i++) {
      sorted[i] = this.list[head + i & mask];
    }

    this.list = sorted;
  }
  /**
   * Push element to the right / back
   * @param value
   * @returns
   */
  ;

  _proto.push = function push(value) {
    this.list[this.tail] = value;
    this.tail = this.tail + 1 & this.mask;
    if (this.head === this.tail) this._resize(this.list.length, this.list.length << 1);
    return this;
  }
  /**
   * Push element to the left / front
   * @param value
   * @returns
   */
  ;

  _proto.pushFront = function pushFront(value) {
    this.head = this.head - 1 & this.mask;
    this.list[this.head] = value;
    if (this.head === this.tail) this._resize(this.list.length, this.list.length << 1);
    return this;
  }
  /**
   * Clearing the deque
   */
  ;

  _proto.clear = function clear() {
    this.head = 0;
    this.tail = 0;
  }
  /**
   * @param index
   * @returns The value at index
   */
  ;

  _proto.at = function at(index) {
    var head = this.head,
        size = this.size,
        tail = this.tail,
        list = this.list;

    if ((index | 0) !== index || index >= size || index < -size) {
      throw new RangeError('deque index out of range');
    }

    var pos = (index >= 0 ? head : tail) + index & this.mask;
    return list[pos];
  }
  /**
   *
   * @param needle The value to search
   * @param start The index to start searching
   * @returns Index of the value to search
   */
  ;

  _proto.indexOf = function indexOf(needle, start) {
    if (start === void 0) {
      start = 0;
    }

    var head = this.head,
        list = this.list,
        size = this.size,
        mask = this.mask;
    var offset = start >= 0 ? start : start < -size ? 0 : size + start;

    for (var i = offset; i < size; i++) {
      if (list[head + i & mask] === needle) return i;
    }

    return -1;
  }
  /**
   *
   * @param needle
   * @returns Check if the deque has the value
   */
  ;

  _proto.has = function has(needle) {
    var head = this.head,
        list = this.list,
        size = this.size,
        mask = this.mask;

    for (var i = 0; i < size; i++) {
      if (list[head + i & mask] === needle) return true;
    }

    return false;
  }
  /**
   *
   * @param index
   * @param value
   * @returns Inserting the value at index
   */
  ;

  _proto.insert = function insert(index, value) {
    var pos = this.head + index & this.mask;
    var cur = this.tail; // Increase tail position by 1.

    this.tail = this.tail + 1 & this.mask; // Shift items forward 1 to make space for insert.

    while (cur !== pos) {
      var prev = cur - 1 & this.mask;
      this.list[cur] = this.list[prev];
      cur = prev;
    }

    this.list[pos] = value;
    if (this.head === this.tail) this._resize(this.list.length, this.list.length << 1);
    return this;
  }
  /**
   * Returns the size of the deque
   */
  ;

  /**
   * Pop back / right
   * @returns The rightmost element
   */
  _proto.pop = function pop() {
    if (this.head === this.tail) throw new RangeError('pop from an empty deque');
    this.tail = this.tail - 1 & this.mask;
    var value = this.list[this.tail];
    this.list[this.tail] = undefined;
    if (this.size < this.mask >>> 1) this._resize(this.size, this.list.length >>> 1);
    return value;
  }
  /**
   * Pop front / left
   * @returns The leftmost element
   */
  ;

  _proto.popFront = function popFront() {
    if (this.head === this.tail) throw new RangeError('pop from an empty deque');
    var value = this.list[this.head];
    this.list[this.head] = undefined;
    this.head = this.head + 1 & this.mask;
    if (this.size < this.mask >>> 1) this._resize(this.size, this.list.length >>> 1);
    return value;
  }
  /**
   *
   * @param index
   * @returns Delete element at index
   */
  ;

  _proto["delete"] = function _delete(index) {
    if (index >= this.size || index < 0) {
      throw new RangeError('deque index out of range');
    }

    var pos = this.head + index & this.mask;
    var cur = pos; // Shift items backward 1 to erase position.

    while (cur !== this.tail) {
      var next = cur + 1 & this.mask;
      this.list[cur] = this.list[next];
      cur = next;
    } // Decrease tail position by 1.


    this.tail = this.tail - 1 & this.mask;
    if (this.size < this.mask >>> 1) this._resize(this.size, this.list.length >>> 1);
    return this;
  }
  /**
   *
   * @returns The reversed deque
   */
  ;

  _proto.reverse = function reverse() {
    var head = this.head,
        tail = this.tail,
        size = this.size,
        mask = this.mask;

    for (var i = 0; i < ~~(size / 2); i++) {
      var a = tail - i - 1 & mask;
      var b = head + i & mask;
      var temp = this.list[a];
      this.list[a] = this.list[b];
      this.list[b] = temp;
    }

    return this;
  };

  _proto.rotate = function rotate(n) {
    if (n === void 0) {
      n = 1;
    }

    var head = this.head,
        tail = this.tail;
    if (n === 0 || head === tail) return this;
    this.head = head - n & this.mask;
    this.tail = tail - n & this.mask;

    if (n > 0) {
      for (var i = 1; i <= n; i++) {
        var a = head - i & this.mask;
        var b = tail - i & this.mask;
        this.list[a] = this.list[b];
        this.list[b] = undefined;
      }
    } else {
      for (var _i = 0; _i > n; _i--) {
        var _a = tail - _i & this.mask;

        var _b = head - _i & this.mask;

        this.list[_a] = this.list[_b];
        this.list[_b] = undefined;
      }
    }

    return this;
  };

  _proto.entries = /*#__PURE__*/runtime_1.mark(function entries() {
    var head, size, list, mask, i;
    return runtime_1.wrap(function entries$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            head = this.head, size = this.size, list = this.list, mask = this.mask;
            i = 0;

          case 2:
            if (!(i < size)) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return list[head + i & mask];

          case 5:
            i++;
            _context.next = 2;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, entries, this);
  });

  _proto.keys = function keys() {
    return this.entries();
  };

  _proto.values = function values() {
    return this.entries();
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _createClass(Deque, [{
    key: "front",
    get: function get() {
      if (this.size) return this.list[this.head];else throw new RangeError('deque index out of range');
    }
    /**
     *
     * @returns Element at the back
     */

  }, {
    key: "back",
    get: function get() {
      if (this.size) return this.list[this.tail - 1 & this.mask];else throw new RangeError('deque index out of range');
    }
  }, {
    key: "size",
    get: function get() {
      return this.tail - this.head & this.mask;
    }
  }]);

  return Deque;
}(Symbol.iterator);

/**
 *
 * @param value Cell value
 * @param args Dimensions of the array
 * @returns The multidimensional array
 */
var multi = function multi(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length === 0) {
    throw new Error('Please insert integer dimensional values');
  }

  var recursionNonObject = function recursionNonObject(depth) {
    return depth === args.length - 1 ? Array(args[depth]).fill(value) : Array(args[depth]).fill(0).map(function () {
      return recursionNonObject(depth + 1);
    });
  };

  var recursionArray = function recursionArray(depth) {
    return depth === args.length ? value.slice() : Array(args[depth]).fill(0).map(function () {
      return recursionArray(depth + 1);
    });
  };

  var recursionObject = function recursionObject(depth) {
    return depth === args.length ? Object.assign({}, value) : Array(args[depth]).fill(0).map(function () {
      return recursionObject(depth + 1);
    });
  };

  return typeof value != 'object' ? recursionNonObject(0) : Array.isArray(value) ? recursionArray(0) : recursionObject(0);
};

var DSU = /*#__PURE__*/function () {
  function DSU(size) {
    this.p = multi(-1, size + 1);
  }
  /**
   *
   * @param current
   * @returns The index of the leader of that current node's group
   */


  var _proto = DSU.prototype;

  _proto.group = function group(current) {
    if (this.p[current] < 0) {
      return current;
    } else {
      this.p[current] = this.group(this.p[current]);
      return this.p[current];
    }
  }
  /**
   *
   * @param a
   * @param b
   * @returns If node a and b successfully joined into the same group
   */
  ;

  _proto.join = function join(a, b) {
    a = this.group(a);
    b = this.group(b);

    if (a == b) {
      return false;
    }

    if (this.p[a] > this.p[b]) {
      var _ref = [b, a];
      a = _ref[0];
      b = _ref[1];
    }

    this.p[a] += this.p[b];
    this.p[b] = a;
    return true;
  }
  /**
   *
   * @param current
   * @returns The size of the current node's group
   */
  ;

  _proto.size = function size(current) {
    current = this.group(current);
    return -this.p[current];
  };

  return DSU;
}();

var FenwickTree = /*#__PURE__*/function () {
  /**
   *
   * @param elemCount The number of elements that the tree supports
   * @param identityValue The null value regarding the operation
   * @param updateMethod The combination function of node
   */
  function FenwickTree(elemCount, identityValue, updateMethod) {
    if (identityValue === void 0) {
      identityValue = 0;
    }

    if (updateMethod === void 0) {
      updateMethod = function updateMethod(a, b) {
        return a + b;
      };
    }

    this.identityValue = identityValue;
    this.updateMethod = updateMethod;
    this.elemCount = elemCount;
    this.cont = Array(elemCount + 1).fill(identityValue);
  }

  var _proto = FenwickTree.prototype;

  _proto.query = function query(index) {
    var res = this.identityValue;

    for (; index >= 0; index = (index & index + 1) - 1) {
      res = this.updateMethod(res, this.cont[index]);
    }

    return res;
  };

  _proto.update = function update(index, delta) {
    for (; index <= this.elemCount; index |= index + 1) {
      this.cont[index] = this.updateMethod(this.cont[index], delta);
    }
  };

  return FenwickTree;
}();

var SparseTable = /*#__PURE__*/function () {
  /**
   *
   * @param initValue The array of init value at positions (0-indexed)
   * @param merger The combinator function, must be idempotent, by default it is min function
   */
  function SparseTable(initValue, merger) {
    var _this = this;

    if (merger === void 0) {
      merger = function merger(a, b) {
        return a < b ? a : b;
      };
    }

    this.maxGap = 0;
    var elemCount = initValue.length;
    this.logFactor = this.floorLog2(elemCount);
    this.merger = merger;
    this.cont = Array(elemCount).fill(0).map(function () {
      return Array(_this.logFactor + 1);
    });

    for (var i = 0; i < elemCount; i++) {
      this.cont[i][0] = initValue[i];
    }

    for (var j = 1; j <= this.logFactor; j++) {
      for (var _i = 0; _i + (1 << j) - 1 < elemCount; _i++) {
        this.cont[_i][j] = merger(this.cont[_i][j - 1], this.cont[_i + (1 << j - 1)][j - 1]);
      }
    }
  }

  var _proto = SparseTable.prototype;

  _proto.floorLog2 = function floorLog2(x) {
    return 31 - Math.clz32(x);
  }
  /**
   *
   * @param leftBound
   * @param rightBound
   * @returns Return the query on [leftBound, rightBound]
   */
  ;

  _proto.query = function query(leftBound, rightBound) {
    this.maxGap = this.floorLog2(rightBound - leftBound + 1);
    return this.merger(this.cont[leftBound][this.maxGap], this.cont[rightBound - (1 << this.maxGap) + 1][this.maxGap]);
  };

  return SparseTable;
}();

var SegmentTree = /*#__PURE__*/function () {
  /**
   *
   * @param elemCount Number of elements
   * @param identityValue The identity value of merge operation
   * @param merger Merging operation
   * @param initValue The initial value of the tree, can be left blank to initialize as all identity value
   */
  function SegmentTree(elemCount, identityValue, merger, initValue) {
    if (initValue === void 0) {
      initValue = null;
    }

    this.identityValue = identityValue;
    this.merger = merger;
    this.elemCount = elemCount;
    this.log = Math.ceil(Math.log2(elemCount));
    this.size = 1 << this.log;
    this.cont = Array(elemCount << 1).fill(this.identityValue);

    if (initValue) {
      for (var i = 0; i < elemCount; i++) {
        this.cont[this.size + i] = initValue[i];
      }

      for (var _i = this.size - 1; _i >= 1; _i--) {
        this.internalUpdate(_i);
      }
    }
  }

  var _proto = SegmentTree.prototype;

  _proto.internalUpdate = function internalUpdate(index) {
    this.cont[index] = this.merger(this.cont[index << 1], this.cont[index << 1 | 1]);
  }
  /**
   * Set element at position index with value (not updating with that value through merger)
   * @param index
   * @param value
   */
  ;

  _proto.set = function set(index, value) {
    index += this.size;
    this.cont[index] = value;

    for (var i = 1; i <= this.log; i++) {
      this.internalUpdate(index >> i);
    }
  }
  /**
   *
   * @param index
   * @returns Return element at index if a number is the argument, else if blank will return the whole array
   */
  ;

  _proto.get = function get(index) {
    if (index) return this.cont[index + this.size];else return this.cont.slice(this.size, this.size + this.elemCount);
  }
  /**
   *
   * @param left
   * @param right
   * @returns The operation on the range [left, right]
   */
  ;

  _proto.query = function query(left, right) {
    if (left === void 0) {
      left = 0;
    }

    if (right === void 0) {
      right = this.elemCount - 1;
    }

    right++;
    var sumLeft = this.identityValue,
        sumRight = this.identityValue;
    left += this.size;
    right += this.size;

    while (left < right) {
      if (left & 1) sumLeft = this.merger(sumLeft, this.cont[left++]);
      if (right & 1) sumRight = this.merger(this.cont[--right], sumRight);
      left >>= 1;
      right >>= 1;
    }

    return this.merger(sumLeft, sumRight);
  }
  /**
   *
   * @returns The operation applied on the whole array
   */
  ;

  _proto.all = function all() {
    return this.cont[1];
  };

  return SegmentTree;
}();

var LazySegmentTree = /*#__PURE__*/function () {
  /**
   *
   * @param elemCount
   * @param identityValue The identity value of node
   * @param merger Merge function of 2 nodes values
   * @param identityLazy The identity value of lazy
   * @param pusher Function that apply the lazy value from parent to its child
   * @param modifier Function that takes in the node value and lazy value, returns the new node value
   * @param initValue An array of value for initialization
   */
  function LazySegmentTree(elemCount, identityValue, merger, identityLazy, pusher, modifier, initValue) {
    if (initValue === void 0) {
      initValue = null;
    }

    this.identityValue = identityValue;
    this.merger = merger;
    this.identityLazy = identityLazy;
    this.pusher = pusher;
    this.modifier = modifier;
    this.log = Math.ceil(Math.log2(elemCount));
    this.size = 1 << this.log;
    this.cont = Array(this.size << 1).fill(this.identityValue);
    this.lazyCont = Array(this.size).fill(identityLazy);

    if (initValue) {
      for (var i = 0; i < elemCount; i++) {
        this.cont[this.size + i] = initValue[i];
      }

      for (var _i = this.size - 1; _i >= 1; _i--) {
        this.internalUpdate(_i);
      }
    }
  }

  var _proto = LazySegmentTree.prototype;

  _proto.internalUpdate = function internalUpdate(index) {
    this.cont[index] = this.merger(this.cont[index << 1], this.cont[index << 1 | 1]);
  };

  _proto.internalModify = function internalModify(index, delta) {
    if (delta === this.identityLazy) return;
    this.cont[index] = this.modifier(this.cont[index], delta);
    if (index < this.size) this.lazyCont[index] = this.pusher(this.lazyCont[index], delta);
  };

  _proto.internalPush = function internalPush(index) {
    if (this.lazyCont[index] === this.identityLazy) return;
    this.internalModify(index << 1, this.lazyCont[index]);
    this.internalModify(index << 1 | 1, this.lazyCont[index]);
    this.lazyCont[index] = this.identityLazy;
  }
  /**
   * Set value at index to new value
   * @param index
   * @param value
   */
  ;

  _proto.set = function set(index, value) {
    index += this.size;

    for (var i = this.log; i >= 1; i--) {
      this.internalPush(index >> i);
    }

    this.cont[index] = value;

    for (var _i2 = 1; _i2 <= this.log; _i2++) {
      this.internalUpdate(index >> _i2);
    }
  }
  /**
   *
   * @param index
   * @returns Value at index
   */
  ;

  _proto.get = function get(index) {
    index += this.size;

    for (var i = this.log; i >= 1; i--) {
      this.internalPush(index >> i);
    }

    return this.cont[index];
  }
  /**
   *
   * @param left
   * @param right
   * @returns Return the range query in [left, right] range
   */
  ;

  _proto.query = function query(left, right) {
    right++;
    left += this.size;
    right += this.size;

    for (var i = this.log; i >= 1; i--) {
      if (left >> i << i != left) this.internalPush(left >> i);
      if (right >> i << i != right) this.internalPush(right - 1 >> i);
    }

    var sumLeft = this.identityValue;
    var sumRight = this.identityValue;

    while (left < right) {
      if (left & 1) sumLeft = this.merger(sumLeft, this.cont[left++]);
      if (right & 1) sumRight = this.merger(this.cont[--right], sumRight);
      left >>= 1;
      right >>= 1;
    }

    return this.merger(sumLeft, sumRight);
  }
  /**
   *
   * @returns The query on [0, elemCount - 1]
   */
  ;

  _proto.all = function all() {
    return this.cont[1];
  }
  /**
   * Update the range query on [left, right] with delta to modify
   * @param left
   * @param right
   * @param delta
   */
  ;

  _proto.update = function update(left, right, delta) {
    right++;
    left += this.size;
    right += this.size;

    for (var i = this.log; i >= 1; i--) {
      if (left >> i << i != left) this.internalPush(left >> i);
      if (right >> i << i != right) this.internalPush(right - 1 >> i);
    }

    var tempLeft = left,
        tempRight = right;

    while (left < right) {
      if (left & 1) this.internalModify(left++, delta);
      if (right & 1) this.internalModify(--right, delta);
      left >>= 1;
      right >>= 1;
    }

    left = tempLeft;
    right = tempRight;

    for (var _i3 = 1; _i3 <= this.log; _i3++) {
      if (left >> _i3 << _i3 != left) this.internalUpdate(left >> _i3);
      if (right >> _i3 << _i3 != right) this.internalUpdate(right - 1 >> _i3);
    }
  };

  return LazySegmentTree;
}();

var defaultComparator = function defaultComparator(a, b) {
  return a < b;
};
/**
 * Performs lowerBound search on a sorted array range, returns the leftmost position that has the value >= searchValue
 * @param arr
 * @param searchValue
 * @param leftIndex
 * @param rightIndex
 * @param comparator Takes in 2 numbers, returns true if the left one is strictly smaller than the right one. For example, the default comparator is (a, b) => a < b.
 * @returns
 */


var lowerBound = function lowerBound(arr, searchValue, leftIndex, rightIndex, comparator) {
  if (leftIndex === void 0) {
    leftIndex = 0;
  }

  if (rightIndex === void 0) {
    rightIndex = 0;
  }

  if (comparator === void 0) {
    comparator = defaultComparator;
  }

  if (!rightIndex) {
    rightIndex = arr.length;
  }

  var mid;

  while (leftIndex < rightIndex) {
    mid = leftIndex + (rightIndex - leftIndex >>> 1);

    if (comparator(arr[mid], searchValue)) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid;
    }
  }

  return leftIndex;
};
/**
 * Performs upperBound search on a sorted array range, returns the leftmost position that has the value > searchValue
 * @param arr
 * @param searchValue
 * @param leftIndex
 * @param rightIndex
 * @param comparator Takes in 2 numbers, returns true if the left one is strictly smaller than the right one. For example, the default comparator is (a, b) => a < b.
 * @returns
 */


var upperBound = function upperBound(arr, searchValue, leftIndex, rightIndex, comparator) {
  if (leftIndex === void 0) {
    leftIndex = 0;
  }

  if (rightIndex === void 0) {
    rightIndex = 0;
  }

  if (comparator === void 0) {
    comparator = defaultComparator;
  }

  if (!rightIndex) {
    rightIndex = arr.length;
  }

  var mid;

  while (leftIndex < rightIndex) {
    mid = leftIndex + (rightIndex - leftIndex >>> 1);

    if (comparator(searchValue, arr[mid])) {
      rightIndex = mid;
    } else {
      leftIndex = mid + 1;
    }
  }

  return leftIndex;
};
/**
 * Performs binary search on an index range of a function. Supposed that the function will return false then true based on the increasing index. Returns null if the whole range is false.
 * @param leftBound
 * @param rightBound
 * @param fn The function to be evaluate
 * @returns The first position where the function returns true
 */


var binarySearch = function binarySearch(leftBound, rightBound, fn) {
  var mid,
      answer = null;

  while (leftBound <= rightBound) {
    mid = leftBound + rightBound >> 1;

    if (fn(mid)) {
      answer = mid;
      rightBound = mid - 1;
    } else {
      leftBound = mid + 1;
    }
  }

  return answer;
};

/**
 * Performs ternary search on maxima / minima on a convex function
 * @param leftBound
 * @param rightBound
 * @param fn
 * @param maxima True if search for maxima, false for minima
 * @param iter The number of iterations of division
 * @returns The maximum / minimum value
 */
var ternarySearch = function ternarySearch(leftBound, rightBound, fn, maxima, iter) {
  if (maxima === void 0) {
    maxima = false;
  }

  if (iter === void 0) {
    iter = 200;
  }

  var ll, rr;

  if (maxima) {
    while (iter--) {
      ll = leftBound + (rightBound - leftBound) / 3;
      rr = rightBound - (rightBound - leftBound) / 3;

      if (fn(ll) < fn(rr)) {
        leftBound = ll;
      } else {
        rightBound = rr;
      }
    }
  } else {
    while (iter--) {
      ll = leftBound + (rightBound - leftBound) / 3;
      rr = rightBound - (rightBound - leftBound) / 3;

      if (fn(rr) < fn(ll)) {
        leftBound = ll;
      } else {
        rightBound = rr;
      }
    }
  }

  return fn(ll);
};
/**
 * Find integral extremum of a function
 * @param leftBound
 * @param rightBound
 * @param fn
 * @param maxima True if search for maxima, false for minima
 * @returns The maximum / minimum value
 */


var integralExtremumSearch = function integralExtremumSearch(leftBound, rightBound, fn, maxima) {
  if (maxima === void 0) {
    maxima = false;
  }

  if (maxima) {
    var answer = fn(leftBound);
    leftBound++;
    var mid, fnmid;

    while (leftBound <= rightBound) {
      mid = leftBound + rightBound >> 1;
      fnmid = fn(mid);

      if (fn(mid - 1) < fnmid) {
        answer = fnmid;
        leftBound = mid + 1;
      } else {
        rightBound = mid - 1;
      }
    }

    return answer;
  } else {
    var _answer = fn(leftBound);

    leftBound++;

    var _mid, _fnmid;

    while (leftBound <= rightBound) {
      _mid = leftBound + rightBound >> 1;
      _fnmid = fn(_mid);

      if (fn(_mid - 1) > _fnmid) {
        _answer = _fnmid;
        leftBound = _mid + 1;
      } else {
        rightBound = _mid - 1;
      }
    }

    return _answer;
  }
};

/**
 * Graph class, with:
 *    g as adjacency list
 *    vis as visited state
 *    par as parent list
 */

var Graph = /*#__PURE__*/function () {
  function Graph(vertices) {
    this.g = multi([], vertices + 1);
    this.vis = multi(false, vertices + 1);
    this.par = multi(-1, vertices + 1);
  }
  /**
   * Add one way edge
   * @param from
   * @param to
   * @param prop Object of properties of the edge, such as {weight}
   */


  var _proto = Graph.prototype;

  _proto.addEdge = function addEdge(from, to, prop) {
    this.g[from].push({
      to: to,
      prop: prop
    });
  }
  /**
   * Add two way edge
   * @param from
   * @param to
   * @param prop Object of properties of the edge, such as {weight}
   */
  ;

  _proto.addBiEdge = function addBiEdge(from, to, prop) {
    this.addEdge(from, to, prop);
    this.addEdge(to, from, prop);
  }
  /**
   * Reset visit state and parent state of the graph
   */
  ;

  _proto.reset = function reset() {
    this.vis = multi(false, this.g.length);
    this.par = multi(-1, this.g.length);
  };

  return Graph;
}();

/**
 * Process the DFS on the graph
 * @param graph
 * @param source Source node
 * @param preFn The function to process before propagating from the node
 * @param postFn The function to process after propagating from the node
 */

var dfs = function dfs(graph, source, preFn, postFn) {
  var stack = new Deque();
  stack.push(source);

  while (stack.size) {
    var u = stack.back;

    if (!graph.vis[u]) {
      graph.vis[u] = true;
      preFn(u, graph);

      for (var _iterator = _createForOfIteratorHelperLoose(graph.g[u]), _step; !(_step = _iterator()).done;) {
        var edge = _step.value;

        if (!graph.vis[edge.to]) {
          graph.par[edge.to] = u;
          stack.push(edge.to);
        }
      }
    } else {
      postFn(u, graph);
      stack.pop();
    }
  }
};

/**
 * Process the BFS on the graph
 * @param graph
 * @param any Source node / array of source nodes
 * @param preFn The function to process before propagating from the node
 */

var bfs = function bfs(graph, source, preFn) {
  var stack = new Deque();
  stack.push(source);

  if (Array.isArray(source)) {
    for (var _iterator = _createForOfIteratorHelperLoose(source), _step; !(_step = _iterator()).done;) {
      var node = _step.value;
      graph.vis[node] = true;
      stack.push(node);
    }
  } else {
    graph.vis[source] = true;
    stack.push(source);
  }

  while (stack.size) {
    var u = stack.pop();
    preFn(u, graph);

    for (var _iterator2 = _createForOfIteratorHelperLoose(graph.g[u]), _step2; !(_step2 = _iterator2()).done;) {
      var edge = _step2.value;

      if (!graph.vis[edge.to]) {
        graph.par[edge.to] = u;
        stack.push(edge.to);
        graph.vis[edge.to] = true;
      }
    }
  }
};

var mst = function mst(graph) {
  var mst = 0;
  var edges = [];
  var mstEdges = [];

  for (var i = 0; i < graph.g.length; i++) {
    for (var _iterator = _createForOfIteratorHelperLoose(graph.g[i]), _step; !(_step = _iterator()).done;) {
      var edge = _step.value;

      if (i < edge.to) {
        edges.push({
          from: i,
          to: edge.to,
          weight: edge.prop.weight
        });
      }
    }
  }

  var dsu = new DSU(graph.g.length);
  edges.sort(function (edgeA, edgeB) {
    return edgeA.weight - edgeB.weight;
  });

  for (var _i = 0, _edges = edges; _i < _edges.length; _i++) {
    var _edge = _edges[_i];

    if (dsu.join(_edge.from, _edge.to)) {
      mst += _edge.weight;
      mstEdges.push(_edge);
    }
  }

  return {
    mst: mst,
    mstEdges: mstEdges
  };
};

/**
 *
 * @param graph
 * @param source The source node / the array of source nodes
 * @returns The parent array & the shortest path array
 */

var spfa = function spfa(graph, source) {
  graph.reset();
  var INF = Number.MAX_SAFE_INTEGER;
  var d = multi(INF, graph.g.length);
  var inq = multi(false, graph.g.length);
  var q = new Deque();

  if (Array.isArray(source)) {
    for (var _iterator = _createForOfIteratorHelperLoose(source), _step; !(_step = _iterator()).done;) {
      var node = _step.value;
      q.push(node);
      inq[node] = true;
      d[node] = 0;
    }
  } else {
    q.push(source);
    inq[source] = true;
    d[source] = 0;
  }

  var u;

  while (q.size) {
    u = q.pop();
    inq[u] = false;

    for (var _iterator2 = _createForOfIteratorHelperLoose(graph.g[u]), _step2; !(_step2 = _iterator2()).done;) {
      var next = _step2.value;

      if (d[next.to] > d[u] + next.prop.weight) {
        d[next.to] = d[u] + next.prop.weight;
        graph.par[next.to] = u;

        if (!inq[next.to]) {
          inq[next.to] = true;
          q.push(next.to);
        }
      }
    }
  }

  return {
    parArray: graph.par,
    distArray: d
  };
};

/**
 *
 * @param graph
 * @param source The source node / the array of source nodes
 * @returns The parent array & the shortest path array
 */

var dijkstra = function dijkstra(graph, source) {
  graph.reset();
  var pq = new PriorityQueue(function (a, b) {
    return a.dist > b.dist;
  });
  var INF = Number.MAX_SAFE_INTEGER;
  var d = multi(INF, graph.g.length);

  if (Array.isArray(source)) {
    for (var _iterator = _createForOfIteratorHelperLoose(source), _step; !(_step = _iterator()).done;) {
      var node = _step.value;
      pq.push({
        node: node,
        dist: 0
      });
      d[node] = 0;
    }
  } else {
    pq.push({
      node: source,
      dist: 0
    });
    d[source] = 0;
  }

  while (pq.size) {
    var u = pq.pop();

    if (d[u.node] !== u.dist) {
      continue;
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(graph.g[u.node]), _step2; !(_step2 = _iterator2()).done;) {
      var next = _step2.value;

      if (d[next.to] > d[u.node] + next.prop.weight) {
        d[next.to] = d[u.node] + next.prop.weight;
        graph.par[next.to] = u.node;
        pq.push({
          node: next.to,
          dist: d[next.to]
        });
      }
    }
  }

  return {
    parArray: graph.par,
    distArray: d
  };
};

/**
 * Setup the necessary tools for binomial computing
 * @param maxRange
 */

var binomSetup = function binomSetup(maxRange, enableFastBinom) {
  if (maxRange === void 0) {
    maxRange = 1000000;
  }

  if (enableFastBinom === void 0) {
    enableFastBinom = false;
  }

  global.factorial = Array(maxRange + 1).fill(1);
  global.invFactorial = Array(maxRange + 1).fill(1);

  for (var i = 1; i <= maxRange; i++) {
    global.factorial[i] = mul(global.factorial[i - 1], i);
  }

  global.invFactorial[maxRange] = inv(global.factorial[maxRange]);

  for (var _i = maxRange - 1; _i >= 1; _i--) {
    global.invFactorial[_i] = mul(global.invFactorial[_i + 1], _i + 1);
  }

  if (enableFastBinom) {
    if (maxRange > 2000) {
      throw new Error('Fast Binomial is only available for under 2000 range');
    }

    global.fastBinomEnabled = true;
    global.fastBinom = multi(0, maxRange + 1, maxRange + 1);

    for (var _i2 = 0; _i2 <= maxRange; _i2++) {
      global.fastBinom[_i2][0] = 1;

      for (var j = 1; j <= _i2; j++) {
        global.fastBinom[_i2][j] = add(global.fastBinom[_i2 - 1][j - 1], global.fastBinom[_i2 - 1][j]);
      }
    }
  }
};
/**
 *
 * @param {number} n
 * @param {number} k
 * @returns nCk % mod
 */


var binom = function binom(n, k) {
  return k > n ? 0 : global.fastBinomEnabled ? global.fastBinom[n][k] : mul(global.factorial[n], global.invFactorial[k], global.invFactorial[n - k]); // if (k > n) return 0;
  // if (global.fastBinomEnabled)
  //   return global.fastBinom[n][k];
  // return mul(
  //   global.factorial[n],
  //   global.invFactorial[k],
  //   global.invFactorial[n - k]
  // );
};
/**
 *
 * @param {number} x
 * @returns x! % mod
 */


var fact = function fact(x) {
  return global.factorial[x];
};

var Tree = /*#__PURE__*/function (_Graph) {
  _inheritsLoose(Tree, _Graph);

  function Tree(vertices, root) {
    var _this;

    _this = _Graph.call(this, vertices) || this;
    _this.root = 1;
    _this.root = root;
    _this.childCount = Array(vertices + 1).fill(1);
    _this.distRoot = Array(vertices + 1).fill(0);
    _this.distance = Array(vertices + 1).fill(0);
    return _this;
  }

  var _proto = Tree.prototype;

  _proto.setupDist = function setupDist() {
    var _this2 = this;

    dfs(this, this.root, function (u, g) {
      for (var _iterator = _createForOfIteratorHelperLoose(g.g[u]), _step; !(_step = _iterator()).done;) {
        var next = _step.value;

        if (next.to != g.par[u]) {
          if (next.prop) {
            _this2.distance[next.to] = _this2.distance[u] + next.prop.weight;
          }

          _this2.distRoot[next.to] = _this2.distRoot[u] + 1;
        }
      }
    }, function (u, g) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(g.g[u]), _step2; !(_step2 = _iterator2()).done;) {
        var next = _step2.value;

        if (next.to != g.par[u]) {
          _this2.childCount[u] += _this2.childCount[next.to];
        }
      }
    });
  };

  _proto.setupLCA = function setupLCA() {
    this.setupDist();
    var logFactor = 31 - Math.clz32(this.g.length);
    this.log = logFactor;
    this.parentLift = Array(logFactor + 1);
    this.parentLift[0] = this.par;

    for (var level = 1; level <= logFactor; level++) {
      this.parentLift[level] = Array(this.g.length).fill(-1);

      for (var i = 0; i < this.g.length; i++) {
        if (this.parentLift[level - 1][i] != -1) {
          this.parentLift[level][i] = this.parentLift[level - 1][this.parentLift[level - 1][i]];
        }
      }
    }

    this.distRoot = this.distRoot;
  };

  _proto.getLCA = function getLCA(u, v) {
    if (this.distRoot[u] < this.distRoot[v]) {
      var _ref = [v, u];
      u = _ref[0];
      v = _ref[1];
    }

    for (var i = this.log; i >= 0; i--) {
      if (this.distRoot[u] - (1 << i) >= this.distRoot[v]) {
        u = this.parentLift[i][u];
      }
    }

    if (u === v) return u;

    for (var _i = this.log; _i >= 0; _i--) {
      if (this.parentLift[_i][u] != this.parentLift[_i][v]) {
        u = this.parentLift[_i][u];
        v = this.parentLift[_i][v];
      }
    }

    return this.parentLift[0][u];
  };

  return Tree;
}(Graph);

exports.DSU = DSU;
exports.Deque = Deque;
exports.FenwickTree = FenwickTree;
exports.Graph = Graph;
exports.LazySegmentTree = LazySegmentTree;
exports.PriorityQueue = PriorityQueue;
exports.SegmentTree = SegmentTree;
exports.SparseTable = SparseTable;
exports.Tree = Tree;
exports.bfs = bfs;
exports.binarySearch = binarySearch;
exports.binom = binom;
exports.binomSetup = binomSetup;
exports.dfs = dfs;
exports.dijkstra = dijkstra;
exports.fact = fact;
exports.integralExtremumSearch = integralExtremumSearch;
exports.lowerBound = lowerBound;
exports.mst = mst;
exports.proc = proc;
exports.spfa = spfa;
exports.ternarySearch = ternarySearch;