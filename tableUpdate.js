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
    if (promiseland._hasModule({ hashStr: "39c21af7e1153ec323a8195aa5a7c03d" })){ return promiseland._getModule("39c21af7e1153ec323a8195aa5a7c03d"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "39c21af7e1153ec323a8195aa5a7c03d", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*scan*/;
var PL$7/*sql*/;
var PL$9/*canConvert*/;
PL$3(function(){

  ;
  __requireFun("./tablescan").then(PL$3(function(PL$6){PL$5/*scan*/ = PL$6;
  __requireFun("sql").then(PL$3(function(PL$8){PL$7/*sql*/ = PL$8;
  PL$9/*canConvert*/ = (function(PL$10/*parExisting*/, PL$11/*parNew*/){
  
    ;
    ;});
  PL$1.resolve((function(PL$12/*par*/){
  var PL$13 = new __Promise();
var PL$15 = function(code){ return function(res){ try{code(res);}catch(e){ PL$13.reject(e); }; }; };
var PL$16 = function(e){ PL$13.reject(e); };
var PL$17/*con*/;
var PL$18/*table*/;
var PL$19/*indexes*/;
var PL$20/*pk*/;
var PL$21/*existing*/;
var PL$23/*createTable*/;
var PL$24/*dif*/;
var PL$25/*droptemp*/;
var PL$27/*excols*/;
var PL$28/*cols*/;
var PL$29/*i*/;
var PL$35/*dropOld*/;
PL$15(function(){
  
    ;
    PL$17/*con*/ = PL$12/*par*/["connection"];
    PL$18/*table*/ = PL$12/*par*/["table"];
    PL$19/*indexes*/ = PL$12/*par*/["indexes"];
    PL$20/*pk*/ = PL$12/*par*/["pk"];
    PL$5/*scan*/({"connection": PL$17/*con*/,
"name": PL$18/*table*/["getName"](),
"schema": PL$18/*table*/["getSchema"]()}).then(PL$15(function(PL$22){PL$21/*existing*/ = PL$22;
    PL$23/*createTable*/ = true;
    PL$24/*dif*/ = false;
    PL$25/*droptemp*/ = false;
    
    var PL$26 = new __Promise();if(PL$21/*existing*/){
      PL$27/*excols*/ = PL$21/*existing*/["table"]["columns"];
      PL$28/*cols*/ = PL$18/*table*/["columns"];
      PL$29/*i*/ = 0;
      if((PL$28/*cols*/["length"] == PL$27/*excols*/["length"])){
        for(PL$29/*i*/ = 0;(PL$29/*i*/ < PL$28/*cols*/["length"]);++PL$29/*i*/){{
          if((PL$28/*cols*/[0]["name"] != PL$27/*excols*/[0]["name"])){
            PL$24/*dif*/ = true;
            break;;
          };
          ;
          if((PL$28/*cols*/[0]["dataType"] != PL$27/*excols*/[0]["dataType"])){
            PL$24/*dif*/ = true;
            break;;
          };
          ;}};
        ;
      }else{
      PL$24/*dif*/ = true;
      };
      ;
      
      var PL$30 = new __Promise();if(PL$24/*dif*/){
        PL$17/*con*/["query"](PL$21/*existing*/["table"]["alter"]()["rename"]((PL$18/*table*/["getName"]() + "_temp_rename"))).then(PL$15(function(PL$31){PL$31;
        PL$25/*droptemp*/ = true;
        PL$30.resolve();;}), PL$16);
;
      }else{
      PL$23/*createTable*/ = false;
      PL$30.resolve();;
      }; PL$30.then(function(){;
      ;
      PL$26.resolve();;});
    }else{PL$26.resolve();
    }; PL$26.then(function(){;
    ;
    
    var PL$32 = new __Promise();if(PL$23/*createTable*/){
      PL$17/*con*/["query"](PL$18/*table*/["create"]()).then(PL$15(function(PL$33){PL$33;
      PL$32.resolve();;}), PL$16);
;
    }else{PL$32.resolve();
    }; PL$32.then(function(){;
    ;
    if((PL$21/*existing*/ && PL$24/*dif*/)){
    };
    ;
    
    var PL$34 = new __Promise();if(PL$25/*droptemp*/){
      PL$7/*sql*/["setDialect"]("postgres");
      PL$35/*dropOld*/ = PL$7/*sql*/["define"]({"name": (PL$18/*table*/["getName"]() + "_temp_rename"),
"schema": PL$18/*table*/["getSchema"]()});
      PL$17/*con*/["query"](PL$35/*dropOld*/["drop"]()).then(PL$15(function(PL$36){PL$36;
      PL$34.resolve();;}), PL$16);
;
    }else{PL$34.resolve();
    }; PL$34.then(function(){;
    ;
    PL$13.resolve(); return;});});});}), PL$16);
;})();
return PL$13;
})); return;
  PL$1.resolve(); return;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();