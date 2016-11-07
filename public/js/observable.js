function Observable(obj){
  obj = obj || {};
  var _this = this;

  _this._handlers = [];
  _this._props = {};

  Object.keys(obj).forEach(function(prop){
    _this.set(prop, obj[prop]);
  });
}

Observable.prototype = {
  _fireHandlers: function(){
    this._handlers.forEach(function(handler){
      if (typeof handler === 'function') handler();
    });
  },
  set: function(prop, value){
    this._props[prop] = value;
    this._fireHandlers();
  },
  delete: function(prop) {
    delete this._props[prop];
    this._fireHandlers();
  },
  get: function(prop) {
    return this._props[prop];
  },
  onChange: function(handler, args, context){
    context = context || this._props;
    this._handlers.push(handler.bind(context, args));
  }
};

