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
 * @description Parse the string into array of strings
 * @param input
 * @returns [string]
 */


var stringArray = function stringArray(input) {
  return input.trim().split(/\s+/);
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
function proc(main, inputDir) {
  if (typeof process !== 'undefined') {
    var fs = require('fs');

    fs.readFile(inputDir, 'utf8', function (err, data) {
      var lineIndex = 0;

      if (err) {
        return console.log(err);
      }

      data = data.split('\n');

      global.readline = function () {
        return data[lineIndex++];
      };

      global.print = function (data) {
        process.stdout.write(String(data));
        process.stdout.write("\n");
      };

      global.write = function (data) {
        process.stdout.write(String(data));
      };

      main(readline, write);
    });
  } else {
    main(readline, write);
  }
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
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
    }

    // ERASE
    var it = this.data_.erase(first, last); // POST-PROCESS

    this._Handle_erase(first, last);

    return it;
  };

  return SetContainer;
}(Container);

//================================================================ 

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
}(LogicError);

//================================================================ 
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

/**
 * Basic set container allowing multiple keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var MultiSet = /*#__PURE__*/function (_SetContainer) {
  _inheritsLoose(MultiSet, _SetContainer);

  function MultiSet() {
    return _SetContainer.apply(this, arguments) || this;
  }

  var _proto = MultiSet.prototype;

  _proto.insert = function insert() {
    var _SetContainer$prototy;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_SetContainer$prototy = _SetContainer.prototype.insert).call.apply(_SetContainer$prototy, [this].concat(args));
  };

  _proto._Erase_by_val = function _Erase_by_val(key) {
    var first = this.find(key);
    if (first.equals(this.end()) === true) return 0;
    var last = first.next();
    var ret = 1;

    while (!last.equals(this.end()) && this._Key_eq(key, last.value)) {
      last = last.next();
      ++ret;
    }

    this._Erase_by_range(first, last);

    return ret;
  }
  /* ---------------------------------------------------------
      UTILITY
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.merge = function merge(source) {
    this.insert(source.begin(), source.end());
    source.clear();
  };

  return MultiSet;
}(SetContainer);

/**
 * Basic map container.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Derived type extending this {@link MapContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var MapContainer = /*#__PURE__*/function (_Container) {
  _inheritsLoose(MapContainer, _Container);

  /* ---------------------------------------------------------
      CONSTURCTORS
  --------------------------------------------------------- */

  /**
   * Default Constructor.
   */
  function MapContainer(factory) {
    var _this;

    _this = _Container.call(this) || this;
    _this.data_ = factory(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = MapContainer.prototype;

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

    // INSERT BY RANGE
    var first = new NativeArrayIterator(items, 0);
    var last = new NativeArrayIterator(items, items.length);
    this.insert(first, last); // RETURN SIZE

    return this.size();
  };

  _proto.insert = function insert() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length === 1) return this.emplace(args[0].first, args[0].second);else if (args[0].next instanceof Function && args[1].next instanceof Function) return this._Insert_by_range(args[0], args[1]);else return this.emplace_hint(args[0], args[1].first, args[1].second);
  };

  _proto.erase = function erase() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (args.length === 1 && (args[0] instanceof this.end().constructor === false || args[0].source() !== this)) return this._Erase_by_key(args[0]);else if (args.length === 1) return this._Erase_by_range(args[0]);else return this._Erase_by_range(args[0], args[1]);
  };

  _proto._Erase_by_range = function _Erase_by_range(first, last) {
    if (last === void 0) {
      last = first.next();
    }

    // ERASE
    var it = this.data_.erase(first, last); // POST-PROCESS

    this._Handle_erase(first, last);

    return it;
  };

  return MapContainer;
}(Container);

/**
 * Basic map container blocking duplicated key.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link UniqueMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var UniqueMap = /*#__PURE__*/function (_MapContainer) {
  _inheritsLoose(UniqueMap, _MapContainer);

  function UniqueMap() {
    return _MapContainer.apply(this, arguments) || this;
  }

  var _proto = UniqueMap.prototype;

  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  _proto.count = function count(key) {
    return this.find(key).equals(this.end()) ? 0 : 1;
  }
  /**
   * Get a value.
   *
   * @param key Key to search for.
   * @return The value mapped by the key.
   */
  ;

  _proto.get = function get(key) {
    var it = this.find(key);
    if (it.equals(this.end()) === true) throw ErrorGenerator.key_nout_found(this, "get", key);
    return it.second;
  }
  /**
   * Set a value with key.
   *
   * @param key Key to be mapped or search for.
   * @param val Value to insert or assign.
   */
  ;

  _proto.set = function set(key, val) {
    this.insert_or_assign(key, val);
  };

  _proto.insert = function insert() {
    var _MapContainer$prototy;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_MapContainer$prototy = _MapContainer.prototype.insert).call.apply(_MapContainer$prototy, [this].concat(args));
  };

  _proto._Insert_by_range = function _Insert_by_range(first, last) {
    for (var it = first; !it.equals(last); it = it.next()) {
      this.emplace(it.value.first, it.value.second);
    }
  };

  _proto.insert_or_assign = function insert_or_assign() {
    if (arguments.length === 2) {
      return this._Insert_or_assign_with_key_value(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
    } else if (arguments.length === 3) {
      // INSERT OR ASSIGN AN ELEMENT
      return this._Insert_or_assign_with_hint(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
    }
  };

  _proto._Insert_or_assign_with_key_value = function _Insert_or_assign_with_key_value(key, value) {
    var ret = this.emplace(key, value);
    if (ret.second === false) ret.first.second = value;
    return ret;
  };

  _proto._Insert_or_assign_with_hint = function _Insert_or_assign_with_hint(hint, key, value) {
    var ret = this.emplace_hint(hint, key, value);
    if (ret.second !== value) ret.second = value;
    return ret;
  };

  _proto.extract = function extract(param) {
    if (param instanceof this.end().constructor) return this._Extract_by_iterator(param);else return this._Extract_by_key(param);
  };

  _proto._Extract_by_key = function _Extract_by_key(key) {
    var it = this.find(key);
    if (it.equals(this.end()) === true) throw ErrorGenerator.key_nout_found(this, "extract", key);
    var ret = it.value;

    this._Erase_by_range(it);

    return ret;
  };

  _proto._Extract_by_iterator = function _Extract_by_iterator(it) {
    if (it.equals(this.end()) === true) return this.end();

    this._Erase_by_range(it);

    return it;
  };

  _proto._Erase_by_key = function _Erase_by_key(key) {
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
      if (this.has(it.first) === false) {
        this.insert(it.value);
        it = source.erase(it);
      } else it = it.next();
    }
  };

  return UniqueMap;
}(MapContainer);

