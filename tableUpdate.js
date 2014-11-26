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
    if (promiseland._hasModule({ hashStr: "1d30ccd1d2e5d6d4add2d1db1598af93" })){ return promiseland._getModule("1d30ccd1d2e5d6d4add2d1db1598af93"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "1d30ccd1d2e5d6d4add2d1db1598af93", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*scan*/;
var PL$7/*canConvert*/;
PL$3(function(){;
__requireFun("./tablescan").then(PL$3(function(PL$6){PL$5/*scan*/ = PL$6;
PL$7/*canConvert*/ = (function(PL$8/*parExisting*/, PL$9/*parNew*/){
;
;
});
PL$1.resolve((function(PL$10/*par*/){
var PL$11 = new __Promise();
var PL$13 = function(code){ return function(res){ try{code(res);}catch(e){ PL$11.reject(e); }; }; };
var PL$14 = function(e){ PL$11.reject(e); };
var PL$15/*con*/;
var PL$16/*table*/;
var PL$17/*indexes*/;
var PL$18/*pk*/;
var PL$19/*existing*/;
var PL$21/*createTable*/;
var PL$22/*dif*/;
var PL$23/*droptemp*/;
var PL$24/*excols*/;
var PL$25/*cols*/;
var PL$26/*i*/;
PL$13(function(){;
PL$15/*con*/ = PL$10/*par*/["connection"];
PL$16/*table*/ = PL$10/*par*/["table"];
PL$17/*indexes*/ = PL$10/*par*/["indexes"];
PL$18/*pk*/ = PL$10/*par*/["pk"];
PL$5/*scan*/({"connection": PL$15/*con*/,
"name": PL$16/*table*/["getName"](),
"schema": PL$16/*table*/["getSchema"]()}).then(PL$13(function(PL$20){PL$19/*existing*/ = PL$20;
PL$21/*createTable*/ = true;
PL$22/*dif*/ = false;
PL$23/*droptemp*/ = false;
if(PL$19/*existing*/){
PL$24/*excols*/ = PL$19/*existing*/["table"]["columns"];
PL$25/*cols*/ = PL$16/*table*/["columns"];
PL$26/*i*/ = 0;
if((PL$25/*cols*/["length"] == PL$24/*excols*/["length"])){
for(PL$26/*i*/ = 0;(PL$26/*i*/ < PL$25/*cols*/["length"]);++PL$26/*i*/){{if((PL$25/*cols*/[0]["name"] != PL$24/*excols*/[0]["name"])){
PL$22/*dif*/ = true;;
break;;
};
;
if((PL$25/*cols*/[0]["dataType"] != PL$24/*excols*/[0]["dataType"])){
PL$22/*dif*/ = true;;
break;;
};
;
}};
;

}else{
PL$22/*dif*/ = true;;
};
;
if(PL$22/*dif*/){
PL$19/*existing*/["alter"]()["rename"]("_temp_rename");;
PL$23/*droptemp*/ = true;;

}else{
PL$21/*createTable*/ = false;;
};
;
};
;
var PL$27 = new __Promise();
if(PL$21/*createTable*/){
PL$15/*con*/["query"](PL$16/*table*/["create"]()).then(PL$13(function(PL$28){PL$28;;
PL$27.resolve();;
}), PL$14);
;
}else{
PL$27.resolve();}; PL$27.then(function(){;
;
if((PL$19/*existing*/ && PL$22/*dif*/)){
};
;
PL$11.resolve(); return;;
});}), PL$14);
;})();
return PL$11;
})); return;;
PL$1.resolve(); return;;
}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();