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
    if (promiseland._hasModule({ hashStr: "70d8feb6e8e38194ed9e9b3a846af14c" })){ return promiseland._getModule("70d8feb6e8e38194ed9e9b3a846af14c"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "70d8feb6e8e38194ed9e9b3a846af14c", "module": PL$1, promising: true });
var PL$13/*console*/;try{PL$13/*console*/ = console;}catch(e){};
var PL$35/*cols*/;try{PL$35/*cols*/ = cols;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*sql*/;
var PL$7/*scanIndex*/;
PL$3(function(){;
__requireFun("sql").then(PL$3(function(PL$6){PL$5/*sql*/ = PL$6;
PL$7/*scanIndex*/ = (function(PL$8/*par*/){
var PL$9 = new __Promise();
var PL$11 = function(code){ return function(res){ try{code(res);}catch(e){ PL$9.reject(e); }; }; };
var PL$12 = function(e){ PL$9.reject(e); };
var PL$14/*pg_class*/;
var PL$15/*pg_namespace*/;
var PL$16/*pg_index*/;
var PL$17/*pg_attribute*/;
var PL$18/*query*/;
var PL$19/*con*/;
var PL$20/*res*/;
var PL$22/*oid*/;
var PL$24/*isUnique*/;
var PL$25/*isPrimary*/;
var PL$27/*columns*/;
var PL$28/*i*/;
PL$11(function(){;
PL$13/*console*/["log"]("indexscan");;
PL$13/*console*/["log"](PL$8/*par*/["table"]["getName"]());;
PL$14/*pg_class*/ = PL$5/*sql*/["define"]({"name": "pg_class",
"columns": ["oid", "relname", "relnamespace"]});
PL$15/*pg_namespace*/ = PL$5/*sql*/["define"]({"name": "pg_namespace",
"columns": ["oid", "nspname"]});
PL$16/*pg_index*/ = PL$5/*sql*/["define"]({"name": "pg_index",
"columns": ["indexrelid", "indrelid", "indisunique", "indisprimary"]});
PL$17/*pg_attribute*/ = PL$5/*sql*/["define"]({"name": "pg_attribute",
"columns": ["attrelid", "attnum", "attname"]});
PL$18/*query*/ = PL$14/*pg_class*/["select"](PL$14/*pg_class*/["relname"], PL$14/*pg_class*/["oid"])["from"](PL$14/*pg_class*/)["where"](PL$14/*pg_class*/["oid"]["in"](PL$14/*pg_class*/["subQuery"]()["select"](PL$16/*pg_index*/["indexrelid"])["from"](PL$14/*pg_class*/["join"](PL$16/*pg_index*/)["on"](PL$14/*pg_class*/["oid"]["equals"](PL$16/*pg_index*/["indrelid"])))["where"](PL$14/*pg_class*/["relname"]["equals"](PL$8/*par*/["table"]["getName"]())["and"](PL$14/*pg_class*/["relnamespace"]["in"](PL$15/*pg_namespace*/["subQuery"]()["select"](PL$15/*pg_namespace*/["oid"])["from"](PL$15/*pg_namespace*/)["where"](PL$15/*pg_namespace*/["nspname"]["equals"]((PL$8/*par*/["table"]["getSchema"]() || "public")))))))["and"](PL$14/*pg_class*/["relname"]["equals"](PL$8/*par*/["name"])))["toQuery"]();
PL$19/*con*/ = PL$8/*par*/["connection"];
PL$19/*con*/["query"](PL$18/*query*/["text"], PL$18/*query*/["values"]).then(PL$11(function(PL$21){PL$20/*res*/ = PL$21;
if(((! PL$20/*res*/ || ! PL$20/*res*/["rows"]) || ! PL$20/*res*/["rows"]["length"])){
PL$9.resolve(); return;;
};
;
PL$22/*oid*/ = PL$20/*res*/["rows"][0]["oid"];
PL$18/*query*/ = PL$16/*pg_index*/["select"](PL$16/*pg_index*/["star"]())["from"](PL$16/*pg_index*/)["where"](PL$16/*pg_index*/["indexrelid"]["equals"](PL$22/*oid*/))["toQuery"]();;
PL$19/*con*/["query"](PL$18/*query*/).then(PL$11(function(PL$23){PL$20/*res*/ = PL$23;;
if(((! PL$20/*res*/ || ! PL$20/*res*/["rows"]) || ! PL$20/*res*/["rows"]["length"])){
PL$9.resolve(); return;;
};
;
PL$24/*isUnique*/ = PL$20/*res*/["rows"][0]["indisunique"];
PL$25/*isPrimary*/ = PL$20/*res*/["rows"][0]["indisprimary"];
PL$18/*query*/ = PL$17/*pg_attribute*/["select"](PL$17/*pg_attribute*/["star"]())["from"](PL$17/*pg_attribute*/)["where"](PL$17/*pg_attribute*/["attrelid"]["equals"](PL$22/*oid*/))["order"](PL$17/*pg_attribute*/["attnum"])["toQuery"]();;
PL$19/*con*/["query"](PL$18/*query*/).then(PL$11(function(PL$26){PL$20/*res*/ = PL$26;;
if(((! PL$20/*res*/ || ! PL$20/*res*/["rows"]) || ! PL$20/*res*/["rows"]["length"])){
PL$9.resolve(); return;;
};
;
PL$27/*columns*/ = [];
PL$28/*i*/ = 0;
for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$20/*res*/["rows"]["length"]);++PL$28/*i*/){{PL$27/*columns*/["push"](PL$20/*res*/["rows"][PL$28/*i*/]["attname"]);;
}};
;
PL$9.resolve({"name": PL$8/*par*/["name"],
"isPrimary": PL$25/*isPrimary*/,
"isUnique": PL$24/*isUnique*/,
"columns": PL$27/*columns*/}); return;;
PL$9.resolve(); return;;
}), PL$12);
;}), PL$12);
;}), PL$12);
;})();
return PL$9;
});
PL$1.resolve((function(PL$8/*par*/){
var PL$29 = new __Promise();
var PL$30 = function(code){ return function(res){ try{code(res);}catch(e){ PL$29.reject(e); }; }; };
var PL$31 = function(e){ PL$29.reject(e); };
var PL$19/*con*/;
var PL$32/*tables*/;
var PL$18/*query*/;
var PL$20/*res*/;
var PL$27/*columns*/;
var PL$28/*i*/;
var PL$36/*row*/;
var PL$37/*col*/;
var PL$38/*resTab*/;
var PL$40/*indexes*/;
var PL$41/*pk*/;
var PL$46/*index*/;
PL$30(function(){;
PL$19/*con*/ = PL$8/*par*/["connection"];
PL$5/*sql*/["setDialect"]("postgres");;
PL$32/*tables*/ = PL$5/*sql*/["define"]({"name": "tables",
"schema": "information_schema",
"columns": ["table_schema", "table_name", "table_type"]});
PL$18/*query*/ = PL$32/*tables*/["select"](PL$32/*tables*/["star"]())["from"](PL$32/*tables*/)["where"](PL$32/*tables*/["table_schema"]["equals"]((PL$8/*par*/["schema"] || "public"))["and"](PL$32/*tables*/["table_name"]["equals"](PL$8/*par*/["name"])))["toQuery"]();
PL$19/*con*/["query"](PL$18/*query*/["text"], PL$18/*query*/["values"]).then(PL$30(function(PL$33){PL$20/*res*/ = PL$33;
if(! ((PL$20/*res*/ && PL$20/*res*/["rows"]) && PL$20/*res*/["rows"]["length"])){
PL$29.resolve(); return;;
};
;
PL$5/*sql*/["setDialect"]("postgres");;
PL$27/*columns*/ = PL$5/*sql*/["define"]({"name": "columns",
"schema": "information_schema",
"columns": ["table_schema", "table_name", "column_name", "ordinal_position", "data_type", "character_maximum_length"]});
PL$18/*query*/ = PL$27/*columns*/["select"](PL$27/*columns*/["star"]())["from"](PL$27/*columns*/)["where"](PL$27/*columns*/["table_schema"]["equals"]((PL$8/*par*/["schema"] || "public"))["and"](PL$27/*columns*/["table_name"]["equals"](PL$8/*par*/["name"])))["order"](PL$27/*columns*/["ordinal_position"])["toQuery"]();;
PL$19/*con*/["query"](PL$18/*query*/["text"], PL$18/*query*/["values"]).then(PL$30(function(PL$34){PL$20/*res*/ = PL$34;;
PL$35/*cols*/ = [];;
PL$28/*i*/ = 0;
for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$20/*res*/["rows"]["length"]);++PL$28/*i*/){{PL$36/*row*/ = PL$20/*res*/["rows"][PL$28/*i*/];
PL$37/*col*/ = {"name": PL$36/*row*/["column_name"],
"dataType": (PL$36/*row*/["data_type"] + (PL$36/*row*/["character_maximum_length"] ? (("(" + PL$36/*row*/["character_maximum_length"]) + ")") : ""))};
PL$35/*cols*/["push"](PL$37/*col*/);;
}};
;
PL$5/*sql*/["setDialect"]("postgres");;
PL$38/*resTab*/ = PL$5/*sql*/["define"]({"name": PL$8/*par*/["name"],
"schema": (PL$8/*par*/["schema"] || "public"),
"columns": PL$35/*cols*/});
PL$18/*query*/ = PL$38/*resTab*/["indexes"]()["toQuery"]();;
PL$19/*con*/["query"](PL$18/*query*/["text"], PL$18/*query*/["values"]).then(PL$30(function(PL$39){PL$20/*res*/ = PL$39;;
PL$40/*indexes*/ = [];
PL$41/*pk*/;
var PL$42 = new __Promise();
if(((PL$20/*res*/ && PL$20/*res*/["rows"]) && PL$20/*res*/["rows"]["length"])){
PL$28/*i*/ = 0;
var PL$44 = new __Promise();
var PL$43 = function(){var PL$45 = new __Promise();
if((PL$28/*i*/ < PL$20/*res*/["rows"]["length"])){PL$7/*scanIndex*/({"name": PL$20/*res*/["rows"][PL$28/*i*/]["relname"],
"table": PL$38/*resTab*/,
"connection": PL$19/*con*/}).then(PL$30(function(PL$47){PL$46/*index*/ = PL$47;
if(PL$46/*index*/){
PL$40/*indexes*/["push"](PL$46/*index*/);;
if(PL$46/*index*/["isPrimary"]){
PL$41/*pk*/ = PL$46/*index*/;;
};
;
};
;
PL$45.resolve(true); return PL$45;
;
}), PL$31);
;}else{PL$45.resolve(false); return PL$45;
};
PL$45;
return PL$45;
};
var PL$48 = function(){PL$43().then(function(contLoop){
if (contLoop){++PL$28/*i*/;
PL$48();}else{PL$44.resolve();};
});
};
PL$48();
PL$44.then(function(){;
;
PL$42.resolve();;
});
}else{
PL$42.resolve();}; PL$42.then(function(){;
;
PL$29.resolve({"table": PL$38/*resTab*/,
"indexes": PL$40/*indexes*/,
"pk": PL$41/*pk*/}); return;;
PL$29.resolve(); return;;
});}), PL$31);
;}), PL$31);
;}), PL$31);
;})();
return PL$29;
})); return;;
PL$1.resolve(); return;;
}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();