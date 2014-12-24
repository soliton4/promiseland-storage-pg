(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "2e41d5b56f43c24608e5e5d60a232ab3" })){ return promiseland._getModule("2e41d5b56f43c24608e5e5d60a232ab3"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "2e41d5b56f43c24608e5e5d60a232ab3", "module": PL$1, promising: true });
var PL$19/*console*/;try{PL$19/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$9/*conString*/;
var PL$10/*Con*/;
var PL$12/*con*/;
var PL$13/*sql*/;
var PL$15/*scan*/;
var PL$17/*tab*/;
PL$3(function(){;
var PL$5 = new __Promise();
var PL$6 = new __Promise();
var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
var PL$8 = function(e){ PL$6.resolve(e); };
PL$7/*try catch*/(function(){PL$9/*conString*/ = "postgres://sol:soldb44@localhost/testdb1";
__requireFun("./DbCon").then(PL$7/*try catch*/(function(PL$11){PL$10/*Con*/ = PL$11;
PL$12/*con*/ = new PL$10/*Con*/(PL$9/*conString*/);
__requireFun("sql").then(PL$7/*try catch*/(function(PL$14){PL$13/*sql*/ = PL$14;
PL$13/*sql*/["setDialect"]("postgres");;
__requireFun("./tablescan").then(PL$7/*try catch*/(function(PL$16){PL$15/*scan*/ = PL$16;
PL$15/*scan*/({"connection": PL$12/*con*/,
"name": "tab1"}).then(PL$7/*try catch*/(function(PL$18){PL$17/*tab*/ = PL$18;
PL$19/*console*/["log"](PL$17/*tab*/["table"]["columns"]);;
PL$5.resolve();
}), PL$8);
;}), PL$8);
;}), PL$8);
;}), PL$8);
;})();
PL$6.then(PL$3(function(PL$20/*e*/){PL$19/*console*/["log"](PL$20/*e*/);;
PL$5.resolve();;
}));
PL$5.then(PL$3(function(){;
PL$1.resolve(); return;;
}), PL$4)})();
return PL$1;
})();
;;
return PL$1});
})();