/**
 * Basic map container allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var MultiMap = /*#__PURE__*/function (_MapContainer) {
  _inheritsLoose(MultiMap, _MapContainer);

  function MultiMap() {
    return _MapContainer.apply(this, arguments) || this;
  }

  var _proto = MultiMap.prototype;

  _proto.insert = function insert() {
    var _MapContainer$prototy;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_MapContainer$prototy = _MapContainer.prototype.insert).call.apply(_MapContainer$prototy, [this].concat(args));
  };

  _proto._Erase_by_key = function _Erase_by_key(key) {
    var first = this.find(key);
    if (first.equals(this.end()) === true) return 0;
    var last = first.next();
    var ret = 1;

    while (!last.equals(this.end()) && this._Key_eq(key, last.first)) {
      last = last.next();
      ++ret;
    }

    this._Erase_by_range(first, last);

    return ret;
  }
  /* ---------------------------------------------------------
      UTILITY
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.merge = function merge(source) {
    this.insert(source.begin(), source.end());
    source.clear();
  };

  return MultiMap;
}(MapContainer);

//================================================================

var module$1 = {
  __proto__: null,
  Container: Container,
  SetContainer: SetContainer,
  UniqueSet: UniqueSet,
  MultiSet: MultiSet,
  MapContainer: MapContainer,
  UniqueMap: UniqueMap,
  MultiMap: MultiMap
};

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
})(IAssociativeContainer || (IAssociativeContainer = {}));

//================================================================ 

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
}

//================================================================ 
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

var __s_pRoot = null;

//================================================================ 
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
 * Test whether two arguments are not equal.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Returns `true`, if two arguments are not equal, otherwise `false`.
 */

function not_equal_to(x, y) {
  return !equal_to(x, y);
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
}
/**
 * Test whether *x* is less than or equal to *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is less than or equal to *y*.
 */

function less_equal(x, y) {
  return less(x, y) || equal_to(x, y);
}
/**
 * Test whether *x* is greater than *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is greater than *y*.
 */

function greater(x, y) {
  return !less_equal(x, y);
}
/**
 * Test whether *x* is greater than or equal to *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is greater than or equal to *y*.
 */

function greater_equal(x, y) {
  return !less(x, y);
}

//================================================================ 
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
 * Create a {@link Pair}.
 *
 * @param first The 1st element.
 * @param second The 2nd element.
 *
 * @return A {@link Pair} object.
 */

function make_pair(first, second) {
  return new Pair(first, second);
}

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
 * Runtime Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var RuntimeError = /*#__PURE__*/function (_Exception) {
  _inheritsLoose(RuntimeError, _Exception);

  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  function RuntimeError(message) {
    return _Exception.call(this, message) || this;
  }

  return RuntimeError;
}(Exception);

/**
 * Range Error.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var RangeError = /*#__PURE__*/function (_RuntimeError) {
  _inheritsLoose(RangeError, _RuntimeError);

  /**
   * Initializer Constructor.
   *
   * @param message The error messgae.
   */
  function RangeError(message) {
    return _RuntimeError.call(this, message) || this;
  }

  return RangeError;
}(RuntimeError);

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

