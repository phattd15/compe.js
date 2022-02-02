/**
 * @description Parse the string into integer
 * @param input
 * @returns integer
 */
var toInt = function toInt(input) {
  var res = parseInt(input.trim());

  if (isNaN(res)) {
    throw new Error("Cannot parse " + input + " to int");
  }

  return res;
};
/**
 * @description Parse the string into array of integers
 * @param input
 * @returns [integers]
 */


var intArray = function intArray(input) {
  return input.trim().split(/\s+/).map(function (x) {
    return toInt(x);
  });
};
/**
 * IO object for read and write
 */


var Reader = /*#__PURE__*/function () {
  function Reader(readline) {
    this.rl = readline;
  }
  /**
   * @description Read the integer on this line
   * @returns integer
   */


  var _proto = Reader.prototype;

  _proto.readInt = function readInt() {
    return toInt(this.rl());
  }
  /**
   * @description Read the whole line as the string
   * @returns Read the whole line as a string
   */
  ;

  _proto.readLine = function readLine() {
    return this.rl();
  }
  /**
   * @description Read the whole line as an array
   * @returns The number array
   */
  ;

  _proto.readArray = function readArray() {
    return intArray(this.rl());
  };

  return Reader;
}();

/**
 * This will process your file into OJ's format
 * @param {any} main - The main function
 * @param {string} inputDir - The directory of input
 */
var fs = /*#__PURE__*/require('fs');

