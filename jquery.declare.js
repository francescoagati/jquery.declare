(function() {
  var __slice = Array.prototype.slice;
  (function() {
    var fn, scopes_cache;
    scopes_cache = {};
    fn = function() {
      var args, scope;
      scope = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      scopes_cache[scope].apply(this, args);
      return this;
    };
    fn.add = function(scopes) {
      var fn, scope, _results;
      _results = [];
      for (scope in scopes) {
        fn = scopes[scope];
        _results.push(scopes_cache[scope] = fn);
      }
      return _results;
    };
    fn.remove = function(scope) {
      return delete scopes_cache[scope];
    };
    return jQuery.fn.declare = fn;
  })();
}).call(this);