/**
 * Base array container.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var ArrayContainer = /*#__PURE__*/function (_Container) {
  _inheritsLoose(ArrayContainer, _Container);

  function ArrayContainer() {
    return _Container.apply(this, arguments) || this;
  }

  var _proto = ArrayContainer.prototype;

  /* =========================================================
      ACCESSORS
          - ITERATORS
          - INDEXES
  ============================================================
      ITERATORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  _proto.begin = function begin() {
    return this.nth(0);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.end = function end() {
    return this.nth(this.size());
  }
  /* ---------------------------------------------------------
      INDEXES
  --------------------------------------------------------- */

  /**
   * Get element at specific position.
   *
   * @param index Specific position.
   * @return The element at the *index*.
   */
  ;

  _proto.at = function at(index) {
    return this._At(index);
  }
  /**
   * Change element at specific position.
   *
   * @param index Specific position.
   * @param val The new value to change.
   */
  ;

  _proto.set = function set(index, val) {
    if (index < 0) throw ErrorGenerator.negative_index(this.source(), "at", index);else if (index >= this.size()) throw ErrorGenerator.excessive_index(this.source(), "at", index, this.size());

    this._Set(index, val);
  };

  _proto.front = function front(val) {
    if (arguments.length === 0) return this.at(0);else this.set(0, val);
  };

  _proto.back = function back(val) {
    var index = this.size() - 1;
    if (arguments.length === 0) return this.at(index);else this.set(index, val);
  };

  _proto.insert = function insert(pos) {
    // VALIDATION
    if (pos._Get_array() !== this) throw ErrorGenerator.not_my_iterator(this.source(), "insert");else if (pos.index() < 0) throw ErrorGenerator.negative_iterator(this.source(), "insert", pos.index());else if (pos.index() > this.size()) pos = this.end(); // BRANCHES

    if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 1) return this._Insert_by_repeating_val(pos, 1, arguments.length <= 1 ? undefined : arguments[1]);else if ((arguments.length <= 1 ? 0 : arguments.length - 1) === 2 && typeof (arguments.length <= 1 ? undefined : arguments[1]) === "number") return this._Insert_by_repeating_val(pos, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);else return this._Insert_by_range(pos, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
  };

  _proto._Insert_by_repeating_val = function _Insert_by_repeating_val(position, n, val) {
    var first = new Repeater(0, val);
    var last = new Repeater(n);
    return this._Insert_by_range(position, first, last);
  }
  /* ---------------------------------------------------------
      ERASE
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.pop_back = function pop_back() {
    if (this.empty() === true) throw ErrorGenerator.empty(this.source(), "pop_back");

    this._Pop_back();
  };

  _proto.erase = function erase(first, last) {
    if (last === void 0) {
      last = first.next();
    }

    // VALIDATION
    if (first._Get_array() !== this || last._Get_array() !== this) throw ErrorGenerator.not_my_iterator(this.source(), "erase");else if (first.index() < 0) throw ErrorGenerator.negative_iterator(this.source(), "erase", first.index());else if (first.index() > last.index()) throw new RangeError("Error on " + ErrorGenerator.get_class_name(this.source()) + ".erase(): first iterator has greater index than last -> (first = " + first.index() + ", last = " + last.index() + ")."); // ADJUSTMENT

    if (first.index() >= this.size()) return this.end(); // ERASE ELEMENTS

    return this._Erase_by_range(first, last);
  };

  return ArrayContainer;
}(Container);

var VectorContainer = /*#__PURE__*/function (_ArrayContainer, _Symbol$iterator) {
  _inheritsLoose(VectorContainer, _ArrayContainer);

  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */

  /**
   * Default Constructor.
   */
  function VectorContainer() {
    return _ArrayContainer.call(this) || this;
  }

  var _proto = VectorContainer.prototype;

  _proto.assign = function assign(first, second) {
    this.clear();
    this.insert(this.end(), first, second);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.clear = function clear() {
    this.data_.splice(0, this.data_.length);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.resize = function resize(n) {
    this.data_.length = n;
  }
  /* =========================================================
      ACCESSORS
  ========================================================= */

  /**
   * @inheritDoc
   */
  ;

  _proto.size = function size() {
    return this.data_.length;
  };

  _proto._At = function _At(index) {
    return this.data_[index];
  };

  _proto._Set = function _Set(index, val) {
    this.data_[index] = val;
  }
  /**
   * Access data.
   *
   * @return An array capsuled by this {@link Vector}.
   */
  ;

  _proto.data = function data() {
    return this.data_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto[_Symbol$iterator] = function () {
    return this.data_[Symbol.iterator]();
  }
  /* =========================================================
      ELEMENTS I/O
          - INSERT
          - ERASE
  ============================================================
      INSERT
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.push = function push() {
    var _this$data_;

    return (_this$data_ = this.data_).push.apply(_this$data_, arguments);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.push_back = function push_back(val) {
    this.data_.push(val);
  };

  _proto._Insert_by_range = function _Insert_by_range(position, first, last) {
    if (position.index() >= this.size()) {
      // WHEN INSERT TO THE LAST
      var prev_size = this.size();

      for (; !first.equals(last); first = first.next()) {
        this.data_.push(first.value);
      }

      return this.nth(prev_size);
    } else {
      var _this$data_2;

      //----
      // INSERT TO THE MIDDLE POSITION
      //----
      // CUT RIGHT SIDE
      var spliced_array = this.data_.splice(position.index()); // INSERT ELEMENTS

      for (; !first.equals(last); first = first.next()) {
        this.data_.push(first.value);
      }

      (_this$data_2 = this.data_).push.apply(_this$data_2, spliced_array); // CONCAT THE SPLICEDS


      return position;
    }
  }
  /* ---------------------------------------------------------
      ERASE
  --------------------------------------------------------- */
  ;

  _proto._Pop_back = function _Pop_back() {
    this.data_.pop();
  };

  _proto._Erase_by_range = function _Erase_by_range(first, last) {
    if (first.index() >= this.size()) return first; // ERASE ELEMENTS

    if (last.index() >= this.size()) {
      this.data_.splice(first.index());
      return this.end();
    } else this.data_.splice(first.index(), last.index() - first.index());

    return first;
  }
  /* ---------------------------------------------------------------
      UTILITIES
  --------------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.equals = function equals(obj) {
    return this.data_ === obj.data_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.swap = function swap(obj) {
    var _ref = [obj.data_, this.data_];
    this.data_ = _ref[0];
    obj.data_ = _ref[1];
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.data_;
  };

  return VectorContainer;
}(ArrayContainer, Symbol.iterator);

/**
 * Iterator of Array Containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var ArrayIteratorBase = /*#__PURE__*/function () {
  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */

  /**
   * Initializer Constructor.
   *
   * @param source Source container.
   * @param index Index number.
   */
  function ArrayIteratorBase(array, index) {
    this.array_ = array;
    this.index_ = index;
  }
  /**
   * @internal
   */


  var _proto = ArrayIteratorBase.prototype;

  _proto._Get_array = function _Get_array() {
    return this.array_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.index = function index() {
    return this.index_;
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
    return this.advance(-1);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.next = function next() {
    return this.advance(1);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.advance = function advance(n) {
    return this.array_.nth(this.index_ + n);
  }
  /* ---------------------------------------------------------
      COMPARES
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.equals = function equals(obj) {
    return equal_to(this.array_, obj.array_) && this.index_ === obj.index_;
  };

  _createClass(ArrayIteratorBase, [{
    key: "value",
    get: function get() {
      return this.array_.at(this.index_);
    }
    /**
     * @inheritDoc
     */
    ,
    set: function set(val) {
      this.array_.set(this.index_, val);
    }
  }]);

  return ArrayIteratorBase;
}();

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
 * Reverse iterator of Array Containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var ArrayReverseIteratorBase = /*#__PURE__*/function (_ReverseIterator) {
  _inheritsLoose(ArrayReverseIteratorBase, _ReverseIterator);

  function ArrayReverseIteratorBase() {
    return _ReverseIterator.apply(this, arguments) || this;
  }

  var _proto = ArrayReverseIteratorBase.prototype;

  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  _proto.advance = function advance(n) {
    return this._Create_neighbor(this.base().advance(-n));
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.index = function index() {
    return this.base_.index();
  }
  /**
   * @inheritDoc
   */
  ;

  _createClass(ArrayReverseIteratorBase, [{
    key: "value",
    get: function get() {
      return this.base_.value;
    }
    /**
     * @inheritDoc
     */
    ,
    set: function set(val) {
      this.base_.value = val;
    }
  }]);

  return ArrayReverseIteratorBase;
}(ReverseIterator);

/**
 * Vector storing set elements.
 *
 * @template Key Key type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var SetElementVector = /*#__PURE__*/function (_VectorContainer) {
  _inheritsLoose(SetElementVector, _VectorContainer);

  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */
  function SetElementVector(associative) {
    var _this;

    _this = _VectorContainer.call(this) || this;
    _this.data_ = [];
    _this.associative_ = associative;
    return _this;
  }

  var _proto = SetElementVector.prototype;

  _proto.nth = function nth(index) {
    return new SetElementVector.Iterator(this, index);
  }
  /**
   * @internal
   */
  ;

  SetElementVector._Swap_associative = function _Swap_associative(x, y) {
    var _ref = [y.associative_, x.associative_];
    x.associative_ = _ref[0];
    y.associative_ = _ref[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */
  ;

  _proto.source = function source() {
    return this.associative_;
  };

  return SetElementVector;
}(VectorContainer);
/**
 *
 */

(function (SetElementVector) {
  /**
   * Iterator of set container storing elements in a vector.
   *
   * @template Key Key type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  var Iterator = /*#__PURE__*/function (_ArrayIteratorBase) {
    _inheritsLoose(Iterator, _ArrayIteratorBase);

    function Iterator() {
      return _ArrayIteratorBase.apply(this, arguments) || this;
    }

    var _proto2 = Iterator.prototype;

    /**
     * @inheritDoc
     */
    _proto2.source = function source() {
      return this._Get_array().source();
    }
    /**
     * @inheritDoc
     */
    ;

    _proto2.reverse = function reverse() {
      return new ReverseIterator(this);
    };

    return Iterator;
  }(ArrayIteratorBase);

  SetElementVector.Iterator = Iterator;
  /**
   * Reverse iterator of set container storing elements in a vector.
   *
   * @template Key Key type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */

  var ReverseIterator = /*#__PURE__*/function (_ArrayReverseIterator) {
    _inheritsLoose(ReverseIterator, _ArrayReverseIterator);

    function ReverseIterator() {
      return _ArrayReverseIterator.apply(this, arguments) || this;
    }

    var _proto3 = ReverseIterator.prototype;

    _proto3._Create_neighbor = function _Create_neighbor(base) {
      return new ReverseIterator(base);
    };

    return ReverseIterator;
  }(ArrayReverseIteratorBase);

  SetElementVector.ReverseIterator = ReverseIterator;
})(SetElementVector || (SetElementVector = {}));

/* =========================================================
    GLOBAL FUNCTIONS
        - ACCESSORS
        - MOVERS
        - FACTORIES
============================================================
    ACCESSORS
--------------------------------------------------------- */

/**
 * Test whether a container is empty.
 *
 * @param source Target container.
 * @return Whether empty or not.
 */

function empty(source) {
  if (source instanceof Array) return source.length !== 0;else return source.empty();
}
/**
 * Get number of elements of a container.
 *
 * @param source Target container.
 * @return The number of elements in the container.
 */

function size(source) {
  if (source instanceof Array) return source.length;else return source.size();
}
function distance(first, last) {
  if (first.index instanceof Function) return _Distance_via_index(first, last);
  var ret = 0;

  for (; !first.equals(last); first = first.next()) {
    ++ret;
  }

  return ret;
}

function _Distance_via_index(first, last) {
  var x = first.index();
  var y = last.index();
  if (first.base instanceof Function) return x - y;else return y - x;
}

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
 * Get previous iterator.
 *
 * @param it Iterator to move.
 * @param n Step to move prev.
 * @return An iterator moved to prev *n* steps.
 */

function prev(it, n) {
  if (n === void 0) {
    n = 1;
  }

  if (n === 1) return it.prev();else return advance(it, -n);
}
/**
 * Get next iterator.
 *
 * @param it Iterator to move.
 * @param n Step to move next.
 * @return Iterator moved to next *n* steps.
 */

function next(it, n) {
  if (n === void 0) {
    n = 1;
  }

  if (n === 1) return it.next();else return advance(it, n);
}

/* =========================================================
    BINARY SEARCH
========================================================= */

/**
 * Get iterator to lower bound.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element equal or after the val.
 */

function lower_bound(first, last, val, comp) {
  if (comp === void 0) {
    comp = less;
  }

  var count = distance(first, last);

  while (count > 0) {
    var step = Math.floor(count / 2);
    var it = advance(first, step);

    if (comp(it.value, val)) {
      first = it.next();
      count -= step + 1;
    } else count = step;
  }

  return first;
}
/**
 * Get iterator to upper bound.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Iterator to the first element after the key.
 */

function upper_bound(first, last, val, comp) {
  if (comp === void 0) {
    comp = less;
  }

  var count = distance(first, last);

  while (count > 0) {
    var step = Math.floor(count / 2);
    var it = advance(first, step);

    if (!comp(val, it.value)) {
      first = it.next();
      count -= step + 1;
    } else count = step;
  }

  return first;
}
/**
 * Get range of equal elements.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Pair of {@link lower_bound} and {@link upper_bound}.
 */

function equal_range(first, last, val, comp) {
  if (comp === void 0) {
    comp = less;
  }

  first = lower_bound(first, last, val, comp);
  var second = upper_bound(first, last, val, comp);
  return new Pair(first, second);
}
/**
 * Test whether a value exists in sorted range.
 *
 * @param first Input iterator of the first position.
 * @param last Input iterator of the last position.
 * @param val Value to search for.
 * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Default is {@link less}.
 *
 * @return Whether the value exists or not.
 */

function binary_search(first, last, val, comp) {
  if (comp === void 0) {
    comp = less;
  }

  first = lower_bound(first, last, val, comp);
  return !first.equals(last) && !comp(val, first.value);
}

/**
 * Unique-key Set based on sorted array.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var FlatSet = /*#__PURE__*/function (_UniqueTreeSet) {
  _inheritsLoose(FlatSet, _UniqueTreeSet);

  function FlatSet() {
    var _this;

    // INITIALIZATION
    _this = _UniqueTreeSet.call(this, function (thisArg) {
      return new SetElementVector(thisArg);
    }) || this; // OVERLOADINGS

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    ITreeContainer.construct.apply(ITreeContainer, [_assertThisInitialized(_this), FlatSet, function (comp) {
      _this.key_comp_ = comp;
    }].concat(args));
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = FlatSet.prototype;

  _proto.swap = function swap(obj) {
    // SWAP CONTENTS
    var _ref = [obj.data_, this.data_];
    this.data_ = _ref[0];
    obj.data_ = _ref[1];

    SetElementVector._Swap_associative(this.data_, obj.data_); // SWAP COMPARATORS


    var _ref2 = [obj.key_comp_, this.key_comp_];
    this.key_comp_ = _ref2[0];
    obj.key_comp_ = _ref2[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.nth = function nth(index) {
    return this.data_.nth(index);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.key_comp = function key_comp() {
    return this.key_comp_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.lower_bound = function lower_bound$1(key) {
    return lower_bound(this.begin(), this.end(), key, this.value_comp());
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.upper_bound = function upper_bound$1(key) {
    return upper_bound(this.begin(), this.end(), key, this.value_comp());
  }
  /* ---------------------------------------------------------
      POST-PROCESS
  --------------------------------------------------------- */
  ;

  _proto._Handle_insert = function _Handle_insert(_ref3, _ref4) {
    _objectDestructuringEmpty(_ref3);

    _objectDestructuringEmpty(_ref4);
  };

  _proto._Handle_erase = function _Handle_erase(_ref5, _ref6) {
    _objectDestructuringEmpty(_ref5);

    _objectDestructuringEmpty(_ref6);
  };

  return FlatSet;
}(UniqueTreeSet);
/**
 *
 */

(function (FlatSet) {
  // BODY
  FlatSet.Iterator = SetElementVector.Iterator;
  FlatSet.ReverseIterator = SetElementVector.ReverseIterator;
  FlatSet.__MODULE = "experimental";
})(FlatSet || (FlatSet = {}));

/**
 * Basic tree set allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiTreeSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var MultiTreeSet = /*#__PURE__*/function (_MultiSet) {
  _inheritsLoose(MultiTreeSet, _MultiSet);

  function MultiTreeSet() {
    return _MultiSet.apply(this, arguments) || this;
  }

  var _proto = MultiTreeSet.prototype;

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

  _proto.count = function count(key) {
    var it = this.find(key);
    var ret = 0;

    for (; !it.equals(this.end()) && this._Key_eq(it.value, key); it = it.next()) {
      ++ret;
    }

    return ret;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.equal_range = function equal_range(key) {
    return new Pair(this.lower_bound(key), this.upper_bound(key));
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
    var it = this.upper_bound(key); // ITERATOR TO RETURN

    it = this.data_.insert(it, key);

    this._Handle_insert(it, it.next());

    return it;
  };

  _proto._Insert_by_hint = function _Insert_by_hint(hint, key) {
    var validate = ITreeContainer.emplacable(this, hint, key);

    if (validate) {
      var it = this.data_.insert(hint, key);

      this._Handle_insert(it, it.next());

      return it;
    } else return this._Insert_by_key(key);
  };

  _proto._Insert_by_range = function _Insert_by_range(first, last) {
    for (var it = first; !it.equals(last); it = it.next()) {
      this._Insert_by_key(it.value);
    }
  };

  return MultiTreeSet;
}(MultiSet);

/**
 * Multiple-key Set based on sorted array.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var FlatMultiSet = /*#__PURE__*/function (_MultiTreeSet) {
  _inheritsLoose(FlatMultiSet, _MultiTreeSet);

  function FlatMultiSet() {
    var _this;

    // INITIALIZATION
    _this = _MultiTreeSet.call(this, function (thisArg) {
      return new SetElementVector(thisArg);
    }) || this; // OVERLOADINGS

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    ITreeContainer.construct.apply(ITreeContainer, [_assertThisInitialized(_this), FlatMultiSet, function (comp) {
      _this.key_comp_ = comp;
    }].concat(args));
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = FlatMultiSet.prototype;

  _proto.swap = function swap(obj) {
    // SWAP CONTENTS
    var _ref = [obj.data_, this.data_];
    this.data_ = _ref[0];
    obj.data_ = _ref[1];

    SetElementVector._Swap_associative(this.data_, obj.data_); // SWAP COMPARATORS


    var _ref2 = [obj.key_comp_, this.key_comp_];
    this.key_comp_ = _ref2[0];
    obj.key_comp_ = _ref2[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.nth = function nth(index) {
    return this.data_.nth(index);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.key_comp = function key_comp() {
    return this.key_comp_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.lower_bound = function lower_bound$1(key) {
    return lower_bound(this.begin(), this.end(), key, this.value_comp());
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.upper_bound = function upper_bound$1(key) {
    return upper_bound(this.begin(), this.end(), key, this.value_comp());
  }
  /* ---------------------------------------------------------
      POST-PROCESS
  --------------------------------------------------------- */
  ;

  _proto._Handle_insert = function _Handle_insert(_ref3, _ref4) {
    _objectDestructuringEmpty(_ref3);

    _objectDestructuringEmpty(_ref4);
  };

  _proto._Handle_erase = function _Handle_erase(_ref5, _ref6) {
    _objectDestructuringEmpty(_ref5);

    _objectDestructuringEmpty(_ref6);
  };

  return FlatMultiSet;
}(MultiTreeSet);
/**
 *
 */

(function (FlatMultiSet) {
  // BODY
  FlatMultiSet.Iterator = SetElementVector.Iterator;
  FlatMultiSet.ReverseIterator = SetElementVector.ReverseIterator;
  FlatMultiSet.__MODULE = "experimental";
})(FlatMultiSet || (FlatMultiSet = {}));

/**
 * Entry for mapping.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var Entry = /*#__PURE__*/function () {
  /**
   * Intializer Constructor.
   *
   * @param first The first, key element.
   * @param second The second, mapped element.
   */
  function Entry(first, second) {
    this.first = first;
    this.second = second;
  }
  /**
   * @inheritDoc
   */


  var _proto = Entry.prototype;

  _proto.equals = function equals(obj) {
    return equal_to(this.first, obj.first);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.less = function less$1(obj) {
    return less(this.first, obj.first);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.hashCode = function hashCode() {
    return hash(this.first);
  };

  return Entry;
}();

/**
 * Basic tree map blocking duplicated key.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link UniqueTreeMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var UniqueTreeMap = /*#__PURE__*/function (_UniqueMap) {
  _inheritsLoose(UniqueTreeMap, _UniqueMap);

  function UniqueTreeMap() {
    return _UniqueMap.apply(this, arguments) || this;
  }

  var _proto = UniqueTreeMap.prototype;

  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  _proto.find = function find(key) {
    var it = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(key, it.first)) return it;else return this.end();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.equal_range = function equal_range(key) {
    var it = this.lower_bound(key);
    return new Pair(it, !it.equals(this.end()) && this._Key_eq(key, it.first) ? it.next() : it);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.value_comp = function value_comp() {
    var _this = this;

    return function (x, y) {
      return _this.key_comp()(x.first, y.first);
    };
  };

  _proto._Key_eq = function _Key_eq(x, y) {
    return !this.key_comp()(x, y) && !this.key_comp()(y, x);
  }
  /* ---------------------------------------------------------
      INSERT
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.emplace = function emplace(key, val) {
    // FIND POSITION TO INSERT
    var it = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(it.first, key)) return new Pair(it, false); // ITERATOR TO RETURN

    it = this.data_.insert(it, new Entry(key, val));

    this._Handle_insert(it, it.next());

    return new Pair(it, true);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.emplace_hint = function emplace_hint(hint, key, val) {
    var elem = new Entry(key, val);
    var validate = ITreeContainer.emplacable(this, hint, elem);

    if (validate) {
      var it = this.data_.insert(hint, elem);

      this._Handle_insert(it, it.next());

      return it;
    } else return this.emplace(key, val).first;
  };

  return UniqueTreeMap;
}(UniqueMap);

/**
 * Vector storing map elements.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var MapElementVector = /*#__PURE__*/function (_VectorContainer) {
  _inheritsLoose(MapElementVector, _VectorContainer);

  /* ---------------------------------------------------------
      CONSTRUCTORS
  --------------------------------------------------------- */
  function MapElementVector(associative) {
    var _this;

    _this = _VectorContainer.call(this) || this;
    _this.data_ = [];
    _this.associative_ = associative;
    return _this;
  }

  var _proto = MapElementVector.prototype;

  _proto.nth = function nth(index) {
    return new MapElementVector.Iterator(this, index);
  }
  /**
   * @internal
   */
  ;

  MapElementVector._Swap_associative = function _Swap_associative(x, y) {
    var _ref = [y.associative_, x.associative_];
    x.associative_ = _ref[0];
    y.associative_ = _ref[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */
  ;

  _proto.source = function source() {
    return this.associative_;
  };

  return MapElementVector;
}(VectorContainer);
/**
 *
 */

(function (MapElementVector) {
  /**
   * Iterator of map container storing elements in a vector.
   *
   * @template Key Key type
   * @template T Mapped type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  var Iterator = /*#__PURE__*/function (_ArrayIteratorBase) {
    _inheritsLoose(Iterator, _ArrayIteratorBase);

    function Iterator() {
      return _ArrayIteratorBase.apply(this, arguments) || this;
    }

    var _proto2 = Iterator.prototype;

    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */

    /**
     * @inheritDoc
     */
    _proto2.source = function source() {
      return this._Get_array().source();
    }
    /**
     * @inheritDoc
     */
    ;

    _proto2.reverse = function reverse() {
      return new ReverseIterator(this);
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */

    /**
     * @inheritDoc
     */
    ;

    _createClass(Iterator, [{
      key: "first",
      get: function get() {
        return this.value.first;
      }
      /**
       * @inheritDoc
       */

    }, {
      key: "second",
      get: function get() {
        return this.value.second;
      }
      /**
       * @inheritDoc
       */
      ,
      set: function set(val) {
        this.value.second = val;
      }
    }]);

    return Iterator;
  }(ArrayIteratorBase);

  MapElementVector.Iterator = Iterator;
  /**
   * Reverse iterator of map container storing elements in a vector.
   *
   * @template Key Key type
   * @template T Mapped type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */

  var ReverseIterator = /*#__PURE__*/function (_ArrayReverseIterator) {
    _inheritsLoose(ReverseIterator, _ArrayReverseIterator);

    function ReverseIterator() {
      return _ArrayReverseIterator.apply(this, arguments) || this;
    }

    var _proto3 = ReverseIterator.prototype;

    /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
    _proto3._Create_neighbor = function _Create_neighbor(base) {
      return new ReverseIterator(base);
    }
    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */

    /**
     * @inheritDoc
     */
    ;

    _createClass(ReverseIterator, [{
      key: "first",
      get: function get() {
        return this.value.first;
      }
      /**
       * @inheritDoc
       */

    }, {
      key: "second",
      get: function get() {
        return this.value.second;
      }
      /**
       * @inheritDoc
       */
      ,
      set: function set(val) {
        this.value.second = val;
      }
    }]);

    return ReverseIterator;
  }(ArrayReverseIteratorBase);

  MapElementVector.ReverseIterator = ReverseIterator;
})(MapElementVector || (MapElementVector = {}));

/**
 * Unique-key Map based on sorted array.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var FlatMap = /*#__PURE__*/function (_UniqueTreeMap) {
  _inheritsLoose(FlatMap, _UniqueTreeMap);

  function FlatMap() {
    var _this;

    // INITIALIZATION
    _this = _UniqueTreeMap.call(this, function (thisArg) {
      return new MapElementVector(thisArg);
    }) || this; // OVERLOADINGS

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    ITreeContainer.construct.apply(ITreeContainer, [_assertThisInitialized(_this), FlatMap, function (comp) {
      _this.key_comp_ = comp;
    }].concat(args));
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = FlatMap.prototype;

  _proto.swap = function swap(obj) {
    // SWAP CONTENTS
    var _ref = [obj.data_, this.data_];
    this.data_ = _ref[0];
    obj.data_ = _ref[1];

    MapElementVector._Swap_associative(this.data_, obj.data_); // SWAP COMPARATORS


    var _ref2 = [obj.key_comp_, this.key_comp_];
    this.key_comp_ = _ref2[0];
    obj.key_comp_ = _ref2[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.nth = function nth(index) {
    return this.data_.nth(index);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.key_comp = function key_comp() {
    return this.key_comp_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.lower_bound = function lower_bound$1(key) {
    return lower_bound(this.begin(), this.end(), this._Capsule_key(key), this.value_comp());
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.upper_bound = function upper_bound$1(key) {
    return upper_bound(this.begin(), this.end(), this._Capsule_key(key), this.value_comp());
  };

  _proto._Capsule_key = function _Capsule_key(key) {
    return {
      first: key
    };
  }
  /* ---------------------------------------------------------
      POST-PROCESS
  --------------------------------------------------------- */
  ;

  _proto._Handle_insert = function _Handle_insert(_ref3, _ref4) {
    _objectDestructuringEmpty(_ref3);

    _objectDestructuringEmpty(_ref4);
  };

  _proto._Handle_erase = function _Handle_erase(_ref5, _ref6) {
    _objectDestructuringEmpty(_ref5);

    _objectDestructuringEmpty(_ref6);
  };

  return FlatMap;
}(UniqueTreeMap);
/**
 *
 */

(function (FlatMap) {
  // BODY
  FlatMap.Iterator = MapElementVector.Iterator;
  FlatMap.ReverseIterator = MapElementVector.ReverseIterator;
  FlatMap.__MODULE = "experimental";
})(FlatMap || (FlatMap = {}));

/**
 * Basic tree map allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiTreeMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var MultiTreeMap = /*#__PURE__*/function (_MultiMap) {
  _inheritsLoose(MultiTreeMap, _MultiMap);

  function MultiTreeMap() {
    return _MultiMap.apply(this, arguments) || this;
  }

  var _proto = MultiTreeMap.prototype;

  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  _proto.find = function find(key) {
    var it = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(key, it.first)) return it;else return this.end();
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.count = function count(key) {
    var it = this.find(key);
    var ret = 0;

    for (; !it.equals(this.end()) && this._Key_eq(it.first, key); it = it.next()) {
      ++ret;
    }

    return ret;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.equal_range = function equal_range(key) {
    return new Pair(this.lower_bound(key), this.upper_bound(key));
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.value_comp = function value_comp() {
    var _this = this;

    return function (x, y) {
      return _this.key_comp()(x.first, y.first);
    };
  };

  _proto._Key_eq = function _Key_eq(x, y) {
    return !this.key_comp()(x, y) && !this.key_comp()(y, x);
  }
  /* ---------------------------------------------------------
      INSERT
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.emplace = function emplace(key, val) {
    // FIND POSITION TO INSERT
    var it = this.upper_bound(key); // ITERATOR TO RETURN

    it = this.data_.insert(it, new Entry(key, val));

    this._Handle_insert(it, it.next());

    return it;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.emplace_hint = function emplace_hint(hint, key, val) {
    var elem = new Entry(key, val);
    var validate = ITreeContainer.emplacable(this, hint, elem);

    if (validate) {
      var it = this.data_.insert(hint, elem);

      this._Handle_insert(it, it.next());

      return it;
    } else return this.emplace(key, val);
  };

  _proto._Insert_by_range = function _Insert_by_range(first, last) {
    for (var it = first; !it.equals(last); it = it.next()) {
      this.emplace(it.value.first, it.value.second);
    }
  };

  return MultiTreeMap;
}(MultiMap);

/**
 * Multiple-key Map based on sorted array.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var FlatMultiMap = /*#__PURE__*/function (_MultiTreeMap) {
  _inheritsLoose(FlatMultiMap, _MultiTreeMap);

  function FlatMultiMap() {
    var _this;

    // INITIALIZATION
    _this = _MultiTreeMap.call(this, function (thisArg) {
      return new MapElementVector(thisArg);
    }) || this; // OVERLOADINGS

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    ITreeContainer.construct.apply(ITreeContainer, [_assertThisInitialized(_this), FlatMultiMap, function (comp) {
      _this.key_comp_ = comp;
    }].concat(args));
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = FlatMultiMap.prototype;

  _proto.swap = function swap(obj) {
    // SWAP CONTENTS
    var _ref = [obj.data_, this.data_];
    this.data_ = _ref[0];
    obj.data_ = _ref[1];

    MapElementVector._Swap_associative(this.data_, obj.data_); // SWAP COMPARATORS


    var _ref2 = [obj.key_comp_, this.key_comp_];
    this.key_comp_ = _ref2[0];
    obj.key_comp_ = _ref2[1];
  }
  /* ---------------------------------------------------------
      ACCESSORS
  --------------------------------------------------------- */

  /**
   * @inheritDoc
   */
  ;

  _proto.nth = function nth(index) {
    return this.data_.nth(index);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.key_comp = function key_comp() {
    return this.key_comp_;
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.lower_bound = function lower_bound$1(key) {
    return lower_bound(this.begin(), this.end(), this._Capsule_key(key), this.value_comp());
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.upper_bound = function upper_bound$1(key) {
    return upper_bound(this.begin(), this.end(), this._Capsule_key(key), this.value_comp());
  };

  _proto._Capsule_key = function _Capsule_key(key) {
    return {
      first: key
    };
  }
  /* ---------------------------------------------------------
      POST-PROCESS
  --------------------------------------------------------- */
  ;

  _proto._Handle_insert = function _Handle_insert(_ref3, _ref4) {
    _objectDestructuringEmpty(_ref3);

    _objectDestructuringEmpty(_ref4);
  };

  _proto._Handle_erase = function _Handle_erase(_ref5, _ref6) {
    _objectDestructuringEmpty(_ref5);

    _objectDestructuringEmpty(_ref6);
  };

  return FlatMultiMap;
}(MultiTreeMap);
/**
 *
 */

(function (FlatMultiMap) {
  // BODY
  FlatMultiMap.Iterator = MapElementVector.Iterator;
  FlatMultiMap.ReverseIterator = MapElementVector.ReverseIterator;
  FlatMultiMap.__MODULE = "experimental";
})(FlatMultiMap || (FlatMultiMap = {}));

//================================================================

var module$2 = {
  __proto__: null,
  get FlatSet () { return FlatSet; },
  get FlatMultiSet () { return FlatMultiSet; },
  get FlatMap () { return FlatMap; },
  get FlatMultiMap () { return FlatMultiMap; }
};

var InsertIteratorBase = /*#__PURE__*/function () {
  function InsertIteratorBase() {}

  var _proto = InsertIteratorBase.prototype;

  /**
   * @inheritDoc
   */
  _proto.next = function next() {
    return this;
  };

  return InsertIteratorBase;
}();

/**
 * Insert iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var InsertIterator = /*#__PURE__*/function (_InsertIteratorBase) {
  _inheritsLoose(InsertIterator, _InsertIteratorBase);

  /* ---------------------------------------------------------
      METHODS
  --------------------------------------------------------- */

  /**
   * Initializer Constructor.
   *
   * @param container Target container to insert.
   * @param it Iterator to the position to insert.
   */
  function InsertIterator(container, it) {
    var _this;

    _this = _InsertIteratorBase.call(this) || this;
    _this.container_ = container;
    _this.it_ = it;
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = InsertIterator.prototype;

  /**
   * @inheritDoc
   */
  _proto.equals = function equals(obj) {
    return equal_to(this.it_, obj.it_);
  };

  _createClass(InsertIterator, [{
    key: "value",
    set: function set(val) {
      this.it_ = this.container_.insert(this.it_, val);
      this.it_ = this.it_.next();
    }
  }]);

  return InsertIterator;
}(InsertIteratorBase);

/**
 * Front insert iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var FrontInsertIterator = /*#__PURE__*/function (_InsertIteratorBase) {
  _inheritsLoose(FrontInsertIterator, _InsertIteratorBase);

  /* ---------------------------------------------------------
      METHODS
  --------------------------------------------------------- */

  /**
   * Initializer Constructor.
   *
   * @param source The source container.
   */
  function FrontInsertIterator(source) {
    var _this;

    _this = _InsertIteratorBase.call(this) || this;
    _this.source_ = source;
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = FrontInsertIterator.prototype;

  /**
   * @inheritDoc
   */
  _proto.equals = function equals(obj) {
    return equal_to(this.source_, obj.source_);
  };

  _createClass(FrontInsertIterator, [{
    key: "value",
    set: function set(val) {
      this.source_.push_front(val);
    }
  }]);

  return FrontInsertIterator;
}(InsertIteratorBase);

/**
 * Back insert iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */

var BackInsertIterator = /*#__PURE__*/function (_InsertIteratorBase) {
  _inheritsLoose(BackInsertIterator, _InsertIteratorBase);

  /* ---------------------------------------------------------
      METHODS
  --------------------------------------------------------- */

  /**
   * Initializer Constructor.
   *
   * @param source The source container.
   */
  function BackInsertIterator(source) {
    var _this;

    _this = _InsertIteratorBase.call(this) || this;
    _this.source_ = source;
    return _this;
  }
  /**
   * @inheritDoc
   */


  var _proto = BackInsertIterator.prototype;

  /**
   * @inheritDoc
   */
  _proto.equals = function equals(obj) {
    return equal_to(this.source_, obj.source_);
  };

  _createClass(BackInsertIterator, [{
    key: "value",
    set: function set(val) {
      this.source_.push_back(val);
    }
  }]);

  return BackInsertIterator;
}(InsertIteratorBase);

var ArrayReverseIterator = /*#__PURE__*/function (_ArrayReverseIterator) {
  _inheritsLoose(ArrayReverseIterator, _ArrayReverseIterator);

  function ArrayReverseIterator() {
    return _ArrayReverseIterator.apply(this, arguments) || this;
  }

  var _proto = ArrayReverseIterator.prototype;

  _proto._Create_neighbor = function _Create_neighbor(base) {
    return new ArrayReverseIterator(base);
  };

  return ArrayReverseIterator;
}(ArrayReverseIteratorBase);

var ArrayIterator = /*#__PURE__*/function (_ArrayIteratorBase) {
  _inheritsLoose(ArrayIterator, _ArrayIteratorBase);

  function ArrayIterator() {
    return _ArrayIteratorBase.apply(this, arguments) || this;
  }

  var _proto = ArrayIterator.prototype;

  /**
   * @inheritDoc
   */
  _proto.reverse = function reverse() {
    return new ArrayReverseIterator(this);
  }
  /**
   * @inheritDoc
   */
  ;

  _proto.source = function source() {
    return this._Get_array();
  };

  return ArrayIterator;
}(ArrayIteratorBase);

/**
 * Vector, an array with variable capacity.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