var configPath = "./compe.config.json";
function proc(main, inputDir) {
  global.MOD_ = 998244353;
  global.MOD_CUT = 444595123;

  if (fs.existsSync(configPath) && inputDir != "stdin") {
    if (!fs.existsSync(inputDir)) {
      console.log("Input directory does not exist");
      return;
    }

    var data = fs.readFileSync(inputDir, {
      encoding: "utf-8"
    });
    var lineIndex = 0;
    data = data.split('\n');

    var readline = function readline() {
      return data[lineIndex++];
    };

    var write = function write() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // console.log(data);
      for (var _i = 0, _args = args; _i < _args.length; _i++) {
        var _data = _args[_i];
        process.stdout.write(String(_data));
      }
    };

    main(readline, write);
  } else {
    var _data2 = [];
    var rawData = "";
    var pendingData = "";
    var _lineIndex = 0;
    process.stdin.on('data', function (c) {
      rawData += c;
    });
    process.stdin.on('end', function () {
      var _require = require('os'),
          EOL = _require.EOL;

      _data2 = rawData.split(EOL);

      var readline = function readline() {
        return _data2[_lineIndex++];
      };

      var write = function write() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        // console.log(data);
        for (var _i2 = 0, _args2 = args; _i2 < _args2.length; _i2++) {
          var _data3 = _args2[_i2];
          pendingData += String(_data3);
        }
      };

      main(readline, write);
      console.log(pendingData);
    });
  }
}

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

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
 * Adaptor for `for ... of` iteration.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var ForOfAdaptor = /*#__PURE__*/function (_Symbol$iterator) {
  /**
   * Initializer Constructor.
   *
   * @param first Input iteartor of the first position.
   * @param last Input iterator of the last position.
   */
  function ForOfAdaptor(first, last) {
    this.it_ = first;
    this.last_ = last;
  }
  /**
   * @inheritDoc
   */


  var _proto = ForOfAdaptor.prototype;

  _proto.next = function next() {
    if (this.it_.equals(this.last_)) return {
      done: true,
      value: undefined
    };else {
      var it = this.it_;
      this.it_ = this.it_.next();
      return {
        done: false,
        value: it.value
      };
    }
  }
  /**
   * @inheritDoc
   */
  ;

  _proto[_Symbol$iterator] = function () {
    return this;
  };

  return ForOfAdaptor;
}(Symbol.iterator);
/**
 * Basic container.
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link Container}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var Container = /*#__PURE__*/function (_Symbol$iterator) {
  function Container() {}

  var _proto = Container.prototype;
  /**
   * @inheritDoc
   */

  _proto.empty = function empty() {
    return this.size() === 0;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.rbegin = function rbegin() {
    return this.end().reverse();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.rend = function rend() {
    return this.begin().reverse();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto[_Symbol$iterator] = function () {
    return new ForOfAdaptor(this.begin(), this.end());
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.toJSON = function toJSON() {
    var ret = [];

    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var elem = _step.value;
      ret.push(elem);
    }

    return ret;
  };

  return Container;
}(Symbol.iterator);

var NativeArrayIterator = /*#__PURE__*/function () {
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */
  function NativeArrayIterator(data, index) {
    this.data_ = data;
    this.index_ = index;
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */


  var _proto = NativeArrayIterator.prototype;

  _proto.index = function index() {
    return this.index_;
  };
  /* ---------------------------------------------------------
      MOVERS
  --------------------------------------------------------- */


  _proto.prev = function prev() {
    --this.index_;
    return this;
  };

  _proto.next = function next() {
    ++this.index_;
    return this;
  };

  _proto.advance = function advance(n) {
    this.index_ += n;
    return this;
  }
  /* ---------------------------------------------------------
      COMPARES
  --------------------------------------------------------- */
  ;

  _proto.equals = function equals(obj) {
    return this.data_ === obj.data_ && this.index_ === obj.index_;
  };

  _proto.swap = function swap(obj) {
    var _ref = [obj.data_, this.data_];
    this.data_ = _ref[0];
    obj.data_ = _ref[1];
    var _ref2 = [obj.index_, this.index_];
    this.index_ = _ref2[0];
    obj.index_ = _ref2[1];
  };

  _createClass(NativeArrayIterator, [{
    key: "value",
    get: function get() {
      return this.data_[this.index_];
    }
  }]);

  return NativeArrayIterator;
}();
/**
 * Basic set container.
 *
 * @template Key Key type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Derived type extending this {@link SetContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var SetContainer = /*#__PURE__*/function (_Container) {
  _inheritsLoose(SetContainer, _Container);
  /* ---------------------------------------------------------
      CONSTURCTORS
  --------------------------------------------------------- */

  /**
   * Default Constructor.
   */


  function SetContainer(factory) {
    var _this;

    _this = _Container.call(this) || this;
    _this.data_ = factory(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = SetContainer.prototype;

  _proto.assign = function assign(first, last) {
    // INSERT
    this.clear();
    this.insert(first, last);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.clear = function clear() {
    // TO BE ABSTRACT
    this.data_.clear();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.begin = function begin() {
    return this.data_.begin();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.end = function end() {
    return this.data_.end();
  }
  /* ---------------------------------------------------------
      ELEMENTS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.has = function has(key) {
    return !this.find(key).equals(this.end());
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.size = function size() {
    return this.data_.size();
  }
  /* =========================================================
      ELEMENTS I/O
          - INSERT
          - ERASE
          - UTILITY
          - POST-PROCESS
  ============================================================
      INSERT
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.push = function push() {
    for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    if (items.length === 0) return this.size(); // INSERT BY RANGE

    var first = new NativeArrayIterator(items, 0);
    var last = new NativeArrayIterator(items, items.length);

    this._Insert_by_range(first, last); // RETURN SIZE


    return this.size();
  };

  _proto.insert = function insert() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length === 1) return this._Insert_by_key(args[0]);else if (args[0].next instanceof Function && args[1].next instanceof Function) return this._Insert_by_range(args[0], args[1]);else return this._Insert_by_hint(args[0], args[1]);
  };

  _proto.erase = function erase() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (args.length === 1 && !(args[0] instanceof this.end().constructor && args[0].source() === this)) return this._Erase_by_val(args[0]);else if (args.length === 1) return this._Erase_by_range(args[0]);else return this._Erase_by_range(args[0], args[1]);
  };

  _proto._Erase_by_range = function _Erase_by_range(first, last) {
    if (last === void 0) {
      last = first.next();
    } // ERASE


    var it = this.data_.erase(first, last); // POST-PROCESS

    this._Handle_erase(first, last);

    return it;
  };

  return SetContainer;
}(Container); //================================================================ 

/**
 * @packageDocumentation
 * @module std
 */
//================================================================

/**
 * Base Exception.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var Exception = /*#__PURE__*/function (_Error) {
  _inheritsLoose(Exception, _Error);
  /* ---------------------------------------------------------
      CONSTRUCTOR
  --------------------------------------------------------- */

  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */


  function Exception(message) {
    var _this;

    _this = _Error.call(this, message) || this; // INHERITANCE POLYFILL

    var proto = (this instanceof Exception ? this.constructor : void 0).prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(_assertThisInitialized(_this), proto);else _this.__proto__ = proto;
    return _this;
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * The error name.
   */


  var _proto = Exception.prototype;
  /**
   * Get error message.
   *
   * @return The error message.
   */

  _proto.what = function what() {
    return this.message;
  }
  /**
   * Native function for `JSON.stringify()`.
   *
   * The {@link Exception.toJSON} function returns only three properties; ({@link name}, {@link message} and {@link stack}). If you want to define a new sub-class extending the {@link Exception} and const the class to export additional props (or remove some props), override this {@link Exception.toJSON} method.
   *
   * @return An object for `JSON.stringify()`.
   */
  ;

  _proto.toJSON = function toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack
    };
  };

  _createClass(Exception, [{
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return Exception;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Logic Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var LogicError = /*#__PURE__*/function (_Exception) {
  _inheritsLoose(LogicError, _Exception);
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */


  function LogicError(message) {
    return _Exception.call(this, message) || this;
  }

  return LogicError;
}(Exception);
/**
 * Invalid Argument Exception.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var InvalidArgument = /*#__PURE__*/function (_LogicError) {
  _inheritsLoose(InvalidArgument, _LogicError);
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */


  function InvalidArgument(message) {
    return _LogicError.call(this, message) || this;
  }

  return InvalidArgument;
}(LogicError);
/**
 * Out-of-range Exception.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var OutOfRange = /*#__PURE__*/function (_LogicError) {
  _inheritsLoose(OutOfRange, _LogicError);
  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */


  function OutOfRange(message) {
    return _LogicError.call(this, message) || this;
  }

  return OutOfRange;
}(LogicError); //================================================================ 


var ErrorGenerator;

(function (ErrorGenerator) {
  /* ---------------------------------------------------------
      COMMON
  --------------------------------------------------------- */
  function get_class_name(instance) {
    if (typeof instance === "string") return instance;
    var ret = instance.constructor.name;
    if (instance.constructor.__MODULE) ret = instance.constructor.__MODULE + "." + ret;
    return "std." + ret;
  }

  ErrorGenerator.get_class_name = get_class_name;
  /* ---------------------------------------------------------
      CONTAINERS
  --------------------------------------------------------- */

  function empty(instance, method) {
    return new OutOfRange("Error on " + get_class_name(instance) + "." + method + "(): it's empty container.");
  }

  ErrorGenerator.empty = empty;

  function negative_index(instance, method, index) {
    return new OutOfRange("Error on " + get_class_name(instance) + "." + method + "(): parametric index is negative -> (index = " + index + ").");
  }

  ErrorGenerator.negative_index = negative_index;

  function excessive_index(instance, method, index, size) {
    return new OutOfRange("Error on " + get_class_name(instance) + "." + method + "(): parametric index is equal or greater than size -> (index = " + index + ", size: " + size + ").");
  }

  ErrorGenerator.excessive_index = excessive_index;

  function not_my_iterator(instance, method) {
    return new InvalidArgument("Error on " + get_class_name(instance) + "." + method + "(): parametric iterator is not this container's own.");
  }

  ErrorGenerator.not_my_iterator = not_my_iterator;

  function erased_iterator(instance, method) {
    return new InvalidArgument("Error on " + get_class_name(instance) + "." + method + "(): parametric iterator, it already has been erased.");
  }

  ErrorGenerator.erased_iterator = erased_iterator;

  function negative_iterator(instance, method, index) {
    return new OutOfRange("Error on " + get_class_name(instance) + "." + method + "(): parametric iterator is directing negative position -> (index = " + index + ").");
  }

  ErrorGenerator.negative_iterator = negative_iterator;

  function iterator_end_value(instance, method) {
    if (method === void 0) {
      method = "end";
    }

    var className = get_class_name(instance);
    return new OutOfRange("Error on " + className + ".Iterator.value: cannot access to the " + className + "." + method + "().value.");
  }

  ErrorGenerator.iterator_end_value = iterator_end_value;

  function key_nout_found(instance, method, key) {
    throw new OutOfRange("Error on " + get_class_name(instance) + "." + method + "(): unable to find the matched key -> " + key);
  }

  ErrorGenerator.key_nout_found = key_nout_found;
})(ErrorGenerator || (ErrorGenerator = {}));
/**
 * Basic set container blocking duplicated key.
 *
 * @template Key Key type
 * @template Source Derived type extending this {@link UniqueSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var UniqueSet = /*#__PURE__*/function (_SetContainer) {
  _inheritsLoose(UniqueSet, _SetContainer);

  function UniqueSet() {
    return _SetContainer.apply(this, arguments) || this;
  }

  var _proto = UniqueSet.prototype;
  /* ---------------------------------------------------------
      ACCESSOR
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */

  _proto.count = function count(key) {
    return this.find(key).equals(this.end()) ? 0 : 1;
  };

  _proto.insert = function insert() {
    var _SetContainer$prototy;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_SetContainer$prototy = _SetContainer.prototype.insert).call.apply(_SetContainer$prototy, [this].concat(args));
  };

  _proto._Insert_by_range = function _Insert_by_range(first, last) {
    for (; !first.equals(last); first = first.next()) {
      this._Insert_by_key(first.value);
    }
  };

  _proto.extract = function extract(param) {
    if (param instanceof this.end().constructor) return this._Extract_by_iterator(param);else return this._Extract_by_val(param);
  };

  _proto._Extract_by_val = function _Extract_by_val(key) {
    var it = this.find(key);
    if (it.equals(this.end()) === true) throw ErrorGenerator.key_nout_found(this, "extract", key);

    this._Erase_by_range(it);

    return key;
  };

  _proto._Extract_by_iterator = function _Extract_by_iterator(it) {
    if (it.equals(this.end()) === true || this.has(it.value) === false) return this.end();

    this._Erase_by_range(it);

    return it;
  };

  _proto._Erase_by_val = function _Erase_by_val(key) {
    var it = this.find(key);
    if (it.equals(this.end()) === true) return 0;

    this._Erase_by_range(it);

    return 1;
  }
  /* ---------------------------------------------------------
      UTILITY
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.merge = function merge(source) {
    for (var it = source.begin(); !it.equals(source.end());) {
      if (this.has(it.value) === false) {
        this.insert(it.value);
        it = source.erase(it);
      } else it = it.next();
    }
  };

  return UniqueSet;
}(SetContainer);

var IAssociativeContainer;

(function (IAssociativeContainer) {
  /**
   * @internal
   */
  function construct(source) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var ramda;
    var tail;

    if (args.length >= 1 && args[0] instanceof Array) {
      // INITIALIZER LIST CONSTRUCTOR
      ramda = function ramda() {
        var items = args[0];
        source.push.apply(source, items);
      };

      tail = args.slice(1);
    } else if (args.length >= 2 && args[0].next instanceof Function && args[1].next instanceof Function) {
      // RANGE CONSTRUCTOR
      ramda = function ramda() {
        var first = args[0];
        var last = args[1];
        source.assign(first, last);
      };

      tail = args.slice(2);
    } else {
      // DEFAULT CONSTRUCTOR
      ramda = null;
      tail = args;
    }

    return {
      ramda: ramda,
      tail: tail
    };
  }

  IAssociativeContainer.construct = construct;
})(IAssociativeContainer || (IAssociativeContainer = {})); //================================================================ 

/**
 * @packageDocumentation
 * @module std
 */
//================================================================


var is_node_ = null;
/**
 * Test whether the code is running on NodeJS.
 *
 * @return Whether NodeJS or not.
 */

function is_node() {
  if (is_node_ === null) is_node_ = typeof global === "object" && typeof global.process === "object" && typeof global.process.versions === "object" && typeof global.process.versions.node !== "undefined";
  return is_node_;
} //================================================================ 

/**
 * @internal
 */


function _Get_root() {
  if (__s_pRoot === null) {
    __s_pRoot = is_node() ? global : self;
    if (__s_pRoot.__s_iUID === undefined) __s_pRoot.__s_iUID = 0;
  }

  return __s_pRoot;
}
/**
 * @internal
 */


var __s_pRoot = null; //================================================================ 

/**
 * Get unique identifier.
 *
 * @param obj Target object.
 * @return The identifier number.
 */

function get_uid(obj) {
  // NO UID EXISTS, THEN ISSUE ONE.
  if (obj instanceof Object) {
    if (obj.hasOwnProperty("__get_m_iUID") === false) {
      var uid = ++_Get_root().__s_iUID;
      Object.defineProperty(obj, "__get_m_iUID", {
        value: function value() {
          return uid;
        }
      });
    } // RETURNS


    return obj.__get_m_iUID();
  } else if (obj === undefined) return -1;else // is null
    return 0;
}
/**
 * Test whether two arguments are equal.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether two arguments are equal or not.
 */


function equal_to(x, y) {
  // CONVERT TO PRIMITIVE TYPE
  x = x ? x.valueOf() : x;
  y = y ? y.valueOf() : y; // DO COMPARE

  if (x instanceof Object && x.equals instanceof Function) return x.equals(y);else return x === y;
}
/**
 * Test whether *x* is less than *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is less than *y*.
 */


function less(x, y) {
  // CONVERT TO PRIMITIVE TYPE
  x = x.valueOf();
  y = y.valueOf(); // DO COMPARE

  if (x instanceof Object) {
    if (x.less instanceof Function) // has less()
      return x.less(y);else return get_uid(x) < get_uid(y);
  } else return x < y;
} //================================================================ 


var ITreeContainer;

(function (ITreeContainer) {
  /**
   * @internal
   */
  function construct(source, Source, treeFactory) {
    // DECLARE MEMBERS
    var post_process = null;
    var comp = less; //----
    // INITIALIZE MEMBERS AND POST-PROCESS
    //----
    // BRANCH - METHOD OVERLOADINGS

    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    if (args.length === 1 && args[0] instanceof Source) {
      // PARAMETERS
      var container = args[0];
      comp = container.key_comp(); // COPY CONSTRUCTOR

      post_process = function post_process() {
        var first = container.begin();
        var last = container.end();
        source.assign(first, last);
      };
    } else {
      var tuple = IAssociativeContainer.construct.apply(IAssociativeContainer, [source].concat(args));
      post_process = tuple.ramda;
      if (tuple.tail.length >= 1) comp = tuple.tail[0];
    } //----
    // DO PROCESS
    //----
    // CONSTRUCT TREE


    treeFactory(comp); // ACT POST-PROCESS

    if (post_process !== null) post_process();
  }

  ITreeContainer.construct = construct;
  /**
   * @internal
   */

  function emplacable(source, hint, elem) {
    var prev = hint.prev();
    var meet = prev.equals(source.end()) || source.value_comp()(prev.value, elem);
    meet = meet && (hint.equals(source.end()) || source.value_comp()(elem, hint.value));
    return meet;
  }

  ITreeContainer.emplacable = emplacable;
})(ITreeContainer || (ITreeContainer = {}));
/**
 * Hash function.
 *
 * @param itemList The items to be hashed.
 * @return The hash code.
 */


function hash() {
  var ret = INIT_VALUE;

  for (var _len = arguments.length, itemList = new Array(_len), _key = 0; _key < _len; _key++) {
    itemList[_key] = arguments[_key];
  }

  for (var _i = 0, _itemList = itemList; _i < _itemList.length; _i++) {
    var item = _itemList[_i];
    item = item ? item.valueOf() : item;
    var type = typeof item;
    if (type === "boolean") // BOOLEAN -> 1 BYTE
      ret = _Hash_boolean(item, ret);else if (type === "number" || type === "bigint") // NUMBER -> 8 BYTES
      ret = _Hash_number(item, ret);else if (type === "string") // STRING -> {LENGTH} BYTES
      ret = _Hash_string(item, ret);else if (item instanceof Object && item.hashCode instanceof Function) {
      var hashed = item.hashCode();
      if (itemList.length === 1) return hashed;else {
        ret = ret ^ hashed;
        ret *= MULTIPLIER;
      }
    } else // object | null | undefined
      ret = _Hash_number(get_uid(item), ret);
  }

  return Math.abs(ret);
}

function _Hash_boolean(val, ret) {
  ret ^= val ? 1 : 0;
  ret *= MULTIPLIER;
  return ret;
}

function _Hash_number(val, ret) {
  return _Hash_string(val.toString(), ret); // // ------------------------------------------
  // //    IN C++
  // //        CONSIDER A NUMBER AS A STRING
  // //        HASH<STRING>((CHAR*)&VAL, 8)
  // // ------------------------------------------
  // // CONSTRUCT BUFFER AND BYTE_ARRAY
  // const buffer: ArrayBuffer = new ArrayBuffer(8);
  // const byteArray: Int8Array = new Int8Array(buffer);
  // const valueArray: Float64Array = new Float64Array(buffer);
  // valueArray[0] = val;
  // for (let i: number = 0; i < byteArray.length; ++i)
  // {
  //     const byte = (byteArray[i] < 0) ? byteArray[i] + 256 : byteArray[i];
  //     ret ^= byte;
  //     ret *= _HASH_MULTIPLIER;
  // }
  // return Math.abs(ret);
}

function _Hash_string(str, ret) {
  for (var i = 0; i < str.length; ++i) {
    ret ^= str.charCodeAt(i);
    ret *= MULTIPLIER;
  }

  return Math.abs(ret);
}
/* ---------------------------------------------------------
    RESERVED ITEMS
--------------------------------------------------------- */


var INIT_VALUE = 2166136261;
var MULTIPLIER = 16777619;
/**
 * Pair of two elements.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var Pair = /*#__PURE__*/function () {
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */

  /**
   * Initializer Constructor.
   *
   * @param first The first element.
   * @param second The second element.
   */
  function Pair(first, second) {
    this.first = first;
    this.second = second;
  }
  /* ---------------------------------------------------------
      COMPARISON
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */


  var _proto = Pair.prototype;

  _proto.equals = function equals(pair) {
    return equal_to(this.first, pair.first) && equal_to(this.second, pair.second);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.less = function less$1(pair) {
    if (equal_to(this.first, pair.first) === false) return less(this.first, pair.first);else return less(this.second, pair.second);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.hashCode = function hashCode() {
    return hash(this.first, this.second);
  };

  return Pair;
}();
/**
 * Basic tree set blocking duplicated key.
 *
 * @template Key Key type
 * @template Source Derived type extending this {@link UniqueTreeSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var UniqueTreeSet = /*#__PURE__*/function (_UniqueSet) {
  _inheritsLoose(UniqueTreeSet, _UniqueSet);

  function UniqueTreeSet() {
    return _UniqueSet.apply(this, arguments) || this;
  }

  var _proto = UniqueTreeSet.prototype;
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */

  _proto.find = function find(key) {
    var it = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(key, it.value)) return it;else return this.end();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.equal_range = function equal_range(key) {
    var it = this.lower_bound(key);
    return new Pair(it, !it.equals(this.end()) && this._Key_eq(key, it.value) ? it.next() : it);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.value_comp = function value_comp() {
    return this.key_comp();
  };

  _proto._Key_eq = function _Key_eq(x, y) {
    return !this.key_comp()(x, y) && !this.key_comp()(y, x);
  }
  /* ---------------------------------------------------------
      INSERT
  --------------------------------------------------------- */
  ;

  _proto._Insert_by_key = function _Insert_by_key(key) {
    // FIND POSITION TO INSERT
    var it = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(it.value, key)) return new Pair(it, false); // ITERATOR TO RETURN

    it = this.data_.insert(it, key);

    this._Handle_insert(it, it.next());

    return new Pair(it, true);
  };

  _proto._Insert_by_hint = function _Insert_by_hint(hint, key) {
    var validate = ITreeContainer.emplacable(this, hint, key);

    if (validate) {
      var it = this.data_.insert(hint, key);

      this._Handle_insert(it, it.next());

      return it;
    } else return this._Insert_by_key(key).first;
  };

  return UniqueTreeSet;
}(UniqueSet);
/**
 * Basic List Iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var ListIterator = /*#__PURE__*/function () {
  /* ---------------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------------- */
  function ListIterator(prev, next, value) {
    this.prev_ = prev;
    this.next_ = next;
    this.value_ = value;
  }
  /**
   * @internal
   */


  ListIterator._Set_prev = function _Set_prev(it, prev) {
    it.prev_ = prev;
  }
  /**
   * @internal
   */
  ;

  ListIterator._Set_next = function _Set_next(it, next) {
    it.next_ = next;
  }
  /**
   * @inheritDoc
   */
  ;

  var _proto = ListIterator.prototype;

  _proto.prev = function prev() {
    return this.prev_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.next = function next() {
    return this.next_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto._Try_value = function _Try_value() {
    if (this.value_ === undefined && this.equals(this.source().end()) === true) throw ErrorGenerator.iterator_end_value(this.source());
  }
  /* ---------------------------------------------------------------
      COMPARISON
  --------------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.equals = function equals(obj) {
    return this === obj;
  };

  _createClass(ListIterator, [{
    key: "value",
    get: function get() {
      this._Try_value();

      return this.value_;
    }
  }]);

  return ListIterator;
}();

var Repeater = /*#__PURE__*/function () {
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */
  function Repeater(index, value) {
    this.index_ = index;
    this.value_ = value;
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */


  var _proto = Repeater.prototype;

  _proto.index = function index() {
    return this.index_;
  };
  /* ---------------------------------------------------------
      MOVERS & COMPARE
  --------------------------------------------------------- */


  _proto.next = function next() {
    ++this.index_;
    return this;
  };

  _proto.equals = function equals(obj) {
    return this.index_ === obj.index_;
  };

  _createClass(Repeater, [{
    key: "value",
    get: function get() {
      return this.value_;
    }
  }]);

  return Repeater;
}();

function advance(it, n) {
  if (n === 0) return it;else if (it.advance instanceof Function) return it.advance(n);
  var stepper;

  if (n < 0) {
    if (!(it.prev instanceof Function)) throw new InvalidArgument("Error on std.advance(): parametric iterator is not a bi-directional iterator, thus advancing to negative direction is not possible.");

    stepper = function stepper(it) {
      return it.prev();
    };

    n = -n;
  } else stepper = function stepper(it) {
    return it.next();
  };

  while (n-- > 0) {
    it = stepper(it);
  }

  return it;
}
/**
 * Basic List Container.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var ListContainer = /*#__PURE__*/function (_Container) {
  _inheritsLoose(ListContainer, _Container);
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */

  /**
   * Default Constructor.
   */


  function ListContainer() {
    var _this;

    _this = _Container.call(this) || this; // INIT MEMBERS

    _this.end_ = _this._Create_iterator(null, null);

    _this.clear();

    return _this;
  }

  var _proto = ListContainer.prototype;

  _proto.assign = function assign(par1, par2) {
    this.clear();
    this.insert(this.end(), par1, par2);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.clear = function clear() {
    // DISCONNECT NODES
    ListIterator._Set_prev(this.end_, this.end_);

    ListIterator._Set_next(this.end_, this.end_); // RE-SIZE -> 0


    this.begin_ = this.end_;
    this.size_ = 0;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.resize = function resize(n) {
    var expansion = n - this.size();
    if (expansion > 0) this.insert(this.end(), expansion, undefined);else if (expansion < 0) this.erase(advance(this.end(), -expansion), this.end());
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.begin = function begin() {
    return this.begin_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.end = function end() {
    return this.end_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.size = function size() {
    return this.size_;
  }
  /* =========================================================
      ELEMENTS I/O
          - PUSH & POP
          - INSERT
          - ERASE
          - POST-PROCESS
  ============================================================
      PUSH & POP
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.push_front = function push_front(val) {
    this.insert(this.begin_, val);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.push_back = function push_back(val) {
    this.insert(this.end_, val);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.pop_front = function pop_front() {
    if (this.empty() === true) throw ErrorGenerator.empty(this.end_.source().constructor.name, "pop_front");
    this.erase(this.begin_);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.pop_back = function pop_back() {
    if (this.empty() === true) throw ErrorGenerator.empty(this.end_.source().constructor.name, "pop_back");
    this.erase(this.end_.prev());
  }
  /* ---------------------------------------------------------
      INSERT
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.push = function push() {
    for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    if (items.length === 0) return this.size(); // INSERT BY RANGE

    var first = new NativeArrayIterator(items, 0);
    var last = new NativeArrayIterator(items, items.length);

    this._Insert_by_range(this.end(), first, last); // RETURN SIZE


    return this.size();
  };

  _proto.insert = function insert(pos) {
    // VALIDATION
    if (pos.source() !== this.end_.source()) throw ErrorGenerator.not_my_iterator(this.end_.source(), "insert");else if (pos.erased_ === true) throw ErrorGenerator.erased_iterator(this.end_.source(), "insert"); // BRANCHES

    if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 1) return this._Insert_by_repeating_val(pos, 1, arguments.length <= 1 ? undefined : arguments[1]);else if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 2 && typeof (arguments.length <= 1 ? undefined : arguments[1]) === "number") return this._Insert_by_repeating_val(pos, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);else return this._Insert_by_range(pos, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
  };

  _proto._Insert_by_repeating_val = function _Insert_by_repeating_val(position, n, val) {
    var first = new Repeater(0, val);
    var last = new Repeater(n);
    return this._Insert_by_range(position, first, last);
  };

  _proto._Insert_by_range = function _Insert_by_range(position, begin, end) {
    var prev = position.prev();
    var first = null;
    var size = 0;

    for (var it = begin; it.equals(end) === false; it = it.next()) {
      // CONSTRUCT ITEM, THE NEW ELEMENT
      var item = this._Create_iterator(prev, null, it.value);

      if (size === 0) first = item; // PLACE ITEM ON THE NEXT OF "PREV"

      ListIterator._Set_next(prev, item); // SHIFT CURRENT ITEM TO PREVIOUS


      prev = item;
      ++size;
    } // WILL FIRST BE THE BEGIN?


    if (position.equals(this.begin()) === true) this.begin_ = first; // CONNECT BETWEEN LAST AND POSITION

    ListIterator._Set_next(prev, position);

    ListIterator._Set_prev(position, prev);

    this.size_ += size;
    return first;
  };

  _proto.erase = function erase(first, last) {
    if (last === void 0) {
      last = first.next();
    }

    return this._Erase_by_range(first, last);
  };

  _proto._Erase_by_range = function _Erase_by_range(first, last) {
    // VALIDATION
    if (first.source() !== this.end_.source()) throw ErrorGenerator.not_my_iterator(this.end_.source(), "insert");else if (first.erased_ === true) throw ErrorGenerator.erased_iterator(this.end_.source(), "insert");else if (first.equals(this.end_)) return this.end_; // FIND PREV AND NEXT

    var prev = first.prev(); // SHRINK

    ListIterator._Set_next(prev, last);

    ListIterator._Set_prev(last, prev);

    for (var it = first; !it.equals(last); it = it.next()) {
      it.erased_ = true;
      --this.size_;
    }

    if (first.equals(this.begin_)) this.begin_ = last;
    return last;
  }
  /* ---------------------------------------------------------
      SWAP
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.swap = function swap(obj) {
    var _ref = [obj.begin_, this.begin_];
    this.begin_ = _ref[0];
    obj.begin_ = _ref[1];
    var _ref2 = [obj.end_, this.end_];
    this.end_ = _ref2[0];
    obj.end_ = _ref2[1];
    var _ref3 = [obj.size_, this.size_];
    this.size_ = _ref3[0];
    obj.size_ = _ref3[1];
  };

  return ListContainer;
}(Container);
/**
 * Basic reverse iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var ReverseIterator = /*#__PURE__*/function () {
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */

  /**
   * Initializer Constructor.
   *
   * @param base The base iterator.
   */
  function ReverseIterator(base) {
    this.base_ = base.prev();
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * Get source container.
   *
   * @return The source container.
   */


  var _proto = ReverseIterator.prototype;

  _proto.source = function source() {
    return this.base_.source();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.base = function base() {
    return this.base_.next();
  }
  /**
   * @inheritDoc
   */
  ;
  /* ---------------------------------------------------------
      MOVERS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */


  _proto.prev = function prev() {
    // this.base().next()
    return this._Create_neighbor(this.base().next());
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.next = function next() {
    // this.base().prev()
    return this._Create_neighbor(this.base_);
  }
  /* ---------------------------------------------------------
      COMPARES
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.equals = function equals(obj) {
    return this.base_.equals(obj.base_);
  };

  _createClass(ReverseIterator, [{
    key: "value",
    get: function get() {
      return this.base_.value;
    }
  }]);

  return ReverseIterator;
}();
/**
 * Doubly Linked List storing set elements.
 *
 * @template Key Key type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source container type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var SetElementList = /*#__PURE__*/function (_ListContainer) {
  _inheritsLoose(SetElementList, _ListContainer);
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */


  function SetElementList(associative) {
    var _this;

    _this = _ListContainer.call(this) || this;
    _this.associative_ = associative;
    return _this;
  }

  var _proto = SetElementList.prototype;

  _proto._Create_iterator = function _Create_iterator(prev, next, val) {
    return SetElementList.Iterator.create(this, prev, next, val);
  }
  /**
   * @internal
   */
  ;

  SetElementList._Swap_associative = function _Swap_associative(x, y) {
    var _ref = [y.associative_, x.associative_];
    x.associative_ = _ref[0];
    y.associative_ = _ref[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */
  ;

  _proto.associative = function associative() {
    return this.associative_;
  };

  return SetElementList;
}(ListContainer);
/**
 *
 */


(function (SetElementList) {
  /**
   * Iterator of set container storing elements in a list.
   *
   * @template Key Key type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  var Iterator = /*#__PURE__*/function (_ListIterator) {
    _inheritsLoose(Iterator, _ListIterator);
    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */


    function Iterator(list, prev, next, val) {
      var _this2;

      _this2 = _ListIterator.call(this, prev, next, val) || this;
      _this2.source_ = list;
      return _this2;
    }
    /**
     * @internal
     */


    Iterator.create = function create(list, prev, next, val) {
      return new Iterator(list, prev, next, val);
    }
    /**
     * @inheritDoc
     */
    ;

    var _proto2 = Iterator.prototype;

    _proto2.reverse = function reverse() {
      return new ReverseIterator$1(this);
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */

    /**
     * @inheritDoc
     */
    ;

    _proto2.source = function source() {
      return this.source_.associative();
    };

    return Iterator;
  }(ListIterator);

  SetElementList.Iterator = Iterator;
  /**
   * Reverser iterator of set container storing elements in a list.
   *
   * @template Key Key type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */

  var ReverseIterator$1 = /*#__PURE__*/function (_ReverseIterator2) {
    _inheritsLoose(ReverseIterator, _ReverseIterator2);

    function ReverseIterator() {
      return _ReverseIterator2.apply(this, arguments) || this;
    }

    var _proto3 = ReverseIterator.prototype;

    _proto3._Create_neighbor = function _Create_neighbor(base) {
      return new ReverseIterator(base);
    };

    return ReverseIterator;
  }(ReverseIterator);

  SetElementList.ReverseIterator = ReverseIterator$1;
})(SetElementList || (SetElementList = {}));
/**
 * Node of {@link XTree}
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


var XTreeNode = /*#__PURE__*/function () {
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */
  function XTreeNode(value, color) {
    this.value = value;
    this.color = color;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  _createClass(XTreeNode, [{
    key: "grand",
    get: function get() {
      return this.parent.parent;
    }
  }, {
    key: "sibling",
    get: function get() {
      if (this === this.parent.left) return this.parent.right;else return this.parent.left;
    }
  }, {
    key: "uncle",
    get: function get() {
      return this.parent.sibling;
    }
  }]);

  return XTreeNode;
}(); //================================================================ 

/**
 * Red-Black Tree
 *
 * @reference https://en.wikipedia.org/w/index.php?title=Red%E2%80%93black_tree
 * @inventor Rudolf Bayer
 * @author Jeongho Nam - https://github.com/samchon
 */


var XTree = /*#__PURE__*/function () {
  /* ---------------------------------------------------------
      CONSTRUCTOR
  --------------------------------------------------------- */
  function XTree(comp) {
    this.root_ = null;
    this.comp_ = comp;

    this.equal_ = function (x, y) {
      return !comp(x, y) && !comp(y, x);
    };
  }

  var _proto = XTree.prototype;

  _proto.clear = function clear() {
    this.root_ = null;
  }
  /* =========================================================
      ACCESSORS
          - GETTERS
          - COMPARISON
  ============================================================
      GETTERS
  --------------------------------------------------------- */
  ;

  _proto.root = function root() {
    return this.root_;
  };

  _proto.get = function get(val) {
    var ret = this.nearest(val);
    if (ret === null || !this.equal_(val, ret.value)) return null;else return ret;
  };

  _proto.nearest = function nearest(val) {
    // NEED NOT TO ITERATE
    if (this.root_ === null) return null; //----
    // ITERATE
    //----

    var ret = this.root_;

    while (true) // UNTIL MEET THE MATCHED VALUE OR FINAL BRANCH
    {
      var my_node = null; // COMPARE

      if (this.comp_(val, ret.value)) my_node = ret.left;else if (this.comp_(ret.value, val)) my_node = ret.right;else return ret; // MATCHED VALUE
      // FINAL BRANCH? OR KEEP GOING

      if (my_node !== null) ret = my_node;else break;
    }

    return ret; // DIFFERENT NODE
  };

  _proto._Fetch_maximum = function _Fetch_maximum(node) {
    while (node.right !== null) {
      node = node.right;
    }

    return node;
  }
  /* =========================================================
      ELEMENTS I/O
          - INSERT
          - ERASE
          - COLOR
          - ROTATION
  ============================================================
      INSERT
  --------------------------------------------------------- */
  ;

  _proto.insert = function insert(val) {
    var parent = this.nearest(val);
    var node = new XTreeNode(val, 1
    /* RED */
    );
    if (parent === null) this.root_ = node;else {
      node.parent = parent;
      if (this.comp_(node.value, parent.value)) parent.left = node;else parent.right = node;
    }

    this._Insert_case1(node);
  };

  _proto._Insert_case1 = function _Insert_case1(n) {
    if (n.parent === null) n.color = 0
    /* BLACK */
    ;else this._Insert_case2(n);
  };

  _proto._Insert_case2 = function _Insert_case2(n) {
    if (this._Fetch_color(n.parent) === 0
    /* BLACK */
    ) return;else this._Insert_case3(n);
  };

  _proto._Insert_case3 = function _Insert_case3(n) {
    if (this._Fetch_color(n.uncle) === 1
    /* RED */
    ) {
      n.parent.color = 0
      /* BLACK */
      ;
      n.uncle.color = 0
      /* BLACK */
      ;
      n.grand.color = 1
      /* RED */
      ;

      this._Insert_case1(n.grand);
    } else this._Insert_case4(n);
  };

  _proto._Insert_case4 = function _Insert_case4(n) {
    if (n === n.parent.right && n.parent === n.grand.left) {
      this._Rotate_left(n.parent);

      n = n.left;
    } else if (n === n.parent.left && n.parent === n.grand.right) {
      this._Rotate_right(n.parent);

      n = n.right;
    }

    this._Insert_case5(n);
  };

  _proto._Insert_case5 = function _Insert_case5(n) {
    n.parent.color = 0
    /* BLACK */
    ;
    n.grand.color = 1
    /* RED */
    ;
    if (n === n.parent.left && n.parent === n.grand.left) this._Rotate_right(n.grand);else this._Rotate_left(n.grand);
  }
  /* ---------------------------------------------------------
      ERASE
  --------------------------------------------------------- */
  ;

  _proto.erase = function erase(val) {
    var node = this.get(val);
    if (node === null) return; // UNABLE TO FIND THE MATCHED NODE

    if (node.left !== null && node.right !== null) {
      var pred = this._Fetch_maximum(node.left);

      node.value = pred.value;
      node = pred;
    }

    var child = node.right === null ? node.left : node.right;

    if (this._Fetch_color(node) === 0
    /* BLACK */
    ) {
      node.color = this._Fetch_color(child);

      this._Erase_case1(node);
    }

    this._Replace_node(node, child);

    if (this._Fetch_color(this.root_) === 1
    /* RED */
    ) this.root_.color = 0
    /* BLACK */
    ;
  };

  _proto._Erase_case1 = function _Erase_case1(n) {
    if (n.parent === null) return;else this._Erase_case2(n);
  };

  _proto._Erase_case2 = function _Erase_case2(n) {
    if (this._Fetch_color(n.sibling) === 1
    /* RED */
    ) {
      n.parent.color = 1
      /* RED */
      ;
      n.sibling.color = 0
      /* BLACK */
      ;
      if (n === n.parent.left) this._Rotate_left(n.parent);else this._Rotate_right(n.parent);
    }

    this._Erase_case3(n);
  };

  _proto._Erase_case3 = function _Erase_case3(n) {
    if (this._Fetch_color(n.parent) === 0
    /* BLACK */
    && this._Fetch_color(n.sibling) === 0
    /* BLACK */
    && this._Fetch_color(n.sibling.left) === 0
    /* BLACK */
    && this._Fetch_color(n.sibling.right) === 0
    /* BLACK */
    ) {
      n.sibling.color = 1
      /* RED */
      ;

      this._Erase_case1(n.parent);
    } else this._Erase_case4(n);
  };

  _proto._Erase_case4 = function _Erase_case4(N) {
    if (this._Fetch_color(N.parent) === 1
    /* RED */
    && N.sibling !== null && this._Fetch_color(N.sibling) === 0
    /* BLACK */
    && this._Fetch_color(N.sibling.left) === 0
    /* BLACK */
    && this._Fetch_color(N.sibling.right) === 0
    /* BLACK */
    ) {
      N.sibling.color = 1
      /* RED */
      ;
      N.parent.color = 0
      /* BLACK */
      ;
    } else this._Erase_case5(N);
  };

  _proto._Erase_case5 = function _Erase_case5(n) {
    if (n === n.parent.left && n.sibling !== null && this._Fetch_color(n.sibling) === 0
    /* BLACK */
    && this._Fetch_color(n.sibling.left) === 1
    /* RED */
    && this._Fetch_color(n.sibling.right) === 0
    /* BLACK */
    ) {
      n.sibling.color = 1
      /* RED */
      ;
      n.sibling.left.color = 0
      /* BLACK */
      ;

      this._Rotate_right(n.sibling);
    } else if (n === n.parent.right && n.sibling !== null && this._Fetch_color(n.sibling) === 0
    /* BLACK */
    && this._Fetch_color(n.sibling.left) === 0
    /* BLACK */
    && this._Fetch_color(n.sibling.right) === 1
    /* RED */
    ) {
      n.sibling.color = 1
      /* RED */
      ;
      n.sibling.right.color = 0
      /* BLACK */
      ;

      this._Rotate_left(n.sibling);
    }

    this._Erase_case6(n);
  };

  _proto._Erase_case6 = function _Erase_case6(n) {
    n.sibling.color = this._Fetch_color(n.parent);
    n.parent.color = 0
    /* BLACK */
    ;

    if (n === n.parent.left) {
      n.sibling.right.color = 0
      /* BLACK */
      ;

      this._Rotate_left(n.parent);
    } else {
      n.sibling.left.color = 0
      /* BLACK */
      ;

      this._Rotate_right(n.parent);
    }
  }
  /* ---------------------------------------------------------
      ROTATION
  --------------------------------------------------------- */
  ;

  _proto._Rotate_left = function _Rotate_left(node) {
    var right = node.right;

    this._Replace_node(node, right);

    node.right = right.left;
    if (right.left !== null) right.left.parent = node;
    right.left = node;
    node.parent = right;
  };

  _proto._Rotate_right = function _Rotate_right(node) {
    var left = node.left;

    this._Replace_node(node, left);

    node.left = left.right;
    if (left.right !== null) left.right.parent = node;
    left.right = node;
    node.parent = left;
  };

  _proto._Replace_node = function _Replace_node(oldNode, newNode) {
    if (oldNode.parent === null) this.root_ = newNode;else {
      if (oldNode === oldNode.parent.left) oldNode.parent.left = newNode;else oldNode.parent.right = newNode;
    }
    if (newNode !== null) newNode.parent = oldNode.parent;
  }
  /* ---------------------------------------------------------
      COLOR
  --------------------------------------------------------- */
  ;

  _proto._Fetch_color = function _Fetch_color(node) {
    if (node === null) return 0
    /* BLACK */
    ;else return node.color;
  };

  return XTree;
}();

var SetTree = /*#__PURE__*/function (_XTree) {
  _inheritsLoose(SetTree, _XTree);
  /* ---------------------------------------------------------
      CONSTRUCTOR
  --------------------------------------------------------- */


  function SetTree(set, comp, it_comp) {
    var _this;

    _this = _XTree.call(this, it_comp) || this;
    _this.source_ = set;
    _this.key_comp_ = comp;

    _this.key_eq_ = function (x, y) {
      return !comp(x, y) && !comp(y, x);
    };

    return _this;
  }
  /**
   * @internal
   */


  SetTree._Swap_source = function _Swap_source(x, y) {
    var _ref = [y.source_, x.source_];
    x.source_ = _ref[0];
    y.source_ = _ref[1];
  }
  /* ---------------------------------------------------------
      FINDERS
  --------------------------------------------------------- */
  ;

  var _proto = SetTree.prototype;

  _proto.get_by_key = function get_by_key(val) {
    var ret = this.nearest_by_key(val);
    if (ret === null || !this.key_eq_(val, ret.value.value)) return null;else return ret;
  };

  _proto.lower_bound = function lower_bound(val) {
    var node = this.nearest_by_key(val);
    if (node === null) return this.source_.end();else if (this.key_comp_(node.value.value, val)) // it < key
      return node.value.next();else return node.value;
  };

  _proto.equal_range = function equal_range(val) {
    return new Pair(this.lower_bound(val), this.upper_bound(val));
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */
  ;

  _proto.source = function source() {
    return this.source_;
  };

  _proto.key_comp = function key_comp() {
    return this.key_comp_;
  };

  _proto.key_eq = function key_eq() {
    return this.key_eq_;
  };

  _proto.value_comp = function value_comp() {
    return this.key_comp_;
  };

  return SetTree;
}(XTree);

var UniqueSetTree = /*#__PURE__*/function (_SetTree) {
  _inheritsLoose(UniqueSetTree, _SetTree);
  /* ---------------------------------------------------------
      CONSTRUCTOR
  --------------------------------------------------------- */


  function UniqueSetTree(source, comp) {
    return _SetTree.call(this, source, comp, function (x, y) {
      return comp(x.value, y.value);
    }) || this;
  }
  /* ---------------------------------------------------------
      FINDERS
  --------------------------------------------------------- */


  var _proto = UniqueSetTree.prototype;

  _proto.nearest_by_key = function nearest_by_key(val) {
    // NEED NOT TO ITERATE
    if (this.root_ === null) return null; //----
    // ITERATE
    //----

    var ret = this.root_;

    while (true) // UNTIL MEET THE MATCHED VALUE OR FINAL BRANCH
    {
      var it = ret.value;
      var my_node = null; // COMPARE

      if (this.key_comp()(val, it.value)) my_node = ret.left;else if (this.key_comp()(it.value, val)) my_node = ret.right;else return ret; // MATCHED VALUE
      // FINAL BRANCH? OR KEEP GOING

      if (my_node === null) break;else ret = my_node;
    }

    return ret; // DIFFERENT NODE
  };

  _proto.upper_bound = function upper_bound(val) {
    //--------
    // FIND MATCHED NODE
    //--------
    var node = this.nearest_by_key(val);
    if (node === null) return this.source().end(); //--------
    // RETURN BRANCH
    //--------

    var it = node.value; // MUST BE it.value > key

    if (this.key_comp()(val, it.value)) return it;else return it.next();
  };

  return UniqueSetTree;
}(SetTree);
/**
 * Unique-key Set based on Tree.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */


const TreeSet = /*#__PURE__*/function (_UniqueTreeSet) {
  _inheritsLoose(TreeSet, _UniqueTreeSet);

  function TreeSet() {
    var _this;

    _this = _UniqueTreeSet.call(this, function (thisArg) {
      return new SetElementList(thisArg);
    }) || this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    ITreeContainer.construct.apply(ITreeContainer, [_assertThisInitialized(_this), TreeSet, function (comp) {
      _this.tree_ = new UniqueSetTree(_assertThisInitialized(_this), comp);
    }].concat(args));
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = TreeSet.prototype;

  _proto.clear = function clear() {
    _UniqueTreeSet.prototype.clear.call(this);

    this.tree_.clear();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.swap = function swap(obj) {
    // SWAP CONTENTS
    var _ref = [obj.data_, this.data_];
    this.data_ = _ref[0];
    obj.data_ = _ref[1];

    SetElementList._Swap_associative(this.data_, obj.data_); // SWAP RB-TREE


    UniqueSetTree._Swap_source(this.tree_, obj.tree_);

    var _ref2 = [obj.tree_, this.tree_];
    this.tree_ = _ref2[0];
    obj.tree_ = _ref2[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.key_comp = function key_comp() {
    return this.tree_.key_comp();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.lower_bound = function lower_bound(key) {
    return this.tree_.lower_bound(key);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.upper_bound = function upper_bound(key) {
    return this.tree_.upper_bound(key);
  }
  /* ---------------------------------------------------------
      POST-PROCESS
  --------------------------------------------------------- */
  ;

  _proto._Handle_insert = function _Handle_insert(first, last) {
    for (; !first.equals(last); first = first.next()) {
      this.tree_.insert(first);
    }
  };

  _proto._Handle_erase = function _Handle_erase(first, last) {
    for (; !first.equals(last); first = first.next()) {
      this.tree_.erase(first);
    }
  };

  return TreeSet;
}(UniqueTreeSet);
/**
 *
 */


(function (TreeSet) {
  // BODY
  TreeSet.Iterator = SetElementList.Iterator;
  TreeSet.ReverseIterator = SetElementList.ReverseIterator;
})(TreeSet || (TreeSet = {}));

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
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
    for (var _iterator = _createForOfIteratorHelperLoose$1(values), _step; !(_step = _iterator()).done;) {
      var value = _step.value;
      this.push(value);
    }

    return this;
  };

  _proto.extendFront = function extendFront(values) {
    for (var _iterator2 = _createForOfIteratorHelperLoose$1(values), _step2; !(_step2 = _iterator2()).done;) {
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

  _createClass$1(Deque, [{
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
 * @param value Cell value
 * @param args Dimension of the array
 * @returns The multidimensional array
 */
var multiArray = function multiArray(value) {
  if ((arguments.length <= 1 ? 0 : arguments.length - 1) == 0) {
    throw new Error('Please insert dimension values');
  } else if ((arguments.length <= 1 ? 0 : arguments.length - 1) >= 1) {
    var _ref;

    if (typeof value == 'object') {
      throw new Error('The value can not be object');
    }

    var arr = [value, []];
    var cur = 0,
        nxt = 1;
    arr[0] = new Array((_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref < 1 || arguments.length <= _ref ? undefined : arguments[_ref]));

    for (var i = 0; i < arr[0].length; i++) {
      arr[0][i] = value;
    } // console.log(arr[0]);


    for (var _i = (arguments.length <= 1 ? 0 : arguments.length - 1) - 2; _i >= 0; _i--) {
      if (!Number.isInteger(_i + 1 < 1 || arguments.length <= _i + 1 ? undefined : arguments[_i + 1])) {
        throw new Error('Please pass integer arguments for array size');
      }

      arr[nxt] = new Array(_i + 1 < 1 || arguments.length <= _i + 1 ? undefined : arguments[_i + 1]);

      for (var j = 0; j < (_i + 1 < 1 || arguments.length <= _i + 1 ? undefined : arguments[_i + 1]); j++) {
        arr[nxt][j] = arr[cur].slice();
      }

      var _ref2 = [nxt, cur];
      cur = _ref2[0];
      nxt = _ref2[1];
    }

    return arr[cur];
  }
};
/**
 * Return an array of arrays
 * @param size
 * @returns
 */


var vectorArray = function vectorArray(size) {
  var arr = new Array(size);

  for (var i = 0; i < size; i++) {
    arr[i] = [];
  }

  return arr;
};

var DSU = /*#__PURE__*/function () {
  function DSU(size) {
    this.p = multiArray(-1, size + 1);
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

  _createClass$1(PriorityQueue, [{
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

/**
 * Graph class, with:
 *    g as adjacency list
 *    vis as visited state
 *    par as parent list
 */

var Graph = /*#__PURE__*/function () {
  function Graph(vertices) {
    this.g = vectorArray(vertices + 1);
    this.vis = multiArray(false, vertices + 1);
    this.par = multiArray(-1, vertices + 1);
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
    this.vis = multiArray(false, this.g.length);
    this.par = multiArray(-1, this.g.length);
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

      for (var _iterator = _createForOfIteratorHelperLoose$1(graph.g[u]), _step; !(_step = _iterator()).done;) {
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
    for (var _iterator = _createForOfIteratorHelperLoose$1(source), _step; !(_step = _iterator()).done;) {
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

    for (var _iterator2 = _createForOfIteratorHelperLoose$1(graph.g[u]), _step2; !(_step2 = _iterator2()).done;) {
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
    for (var _iterator = _createForOfIteratorHelperLoose$1(graph.g[i]), _step; !(_step = _iterator()).done;) {
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

var dijkstra = function dijkstra(graph, source) {
  graph.reset();
  var pq = new PriorityQueue(function (a, b) {
    return a.dist > b.dist;
  });
  var INF = Number.MAX_SAFE_INTEGER;
  var d = multiArray(INF, graph.g.length);

  if (Array.isArray(source)) {
    for (var _iterator = _createForOfIteratorHelperLoose$1(source), _step; !(_step = _iterator()).done;) {
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

    for (var _iterator2 = _createForOfIteratorHelperLoose$1(graph.g[u.node]), _step2; !(_step2 = _iterator2()).done;) {
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
  for (var a = 1, b = 0, y = global.MOD_, q; y; _ref = [a, b - q * a], b = _ref[0], a = _ref[1], _ref) {
    var _ref, _ref2;

    q = y / x | 0, (_ref2 = [x, y - q * x], y = _ref2[0], x = _ref2[1], _ref2);
  }

  return a < 0 ? a + global.MOD_ : a;
};

/**
 * Setup the factorial, stored at global.factorial and global.invFactorial.
 * @param maxRange
 */

var factSetup = function factSetup(maxRange) {
  if (maxRange === void 0) {
    maxRange = 200000;
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
};
/**
 *
 * @param {number} n
 * @param {number} k
 * @returns nCk % mod
 */


var binom = function binom(n, k) {
  if (k > n) return 0;
  return mul(global.factorial[n], global.invFactorial[k], global.invFactorial[n - k]);
};
/**
 *
 * @param {number} x
 * @returns x! % mod
 */


var fact = function fact(x) {
  return global.factorial[x];
};
