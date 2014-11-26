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
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "ef68effc80d222f549ae3d181d1dd698" })){ return promiseland._getModule("ef68effc80d222f549ae3d181d1dd698"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "ef68effc80d222f549ae3d181d1dd698", "module": PL$1, promising: true });
var PL$16/*Callback*/;try{PL$16/*Callback*/ = Callback;}catch(e){};
var PL$22/*promiseland*/;try{PL$22/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*pg*/;
PL$3(function(){;
__requireFun("pg").then(PL$3(function(PL$6){PL$5/*pg*/ = PL$6;
PL$1.resolve((function(){var PL$7/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$8/*parConStr*/){
;
this["conStr"] = PL$8/*parConStr*/;;
;
}),
"query": (function(PL$9/*parSqlStr*/, PL$10/*parData*/){
var PL$11 = new __Promise();
var PL$13 = function(code){ return function(res){ try{code(res);}catch(e){ PL$11.reject(e); }; }; };
var PL$14 = function(e){ PL$11.reject(e); };
var PL$15/*cb*/;
var PL$18/*conRes*/;
var PL$20/*client*/;
var PL$21/*done*/;
var PL$17/*this*/ = this;
PL$13(function(){;
if((typeof PL$9/*parSqlStr*/ == "object")){
PL$10/*parData*/ = PL$9/*parSqlStr*/["values"];;
PL$9/*parSqlStr*/ = PL$9/*parSqlStr*/["text"];;
};
;
PL$15/*cb*/ = new PL$16/*Callback*/();
PL$5/*pg*/["connect"](PL$17/*this*/["conStr"], PL$15/*cb*/);;
PL$15/*cb*/["promise"].then(PL$13(function(PL$19){PL$18/*conRes*/ = PL$19;
if(PL$18/*conRes*/[0]){
throw PL$18/*conRes*/[0];
};
;
PL$20/*client*/ = PL$18/*conRes*/[1];
PL$21/*done*/ = PL$18/*conRes*/[2];
PL$15/*cb*/ = new PL$22/*promiseland*/["CallbackErrorFirst"]();;
PL$20/*client*/["query"](PL$9/*parSqlStr*/, PL$10/*parData*/, PL$15/*cb*/);;
PL$21/*done*/();;
PL$15/*cb*/["promise"].then(PL$13(function(PL$23){PL$11.resolve(PL$23); return;;
PL$11.resolve(); return;;
}), PL$14);
;}), PL$14);
;})();
return PL$11;
})}, [], PL$7/*inherited*/);
return res; })()); return;;
PL$1.resolve(); return;;
}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();