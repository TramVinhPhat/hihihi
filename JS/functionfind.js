var Prototype={Version:"1.7.3",Browser:(function(){var b=navigator.userAgent;var a=Object.prototype.toString.call(window.opera)=="[object Opera]";return{IE:!!window.attachEvent&&!a,Opera:a,WebKit:b.indexOf("AppleWebKit/")>-1,Gecko:b.indexOf("Gecko")>-1&&b.indexOf("KHTML")===-1,MobileSafari:/Apple.*Mobile/.test(b)}})(),BrowserFeatures:{XPath:!!document.evaluate,SelectorsAPI:!!document.querySelector,ElementExtensions:(function(){var a=window.Element||window.HTMLElement;return !!(a&&a.prototype)})(),SpecificElementExtensions:(function(){if(typeof window.HTMLDivElement!=="undefined"){return true}var c=document.createElement("div"),b=document.createElement("form"),a=false;if(c.__proto__&&(c.__proto__!==b.__proto__)){a=true}c=b=null;return a})()},ScriptFragment:"<script[^>]*>([\\S\\s]*?)<\/script\\s*>",JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(a){return a}};if(Prototype.Browser.MobileSafari){Prototype.BrowserFeatures.SpecificElementExtensions=false}var Class=(function(){var d=(function(){for(var e in {toString:1}){if(e==="toString"){return false}}return true})();function a(){}function b(){var h=null,g=$A(arguments);if(Object.isFunction(g[0])){h=g.shift()}function e(){this.initialize.apply(this,arguments)}Object.extend(e,Class.Methods);e.superclass=h;e.subclasses=[];if(h){a.prototype=h.prototype;e.prototype=new a;h.subclasses.push(e)}for(var f=0,j=g.length;f<j;f++){e.addMethods(g[f])}if(!e.prototype.initialize){e.prototype.initialize=Prototype.emptyFunction}e.prototype.constructor=e;return e}function c(l){var g=this.superclass&&this.superclass.prototype,f=Object.keys(l);if(d){if(l.toString!=Object.prototype.toString){f.push("toString")}if(l.valueOf!=Object.prototype.valueOf){f.push("valueOf")}}for(var e=0,h=f.length;e<h;e++){var k=f[e],j=l[k];if(g&&Object.isFunction(j)&&j.argumentNames()[0]=="$super"){var m=j;j=(function(i){return function(){return g[i].apply(this,arguments)}})(k).wrap(m);j.valueOf=(function(i){return function(){return i.valueOf.call(i)}})(m);j.toString=(function(i){return function(){return i.toString.call(i)}})(m)}this.prototype[k]=j}return this}return{create:b,Methods:{addMethods:c}}})();(function(){var y=Object.prototype.toString,k=Object.prototype.hasOwnProperty,z="Null",B="Undefined",K="Boolean",w="Number",v="String",I="Object",i="[object Function]",d="[object Boolean]",j="[object Number]",f="[object String]",b="[object Array]",H="[object Date]",e=window.JSON&&typeof JSON.stringify==="function"&&JSON.stringify(0)==="0"&&typeof JSON.stringify(Prototype.K)==="undefined";var q=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var a=(function(){for(var L in {toString:1}){if(L==="toString"){return false}}return true})();function D(M){switch(M){case null:return z;case (void 0):return B}var L=typeof M;switch(L){case"boolean":return K;case"number":return w;case"string":return v}return I}function h(L,N){for(var M in N){L[M]=N[M]}return L}function l(L){try{if(o(L)){return"undefined"}if(L===null){return"null"}return L.inspect?L.inspect():String(L)}catch(M){if(M instanceof RangeError){return"..."}throw M}}function A(L){return m("",{"":L},[])}function m(U,R,S){var T=R[U];if(D(T)===I&&typeof T.toJSON==="function"){T=T.toJSON(U)}var N=y.call(T);switch(N){case j:case d:case f:T=T.valueOf()}switch(T){case null:return"null";case true:return"true";case false:return"false"}var Q=typeof T;switch(Q){case"string":return T.inspect(true);case"number":return isFinite(T)?String(T):"null";case"object":for(var M=0,L=S.length;M<L;M++){if(S[M]===T){throw new TypeError("Cyclic reference to '"+T+"' in object")}}S.push(T);var P=[];if(N===b){for(var M=0,L=T.length;M<L;M++){var O=m(M,T,S);P.push(typeof O==="undefined"?"null":O)}P="["+P.join(",")+"]"}else{var V=Object.keys(T);for(var M=0,L=V.length;M<L;M++){var U=V[M],O=m(U,T,S);if(typeof O!=="undefined"){P.push(U.inspect(true)+":"+O)}}P="{"+P.join(",")+"}"}S.pop();return P}}function J(L){return JSON.stringify(L)}function C(L){return $H(L).toQueryString()}function p(L){return L&&L.toHTML?L.toHTML():String.interpret(L)}function x(L){if(D(L)!==I){throw new TypeError()}var N=[];for(var O in L){if(k.call(L,O)){N.push(O)}}if(a){for(var M=0;O=q[M];M++){if(k.call(L,O)){N.push(O)}}}return N}function G(L){var M=[];for(var N in L){M.push(L[N])}return M}function s(L){return h({},L)}function E(L){return !!(L&&L.nodeType==1)}function u(L){return y.call(L)===b}var c=(typeof Array.isArray=="function")&&Array.isArray([])&&!Array.isArray({});if(c){u=Array.isArray}function r(L){return L instanceof Hash}function n(L){return y.call(L)===i}function g(L){return y.call(L)===f}function F(L){return y.call(L)===j}function t(L){return y.call(L)===H}function o(L){return typeof L==="undefined"}h(Object,{extend:h,inspect:l,toJSON:e?J:A,toQueryString:C,toHTML:p,keys:Object.keys||x,values:G,clone:s,isElement:E,isArray:u,isHash:r,isFunction:n,isString:g,isNumber:F,isDate:t,isUndefined:o})})();Object.extend(Function.prototype,(function(){var l=Array.prototype.slice;function d(p,m){var o=p.length,n=m.length;while(n--){p[o+n]=m[n]}return p}function j(n,m){n=l.call(n,0);return d(n,m)}function g(){var m=this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");return m.length==1&&!m[0]?[]:m}function h(o){if(arguments.length<2&&Object.isUndefined(arguments[0])){return this}if(!Object.isFunction(this)){throw new TypeError("The object is not callable.")}var q=function(){};var m=this,n=l.call(arguments,1);var p=function(){var r=j(n,arguments);var s=this instanceof p?this:o;return m.apply(s,r)};q.prototype=this.prototype;p.prototype=new q();return p}function f(o){var m=this,n=l.call(arguments,1);return function(q){var p=d([q||window.event],n);return m.apply(o,p)}}function k(){if(!arguments.length){return this}var m=this,n=l.call(arguments,0);return function(){var o=j(n,arguments);return m.apply(this,o)}}function e(o){var m=this,n=l.call(arguments,1);o=o*1000;return window.setTimeout(function(){return m.apply(m,n)},o)}function a(){var m=d([0.01],arguments);return this.delay.apply(this,m)}function c(n){var m=this;return function(){var o=d([m.bind(this)],arguments);return n.apply(this,o)}}function b(){if(this._methodized){return this._methodized}var m=this;return this._methodized=function(){var n=d([this],arguments);return m.apply(null,n)}}var i={argumentNames:g,bindAsEventListener:f,curry:k,delay:e,defer:a,wrap:c,methodize:b};if(!Function.prototype.bind){i.bind=h}return i})());(function(c){function b(){return this.getUTCFullYear()+"-"+(this.getUTCMonth()+1).toPaddedString(2)+"-"+this.getUTCDate().toPaddedString(2)+"T"+this.getUTCHours().toPaddedString(2)+":"+this.getUTCMinutes().toPaddedString(2)+":"+this.getUTCSeconds().toPaddedString(2)+"Z"}function a(){return this.toISOString()}if(!c.toISOString){c.toISOString=b}if(!c.toJSON){c.toJSON=a}})(Date.prototype);RegExp.prototype.match=RegExp.prototype.test;RegExp.escape=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")};var PeriodicalExecuter=Class.create({initialize:function(b,a){this.callback=b;this.frequency=a;this.currentlyExecuting=false;this.registerCallback()},registerCallback:function(){this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000)},execute:function(){this.callback(this)},stop:function(){if(!this.timer){return}clearInterval(this.timer);this.timer=null},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;this.execute();this.currentlyExecuting=false}catch(a){this.currentlyExecuting=false;throw a}}}});Object.extend(String,{interpret:function(a){return a==null?"":String(a)},specialChar:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\\":"\\\\"}});Object.extend(String.prototype,(function(){var NATIVE_JSON_PARSE_SUPPORT=window.JSON&&typeof JSON.parse==="function"&&JSON.parse('{"test": true}').test;function prepareReplacement(replacement){if(Object.isFunction(replacement)){return replacement}var template=new Template(replacement);return function(match){return template.evaluate(match)}}function isNonEmptyRegExp(regexp){return regexp.source&&regexp.source!=="(?:)"}function gsub(pattern,replacement){var result="",source=this,match;replacement=prepareReplacement(replacement);if(Object.isString(pattern)){pattern=RegExp.escape(pattern)}if(!(pattern.length||isNonEmptyRegExp(pattern))){replacement=replacement("");return replacement+source.split("").join(replacement)+replacement}while(source.length>0){match=source.match(pattern);if(match&&match[0].length>0){result+=source.slice(0,match.index);result+=String.interpret(replacement(match));source=source.slice(match.index+match[0].length)}else{result+=source,source=""}}return result}function sub(pattern,replacement,count){replacement=prepareReplacement(replacement);count=Object.isUndefined(count)?1:count;return this.gsub(pattern,function(match){if(--count<0){return match[0]}return replacement(match)})}function scan(pattern,iterator){this.gsub(pattern,iterator);return String(this)}function truncate(length,truncation){length=length||30;truncation=Object.isUndefined(truncation)?"...":truncation;return this.length>length?this.slice(0,length-truncation.length)+truncation:String(this)}function strip(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}function stripTags(){return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?(\/)?>|<\/\w+>/gi,"")}function stripScripts(){return this.replace(new RegExp(Prototype.ScriptFragment,"img"),"")}function extractScripts(){var matchAll=new RegExp(Prototype.ScriptFragment,"img"),matchOne=new RegExp(Prototype.ScriptFragment,"im");return(this.match(matchAll)||[]).map(function(scriptTag){return(scriptTag.match(matchOne)||["",""])[1]})}function evalScripts(){return this.extractScripts().map(function(script){return eval(script)})}function escapeHTML(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function unescapeHTML(){return this.stripTags().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}function toQueryParams(separator){var match=this.strip().match(/([^?#]*)(#.*)?$/);if(!match){return{}}return match[1].split(separator||"&").inject({},function(hash,pair){if((pair=pair.split("="))[0]){var key=decodeURIComponent(pair.shift()),value=pair.length>1?pair.join("="):pair[0];if(value!=undefined){value=value.gsub("+"," ");value=decodeURIComponent(value)}if(key in hash){if(!Object.isArray(hash[key])){hash[key]=[hash[key]]}hash[key].push(value)}else{hash[key]=value}}return hash})}function toArray(){return this.split("")}function succ(){return this.slice(0,this.length-1)+String.fromCharCode(this.charCodeAt(this.length-1)+1)}function times(count){return count<1?"":new Array(count+1).join(this)}function camelize(){return this.replace(/-+(.)?/g,function(match,chr){return chr?chr.toUpperCase():""})}function capitalize(){return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase()}function underscore(){return this.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/-/g,"_").toLowerCase()}function dasherize(){return this.replace(/_/g,"-")}function inspect(useDoubleQuotes){var escapedString=this.replace(/[\x00-\x1f\\]/g,function(character){if(character in String.specialChar){return String.specialChar[character]}return"\\u00"+character.charCodeAt().toPaddedString(2,16)});if(useDoubleQuotes){return'"'+escapedString.replace(/"/g,'\\"')+'"'}return"'"+escapedString.replace(/'/g,"\\'")+"'"}function unfilterJSON(filter){return this.replace(filter||Prototype.JSONFilter,"$1")}function isJSON(){var str=this;if(str.blank()){return false}str=str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@");str=str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]");str=str.replace(/(?:^|:|,)(?:\s*\[)+/g,"");return(/^[\],:{}\s]*$/).test(str)}function evalJSON(sanitize){var json=this.unfilterJSON(),cx=/[\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff\u0000]/g;if(cx.test(json)){json=json.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}try{if(!sanitize||json.isJSON()){return eval("("+json+")")}}catch(e){}throw new SyntaxError("Badly formed JSON string: "+this.inspect())}function parseJSON(){var json=this.unfilterJSON();return JSON.parse(json)}function include(pattern){return this.indexOf(pattern)>-1}function startsWith(pattern,position){position=Object.isNumber(position)?position:0;return this.lastIndexOf(pattern,position)===position}function endsWith(pattern,position){pattern=String(pattern);position=Object.isNumber(position)?position:this.length;if(position<0){position=0}if(position>this.length){position=this.length}var d=position-pattern.length;return d>=0&&this.indexOf(pattern,d)===d}function empty(){return this==""}function blank(){return/^\s*$/.test(this)}function interpolate(object,pattern){return new Template(this,pattern).evaluate(object)}return{gsub:gsub,sub:sub,scan:scan,truncate:truncate,strip:String.prototype.trim||strip,stripTags:stripTags,stripScripts:stripScripts,extractScripts:extractScripts,evalScripts:evalScripts,escapeHTML:escapeHTML,unescapeHTML:unescapeHTML,toQueryParams:toQueryParams,parseQuery:toQueryParams,toArray:toArray,succ:succ,times:times,camelize:camelize,capitalize:capitalize,underscore:underscore,dasherize:dasherize,inspect:inspect,unfilterJSON:unfilterJSON,isJSON:isJSON,evalJSON:NATIVE_JSON_PARSE_SUPPORT?parseJSON:evalJSON,include:include,startsWith:String.prototype.startsWith||startsWith,endsWith:String.prototype.endsWith||endsWith,empty:empty,blank:blank,interpolate:interpolate}})());var Template=Class.create({initialize:function(a,b){this.template=a.toString();this.pattern=b||Template.Pattern},evaluate:function(a){if(a&&Object.isFunction(a.toTemplateReplacements)){a=a.toTemplateReplacements()}return this.template.gsub(this.pattern,function(d){if(a==null){return(d[1]+"")}var f=d[1]||"";if(f=="\\"){return d[2]}var b=a,g=d[3],e=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;d=e.exec(g);if(d==null){return f}while(d!=null){var c=d[1].startsWith("[")?d[2].replace(/\\\\]/g,"]"):d[1];b=b[c];if(null==b||""==d[3]){break}g=g.substring("["==d[3]?d[1].length:d[0].length);d=e.exec(g)}return f+String.interpret(b)})}});Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;var $break={};var Enumerable=(function(){function c(x,w){try{this._each(x,w)}catch(y){if(y!=$break){throw y}}return this}function r(z,y,x){var w=-z,A=[],B=this.toArray();if(z<1){return B}while((w+=z)<B.length){A.push(B.slice(w,w+z))}return A.collect(y,x)}function b(y,x){y=y||Prototype.K;var w=true;this.each(function(A,z){w=w&&!!y.call(x,A,z,this);if(!w){throw $break}},this);return w}function i(y,x){y=y||Prototype.K;var w=false;this.each(function(A,z){if(w=!!y.call(x,A,z,this)){throw $break}},this);return w}function j(y,x){y=y||Prototype.K;var w=[];this.each(function(A,z){w.push(y.call(x,A,z,this))},this);return w}function t(y,x){var w;this.each(function(A,z){if(y.call(x,A,z,this)){w=A;throw $break}},this);return w}function h(y,x){var w=[];this.each(function(A,z){if(y.call(x,A,z,this)){w.push(A)}},this);return w}function g(z,y,x){y=y||Prototype.K;var w=[];if(Object.isString(z)){z=new RegExp(RegExp.escape(z))}this.each(function(B,A){if(z.match(B)){w.push(y.call(x,B,A,this))}},this);return w}function a(w){if(Object.isFunction(this.indexOf)&&this.indexOf(w)!=-1){return true}var x=false;this.each(function(y){if(y==w){x=true;throw $break}});return x}function q(x,w){w=Object.isUndefined(w)?null:w;return this.eachSlice(x,function(y){while(y.length<x){y.push(w)}return y})}function l(w,y,x){this.each(function(A,z){w=y.call(x,w,A,z,this)},this);return w}function v(x){var w=$A(arguments).slice(1);return this.map(function(y){return y[x].apply(y,w)})}function p(y,x){y=y||Prototype.K;var w;this.each(function(A,z){A=y.call(x,A,z,this);if(w==null||A>=w){w=A}},this);return w}function n(y,x){y=y||Prototype.K;var w;this.each(function(A,z){A=y.call(x,A,z,this);if(w==null||A<w){w=A}},this);return w}function e(z,x){z=z||Prototype.K;var y=[],w=[];this.each(function(B,A){(z.call(x,B,A,this)?y:w).push(B)},this);return[y,w]}function f(x){var w=[];this.each(function(y){w.push(y[x])});return w}function d(y,x){var w=[];this.each(function(A,z){if(!y.call(x,A,z,this)){w.push(A)}},this);return w}function m(x,w){return this.map(function(z,y){return{value:z,criteria:x.call(w,z,y,this)}},this).sort(function(B,A){var z=B.criteria,y=A.criteria;return z<y?-1:z>y?1:0}).pluck("value")}function o(){return this.map()}function s(){var x=Prototype.K,w=$A(arguments);if(Object.isFunction(w.last())){x=w.pop()}var y=[this].concat(w).map($A);return this.map(function(A,z){return x(y.pluck(z))})}function k(){return this.toArray().length}function u(){return"#<Enumerable:"+this.toArray().inspect()+">"}return{each:c,eachSlice:r,all:b,every:b,any:i,some:i,collect:j,map:j,detect:t,findAll:h,select:h,filter:h,grep:g,include:a,member:a,inGroupsOf:q,inject:l,invoke:v,max:p,min:n,partition:e,pluck:f,reject:d,sortBy:m,toArray:o,entries:o,zip:s,size:k,inspect:u,find:t}})();function $A(c){if(!c){return[]}if("toArray" in Object(c)){return c.toArray()}var b=c.length||0,a=new Array(b);while(b--){a[b]=c[b]}return a}function $w(a){if(!Object.isString(a)){return[]}a=a.strip();return a?a.split(/\s+/):[]}Array.from=$A;(function(){var v=Array.prototype,o=v.slice,q=v.forEach;function b(B,A){for(var z=0,C=this.length>>>0;z<C;z++){if(z in this){B.call(A,this[z],z,this)}}}if(!q){q=b}function n(){this.length=0;return this}function d(){return this[0]}function g(){return this[this.length-1]}function k(){return this.select(function(z){return z!=null})}function y(){return this.inject([],function(A,z){if(Object.isArray(z)){return A.concat(z.flatten())}A.push(z);return A})}function j(){var z=o.call(arguments,0);return this.select(function(A){return !z.include(A)})}function f(z){return(z===false?this.toArray():this)._reverse()}function m(z){return this.inject([],function(C,B,A){if(0==A||(z?C.last()!=B:!C.include(B))){C.push(B)}return C})}function r(z){return this.uniq().findAll(function(A){return z.indexOf(A)!==-1})}function t(){return o.call(this,0)}function l(){return this.length}function w(){return"["+this.map(Object.inspect).join(", ")+"]"}function a(C,A){if(this==null){throw new TypeError()}var D=Object(this),B=D.length>>>0;if(B===0){return -1}A=Number(A);if(isNaN(A)){A=0}else{if(A!==0&&isFinite(A)){A=(A>0?1:-1)*Math.floor(Math.abs(A))}}if(A>B){return -1}var z=A>=0?A:Math.max(B-Math.abs(A),0);for(;z<B;z++){if(z in D&&D[z]===C){return z}}return -1}function p(C,A){if(this==null){throw new TypeError()}var D=Object(this),B=D.length>>>0;if(B===0){return -1}if(!Object.isUndefined(A)){A=Number(A);if(isNaN(A)){A=0}else{if(A!==0&&isFinite(A)){A=(A>0?1:-1)*Math.floor(Math.abs(A))}}}else{A=B}var z=A>=0?Math.min(A,B-1):B-Math.abs(A);for(;z>=0;z--){if(z in D&&D[z]===C){return z}}return -1}function c(G){var E=[],F=o.call(arguments,0),H,A=0;F.unshift(this);for(var D=0,z=F.length;D<z;D++){H=F[D];if(Object.isArray(H)&&!("callee" in H)){for(var C=0,B=H.length;C<B;C++){if(C in H){E[A]=H[C]}A++}}else{E[A++]=H}}E.length=A;return E}function s(z){return function(){if(arguments.length===0){return z.call(this,Prototype.K)}else{if(arguments[0]===undefined){var A=o.call(arguments,1);A.unshift(Prototype.K);return z.apply(this,A)}else{return z.apply(this,arguments)}}}}function u(D){if(this==null){throw new TypeError()}D=D||Prototype.K;var z=Object(this);var C=[],B=arguments[1],F=0;for(var A=0,E=z.length>>>0;A<E;A++){if(A in z){C[F]=D.call(B,z[A],A,z)}F++}C.length=F;return C}if(v.map){u=s(Array.prototype.map)}function h(D){if(this==null||!Object.isFunction(D)){throw new TypeError()}var z=Object(this);var C=[],B=arguments[1],F;for(var A=0,E=z.length>>>0;A<E;A++){if(A in z){F=z[A];if(D.call(B,F,A,z)){C.push(F)}}}return C}if(v.filter){h=Array.prototype.filter}function i(C){if(this==null){throw new TypeError()}C=C||Prototype.K;var B=arguments[1];var z=Object(this);for(var A=0,D=z.length>>>0;A<D;A++){if(A in z&&C.call(B,z[A],A,z)){return true}}return false}if(v.some){i=s(Array.prototype.some)}function x(C){if(this==null){throw new TypeError()}C=C||Prototype.K;var B=arguments[1];var z=Object(this);for(var A=0,D=z.length>>>0;A<D;A++){if(A in z&&!C.call(B,z[A],A,z)){return false}}return true}if(v.every){x=s(Array.prototype.every)}Object.extend(v,Enumerable);if(v.entries===Enumerable.entries){delete v.entries}if(!v._reverse){v._reverse=v.reverse}Object.extend(v,{_each:q,map:u,collect:u,select:h,filter:h,findAll:h,some:i,any:i,every:x,all:x,clear:n,first:d,last:g,compact:k,flatten:y,without:j,reverse:f,uniq:m,intersect:r,clone:t,toArray:t,size:l,inspect:w});var e=(function(){return[].concat(arguments)[0][0]!==1})(1,2);if(e){v.concat=c}if(!v.indexOf){v.indexOf=a}if(!v.lastIndexOf){v.lastIndexOf=p}})();function $H(a){return new Hash(a)}var Hash=Class.create(Enumerable,(function(){function e(p){this._object=Object.isHash(p)?p.toObject():Object.clone(p)}function f(s,r){var q=0;for(var p in this._object){var t=this._object[p],u=[p,t];u.key=p;u.value=t;s.call(r,u,q);q++}}function j(p,q){return this._object[p]=q}function c(p){if(this._object[p]!==Object.prototype[p]){return this._object[p]}}function m(p){var q=this._object[p];delete this._object[p];return q}function o(){return Object.clone(this._object)}function n(){return this.pluck("key")}function l(){return this.pluck("value")}function g(q){var p=this.detect(function(r){return r.value===q});return p&&p.key}function i(p){return this.clone().update(p)}function d(p){return new Hash(p).inject(this,function(q,r){q.set(r.key,r.value);return q})}function b(p,q){if(Object.isUndefined(q)){return p}q=String.interpret(q);q=q.gsub(/(\r)?\n/,"\r\n");q=encodeURIComponent(q);q=q.gsub(/%20/,"+");return p+"="+q}function a(){return this.inject([],function(t,w){var s=encodeURIComponent(w.key),q=w.value;if(q&&typeof q=="object"){if(Object.isArray(q)){var v=[];for(var r=0,p=q.length,u;r<p;r++){u=q[r];v.push(b(s,u))}return t.concat(v)}}else{t.push(b(s,q))}return t}).join("&")}function k(){return"#<Hash:{"+this.map(function(p){return p.map(Object.inspect).join(": ")}).join(", ")+"}>"}function h(){return new Hash(this)}return{initialize:e,_each:f,set:j,get:c,unset:m,toObject:o,toTemplateReplacements:o,keys:n,values:l,index:g,merge:i,update:d,toQueryString:a,inspect:k,toJSON:o,clone:h}})());Hash.from=$H;Object.extend(Number.prototype,(function(){function d(){return this.toPaddedString(2,16)}function b(){return this+1}function h(j,i){$R(0,this,true).each(j,i);return this}function g(k,j){var i=this.toString(j||10);return"0".times(k-i.length)+i}function a(){return Math.abs(this)}function c(){return Math.round(this)}function e(){return Math.ceil(this)}function f(){return Math.floor(this)}return{toColorPart:d,succ:b,times:h,toPaddedString:g,abs:a,round:c,ceil:e,floor:f}})());function $R(c,a,b){return new ObjectRange(c,a,b)}var ObjectRange=Class.create(Enumerable,(function(){function b(f,d,e){this.start=f;this.end=d;this.exclusive=e}function c(f,e){var g=this.start,d;for(d=0;this.include(g);d++){f.call(e,g,d);g=g.succ()}}function a(d){if(d<this.start){return false}if(this.exclusive){return d<this.end}return d<=this.end}return{initialize:b,_each:c,include:a}})());var Abstract={};var Try={these:function(){var c;for(var b=0,d=arguments.length;b<d;b++){var a=arguments[b];try{c=a();break}catch(f){}}return c}};var Ajax={getTransport:function(){return Try.these(function(){return new XMLHttpRequest()},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")})||false},activeRequestCount:0};Ajax.Responders={responders:[],_each:function(b,a){this.responders._each(b,a)},register:function(a){if(!this.include(a)){this.responders.push(a)}},unregister:function(a){this.responders=this.responders.without(a)},dispatch:function(d,b,c,a){this.each(function(f){if(Object.isFunction(f[d])){try{f[d].apply(f,[b,c,a])}catch(g){}}})}};Object.extend(Ajax.Responders,Enumerable);Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++},onComplete:function(){Ajax.activeRequestCount--}});Ajax.Base=Class.create({initialize:function(a){this.options={method:"post",asynchronous:true,contentType:"application/x-www-form-urlencoded",encoding:"UTF-8",parameters:"",evalJSON:true,evalJS:true};Object.extend(this.options,a||{});this.options.method=this.options.method.toLowerCase();if(Object.isHash(this.options.parameters)){this.options.parameters=this.options.parameters.toObject()}}});Ajax.Request=Class.create(Ajax.Base,{_complete:false,initialize:function($super,b,a){$super(a);this.transport=Ajax.getTransport();this.request(b)},request:function(b){this.url=b;this.method=this.options.method;var d=Object.isString(this.options.parameters)?this.options.parameters:Object.toQueryString(this.options.parameters);if(!["get","post"].include(this.method)){d+=(d?"&":"")+"_method="+this.method;this.method="post"}if(d&&this.method==="get"){this.url+=(this.url.include("?")?"&":"?")+d}this.parameters=d.toQueryParams();try{var a=new Ajax.Response(this);if(this.options.onCreate){this.options.onCreate(a)}Ajax.Responders.dispatch("onCreate",this,a);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous){this.respondToReadyState.bind(this).defer(1)}this.transport.onreadystatechange=this.onStateChange.bind(this);this.setRequestHeaders();this.body=this.method=="post"?(this.options.postBody||d):null;this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType){this.onStateChange()}}catch(c){this.dispatchException(c)}},onStateChange:function(){var a=this.transport.readyState;if(a>1&&!((a==4)&&this._complete)){this.respondToReadyState(this.transport.readyState)}},setRequestHeaders:function(){var e={"X-Requested-With":"XMLHttpRequest","X-Prototype-Version":Prototype.Version,Accept:"text/javascript, text/html, application/xml, text/xml, */*"};if(this.method=="post"){e["Content-type"]=this.options.contentType+(this.options.encoding?"; charset="+this.options.encoding:"");if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){e.Connection="close"}}if(typeof this.options.requestHeaders=="object"){var c=this.options.requestHeaders;if(Object.isFunction(c.push)){for(var b=0,d=c.length;b<d;b+=2){e[c[b]]=c[b+1]}}else{$H(c).each(function(f){e[f.key]=f.value})}}for(var a in e){if(e[a]!=null){this.transport.setRequestHeader(a,e[a])}}},success:function(){var a=this.getStatus();return !a||(a>=200&&a<300)||a==304},getStatus:function(){try{if(this.transport.status===1223){return 204}return this.transport.status||0}catch(a){return 0}},respondToReadyState:function(a){var c=Ajax.Request.Events[a],b=new Ajax.Response(this);if(c=="Complete"){try{this._complete=true;(this.options["on"+b.status]||this.options["on"+(this.success()?"Success":"Failure")]||Prototype.emptyFunction)(b,b.headerJSON)}catch(d){this.dispatchException(d)}var f=b.getHeader("Content-type");if(this.options.evalJS=="force"||(this.options.evalJS&&this.isSameOrigin()&&f&&f.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))){this.evalResponse()}}try{(this.options["on"+c]||Prototype.emptyFunction)(b,b.headerJSON);Ajax.Responders.dispatch("on"+c,this,b,b.headerJSON)}catch(d){this.dispatchException(d)}if(c=="Complete"){this.transport.onreadystatechange=Prototype.emptyFunction}},isSameOrigin:function(){var a=this.url.match(/^\s*https?:\/\/[^\/]*/);return !a||(a[0]=="#{protocol}//#{domain}#{port}".interpolate({protocol:location.protocol,domain:document.domain,port:location.port?":"+location.port:""}))},getHeader:function(a){try{return this.transport.getResponseHeader(a)||null}catch(b){return null}},evalResponse:function(){try{return eval((this.transport.responseText||"").unfilterJSON())}catch(e){this.dispatchException(e)}},dispatchException:function(a){(this.options.onException||Prototype.emptyFunction)(this,a);Ajax.Responders.dispatch("onException",this,a)}});Ajax.Request.Events=["Uninitialized","Loading","Loaded","Interactive","Complete"];Ajax.Response=Class.create({initialize:function(c){this.request=c;var d=this.transport=c.transport,a=this.readyState=d.readyState;if((a>2&&!Prototype.Browser.IE)||a==4){this.status=this.getStatus();this.statusText=this.getStatusText();this.responseText=String.interpret(d.responseText);this.headerJSON=this._getHeaderJSON()}if(a==4){var b=d.responseXML;this.responseXML=Object.isUndefined(b)?null:b;this.responseJSON=this._getResponseJSON()}},status:0,statusText:"",getStatus:Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||""}catch(a){return""}},getHeader:Ajax.Request.prototype.getHeader,getAllHeaders:function(){try{return this.getAllResponseHeaders()}catch(a){return null}},getResponseHeader:function(a){return this.transport.getResponseHeader(a)},getAllResponseHeaders:function(){return this.transport.getAllResponseHeaders()},_getHeaderJSON:function(){var a=this.getHeader("X-JSON");if(!a){return null}try{a=decodeURIComponent(escape(a))}catch(b){}try{return a.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin())}catch(b){this.request.dispatchException(b)}},_getResponseJSON:function(){var a=this.request.options;if(!a.evalJSON||(a.evalJSON!="force"&&!(this.getHeader("Content-type")||"").include("application/json"))||this.responseText.blank()){return null}try{return this.responseText.evalJSON(a.sanitizeJSON||!this.request.isSameOrigin())}catch(b){this.request.dispatchException(b)}}});Ajax.Updater=Class.create(Ajax.Request,{initialize:function($super,a,c,b){this.container={success:(a.success||a),failure:(a.failure||(a.success?null:a))};b=Object.clone(b);var d=b.onComplete;b.onComplete=(function(e,f){this.updateContent(e.responseText);if(Object.isFunction(d)){d(e,f)}}).bind(this);$super(c,b)},updateContent:function(d){var c=this.container[this.success()?"success":"failure"],a=this.options;if(!a.evalScripts){d=d.stripScripts()}if(c=$(c)){if(a.insertion){if(Object.isString(a.insertion)){var b={};b[a.insertion]=d;c.insert(b)}else{a.insertion(c,d)}}else{c.update(d)}}}});Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{initialize:function($super,a,c,b){$super(b);this.onComplete=this.options.onComplete;this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=a;this.url=c;this.start()},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent()},stop:function(){this.updater.options.onComplete=undefined;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments)},updateComplete:function(a){if(this.options.decay){this.decay=(a.responseText==this.lastText?this.decay*this.options.decay:1);this.lastText=a.responseText}this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency)},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options)}});(function(a8){var aE;var a1=Array.prototype.slice;var av=document.createElement("div");function aZ(bp){if(arguments.length>1){for(var F=0,br=[],bq=arguments.length;F<bq;F++){br.push(aZ(arguments[F]))}return br}if(Object.isString(bp)){bp=document.getElementById(bp)}return aF.extend(bp)}a8.$=aZ;if(!a8.Node){a8.Node={}}if(!a8.Node.ELEMENT_NODE){Object.extend(a8.Node,{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12})}var r={};function aQ(F,i){if(F==="select"){return false}if("type" in i){return false}return true}var d=(function(){try{var i=document.createElement('<input name="x">');return i.tagName.toLowerCase()==="input"&&i.name==="x"}catch(F){return false}})();var aI=a8.Element;function aF(F,i){i=i||{};F=F.toLowerCase();if(d&&i.name){F="<"+F+' name="'+i.name+'">';delete i.name;return aF.writeAttribute(document.createElement(F),i)}if(!r[F]){r[F]=aF.extend(document.createElement(F))}var bp=aQ(F,i)?r[F].cloneNode(false):document.createElement(F);return aF.writeAttribute(bp,i)}a8.Element=aF;Object.extend(a8.Element,aI||{});if(aI){a8.Element.prototype=aI.prototype}aF.Methods={ByTag:{},Simulated:{}};var a3={};var H={id:"id",className:"class"};function ba(F){F=aZ(F);var i="<"+F.tagName.toLowerCase();var bp,br;for(var bq in H){bp=H[bq];br=(F[bq]||"").toString();if(br){i+=" "+bp+"="+br.inspect(true)}}return i+">"}a3.inspect=ba;function v(i){return aZ(i).getStyle("display")!=="none"}function ax(F,i){F=aZ(F);if(typeof i!=="boolean"){i=!aF.visible(F)}aF[i?"show":"hide"](F);return F}function aH(i){i=aZ(i);i.style.display="none";return i}function j(i){i=aZ(i);i.style.display="";return i}Object.extend(a3,{visible:v,toggle:ax,hide:aH,show:j});function ad(i){i=aZ(i);i.parentNode.removeChild(i);return i}var aT=(function(){var i=document.createElement("select"),F=true;i.innerHTML='<option value="test">test</option>';if(i.options&&i.options[0]){F=i.options[0].nodeName.toUpperCase()!=="OPTION"}i=null;return F})();var I=(function(){try{var i=document.createElement("table");if(i&&i.tBodies){i.innerHTML="<tbody><tr><td>test</td></tr></tbody>";var bp=typeof i.tBodies[0]=="undefined";i=null;return bp}}catch(F){return true}})();var a2=(function(){try{var i=document.createElement("div");i.innerHTML="<link />";var bp=(i.childNodes.length===0);i=null;return bp}catch(F){return true}})();var x=aT||I||a2;var aq=(function(){var i=document.createElement("script"),bp=false;try{i.appendChild(document.createTextNode(""));bp=!i.firstChild||i.firstChild&&i.firstChild.nodeType!==3}catch(F){bp=true}i=null;return bp})();function O(br,bt){br=aZ(br);var bu=br.getElementsByTagName("*"),bq=bu.length;while(bq--){Z(bu[bq])}if(bt&&bt.toElement){bt=bt.toElement()}if(Object.isElement(bt)){return br.update().insert(bt)}bt=Object.toHTML(bt);var bp=br.tagName.toUpperCase();if(bp==="SCRIPT"&&aq){br.text=bt;return br}if(x){if(bp in L.tags){while(br.firstChild){br.removeChild(br.firstChild)}var F=t(bp,bt.stripScripts());for(var bq=0,bs;bs=F[bq];bq++){br.appendChild(bs)}}else{if(a2&&Object.isString(bt)&&bt.indexOf("<link")>-1){while(br.firstChild){br.removeChild(br.firstChild)}var F=t(bp,bt.stripScripts(),true);for(var bq=0,bs;bs=F[bq];bq++){br.appendChild(bs)}}else{br.innerHTML=bt.stripScripts()}}}else{br.innerHTML=bt.stripScripts()}bt.evalScripts.bind(bt).defer();return br}function ah(F,bp){F=aZ(F);if(bp&&bp.toElement){bp=bp.toElement()}else{if(!Object.isElement(bp)){bp=Object.toHTML(bp);var i=F.ownerDocument.createRange();i.selectNode(F);bp.evalScripts.bind(bp).defer();bp=i.createContextualFragment(bp.stripScripts())}}F.parentNode.replaceChild(bp,F);return F}var L={before:function(i,F){i.parentNode.insertBefore(F,i)},top:function(i,F){i.insertBefore(F,i.firstChild)},bottom:function(i,F){i.appendChild(F)},after:function(i,F){i.parentNode.insertBefore(F,i.nextSibling)},tags:{TABLE:["<table>","</table>",1],TBODY:["<table><tbody>","</tbody></table>",2],TR:["<table><tbody><tr>","</tr></tbody></table>",3],TD:["<table><tbody><tr><td>","</td></tr></tbody></table>",4],SELECT:["<select>","</select>",1]}};var aJ=L.tags;Object.extend(aJ,{THEAD:aJ.TBODY,TFOOT:aJ.TBODY,TH:aJ.TD});function ao(bp,bs){bp=aZ(bp);if(bs&&bs.toElement){bs=bs.toElement()}if(Object.isElement(bs)){bp.parentNode.replaceChild(bs,bp);return bp}bs=Object.toHTML(bs);var br=bp.parentNode,F=br.tagName.toUpperCase();if(F in L.tags){var bt=aF.next(bp);var i=t(F,bs.stripScripts());br.removeChild(bp);var bq;if(bt){bq=function(bu){br.insertBefore(bu,bt)}}else{bq=function(bu){br.appendChild(bu)}}i.each(bq)}else{bp.outerHTML=bs.stripScripts()}bs.evalScripts.bind(bs).defer();return bp}if("outerHTML" in document.documentElement){ah=ao}function a7(i){if(Object.isUndefined(i)||i===null){return false}if(Object.isString(i)||Object.isNumber(i)){return true}if(Object.isElement(i)){return true}if(i.toElement||i.toHTML){return true}return false}function bn(br,bt,F){F=F.toLowerCase();var bv=L[F];if(bt&&bt.toElement){bt=bt.toElement()}if(Object.isElement(bt)){bv(br,bt);return br}bt=Object.toHTML(bt);var bq=((F==="before"||F==="after")?br.parentNode:br).tagName.toUpperCase();var bu=t(bq,bt.stripScripts());if(F==="top"||F==="after"){bu.reverse()}for(var bp=0,bs;bs=bu[bp];bp++){bv(br,bs)}bt.evalScripts.bind(bt).defer()}function Q(F,bp){F=aZ(F);if(a7(bp)){bp={bottom:bp}}for(var i in bp){bn(F,bp[i],i)}return F}function u(F,bp,i){F=aZ(F);if(Object.isElement(bp)){aZ(bp).writeAttribute(i||{})}else{if(Object.isString(bp)){bp=new aF(bp,i)}else{bp=new aF("div",bp)}}if(F.parentNode){F.parentNode.replaceChild(bp,F)}bp.appendChild(F);return bp}function w(F){F=aZ(F);var bp=F.firstChild;while(bp){var i=bp.nextSibling;if(bp.nodeType===Node.TEXT_NODE&&!/\S/.test(bp.nodeValue)){F.removeChild(bp)}bp=i}return F}function a4(i){return aZ(i).innerHTML.blank()}function t(bs,br,bt){var bq=L.tags[bs],bu=av;var F=!!bq;if(!F&&bt){F=true;bq=["","",0]}if(F){bu.innerHTML="&#160;"+bq[0]+br+bq[1];bu.removeChild(bu.firstChild);for(var bp=bq[2];bp--;){bu=bu.firstChild}}else{bu.innerHTML=br}return $A(bu.childNodes)}function E(bq,F){if(!(bq=aZ(bq))){return}var bs=bq.cloneNode(F);if(!aY){bs._prototypeUID=aE;if(F){var br=aF.select(bs,"*"),bp=br.length;while(bp--){br[bp]._prototypeUID=aE}}}return aF.extend(bs)}function Z(F){var i=M(F);if(i){aF.stopObserving(F);if(!aY){F._prototypeUID=aE}delete aF.Storage[i]}}function bl(bp){var F=bp.length;while(F--){Z(bp[F])}}function at(br){var bq=br.length,bp,F;while(bq--){bp=br[bq];F=M(bp);delete aF.Storage[F];delete Event.cache[F]}}if(aY){bl=at}function m(bp){if(!(bp=aZ(bp))){return}Z(bp);var bq=bp.getElementsByTagName("*"),F=bq.length;while(F--){Z(bq[F])}return null}Object.extend(a3,{remove:ad,update:O,replace:ah,insert:Q,wrap:u,cleanWhitespace:w,empty:a4,clone:E,purge:m});function am(i,bp,bq){i=aZ(i);bq=bq||-1;var F=[];while(i=i[bp]){if(i.nodeType===Node.ELEMENT_NODE){F.push(aF.extend(i))}if(F.length===bq){break}}return F}function aL(i){return am(i,"parentNode")}function bm(i){return aF.select(i,"*")}function X(i){i=aZ(i).firstChild;while(i&&i.nodeType!==Node.ELEMENT_NODE){i=i.nextSibling}return aZ(i)}function bi(F){var i=[],bp=aZ(F).firstChild;while(bp){if(bp.nodeType===Node.ELEMENT_NODE){i.push(aF.extend(bp))}bp=bp.nextSibling}return i}function p(i){return am(i,"previousSibling")}function bh(i){return am(i,"nextSibling")}function aV(i){i=aZ(i);var bp=p(i),F=bh(i);return bp.reverse().concat(F)}function aR(F,i){F=aZ(F);if(Object.isString(i)){return Prototype.Selector.match(F,i)}return i.match(F)}function aW(F,bp,bq,i){F=aZ(F),bq=bq||0,i=i||0;if(Object.isNumber(bq)){i=bq,bq=null}while(F=F[bp]){if(F.nodeType!==1){continue}if(bq&&!Prototype.Selector.match(F,bq)){continue}if(--i>=0){continue}return aF.extend(F)}}function aa(F,bp,i){F=aZ(F);if(arguments.length===1){return aZ(F.parentNode)}return aW(F,"parentNode",bp,i)}function y(F,bq,i){if(arguments.length===1){return X(F)}F=aZ(F),bq=bq||0,i=i||0;if(Object.isNumber(bq)){i=bq,bq="*"}var bp=Prototype.Selector.select(bq,F)[i];return aF.extend(bp)}function h(F,bp,i){return aW(F,"previousSibling",bp,i)}function aB(F,bp,i){return aW(F,"nextSibling",bp,i)}function bb(i){i=aZ(i);var F=a1.call(arguments,1).join(", ");return Prototype.Selector.select(F,i)}function aD(bq){bq=aZ(bq);var bs=a1.call(arguments,1).join(", ");var bt=aF.siblings(bq),bp=[];for(var F=0,br;br=bt[F];F++){if(Prototype.Selector.match(br,bs)){bp.push(br)}}return bp}function D(F,i){F=aZ(F),i=aZ(i);if(!F||!i){return false}while(F=F.parentNode){if(F===i){return true}}return false}function B(F,i){F=aZ(F),i=aZ(i);if(!F||!i){return false}if(!i.contains){return D(F,i)}return i.contains(F)&&i!==F}function J(F,i){F=aZ(F),i=aZ(i);if(!F||!i){return false}return(F.compareDocumentPosition(i)&8)===8}var aM;if(av.compareDocumentPosition){aM=J}else{if(av.contains){aM=B}else{aM=D}}Object.extend(a3,{recursivelyCollect:am,ancestors:aL,descendants:bm,firstDescendant:X,immediateDescendants:bi,previousSiblings:p,nextSiblings:bh,siblings:aV,match:aR,up:aa,down:y,previous:h,next:aB,select:bb,adjacent:aD,descendantOf:aM,getElementsBySelector:bb,childElements:bi});var T=1;function aU(i){i=aZ(i);var F=aF.readAttribute(i,"id");if(F){return F}do{F="anonymous_element_"+T++}while(aZ(F));aF.writeAttribute(i,"id",F);return F}function a9(F,i){return aZ(F).getAttribute(i)}function K(F,i){F=aZ(F);var bp=aG.read;if(bp.values[i]){return bp.values[i](F,i)}if(bp.names[i]){i=bp.names[i]}if(i.include(":")){if(!F.attributes||!F.attributes[i]){return null}return F.attributes[i].value}return F.getAttribute(i)}function e(F,i){if(i==="title"){return F.title}return F.getAttribute(i)}var U=(function(){av.setAttribute("onclick",[]);var i=av.getAttribute("onclick");var F=Object.isArray(i);av.removeAttribute("onclick");return F})();if(U){a9=K}else{if(Prototype.Browser.Opera){a9=e}}function a0(bq,bp,bs){bq=aZ(bq);var F={},br=aG.write;if(typeof bp==="object"){F=bp}else{F[bp]=Object.isUndefined(bs)?true:bs}for(var i in F){bp=br.names[i]||i;bs=F[i];if(br.values[i]){bs=br.values[i](bq,bs);if(Object.isUndefined(bs)){continue}}if(bs===false||bs===null){bq.removeAttribute(bp)}else{if(bs===true){bq.setAttribute(bp,bp)}else{bq.setAttribute(bp,bs)}}}return bq}var a=(function(){if(!d){return false}var F=document.createElement('<input type="checkbox">');F.checked=true;var i=F.getAttributeNode("checked");return !i||!i.specified})();function Y(i,bp){bp=aG.has[bp]||bp;var F=aZ(i).getAttributeNode(bp);return !!(F&&F.specified)}function bg(i,F){if(F==="checked"){return i.checked}return Y(i,F)}a8.Element.Methods.Simulated.hasAttribute=a?bg:Y;function k(i){return new aF.ClassNames(i)}var V={};function f(F){if(V[F]){return V[F]}var i=new RegExp("(^|\\s+)"+F+"(\\s+|$)");V[F]=i;return i}function al(i,F){if(!(i=aZ(i))){return}var bp=i.className;if(bp.length===0){return false}if(bp===F){return true}return f(F).test(bp)}function o(i,F){if(!(i=aZ(i))){return}if(!al(i,F)){i.className+=(i.className?" ":"")+F}return i}function au(i,F){if(!(i=aZ(i))){return}i.className=i.className.replace(f(F)," ").strip();return i}function ae(F,bp,i){if(!(F=aZ(F))){return}if(Object.isUndefined(i)){i=!al(F,bp)}var bq=aF[i?"addClassName":"removeClassName"];return bq(F,bp)}var aG={};var aP="className",ar="for";av.setAttribute(aP,"x");if(av.className!=="x"){av.setAttribute("class","x");if(av.className==="x"){aP="class"}}var aK=document.createElement("label");aK.setAttribute(ar,"x");if(aK.htmlFor!=="x"){aK.setAttribute("htmlFor","x");if(aK.htmlFor==="x"){ar="htmlFor"}}aK=null;function ac(i,F){return i.getAttribute(F)}function g(i,F){return i.getAttribute(F,2)}function A(i,bp){var F=i.getAttributeNode(bp);return F?F.value:""}function bj(i,F){return aZ(i).hasAttribute(F)?F:null}av.onclick=Prototype.emptyFunction;var P=av.getAttribute("onclick");var aw;if(String(P).indexOf("{")>-1){aw=function(i,F){var bp=i.getAttribute(F);if(!bp){return null}bp=bp.toString();bp=bp.split("{")[1];bp=bp.split("}")[0];return bp.strip()}}else{if(P===""){aw=function(i,F){var bp=i.getAttribute(F);if(!bp){return null}return bp.strip()}}}aG.read={names:{"class":aP,className:aP,"for":ar,htmlFor:ar},values:{style:function(i){return i.style.cssText.toLowerCase()},title:function(i){return i.title}}};aG.write={names:{className:"class",htmlFor:"for",cellpadding:"cellPadding",cellspacing:"cellSpacing"},values:{checked:function(i,F){F=!!F;i.checked=F;return F?"checked":null},style:function(i,F){i.style.cssText=F?F:""}}};aG.has={names:{}};Object.extend(aG.write.names,aG.read.names);var a6=$w("colSpan rowSpan vAlign dateTime accessKey tabIndex encType maxLength readOnly longDesc frameBorder");for(var af=0,ag;ag=a6[af];af++){aG.write.names[ag.toLowerCase()]=ag;aG.has.names[ag.toLowerCase()]=ag}Object.extend(aG.read.values,{href:g,src:g,type:ac,action:A,disabled:bj,checked:bj,readonly:bj,multiple:bj,onload:aw,onunload:aw,onclick:aw,ondblclick:aw,onmousedown:aw,onmouseup:aw,onmouseover:aw,onmousemove:aw,onmouseout:aw,onfocus:aw,onblur:aw,onkeypress:aw,onkeydown:aw,onkeyup:aw,onsubmit:aw,onreset:aw,onselect:aw,onchange:aw});Object.extend(a3,{identify:aU,readAttribute:a9,writeAttribute:a0,classNames:k,hasClassName:al,addClassName:o,removeClassName:au,toggleClassName:ae});function W(i){if(i==="float"||i==="styleFloat"){return"cssFloat"}return i.camelize()}function bo(i){if(i==="float"||i==="cssFloat"){return"styleFloat"}return i.camelize()}function C(bp,bq){bp=aZ(bp);var bt=bp.style,F;if(Object.isString(bq)){bt.cssText+=";"+bq;if(bq.include("opacity")){var i=bq.match(/opacity:\s*(\d?\.?\d*)/)[1];aF.setOpacity(bp,i)}return bp}for(var bs in bq){if(bs==="opacity"){aF.setOpacity(bp,bq[bs])}else{var br=bq[bs];if(bs==="float"||bs==="cssFloat"){bs=Object.isUndefined(bt.styleFloat)?"cssFloat":"styleFloat"}bt[bs]=br}}return bp}function aO(F,bp){F=aZ(F);bp=W(bp);var bq=F.style[bp];if(!bq||bq==="auto"){var i=document.defaultView.getComputedStyle(F,null);bq=i?i[bp]:null}if(bp==="opacity"){return bq?parseFloat(bq):1}return bq==="auto"?null:bq}function s(i,F){switch(F){case"height":case"width":if(!aF.visible(i)){return null}var bp=parseInt(aO(i,F),10);if(bp!==i["offset"+F.capitalize()]){return bp+"px"}return aF.measure(i,F);default:return aO(i,F)}}function aj(i,F){i=aZ(i);F=bo(F);var bp=i.style[F];if(!bp&&i.currentStyle){bp=i.currentStyle[F]}if(F==="opacity"){if(!N){return be(i)}else{return bp?parseFloat(bp):1}}if(bp==="auto"){if((F==="width"||F==="height")&&aF.visible(i)){return aF.measure(i,F)+"px"}return null}return bp}function aA(i){return(i||"").replace(/alpha\([^\)]*\)/gi,"")}function ab(i){if(!i.currentStyle||!i.currentStyle.hasLayout){i.style.zoom=1}return i}var N=(function(){av.style.cssText="opacity:.55";return/^0.55/.test(av.style.opacity)})();function z(i,F){i=aZ(i);if(F==1||F===""){F=""}else{if(F<0.00001){F=0}}i.style.opacity=F;return i}function bf(i,bq){if(N){return z(i,bq)}i=ab(aZ(i));var bp=aF.getStyle(i,"filter"),F=i.style;if(bq==1||bq===""){bp=aA(bp);if(bp){F.filter=bp}else{F.removeAttribute("filter")}return i}if(bq<0.00001){bq=0}F.filter=aA(bp)+" alpha(opacity="+(bq*100)+")";return i}function bd(i){return aF.getStyle(i,"opacity")}function be(F){if(N){return bd(F)}var bp=aF.getStyle(F,"filter");if(bp.length===0){return 1}var i=(bp||"").match(/alpha\(opacity=(.*)\)/i);if(i&&i[1]){return parseFloat(i[1])/100}return 1}Object.extend(a3,{setStyle:C,getStyle:aO,setOpacity:z,getOpacity:bd});if("styleFloat" in av.style){a3.getStyle=aj;a3.setOpacity=bf;a3.getOpacity=be}var l=0;a8.Element.Storage={UID:1};function M(i){if(i===window){return 0}if(typeof i._prototypeUID==="undefined"){i._prototypeUID=aF.Storage.UID++}return i._prototypeUID}function c(i){if(i===window){return 0}if(i==document){return 1}return i.uniqueID}var aY=("uniqueID" in av);if(aY){M=c}function b(F){if(!(F=aZ(F))){return}var i=M(F);if(!aF.Storage[i]){aF.Storage[i]=$H()}return aF.Storage[i]}function a5(F,i,bp){if(!(F=aZ(F))){return}var bq=b(F);if(arguments.length===2){bq.update(i)}else{bq.set(i,bp)}return F}function aN(bp,F,i){if(!(bp=aZ(bp))){return}var br=b(bp),bq=br.get(F);if(Object.isUndefined(bq)){br.set(F,i);bq=i}return bq}Object.extend(a3,{getStorage:b,store:a5,retrieve:aN});var an={},aX=aF.Methods.ByTag,aC=Prototype.BrowserFeatures;if(!aC.ElementExtensions&&("__proto__" in av)){a8.HTMLElement={};a8.HTMLElement.prototype=av.__proto__;aC.ElementExtensions=true}function bc(i){if(typeof window.Element==="undefined"){return false}if(!d){return false}var bp=window.Element.prototype;if(bp){var br="_"+(Math.random()+"").slice(2),F=document.createElement(i);bp[br]="x";var bq=(F[br]!=="x");delete bp[br];F=null;return bq}return false}var ap=bc("object");function ak(F,i){for(var bq in i){var bp=i[bq];if(Object.isFunction(bp)&&!(bq in F)){F[bq]=bp.methodize()}}}var bk={};function ay(F){var i=M(F);return(i in bk)}function az(bp){if(!bp||ay(bp)){return bp}if(bp.nodeType!==Node.ELEMENT_NODE||bp==window){return bp}var i=Object.clone(an),F=bp.tagName.toUpperCase();if(aX[F]){Object.extend(i,aX[F])}ak(bp,i);bk[M(bp)]=true;return bp}function aS(F){if(!F||ay(F)){return F}var i=F.tagName;if(i&&(/^(?:object|applet|embed)$/i.test(i))){ak(F,aF.Methods);ak(F,aF.Methods.Simulated);ak(F,aF.Methods.ByTag[i.toUpperCase()])}return F}if(aC.SpecificElementExtensions){az=ap?aS:Prototype.K}function S(F,i){F=F.toUpperCase();if(!aX[F]){aX[F]={}}Object.extend(aX[F],i)}function q(F,bp,i){if(Object.isUndefined(i)){i=false}for(var br in bp){var bq=bp[br];if(!Object.isFunction(bq)){continue}if(!i||!(br in F)){F[br]=bq.methodize()}}}function ai(bq){var i;var bp={OPTGROUP:"OptGroup",TEXTAREA:"TextArea",P:"Paragraph",FIELDSET:"FieldSet",UL:"UList",OL:"OList",DL:"DList",DIR:"Directory",H1:"Heading",H2:"Heading",H3:"Heading",H4:"Heading",H5:"Heading",H6:"Heading",Q:"Quote",INS:"Mod",DEL:"Mod",A:"Anchor",IMG:"Image",CAPTION:"TableCaption",COL:"TableCol",COLGROUP:"TableCol",THEAD:"TableSection",TFOOT:"TableSection",TBODY:"TableSection",TR:"TableRow",TH:"TableCell",TD:"TableCell",FRAMESET:"FrameSet",IFRAME:"IFrame"};if(bp[bq]){i="HTML"+bp[bq]+"Element"}if(window[i]){return window[i]}i="HTML"+bq+"Element";if(window[i]){return window[i]}i="HTML"+bq.capitalize()+"Element";if(window[i]){return window[i]}var F=document.createElement(bq),br=F.__proto__||F.constructor.prototype;F=null;return br}function R(br){if(arguments.length===0){G()}if(arguments.length===2){var bt=br;br=arguments[1]}if(!bt){Object.extend(aF.Methods,br||{})}else{if(Object.isArray(bt)){for(var bs=0,bq;bq=bt[bs];bs++){S(bq,br)}}else{S(bt,br)}}var bp=window.HTMLElement?HTMLElement.prototype:aF.prototype;if(aC.ElementExtensions){q(bp,aF.Methods);q(bp,aF.Methods.Simulated,true)}if(aC.SpecificElementExtensions){for(var bq in aF.Methods.ByTag){var F=ai(bq);if(Object.isUndefined(F)){continue}q(F.prototype,aX[bq])}}Object.extend(aF,aF.Methods);Object.extend(aF,aF.Methods.Simulated);delete aF.ByTag;delete aF.Simulated;aF.extend.refresh();r={}}Object.extend(a8.Element,{extend:az,addMethods:R});if(az===Prototype.K){a8.Element.extend.refresh=Prototype.emptyFunction}else{a8.Element.extend.refresh=function(){if(Prototype.BrowserFeatures.ElementExtensions){return}Object.extend(an,aF.Methods);Object.extend(an,aF.Methods.Simulated);bk={}}}function G(){Object.extend(Form,Form.Methods);Object.extend(Form.Element,Form.Element.Methods);Object.extend(aF.Methods.ByTag,{FORM:Object.clone(Form.Methods),INPUT:Object.clone(Form.Element.Methods),SELECT:Object.clone(Form.Element.Methods),TEXTAREA:Object.clone(Form.Element.Methods),BUTTON:Object.clone(Form.Element.Methods)})}aF.addMethods(a3);function n(){av=null;r=null}if(window.attachEvent){window.attachEvent("onunload",n)}})(this);(function(){function k(G){var F=G.match(/^(\d+)%?$/i);if(!F){return null}return(Number(F[1])/100)}function y(G,H){G=$(G);var I=G.style[H];if(!I||I==="auto"){var F=document.defaultView.getComputedStyle(G,null);I=F?F[H]:null}if(H==="opacity"){return I?parseFloat(I):1}return I==="auto"?null:I}function B(F,G){var H=F.style[G];if(!H&&F.currentStyle){H=F.currentStyle[G]}return H}function r(H,G){var J=H.offsetWidth;var L=u(H,"borderLeftWidth",G)||0;var F=u(H,"borderRightWidth",G)||0;var I=u(H,"paddingLeft",G)||0;var K=u(H,"paddingRight",G)||0;return J-L-F-I-K}if(!Object.isUndefined(document.documentElement.currentStyle)&&!Prototype.Browser.Opera){y=B}function u(P,Q,G){var J=null;if(Object.isElement(P)){J=P;P=y(J,Q)}if(P===null||Object.isUndefined(P)){return null}if((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(P)){return window.parseFloat(P)}var K=P.include("%"),H=(G===document.viewport);if(/\d/.test(P)&&J&&J.runtimeStyle&&!(K&&H)){var F=J.style.left,O=J.runtimeStyle.left;J.runtimeStyle.left=J.currentStyle.left;J.style.left=P||0;P=J.style.pixelLeft;J.style.left=F;J.runtimeStyle.left=O;return P}if(J&&K){G=G||J.parentNode;var I=k(P),L=null;var N=Q.include("left")||Q.include("right")||Q.include("width");var M=Q.include("top")||Q.include("bottom")||Q.include("height");if(G===document.viewport){if(N){L=document.viewport.getWidth()}else{if(M){L=document.viewport.getHeight()}}}else{if(N){L=$(G).measure("width")}else{if(M){L=$(G).measure("height")}}}return(L===null)?0:L*I}return 0}function j(F){if(Object.isString(F)&&F.endsWith("px")){return F}return F+"px"}function m(F){while(F&&F.parentNode){var G=F.getStyle("display");if(G==="none"){return false}F=$(F.parentNode)}return true}var g=Prototype.K;if("currentStyle" in document.documentElement){g=function(F){if(!F.currentStyle.hasLayout){F.style.zoom=1}return F}}function i(F){if(F.include("border")){F=F+"-width"}return F.camelize()}Element.Layout=Class.create(Hash,{initialize:function($super,G,F){$super();this.element=$(G);Element.Layout.PROPERTIES.each(function(H){this._set(H,null)},this);if(F){this._preComputing=true;this._begin();Element.Layout.PROPERTIES.each(this._compute,this);this._end();this._preComputing=false}},_set:function(G,F){return Hash.prototype.set.call(this,G,F)},set:function(G,F){throw"Properties of Element.Layout are read-only."},get:function($super,G){var F=$super(G);return F===null?this._compute(G):F},_begin:function(){if(this._isPrepared()){return}var J=this.element;if(m(J)){this._setPrepared(true);return}var L={position:J.style.position||"",width:J.style.width||"",visibility:J.style.visibility||"",display:J.style.display||""};J.store("prototype_original_styles",L);var M=y(J,"position"),F=J.offsetWidth;if(F===0||F===null){J.style.display="block";F=J.offsetWidth}var G=(M==="fixed")?document.viewport:J.parentNode;var N={visibility:"hidden",display:"block"};if(M!=="fixed"){N.position="absolute"}J.setStyle(N);var H=J.offsetWidth,I;if(F&&(H===F)){I=r(J,G)}else{if(M==="absolute"||M==="fixed"){I=r(J,G)}else{var O=J.parentNode,K=$(O).getLayout();I=K.get("width")-this.get("margin-left")-this.get("border-left")-this.get("padding-left")-this.get("padding-right")-this.get("border-right")-this.get("margin-right")}}J.setStyle({width:I+"px"});this._setPrepared(true)},_end:function(){var G=this.element;var F=G.retrieve("prototype_original_styles");G.store("prototype_original_styles",null);G.setStyle(F);this._setPrepared(false)},_compute:function(G){var F=Element.Layout.COMPUTATIONS;if(!(G in F)){throw"Property not found."}return this._set(G,F[G].call(this,this.element))},_isPrepared:function(){return this.element.retrieve("prototype_element_layout_prepared",false)},_setPrepared:function(F){return this.element.store("prototype_element_layout_prepared",F)},toObject:function(){var F=$A(arguments);var G=(F.length===0)?Element.Layout.PROPERTIES:F.join(" ").split(" ");var H={};G.each(function(I){if(!Element.Layout.PROPERTIES.include(I)){return}var J=this.get(I);if(J!=null){H[I]=J}},this);return H},toHash:function(){var F=this.toObject.apply(this,arguments);return new Hash(F)},toCSS:function(){var F=$A(arguments);var H=(F.length===0)?Element.Layout.PROPERTIES:F.join(" ").split(" ");var G={};H.each(function(I){if(!Element.Layout.PROPERTIES.include(I)){return}if(Element.Layout.COMPOSITE_PROPERTIES.include(I)){return}var J=this.get(I);if(J!=null){G[i(I)]=J+"px"}},this);return G},inspect:function(){return"#<Element.Layout>"}});Object.extend(Element.Layout,{PROPERTIES:$w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"),COMPOSITE_PROPERTIES:$w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"),COMPUTATIONS:{height:function(H){if(!this._preComputing){this._begin()}var F=this.get("border-box-height");if(F<=0){if(!this._preComputing){this._end()}return 0}var I=this.get("border-top"),G=this.get("border-bottom");var K=this.get("padding-top"),J=this.get("padding-bottom");if(!this._preComputing){this._end()}return F-I-G-K-J},width:function(H){if(!this._preComputing){this._begin()}var G=this.get("border-box-width");if(G<=0){if(!this._preComputing){this._end()}return 0}var K=this.get("border-left"),F=this.get("border-right");var I=this.get("padding-left"),J=this.get("padding-right");if(!this._preComputing){this._end()}return G-K-F-I-J},"padding-box-height":function(G){var F=this.get("height"),I=this.get("padding-top"),H=this.get("padding-bottom");return F+I+H},"padding-box-width":function(F){var G=this.get("width"),H=this.get("padding-left"),I=this.get("padding-right");return G+H+I},"border-box-height":function(G){if(!this._preComputing){this._begin()}var F=G.offsetHeight;if(!this._preComputing){this._end()}return F},"border-box-width":function(F){if(!this._preComputing){this._begin()}var G=F.offsetWidth;if(!this._preComputing){this._end()}return G},"margin-box-height":function(G){var F=this.get("border-box-height"),H=this.get("margin-top"),I=this.get("margin-bottom");if(F<=0){return 0}return F+H+I},"margin-box-width":function(H){var G=this.get("border-box-width"),I=this.get("margin-left"),F=this.get("margin-right");if(G<=0){return 0}return G+I+F},top:function(F){var G=F.positionedOffset();return G.top},bottom:function(F){var I=F.positionedOffset(),G=F.getOffsetParent(),H=G.measure("height");var J=this.get("border-box-height");return H-J-I.top},left:function(F){var G=F.positionedOffset();return G.left},right:function(H){var J=H.positionedOffset(),I=H.getOffsetParent(),F=I.measure("width");var G=this.get("border-box-width");return F-G-J.left},"padding-top":function(F){return u(F,"paddingTop")},"padding-bottom":function(F){return u(F,"paddingBottom")},"padding-left":function(F){return u(F,"paddingLeft")},"padding-right":function(F){return u(F,"paddingRight")},"border-top":function(F){return u(F,"borderTopWidth")},"border-bottom":function(F){return u(F,"borderBottomWidth")},"border-left":function(F){return u(F,"borderLeftWidth")},"border-right":function(F){return u(F,"borderRightWidth")},"margin-top":function(F){return u(F,"marginTop")},"margin-bottom":function(F){return u(F,"marginBottom")},"margin-left":function(F){return u(F,"marginLeft")},"margin-right":function(F){return u(F,"marginRight")}}});if("getBoundingClientRect" in document.documentElement){Object.extend(Element.Layout.COMPUTATIONS,{right:function(G){var H=g(G.getOffsetParent());var I=G.getBoundingClientRect(),F=H.getBoundingClientRect();return(F.right-I.right).round()},bottom:function(G){var H=g(G.getOffsetParent());var I=G.getBoundingClientRect(),F=H.getBoundingClientRect();return(F.bottom-I.bottom).round()}})}Element.Offset=Class.create({initialize:function(G,F){this.left=G.round();this.top=F.round();this[0]=this.left;this[1]=this.top},relativeTo:function(F){return new Element.Offset(this.left-F.left,this.top-F.top)},inspect:function(){return"#<Element.Offset left: #{left} top: #{top}>".interpolate(this)},toString:function(){return"[#{left}, #{top}]".interpolate(this)},toArray:function(){return[this.left,this.top]}});function z(G,F){return new Element.Layout(G,F)}function d(F,G){return $(F).getLayout().get(G)}function q(F){return Element.getDimensions(F).height}function c(F){return Element.getDimensions(F).width}function s(G){G=$(G);var K=Element.getStyle(G,"display");if(K&&K!=="none"){return{width:G.offsetWidth,height:G.offsetHeight}}var H=G.style;var F={visibility:H.visibility,position:H.position,display:H.display};var J={visibility:"hidden",display:"block"};if(F.position!=="fixed"){J.position="absolute"}Element.setStyle(G,J);var I={width:G.offsetWidth,height:G.offsetHeight};Element.setStyle(G,F);return I}function p(F){F=$(F);function H(I){return n(I)?$(document.body):$(I)}if(h(F)||f(F)||o(F)||n(F)){return $(document.body)}var G=(Element.getStyle(F,"display")==="inline");if(!G&&F.offsetParent){return H(F.offsetParent)}while((F=F.parentNode)&&F!==document.body){if(Element.getStyle(F,"position")!=="static"){return H(F)}}return $(document.body)}function C(G){G=$(G);var F=0,H=0;if(G.parentNode){do{F+=G.offsetTop||0;H+=G.offsetLeft||0;G=G.offsetParent}while(G)}return new Element.Offset(H,F)}function w(G){G=$(G);var H=G.getLayout();var F=0,J=0;do{F+=G.offsetTop||0;J+=G.offsetLeft||0;G=G.offsetParent;if(G){if(o(G)){break}var I=Element.getStyle(G,"position");if(I!=="static"){break}}}while(G);J-=H.get("margin-left");F-=H.get("margin-top");return new Element.Offset(J,F)}function b(G){var F=0,H=0;do{if(G===document.body){var I=document.documentElement||document.body.parentNode||document.body;F+=!Object.isUndefined(window.pageYOffset)?window.pageYOffset:I.scrollTop||0;H+=!Object.isUndefined(window.pageXOffset)?window.pageXOffset:I.scrollLeft||0;break}else{F+=G.scrollTop||0;H+=G.scrollLeft||0;G=G.parentNode}}while(G);return new Element.Offset(H,F)}function A(J){var F=0,I=0,H=document.body;J=$(J);var G=J;do{F+=G.offsetTop||0;I+=G.offsetLeft||0;if(G.offsetParent==H&&Element.getStyle(G,"position")=="absolute"){break}}while(G=G.offsetParent);G=J;do{if(G!=H){F-=G.scrollTop||0;I-=G.scrollLeft||0}}while(G=G.parentNode);return new Element.Offset(I,F)}function x(F){F=$(F);if(Element.getStyle(F,"position")==="absolute"){return F}var J=p(F);var I=F.viewportOffset(),G=J.viewportOffset();var K=I.relativeTo(G);var H=F.getLayout();F.store("prototype_absolutize_original_styles",{position:F.getStyle("position"),left:F.getStyle("left"),top:F.getStyle("top"),width:F.getStyle("width"),height:F.getStyle("height")});F.setStyle({position:"absolute",top:K.top+"px",left:K.left+"px",width:H.get("width")+"px",height:H.get("height")+"px"});return F}function l(G){G=$(G);if(Element.getStyle(G,"position")==="relative"){return G}var F=G.retrieve("prototype_absolutize_original_styles");if(F){G.setStyle(F)}return G}function a(F){F=$(F);var G=Element.cumulativeOffset(F);window.scrollTo(G.left,G.top);return F}function v(G){G=$(G);var F=Element.getStyle(G,"position"),H={};if(F==="static"||!F){H.position="relative";if(Prototype.Browser.Opera){H.top=0;H.left=0}Element.setStyle(G,H);Element.store(G,"prototype_made_positioned",true)}return G}function t(F){F=$(F);var H=Element.getStorage(F),G=H.get("prototype_made_positioned");if(G){H.unset("prototype_made_positioned");Element.setStyle(F,{position:"",top:"",bottom:"",left:"",right:""})}return F}function e(G){G=$(G);var I=Element.getStorage(G),F=I.get("prototype_made_clipping");if(Object.isUndefined(F)){var H=Element.getStyle(G,"overflow");I.set("prototype_made_clipping",H);if(H!=="hidden"){G.style.overflow="hidden"}}return G}function D(F){F=$(F);var H=Element.getStorage(F),G=H.get("prototype_made_clipping");if(!Object.isUndefined(G)){H.unset("prototype_made_clipping");F.style.overflow=G||""}return F}function E(I,F,Q){Q=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},Q||{});var H=document.documentElement;F=$(F);I=$(I);var G,O,K,P={};if(Q.setLeft||Q.setTop){G=Element.viewportOffset(F);O=[0,0];if(Element.getStyle(I,"position")==="absolute"){var N=Element.getOffsetParent(I);if(N!==document.body){O=Element.viewportOffset(N)}}}function L(){var R=0,S=0;if(Object.isNumber(window.pageXOffset)){R=window.pageXOffset;S=window.pageYOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){R=document.body.scrollLeft;S=document.body.scrollTop}else{if(H&&(H.scrollLeft||H.scrollTop)){R=H.scrollLeft;S=H.scrollTop}}}return{x:R,y:S}}var J=L();if(Q.setWidth||Q.setHeight){K=Element.getLayout(F)}if(Q.setLeft){P.left=(G[0]+J.x-O[0]+Q.offsetLeft)+"px"}if(Q.setTop){P.top=(G[1]+J.y-O[1]+Q.offsetTop)+"px"}var M=I.getLayout();if(Q.setWidth){P.width=K.get("width")+"px"}if(Q.setHeight){P.height=K.get("height")+"px"}return Element.setStyle(I,P)}if(Prototype.Browser.IE){p=p.wrap(function(H,G){G=$(G);if(h(G)||f(G)||o(G)||n(G)){return $(document.body)}var F=G.getStyle("position");if(F!=="static"){return H(G)}G.setStyle({position:"relative"});var I=H(G);G.setStyle({position:F});return I});w=w.wrap(function(I,G){G=$(G);if(!G.parentNode){return new Element.Offset(0,0)}var F=G.getStyle("position");if(F!=="static"){return I(G)}var H=G.getOffsetParent();if(H&&H.getStyle("position")==="fixed"){g(H)}G.setStyle({position:"relative"});var J=I(G);G.setStyle({position:F});return J})}else{if(Prototype.Browser.Webkit){C=function(G){G=$(G);var F=0,H=0;do{F+=G.offsetTop||0;H+=G.offsetLeft||0;if(G.offsetParent==document.body){if(Element.getStyle(G,"position")=="absolute"){break}}G=G.offsetParent}while(G);return new Element.Offset(H,F)}}}Element.addMethods({getLayout:z,measure:d,getWidth:c,getHeight:q,getDimensions:s,getOffsetParent:p,cumulativeOffset:C,positionedOffset:w,cumulativeScrollOffset:b,viewportOffset:A,absolutize:x,relativize:l,scrollTo:a,makePositioned:v,undoPositioned:t,makeClipping:e,undoClipping:D,clonePosition:E});function o(F){return F.nodeName.toUpperCase()==="BODY"}function n(F){return F.nodeName.toUpperCase()==="HTML"}function h(F){return F.nodeType===Node.DOCUMENT_NODE}function f(F){return F!==document.body&&!Element.descendantOf(F,document.body)}if("getBoundingClientRect" in document.documentElement){Element.addMethods({viewportOffset:function(F){F=$(F);if(f(F)){return new Element.Offset(0,0)}var G=F.getBoundingClientRect(),H=document.documentElement;return new Element.Offset(G.left-H.clientLeft,G.top-H.clientTop)}})}})();(function(){var c=Prototype.Browser.Opera&&(window.parseFloat(window.opera.version())<9.5);var f=null;function b(){if(f){return f}f=c?document.body:document.documentElement;return f}function d(){return{width:this.getWidth(),height:this.getHeight()}}function a(){return b().clientWidth}function g(){return b().clientHeight}function e(){var h=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft;var i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;return new Element.Offset(h,i)}document.viewport={getDimensions:d,getWidth:a,getHeight:g,getScrollOffsets:e}})();window.$$=function(){var a=$A(arguments).join(", ");return Prototype.Selector.select(a,document)};Prototype.Selector=(function(){function a(){throw new Error('Method "Prototype.Selector.select" must be defined.')}function c(){throw new Error('Method "Prototype.Selector.match" must be defined.')}function d(l,m,h){h=h||0;var g=Prototype.Selector.match,k=l.length,f=0,j;for(j=0;j<k;j++){if(g(l[j],m)&&h==f++){return Element.extend(l[j])}}}function e(h){for(var f=0,g=h.length;f<g;f++){Element.extend(h[f])}return h}var b=Prototype.K;return{select:a,match:c,find:d,extendElements:(Element.extend===b)?b:e,extendElement:Element.extend}})();Prototype._original_property=window.Sizzle;(function(){function a(b){Prototype._actual_sizzle=b()}a.amd=true;if(typeof define!=="undefined"&&define.amd){Prototype._original_define=define;Prototype._actual_sizzle=null;window.define=a}})();
/*!
 * Sizzle CSS Selector Engine v1.10.18
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-02-05
 */
(function(av){var D,ay,t,M,P,ab,ax,aC,N,ac,ae,H,u,an,ai,aw,k,K,ap="sizzle"+-(new Date()),O=av.document,az=0,aj=0,d=F(),ao=F(),L=F(),J=function(i,e){if(i===e){ac=true}return 0},au=typeof undefined,V=1<<31,T=({}).hasOwnProperty,ar=[],at=ar.pop,R=ar.push,b=ar.push,s=ar.slice,j=ar.indexOf||function(aE){var aD=0,e=this.length;for(;aD<e;aD++){if(this[aD]===aE){return aD}}return -1},c="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",v="[\\x20\\t\\r\\n\\f]",a="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Q=a.replace("w","w#"),al="\\["+v+"*("+a+")"+v+"*(?:([*^$|!~]?=)"+v+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+Q+")|)|)"+v+"*\\]",q=":("+a+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+al.replace(3,8)+")*)|.*)\\)|)",x=new RegExp("^"+v+"+|((?:^|[^\\\\])(?:\\\\.)*)"+v+"+$","g"),A=new RegExp("^"+v+"*,"+v+"*"),G=new RegExp("^"+v+"*([>+~]|"+v+")"+v+"*"),z=new RegExp("="+v+"*([^\\]'\"]*?)"+v+"*\\]","g"),X=new RegExp(q),Z=new RegExp("^"+Q+"$"),ah={ID:new RegExp("^#("+a+")"),CLASS:new RegExp("^\\.("+a+")"),TAG:new RegExp("^("+a.replace("w","w*")+")"),ATTR:new RegExp("^"+al),PSEUDO:new RegExp("^"+q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+v+"*(even|odd|(([+-]|)(\\d*)n|)"+v+"*(?:([+-]|)"+v+"*(\\d+)|))"+v+"*\\)|)","i"),bool:new RegExp("^(?:"+c+")$","i"),needsContext:new RegExp("^"+v+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+v+"*((?:-\\d)?\\d*)"+v+"*\\)|)(?=[^-]|$)","i")},h=/^(?:input|select|textarea|button)$/i,r=/^h\d$/i,U=/^[^{]+\{\s*\[native \w/,W=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ag=/[+~]/,S=/'|\\/g,y=new RegExp("\\\\([\\da-f]{1,6}"+v+"?|("+v+")|.)","ig"),ak=function(e,aE,i){var aD="0x"+aE-65536;return aD!==aD||i?aE:aD<0?String.fromCharCode(aD+65536):String.fromCharCode(aD>>10|55296,aD&1023|56320)};try{b.apply((ar=s.call(O.childNodes)),O.childNodes);ar[O.childNodes.length].nodeType}catch(I){b={apply:ar.length?function(i,e){R.apply(i,s.call(e))}:function(aF,aE){var e=aF.length,aD=0;while((aF[e++]=aE[aD++])){}aF.length=e-1}}}function B(aK,aD,aO,aQ){var aP,aH,aI,aM,aN,aG,aF,e,aE,aL;if((aD?aD.ownerDocument||aD:O)!==H){ae(aD)}aD=aD||H;aO=aO||[];if(!aK||typeof aK!=="string"){return aO}if((aM=aD.nodeType)!==1&&aM!==9){return[]}if(an&&!aQ){if((aP=W.exec(aK))){if((aI=aP[1])){if(aM===9){aH=aD.getElementById(aI);if(aH&&aH.parentNode){if(aH.id===aI){aO.push(aH);return aO}}else{return aO}}else{if(aD.ownerDocument&&(aH=aD.ownerDocument.getElementById(aI))&&K(aD,aH)&&aH.id===aI){aO.push(aH);return aO}}}else{if(aP[2]){b.apply(aO,aD.getElementsByTagName(aK));return aO}else{if((aI=aP[3])&&ay.getElementsByClassName&&aD.getElementsByClassName){b.apply(aO,aD.getElementsByClassName(aI));return aO}}}}if(ay.qsa&&(!ai||!ai.test(aK))){e=aF=ap;aE=aD;aL=aM===9&&aK;if(aM===1&&aD.nodeName.toLowerCase()!=="object"){aG=n(aK);if((aF=aD.getAttribute("id"))){e=aF.replace(S,"\\$&")}else{aD.setAttribute("id",e)}e="[id='"+e+"'] ";aN=aG.length;while(aN--){aG[aN]=e+o(aG[aN])}aE=ag.test(aK)&&Y(aD.parentNode)||aD;aL=aG.join(",")}if(aL){try{b.apply(aO,aE.querySelectorAll(aL));return aO}catch(aJ){}finally{if(!aF){aD.removeAttribute("id")}}}}}return ax(aK.replace(x,"$1"),aD,aO,aQ)}function F(){var i=[];function e(aD,aE){if(i.push(aD+" ")>t.cacheLength){delete e[i.shift()]}return(e[aD+" "]=aE)}return e}function p(e){e[ap]=true;return e}function l(i){var aE=H.createElement("div");try{return !!i(aE)}catch(aD){return false}finally{if(aE.parentNode){aE.parentNode.removeChild(aE)}aE=null}}function aA(aD,aF){var e=aD.split("|"),aE=aD.length;while(aE--){t.attrHandle[e[aE]]=aF}}function f(i,e){var aE=e&&i,aD=aE&&i.nodeType===1&&e.nodeType===1&&(~e.sourceIndex||V)-(~i.sourceIndex||V);if(aD){return aD}if(aE){while((aE=aE.nextSibling)){if(aE===e){return -1}}}return i?1:-1}function C(e){return function(aD){var i=aD.nodeName.toLowerCase();return i==="input"&&aD.type===e}}function g(e){return function(aD){var i=aD.nodeName.toLowerCase();return(i==="input"||i==="button")&&aD.type===e}}function am(e){return p(function(i){i=+i;return p(function(aD,aH){var aF,aE=e([],aD.length,i),aG=aE.length;while(aG--){if(aD[(aF=aE[aG])]){aD[aF]=!(aH[aF]=aD[aF])}}})})}function Y(e){return e&&typeof e.getElementsByTagName!==au&&e}ay=B.support={};P=B.isXML=function(e){var i=e&&(e.ownerDocument||e).documentElement;return i?i.nodeName!=="HTML":false};ae=B.setDocument=function(aD){var e,aE=aD?aD.ownerDocument||aD:O,i=aE.defaultView;if(aE===H||aE.nodeType!==9||!aE.documentElement){return H}H=aE;u=aE.documentElement;an=!P(aE);if(i&&i!==i.top){if(i.addEventListener){i.addEventListener("unload",function(){ae()},false)}else{if(i.attachEvent){i.attachEvent("onunload",function(){ae()})}}}ay.attributes=l(function(aF){aF.className="i";return !aF.getAttribute("className")});ay.getElementsByTagName=l(function(aF){aF.appendChild(aE.createComment(""));return !aF.getElementsByTagName("*").length});ay.getElementsByClassName=U.test(aE.getElementsByClassName)&&l(function(aF){aF.innerHTML="<div class='a'></div><div class='a i'></div>";aF.firstChild.className="i";return aF.getElementsByClassName("i").length===2});ay.getById=l(function(aF){u.appendChild(aF).id=ap;return !aE.getElementsByName||!aE.getElementsByName(ap).length});if(ay.getById){t.find.ID=function(aH,aG){if(typeof aG.getElementById!==au&&an){var aF=aG.getElementById(aH);return aF&&aF.parentNode?[aF]:[]}};t.filter.ID=function(aG){var aF=aG.replace(y,ak);return function(aH){return aH.getAttribute("id")===aF}}}else{delete t.find.ID;t.filter.ID=function(aG){var aF=aG.replace(y,ak);return function(aI){var aH=typeof aI.getAttributeNode!==au&&aI.getAttributeNode("id");return aH&&aH.value===aF}}}t.find.TAG=ay.getElementsByTagName?function(aF,aG){if(typeof aG.getElementsByTagName!==au){return aG.getElementsByTagName(aF)}}:function(aF,aJ){var aK,aI=[],aH=0,aG=aJ.getElementsByTagName(aF);if(aF==="*"){while((aK=aG[aH++])){if(aK.nodeType===1){aI.push(aK)}}return aI}return aG};t.find.CLASS=ay.getElementsByClassName&&function(aG,aF){if(typeof aF.getElementsByClassName!==au&&an){return aF.getElementsByClassName(aG)}};aw=[];ai=[];if((ay.qsa=U.test(aE.querySelectorAll))){l(function(aF){aF.innerHTML="<select t=''><option selected=''></option></select>";if(aF.querySelectorAll("[t^='']").length){ai.push("[*^$]="+v+"*(?:''|\"\")")}if(!aF.querySelectorAll("[selected]").length){ai.push("\\["+v+"*(?:value|"+c+")")}if(!aF.querySelectorAll(":checked").length){ai.push(":checked")}});l(function(aG){var aF=aE.createElement("input");aF.setAttribute("type","hidden");aG.appendChild(aF).setAttribute("name","D");if(aG.querySelectorAll("[name=d]").length){ai.push("name"+v+"*[*^$|!~]?=")}if(!aG.querySelectorAll(":enabled").length){ai.push(":enabled",":disabled")}aG.querySelectorAll("*,:x");ai.push(",.*:")})}if((ay.matchesSelector=U.test((k=u.webkitMatchesSelector||u.mozMatchesSelector||u.oMatchesSelector||u.msMatchesSelector)))){l(function(aF){ay.disconnectedMatch=k.call(aF,"div");k.call(aF,"[s!='']:x");aw.push("!=",q)})}ai=ai.length&&new RegExp(ai.join("|"));aw=aw.length&&new RegExp(aw.join("|"));e=U.test(u.compareDocumentPosition);K=e||U.test(u.contains)?function(aG,aF){var aI=aG.nodeType===9?aG.documentElement:aG,aH=aF&&aF.parentNode;return aG===aH||!!(aH&&aH.nodeType===1&&(aI.contains?aI.contains(aH):aG.compareDocumentPosition&&aG.compareDocumentPosition(aH)&16))}:function(aG,aF){if(aF){while((aF=aF.parentNode)){if(aF===aG){return true}}}return false};J=e?function(aG,aF){if(aG===aF){ac=true;return 0}var aH=!aG.compareDocumentPosition-!aF.compareDocumentPosition;if(aH){return aH}aH=(aG.ownerDocument||aG)===(aF.ownerDocument||aF)?aG.compareDocumentPosition(aF):1;if(aH&1||(!ay.sortDetached&&aF.compareDocumentPosition(aG)===aH)){if(aG===aE||aG.ownerDocument===O&&K(O,aG)){return -1}if(aF===aE||aF.ownerDocument===O&&K(O,aF)){return 1}return N?(j.call(N,aG)-j.call(N,aF)):0}return aH&4?-1:1}:function(aG,aF){if(aG===aF){ac=true;return 0}var aM,aJ=0,aL=aG.parentNode,aI=aF.parentNode,aH=[aG],aK=[aF];if(!aL||!aI){return aG===aE?-1:aF===aE?1:aL?-1:aI?1:N?(j.call(N,aG)-j.call(N,aF)):0}else{if(aL===aI){return f(aG,aF)}}aM=aG;while((aM=aM.parentNode)){aH.unshift(aM)}aM=aF;while((aM=aM.parentNode)){aK.unshift(aM)}while(aH[aJ]===aK[aJ]){aJ++}return aJ?f(aH[aJ],aK[aJ]):aH[aJ]===O?-1:aK[aJ]===O?1:0};return aE};B.matches=function(i,e){return B(i,null,null,e)};B.matchesSelector=function(aD,aF){if((aD.ownerDocument||aD)!==H){ae(aD)}aF=aF.replace(z,"='$1']");if(ay.matchesSelector&&an&&(!aw||!aw.test(aF))&&(!ai||!ai.test(aF))){try{var i=k.call(aD,aF);if(i||ay.disconnectedMatch||aD.document&&aD.document.nodeType!==11){return i}}catch(aE){}}return B(aF,H,null,[aD]).length>0};B.contains=function(e,i){if((e.ownerDocument||e)!==H){ae(e)}return K(e,i)};B.attr=function(aD,e){if((aD.ownerDocument||aD)!==H){ae(aD)}var i=t.attrHandle[e.toLowerCase()],aE=i&&T.call(t.attrHandle,e.toLowerCase())?i(aD,e,!an):undefined;return aE!==undefined?aE:ay.attributes||!an?aD.getAttribute(e):(aE=aD.getAttributeNode(e))&&aE.specified?aE.value:null};B.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};B.uniqueSort=function(aE){var aF,aG=[],e=0,aD=0;ac=!ay.detectDuplicates;N=!ay.sortStable&&aE.slice(0);aE.sort(J);if(ac){while((aF=aE[aD++])){if(aF===aE[aD]){e=aG.push(aD)}}while(e--){aE.splice(aG[e],1)}}N=null;return aE};M=B.getText=function(aG){var aF,aD="",aE=0,e=aG.nodeType;if(!e){while((aF=aG[aE++])){aD+=M(aF)}}else{if(e===1||e===9||e===11){if(typeof aG.textContent==="string"){return aG.textContent}else{for(aG=aG.firstChild;aG;aG=aG.nextSibling){aD+=M(aG)}}}else{if(e===3||e===4){return aG.nodeValue}}}return aD};t=B.selectors={cacheLength:50,createPseudo:p,match:ah,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(y,ak);e[3]=(e[4]||e[5]||"").replace(y,ak);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){B.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+((e[7]+e[8])||e[3]==="odd")}else{if(e[3]){B.error(e[0])}}return e},PSEUDO:function(i){var e,aD=!i[5]&&i[2];if(ah.CHILD.test(i[0])){return null}if(i[3]&&i[4]!==undefined){i[2]=i[4]}else{if(aD&&X.test(aD)&&(e=n(aD,true))&&(e=aD.indexOf(")",aD.length-e)-aD.length)){i[0]=i[0].slice(0,e);i[2]=aD.slice(0,e)}}return i.slice(0,3)}},filter:{TAG:function(i){var e=i.replace(y,ak).toLowerCase();return i==="*"?function(){return true}:function(aD){return aD.nodeName&&aD.nodeName.toLowerCase()===e}},CLASS:function(e){var i=d[e+" "];return i||(i=new RegExp("(^|"+v+")"+e+"("+v+"|$)"))&&d(e,function(aD){return i.test(typeof aD.className==="string"&&aD.className||typeof aD.getAttribute!==au&&aD.getAttribute("class")||"")})},ATTR:function(aD,i,e){return function(aF){var aE=B.attr(aF,aD);if(aE==null){return i==="!="}if(!i){return true}aE+="";return i==="="?aE===e:i==="!="?aE!==e:i==="^="?e&&aE.indexOf(e)===0:i==="*="?e&&aE.indexOf(e)>-1:i==="$="?e&&aE.slice(-e.length)===e:i==="~="?(" "+aE+" ").indexOf(e)>-1:i==="|="?aE===e||aE.slice(0,e.length+1)===e+"-":false}},CHILD:function(i,aF,aE,aG,aD){var aI=i.slice(0,3)!=="nth",e=i.slice(-4)!=="last",aH=aF==="of-type";return aG===1&&aD===0?function(aJ){return !!aJ.parentNode}:function(aP,aN,aS){var aJ,aV,aQ,aU,aR,aM,aO=aI!==e?"nextSibling":"previousSibling",aT=aP.parentNode,aL=aH&&aP.nodeName.toLowerCase(),aK=!aS&&!aH;if(aT){if(aI){while(aO){aQ=aP;while((aQ=aQ[aO])){if(aH?aQ.nodeName.toLowerCase()===aL:aQ.nodeType===1){return false}}aM=aO=i==="only"&&!aM&&"nextSibling"}return true}aM=[e?aT.firstChild:aT.lastChild];if(e&&aK){aV=aT[ap]||(aT[ap]={});aJ=aV[i]||[];aR=aJ[0]===az&&aJ[1];aU=aJ[0]===az&&aJ[2];aQ=aR&&aT.childNodes[aR];while((aQ=++aR&&aQ&&aQ[aO]||(aU=aR=0)||aM.pop())){if(aQ.nodeType===1&&++aU&&aQ===aP){aV[i]=[az,aR,aU];break}}}else{if(aK&&(aJ=(aP[ap]||(aP[ap]={}))[i])&&aJ[0]===az){aU=aJ[1]}else{while((aQ=++aR&&aQ&&aQ[aO]||(aU=aR=0)||aM.pop())){if((aH?aQ.nodeName.toLowerCase()===aL:aQ.nodeType===1)&&++aU){if(aK){(aQ[ap]||(aQ[ap]={}))[i]=[az,aU]}if(aQ===aP){break}}}}}aU-=aD;return aU===aG||(aU%aG===0&&aU/aG>=0)}}},PSEUDO:function(aE,aD){var e,i=t.pseudos[aE]||t.setFilters[aE.toLowerCase()]||B.error("unsupported pseudo: "+aE);if(i[ap]){return i(aD)}if(i.length>1){e=[aE,aE,"",aD];return t.setFilters.hasOwnProperty(aE.toLowerCase())?p(function(aH,aJ){var aG,aF=i(aH,aD),aI=aF.length;while(aI--){aG=j.call(aH,aF[aI]);aH[aG]=!(aJ[aG]=aF[aI])}}):function(aF){return i(aF,0,e)}}return i}},pseudos:{not:p(function(e){var i=[],aD=[],aE=ab(e.replace(x,"$1"));return aE[ap]?p(function(aG,aL,aJ,aH){var aK,aF=aE(aG,null,aH,[]),aI=aG.length;while(aI--){if((aK=aF[aI])){aG[aI]=!(aL[aI]=aK)}}}):function(aH,aG,aF){i[0]=aH;aE(i,null,aF,aD);return !aD.pop()}}),has:p(function(e){return function(i){return B(e,i).length>0}}),contains:p(function(e){return function(i){return(i.textContent||i.innerText||M(i)).indexOf(e)>-1}}),lang:p(function(e){if(!Z.test(e||"")){B.error("unsupported lang: "+e)}e=e.replace(y,ak).toLowerCase();return function(aD){var i;do{if((i=an?aD.lang:aD.getAttribute("xml:lang")||aD.getAttribute("lang"))){i=i.toLowerCase();return i===e||i.indexOf(e+"-")===0}}while((aD=aD.parentNode)&&aD.nodeType===1);return false}}),target:function(e){var i=av.location&&av.location.hash;return i&&i.slice(1)===e.id},root:function(e){return e===u},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var i=e.nodeName.toLowerCase();return(i==="input"&&!!e.checked)||(i==="option"&&!!e.selected)},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6){return false}}return true},parent:function(e){return !t.pseudos.empty(e)},header:function(e){return r.test(e.nodeName)},input:function(e){return h.test(e.nodeName)},button:function(i){var e=i.nodeName.toLowerCase();return e==="input"&&i.type==="button"||e==="button"},text:function(i){var e;return i.nodeName.toLowerCase()==="input"&&i.type==="text"&&((e=i.getAttribute("type"))==null||e.toLowerCase()==="text")},first:am(function(){return[0]}),last:am(function(e,i){return[i-1]}),eq:am(function(e,aD,i){return[i<0?i+aD:i]}),even:am(function(e,aE){var aD=0;for(;aD<aE;aD+=2){e.push(aD)}return e}),odd:am(function(e,aE){var aD=1;for(;aD<aE;aD+=2){e.push(aD)}return e}),lt:am(function(e,aF,aE){var aD=aE<0?aE+aF:aE;for(;--aD>=0;){e.push(aD)}return e}),gt:am(function(e,aF,aE){var aD=aE<0?aE+aF:aE;for(;++aD<aF;){e.push(aD)}return e})}};t.pseudos.nth=t.pseudos.eq;for(D in {radio:true,checkbox:true,file:true,password:true,image:true}){t.pseudos[D]=C(D)}for(D in {submit:true,reset:true}){t.pseudos[D]=g(D)}function aa(){}aa.prototype=t.filters=t.pseudos;t.setFilters=new aa();function n(aF,aK){var i,aG,aI,aJ,aH,aD,e,aE=ao[aF+" "];if(aE){return aK?0:aE.slice(0)}aH=aF;aD=[];e=t.preFilter;while(aH){if(!i||(aG=A.exec(aH))){if(aG){aH=aH.slice(aG[0].length)||aH}aD.push((aI=[]))}i=false;if((aG=G.exec(aH))){i=aG.shift();aI.push({value:i,type:aG[0].replace(x," ")});aH=aH.slice(i.length)}for(aJ in t.filter){if((aG=ah[aJ].exec(aH))&&(!e[aJ]||(aG=e[aJ](aG)))){i=aG.shift();aI.push({value:i,type:aJ,matches:aG});aH=aH.slice(i.length)}}if(!i){break}}return aK?aH.length:aH?B.error(aF):ao(aF,aD).slice(0)}function o(aF){var aE=0,aD=aF.length,e="";for(;aE<aD;aE++){e+=aF[aE].value}return e}function w(aF,aD,aE){var e=aD.dir,aG=aE&&e==="parentNode",i=aj++;return aD.first?function(aJ,aI,aH){while((aJ=aJ[e])){if(aJ.nodeType===1||aG){return aF(aJ,aI,aH)}}}:function(aL,aJ,aI){var aM,aK,aH=[az,i];if(aI){while((aL=aL[e])){if(aL.nodeType===1||aG){if(aF(aL,aJ,aI)){return true}}}}else{while((aL=aL[e])){if(aL.nodeType===1||aG){aK=aL[ap]||(aL[ap]={});if((aM=aK[e])&&aM[0]===az&&aM[1]===i){return(aH[2]=aM[2])}else{aK[e]=aH;if((aH[2]=aF(aL,aJ,aI))){return true}}}}}}}function aB(e){return e.length>1?function(aG,aF,aD){var aE=e.length;while(aE--){if(!e[aE](aG,aF,aD)){return false}}return true}:e[0]}function E(aD,aG,aF){var aE=0,e=aG.length;for(;aE<e;aE++){B(aD,aG[aE],aF)}return aF}function af(e,aD,aE,aF,aI){var aG,aL=[],aH=0,aJ=e.length,aK=aD!=null;for(;aH<aJ;aH++){if((aG=e[aH])){if(!aE||aE(aG,aF,aI)){aL.push(aG);if(aK){aD.push(aH)}}}}return aL}function m(aD,i,aF,aE,aG,e){if(aE&&!aE[ap]){aE=m(aE)}if(aG&&!aG[ap]){aG=m(aG,e)}return p(function(aR,aO,aJ,aQ){var aT,aP,aL,aK=[],aS=[],aI=aO.length,aH=aR||E(i||"*",aJ.nodeType?[aJ]:aJ,[]),aM=aD&&(aR||!i)?af(aH,aK,aD,aJ,aQ):aH,aN=aF?aG||(aR?aD:aI||aE)?[]:aO:aM;if(aF){aF(aM,aN,aJ,aQ)}if(aE){aT=af(aN,aS);aE(aT,[],aJ,aQ);aP=aT.length;while(aP--){if((aL=aT[aP])){aN[aS[aP]]=!(aM[aS[aP]]=aL)}}}if(aR){if(aG||aD){if(aG){aT=[];aP=aN.length;while(aP--){if((aL=aN[aP])){aT.push((aM[aP]=aL))}}aG(null,(aN=[]),aT,aQ)}aP=aN.length;while(aP--){if((aL=aN[aP])&&(aT=aG?j.call(aR,aL):aK[aP])>-1){aR[aT]=!(aO[aT]=aL)}}}}else{aN=af(aN===aO?aN.splice(aI,aN.length):aN);if(aG){aG(null,aO,aN,aQ)}else{b.apply(aO,aN)}}})}function aq(aI){var aD,aG,aE,aH=aI.length,aL=t.relative[aI[0].type],aM=aL||t.relative[" "],aF=aL?1:0,aJ=w(function(i){return i===aD},aM,true),aK=w(function(i){return j.call(aD,i)>-1},aM,true),e=[function(aO,aN,i){return(!aL&&(i||aN!==aC))||((aD=aN).nodeType?aJ(aO,aN,i):aK(aO,aN,i))}];for(;aF<aH;aF++){if((aG=t.relative[aI[aF].type])){e=[w(aB(e),aG)]}else{aG=t.filter[aI[aF].type].apply(null,aI[aF].matches);if(aG[ap]){aE=++aF;for(;aE<aH;aE++){if(t.relative[aI[aE].type]){break}}return m(aF>1&&aB(e),aF>1&&o(aI.slice(0,aF-1).concat({value:aI[aF-2].type===" "?"*":""})).replace(x,"$1"),aG,aF<aE&&aq(aI.slice(aF,aE)),aE<aH&&aq((aI=aI.slice(aE))),aE<aH&&o(aI))}e.push(aG)}}return aB(e)}function ad(aE,aD){var e=aD.length>0,aF=aE.length>0,i=function(aP,aJ,aO,aN,aS){var aK,aL,aQ,aU=0,aM="0",aG=aP&&[],aV=[],aT=aC,aI=aP||aF&&t.find.TAG("*",aS),aH=(az+=aT==null?1:Math.random()||0.1),aR=aI.length;if(aS){aC=aJ!==H&&aJ}for(;aM!==aR&&(aK=aI[aM])!=null;aM++){if(aF&&aK){aL=0;while((aQ=aE[aL++])){if(aQ(aK,aJ,aO)){aN.push(aK);break}}if(aS){az=aH}}if(e){if((aK=!aQ&&aK)){aU--}if(aP){aG.push(aK)}}}aU+=aM;if(e&&aM!==aU){aL=0;while((aQ=aD[aL++])){aQ(aG,aV,aJ,aO)}if(aP){if(aU>0){while(aM--){if(!(aG[aM]||aV[aM])){aV[aM]=at.call(aN)}}}aV=af(aV)}b.apply(aN,aV);if(aS&&!aP&&aV.length>0&&(aU+aD.length)>1){B.uniqueSort(aN)}}if(aS){az=aH;aC=aT}return aG};return e?p(i):i}ab=B.compile=function(e,aE){var aF,aD=[],aH=[],aG=L[e+" "];if(!aG){if(!aE){aE=n(e)}aF=aE.length;while(aF--){aG=aq(aE[aF]);if(aG[ap]){aD.push(aG)}else{aH.push(aG)}}aG=L(e,ad(aH,aD));aG.selector=e}return aG};ax=B.select=function(aE,e,aF,aI){var aG,aL,aD,aM,aJ,aK=typeof aE==="function"&&aE,aH=!aI&&n((aE=aK.selector||aE));aF=aF||[];if(aH.length===1){aL=aH[0]=aH[0].slice(0);if(aL.length>2&&(aD=aL[0]).type==="ID"&&ay.getById&&e.nodeType===9&&an&&t.relative[aL[1].type]){e=(t.find.ID(aD.matches[0].replace(y,ak),e)||[])[0];if(!e){return aF}else{if(aK){e=e.parentNode}}aE=aE.slice(aL.shift().value.length)}aG=ah.needsContext.test(aE)?0:aL.length;while(aG--){aD=aL[aG];if(t.relative[(aM=aD.type)]){break}if((aJ=t.find[aM])){if((aI=aJ(aD.matches[0].replace(y,ak),ag.test(aL[0].type)&&Y(e.parentNode)||e))){aL.splice(aG,1);aE=aI.length&&o(aL);if(!aE){b.apply(aF,aI);return aF}break}}}}(aK||ab(aE,aH))(aI,e,!an,aF,ag.test(aE)&&Y(e.parentNode)||e);return aF};ay.sortStable=ap.split("").sort(J).join("")===ap;ay.detectDuplicates=!!ac;ae();ay.sortDetached=l(function(e){return e.compareDocumentPosition(H.createElement("div"))&1});if(!l(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild.getAttribute("href")==="#"})){aA("type|href|height|width",function(i,e,aD){if(!aD){return i.getAttribute(e,e.toLowerCase()==="type"?1:2)}})}if(!ay.attributes||!l(function(e){e.innerHTML="<input/>";e.firstChild.setAttribute("value","");return e.firstChild.getAttribute("value")===""})){aA("value",function(i,e,aD){if(!aD&&i.nodeName.toLowerCase()==="input"){return i.defaultValue}})}if(!l(function(e){return e.getAttribute("disabled")==null})){aA(c,function(i,e,aE){var aD;if(!aE){return i[e]===true?e.toLowerCase():(aD=i.getAttributeNode(e))&&aD.specified?aD.value:null}})}if(typeof define==="function"&&define.amd){define(function(){return B})}else{if(typeof module!=="undefined"&&module.exports){module.exports=B}else{av.Sizzle=B}}})(window);(function(){if(typeof Sizzle!=="undefined"){return}if(typeof define!=="undefined"&&define.amd){window.Sizzle=Prototype._actual_sizzle;window.define=Prototype._original_define;delete Prototype._actual_sizzle;delete Prototype._original_define}else{if(typeof module!=="undefined"&&module.exports){window.Sizzle=module.exports;module.exports={}}}})();(function(c){var d=Prototype.Selector.extendElements;function a(e,f){return d(c(e,f||document))}function b(f,e){return c.matches(e,[f]).length==1}Prototype.Selector.engine=c;Prototype.Selector.select=a;Prototype.Selector.match=b})(Sizzle);window.Sizzle=Prototype._original_property;delete Prototype._original_property;var Form={reset:function(a){a=$(a);a.reset();return a},serializeElements:function(h,d){if(typeof d!="object"){d={hash:!!d}}else{if(Object.isUndefined(d.hash)){d.hash=true}}var e,g,a=false,f=d.submit,b,c;if(d.hash){c={};b=function(i,j,k){if(j in i){if(!Object.isArray(i[j])){i[j]=[i[j]]}i[j]=i[j].concat(k)}else{i[j]=k}return i}}else{c="";b=function(i,k,j){if(!Object.isArray(j)){j=[j]}if(!j.length){return i}var l=encodeURIComponent(k).gsub(/%20/,"+");return i+(i?"&":"")+j.map(function(m){m=m.gsub(/(\r)?\n/,"\r\n");m=encodeURIComponent(m);m=m.gsub(/%20/,"+");return l+"="+m}).join("&")}}return h.inject(c,function(i,j){if(!j.disabled&&j.name){e=j.name;g=$(j).getValue();if(g!=null&&j.type!="file"&&(j.type!="submit"||(!a&&f!==false&&(!f||e==f)&&(a=true)))){i=b(i,e,g)}}return i})}};Form.Methods={serialize:function(b,a){return Form.serializeElements(Form.getElements(b),a)},getElements:function(e){var f=$(e).getElementsByTagName("*");var d,c=[],b=Form.Element.Serializers;for(var a=0;d=f[a];a++){if(b[d.tagName.toLowerCase()]){c.push(Element.extend(d))}}return c},getInputs:function(g,c,d){g=$(g);var a=g.getElementsByTagName("input");if(!c&&!d){return $A(a).map(Element.extend)}for(var e=0,h=[],f=a.length;e<f;e++){var b=a[e];if((c&&b.type!=c)||(d&&b.name!=d)){continue}h.push(Element.extend(b))}return h},disable:function(a){a=$(a);Form.getElements(a).invoke("disable");return a},enable:function(a){a=$(a);Form.getElements(a).invoke("enable");return a},findFirstElement:function(b){var c=$(b).getElements().findAll(function(d){return"hidden"!=d.type&&!d.disabled});var a=c.findAll(function(d){return d.hasAttribute("tabIndex")&&d.tabIndex>=0}).sortBy(function(d){return d.tabIndex}).first();return a?a:c.find(function(d){return/^(?:input|select|textarea)$/i.test(d.tagName)})},focusFirstElement:function(b){b=$(b);var a=b.findFirstElement();if(a){a.activate()}return b},request:function(b,a){b=$(b),a=Object.clone(a||{});var d=a.parameters,c=b.readAttribute("action")||"";if(c.blank()){c=window.location.href}a.parameters=b.serialize(true);if(d){if(Object.isString(d)){d=d.toQueryParams()}Object.extend(a.parameters,d)}if(b.hasAttribute("method")&&!a.method){a.method=b.method}return new Ajax.Request(c,a)}};Form.Element={focus:function(a){$(a).focus();return a},select:function(a){$(a).select();return a}};Form.Element.Methods={serialize:function(a){a=$(a);if(!a.disabled&&a.name){var b=a.getValue();if(b!=undefined){var c={};c[a.name]=b;return Object.toQueryString(c)}}return""},getValue:function(a){a=$(a);var b=a.tagName.toLowerCase();return Form.Element.Serializers[b](a)},setValue:function(a,b){a=$(a);var c=a.tagName.toLowerCase();Form.Element.Serializers[c](a,b);return a},clear:function(a){$(a).value="";return a},present:function(a){return $(a).value!=""},activate:function(a){a=$(a);try{a.focus();if(a.select&&(a.tagName.toLowerCase()!="input"||!(/^(?:button|reset|submit)$/i.test(a.type)))){a.select()}}catch(b){}return a},disable:function(a){a=$(a);a.disabled=true;return a},enable:function(a){a=$(a);a.disabled=false;return a}};var Field=Form.Element;var $F=Form.Element.Methods.getValue;Form.Element.Serializers=(function(){function b(h,i){switch(h.type.toLowerCase()){case"checkbox":case"radio":return f(h,i);default:return e(h,i)}}function f(h,i){if(Object.isUndefined(i)){return h.checked?h.value:null}else{h.checked=!!i}}function e(h,i){if(Object.isUndefined(i)){return h.value}else{h.value=i}}function a(k,n){if(Object.isUndefined(n)){return(k.type==="select-one"?c:d)(k)}var j,l,o=!Object.isArray(n);for(var h=0,m=k.length;h<m;h++){j=k.options[h];l=this.optionValue(j);if(o){if(l==n){j.selected=true;return}}else{j.selected=n.include(l)}}}function c(i){var h=i.selectedIndex;return h>=0?g(i.options[h]):null}function d(l){var h,m=l.length;if(!m){return null}for(var k=0,h=[];k<m;k++){var j=l.options[k];if(j.selected){h.push(g(j))}}return h}function g(h){return Element.hasAttribute(h,"value")?h.value:h.text}return{input:b,inputSelector:f,textarea:e,select:a,selectOne:c,selectMany:d,optionValue:g,button:e}})();Abstract.TimedObserver=Class.create(PeriodicalExecuter,{initialize:function($super,a,b,c){$super(c,b);this.element=$(a);this.lastValue=this.getValue()},execute:function(){var a=this.getValue();if(Object.isString(this.lastValue)&&Object.isString(a)?this.lastValue!=a:String(this.lastValue)!=String(a)){this.callback(this.element,a);this.lastValue=a}}});Form.Element.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.Element.getValue(this.element)}});Form.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.serialize(this.element)}});Abstract.EventObserver=Class.create({initialize:function(a,b){this.element=$(a);this.callback=b;this.lastValue=this.getValue();if(this.element.tagName.toLowerCase()=="form"){this.registerFormCallbacks()}else{this.registerCallback(this.element)}},onElementEvent:function(){var a=this.getValue();if(this.lastValue!=a){this.callback(this.element,a);this.lastValue=a}},registerFormCallbacks:function(){Form.getElements(this.element).each(this.registerCallback,this)},registerCallback:function(a){if(a.type){switch(a.type.toLowerCase()){case"checkbox":case"radio":Event.observe(a,"click",this.onElementEvent.bind(this));break;default:Event.observe(a,"change",this.onElementEvent.bind(this));break}}}});Form.Element.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.Element.getValue(this.element)}});Form.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.serialize(this.element)}});(function(D){var u=document.createElement("div");var d=document.documentElement;var k="onmouseenter" in d&&"onmouseleave" in d;var L={KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45};var A=function(X){return false};if(window.attachEvent){if(window.addEventListener){A=function(X){return !(X instanceof window.Event)}}else{A=function(X){return true}}}var O;function M(Y,X){return Y.which?(Y.which===X+1):(Y.button===X)}var W={0:1,1:4,2:2};function S(Y,X){return Y.button===W[X]}function P(Y,X){switch(X){case 0:return Y.which==1&&!Y.metaKey;case 1:return Y.which==2||(Y.which==1&&Y.metaKey);case 2:return Y.which==3;default:return false}}if(window.attachEvent){if(!window.addEventListener){O=S}else{O=function(Y,X){return A(Y)?S(Y,X):M(Y,X)}}}else{if(Prototype.Browser.WebKit){O=P}else{O=M}}function B(X){return O(X,0)}function i(X){return O(X,1)}function e(X){return O(X,2)}function o(X){return Element.extend(K(X))}function K(Z){Z=L.extend(Z);var Y=Z.target,X=Z.type,aa=Z.currentTarget;if(aa&&aa.tagName){if(X==="load"||X==="error"||(X==="click"&&aa.tagName.toLowerCase()==="input"&&aa.type==="radio")){Y=aa}}return Y.nodeType==Node.TEXT_NODE?Y.parentNode:Y}function j(Z,aa){var Y=K(Z),X=Prototype.Selector;if(!aa){return Element.extend(Y)}while(Y){if(Object.isElement(Y)&&X.match(Y,aa)){return Element.extend(Y)}Y=Y.parentNode}}function t(X){return{x:U(X),y:T(X)}}function U(Z){var Y=document.documentElement,X=document.body||{scrollLeft:0};return Z.pageX||(Z.clientX+(Y.scrollLeft||X.scrollLeft)-(Y.clientLeft||0))}function T(Z){var Y=document.documentElement,X=document.body||{scrollTop:0};return Z.pageY||(Z.clientY+(Y.scrollTop||X.scrollTop)-(Y.clientTop||0))}function r(X){L.extend(X);X.preventDefault();X.stopPropagation();X.stopped=true}L.Methods={isLeftClick:B,isMiddleClick:i,isRightClick:e,element:o,findElement:j,pointer:t,pointerX:U,pointerY:T,stop:r};var H=Object.keys(L.Methods).inject({},function(X,Y){X[Y]=L.Methods[Y].methodize();return X});if(window.attachEvent){function V(Y){var X;switch(Y.type){case"mouseover":case"mouseenter":X=Y.fromElement;break;case"mouseout":case"mouseleave":X=Y.toElement;break;default:return null}return Element.extend(X)}var Q={stopPropagation:function(){this.cancelBubble=true},preventDefault:function(){this.returnValue=false},inspect:function(){return"[object Event]"}};L.extend=function(Y,X){if(!Y){return false}if(!A(Y)){return Y}if(Y._extendedByPrototype){return Y}Y._extendedByPrototype=Prototype.emptyFunction;var Z=L.pointer(Y);Object.extend(Y,{target:Y.srcElement||X,relatedTarget:V(Y),pageX:Z.x,pageY:Z.y});Object.extend(Y,H);Object.extend(Y,Q);return Y}}else{L.extend=Prototype.K}if(window.addEventListener){L.prototype=window.Event.prototype||document.createEvent("HTMLEvents").__proto__;Object.extend(L.prototype,H)}var v={mouseenter:"mouseover",mouseleave:"mouseout"};function f(X){return v[X]||X}if(k){f=Prototype.K}function R(X){if(X===window){return 0}if(typeof X._prototypeUID==="undefined"){X._prototypeUID=Element.Storage.UID++}return X._prototypeUID}function I(X){if(X===window){return 0}if(X==document){return 1}return X.uniqueID}if("uniqueID" in u){R=I}function x(X){return X.include(":")}L._isCustomEvent=x;function z(Z,Y){var X=D.Event.cache;if(Object.isUndefined(Y)){Y=R(Z)}if(!X[Y]){X[Y]={element:Z}}return X[Y]}function E(Y,X){if(Object.isUndefined(X)){X=R(Y)}delete D.Event.cache[X]}function h(Z,ac,af){var X=z(Z);if(!X[ac]){X[ac]=[]}var ab=X[ac];var aa=ab.length;while(aa--){if(ab[aa].handler===af){return null}}var ad=R(Z);var Y=D.Event._createResponder(ad,ac,af);var ae={responder:Y,handler:af};ab.push(ae);return ae}function s(ac,Z,ad){var Y=z(ac);var X=Y[Z]||[];var ab=X.length,ae;while(ab--){if(X[ab].handler===ad){ae=X[ab];break}}if(ae){var aa=X.indexOf(ae);X.splice(aa,1)}if(X.length===0){delete Y[Z];if(Object.keys(Y).length===1&&("element" in Y)){E(ac)}}return ae}function c(Z,Y,aa){Z=$(Z);var ab=h(Z,Y,aa);if(ab===null){return Z}var X=ab.responder;if(x(Y)){p(Z,Y,X)}else{m(Z,Y,X)}return Z}function m(aa,Z,Y){var X=f(Z);if(aa.addEventListener){aa.addEventListener(X,Y,false)}else{aa.attachEvent("on"+X,Y)}}function p(Z,Y,X){if(Z.addEventListener){Z.addEventListener("dataavailable",X,false)}else{Z.attachEvent("ondataavailable",X);Z.attachEvent("onlosecapture",X)}}function J(Y,X,Z){Y=$(Y);var ab=!Object.isUndefined(Z),ac=!Object.isUndefined(X);if(!ac&&!ab){y(Y);return Y}if(!ab){G(Y,X);return Y}var aa=s(Y,X,Z);if(!aa){return Y}a(Y,X,aa.responder);return Y}function C(aa,Z,Y){var X=f(Z);if(aa.removeEventListener){aa.removeEventListener(X,Y,false)}else{aa.detachEvent("on"+X,Y)}}function b(Z,Y,X){if(Z.removeEventListener){Z.removeEventListener("dataavailable",X,false)}else{Z.detachEvent("ondataavailable",X);Z.detachEvent("onlosecapture",X)}}function y(ac){var ab=R(ac),Z=D.Event.cache[ab];if(!Z){return}E(ac,ab);var X,aa;for(var Y in Z){if(Y==="element"){continue}X=Z[Y];aa=X.length;while(aa--){a(ac,Y,X[aa].responder)}}}function G(ac,Z){var Y=z(ac);var X=Y[Z];if(X){delete Y[Z]}X=X||[];var ab=X.length;while(ab--){a(ac,Z,X[ab].responder)}for(var aa in Y){if(aa==="element"){continue}return}E(ac)}function a(Y,X,Z){if(x(X)){b(Y,X,Z)}else{C(Y,X,Z)}}function g(X){if(X!==document){return X}if(document.createEvent&&!X.dispatchEvent){return document.documentElement}return X}function w(aa,Z,Y,X){aa=g($(aa));if(Object.isUndefined(X)){X=true}Y=Y||{};var ab=N(aa,Z,Y,X);return L.extend(ab)}function l(aa,Z,Y,X){var ab=document.createEvent("HTMLEvents");ab.initEvent("dataavailable",X,true);ab.eventName=Z;ab.memo=Y;aa.dispatchEvent(ab);return ab}function n(aa,Z,Y,X){var ab=document.createEventObject();ab.eventType=X?"ondataavailable":"onlosecapture";ab.eventName=Z;ab.memo=Y;aa.fireEvent(ab.eventType,ab);return ab}var N=document.createEvent?l:n;L.Handler=Class.create({initialize:function(Z,Y,X,aa){this.element=$(Z);this.eventName=Y;this.selector=X;this.callback=aa;this.handler=this.handleEvent.bind(this)},start:function(){L.observe(this.element,this.eventName,this.handler);return this},stop:function(){L.stopObserving(this.element,this.eventName,this.handler);return this},handleEvent:function(Y){var X=L.findElement(Y,this.selector);if(X){this.callback.call(this.element,Y,X)}}});function F(Z,Y,X,aa){Z=$(Z);if(Object.isFunction(X)&&Object.isUndefined(aa)){aa=X,X=null}return new L.Handler(Z,Y,X,aa).start()}Object.extend(L,L.Methods);Object.extend(L,{fire:w,observe:c,stopObserving:J,on:F});Element.addMethods({fire:w,observe:c,stopObserving:J,on:F});Object.extend(document,{fire:w.methodize(),observe:c.methodize(),stopObserving:J.methodize(),on:F.methodize(),loaded:false});if(D.Event){Object.extend(window.Event,L)}else{D.Event=L}D.Event.cache={};function q(){D.Event.cache=null}if(window.attachEvent){window.attachEvent("onunload",q)}u=null;d=null})(this);(function(c){var g=document.documentElement;var b="onmouseenter" in g&&"onmouseleave" in g;function f(h){return !b&&(h==="mouseenter"||h==="mouseleave")}function d(i,h,j){if(Event._isCustomEvent(h)){return e(i,h,j)}if(f(h)){return a(i,h,j)}return function(l){if(!Event.cache){return}var k=Event.cache[i].element;Event.extend(l,k);j.call(k,l)}}function e(i,h,j){return function(m){var k=Event.cache[i];var l=k&&k.element;if(Object.isUndefined(m.eventName)){return false}if(m.eventName!==h){return false}Event.extend(m,l);j.call(l,m)}}function a(i,h,j){return function(m){var k=Event.cache[i].element;Event.extend(m,k);var l=m.relatedTarget;while(l&&l!==k){try{l=l.parentNode}catch(n){l=k}}if(l===k){return}j.call(k,m)}}c.Event._createResponder=d;g=null})(this);(function(a){var e;function b(){if(document.loaded){return}if(e){window.clearTimeout(e)}document.loaded=true;document.fire("dom:loaded")}function d(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",d);b()}}function c(){try{document.documentElement.doScroll("left")}catch(f){e=c.defer();return}b()}if(document.readyState==="complete"){b();return}if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false)}else{document.attachEvent("onreadystatechange",d);if(window==top){e=c.defer()}}Event.observe(window,"load",b)})(this);Element.addMethods();Hash.toQueryString=Object.toQueryString;var Toggle={display:Element.toggle};Element.addMethods({childOf:Element.Methods.descendantOf});var Insertion={Before:function(a,b){return Element.insert(a,{before:b})},Top:function(a,b){return Element.insert(a,{top:b})},Bottom:function(a,b){return Element.insert(a,{bottom:b})},After:function(a,b){return Element.insert(a,{after:b})}};var $continue=new Error('"throw $continue" is deprecated, use "return" instead');var Position={includeScrollOffsets:false,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},within:function(b,a,c){if(this.includeScrollOffsets){return this.withinIncludingScrolloffsets(b,a,c)}this.xcomp=a;this.ycomp=c;this.offset=Element.cumulativeOffset(b);return(c>=this.offset[1]&&c<this.offset[1]+b.offsetHeight&&a>=this.offset[0]&&a<this.offset[0]+b.offsetWidth)},withinIncludingScrolloffsets:function(b,a,d){var c=Element.cumulativeScrollOffset(b);this.xcomp=a+c[0]-this.deltaX;this.ycomp=d+c[1]-this.deltaY;this.offset=Element.cumulativeOffset(b);return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+b.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+b.offsetWidth)},overlap:function(b,a){if(!b){return 0}if(b=="vertical"){return((this.offset[1]+a.offsetHeight)-this.ycomp)/a.offsetHeight}if(b=="horizontal"){return((this.offset[0]+a.offsetWidth)-this.xcomp)/a.offsetWidth}},cumulativeOffset:Element.Methods.cumulativeOffset,positionedOffset:Element.Methods.positionedOffset,absolutize:function(a){Position.prepare();return Element.absolutize(a)},relativize:function(a){Position.prepare();return Element.relativize(a)},realOffset:Element.Methods.cumulativeScrollOffset,offsetParent:Element.Methods.getOffsetParent,page:Element.Methods.viewportOffset,clone:function(b,c,a){a=a||{};return Element.clonePosition(c,b,a)}};if(!document.getElementsByClassName){document.getElementsByClassName=function(b){function a(c){return c.blank()?null:"[contains(concat(' ', @class, ' '), ' "+c+" ')]"}b.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(c,e){e=e.toString().strip();var d=/\s/.test(e)?$w(e).map(a).join(""):a(e);return d?document._getElementsByXPath(".//*"+d,c):[]}:function(e,f){f=f.toString().strip();var g=[],h=(/\s/.test(f)?$w(f):null);if(!h&&!f){return g}var c=$(e).getElementsByTagName("*");f=" "+f+" ";for(var d=0,k,j;k=c[d];d++){if(k.className&&(j=" "+k.className+" ")&&(j.include(f)||(h&&h.all(function(i){return !i.toString().blank()&&j.include(" "+i+" ")})))){g.push(Element.extend(k))}}return g};return function(d,c){return $(c||document.body).getElementsByClassName(d)}}(Element.Methods)}Element.ClassNames=Class.create();Element.ClassNames.prototype={initialize:function(a){this.element=$(a)},_each:function(b,a){this.element.className.split(/\s+/).select(function(c){return c.length>0})._each(b,a)},set:function(a){this.element.className=a},add:function(a){if(this.include(a)){return}this.set($A(this).concat(a).join(" "))},remove:function(a){if(!this.include(a)){return}this.set($A(this).without(a).join(" "))},toString:function(){return $A(this).join(" ")}};Object.extend(Element.ClassNames.prototype,Enumerable);(function(){window.Selector=Class.create({initialize:function(a){this.expression=a.strip()},findElements:function(a){return Prototype.Selector.select(this.expression,a)},match:function(a){return Prototype.Selector.match(a,this.expression)},toString:function(){return this.expression},inspect:function(){return"#<Selector: "+this.expression+">"}});Object.extend(Selector,{matchElements:function(f,g){var a=Prototype.Selector.match,d=[];for(var c=0,e=f.length;c<e;c++){var b=f[c];if(a(b,g)){d.push(Element.extend(b))}}return d},findElement:function(f,g,b){b=b||0;var a=0,d;for(var c=0,e=f.length;c<e;c++){d=f[c];if(Prototype.Selector.match(d,g)&&b===a++){return Element.extend(d)}}},findChildElements:function(b,c){var a=c.toArray().join(", ");return Prototype.Selector.select(a,b||document)}})})();
/*
* Really easy field validation with Prototype
* http://tetlaw.id.au/view/javascript/really-easy-field-validation
* Andrew Tetlaw
* Version 1.5.4.1 (2007-01-05)
*
* Copyright (c) 2007 Andrew Tetlaw
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
* BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
var Validator = Class.create();

Validator.prototype = {
    initialize : function(className, error, test, options) {
        if(typeof test == 'function'){
            this.options = $H(options);
            this._test = test;
        } else {
            this.options = $H(test);
            this._test = function(){return true};
        }
        this.error = error || 'Validation failed.';
        this.className = className;
    },
    test : function(v, elm) {
        return (this._test(v,elm) && this.options.all(function(p){
            return Validator.methods[p.key] ? Validator.methods[p.key](v,elm,p.value) : true;
        }));
    }
}
Validator.methods = {
    pattern : function(v,elm,opt) {return Validation.get('IsEmpty').test(v) || opt.test(v)},
    minLength : function(v,elm,opt) {return v.length >= opt},
    maxLength : function(v,elm,opt) {return v.length <= opt},
    min : function(v,elm,opt) {return v >= parseFloat(opt)},
    max : function(v,elm,opt) {return v <= parseFloat(opt)},
    notOneOf : function(v,elm,opt) {return $A(opt).all(function(value) {
        return v != value;
    })},
    oneOf : function(v,elm,opt) {return $A(opt).any(function(value) {
        return v == value;
    })},
    is : function(v,elm,opt) {return v == opt},
    isNot : function(v,elm,opt) {return v != opt},
    equalToField : function(v,elm,opt) {return v == $F(opt)},
    notEqualToField : function(v,elm,opt) {return v != $F(opt)},
    include : function(v,elm,opt) {return $A(opt).all(function(value) {
        return Validation.get(value).test(v,elm);
    })}
}

var Validation = Class.create();
Validation.defaultOptions = {
    onSubmit : true,
    stopOnFirst : false,
    immediate : false,
    focusOnError : true,
    useTitles : false,
    addClassNameToContainer: false,
    containerClassName: '.input-box',
    onFormValidate : function(result, form) {},
    onElementValidate : function(result, elm) {}
};

Validation.prototype = {
    initialize : function(form, options){
        this.form = $(form);
        if (!this.form) {
            return;
        }
        this.options = Object.extend({
            onSubmit : Validation.defaultOptions.onSubmit,
            stopOnFirst : Validation.defaultOptions.stopOnFirst,
            immediate : Validation.defaultOptions.immediate,
            focusOnError : Validation.defaultOptions.focusOnError,
            useTitles : Validation.defaultOptions.useTitles,
            onFormValidate : Validation.defaultOptions.onFormValidate,
            onElementValidate : Validation.defaultOptions.onElementValidate
        }, options || {});
        if(this.options.onSubmit) Event.observe(this.form,'submit',this.onSubmit.bind(this),false);
        if(this.options.immediate) {
            Form.getElements(this.form).each(function(input) { // Thanks Mike!
                if (input.tagName.toLowerCase() == 'select') {
                    Event.observe(input, 'blur', this.onChange.bindAsEventListener(this));
                }
                if (input.type.toLowerCase() == 'radio' || input.type.toLowerCase() == 'checkbox') {
                    Event.observe(input, 'click', this.onChange.bindAsEventListener(this));
                } else {
                    Event.observe(input, 'change', this.onChange.bindAsEventListener(this));
                }
            }, this);
        }
    },
    onChange : function (ev) {
        Validation.isOnChange = true;
        Validation.validate(Event.element(ev),{
                useTitle : this.options.useTitles,
                onElementValidate : this.options.onElementValidate
        });
        Validation.isOnChange = false;
    },
    onSubmit :  function(ev){
        if(!this.validate()) Event.stop(ev);
    },
    validate : function() {
        var result = false;
        var useTitles = this.options.useTitles;
        var callback = this.options.onElementValidate;
        try {
            if(this.options.stopOnFirst) {
                result = Form.getElements(this.form).all(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this);
            } else {
                result = Form.getElements(this.form).collect(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this).all();
            }
        } catch (e) {
        }
        if(!result && this.options.focusOnError) {
            try{
                Form.getElements(this.form).findAll(function(elm){return $(elm).hasClassName('validation-failed')}).first().focus()
            }
            catch(e){
            }
        }
        this.options.onFormValidate(result, this.form);
        return result;
    },
    reset : function() {
        Form.getElements(this.form).each(Validation.reset);
    },
    isElementInForm : function(elm, form) {
        var domForm = elm.up('form');
        if (domForm == form) {
            return true;
        }
        return false;
    }
}

Object.extend(Validation, {
    validate : function(elm, options){
        options = Object.extend({
            useTitle : false,
            onElementValidate : function(result, elm) {}
        }, options || {});
        elm = $(elm);

        var cn = $w(elm.className);
        return result = cn.all(function(value) {
            var test = Validation.test(value,elm,options.useTitle);
            options.onElementValidate(test, elm);
            return test;
        });
    },
    insertAdvice : function(elm, advice){
        var container = $(elm).up('.field-row');
        if(container){
            Element.insert(container, {after: advice});
        } else if (elm.up('td.value')) {
            elm.up('td.value').insert({bottom: advice});
        } else if (elm.advaiceContainer && $(elm.advaiceContainer)) {
            $(elm.advaiceContainer).update(advice);
        }
        else {
            switch (elm.type.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    var p = elm.parentNode;
                    if(p) {
                        Element.insert(p, {'bottom': advice});
                    } else {
                        Element.insert(elm, {'after': advice});
                    }
                    break;
                default:
                    Element.insert(elm, {'after': advice});
            }
        }
    },
    showAdvice : function(elm, advice, adviceName){
        if(!elm.advices){
            elm.advices = new Hash();
        }
        else{
            elm.advices.each(function(pair){
                if (!advice || pair.value.id != advice.id) {
                    // hide non-current advice after delay
                    this.hideAdvice(elm, pair.value);
                }
            }.bind(this));
        }
        elm.advices.set(adviceName, advice);
        if(typeof Effect == 'undefined') {
            advice.style.display = 'block';
        } else {
            if(!advice._adviceAbsolutize) {
                new Effect.Appear(advice, {duration : 1 });
            } else {
                Position.absolutize(advice);
                advice.show();
                advice.setStyle({
                    'top':advice._adviceTop,
                    'left': advice._adviceLeft,
                    'width': advice._adviceWidth,
                    'z-index': 1000
                });
                advice.addClassName('advice-absolute');
            }
        }
    },
    hideAdvice : function(elm, advice){
        if (advice != null) {
            new Effect.Fade(advice, {duration : 1, afterFinishInternal : function() {advice.hide();}});
        }
    },
    updateCallback : function(elm, status) {
        if (typeof elm.callbackFunction != 'undefined') {
            eval(elm.callbackFunction+'(\''+elm.id+'\',\''+status+'\')');
        }
    },
    ajaxError : function(elm, errorMsg) {
        var name = 'validate-ajax';
        var advice = Validation.getAdvice(name, elm);
        if (advice == null) {
            advice = this.createAdvice(name, elm, false, errorMsg);
        }
        this.showAdvice(elm, advice, 'validate-ajax');
        this.updateCallback(elm, 'failed');

        elm.addClassName('validation-failed');
        elm.addClassName('validate-ajax');
        if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
            var container = elm.up(Validation.defaultOptions.containerClassName);
            if (container && this.allowContainerClassName(elm)) {
                container.removeClassName('validation-passed');
                container.addClassName('validation-error');
            }
        }
    },
    allowContainerClassName: function (elm) {
        if (elm.type == 'radio' || elm.type == 'checkbox') {
            return elm.hasClassName('change-container-classname');
        }

        return true;
    },
    test : function(name, elm, useTitle) {
        var v = Validation.get(name);
        var prop = '__advice'+name.camelize();
        try {
        if(Validation.isVisible(elm) && !v.test($F(elm), elm)) {
            //if(!elm[prop]) {
                var advice = Validation.getAdvice(name, elm);
                if (advice == null) {
                    advice = this.createAdvice(name, elm, useTitle);
                }
                this.showAdvice(elm, advice, name);
                this.updateCallback(elm, 'failed');
            //}
            elm[prop] = 1;
            if (!elm.advaiceContainer) {
                elm.removeClassName('validation-passed');
                elm.addClassName('validation-failed');
            }

           if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && this.allowContainerClassName(elm)) {
                    container.removeClassName('validation-passed');
                    container.addClassName('validation-error');
                }
            }
            return false;
        } else {
            var advice = Validation.getAdvice(name, elm);
            this.hideAdvice(elm, advice);
            this.updateCallback(elm, 'passed');
            elm[prop] = '';
            elm.removeClassName('validation-failed');
            elm.addClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && !container.down('.validation-failed') && this.allowContainerClassName(elm)) {
                    if (!Validation.get('IsEmpty').test(elm.value) || !this.isVisible(elm)) {
                        container.addClassName('validation-passed');
                    } else {
                        container.removeClassName('validation-passed');
                    }
                    container.removeClassName('validation-error');
                }
            }
            return true;
        }
        } catch(e) {
            throw(e)
        }
    },
    isVisible : function(elm) {
        while(elm.tagName != 'BODY') {
            if(!$(elm).visible()) return false;
            elm = elm.parentNode;
        }
        return true;
    },
    getAdvice : function(name, elm) {
        return $('advice-' + name + '-' + Validation.getElmID(elm)) || $('advice-' + Validation.getElmID(elm));
    },
    createAdvice : function(name, elm, useTitle, customError) {
        var v = Validation.get(name);
        var errorMsg = useTitle ? ((elm && elm.title) ? elm.title : v.error) : v.error;
        if (customError) {
            errorMsg = customError;
        }
        try {
            if (Translator){
                errorMsg = Translator.translate(errorMsg);
            }
        }
        catch(e){}

        advice = '<div class="validation-advice" id="advice-' + name + '-' + Validation.getElmID(elm) +'" style="display:none">' + errorMsg + '</div>'


        Validation.insertAdvice(elm, advice);
        advice = Validation.getAdvice(name, elm);
        if($(elm).hasClassName('absolute-advice')) {
            var dimensions = $(elm).getDimensions();
            var originalPosition = Position.cumulativeOffset(elm);

            advice._adviceTop = (originalPosition[1] + dimensions.height) + 'px';
            advice._adviceLeft = (originalPosition[0])  + 'px';
            advice._adviceWidth = (dimensions.width)  + 'px';
            advice._adviceAbsolutize = true;
        }
        return advice;
    },
    getElmID : function(elm) {
        return elm.id ? elm.id : elm.name;
    },
    reset : function(elm) {
        elm = $(elm);
        var cn = $w(elm.className);
        cn.each(function(value) {
            var prop = '__advice'+value.camelize();
            if(elm[prop]) {
                var advice = Validation.getAdvice(value, elm);
                if (advice) {
                    advice.hide();
                }
                elm[prop] = '';
            }
            elm.removeClassName('validation-failed');
            elm.removeClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container) {
                    container.removeClassName('validation-passed');
                    container.removeClassName('validation-error');
                }
            }
        });
    },
    add : function(className, error, test, options) {
        var nv = {};
        nv[className] = new Validator(className, error, test, options);
        Object.extend(Validation.methods, nv);
    },
    addAllThese : function(validators) {
        var nv = {};
        $A(validators).each(function(value) {
                nv[value[0]] = new Validator(value[0], value[1], value[2], (value.length > 3 ? value[3] : {}));
            });
        Object.extend(Validation.methods, nv);
    },
    get : function(name) {
        return  Validation.methods[name] ? Validation.methods[name] : Validation.methods['_LikeNoIDIEverSaw_'];
    },
    methods : {
        '_LikeNoIDIEverSaw_' : new Validator('_LikeNoIDIEverSaw_','',{})
    }
});

Validation.add('IsEmpty', '', function(v) {
    return  (v == '' || (v == null) || (v.length == 0) || /^\s+$/.test(v));
});

Validation.addAllThese([
    ['validate-no-html-tags', 'HTML tags are not allowed', function(v) {
				return !/<(\/)?\w+/.test(v);
			}],
	['validate-select', 'Please select an option.', function(v) {
                return ((v != "none") && (v != null) && (v.length != 0));
            }],
    ['required-entry', 'This is a required field.', function(v) {
                return !Validation.get('IsEmpty').test(v);
            }],
    ['validate-number', 'Please enter a valid number in this field.', function(v) {
                return Validation.get('IsEmpty').test(v)
                    || (!isNaN(parseNumber(v)) && /^\s*-?\d*(\.\d*)?\s*$/.test(v));
            }],
    ['validate-number-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^number-range-(-?[\d.,]+)?-(-?[\d.,]+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-digits', 'Please use numbers only in this field. Please avoid spaces or other characters such as dots or commas.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  !/[^\d]/.test(v);
            }],
    ['validate-digits-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^digits-range-(-?\d+)?-(-?\d+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-alpha', 'Please use letters only (a-z or A-Z) in this field.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-zA-Z]+$/.test(v)
            }],
    ['validate-code', 'Please use only letters (a-z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-z]+[a-z0-9_]+$/.test(v)
            }],
    ['validate-alphanum', 'Please use only letters (a-z or A-Z) or numbers (0-9) only in this field. No spaces or other characters are allowed.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9]+$/.test(v)
            }],
    ['validate-alphanum-with-spaces', 'Please use only letters (a-z or A-Z), numbers (0-9) or spaces only in this field.', function(v) {
                    return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9 ]+$/.test(v)
            }],
    ['validate-street', 'Please use only letters (a-z or A-Z) or numbers (0-9) or spaces and # only in this field.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  /^[ \w]{3,}([A-Za-z]\.)?([ \w]*\#\d+)?(\r\n| )[ \w]{3,}/.test(v)
            }],
    ['validate-phoneStrict', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-phoneLax', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^((\d[-. ]?)?((\(\d{3}\))|\d{3}))?[-. ]?\d{3}[-. ]?\d{4}$/.test(v);
            }],
    ['validate-fax', 'Please enter a valid fax number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-date', 'Please enter a valid date.', function(v) {
                var test = new Date(v);
                return Validation.get('IsEmpty').test(v) || !isNaN(test);
            }],
    ['validate-date-range', 'The From Date value should be less than or equal to the To Date value.', function(v, elm) {
            var m = /\bdate-range-(\w+)-(\w+)\b/.exec(elm.className);
            if (!m || m[2] == 'to' || Validation.get('IsEmpty').test(v)) {
                return true;
            }

            var currentYear = new Date().getFullYear() + '';
            var normalizedTime = function(v) {
                v = v.split(/[.\/]/);
                if (v[2] && v[2].length < 4) {
                    v[2] = currentYear.substr(0, v[2].length) + v[2];
                }
                return new Date(v.join('/')).getTime();
            };

            var dependentElements = Element.select(elm.form, '.validate-date-range.date-range-' + m[1] + '-to');
            return !dependentElements.length || Validation.get('IsEmpty').test(dependentElements[0].value)
                || normalizedTime(v) <= normalizedTime(dependentElements[0].value);
        }],
    ['validate-email', 'Please enter a valid email address. For example johndoe@domain.com.', function (v) {
                //return Validation.get('IsEmpty').test(v) || /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(v)
                //return Validation.get('IsEmpty').test(v) || /^[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9][\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9\.]{1,30}[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9]@([a-z0-9_-]{1,30}\.){1,5}[a-z]{2,4}$/i.test(v)
                return Validation.get('IsEmpty').test(v) || /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i.test(v)
            }],
    ['validate-emailSender', 'Please use only visible characters and spaces.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[\S ]+$/.test(v)
                    }],
    ['validate-password', 'Please enter 6 or more characters without leading or trailing spaces.', function(v) {
                var pass=v.strip(); /*strip leading and trailing spaces*/
                return (!(v.length>0 && v.length < 6) && v.length == pass.length);
            }],
    ['validate-admin-password', 'Please enter 7 or more characters. Password should contain both numeric and alphabetic characters.', function(v) {
                var pass=v.strip();
                if (0 == pass.length) {
                    return true;
                }
                if (!(/[a-z]/i.test(v)) || !(/[0-9]/.test(v))) {
                    return false;
                }
                return !(pass.length < 7);
            }],
    ['validate-cpassword', 'Please make sure your passwords match.', function(v) {
                var conf = $('confirmation') ? $('confirmation') : $$('.validate-cpassword')[0];
                var pass = false;
                if ($('password')) {
                    pass = $('password');
                }
                var passwordElements = $$('.validate-password');
                for (var i = 0; i < passwordElements.size(); i++) {
                    var passwordElement = passwordElements[i];
                    if (passwordElement.up('form').id == conf.up('form').id) {
                        pass = passwordElement;
                    }
                }
                if ($$('.validate-admin-password').size()) {
                    pass = $$('.validate-admin-password')[0];
                }
                return (pass.value == conf.value);
            }],
    ['validate-both-passwords', 'Please make sure your passwords match.', function(v, input) {
                var dependentInput = $(input.form[input.name == 'password' ? 'confirmation' : 'password']),
                    isEqualValues  = input.value == dependentInput.value;

                if (isEqualValues && dependentInput.hasClassName('validation-failed')) {
                    Validation.test(this.className, dependentInput);
                }

                return dependentInput.value == '' || isEqualValues;
            }],
    // ['validate-url', 'Please enter a valid URL. Protocol is required (http://, https:// or ftp://)', function (v) {
                // v = (v || '').replace(/^\s+/, '').replace(/\s+$/, '');
                // return Validation.get('IsEmpty').test(v) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(v)
            // }],
    ['validate-clean-url', 'Please enter a valid URL. For example http://www.example.com or www.example.com', function (v) {
                return Validation.get('IsEmpty').test(v) || /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v) || /^(www)((\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v)
            }],
    ['validate-identifier', 'Please enter a valid URL Key. For example "example-page", "example-page.html" or "anotherlevel/example-page".', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[a-z0-9][a-z0-9_\/-]+(\.[a-z0-9_-]+)?$/.test(v)
            }],
    ['validate-xml-identifier', 'Please enter a valid XML-identifier. For example something_1, block5, id-4.', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[A-Z][A-Z0-9_\/-]*$/i.test(v)
            }],
    ['validate-ssn', 'Please enter a valid social security number. For example 123-45-6789.', function(v) {
            return Validation.get('IsEmpty').test(v) || /^\d{3}-?\d{2}-?\d{4}$/.test(v);
            }],
    ['validate-zip', 'Please enter a valid zip code. For example 90602 or 90602-1234.', function(v) {
            return Validation.get('IsEmpty').test(v) || /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v);
            }],
    ['validate-zip-international', 'Please enter a valid zip code.', function(v) {
            //return Validation.get('IsEmpty').test(v) || /(^[A-z0-9]{2,10}([\s]{0,1}|[\-]{0,1})[A-z0-9]{2,10}$)/.test(v);
            return true;
            }],
    ['validate-date-au', 'Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006.', function(v) {
                if(Validation.get('IsEmpty').test(v)) return true;
                var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
                if(!regex.test(v)) return false;
                var d = new Date(v.replace(regex, '$2/$1/$3'));
                return ( parseInt(RegExp.$2, 10) == (1+d.getMonth()) ) &&
                            (parseInt(RegExp.$1, 10) == d.getDate()) &&
                            (parseInt(RegExp.$3, 10) == d.getFullYear() );
            }],
    ['validate-currency-dollar', 'Please enter a valid $ amount. For example $100.00.', function(v) {
                // [$]1[##][,###]+[.##]
                // [$]1###+[.##]
                // [$]0.##
                // [$].##
                return Validation.get('IsEmpty').test(v) ||  /^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(v)
            }],
    ['validate-one-required', 'Please select one of the above options.', function (v,elm) {
                var p = elm.parentNode;
                var options = p.getElementsByTagName('INPUT');
                return $A(options).any(function(elm) {
                    return $F(elm);
                });
            }],
    ['validate-one-required-by-name', 'Please select one of the options.', function (v,elm) {
                var inputs = $$('input[name="' + elm.name.replace(/([\\"])/g, '\\$1') + '"]');

                var error = 1;
                for(var i=0;i<inputs.length;i++) {
                    if((inputs[i].type == 'checkbox' || inputs[i].type == 'radio') && inputs[i].checked == true) {
                        error = 0;
                    }

                    if(Validation.isOnChange && (inputs[i].type == 'checkbox' || inputs[i].type == 'radio')) {
                        Validation.reset(inputs[i]);
                    }
                }

                if( error == 0 ) {
                    return true;
                } else {
                    return false;
                }
            }],
    ['validate-not-negative-number', 'Please enter a number 0 or greater in this field.', function(v) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }
                v = parseNumber(v);
                return !isNaN(v) && v >= 0;
            }],
    ['validate-zero-or-greater', 'Please enter a number 0 or greater in this field.', function(v) {
            return Validation.get('validate-not-negative-number').test(v);
        }],
    ['validate-greater-than-zero', 'Please enter a number greater than 0 in this field.', function(v) {
            if (Validation.get('IsEmpty').test(v)) {
                return true;
            }
            v = parseNumber(v);
            return !isNaN(v) && v > 0;
        }],

    ['validate-special-price', 'The Special Price is active only when lower than the Actual Price.', function(v) {
        var priceInput = $('price');
        var priceType = $('price_type');
        var priceValue = parseFloat(v);

        // Passed on non-related validators conditions (to not change order of validation)
        if(
            !priceInput
            || Validation.get('IsEmpty').test(v)
            || !Validation.get('validate-number').test(v)
        ) {
            return true;
        }
        if(priceType) {
            return (priceType && priceValue <= 99.99);
        }
        return priceValue < parseFloat($F(priceInput));
    }],
    ['validate-state', 'Please select State/Province.', function(v) {
                return (v!=0 || v == '');
            }],
    ['validate-new-password', 'Please enter 6 or more characters without leading or trailing spaces.', function(v) {
                if (!Validation.get('validate-password').test(v)) return false;
                if (Validation.get('IsEmpty').test(v) && v != '') return false;
                return true;
            }],
    ['validate-cc-number', 'Please enter a valid credit card number.', function(v, elm) {
                // remove non-numerics
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (ccTypeContainer && typeof Validation.creditCartTypes.get(ccTypeContainer.value) != 'undefined'
                        && Validation.creditCartTypes.get(ccTypeContainer.value)[2] == false) {
                    if (!Validation.get('IsEmpty').test(v) && Validation.get('validate-digits').test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return validateCreditCard(v);
            }],
    ['validate-cc-type', 'Credit card number does not match credit card type.', function(v, elm) {
                // remove credit card number delimiters such as "-" and space
                elm.value = removeDelimiters(elm.value);
                v         = removeDelimiters(v);

                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                // Other card type or switch or solo card
                if (Validation.creditCartTypes.get(ccType)[0]==false) {
                    return true;
                }

                var validationFailure = false;
                Validation.creditCartTypes.each(function (pair) {
                    if (pair.key == ccType) {
                        if (pair.value[0] && !v.match(pair.value[0])) {
                            validationFailure = true;
                        }
                        throw $break;
                    }
                });

                if (validationFailure) {
                    return false;
                }

                if (ccTypeContainer.hasClassName('validation-failed') && Validation.isOnChange) {
                    Validation.validate(ccTypeContainer);
                }

                return true;
            }],
     ['validate-cc-type-select', 'Card type does not match credit card number.', function(v, elm) {
                var ccNumberContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_type')) + '_cc_number');
                if (Validation.isOnChange && Validation.get('IsEmpty').test(ccNumberContainer.value)) {
                    return true;
                }
                if (Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer)) {
                    Validation.validate(ccNumberContainer);
                }
                return Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer);
            }],
     ['validate-cc-exp', 'Incorrect credit card expiration date.', function(v, elm) {
                var ccExpMonth   = v;
                var ccExpYear    = $(elm.id.substr(0,elm.id.indexOf('_expiration')) + '_expiration_yr').value;
                var currentTime  = new Date();
                var currentMonth = currentTime.getMonth() + 1;
                var currentYear  = currentTime.getFullYear();
                if (ccExpMonth < currentMonth && ccExpYear == currentYear) {
                    return false;
                }
                return true;
            }],
     ['validate-cc-cvn', 'Please enter a valid credit card verification number.', function(v, elm) {
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_cid')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                var re = Validation.creditCartTypes.get(ccType)[1];

                if (v.match(re)) {
                    return true;
                }

                return false;
            }],
     ['validate-ajax', '', function(v, elm) { return true; }],
     ['validate-data', 'Please use only letters (a-z or A-Z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                if(v != '' && v) {
                    return /^[A-Za-z]+[A-Za-z0-9_]+$/.test(v);
                }
                return true;
            }],
     ['validate-css-length', 'Please input a valid CSS-length. For example 100px or 77pt or 20em or .5ex or 50%.', function (v) {
                if (v != '' && v) {
                    return /^[0-9\.]+(px|pt|em|ex|%)?$/.test(v) && (!(/\..*\./.test(v))) && !(/\.$/.test(v));
                }
                return true;
            }],
     ['validate-length', 'Text length does not satisfy specified text range.', function (v, elm) {
                var reMax = new RegExp(/^maximum-length-[0-9]+$/);
                var reMin = new RegExp(/^minimum-length-[0-9]+$/);
                var result = true;
                $w(elm.className).each(function(name, index) {
                    if (name.match(reMax) && result) {
                       var length = name.split('-')[2];
                       result = (v.length <= length);
                    }
                    if (name.match(reMin) && result && !Validation.get('IsEmpty').test(v)) {
                        var length = name.split('-')[2];
                        result = (v.length >= length);
                    }
                });
                return result;
            }],
     ['validate-percents', 'Please enter a number lower than 100.', {max:100}],
     ['required-file', 'Please select a file', function(v, elm) {
         var result = !Validation.get('IsEmpty').test(v);
         if (result === false) {
             ovId = elm.id + '_value';
             if ($(ovId)) {
                 result = !Validation.get('IsEmpty').test($(ovId).value);
             }
         }
         return result;
     }],
     ['validate-cc-ukss', 'Please enter issue number or start date for switch/solo card type.', function(v,elm) {
         var endposition;

         if (elm.id.match(/(.)+_cc_issue$/)) {
             endposition = elm.id.indexOf('_cc_issue');
         } else if (elm.id.match(/(.)+_start_month$/)) {
             endposition = elm.id.indexOf('_start_month');
         } else {
             endposition = elm.id.indexOf('_start_year');
         }

         var prefix = elm.id.substr(0,endposition);

         var ccTypeContainer = $(prefix + '_cc_type');

         if (!ccTypeContainer) {
               return true;
         }
         var ccType = ccTypeContainer.value;

         if(['SS','SM','SO'].indexOf(ccType) == -1){
             return true;
         }

         $(prefix + '_cc_issue').advaiceContainer
           = $(prefix + '_start_month').advaiceContainer
           = $(prefix + '_start_year').advaiceContainer
           = $(prefix + '_cc_type_ss_div').down('ul li.adv-container');

         var ccIssue   =  $(prefix + '_cc_issue').value;
         var ccSMonth  =  $(prefix + '_start_month').value;
         var ccSYear   =  $(prefix + '_start_year').value;

         var ccStartDatePresent = (ccSMonth && ccSYear) ? true : false;

         if (!ccStartDatePresent && !ccIssue){
             return false;
         }
         return true;
     }]
]);

function removeDelimiters (v) {
    v = v.replace(/\s/g, '');
    v = v.replace(/\-/g, '');
    return v;
}

function parseNumber(v)
{
    if (typeof v != 'string') {
        return parseFloat(v);
    }

    var isDot  = v.indexOf('.');
    var isComa = v.indexOf(',');

    if (isDot != -1 && isComa != -1) {
        if (isComa > isDot) {
            v = v.replace('.', '').replace(',', '.');
        }
        else {
            v = v.replace(',', '');
        }
    }
    else if (isComa != -1) {
        v = v.replace(',', '.');
    }

    return parseFloat(v);
}

/**
 * Hash with credit card types which can be simply extended in payment modules
 * 0 - regexp for card number
 * 1 - regexp for cvn
 * 2 - check or not credit card number trough Luhn algorithm by
 *     function validateCreditCard which you can find above in this file
 */
Validation.creditCartTypes = $H({
//    'SS': [new RegExp('^((6759[0-9]{12})|(5018|5020|5038|6304|6759|6761|6763[0-9]{12,19})|(49[013][1356][0-9]{12})|(6333[0-9]{12})|(6334[0-4]\d{11})|(633110[0-9]{10})|(564182[0-9]{10}))([0-9]{2,3})?$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'SO': [new RegExp('^(6334[5-9]([0-9]{11}|[0-9]{13,14}))|(6767([0-9]{12}|[0-9]{14,15}))$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'VI': [new RegExp('^4[0-9]{12}([0-9]{3})?$'), new RegExp('^[0-9]{3}$'), true],
    'MC': [new RegExp('^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$'), new RegExp('^[0-9]{3}$'), true],
    'AE': [new RegExp('^3[47][0-9]{13}$'), new RegExp('^[0-9]{4}$'), true],
    'DI': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3}$'), true],
    'JCB': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3,4}$'), true],
    'DICL': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3}$'), true],
    'SM': [new RegExp('(^(5[0678])[0-9]{11,18}$)|(^(6[^05])[0-9]{11,18}$)|(^(601)[^1][0-9]{9,16}$)|(^(6011)[0-9]{9,11}$)|(^(6011)[0-9]{13,16}$)|(^(65)[0-9]{11,13}$)|(^(65)[0-9]{15,18}$)|(^(49030)[2-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49033)[5-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49110)[1-2]([0-9]{10}$|[0-9]{12,13}$))|(^(49117)[4-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49118)[0-2]([0-9]{10}$|[0-9]{12,13}$))|(^(4936)([0-9]{12}$|[0-9]{14,15}$))'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'OT': [false, new RegExp('^([0-9]{3}|[0-9]{4})?$'), false]
});

// script.aculo.us effects.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = function() {
  var color = '#';
  if (this.slice(0,4) == 'rgb(') {
    var cols = this.slice(4,this.length-1).split(',');
    var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);
  } else {
    if (this.slice(0,1) == '#') {
      if (this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();
      if (this.length==7) color = this.toLowerCase();
    }
  }
  return (color.length==7 ? color : (arguments[0] || this));
};

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(element) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      (node.hasChildNodes() ? Element.collectTextNodes(node) : ''));
  }).flatten().join('');
};

Element.collectTextNodesIgnoreClass = function(element, className) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      ((node.hasChildNodes() && !Element.hasClassName(node,className)) ?
        Element.collectTextNodesIgnoreClass(node, className) : ''));
  }).flatten().join('');
};

Element.setContentZoom = function(element, percent) {
  element = $(element);
  element.setStyle({fontSize: (percent/100) + 'em'});
  if (Prototype.Browser.WebKit) window.scrollBy(0,0);
  return element;
};

Element.getInlineOpacity = function(element){
  return $(element).style.opacity || '';
};

Element.forceRerendering = function(element) {
  try {
    element = $(element);
    var n = document.createTextNode(' ');
    element.appendChild(n);
    element.removeChild(n);
  } catch(e) { }
};

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sinoidal: function(pos) {
      return (-Math.cos(pos*Math.PI)/2) + .5;
    },
    reverse: function(pos) {
      return 1-pos;
    },
    flicker: function(pos) {
      var pos = ((-Math.cos(pos*Math.PI)/4) + .75) + Math.random()/4;
      return pos > 1 ? 1 : pos;
    },
    wobble: function(pos) {
      return (-Math.cos(pos*Math.PI*(9*pos))/2) + .5;
    },
    pulse: function(pos, pulses) {
      return (-Math.cos((pos*((pulses||5)-.5)*2)*Math.PI)/2) + .5;
    },
    spring: function(pos) {
      return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
    },
    none: function(pos) {
      return 0;
    },
    full: function(pos) {
      return 1;
    }
  },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagifyText: function(element) {
    var tagifyStyle = 'position:relative';
    if (Prototype.Browser.IE) tagifyStyle += ';zoom:1';

    element = $(element);
    $A(element.childNodes).each( function(child) {
      if (child.nodeType==3) {
        child.nodeValue.toArray().each( function(character) {
          element.insertBefore(
            new Element('span', {style: tagifyStyle}).update(
              character == ' ' ? String.fromCharCode(160) : character),
              child);
        });
        Element.remove(child);
      }
    });
  },
  multiple: function(element, effect) {
    var elements;
    if (((typeof element == 'object') ||
        Object.isFunction(element)) &&
       (element.length))
      elements = element;
    else
      elements = $(element).childNodes;

    var options = Object.extend({
      speed: 0.1,
      delay: 0.0
    }, arguments[2] || { });
    var masterDelay = options.delay;

    $A(elements).each( function(element, index) {
      new effect(element, Object.extend(options, { delay: index * options.speed + masterDelay }));
    });
  },
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: function(element, effect) {
    element = $(element);
    effect = (effect || 'appear').toLowerCase();
    var options = Object.extend({
      queue: { position:'end', scope:(element.id || 'global'), limit: 1 }
    }, arguments[2] || { });
    Effect[element.visible() ?
      Effect.PAIRS[effect][1] : Effect.PAIRS[effect][0]](element, options);
  }
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initialize: function() {
    this.effects  = [];
    this.interval = null;
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: function(effect) {
    var timestamp = new Date().getTime();

    var position = Object.isString(effect.options.queue) ?
      effect.options.queue : effect.options.queue.position;

    switch(position) {
      case 'front':
        // move unstarted effects after this effect
        this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
            e.startOn  += effect.finishOn;
            e.finishOn += effect.finishOn;
          });
        break;
      case 'with-last':
        timestamp = this.effects.pluck('startOn').max() || timestamp;
        break;
      case 'end':
        // start effect after last queued effect has finished
        timestamp = this.effects.pluck('finishOn').max() || timestamp;
        break;
    }

    effect.startOn  += timestamp;
    effect.finishOn += timestamp;

    if (!effect.options.queue.limit || (this.effects.length < effect.options.queue.limit))
      this.effects.push(effect);

    if (!this.interval)
      this.interval = setInterval(this.loop.bind(this), 15);
  },
  remove: function(effect) {
    this.effects = this.effects.reject(function(e) { return e==effect });
    if (this.effects.length == 0) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  loop: function() {
    var timePos = new Date().getTime();
    for(var i=0, len=this.effects.length;i<len;i++)
      this.effects[i] && this.effects[i].loop(timePos);
  }
});

Effect.Queues = {
  instances: $H(),
  get: function(queueName) {
    if (!Object.isString(queueName)) return queueName;

    return this.instances.get(queueName) ||
      this.instances.set(queueName, new Effect.ScopedQueue());
  }
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  start: function(options) {
    function codeForEvent(options,eventName){
      return (
        (options[eventName+'Internal'] ? 'this.options.'+eventName+'Internal(this);' : '') +
        (options[eventName] ? 'this.options.'+eventName+'(this);' : '')
      );
    }
    if (options && options.transition === false) options.transition = Effect.Transitions.linear;
    this.options      = Object.extend(Object.extend({ },Effect.DefaultOptions), options || { });
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn+(this.options.duration*1000);
    this.fromToDelta  = this.options.to-this.options.from;
    this.totalTime    = this.finishOn-this.startOn;
    this.totalFrames  = this.options.fps*this.options.duration;

    this.render = (function() {
      function dispatch(effect, eventName) {
        if (effect.options[eventName + 'Internal'])
          effect.options[eventName + 'Internal'](effect);
        if (effect.options[eventName])
          effect.options[eventName](effect);
      }

      return function(pos) {
        if (this.state === "idle") {
          this.state = "running";
          dispatch(this, 'beforeSetup');
          if (this.setup) this.setup();
          dispatch(this, 'afterSetup');
        }
        if (this.state === "running") {
          pos = (this.options.transition(pos) * this.fromToDelta) + this.options.from;
          this.position = pos;
          dispatch(this, 'beforeUpdate');
          if (this.update) this.update(pos);
          dispatch(this, 'afterUpdate');
        }
      };
    })();

    this.event('beforeStart');
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).add(this);
  },
  loop: function(timePos) {
    if (timePos >= this.startOn) {
      if (timePos >= this.finishOn) {
        this.render(1.0);
        this.cancel();
        this.event('beforeFinish');
        if (this.finish) this.finish();
        this.event('afterFinish');
        return;
      }
      var pos   = (timePos - this.startOn) / this.totalTime,
          frame = (pos * this.totalFrames).round();
      if (frame > this.currentFrame) {
        this.render(pos);
        this.currentFrame = frame;
      }
    }
  },
  cancel: function() {
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).remove(this);
    this.state = 'finished';
  },
  event: function(eventName) {
    if (this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
    if (this.options[eventName]) this.options[eventName](this);
  },
  inspect: function() {
    var data = $H();
    for(property in this)
      if (!Object.isFunction(this[property])) data.set(property, this[property]);
    return '#<Effect:' + data.inspect() + ',options:' + $H(this.options).inspect() + '>';
  }
});

Effect.Parallel = Class.create(Effect.Base, {
  initialize: function(effects) {
    this.effects = effects || [];
    this.start(arguments[1]);
  },
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(position) {
    this.effects.each( function(effect) {
      effect.render(1.0);
      effect.cancel();
      effect.event('beforeFinish');
      if (effect.finish) effect.finish(position);
      effect.event('afterFinish');
    });
  }
});

Effect.Tween = Class.create(Effect.Base, {
  initialize: function(object, from, to) {
    object = Object.isString(object) ? $(object) : object;
    var args = $A(arguments), method = args.last(),
      options = args.length == 5 ? args[3] : null;
    this.method = Object.isFunction(method) ? method.bind(object) :
      Object.isFunction(object[method]) ? object[method].bind(object) :
      function(value) { object[method] = value };
    this.start(Object.extend({ from: from, to: to }, options || { }));
  },
  update: function(position) {
    this.method(position);
  }
});

Effect.Event = Class.create(Effect.Base, {
  initialize: function() {
    this.start(Object.extend({ duration: 0 }, arguments[0] || { }));
  },
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    // make this work on IE on elements without 'layout'
    if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
      this.element.setStyle({zoom: 1});
    var options = Object.extend({
      from: this.element.getOpacity() || 0.0,
      to:   1.0
    }, arguments[1] || { });
    this.start(options);
  },
  update: function(position) {
    this.element.setOpacity(position);
  }
});

Effect.Move = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      x:    0,
      y:    0,
      mode: 'relative'
    }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    this.element.makePositioned();
    this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
    this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
    if (this.options.mode == 'absolute') {
      this.options.x = this.options.x - this.originalLeft;
      this.options.y = this.options.y - this.originalTop;
    }
  },
  update: function(position) {
    this.element.setStyle({
      left: (this.options.x  * position + this.originalLeft).round() + 'px',
      top:  (this.options.y  * position + this.originalTop).round()  + 'px'
    });
  }
});

// for backwards compatibility
Effect.MoveBy = function(element, toTop, toLeft) {
  return new Effect.Move(element,
    Object.extend({ x: toLeft, y: toTop }, arguments[3] || { }));
};

Effect.Scale = Class.create(Effect.Base, {
  initialize: function(element, percent) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      scaleX: true,
      scaleY: true,
      scaleContent: true,
      scaleFromCenter: false,
      scaleMode: 'box',        // 'box' or 'contents' or { } with provided values
      scaleFrom: 100.0,
      scaleTo:   percent
    }, arguments[2] || { });
    this.start(options);
  },
  setup: function() {
    this.restoreAfterFinish = this.options.restoreAfterFinish || false;
    this.elementPositioning = this.element.getStyle('position');

    this.originalStyle = { };
    ['top','left','width','height','fontSize'].each( function(k) {
      this.originalStyle[k] = this.element.style[k];
    }.bind(this));

    this.originalTop  = this.element.offsetTop;
    this.originalLeft = this.element.offsetLeft;

    var fontSize = this.element.getStyle('font-size') || '100%';
    ['em','px','%','pt'].each( function(fontSizeType) {
      if (fontSize.indexOf(fontSizeType)>0) {
        this.fontSize     = parseFloat(fontSize);
        this.fontSizeType = fontSizeType;
      }
    }.bind(this));

    this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;

    this.dims = null;
    if (this.options.scaleMode=='box')
      this.dims = [this.element.offsetHeight, this.element.offsetWidth];
    if (/^content/.test(this.options.scaleMode))
      this.dims = [this.element.scrollHeight, this.element.scrollWidth];
    if (!this.dims)
      this.dims = [this.options.scaleMode.originalHeight,
                   this.options.scaleMode.originalWidth];
  },
  update: function(position) {
    var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
    if (this.options.scaleContent && this.fontSize)
      this.element.setStyle({fontSize: this.fontSize * currentScale + this.fontSizeType });
    this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
  },
  finish: function(position) {
    if (this.restoreAfterFinish) this.element.setStyle(this.originalStyle);
  },
  setDimensions: function(height, width) {
    var d = { };
    if (this.options.scaleX) d.width = width.round() + 'px';
    if (this.options.scaleY) d.height = height.round() + 'px';
    if (this.options.scaleFromCenter) {
      var topd  = (height - this.dims[0])/2;
      var leftd = (width  - this.dims[1])/2;
      if (this.elementPositioning == 'absolute') {
        if (this.options.scaleY) d.top = this.originalTop-topd + 'px';
        if (this.options.scaleX) d.left = this.originalLeft-leftd + 'px';
      } else {
        if (this.options.scaleY) d.top = -topd + 'px';
        if (this.options.scaleX) d.left = -leftd + 'px';
      }
    }
    this.element.setStyle(d);
  }
});

Effect.Highlight = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({ startcolor: '#ffff99' }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    // Prevent executing on elements not in the layout flow
    if (this.element.getStyle('display')=='none') { this.cancel(); return; }
    // Disable background image during the effect
    this.oldStyle = { };
    if (!this.options.keepBackgroundImage) {
      this.oldStyle.backgroundImage = this.element.getStyle('background-image');
      this.element.setStyle({backgroundImage: 'none'});
    }
    if (!this.options.endcolor)
      this.options.endcolor = this.element.getStyle('background-color').parseColor('#ffffff');
    if (!this.options.restorecolor)
      this.options.restorecolor = this.element.getStyle('background-color');
    // init color calculations
    this._base  = $R(0,2).map(function(i){ return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16) }.bind(this));
    this._delta = $R(0,2).map(function(i){ return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i] }.bind(this));
  },
  update: function(position) {
    this.element.setStyle({backgroundColor: $R(0,2).inject('#',function(m,v,i){
      return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart()); }.bind(this)) });
  },
  finish: function() {
    this.element.setStyle(Object.extend(this.oldStyle, {
      backgroundColor: this.options.restorecolor
    }));
  }
});

Effect.ScrollTo = function(element) {
  var options = arguments[1] || { },
  scrollOffsets = document.viewport.getScrollOffsets(),
  elementOffsets = $(element).cumulativeOffset();

  if (options.offset) elementOffsets[1] += options.offset;

  return new Effect.Tween(null,
    scrollOffsets.top,
    elementOffsets[1],
    options,
    function(p){ scrollTo(scrollOffsets.left, p.round()); }
  );
};

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  var options = Object.extend({
    from: element.getOpacity() || 1.0,
    to:   0.0,
    afterFinishInternal: function(effect) {
      if (effect.options.to!=0) return;
      effect.element.hide().setStyle({opacity: oldOpacity});
    }
  }, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Appear = function(element) {
  element = $(element);
  var options = Object.extend({
  from: (element.getStyle('display') == 'none' ? 0.0 : element.getOpacity() || 0.0),
  to:   1.0,
  // force Safari to render floated elements properly
  afterFinishInternal: function(effect) {
    effect.element.forceRerendering();
  },
  beforeSetup: function(effect) {
    effect.element.setOpacity(effect.options.from).show();
  }}, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Puff = function(element) {
  element = $(element);
  var oldStyle = {
    opacity: element.getInlineOpacity(),
    position: element.getStyle('position'),
    top:  element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height
  };
  return new Effect.Parallel(
   [ new Effect.Scale(element, 200,
      { sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }),
     new Effect.Opacity(element, { sync: true, to: 0.0 } ) ],
     Object.extend({ duration: 1.0,
      beforeSetupInternal: function(effect) {
        Position.absolutize(effect.effects[0].element);
      },
      afterFinishInternal: function(effect) {
         effect.effects[0].element.hide().setStyle(oldStyle); }
     }, arguments[1] || { })
   );
};

Effect.BlindUp = function(element) {
  element = $(element);
  element.makeClipping();
  return new Effect.Scale(element, 0,
    Object.extend({ scaleContent: false,
      scaleX: false,
      restoreAfterFinish: true,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping();
      }
    }, arguments[1] || { })
  );
};

Effect.BlindDown = function(element) {
  element = $(element);
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: 0,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping();
    }
  }, arguments[1] || { }));
};

Effect.SwitchOff = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  return new Effect.Appear(element, Object.extend({
    duration: 0.4,
    from: 0,
    transition: Effect.Transitions.flicker,
    afterFinishInternal: function(effect) {
      new Effect.Scale(effect.element, 1, {
        duration: 0.3, scaleFromCenter: true,
        scaleX: false, scaleContent: false, restoreAfterFinish: true,
        beforeSetup: function(effect) {
          effect.element.makePositioned().makeClipping();
        },
        afterFinishInternal: function(effect) {
          effect.element.hide().undoClipping().undoPositioned().setStyle({opacity: oldOpacity});
        }
      });
    }
  }, arguments[1] || { }));
};

Effect.DropOut = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left'),
    opacity: element.getInlineOpacity() };
  return new Effect.Parallel(
    [ new Effect.Move(element, {x: 0, y: 100, sync: true }),
      new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
    Object.extend(
      { duration: 0.5,
        beforeSetup: function(effect) {
          effect.effects[0].element.makePositioned();
        },
        afterFinishInternal: function(effect) {
          effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);
        }
      }, arguments[1] || { }));
};

Effect.Shake = function(element) {
  element = $(element);
  var options = Object.extend({
    distance: 20,
    duration: 0.5
  }, arguments[1] || {});
  var distance = parseFloat(options.distance);
  var split = parseFloat(options.duration) / 10.0;
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left') };
    return new Effect.Move(element,
      { x:  distance, y: 0, duration: split, afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance, y: 0, duration: split, afterFinishInternal: function(effect) {
        effect.element.undoPositioned().setStyle(oldStyle);
  }}); }}); }}); }}); }}); }});
};

Effect.SlideDown = function(element) {
  element = $(element).cleanWhitespace();
  // SlideDown need to have the content of the element wrapped in a container element with fixed height!
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: window.opera ? 0 : 1,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom}); }
    }, arguments[1] || { })
  );
};

Effect.SlideUp = function(element) {
  element = $(element).cleanWhitespace();
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, window.opera ? 0 : 1,
   Object.extend({ scaleContent: false,
    scaleX: false,
    scaleMode: 'box',
    scaleFrom: 100,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom});
    }
   }, arguments[1] || { })
  );
};

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Squish = function(element) {
  return new Effect.Scale(element, window.opera ? 1 : 0, {
    restoreAfterFinish: true,
    beforeSetup: function(effect) {
      effect.element.makeClipping();
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping();
    }
  });
};

Effect.Grow = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.full
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var initialMoveX, initialMoveY;
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      initialMoveX = initialMoveY = moveX = moveY = 0;
      break;
    case 'top-right':
      initialMoveX = dims.width;
      initialMoveY = moveY = 0;
      moveX = -dims.width;
      break;
    case 'bottom-left':
      initialMoveX = moveX = 0;
      initialMoveY = dims.height;
      moveY = -dims.height;
      break;
    case 'bottom-right':
      initialMoveX = dims.width;
      initialMoveY = dims.height;
      moveX = -dims.width;
      moveY = -dims.height;
      break;
    case 'center':
      initialMoveX = dims.width / 2;
      initialMoveY = dims.height / 2;
      moveX = -dims.width / 2;
      moveY = -dims.height / 2;
      break;
  }

  return new Effect.Move(element, {
    x: initialMoveX,
    y: initialMoveY,
    duration: 0.01,
    beforeSetup: function(effect) {
      effect.element.hide().makeClipping().makePositioned();
    },
    afterFinishInternal: function(effect) {
      new Effect.Parallel(
        [ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: options.opacityTransition }),
          new Effect.Move(effect.element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition }),
          new Effect.Scale(effect.element, 100, {
            scaleMode: { originalHeight: dims.height, originalWidth: dims.width },
            sync: true, scaleFrom: window.opera ? 1 : 0, transition: options.scaleTransition, restoreAfterFinish: true})
        ], Object.extend({
             beforeSetup: function(effect) {
               effect.effects[0].element.setStyle({height: '0px'}).show();
             },
             afterFinishInternal: function(effect) {
               effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);
             }
           }, options)
      );
    }
  });
};

Effect.Shrink = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.none
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      moveX = moveY = 0;
      break;
    case 'top-right':
      moveX = dims.width;
      moveY = 0;
      break;
    case 'bottom-left':
      moveX = 0;
      moveY = dims.height;
      break;
    case 'bottom-right':
      moveX = dims.width;
      moveY = dims.height;
      break;
    case 'center':
      moveX = dims.width / 2;
      moveY = dims.height / 2;
      break;
  }

  return new Effect.Parallel(
    [ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: options.opacityTransition }),
      new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: options.scaleTransition, restoreAfterFinish: true}),
      new Effect.Move(element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition })
    ], Object.extend({
         beforeStartInternal: function(effect) {
           effect.effects[0].element.makePositioned().makeClipping();
         },
         afterFinishInternal: function(effect) {
           effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle); }
       }, options)
  );
};

Effect.Pulsate = function(element) {
  element = $(element);
  var options    = arguments[1] || { },
    oldOpacity = element.getInlineOpacity(),
    transition = options.transition || Effect.Transitions.linear,
    reverser   = function(pos){
      return 1 - transition((-Math.cos((pos*(options.pulses||5)*2)*Math.PI)/2) + .5);
    };

  return new Effect.Opacity(element,
    Object.extend(Object.extend({  duration: 2.0, from: 0,
      afterFinishInternal: function(effect) { effect.element.setStyle({opacity: oldOpacity}); }
    }, options), {transition: reverser}));
};

Effect.Fold = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height };
  element.makeClipping();
  return new Effect.Scale(element, 5, Object.extend({
    scaleContent: false,
    scaleX: false,
    afterFinishInternal: function(effect) {
    new Effect.Scale(element, 1, {
      scaleContent: false,
      scaleY: false,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping().setStyle(oldStyle);
      } });
  }}, arguments[1] || { }));
};

Effect.Morph = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      style: { }
    }, arguments[1] || { });

    if (!Object.isString(options.style)) this.style = $H(options.style);
    else {
      if (options.style.include(':'))
        this.style = options.style.parseStyle();
      else {
        this.element.addClassName(options.style);
        this.style = $H(this.element.getStyles());
        this.element.removeClassName(options.style);
        var css = this.element.getStyles();
        this.style = this.style.reject(function(style) {
          return style.value == css[style.key];
        });
        options.afterFinishInternal = function(effect) {
          effect.element.addClassName(effect.options.style);
          effect.transforms.each(function(transform) {
            effect.element.style[transform.style] = '';
          });
        };
      }
    }
    this.start(options);
  },

  setup: function(){
    function parseColor(color){
      if (!color || ['rgba(0, 0, 0, 0)','transparent'].include(color)) color = '#ffffff';
      color = color.parseColor();
      return $R(0,2).map(function(i){
        return parseInt( color.slice(i*2+1,i*2+3), 16 );
      });
    }
    this.transforms = this.style.map(function(pair){
      var property = pair[0], value = pair[1], unit = null;

      if (value.parseColor('#zzzzzz') != '#zzzzzz') {
        value = value.parseColor();
        unit  = 'color';
      } else if (property == 'opacity') {
        value = parseFloat(value);
        if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
          this.element.setStyle({zoom: 1});
      } else if (Element.CSS_LENGTH.test(value)) {
          var components = value.match(/^([\+\-]?[0-9\.]+)(.*)$/);
          value = parseFloat(components[1]);
          unit = (components.length == 3) ? components[2] : null;
      }

      var originalValue = this.element.getStyle(property);
      return {
        style: property.camelize(),
        originalValue: unit=='color' ? parseColor(originalValue) : parseFloat(originalValue || 0),
        targetValue: unit=='color' ? parseColor(value) : value,
        unit: unit
      };
    }.bind(this)).reject(function(transform){
      return (
        (transform.originalValue == transform.targetValue) ||
        (
          transform.unit != 'color' &&
          (isNaN(transform.originalValue) || isNaN(transform.targetValue))
        )
      );
    });
  },
  update: function(position) {
    var style = { }, transform, i = this.transforms.length;
    while(i--)
      style[(transform = this.transforms[i]).style] =
        transform.unit=='color' ? '#'+
          (Math.round(transform.originalValue[0]+
            (transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart() +
          (Math.round(transform.originalValue[1]+
            (transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart() +
          (Math.round(transform.originalValue[2]+
            (transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart() :
        (transform.originalValue +
          (transform.targetValue - transform.originalValue) * position).toFixed(3) +
            (transform.unit === null ? '' : transform.unit);
    this.element.setStyle(style, true);
  }
});

Effect.Transform = Class.create({
  initialize: function(tracks){
    this.tracks  = [];
    this.options = arguments[1] || { };
    this.addTracks(tracks);
  },
  addTracks: function(tracks){
    tracks.each(function(track){
      track = $H(track);
      var data = track.values().first();
      this.tracks.push($H({
        ids:     track.keys().first(),
        effect:  Effect.Morph,
        options: { style: data }
      }));
    }.bind(this));
    return this;
  },
  play: function(){
    return new Effect.Parallel(
      this.tracks.map(function(track){
        var ids = track.get('ids'), effect = track.get('effect'), options = track.get('options');
        var elements = [$(ids) || $$(ids)].flatten();
        return elements.map(function(e){ return new effect(e, Object.extend({ sync:true }, options)) });
      }).flatten(),
      this.options
    );
  }
});

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = function(){
  var style, styleRules = $H();
  if (Prototype.Browser.WebKit)
    style = new Element('div',{style:this}).style;
  else {
    String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
    style = String.__parseStyleElement.childNodes[0].style;
  }

  Element.CSS_PROPERTIES.each(function(property){
    if (style[property]) styleRules.set(property, style[property]);
  });

  if (Prototype.Browser.IE && this.include('opacity'))
    styleRules.set('opacity', this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);

  return styleRules;
};

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getStyles = function(element) {
    var css = document.defaultView.getComputedStyle($(element), null);
    return Element.CSS_PROPERTIES.inject({ }, function(styles, property) {
      styles[property] = css[property];
      return styles;
    });
  };
} else {
  Element.getStyles = function(element) {
    element = $(element);
    var css = element.currentStyle, styles;
    styles = Element.CSS_PROPERTIES.inject({ }, function(results, property) {
      results[property] = css[property];
      return results;
    });
    if (!styles.opacity) styles.opacity = element.getOpacity();
    return styles;
  };
}

Effect.Methods = {
  morph: function(element, style) {
    element = $(element);
    new Effect.Morph(element, Object.extend({ style: style }, arguments[2] || { }));
    return element;
  },
  visualEffect: function(element, effect, options) {
    element = $(element);
    var s = effect.dasherize().camelize(), klass = s.charAt(0).toUpperCase() + s.substring(1);
    new Effect[klass](element, options);
    return element;
  },
  highlight: function(element, options) {
    element = $(element);
    new Effect.Highlight(element, options);
    return element;
  }
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').each(
  function(effect) {
    Effect.Methods[effect] = function(element, options){
      element = $(element);
      Effect[effect.charAt(0).toUpperCase() + effect.substring(1)](element, options);
      return element;
    };
  }
);

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(
  function(f) { Effect.Methods[f] = Element[f]; }
);

Element.addMethods(Effect.Methods);
// script.aculo.us controls.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2008 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005-2008 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// Autocompleter.Base handles all the autocompletion functionality
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least,
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most
// useful when one of the tokens is \n (a newline), as it
// allows smart autocompletion after linebreaks.

if(typeof Effect == 'undefined')
  throw("controls.js requires including script.aculo.us' effects.js library");

var Autocompleter = { };
Autocompleter.Base = Class.create({
  baseInitialize: function(element, update, options) {
    element          = $(element);
    this.element     = element;
    this.update      = $(update);
    this.hasFocus    = false;
    this.changed     = false;
    this.active      = false;
    this.index       = 0;
    this.entryCount  = 0;
    this.oldElementValue = this.element.value;

    if(this.setOptions)
      this.setOptions(options);
    else
      this.options = options || { };

    this.options.paramName    = this.options.paramName || this.element.name;
    this.options.tokens       = this.options.tokens || [];
    this.options.frequency    = this.options.frequency || 0.4;
    this.options.minChars     = this.options.minChars || 1;
    this.options.onShow       = this.options.onShow ||
      function(element, update){
        if(!update.style.position || update.style.position=='absolute') {
          update.style.position = 'absolute';
          Position.clone(element, update, {
            setHeight: false,
            offsetTop: element.offsetHeight
          });
        }
        Effect.Appear(update,{duration:0.15});
      };
    this.options.onHide = this.options.onHide ||
      function(element, update){ new Effect.Fade(update,{duration:0.15}) };

    if(typeof(this.options.tokens) == 'string')
      this.options.tokens = new Array(this.options.tokens);
    // Force carriage returns as token delimiters anyway
    if (!this.options.tokens.include('\n'))
      this.options.tokens.push('\n');

    this.observer = null;

    this.element.setAttribute('autocomplete','off');

    Element.hide(this.update);

    Event.observe(this.element, 'blur', this.onBlur.bindAsEventListener(this));
    Event.observe(this.element, 'keydown', this.onKeyPress.bindAsEventListener(this));
  },

  show: function() {
    if(Element.getStyle(this.update, 'display')=='none') this.options.onShow(this.element, this.update);
    if(!this.iefix &&
      (Prototype.Browser.IE) &&
      (Element.getStyle(this.update, 'position')=='absolute')) {
      new Insertion.After(this.update,
       '<iframe id="' + this.update.id + '_iefix" '+
       'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
       'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
      this.iefix = $(this.update.id+'_iefix');
    }
    if(this.iefix) setTimeout(this.fixIEOverlapping.bind(this), 50);
  },

  fixIEOverlapping: function() {
    Position.clone(this.update, this.iefix, {setTop:(!this.update.style.height)});
    this.iefix.style.zIndex = 1;
    this.update.style.zIndex = 2;
    Element.show(this.iefix);
  },

  hide: function() {
    this.stopIndicator();
    if(Element.getStyle(this.update, 'display')!='none') this.options.onHide(this.element, this.update);
    if(this.iefix) Element.hide(this.iefix);
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndicator: function() {
    if(this.options.indicator) Element.hide(this.options.indicator);
  },

  onKeyPress: function(event) {
    if(this.active)
      switch(event.keyCode) {
       case Event.KEY_TAB:
       case Event.KEY_RETURN:
         this.selectEntry();
         Event.stop(event);
       case Event.KEY_ESC:
         this.hide();
         this.active = false;
         Event.stop(event);
         return;
       case Event.KEY_LEFT:
       case Event.KEY_RIGHT:
         return;
       case Event.KEY_UP:
         this.markPrevious();
         this.render();
         Event.stop(event);
         return;
       case Event.KEY_DOWN:
         this.markNext();
         this.render();
         Event.stop(event);
         return;
      }
     else
       if(event.keyCode==Event.KEY_TAB || event.keyCode==Event.KEY_RETURN ||
         (Prototype.Browser.WebKit > 0 && event.keyCode == 0)) return;

    this.changed = true;
    this.hasFocus = true;

    if(this.observer) clearTimeout(this.observer);
      this.observer =
        setTimeout(this.onObserverEvent.bind(this), this.options.frequency*1000);
  },

  activate: function() {
    this.changed = false;
    this.hasFocus = true;
    this.getUpdatedChoices();
  },

  onHover: function(event) {
    var element = Event.findElement(event, 'LI');
    if(this.index != element.autocompleteIndex)
    {
        this.index = element.autocompleteIndex;
        this.render();
    }
    Event.stop(event);
  },

  onClick: function(event) {
    var element = Event.findElement(event, 'LI');
    this.index = element.autocompleteIndex;
    this.selectEntry();
    this.hide();
  },

  onBlur: function(event) {
    // needed to make click events working
    setTimeout(this.hide.bind(this), 250);
    this.hasFocus = false;
    this.active = false;
  },

  render: function() {
    if(this.entryCount > 0) {
      for (var i = 0; i < this.entryCount; i++)
        this.index==i ?
          Element.addClassName(this.getEntry(i),"selected") :
          Element.removeClassName(this.getEntry(i),"selected");
      if(this.hasFocus) {
        this.show();
        this.active = true;
      }
    } else {
      this.active = false;
      this.hide();
    }
  },

  markPrevious: function() {
    if(this.index > 0) this.index--;
      else this.index = this.entryCount-1;
    //this.getEntry(this.index).scrollIntoView(true); useless
  },

  markNext: function() {
    if(this.index < this.entryCount-1) this.index++;
      else this.index = 0;
    this.getEntry(this.index).scrollIntoView(false);
  },

  getEntry: function(index) {
    return this.update.firstChild.childNodes[index];
  },

  getCurrentEntry: function() {
    return this.getEntry(this.index);
  },

  selectEntry: function() {
    this.active = false;
    this.updateElement(this.getCurrentEntry());
  },

  updateElement: function(selectedElement) {
    if (this.options.updateElement) {
      this.options.updateElement(selectedElement);
      return;
    }
    var value = '';
    if (this.options.select) {
      var nodes = $(selectedElement).select('.' + this.options.select) || [];
      if(nodes.length>0) value = Element.collectTextNodes(nodes[0], this.options.select);
    } else
      value = Element.collectTextNodesIgnoreClass(selectedElement, 'informal');

    var bounds = this.getTokenBounds();
    if (bounds[0] != -1) {
      var newValue = this.element.value.substr(0, bounds[0]);
      var whitespace = this.element.value.substr(bounds[0]).match(/^\s+/);
      if (whitespace)
        newValue += whitespace[0];
      this.element.value = newValue + value + this.element.value.substr(bounds[1]);
    } else {
      this.element.value = value;
    }
    this.oldElementValue = this.element.value;
    this.element.focus();

    if (this.options.afterUpdateElement)
      this.options.afterUpdateElement(this.element, selectedElement);
  },

  updateChoices: function(choices) {
    if(!this.changed && this.hasFocus) {
      this.update.innerHTML = choices;
      Element.cleanWhitespace(this.update);
      Element.cleanWhitespace(this.update.down());

      if(this.update.firstChild && this.update.down().childNodes) {
        this.entryCount =
          this.update.down().childNodes.length;
        for (var i = 0; i < this.entryCount; i++) {
          var entry = this.getEntry(i);
          entry.autocompleteIndex = i;
          this.addObservers(entry);
        }
      } else {
        this.entryCount = 0;
      }

      this.stopIndicator();
      this.index = 0;

      if(this.entryCount==1 && this.options.autoSelect) {
        this.selectEntry();
        this.hide();
      } else {
        this.render();
      }
    }
  },

  addObservers: function(element) {
    Event.observe(element, "mouseover", this.onHover.bindAsEventListener(this));
    Event.observe(element, "click", this.onClick.bindAsEventListener(this));
  },

  onObserverEvent: function() {
    this.changed = false;
    this.tokenBounds = null;
    if(this.getToken().length>=this.options.minChars) {
      this.getUpdatedChoices();
    } else {
      this.active = false;
      this.hide();
    }
    this.oldElementValue = this.element.value;
  },

  getToken: function() {
    var bounds = this.getTokenBounds();
    return this.element.value.substring(bounds[0], bounds[1]).strip();
  },

  getTokenBounds: function() {
    if (null != this.tokenBounds) return this.tokenBounds;
    var value = this.element.value;
    if (value.strip().empty()) return [-1, 0];
    var diff = arguments.callee.getFirstDifferencePos(value, this.oldElementValue);
    var offset = (diff == this.oldElementValue.length ? 1 : 0);
    var prevTokenPos = -1, nextTokenPos = value.length;
    var tp;
    for (var index = 0, l = this.options.tokens.length; index < l; ++index) {
      tp = value.lastIndexOf(this.options.tokens[index], diff + offset - 1);
      if (tp > prevTokenPos) prevTokenPos = tp;
      tp = value.indexOf(this.options.tokens[index], diff + offset);
      if (-1 != tp && tp < nextTokenPos) nextTokenPos = tp;
    }
    return (this.tokenBounds = [prevTokenPos + 1, nextTokenPos]);
  }
});

Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(newS, oldS) {
  var boundary = Math.min(newS.length, oldS.length);
  for (var index = 0; index < boundary; ++index)
    if (newS[index] != oldS[index])
      return index;
  return boundary;
};

Ajax.Autocompleter = Class.create(Autocompleter.Base, {
  initialize: function(element, update, url, options) {
    this.baseInitialize(element, update, options);
    this.options.asynchronous  = true;
    this.options.onComplete    = this.onComplete.bind(this);
    this.options.defaultParams = this.options.parameters || null;
    this.url                   = url;
  },

  getUpdatedChoices: function() {
    this.startIndicator();

    var entry = encodeURIComponent(this.options.paramName) + '=' +
      encodeURIComponent(this.getToken());

    this.options.parameters = this.options.callback ?
      this.options.callback(this.element, entry) : entry;

    if(this.options.defaultParams)
      this.options.parameters += '&' + this.options.defaultParams;

    new Ajax.Request(this.url, this.options);
  },

  onComplete: function(request) {
    this.updateChoices(request.responseText);
  }
});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector'
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create(Autocompleter.Base, {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&
          ret.length < instance.options.choices ; i++) {

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ?
            elem.toLowerCase().indexOf(entry.toLowerCase()) :
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) {
              ret.push("<li><strong>" + elem.substr(0, entry.length) + "</strong>" +
                elem.substr(entry.length) + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars &&
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem.substr(0, foundPos) + "<strong>" +
                  elem.substr(foundPos, entry.length) + "</strong>" + elem.substr(
                  foundPos + entry.length) + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) :
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length));
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || { });
  }
});

// AJAX in-place editor and collection editor
// Full rewrite by Christophe Porteneuve <tdd@tddsworld.com> (April 2007).

// Use this if you notice weird scrolling problems on some browsers,
// the DOM might be a bit confused when this gets called so do this
// waits 1 ms (with setTimeout) until it does the activation
Field.scrollFreeActivate = function(field) {
  setTimeout(function() {
    Field.activate(field);
  }, 1);
};

Ajax.InPlaceEditor = Class.create({
  initialize: function(element, url, options) {
    this.url = url;
    this.element = element = $(element);
    this.prepareOptions();
    this._controls = { };
    arguments.callee.dealWithDeprecatedOptions(options); // DEPRECATION LAYER!!!
    Object.extend(this.options, options || { });
    if (!this.options.formId && this.element.id) {
      this.options.formId = this.element.id + '-inplaceeditor';
      if ($(this.options.formId))
        this.options.formId = '';
    }
    if (this.options.externalControl)
      this.options.externalControl = $(this.options.externalControl);
    if (!this.options.externalControl)
      this.options.externalControlOnly = false;
    this._originalBackground = this.element.getStyle('background-color') || 'transparent';
    this.element.title = this.options.clickToEditText;
    this._boundCancelHandler = this.handleFormCancellation.bind(this);
    this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
    this._boundFailureHandler = this.handleAJAXFailure.bind(this);
    this._boundSubmitHandler = this.handleFormSubmission.bind(this);
    this._boundWrapperHandler = this.wrapUp.bind(this);
    this.registerListeners();
  },
  checkForEscapeOrReturn: function(e) {
    if (!this._editing || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (Event.KEY_ESC == e.keyCode)
      this.handleFormCancellation(e);
    else if (Event.KEY_RETURN == e.keyCode)
      this.handleFormSubmission(e);
  },
  createControl: function(mode, handler, extraClasses) {
    var control = this.options[mode + 'Control'];
    var text = this.options[mode + 'Text'];
    if ('button' == control) {
      var btn = document.createElement('input');
      btn.type = 'submit';
      btn.value = text;
      btn.className = 'editor_' + mode + '_button';
      if ('cancel' == mode)
        btn.onclick = this._boundCancelHandler;
      this._form.appendChild(btn);
      this._controls[mode] = btn;
    } else if ('link' == control) {
      var link = document.createElement('a');
      link.href = '#';
      link.appendChild(document.createTextNode(text));
      link.onclick = 'cancel' == mode ? this._boundCancelHandler : this._boundSubmitHandler;
      link.className = 'editor_' + mode + '_link';
      if (extraClasses)
        link.className += ' ' + extraClasses;
      this._form.appendChild(link);
      this._controls[mode] = link;
    }
  },
  createEditField: function() {
    var text = (this.options.loadTextURL ? this.options.loadingText : this.getText());
    var fld;
    if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
      fld = document.createElement('input');
      fld.type = 'text';
      var size = this.options.size || this.options.cols || 0;
      if (0 < size) fld.size = size;
    } else {
      fld = document.createElement('textarea');
      fld.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
      fld.cols = this.options.cols || 40;
    }
    fld.name = this.options.paramName;
    fld.value = text; // No HTML breaks conversion anymore
    fld.className = 'editor_field';
    if (this.options.submitOnBlur)
      fld.onblur = this._boundSubmitHandler;
    this._controls.editor = fld;
    if (this.options.loadTextURL)
      this.loadExternalText();
    this._form.appendChild(this._controls.editor);
  },
  createForm: function() {
    var ipe = this;
    function addText(mode, condition) {
      var text = ipe.options['text' + mode + 'Controls'];
      if (!text || condition === false) return;
      ipe._form.appendChild(document.createTextNode(text));
    };
    this._form = $(document.createElement('form'));
    this._form.id = this.options.formId;
    this._form.addClassName(this.options.formClassName);
    this._form.onsubmit = this._boundSubmitHandler;
    this.createEditField();
    if ('textarea' == this._controls.editor.tagName.toLowerCase())
      this._form.appendChild(document.createElement('br'));
    if (this.options.onFormCustomization)
      this.options.onFormCustomization(this, this._form);
    addText('Before', this.options.okControl || this.options.cancelControl);
    this.createControl('ok', this._boundSubmitHandler);
    addText('Between', this.options.okControl && this.options.cancelControl);
    this.createControl('cancel', this._boundCancelHandler, 'editor_cancel');
    addText('After', this.options.okControl || this.options.cancelControl);
  },
  destroy: function() {
    if (this._oldInnerHTML)
      this.element.innerHTML = this._oldInnerHTML;
    this.leaveEditMode();
    this.unregisterListeners();
  },
  enterEditMode: function(e) {
    if (this._saving || this._editing) return;
    this._editing = true;
    this.triggerCallback('onEnterEditMode');
    if (this.options.externalControl)
      this.options.externalControl.hide();
    this.element.hide();
    this.createForm();
    this.element.parentNode.insertBefore(this._form, this.element);
    if (!this.options.loadTextURL)
      this.postProcessEditField();
    if (e) Event.stop(e);
  },
  enterHover: function(e) {
    if (this.options.hoverClassName)
      this.element.addClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onEnterHover');
  },
  getText: function() {
    return this.element.innerHTML.unescapeHTML();
  },
  handleAJAXFailure: function(transport) {
    this.triggerCallback('onFailure', transport);
    if (this._oldInnerHTML) {
      this.element.innerHTML = this._oldInnerHTML;
      this._oldInnerHTML = null;
    }
  },
  handleFormCancellation: function(e) {
    this.wrapUp();
    if (e) Event.stop(e);
  },
  handleFormSubmission: function(e) {
    var form = this._form;
    var value = $F(this._controls.editor);
    this.prepareSubmission();
    var params = this.options.callback(form, value) || '';
    if (Object.isString(params))
      params = params.toQueryParams();
    params.editorId = this.element.id;
    if (this.options.htmlResponse) {
      var options = Object.extend({ evalScripts: true }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Updater({ success: this.element }, this.url, options);
    } else {
      var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Request(this.url, options);
    }
    if (e) Event.stop(e);
  },
  leaveEditMode: function() {
    this.element.removeClassName(this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
    if (this.options.externalControl)
      this.options.externalControl.show();
    this._saving = false;
    this._editing = false;
    this._oldInnerHTML = null;
    this.triggerCallback('onLeaveEditMode');
  },
  leaveHover: function(e) {
    if (this.options.hoverClassName)
      this.element.removeClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onLeaveHover');
  },
  loadExternalText: function() {
    this._form.addClassName(this.options.loadingClassName);
    this._controls.editor.disabled = true;
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._form.removeClassName(this.options.loadingClassName);
        var text = transport.responseText;
        if (this.options.stripLoadedTextTags)
          text = text.stripTags();
        this._controls.editor.value = text;
        this._controls.editor.disabled = false;
        this.postProcessEditField();
      }.bind(this),
      onFailure: this._boundFailureHandler
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },
  postProcessEditField: function() {
    var fpc = this.options.fieldPostCreation;
    if (fpc)
      $(this._controls.editor)['focus' == fpc ? 'focus' : 'activate']();
  },
  prepareOptions: function() {
    this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
    Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
    [this._extraDefaultOptions].flatten().compact().each(function(defs) {
      Object.extend(this.options, defs);
    }.bind(this));
  },
  prepareSubmission: function() {
    this._saving = true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
  },
  registerListeners: function() {
    this._listeners = { };
    var listener;
    $H(Ajax.InPlaceEditor.Listeners).each(function(pair) {
      listener = this[pair.value].bind(this);
      this._listeners[pair.key] = listener;
      if (!this.options.externalControlOnly)
        this.element.observe(pair.key, listener);
      if (this.options.externalControl)
        this.options.externalControl.observe(pair.key, listener);
    }.bind(this));
  },
  removeForm: function() {
    if (!this._form) return;
    this._form.remove();
    this._form = null;
    this._controls = { };
  },
  showSaving: function() {
    this._oldInnerHTML = this.element.innerHTML;
    this.element.innerHTML = this.options.savingText;
    this.element.addClassName(this.options.savingClassName);
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
  },
  triggerCallback: function(cbName, arg) {
    if ('function' == typeof this.options[cbName]) {
      this.options[cbName](this, arg);
    }
  },
  unregisterListeners: function() {
    $H(this._listeners).each(function(pair) {
      if (!this.options.externalControlOnly)
        this.element.stopObserving(pair.key, pair.value);
      if (this.options.externalControl)
        this.options.externalControl.stopObserving(pair.key, pair.value);
    }.bind(this));
  },
  wrapUp: function(transport) {
    this.leaveEditMode();
    // Can't use triggerCallback due to backward compatibility: requires
    // binding + direct element
    this._boundComplete(transport, this.element);
  }
});

Object.extend(Ajax.InPlaceEditor.prototype, {
  dispose: Ajax.InPlaceEditor.prototype.destroy
});

Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
  initialize: function($super, element, url, options) {
    this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
    $super(element, url, options);
  },

  createEditField: function() {
    var list = document.createElement('select');
    list.name = this.options.paramName;
    list.size = 1;
    this._controls.editor = list;
    this._collection = this.options.collection || [];
    if (this.options.loadCollectionURL)
      this.loadCollection();
    else
      this.checkForExternalText();
    this._form.appendChild(this._controls.editor);
  },

  loadCollection: function() {
    this._form.addClassName(this.options.loadingClassName);
    this.showLoadingText(this.options.loadingCollectionText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        var js = transport.responseText.strip();
        if (!/^\[.*\]$/.test(js)) // TODO: improve sanity check
          throw('Server returned an invalid collection representation.');
        this._collection = eval(js);
        this.checkForExternalText();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadCollectionURL, options);
  },

  showLoadingText: function(text) {
    this._controls.editor.disabled = true;
    var tempOption = this._controls.editor.firstChild;
    if (!tempOption) {
      tempOption = document.createElement('option');
      tempOption.value = '';
      this._controls.editor.appendChild(tempOption);
      tempOption.selected = true;
    }
    tempOption.update((text || '').stripScripts().stripTags());
  },

  checkForExternalText: function() {
    this._text = this.getText();
    if (this.options.loadTextURL)
      this.loadExternalText();
    else
      this.buildOptionList();
  },

  loadExternalText: function() {
    this.showLoadingText(this.options.loadingText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._text = transport.responseText.strip();
        this.buildOptionList();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },

  buildOptionList: function() {
    this._form.removeClassName(this.options.loadingClassName);
    this._collection = this._collection.map(function(entry) {
      return 2 === entry.length ? entry : [entry, entry].flatten();
    });
    var marker = ('value' in this.options) ? this.options.value : this._text;
    var textFound = this._collection.any(function(entry) {
      return entry[0] == marker;
    }.bind(this));
    this._controls.editor.update('');
    var option;
    this._collection.each(function(entry, index) {
      option = document.createElement('option');
      option.value = entry[0];
      option.selected = textFound ? entry[0] == marker : 0 == index;
      option.appendChild(document.createTextNode(entry[1]));
      this._controls.editor.appendChild(option);
    }.bind(this));
    this._controls.editor.disabled = false;
    Field.scrollFreeActivate(this._controls.editor);
  }
});

//**** DEPRECATION LAYER FOR InPlace[Collection]Editor! ****
//**** This only  exists for a while,  in order to  let ****
//**** users adapt to  the new API.  Read up on the new ****
//**** API and convert your code to it ASAP!            ****

Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(options) {
  if (!options) return;
  function fallback(name, expr) {
    if (name in options || expr === undefined) return;
    options[name] = expr;
  };
  fallback('cancelControl', (options.cancelLink ? 'link' : (options.cancelButton ? 'button' :
    options.cancelLink == options.cancelButton == false ? false : undefined)));
  fallback('okControl', (options.okLink ? 'link' : (options.okButton ? 'button' :
    options.okLink == options.okButton == false ? false : undefined)));
  fallback('highlightColor', options.highlightcolor);
  fallback('highlightEndColor', options.highlightendcolor);
};

Object.extend(Ajax.InPlaceEditor, {
  DefaultOptions: {
    ajaxOptions: { },
    autoRows: 3,                                // Use when multi-line w/ rows == 1
    cancelControl: 'link',                      // 'link'|'button'|false
    cancelText: 'cancel',
    clickToEditText: 'Click to edit',
    externalControl: null,                      // id|elt
    externalControlOnly: false,
    fieldPostCreation: 'activate',              // 'activate'|'focus'|false
    formClassName: 'inplaceeditor-form',
    formId: null,                               // id|elt
    highlightColor: '#ffff99',
    highlightEndColor: '#ffffff',
    hoverClassName: '',
    htmlResponse: true,
    loadingClassName: 'inplaceeditor-loading',
    loadingText: 'Loading...',
    okControl: 'button',                        // 'link'|'button'|false
    okText: 'ok',
    paramName: 'value',
    rows: 1,                                    // If 1 and multi-line, uses autoRows
    savingClassName: 'inplaceeditor-saving',
    savingText: 'Saving...',
    size: 0,
    stripLoadedTextTags: false,
    submitOnBlur: false,
    textAfterControls: '',
    textBeforeControls: '',
    textBetweenControls: ''
  },
  DefaultCallbacks: {
    callback: function(form) {
      return Form.serialize(form);
    },
    onComplete: function(transport, element) {
      // For backward compatibility, this one is bound to the IPE, and passes
      // the element directly.  It was too often customized, so we don't break it.
      new Effect.Highlight(element, {
        startcolor: this.options.highlightColor, keepBackgroundImage: true });
    },
    onEnterEditMode: null,
    onEnterHover: function(ipe) {
      ipe.element.style.backgroundColor = ipe.options.highlightColor;
      if (ipe._effect)
        ipe._effect.cancel();
    },
    onFailure: function(transport, ipe) {
      alert('Error communication with the server: ' + transport.responseText.stripTags());
    },
    onFormCustomization: null, // Takes the IPE and its generated form, after editor, before controls.
    onLeaveEditMode: null,
    onLeaveHover: function(ipe) {
      ipe._effect = new Effect.Highlight(ipe.element, {
        startcolor: ipe.options.highlightColor, endcolor: ipe.options.highlightEndColor,
        restorecolor: ipe._originalBackground, keepBackgroundImage: true
      });
    }
  },
  Listeners: {
    click: 'enterEditMode',
    keydown: 'checkForEscapeOrReturn',
    mouseover: 'enterHover',
    mouseout: 'leaveHover'
  }
});

Ajax.InPlaceCollectionEditor.DefaultOptions = {
  loadingCollectionText: 'Loading options...'
};

// Delayed observer, like Form.Element.Observer,
// but waits for delay after last key input
// Ideal for live-search fields

Form.Element.DelayedObserver = Class.create({
  initialize: function(element, delay, callback) {
    this.delay     = delay || 0.5;
    this.element   = $(element);
    this.callback  = callback;
    this.timer     = null;
    this.lastValue = $F(this.element);
    Event.observe(this.element,'keyup',this.delayedListener.bindAsEventListener(this));
  },
  delayedListener: function(event) {
    if(this.lastValue == $F(this.element)) return;
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
    this.lastValue = $F(this.element);
  },
  onTimerEvent: function() {
    this.timer = null;
    this.callback(this.element, $F(this.element));
  }
});
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
function popWin(url,win,para) {
    var win = window.open(url,win,para);
    win.focus();
}

function setLocation(url){
    window.location.href = encodeURI(url);
}

function setPLocation(url, setFocus){
    if( setFocus ) {
        window.opener.focus();
    }
    window.opener.location.href = encodeURI(url);
}

/**
 * @deprecated
 */
function setLanguageCode(code, fromCode){
    //TODO: javascript cookies have different domain and path than php cookies
    var href = window.location.href;
    var after = '', dash;
    if (dash = href.match(/\#(.*)$/)) {
        href = href.replace(/\#(.*)$/, '');
        after = dash[0];
    }

    if (href.match(/[?]/)) {
        var re = /([?&]store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '$1'+code);
        } else {
            href += '&store='+code;
        }

        var re = /([?&]from_store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '');
        }
    } else {
        href += '?store='+code;
    }
    if (typeof(fromCode) != 'undefined') {
        href += '&from_store='+fromCode;
    }
    href += after;

    setLocation(href);
}

/**
 * Add classes to specified elements.
 * Supported classes are: 'odd', 'even', 'first', 'last'
 *
 * @param elements - array of elements to be decorated
 * [@param decorateParams] - array of classes to be set. If omitted, all available will be used
 */
function decorateGeneric(elements, decorateParams)
{
    var allSupportedParams = ['odd', 'even', 'first', 'last'];
    var _decorateParams = {};
    var total = elements.length;

    if (total) {
        // determine params called
        if (typeof(decorateParams) == 'undefined') {
            decorateParams = allSupportedParams;
        }
        if (!decorateParams.length) {
            return;
        }
        for (var k in allSupportedParams) {
            _decorateParams[allSupportedParams[k]] = false;
        }
        for (var k in decorateParams) {
            _decorateParams[decorateParams[k]] = true;
        }

        // decorate elements
        // elements[0].addClassName('first'); // will cause bug in IE (#5587)
        if (_decorateParams.first) {
            Element.addClassName(elements[0], 'first');
        }
        if (_decorateParams.last) {
            Element.addClassName(elements[total-1], 'last');
        }
        for (var i = 0; i < total; i++) {
            if ((i + 1) % 2 == 0) {
                if (_decorateParams.even) {
                    Element.addClassName(elements[i], 'even');
                }
            }
            else {
                if (_decorateParams.odd) {
                    Element.addClassName(elements[i], 'odd');
                }
            }
        }
    }
}

/**
 * Decorate table rows and cells, tbody etc
 * @see decorateGeneric()
 */
function decorateTable(table, options) {
    var table = $(table);
    if (table) {
        // set default options
        var _options = {
            'tbody'    : false,
            'tbody tr' : ['odd', 'even', 'first', 'last'],
            'thead tr' : ['first', 'last'],
            'tfoot tr' : ['first', 'last'],
            'tr td'    : ['last']
        };
        // overload options
        if (typeof(options) != 'undefined') {
            for (var k in options) {
                _options[k] = options[k];
            }
        }
        // decorate
        if (_options['tbody']) {
            decorateGeneric(table.select('tbody'), _options['tbody']);
        }
        if (_options['tbody tr']) {
            decorateGeneric(table.select('tbody tr'), _options['tbody tr']);
        }
        if (_options['thead tr']) {
            decorateGeneric(table.select('thead tr'), _options['thead tr']);
        }
        if (_options['tfoot tr']) {
            decorateGeneric(table.select('tfoot tr'), _options['tfoot tr']);
        }
        if (_options['tr td']) {
            var allRows = table.select('tr');
            if (allRows.length) {
                for (var i = 0; i < allRows.length; i++) {
                    decorateGeneric(allRows[i].getElementsByTagName('TD'), _options['tr td']);
                }
            }
        }
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateList(list, nonRecursive) {
    if ($(list)) {
        if (typeof(nonRecursive) == 'undefined') {
            var items = $(list).select('li');
        }
        else {
            var items = $(list).childElements();
        }
        decorateGeneric(items, ['odd', 'even', 'last']);
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateDataList(list) {
    list = $(list);
    if (list) {
        decorateGeneric(list.select('dt'), ['odd', 'even', 'last']);
        decorateGeneric(list.select('dd'), ['odd', 'even', 'last']);
    }
}

/**
 * Parse SID and produces the correct URL
 */
function parseSidUrl(baseUrl, urlExt) {
    var sidPos = baseUrl.indexOf('/?SID=');
    var sid = '';
    urlExt = (urlExt != undefined) ? urlExt : '';

    if(sidPos > -1) {
        sid = '?' + baseUrl.substring(sidPos + 2);
        baseUrl = baseUrl.substring(0, sidPos + 1);
    }

    return baseUrl+urlExt+sid;
}

/**
 * Formats currency using patern
 * format - JSON (pattern, decimal, decimalsDelimeter, groupsDelimeter)
 * showPlus - true (always show '+'or '-'),
 *      false (never show '-' even if number is negative)
 *      null (show '-' if number is negative)
 */

function formatCurrency(price, format, showPlus){
    var precision = isNaN(format.precision = Math.abs(format.precision)) ? 2 : format.precision;
    var requiredPrecision = isNaN(format.requiredPrecision = Math.abs(format.requiredPrecision)) ? 2 : format.requiredPrecision;

    //precision = (precision > requiredPrecision) ? precision : requiredPrecision;
    //for now we don't need this difference so precision is requiredPrecision
    precision = requiredPrecision;

    var integerRequired = isNaN(format.integerRequired = Math.abs(format.integerRequired)) ? 1 : format.integerRequired;

    var decimalSymbol = format.decimalSymbol == undefined ? "," : format.decimalSymbol;
    var groupSymbol = format.groupSymbol == undefined ? "." : format.groupSymbol;
    var groupLength = format.groupLength == undefined ? 3 : format.groupLength;

    var s = '';

    if (showPlus == undefined || showPlus == true) {
        s = price < 0 ? "-" : ( showPlus ? "+" : "");
    } else if (showPlus == false) {
        s = '';
    }

    var i = parseInt(price = Math.abs(+price || 0).toFixed(precision)) + "";
    var pad = (i.length < integerRequired) ? (integerRequired - i.length) : 0;
    while (pad) { i = '0' + i; pad--; }
    j = (j = i.length) > groupLength ? j % groupLength : 0;
    re = new RegExp("(\\d{" + groupLength + "})(?=\\d)", "g");

    /**
     * replace(/-/, 0) is only for fixing Safari bug which appears
     * when Math.abs(0).toFixed() executed on "0" number.
     * Result is "0.-0" :(
     */
    var r = (j ? i.substr(0, j) + groupSymbol : "") + i.substr(j).replace(re, "$1" + groupSymbol) + (precision ? decimalSymbol + Math.abs(price - i).toFixed(precision).replace(/-/, 0).slice(2) : "");
    var pattern = '';
    if (format.pattern.indexOf('{sign}') == -1) {
        pattern = s + format.pattern;
    } else {
        pattern = format.pattern.replace('{sign}', s);
    }

    return pattern.replace('%s', r).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

function expandDetails(el, childClass) {
    if (Element.hasClassName(el,'show-details')) {
        $$(childClass).each(function(item){
            item.hide();
        });
        Element.removeClassName(el,'show-details');
    }
    else {
        $$(childClass).each(function(item){
            item.show();
        });
        Element.addClassName(el,'show-details');
    }
}

// Version 1.0
var isIE = navigator.appVersion.match(/MSIE/) == "MSIE";

if (!window.Varien)
    var Varien = new Object();

Varien.showLoading = function(){
    var loader = $('loading-process');
    loader && loader.show();
};
Varien.hideLoading = function(){
    var loader = $('loading-process');
    loader && loader.hide();
};
Varien.GlobalHandlers = {
    onCreate: function() {
        Varien.showLoading();
    },

    onComplete: function() {
        if(Ajax.activeRequestCount == 0) {
            Varien.hideLoading();
        }
    }
};

Ajax.Responders.register(Varien.GlobalHandlers);

/**
 * Quick Search form client model
 */
Varien.searchForm = Class.create();
Varien.searchForm.prototype = {
    initialize : function(form, field, emptyText){
        this.form   = $(form);
        this.field  = $(field);
        this.emptyText = emptyText;

        Event.observe(this.form,  'submit', this.submit.bind(this));
        Event.observe(this.field, 'focus', this.focus.bind(this));
        Event.observe(this.field, 'blur', this.blur.bind(this));
        this.blur();
    },

    submit : function(event){
        if (this.field.value == this.emptyText || this.field.value == ''){
            Event.stop(event);
            return false;
        }
        return true;
    },

    focus : function(event){
        if(this.field.value==this.emptyText){
            this.field.value='';
        }

    },

    blur : function(event){
        if(this.field.value==''){
            this.field.value=this.emptyText;
        }
    },

    initAutocomplete : function(url, destinationElement){
        new Ajax.Autocompleter(
            this.field,
            destinationElement,
            url,
            {
                paramName: this.field.name,
                method: 'get',
                minChars: 2,
                updateElement: this._selectAutocompleteItem.bind(this),
                onShow : function(element, update) {
                    if(!update.style.position || update.style.position=='absolute') {
                        update.style.position = 'absolute';
                        Position.clone(element, update, {
                            setHeight: false,
                            offsetTop: element.offsetHeight
                        });
                    }
                    Effect.Appear(update,{duration:0});
                }

            }
        );
    },

    _selectAutocompleteItem : function(element){
        if(element.title){
            this.field.value = element.title;
        }
        this.form.submit();
    }
};

Varien.Tabs = Class.create();
Varien.Tabs.prototype = {
  initialize: function(selector) {
    var self=this;
    $$(selector+' a').each(this.initTab.bind(this));
  },

  initTab: function(el) {
      el.href = 'javascript:void(0)';
      if ($(el.parentNode).hasClassName('active')) {
        this.showContent(el);
      }
      el.observe('click', this.showContent.bind(this, el));
  },

  showContent: function(a) {
    var li = $(a.parentNode), ul = $(li.parentNode);
    ul.getElementsBySelector('li', 'ol').each(function(el){
      var contents = $(el.id+'_contents');
      if (el==li) {
        el.addClassName('active');
        contents.show();
      } else {
        el.removeClassName('active');
        contents.hide();
      }
    });
  }
};

Varien.DateElement = Class.create();
Varien.DateElement.prototype = {
    initialize: function(type, content, required, format) {
        if (type == 'id') {
            // id prefix
            this.day    = $(content + 'day');
            this.month  = $(content + 'month');
            this.year   = $(content + 'year');
            this.full   = $(content + 'full');
            this.advice = $(content + 'date-advice');
        } else if (type == 'container') {
            // content must be container with data
            this.day    = content.day;
            this.month  = content.month;
            this.year   = content.year;
            this.full   = content.full;
            this.advice = content.advice;
        } else {
            return;
        }

        this.required = required;
        this.format   = format;

        this.day.addClassName('validate-custom');
        this.day.validate = this.validate.bind(this);
        this.month.addClassName('validate-custom');
        this.month.validate = this.validate.bind(this);
        this.year.addClassName('validate-custom');
        this.year.validate = this.validate.bind(this);

        this.setDateRange(false, false);
        this.year.setAttribute('autocomplete','off');

        this.advice.hide();

        var date = new Date;
        this.curyear = date.getFullYear();
    },
    validate: function() {
        var error = false,
            day   = parseInt(this.day.value, 10)   || 0,
            month = parseInt(this.month.value, 10) || 0,
            year  = parseInt(this.year.value, 10)  || 0;
        if (this.day.value.strip().empty()
            && this.month.value.strip().empty()
            && this.year.value.strip().empty()
        ) {
            if (this.required) {
                error = 'This date is a required value.';
            } else {
                this.full.value = '';
            }
        } else if (!day || !month || !year) {
            error = 'Please enter a valid full date';
        } else {
            var date = new Date, countDaysInMonth = 0, errorType = null;
            date.setYear(year);date.setMonth(month-1);date.setDate(32);
            countDaysInMonth = 32 - date.getDate();
            if(!countDaysInMonth || countDaysInMonth>31) countDaysInMonth = 31;
            if(year < 1900) error = this.errorTextModifier(this.validateDataErrorText);

            if (day<1 || day>countDaysInMonth) {
                errorType = 'day';
                error = 'Please enter a valid day (1-%d).';
            } else if (month<1 || month>12) {
                errorType = 'month';
                error = 'Please enter a valid month (1-12).';
            } else {
                if(day % 10 == day) this.day.value = '0'+day;
                if(month % 10 == month) this.month.value = '0'+month;
                this.full.value = this.format.replace(/%[mb]/i, this.month.value).replace(/%[de]/i, this.day.value).replace(/%y/i, this.year.value);
                var testFull = this.month.value + '/' + this.day.value + '/'+ this.year.value;
                var test = new Date(testFull);
                if (isNaN(test)) {
                    error = 'Please enter a valid date.';
                } else {
                    this.setFullDate(test);
                }
            }
            var valueError = false;
            if (!error && !this.validateData()){//(year<1900 || year>curyear) {
                errorType = this.validateDataErrorType;//'year';
                valueError = this.validateDataErrorText;//'Please enter a valid year (1900-%d).';
                error = valueError;
            }
        }

        if (error !== false) {
            try {
                error = Translator.translate(error);
            }
            catch (e) {}
            if (!valueError) {
                this.advice.innerHTML = error.replace('%d', countDaysInMonth);
            } else {
                this.advice.innerHTML = this.errorTextModifier(error);
            }
            this.advice.show();
            return false;
        }

        // fixing elements class
        this.day.removeClassName('validation-failed');
        this.month.removeClassName('validation-failed');
        this.year.removeClassName('validation-failed');

        this.advice.hide();
        return true;
    },
    validateData: function() {
        var year = this.fullDate.getFullYear();
        return (year>=1900 && year<=this.curyear);
    },
    validateDataErrorType: 'year',
    validateDataErrorText: 'Please enter a valid year (1900-%d).',
    errorTextModifier: function(text) {
        text = Translator.translate(text);
        return text.replace('%d', this.curyear);
    },
    setDateRange: function(minDate, maxDate) {
        this.minDate = minDate;
        this.maxDate = maxDate;
    },
    setFullDate: function(date) {
        this.fullDate = date;
    }
};

Varien.DOB = Class.create();
Varien.DOB.prototype = {
    initialize: function(selector, required, format) {
        var el = $$(selector)[0];
        var container       = {};
        container.day       = Element.select(el, '.dob-day input')[0];
        container.month     = Element.select(el, '.dob-month input')[0];
        container.year      = Element.select(el, '.dob-year input')[0];
        container.full      = Element.select(el, '.dob-full input')[0];
        container.advice    = Element.select(el, '.validation-advice')[0];

        new Varien.DateElement('container', container, required, format);
    }
};

Varien.dateRangeDate = Class.create();
Varien.dateRangeDate.prototype = Object.extend(new Varien.DateElement(), {
    validateData: function() {
        var validate = true;
        if (this.minDate || this.maxValue) {
            if (this.minDate) {
                this.minDate = new Date(this.minDate);
                this.minDate.setHours(0);
                if (isNaN(this.minDate)) {
                    this.minDate = new Date('1/1/1900');
                }
                validate = validate && (this.fullDate >= this.minDate);
            }
            if (this.maxDate) {
                this.maxDate = new Date(this.maxDate);
                this.minDate.setHours(0);
                if (isNaN(this.maxDate)) {
                    this.maxDate = new Date();
                }
                validate = validate && (this.fullDate <= this.maxDate);
            }
            if (this.maxDate && this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date between %s and %s';
            } else if (this.maxDate) {
                this.validateDataErrorText = 'Please enter a valid date less than or equal to %s';
            } else if (this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date equal to or greater than %s';
            } else {
                this.validateDataErrorText = '';
            }
        }
        return validate;
    },
    validateDataErrorText: 'Date should be between %s and %s',
    errorTextModifier: function(text) {
        if (this.minDate) {
            text = text.sub('%s', this.dateFormat(this.minDate));
        }
        if (this.maxDate) {
            text = text.sub('%s', this.dateFormat(this.maxDate));
        }
        return text;
    },
    dateFormat: function(date) {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
});

Varien.FileElement = Class.create();
Varien.FileElement.prototype = {
    initialize: function (id) {
        this.fileElement = $(id);
        this.hiddenElement = $(id + '_value');

        this.fileElement.observe('change', this.selectFile.bind(this));
    },
    selectFile: function(event) {
        this.hiddenElement.value = this.fileElement.getValue();
    }
};

Validation.addAllThese([
    ['validate-custom', ' ', function(v,elm) {
        return elm.validate();
    }]
]);

function truncateOptions() {
    $$('.truncated').each(function(element){
        Event.observe(element, 'mouseover', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').addClassName('show');
            }
        });
        Event.observe(element, 'mouseout', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').removeClassName('show');
            }
        });

    });
}
Event.observe(window, 'load', function(){
   truncateOptions();
});

Element.addMethods({
    getInnerText: function(element)
    {
        element = $(element);
        if(element.innerText && !Prototype.Browser.Opera) {
            return element.innerText;
        }
        return element.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, ' ').strip();
    }
});

/*
if (!("console" in window) || !("firebug" in console))
{
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for (var i = 0; i < names.length; ++i)
        window.console[names[i]] = function() {}
}
*/

/**
 * Executes event handler on the element. Works with event handlers attached by Prototype,
 * in a browser-agnostic fashion.
 * @param element The element object
 * @param event Event name, like 'change'
 *
 * @example fireEvent($('my-input', 'click'));
 */
function fireEvent(element, event) {
    if (document.createEvent) {
        // dispatch for all browsers except IE before version 9
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type, bubbling, cancelable
        return element.dispatchEvent(evt);
    } else {
        // dispatch for IE before version 9
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt);
    }
}

/**
 * Returns more accurate results of floating-point modulo division
 * E.g.:
 * 0.6 % 0.2 = 0.19999999999999996
 * modulo(0.6, 0.2) = 0
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor)
{
    var epsilon = divisor / 10000;
    var remainder = dividend % divisor;

    if (Math.abs(remainder - divisor) < epsilon || Math.abs(remainder) < epsilon) {
        remainder = 0;
    }

    return remainder;
}

/**
 * createContextualFragment is not supported in IE9. Adding its support.
 */
if ((typeof Range != "undefined") && !Range.prototype.createContextualFragment)
{
    Range.prototype.createContextualFragment = function(html)
    {
        var frag = document.createDocumentFragment(),
        div = document.createElement("div");
        frag.appendChild(div);
        div.outerHTML = html;
        return frag;
    };
}

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
VarienForm = Class.create();
VarienForm.prototype = {
    initialize: function(formId, firstFieldFocus){
        this.form       = $(formId);
        if (!this.form) {
            return;
        }
        this.cache      = $A();
        this.currLoader = false;
        this.currDataIndex = false;
        this.validator  = new Validation(this.form);
        this.elementFocus   = this.elementOnFocus.bindAsEventListener(this);
        this.elementBlur    = this.elementOnBlur.bindAsEventListener(this);
        this.childLoader    = this.onChangeChildLoad.bindAsEventListener(this);
        this.highlightClass = 'highlight';
        this.extraChildParams = '';
        this.firstFieldFocus= firstFieldFocus || false;
        this.bindElements();
        if(this.firstFieldFocus){
            try{
                Form.Element.focus(Form.findFirstElement(this.form));
            }
            catch(e){}
        }
    },

    submit : function(url){
        if(this.validator && this.validator.validate()){
             this.form.submit();
        }
        return false;
    },

    bindElements:function (){
        var elements = Form.getElements(this.form);
        for (var row in elements) {
            if (elements[row].id) {
                Event.observe(elements[row],'focus',this.elementFocus);
                Event.observe(elements[row],'blur',this.elementBlur);
            }
        }
    },

    elementOnFocus: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.addClassName(element, this.highlightClass);
        }
    },

    elementOnBlur: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.removeClassName(element, this.highlightClass);
        }
    },

    setElementsRelation: function(parent, child, dataUrl, first){
        if (parent=$(parent)) {
            // TODO: array of relation and caching
            if (!this.cache[parent.id]){
                this.cache[parent.id] = $A();
                this.cache[parent.id]['child']     = child;
                this.cache[parent.id]['dataUrl']   = dataUrl;
                this.cache[parent.id]['data']      = $A();
                this.cache[parent.id]['first']      = first || false;
            }
            Event.observe(parent,'change',this.childLoader);
        }
    },

    onChangeChildLoad: function(event){
        element = Event.element(event);
        this.elementChildLoad(element);
    },

    elementChildLoad: function(element, callback){
        this.callback = callback || false;
        if (element.value) {
            this.currLoader = element.id;
            this.currDataIndex = element.value;
            if (this.cache[element.id]['data'][element.value]) {
                this.setDataToChild(this.cache[element.id]['data'][element.value]);
            }
            else{
                new Ajax.Request(this.cache[this.currLoader]['dataUrl'],{
                        method: 'post',
                        parameters: {"parent":element.value},
                        onComplete: this.reloadChildren.bind(this)
                });
            }
        }
    },

    reloadChildren: function(transport){
        var data = transport.responseJSON || transport.responseText.evalJSON(true) || {};
        this.cache[this.currLoader]['data'][this.currDataIndex] = data;
        this.setDataToChild(data);
    },

    setDataToChild: function(data){
        if (data.length) {
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<select name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                if(this.cache[this.currLoader]['first']){
                    html+= '<option value="">'+this.cache[this.currLoader]['first']+'</option>';
                }
                for (var i in data){
                    if(data[i].value) {
                        html+= '<option value="'+data[i].value+'"';
                        if(child.value && (child.value == data[i].value || child.value == data[i].label)){
                            html+= ' selected';
                        }
                        html+='>'+data[i].label+'</option>';
                    }
                }
                html+= '</select>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }
        else{
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<input type="text" name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }

        this.bindElements();
        if (this.callback) {
            this.callback();
        }
    }
};

RegionUpdater = Class.create();
RegionUpdater.prototype = {
    initialize: function (countryEl, regionTextEl, regionSelectEl, regions, disableAction, zipEl)
    {
        this.countryEl = $(countryEl);
        this.regionTextEl = $(regionTextEl);
        this.regionSelectEl = $(regionSelectEl);
        this.zipEl = $(zipEl);
        this.config = regions['config'];
        delete regions.config;
        this.regions = regions;

        this.disableAction = (typeof disableAction=='undefined') ? 'hide' : disableAction;
        this.zipOptions = (typeof zipOptions=='undefined') ? false : zipOptions;

        if (this.regionSelectEl.options.length<=1) {
            this.update();
        }

        Event.observe(this.countryEl, 'change', this.update.bind(this));
    },

    _checkRegionRequired: function()
    {
        var label, wildCard;
        var elements = [this.regionTextEl, this.regionSelectEl];
        var that = this;
        if (typeof this.config == 'undefined') {
            return;
        }
        var regionRequired = this.config.regions_required.indexOf(this.countryEl.value) >= 0;

        elements.each(function(currentElement) {
            Validation.reset(currentElement);
            label = $$('label[for="' + currentElement.id + '"]')[0];
            if (label) {
                wildCard = label.down('em') || label.down('span.required');
                if (!that.config.show_all_regions) {
                    if (regionRequired) {
                        label.up().show();
                    } else {
                        label.up().hide();
                    }
                }
            }

            if (label && wildCard) {
                if (!regionRequired) {
                    wildCard.hide();
                    if (label.hasClassName('required')) {
                        label.removeClassName('required');
                    }
                } else if (regionRequired) {
                    wildCard.show();
                    if (!label.hasClassName('required')) {
                        label.addClassName('required');
                    }
                }
            }

            if (!regionRequired) {
                if (currentElement.hasClassName('required-entry')) {
                    currentElement.removeClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    currentElement.hasClassName('validate-select')) {
                    currentElement.removeClassName('validate-select');
                }
            } else {
                if (!currentElement.hasClassName('required-entry')) {
                    currentElement.addClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    !currentElement.hasClassName('validate-select')) {
                    currentElement.addClassName('validate-select');
                }
            }
        });
    },

    update: function()
    {
        if (this.regions[this.countryEl.value]) {
            var i, option, region, def;

            def = this.regionSelectEl.getAttribute('defaultValue');
            if (this.regionTextEl) {
                if (!def) {
                    def = this.regionTextEl.value.toLowerCase();
                }
                this.regionTextEl.value = '';
            }

            this.regionSelectEl.options.length = 1;
            for (regionId in this.regions[this.countryEl.value]) {
                region = this.regions[this.countryEl.value][regionId];

                option = document.createElement('OPTION');
                option.value = regionId;
                option.text = region.name.stripTags();
                option.title = region.name;

                if (this.regionSelectEl.options.add) {
                    this.regionSelectEl.options.add(option);
                } else {
                    this.regionSelectEl.appendChild(option);
                }

                if (regionId == def || (region.name && region.name.toLowerCase() == def)
                    || (region.name && region.code.toLowerCase() == def)
                ) {
                    this.regionSelectEl.value = regionId;
                }
            }
            this.sortSelect();
            if (this.disableAction == 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = 'none';
                }

                this.regionSelectEl.style.display = '';
            } else if (this.disableAction == 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = true;
                }
                this.regionSelectEl.disabled = false;
            }
            this.setMarkDisplay(this.regionSelectEl, true);
        } else {
            this.regionSelectEl.options.length = 1;
            this.sortSelect();
            if (this.disableAction == 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = '';
                }
                this.regionSelectEl.style.display = 'none';
                Validation.reset(this.regionSelectEl);
            } else if (this.disableAction == 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = false;
                }
                this.regionSelectEl.disabled = true;
            } else if (this.disableAction == 'nullify') {
                this.regionSelectEl.options.length = 1;
                this.regionSelectEl.value = '';
                this.regionSelectEl.selectedIndex = 0;
                this.lastCountryId = '';
            }
            this.setMarkDisplay(this.regionSelectEl, false);
        }

        this._checkRegionRequired();
        // Make Zip and its label required/optional
        var zipUpdater = new ZipUpdater(this.countryEl.value, this.zipEl);
        zipUpdater.update();
    },

    setMarkDisplay: function(elem, display){
        elem = $(elem);
        var labelElement = elem.up(0).down('label > span.required') ||
                           elem.up(1).down('label > span.required') ||
                           elem.up(0).down('label.required > em') ||
                           elem.up(1).down('label.required > em');
        if(labelElement) {
            inputElement = labelElement.up().next('input');
            if (display) {
                labelElement.show();
                if (inputElement) {
                    inputElement.addClassName('required-entry');
                }
            } else {
                labelElement.hide();
                if (inputElement) {
                    inputElement.removeClassName('required-entry');
                }
            }
        }
    },
    sortSelect : function () {
        var elem = this.regionSelectEl;
        var tmpArray = new Array();
        var currentVal = $(elem).value;
        for (var i = 0; i < $(elem).options.length; i++) {
            if (i == 0) {
                continue;
            }
            tmpArray[i-1] = new Array();
            tmpArray[i-1][0] = $(elem).options[i].text;
            tmpArray[i-1][1] = $(elem).options[i].value;
        }
        tmpArray.sort();
        for (var i = 1; i <= tmpArray.length; i++) {
            var op = new Option(tmpArray[i-1][0], tmpArray[i-1][1]);
            $(elem).options[i] = op;
        }
        $(elem).value = currentVal;
        return;
    }
};

ZipUpdater = Class.create();
ZipUpdater.prototype = {
    initialize: function(country, zipElement)
    {
        this.country = country;
        this.zipElement = $(zipElement);
    },

    update: function()
    {
        // Country ISO 2-letter codes must be pre-defined
        if (typeof optionalZipCountries == 'undefined') {
            return false;
        }

        // Ajax-request and normal content load compatibility
        if (this.zipElement != undefined) {
            Validation.reset(this.zipElement);
            this._setPostcodeOptional();
        } else {
            Event.observe(window, "load", this._setPostcodeOptional.bind(this));
        }
    },

    _setPostcodeOptional: function()
    {
        this.zipElement = $(this.zipElement);
        if (this.zipElement == undefined) {
            return false;
        }

        // find label
        var label = $$('label[for="' + this.zipElement.id + '"]')[0];
        if (label != undefined) {
            var wildCard = label.down('em') || label.down('span.required');
        }

        // Make Zip and its label required/optional
        if (optionalZipCountries.indexOf(this.country) != -1) {
            while (this.zipElement.hasClassName('required-entry')) {
                this.zipElement.removeClassName('required-entry');
            }
            if (wildCard != undefined) {
                wildCard.hide();
            }
        } else {
            this.zipElement.addClassName('required-entry');
            if (wildCard != undefined) {
                wildCard.show();
            }
        }
    }
};

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

/**
 * @classDescription simple Navigation with replacing old handlers
 * @param {String} id id of ul element with navigation lists
 * @param {Object} settings object with settings
 */
var mainNav = function() {

    var main = {
        obj_nav :   $(arguments[0]) || $("nav"),

        settings :  {
            show_delay      :   0,
            hide_delay      :   0,
            _ie6            :   /MSIE 6.+Win/.test(navigator.userAgent),
            _ie7            :   /MSIE 7.+Win/.test(navigator.userAgent)
        },

        init :  function(obj, level) {
            obj.lists = obj.childElements();
            obj.lists.each(function(el,ind){
                main.handlNavElement(el);
                if((main.settings._ie6 || main.settings._ie7) && level){
                    main.ieFixZIndex(el, ind, obj.lists.size());
                }
            });
            if(main.settings._ie6 && !level){
                document.execCommand("BackgroundImageCache", false, true);
            }
        },

        handlNavElement :   function(list) {
            if(list !== undefined){
                list.onmouseover = function(){
                    main.fireNavEvent(this,true);
                };
                list.onmouseout = function(){
                    main.fireNavEvent(this,false);
                };
                if(list.down("ul")){
                    main.init(list.down("ul"), true);
                }
            }
        },

        ieFixZIndex : function(el, i, l) {
            if(el.tagName.toString().toLowerCase().indexOf("iframe") == -1){
                el.style.zIndex = l - i;
            } else {
                el.onmouseover = "null";
                el.onmouseout = "null";
            }
        },

        fireNavEvent :  function(elm,ev) {
            if(ev){
                elm.addClassName("over");
                elm.down("a").addClassName("over");
                if (elm.childElements()[1]) {
                    main.show(elm.childElements()[1]);
                }
            } else {
                elm.removeClassName("over");
                elm.down("a").removeClassName("over");
                if (elm.childElements()[1]) {
                    main.hide(elm.childElements()[1]);
                }
            }
        },

        show : function (sub_elm) {
            if (sub_elm.hide_time_id) {
                clearTimeout(sub_elm.hide_time_id);
            }
            sub_elm.show_time_id = setTimeout(function() {
                if (!sub_elm.hasClassName("shown-sub")) {
                    sub_elm.addClassName("shown-sub");
                }
            }, main.settings.show_delay);
        },

        hide : function (sub_elm) {
            if (sub_elm.show_time_id) {
                clearTimeout(sub_elm.show_time_id);
            }
            sub_elm.hide_time_id = setTimeout(function(){
                if (sub_elm.hasClassName("shown-sub")) {
                    sub_elm.removeClassName("shown-sub");
                }
            }, main.settings.hide_delay);
        }

    };
    if (arguments[1]) {
        main.settings = Object.extend(main.settings, arguments[1]);
    }
    if (main.obj_nav) {
        main.init(main.obj_nav, false);
    }
};

document.observe("dom:loaded", function() {
    //run navigation without delays and with default id="#nav"
    //mainNav();

    //run navigation with delays
    mainNav("nav", {"show_delay":"100","hide_delay":"100"});
});

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
// old school cookie functions grabbed off the web

if (!window.Mage) var Mage = {};

Mage.Cookies = {};
Mage.Cookies.expires  = null;
Mage.Cookies.path     = '/';
Mage.Cookies.domain   = null;
Mage.Cookies.secure   = false;
Mage.Cookies.set = function(name, value){
     var argv = arguments;
     var argc = arguments.length;
     var expires = (argc > 2) ? argv[2] : Mage.Cookies.expires;
     var path = (argc > 3) ? argv[3] : Mage.Cookies.path;
     var domain = (argc > 4) ? argv[4] : Mage.Cookies.domain;
     var secure = (argc > 5) ? argv[5] : Mage.Cookies.secure;
     document.cookie = name + "=" + escape (value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};

Mage.Cookies.get = function(name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while(i < clen){
        j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return Mage.Cookies.getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if(i == 0)
            break;
    }
    return null;
};

Mage.Cookies.clear = function(name) {
  if(Mage.Cookies.get(name)){
    document.cookie = name + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
};

Mage.Cookies.getCookieVal = function(offset){
   var endstr = document.cookie.indexOf(";", offset);
   if(endstr == -1){
       endstr = document.cookie.length;
   }
   return unescape(document.cookie.substring(offset, endstr));
};

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-localstorage-touch-shiv-mq-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return t("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},n.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}};for(var C in n)w(n,C)&&(s=C.toLowerCase(),e[s]=n[C](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=u,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*!
 * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
 * Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

;(function (name, context, factory) {
    var matchMedia = context.matchMedia;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(matchMedia);
    }
    else if (typeof define === 'function' && define.amd) {
        define(function() {
            return (context[name] = factory(matchMedia));
        });
    }
    else {
        context[name] = factory(matchMedia);
    }
}('enquire', this, function (matchMedia) {

    'use strict';

    /*jshint unused:false */
    /**
     * Helper function for iterating over a collection
     *
     * @param collection
     * @param fn
     */
    function each(collection, fn) {
        var i      = 0,
            length = collection.length,
            cont;

        for(i; i < length; i++) {
            cont = fn(collection[i], i);
            if(cont === false) {
                break; //allow early exit
            }
        }
    }

    /**
     * Helper function for determining whether target object is an array
     *
     * @param target the object under test
     * @return {Boolean} true if array, false otherwise
     */
    function isArray(target) {
        return Object.prototype.toString.apply(target) === '[object Array]';
    }

    /**
     * Helper function for determining whether target object is a function
     *
     * @param target the object under test
     * @return {Boolean} true if function, false otherwise
     */
    function isFunction(target) {
        return typeof target === 'function';
    }

    /**
     * Delegate to handle a media query being matched and unmatched.
     *
     * @param {object} options
     * @param {function} options.match callback for when the media query is matched
     * @param {function} [options.unmatch] callback for when the media query is unmatched
     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
     * @constructor
     */
    function QueryHandler(options) {
        this.options = options;
        !options.deferSetup && this.setup();
    }
    QueryHandler.prototype = {

        /**
         * coordinates setup of the handler
         *
         * @function
         */
        setup : function() {
            if(this.options.setup) {
                this.options.setup();
            }
            this.initialised = true;
        },

        /**
         * coordinates setup and triggering of the handler
         *
         * @function
         */
        on : function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
        },

        /**
         * coordinates the unmatch event for the handler
         *
         * @function
         */
        off : function() {
            this.options.unmatch && this.options.unmatch();
        },

        /**
         * called when a handler is to be destroyed.
         * delegates to the destroy or unmatch callbacks, depending on availability.
         *
         * @function
         */
        destroy : function() {
            this.options.destroy ? this.options.destroy() : this.off();
        },

        /**
         * determines equality by reference.
         * if object is supplied compare options, if function, compare match callback
         *
         * @function
         * @param {object || function} [target] the target for comparison
         */
        equals : function(target) {
            return this.options === target || this.options.match === target;
        }

    };
    /**
     * Represents a single media query, manages it's state and registered handlers for this query
     *
     * @constructor
     * @param {string} query the media query string
     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
     */
    function MediaQuery(query, isUnconditional) {
        this.query = query;
        this.isUnconditional = isUnconditional;
        this.handlers = [];
        this.mql = matchMedia(query);

        var self = this;
        this.listener = function(mql) {
            self.mql = mql;
            self.assess();
        };
        this.mql.addListener(this.listener);
    }
    MediaQuery.prototype = {

        /**
         * add a handler for this query, triggering if already active
         *
         * @param {object} handler
         * @param {function} handler.match callback for when query is activated
         * @param {function} [handler.unmatch] callback for when query is deactivated
         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
         */
        addHandler : function(handler) {
            var qh = new QueryHandler(handler);
            this.handlers.push(qh);

            this.matches() && qh.on();
        },

        /**
         * removes the given handler from the collection, and calls it's destroy methods
         * 
         * @param {object || function} handler the handler to remove
         */
        removeHandler : function(handler) {
            var handlers = this.handlers;
            each(handlers, function(h, i) {
                if(h.equals(handler)) {
                    h.destroy();
                    return !handlers.splice(i,1); //remove from array and exit each early
                }
            });
        },

        /**
         * Determine whether the media query should be considered a match
         * 
         * @return {Boolean} true if media query can be considered a match, false otherwise
         */
        matches : function() {
            return this.mql.matches || this.isUnconditional;
        },

        /**
         * Clears all handlers and unbinds events
         */
        clear : function() {
            each(this.handlers, function(handler) {
                handler.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0; //clear array
        },

        /*
         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
         */
        assess : function() {
            var action = this.matches() ? 'on' : 'off';

            each(this.handlers, function(handler) {
                handler[action]();
            });
        }
    };
    /**
     * Allows for registration of query handlers.
     * Manages the query handler's state and is responsible for wiring up browser events
     *
     * @constructor
     */
    function MediaQueryDispatch () {
        if(!matchMedia) {
            throw new Error('matchMedia not present, legacy browsers require a polyfill');
        }

        this.queries = {};
        this.browserIsIncapable = !matchMedia('only all').matches;
    }

    MediaQueryDispatch.prototype = {

        /**
         * Registers a handler for the given media query
         *
         * @param {string} q the media query
         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
         * @param {function} options.match fired when query matched
         * @param {function} [options.unmatch] fired when a query is no longer matched
         * @param {function} [options.setup] fired when handler first triggered
         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
         */
        register : function(q, options, shouldDegrade) {
            var queries         = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;

            if(!queries[q]) {
                queries[q] = new MediaQuery(q, isUnconditional);
            }

            //normalise to object in an array
            if(isFunction(options)) {
                options = { match : options };
            }
            if(!isArray(options)) {
                options = [options];
            }
            each(options, function(handler) {
                queries[q].addHandler(handler);
            });

            return this;
        },

        /**
         * unregisters a query and all it's handlers, or a specific handler for a query
         *
         * @param {string} q the media query to target
         * @param {object || function} [handler] specific handler to unregister
         */
        unregister : function(q, handler) {
            var query = this.queries[q];

            if(query) {
                if(handler) {
                    query.removeHandler(handler);
                }
                else {
                    query.clear();
                    delete this.queries[q];
                }
            }

            return this;
        }
    };

    return new MediaQueryDispatch();

}));

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    design
 * @package     rwd_default
 * @copyright   Copyright (c) 2006-2017 X.commerce, Inc. and affiliates (http://www.magento.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

// =============================================
// Primary Break Points
// =============================================

// These should be used with the bp (max-width, xx) mixin
// where a min-width is used, remember to +1 to break correctly
// If these are changed, they must also be updated in _var.scss

var bp = {
    xsmall: 479,
    small: 599,
    medium: 770,
    large: 979,
    xlarge: 1199
};

// ==============================================
// Search
// ==============================================

/**
 * Implements a custom validation style for the search form. When the form is invalidly submitted, the validation-failed
 * class gets added to the input, but the "This is a required field." text does not display
 */
Varien.searchForm.prototype.initialize = function (form, field, emptyText) {
    this.form = $(form);
    this.field = $(field);
    this.emptyText = emptyText;

    Event.observe(this.form, 'submit', this.submit.bind(this));
    Event.observe(this.field, 'change', this.change.bind(this));
    Event.observe(this.field, 'focus', this.focus.bind(this));
    Event.observe(this.field, 'blur', this.blur.bind(this));
    this.blur();
};

Varien.searchForm.prototype.submit = function (event) {
    if (this.field.value == this.emptyText || this.field.value == ''){
        Event.stop(event);
        this.field.addClassName('validation-failed');
        this.field.focus();
        return false;
    }
    return true;
};

Varien.searchForm.prototype.change = function (event) {
    if (
        this.field.value != this.emptyText
        && this.field.value != ''
        && this.field.hasClassName('validation-failed')
    ) {
        this.field.removeClassName('validation-failed');
    }
};

Varien.searchForm.prototype.blur = function (event) {
    if (this.field.hasClassName('validation-failed')) {
        this.field.removeClassName('validation-failed');
    }
};

// ==============================================
// Pointer abstraction
// ==============================================

/**
 * This class provides an easy and abstracted mechanism to determine the
 * best pointer behavior to use -- that is, is the user currently interacting
 * with their device in a touch manner, or using a mouse.
 *
 * Since devices may use either touch or mouse or both, there is no way to
 * know the user's preferred pointer type until they interact with the site.
 *
 * To accommodate this, this class provides a method and two events
 * to determine the user's preferred pointer type.
 *
 * - getPointer() returns the last used pointer type, or, if the user has
 *   not yet interacted with the site, falls back to a Modernizr test.
 *
 * - The mouse-detected event is triggered on the window object when the user
 *   is using a mouse pointer input, or has switched from touch to mouse input.
 *   It can be observed in this manner: $j(window).on('mouse-detected', function(event) { // custom code });
 *
 * - The touch-detected event is triggered on the window object when the user
 *   is using touch pointer input, or has switched from mouse to touch input.
 *   It can be observed in this manner: $j(window).on('touch-detected', function(event) { // custom code });
 */
var PointerManager = {
    MOUSE_POINTER_TYPE: 'mouse',
    TOUCH_POINTER_TYPE: 'touch',
    POINTER_EVENT_TIMEOUT_MS: 500,
    standardTouch: false,
    touchDetectionEvent: null,
    lastTouchType: null,
    pointerTimeout: null,
    pointerEventLock: false,

    getPointerEventsSupported: function() {
        return this.standardTouch;
    },

    getPointerEventsInputTypes: function() {
        if (window.navigator.pointerEnabled) { //IE 11+
            //return string values from http://msdn.microsoft.com/en-us/library/windows/apps/hh466130.aspx
            return {
                MOUSE: 'mouse',
                TOUCH: 'touch',
                PEN: 'pen'
            };
        } else if (window.navigator.msPointerEnabled) { //IE 10
            //return numeric values from http://msdn.microsoft.com/en-us/library/windows/apps/hh466130.aspx
            return {
                MOUSE:  0x00000004,
                TOUCH:  0x00000002,
                PEN:    0x00000003
            };
        } else { //other browsers don't support pointer events
            return {}; //return empty object
        }
    },

    /**
     * If called before init(), get best guess of input pointer type
     * using Modernizr test.
     * If called after init(), get current pointer in use.
     */
    getPointer: function() {
        // On iOS devices, always default to touch, as this.lastTouchType will intermittently return 'mouse' if
        // multiple touches are triggered in rapid succession in Safari on iOS
        if(Modernizr.ios) {
            return this.TOUCH_POINTER_TYPE;
        }

        if(this.lastTouchType) {
            return this.lastTouchType;
        }

        return Modernizr.touch ? this.TOUCH_POINTER_TYPE : this.MOUSE_POINTER_TYPE;
    },

    setPointerEventLock: function() {
        this.pointerEventLock = true;
    },
    clearPointerEventLock: function() {
        this.pointerEventLock = false;
    },
    setPointerEventLockTimeout: function() {
        var that = this;

        if(this.pointerTimeout) {
            clearTimeout(this.pointerTimeout);
        }

        this.setPointerEventLock();
        this.pointerTimeout = setTimeout(function() { that.clearPointerEventLock(); }, this.POINTER_EVENT_TIMEOUT_MS);
    },

    triggerMouseEvent: function(originalEvent) {
        if(this.lastTouchType == this.MOUSE_POINTER_TYPE) {
            return; //prevent duplicate events
        }

        this.lastTouchType = this.MOUSE_POINTER_TYPE;
        $j(window).trigger('mouse-detected', originalEvent);
    },
    triggerTouchEvent: function(originalEvent) {
        if(this.lastTouchType == this.TOUCH_POINTER_TYPE) {
            return; //prevent duplicate events
        }

        this.lastTouchType = this.TOUCH_POINTER_TYPE;
        $j(window).trigger('touch-detected', originalEvent);
    },

    initEnv: function() {
        if (window.navigator.pointerEnabled) {
            this.standardTouch = true;
            this.touchDetectionEvent = 'pointermove';
        } else if (window.navigator.msPointerEnabled) {
            this.standardTouch = true;
            this.touchDetectionEvent = 'MSPointerMove';
        } else {
            this.touchDetectionEvent = 'touchstart';
        }
    },

    wirePointerDetection: function() {
        var that = this;

        if(this.standardTouch) { //standard-based touch events. Wire only one event.
            //detect pointer event
            $j(window).on(this.touchDetectionEvent, function(e) {
                switch(e.originalEvent.pointerType) {
                    case that.getPointerEventsInputTypes().MOUSE:
                        that.triggerMouseEvent(e);
                        break;
                    case that.getPointerEventsInputTypes().TOUCH:
                    case that.getPointerEventsInputTypes().PEN:
                        // intentionally group pen and touch together
                        that.triggerTouchEvent(e);
                        break;
                }
            });
        } else { //non-standard touch events. Wire touch and mouse competing events.
            //detect first touch
            $j(window).on(this.touchDetectionEvent, function(e) {
                if(that.pointerEventLock) {
                    return;
                }

                that.setPointerEventLockTimeout();
                that.triggerTouchEvent(e);
            });

            //detect mouse usage
            $j(document).on('mouseover', function(e) {
                if(that.pointerEventLock) {
                    return;
                }

                that.setPointerEventLockTimeout();
                that.triggerMouseEvent(e);
            });
        }
    },

    init: function() {
        this.initEnv();
        this.wirePointerDetection();
    }
};

/**
 * This class manages the main navigation and supports infinite nested
 * menus which support touch, mouse click, and hover correctly.
 *
 * The following is the expected behavior:
 *
 * - Hover with an actual mouse should expand the menu (at any level of nesting)
 * - Click with an actual mouse will follow the link, regardless of any children
 * - Touch will follow links without children, and toggle submenus of links with children
 *
 * Caveats:
 * - According to Mozilla's documentation (https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Touch_events),
 *   Firefox has disabled Apple-style touch events on desktop, so desktop devices using Firefox will not support
 *   the desired touch behavior.
 */
var MenuManager = {
    // These variables are used to detect incorrect touch / mouse event order
    mouseEnterEventObserved: false,
    touchEventOrderIncorrect: false,
    cancelNextTouch: false,

    /**
     * This class manages touch scroll detection
     */
    TouchScroll: {
        /**
         * Touch which moves the screen vertically more than
         * this many pixels will be considered a scroll.
         */
        TOUCH_SCROLL_THRESHOLD: 20,

        touchStartPosition: null,

        /**
         * Note scroll position so that scroll action can be detected later.
         * Should probably be called on touchstart (or similar) event.
         */
        reset: function() {
            this.touchStartPosition = $j(window).scrollTop();
        },

        /**
         * Determines if touch was actually a scroll. Should probably be checked
         * on touchend (or similar) event.
         * @returns {boolean}
         */
        shouldCancelTouch: function() {
            if(this.touchStartPosition == null) {
                return false;
            }

            var scroll = $j(window).scrollTop() - this.touchStartPosition;
            return Math.abs(scroll) > this.TOUCH_SCROLL_THRESHOLD;
        }
    },

    /**
     * Determines if small screen behavior should be used.
     *
     * @returns {boolean}
     */
    useSmallScreenBehavior: function() {
        return Modernizr.mq("screen and (max-width:" + bp.medium + "px)");
    },

    /**
     * Toggles a given menu item's visibility.
     * On large screens, also closes sibling and children of sibling menus.
     *
     * @param target
     */
    toggleMenuVisibility: function(target) {
        var link = $j(target);
        var li = link.closest('li');

        if(!this.useSmallScreenBehavior()) {
            // remove menu-active from siblings and children of siblings
            li.siblings()
              .removeClass('menu-active')
              .find('li')
              .removeClass('menu-active');
            //remove menu-active from children
            li.find('li.menu-active').removeClass('menu-active');
        }

        //toggle current item's active state
        li.toggleClass('menu-active');
    },

    // --------------------------------------------
    // Initialization methods
    //

    /**
     * Initialize MenuManager and wire all required events.
     * Should only be called once.
     *
     */
    init: function() {
        this.wirePointerEvents();
    },

    /**
     * This method observes an absurd number of events
     * depending on the capabilities of the current browser
     * to implement expected header navigation functionality.
     *
     * The goal is to separate interactions into four buckets:
     * - pointer enter using an actual mouse
     * - pointer leave using an actual mouse
     * - pointer down using an actual mouse
     * - pointer down using touch
     *
     * Browsers supporting PointerEvent events will use these
     * to differentiate pointer types.
     *
     * Browsers supporting Apple-style will use those events
     * along with mouseenter / mouseleave to emulate pointer events.
     */
    wirePointerEvents: function() {
        var that = this;
        var pointerTarget = $j('#nav a.has-children');
        var hoverTarget = $j('#nav li');

        if(PointerManager.getPointerEventsSupported()) {
            // pointer events supported, so observe those type of events

            var enterEvent = window.navigator.pointerEnabled ? 'pointerenter' : 'mouseenter';
            var leaveEvent = window.navigator.pointerEnabled ? 'pointerleave' : 'mouseleave';
            var fullPointerSupport = window.navigator.pointerEnabled;

            hoverTarget.on(enterEvent, function(e) {
                if(e.originalEvent.pointerType === undefined // Browsers with partial PointerEvent support don't provide pointer type
                    || e.originalEvent.pointerType == PointerManager.getPointerEventsInputTypes().MOUSE) {

                    if(fullPointerSupport) {
                        that.mouseEnterAction(e, this);
                    } else {
                        that.PartialPointerEventsSupport.mouseEnterAction(e, this);
                    }
                }
            }).on(leaveEvent, function(e) {
                if(e.originalEvent.pointerType === undefined // Browsers with partial PointerEvent support don't provide pointer type
                    || e.originalEvent.pointerType == PointerManager.getPointerEventsInputTypes().MOUSE) {

                    if(fullPointerSupport) {
                        that.mouseLeaveAction(e, this);
                    } else {
                        that.PartialPointerEventsSupport.mouseLeaveAction(e, this);
                    }
                }
            });

            if(!fullPointerSupport) {
                //click event doesn't have pointer type on it.
                //observe MSPointerDown to set pointer type for click to find later

                pointerTarget.on('MSPointerDown', function(e) {
                    $j(this).data('pointer-type', e.originalEvent.pointerType);
                });
            }

            pointerTarget.on('click', function(e) {
                var pointerType = fullPointerSupport ? e.originalEvent.pointerType : $j(this).data('pointer-type');

                if(pointerType === undefined || pointerType == PointerManager.getPointerEventsInputTypes().MOUSE) {
                    that.mouseClickAction(e, this);
                } else {
                    if(fullPointerSupport) {
                        that.touchAction(e, this);
                    } else {
                        that.PartialPointerEventsSupport.touchAction(e, this);
                    }
                }

                $j(this).removeData('pointer-type'); // clear pointer type hint from target, if any
            });
        } else {
            //pointer events not supported, use Apple-style events to simulate

            hoverTarget.on('mouseenter', function(e) {
                // Touch events should cancel this event if a touch pointer is used.
                // Record that this method has fired so that erroneous following
                // touch events (if any) can respond accordingly.
                that.mouseEnterEventObserved = true;
                that.cancelNextTouch = true;

                that.mouseEnterAction(e, this);
            }).on('mouseleave', function(e) {
                that.mouseLeaveAction(e, this);
            });

            $j(window).on('touchstart', function(e) {
                if(that.mouseEnterEventObserved) {
                    // If mouse enter observed before touch, then device touch
                    // event order is incorrect.
                    that.touchEventOrderIncorrect = true;
                    that.mouseEnterEventObserved = false; // Reset test
                }

                // Reset TouchScroll in order to detect scroll later.
                that.TouchScroll.reset();
            });

            pointerTarget.on('touchend', function(e) {
                $j(this).data('was-touch', true); // Note that element was invoked by touch pointer

                e.preventDefault(); // Prevent mouse compatibility events from firing where possible

                if(that.TouchScroll.shouldCancelTouch()) {
                    return; // Touch was a scroll -- don't do anything else
                }

                if(that.touchEventOrderIncorrect) {
                    that.PartialTouchEventsSupport.touchAction(e, this);
                } else {
                    that.touchAction(e, this);
                }
            }).on('click', function(e) {
                if($j(this).data('was-touch')) { // Event invoked after touch
                    e.preventDefault(); // Prevent following link
                    return; // Prevent other behavior
                }

                that.mouseClickAction(e, this);
            });
        }
    },

     // --------------------------------------------
     // Behavior "buckets"
     //

    /**
     * Browsers with incomplete PointerEvent support (such as IE 10)
     * require special event management. This collection of methods
     * accommodate such browsers.
     */
    PartialPointerEventsSupport: {
        /**
         * Without proper pointerenter / pointerleave / click pointerType support,
         * we have to use mouseenter events. These end up triggering
         * lots of mouseleave events that can be misleading.
         *
         * Each touch mouseenter and click event that ends up triggering
         * an undesired mouseleave increments this lock variable.
         *
         * Mouseleave events are cancelled if this variable is > 0,
         * and then the variable is decremented regardless.
         */
        mouseleaveLock: 0,

        /**
         * Handles mouse enter behavior, but if using touch,
         * toggle menus in the absence of full PointerEvent support.
         *
         * @param event
         * @param target
         */
        mouseEnterAction: function(event, target) {
            if(MenuManager.useSmallScreenBehavior()) {
                // fall back to normal method behavior
                MenuManager.mouseEnterAction(event, target);
                return;
            }

            event.stopPropagation();

            var jtarget = $j(target);
            if(!jtarget.hasClass('level0')) {
                this.mouseleaveLock = jtarget.parents('li').length + 1;
            }

            MenuManager.toggleMenuVisibility(target);
        },

        /**
         * Handles mouse leave behaivor, but obeys the mouseleaveLock
         * to allow undesired mouseleave events to be cancelled.
         *
         * @param event
         * @param target
         */
        mouseLeaveAction: function(event, target) {
            if(MenuManager.useSmallScreenBehavior()) {
                // fall back to normal method behavior
                MenuManager.mouseLeaveAction(event, target);
                return;
            }

            if(this.mouseleaveLock > 0) {
                this.mouseleaveLock--;
                return; // suppress duplicate mouseleave event after touch
            }

            $j(target).removeClass('menu-active'); //hide all menus
        },

        /**
         * Does no work on its own, but increments mouseleaveLock
         * to prevent following undesireable mouseleave events.
         *
         * @param event
         * @param target
         */
        touchAction: function(event, target) {
            if(MenuManager.useSmallScreenBehavior()) {
                // fall back to normal method behavior
                MenuManager.touchAction(event, target);
                return;
            }
            event.preventDefault(); // prevent following link
            this.mouseleaveLock++;
        }
    },

    /**
     * Browsers with incomplete Apple-style touch event support
     * (such as the legacy Android browser) sometimes fire
     * touch events out of order. In particular, mouseenter may
     * fire before the touch events. This collection of methods
     * accommodate such browsers.
     */
    PartialTouchEventsSupport: {
        /**
         * Toggles visibility of menu, unless suppressed by previous
         * out of order mouseenter event.
         *
         * @param event
         * @param target
         */
        touchAction: function(event, target) {
            if(MenuManager.cancelNextTouch) {
                // Mouseenter has already manipulated the menu.
                // Suppress this undesired touch event.
                MenuManager.cancelNextTouch = false;
                return;
            }

            MenuManager.toggleMenuVisibility(target);
        }
    },

    /**
     * On large screens, show menu.
     * On small screens, do nothing.
     *
     * @param event
     * @param target
     */
    mouseEnterAction: function(event, target) {
        if(this.useSmallScreenBehavior()) {
            return; // don't do mouse enter functionality on smaller screens
        }

        $j(target).addClass('menu-active'); //show current menu
    },

    /**
     * On large screens, hide menu.
     * On small screens, do nothing.
     *
     * @param event
     * @param target
     */
    mouseLeaveAction: function(event, target) {
        if(this.useSmallScreenBehavior()) {
            return; // don't do mouse leave functionality on smaller screens
        }

        $j(target).removeClass('menu-active'); //hide all menus
    },

    /**
     * On large screens, don't interfere so that browser will follow link.
     * On small screens, toggle menu visibility.
     *
     * @param event
     * @param target
     */
    mouseClickAction: function(event, target) {
        if(this.useSmallScreenBehavior()) {
            event.preventDefault(); //don't follow link
            this.toggleMenuVisibility(target); //instead, toggle visibility
        }
    },

    /**
     * Toggle menu visibility, and prevent event default to avoid
     * undesired, duplicate, synthetic mouse events.
     *
     * @param event
     * @param target
     */
    touchAction: function(event, target) {
        this.toggleMenuVisibility(target);

        event.preventDefault();
    }
};

// ==============================================
// jQuery Init
// ==============================================

// Use $j(document).ready() because Magento executes Prototype inline
$j(document).ready(function () {

    // ==============================================
    // Shared Vars
    // ==============================================

    // Document
    var w = $j(window);
    var d = $j(document);
    var body = $j('body');

    Modernizr.addTest('ios', function () {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });

    //initialize pointer abstraction manager
    PointerManager.init();

    /* Wishlist Toggle Class */

    $j(".change").click(function (e) {
        $j( this ).toggleClass('active');
        e.stopPropagation();
    });

    $j(document).click(function (e) {
        if (! $j(e.target).hasClass('.change')) $j(".change").removeClass('active');
    });


    // =============================================
    // Skip Links
    // =============================================

    var skipContents = $j('.skip-content');
    var skipLinks = $j('.skip-link');

    skipLinks.on('click', function (e) {
        e.preventDefault();

        var self = $j(this);
        // Use the data-target-element attribute, if it exists. Fall back to href.
        var target = self.attr('data-target-element') ? self.attr('data-target-element') : self.attr('href');

        // Get target element
        var elem = $j(target);

        // Check if stub is open
        var isSkipContentOpen = elem.hasClass('skip-active') ? 1 : 0;

        // Hide all stubs
        skipLinks.removeClass('skip-active');
        skipContents.removeClass('skip-active');

        // Toggle stubs
        if (isSkipContentOpen) {
            self.removeClass('skip-active');
        } else {
            self.addClass('skip-active');
            elem.addClass('skip-active');
        }
    });

    $j('#header-cart').on('click', '.skip-link-close', function(e) {
        var parent = $j(this).parents('.skip-content');
        var link = parent.siblings('.skip-link');

        parent.removeClass('skip-active');
        link.removeClass('skip-active');

        e.preventDefault();
    });


    // ==============================================
    // Header Menus
    // ==============================================

    // initialize menu
    MenuManager.init();

    // Prevent sub menus from spilling out of the window.
    function preventMenuSpill() {
        var windowWidth = $j(window).width();
        $j('ul.level0').each(function(){
            var ul = $j(this);
            //Show it long enough to get info, then hide it.
            ul.addClass('position-test');
            ul.removeClass('spill');
            var width = ul.outerWidth();
            var offset = ul.offset().left;
            ul.removeClass('position-test');
            //Add the spill class if it will spill off the page.
            if ((offset + width) > windowWidth) {
                ul.addClass('spill');
            }
        });
    }
    preventMenuSpill();
    $j(window).on('delayed-resize', preventMenuSpill);


    // ==============================================
    // Language Switcher
    // ==============================================

    // In order to display the language switcher next to the logo, we are moving the content at different viewports,
    // rather than having duplicate markup or changing the design
    enquire.register('(max-width: ' + bp.medium + 'px)', {
        match: function () {
            $j('.page-header-container .store-language-container').prepend($j('.form-language'));
        },
        unmatch: function () {
            $j('.header-language-container .store-language-container').prepend($j('.form-language'));
        }
    });

    // ==============================================
    // Enquire JS
    // ==============================================

    enquire.register('screen and (min-width: ' + (bp.medium + 1) + 'px)', {
        match: function () {
            $j('.menu-active').removeClass('menu-active');
            $j('.sub-menu-active').removeClass('sub-menu-active');
            $j('.skip-active').removeClass('skip-active');
        },
        unmatch: function () {
            $j('.menu-active').removeClass('menu-active');
            $j('.sub-menu-active').removeClass('sub-menu-active');
            $j('.skip-active').removeClass('skip-active');
        }
    });

    // ==============================================
    // UI Pattern - Media Switcher
    // ==============================================

    // Used to swap primary product photo from thumbnails.

    var mediaListLinks = $j('.media-list').find('a');
    var mediaPrimaryImage = $j('.primary-image').find('img');

    if (mediaListLinks.length) {
        mediaListLinks.on('click', function (e) {
            e.preventDefault();

            var self = $j(this);

            mediaPrimaryImage.attr('src', self.attr('href'));
        });
    }

    // ==============================================
    // UI Pattern - ToggleSingle
    // ==============================================

    // Use this plugin to toggle the visibility of content based on a toggle link/element.
    // This pattern differs from the accordion functionality in the Toggle pattern in that each toggle group acts
    // independently of the others. It is named so as not to be confused with the Toggle pattern below
    //
    // This plugin requires a specific markup structure. The plugin expects a set of elements that it
    // will use as the toggle link. It then hides all immediately following siblings and toggles the sibling's
    // visibility when the toggle link is clicked.
    //
    // Example markup:
    // <div class="block">
    //     <div class="block-title">Trigger</div>
    //     <div class="block-content">Content that should show when </div>
    // </div>
    //
    // JS: jQuery('.block-title').toggleSingle();
    //
    // Options:
    //     destruct: defaults to false, but if true, the plugin will remove itself, display content, and remove event handlers


    jQuery.fn.toggleSingle = function (options) {

        // passing destruct: true allows
        var settings = $j.extend({
            destruct: false
        }, options);

        return this.each(function () {
            if (!settings.destruct) {
                $j(this).on('click', function () {
                    $j(this)
                        .toggleClass('active')
                        .next()
                        .toggleClass('no-display');
                });
                // Hide the content
                $j(this).next().addClass('no-display');
            } else {
                // Remove event handler so that the toggle link can no longer be used
                $j(this).off('click');
                // Remove all classes that were added by this plugin
                $j(this)
                    .removeClass('active')
                    .next()
                    .removeClass('no-display');
            }

        });
    };

    // ==============================================
    // UI Pattern - Toggle Content (tabs and accordions in one setup)
    // ==============================================
    
    $j('.toggle-content').each(function () {
        var wrapper = jQuery(this);

        var hasTabs = wrapper.hasClass('tabs');
        var hasAccordion = wrapper.hasClass('accordion');
        var startOpen = wrapper.hasClass('open');

        var dl = wrapper.children('dl:first');
        var dts = dl.children('dt');
        var panes = dl.children('dd');
        var groups = new Array(dts, panes);

        //Create a ul for tabs if necessary.
        if (hasTabs) {
            var ul = jQuery('<ul class="toggle-tabs"></ul>');
            dts.each(function () {
                var dt = jQuery(this);
                var li = jQuery('<li></li>');
                li.html(dt.html());
                ul.append(li);
            });
            ul.insertBefore(dl);
            var lis = ul.children();
            groups.push(lis);
        }

        //Add "last" classes.
        var i;
        for (i = 0; i < groups.length; i++) {
            groups[i].filter(':last').addClass('last');
        }

        function toggleClasses(clickedItem, group) {
            var index = group.index(clickedItem);
            var i;
            for (i = 0; i < groups.length; i++) {
                groups[i].removeClass('current');
                groups[i].eq(index).addClass('current');
            }
        }

        //Toggle on tab (dt) click.
        dts.on('click', function (e) {
            //They clicked the current dt to close it. Restore the wrapper to unclicked state.
            if (jQuery(this).hasClass('current') && wrapper.hasClass('accordion-open')) {
                wrapper.removeClass('accordion-open');
            } else {
                //They're clicking something new. Reflect the explicit user interaction.
                wrapper.addClass('accordion-open');
            }
            toggleClasses(jQuery(this), dts);
        });

        //Toggle on tab (li) click.
        if (hasTabs) {
            lis.on('click', function (e) {
                toggleClasses(jQuery(this), lis);
            });
            //Open the first tab.
            lis.eq(0).trigger('click');
        }

        //Open the first accordion if desired.
        if (startOpen) {
            dts.eq(0).trigger('click');
        }

    });


    // ==============================================
    // Layered Navigation Block
    // ==============================================

    // On product list pages, we want to show the layered nav/category menu immediately above the product list.
    // While it would make more sense to just move the .block-layered-nav block rather than .col-left-first
    // (since other blocks can be inserted into left_first), it creates simpler code to move the entire
    // .col-left-first block, so that is the approach we're taking
    if ($j('.col-left-first > .block').length && $j('div.category-products').length) {
        enquire.register('screen and (max-width: ' + bp.medium + 'px)', {
            match: function () {
                $j('.col-left-first').insertBefore($j('div.category-products'));
            },
            unmatch: function () {
                // Move layered nav back to left column
                $j('.col-left-first').insertBefore($j('.col-main'));
            }
        });
    }

    // ==============================================
    // 3 column layout
    // ==============================================

    // On viewports smaller than 1000px, move the right column into the left column
    if ($j('.main-container.col3-layout').length > 0) {
        enquire.register('screen and (max-width: 1000px)', {
            match: function () {
                var rightColumn = $j('.col-right');
                var colWrapper = $j('.col-wrapper');

                rightColumn.appendTo(colWrapper);
            },
            unmatch: function () {
                var rightColumn = $j('.col-right');
                var main = $j('.main');

                rightColumn.appendTo(main);
            }
        });
    }


    // ==============================================
    // Block collapsing (on smaller viewports)
    // ==============================================

    enquire.register('(max-width: ' + bp.medium + 'px)', {
        setup: function () {
            this.toggleElements = $j(
                // This selects the menu on the My Account and CMS pages
                '.col-left-first .block:not(.block-layered-nav) .block-title, ' +
                    '.col-left-first .block-layered-nav .block-subtitle--filter, ' +
                    '.sidebar:not(.col-left-first) .block .block-title'
            );
        },
        match: function () {
            this.toggleElements.toggleSingle();
        },
        unmatch: function () {
            this.toggleElements.toggleSingle({destruct: true});
        }
    });


    // ==============================================
    // OPC - Progress Block
    // ==============================================

    if ($j('body.checkout-onepage-index').length) {
        enquire.register('(max-width: ' + bp.large + 'px)', {
            match: function () {
                $j('#checkout-step-review').prepend($j('#checkout-progress-wrapper'));
            },
            unmatch: function () {
                $j('.col-right').prepend($j('#checkout-progress-wrapper'));
            }
        });
    }


    // ==============================================
    // Checkout Cart - events
    // ==============================================

    if ($j('body.checkout-cart-index').length) {
        $j('input[name^="cart"]').focus(function () {
            $j(this).siblings('button').fadeIn();
        });
    }


    // ==============================================
    // Gift Registry Styles
    // ==============================================

    if ($j('.a-left').length) {
        enquire.register('(max-width: ' + bp.large + 'px)', {
            match: function () {
                $j('.gift-info').each(function() {
                  $j(this).next('td').children('textarea').appendTo(this).children();
                });
            },
            unmatch: function () {
                $j('.left-note').each(function() {
                    $j(this).prev('td').children('textarea').appendTo(this).children();
                });
            }
        });
    }


    // ==============================================
    // Product Listing - Align action buttons/links
    // ==============================================

    // Since the number of columns per grid will vary based on the viewport size, the only way to align the action
    // buttons/links is via JS

    if ($j('.products-grid').length) {

        var alignProductGridActions = function () {
            // Loop through each product grid on the page
            $j('.products-grid').each(function(){
                var gridRows = []; // This will store an array per row
                var tempRow = [];
                productGridElements = $j(this).children('li');
                productGridElements.each(function (index) {
                    // The JS ought to be agnostic of the specific CSS breakpoints, so we are dynamically checking to find
                    // each row by grouping all cells (eg, li elements) up until we find an element that is cleared.
                    // We are ignoring the first cell since it will always be cleared.
                    if ($j(this).css('clear') != 'none' && index != 0) {
                        gridRows.push(tempRow); // Add the previous set of rows to the main array
                        tempRow = []; // Reset the array since we're on a new row
                    }
                    tempRow.push(this);

                    // The last row will not contain any cells that clear that row, so we check to see if this is the last cell
                    // in the grid, and if so, we add its row to the array
                    if (productGridElements.length == index + 1) {
                        gridRows.push(tempRow);
                    }
                });

                $j.each(gridRows, function () {
                    var tallestProductInfo = 0;
                    $j.each(this, function () {
                        // Since this function is called every time the page is resized, we need to remove the min-height
                        // and bottom-padding so each cell can return to its natural size before being measured.
                        $j(this).find('.product-info').css({
                            'min-height': '',
                            'padding-bottom': ''
                        });

                        // We are checking the height of .product-info (rather than the entire li), because the images
                        // will not be loaded when this JS is run.
                        var productInfoHeight = $j(this).find('.product-info').height();
                        // Space above .actions element
                        var actionSpacing = 10;
                        // The height of the absolutely positioned .actions element
                        var actionHeight = $j(this).find('.product-info .actions').height();

                        // Add height of two elements. This is necessary since .actions is absolutely positioned and won't
                        // be included in the height of .product-info
                        var totalHeight = productInfoHeight + actionSpacing + actionHeight;
                        if (totalHeight > tallestProductInfo) {
                            tallestProductInfo = totalHeight;
                        }

                        // Set the bottom-padding to accommodate the height of the .actions element. Note: if .actions
                        // elements are of varying heights, they will not be aligned.
                        $j(this).find('.product-info').css('padding-bottom', actionHeight + 'px');
                    });
                    // Set the height of all .product-info elements in a row to the tallest height
                    $j.each(this, function () {
                        $j(this).find('.product-info').css('min-height', tallestProductInfo);
                    });
                });
            });
        };
        alignProductGridActions();

        // Since the height of each cell and the number of columns per page may change when the page is resized, we are
        // going to run the alignment function each time the page is resized.
        $j(window).on('delayed-resize', function (e, resizeEvent) {
            alignProductGridActions();
        });
    }

    // ==============================================
    // Generic, efficient window resize handler
    // ==============================================

    // Using setTimeout since Web-Kit and some other browsers call the resize function constantly upon window resizing.
    var resizeTimer;
    $j(window).resize(function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $j(window).trigger('delayed-resize', e);
        }, 250);
    });
});

// ==============================================
// PDP - image zoom - needs to be available outside document.ready scope
// ==============================================

var ProductMediaManager = {
    IMAGE_ZOOM_THRESHOLD: 20,
    imageWrapper: null,

    destroyZoom: function() {
        $j('.zoomContainer').remove();
        $j('.product-image-gallery .gallery-image').removeData('elevateZoom');
    },

    createZoom: function(image) {
        // Destroy since zoom shouldn't be enabled under certain conditions
        ProductMediaManager.destroyZoom();
		
		// LT-SOFT: disable zoom
		return;
    },

    swapImage: function(targetImage) {
        targetImage = $j(targetImage);
        targetImage.addClass('gallery-image');

        var imageGallery = $j('.product-image-gallery');

        if(targetImage[0].complete) { //image already loaded -- swap immediately
            imageGallery.find('.gallery-image').removeClass('swiper-slide-active');
            imageGallery.find('.gallery-image').removeClass('swiper-slide-next');
            imageGallery.find('.gallery-image').removeClass('swiper-slide-prev');

            //move target image to correct place, in case it's necessary
            var _src = targetImage.attr('src');
            $j('#image-main').attr('src', _src);

            //reveal new image
            $j('#image-main').addClass('swiper-slide-active');
            $j('#image-main').next().addClass('swiper-slide-next');
            imageGallery.css('transform', 'translate3d(0px, 0px, 0px)');

        } else { //need to wait for image to load
            //add spinner
            imageGallery.addClass('loading');

            //move target image to correct place, in case it's necessary
            var _src = targetImage.attr('src');
            //wait until image is loaded
            imagesLoaded(targetImage, function() {
                //remove spinner
                imageGallery.removeClass('loading');
                _src = targetImage.attr('src');
                $j('#image-main').attr('src', _src);

                //hide old image
                imageGallery.find('.gallery-image').removeClass('swiper-slide-active');
                imageGallery.find('.gallery-image').removeClass('swiper-slide-next');
                imageGallery.find('.gallery-image').removeClass('swiper-slide-prev');

                //reveal new image
                $j('#image-main').addClass('swiper-slide-active');
                $j('#image-main').next().addClass('swiper-slide-next');
                imageGallery.css('transform', 'translate3d(0px, 0px, 0px)');

            });

        }
    },

    wireThumbnails: function() {
        //trigger image change event on thumbnail click
        $j('.product-image-thumbs .thumb-link').click(function(e) {
            e.preventDefault();
            var jlink = $j(this);
            var target = $j('#image-' + jlink.data('image-index'));

            ProductMediaManager.swapImage(target);
        });
    },

    initZoom: function() {
        ProductMediaManager.createZoom($j(".gallery-image.visible")); //set zoom on first image
    },

    init: function() {
        ProductMediaManager.imageWrapper = $j('.product-img-box');

        // Re-initialize zoom on viewport size change since resizing causes problems with zoom and since smaller
        // viewport sizes shouldn't have zoom
        $j(window).on('delayed-resize', function(e, resizeEvent) {
            ProductMediaManager.initZoom();
        });

        ProductMediaManager.initZoom();

        ProductMediaManager.wireThumbnails();

        $j(document).trigger('product-media-loaded', ProductMediaManager);
    }
};

$j(document).ready(function() {
    ProductMediaManager.init();
});

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,J="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===J||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new J.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===J?J.scrollY:e.scrollTop,n=e===J?J.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return J.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===J)return i===J;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?J.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,s,ee={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=J.getComputedStyle(e,null);return J.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new J.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=J.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=J.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||J.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(ee.isObject(a[l])&&ee.isObject(s[l])?ee.extend(a[l],s[l]):!ee.isObject(a[l])&&ee.isObject(s[l])?(a[l]={},ee.extend(a[l],s[l])):a[l]=s[l])}}return a}},te=(i=f.createElement("div"),{touch:J.Modernizr&&!0===J.Modernizr.touch||!!(0<J.navigator.maxTouchPoints||"ontouchstart"in J||J.DocumentTouch&&f instanceof J.DocumentTouch),pointerEvents:!!(J.navigator.pointerEnabled||J.PointerEvent||"maxTouchPoints"in J.navigator&&0<J.navigator.maxTouchPoints),prefixedPointerEvents:!!J.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:J.Modernizr&&!0===J.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in J||"WebkitMutationObserver"in J,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});J.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in J}),I={isIE:!!J.navigator.userAgent.match(/Trident/g)||!!J.navigator.userAgent.match(/MSIE/g),isEdge:!!J.navigator.userAgent.match(/Edge/g),isSafari:(s=J.navigator.userAgent.toLowerCase(),0<=s.indexOf("safari")&&s.indexOf("chrome")<0&&s.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)},n=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},o={components:{configurable:!0}};n.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},n.prototype.once=function(a,i,e){var s=this;if("function"!=typeof i)return s;function r(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];i.apply(s,e),s.off(a,r),r.f7proxy&&delete r.f7proxy}return r.f7proxy=i,s.on(a,r,e)},n.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){(e===i||e.f7proxy&&e.f7proxy===i)&&s.eventsListeners[a].splice(t,1)})}),s},n.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},n.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&ee.extend(a,t.params)})},n.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},o.components.set=function(e){this.use&&this.use(e)},n.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+ee.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},n.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(n,o);var d={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),ee.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=Math.floor(d/t.slidesPerColumn),z=0;z<d;z+=1){T=0;var P=l.eq(z);if(1<t.slidesPerColumn){var k=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=z-($=Math.floor(z/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),k=$+L*x/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(L=Math.floor(z/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==P.css("display")){if("auto"===t.slidesPerView){var I=J.getComputedStyle(P[0],null),D=P[0].style.transform,O=P[0].style.webkitTransform;if(D&&(P[0].style.transform="none"),O&&(P[0].style.webkitTransform="none"),t.roundLengths)T=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0);else if(e.isHorizontal()){var A=parseFloat(I.getPropertyValue("width")),H=parseFloat(I.getPropertyValue("padding-left")),N=parseFloat(I.getPropertyValue("padding-right")),G=parseFloat(I.getPropertyValue("margin-left")),B=parseFloat(I.getPropertyValue("margin-right")),X=I.getPropertyValue("box-sizing");T=X&&"border-box"===X?A+G+B:A+H+N+G+B}else{var Y=parseFloat(I.getPropertyValue("height")),V=parseFloat(I.getPropertyValue("padding-top")),F=parseFloat(I.getPropertyValue("padding-bottom")),R=parseFloat(I.getPropertyValue("margin-top")),q=parseFloat(I.getPropertyValue("margin-bottom")),W=I.getPropertyValue("box-sizing");T=W&&"border-box"===W?Y+R+q:Y+V+F+R+q}D&&(P[0].style.transform=D),O&&(P[0].style.webkitTransform=O),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[z]&&(e.isHorizontal()?l[z].style.width=T+"px":l[z].style.height=T+"px");l[z]&&(l[z].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==z&&(b=b-i/2-g),0===z&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),te.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var j=0;j<p.length;j+=1){var U=p[j];t.roundLengths&&(U=Math.floor(U)),p[j]<e.virtualSize+p[0]&&E.push(U)}p=E}if(!t.centeredSlides){E=[];for(var K=0;K<p.length;K+=1){var _=p[K];t.roundLengths&&(_=Math.floor(_)),p[K]<=e.virtualSize-i&&E.push(_)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var Z=0;if(u.forEach(function(e){Z+=e+(t.spaceBetween?t.spaceBetween:0)}),(Z-=t.spaceBetween)<i){var Q=(i-Z)/2;p.forEach(function(e,t){p[t]=e-Q}),c.forEach(function(e,t){c[t]=e+Q})}}ee.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=L(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),ee.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);ee.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=ee.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(te.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var c={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var u={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&te.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var h={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),a.removeAttr("data-swiper-slide-index")}};var v={setGrabCursor:function(e){if(!(te.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){te.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var m={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&te.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&te.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&te.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},g=function(){var e=J.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:J.cordova||J.phonegap,phonegap:J.cordova||J.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=J.devicePixelRatio||1,t}();function b(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var w={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},y={update:d,translate:p,transition:c,slide:u,loop:h,grabCursor:v,manipulation:m,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=J.screen.width-d)){if(ee.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=ee.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(ee.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=ee.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:ee.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=ee.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=ee.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=ee.now(),ee.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<ee.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?p>=o[P]&&p<o[P+i.slidesPerGroup]&&(z=o[(M=P)+i.slidesPerGroup]-o[P]):p>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(p-o[M])/z;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("touchstart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,te.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var o=!("onTouchStart"!==a.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!te.touch&&g.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||d);d&&a&&e.changeDirection(),ee.extend(e.params,l),ee.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,p&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=J.innerWidth&&(t=s):s>=J.innerWidth&&!t&&(t=s)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push("initialized"),s.push(a.direction),a.freeMode&&s.push("free-mode"),te.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),g.android&&s.push("android"),g.ios&&s.push("ios"),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new J.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},x={},T=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=ee.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(y).forEach(function(t){Object.keys(y[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=y[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=ee.extend({},w);r.useModulesParams(n),r.params=ee.extend({},n,x,s),r.originalParams=ee.extend({},r.params),r.passedParams=ee.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=ee.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return ee.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],te.pointerEvents?p=["pointerdown","pointermove","pointerup"]:te.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},te.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:ee.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.changeDirection=function(a,e){void 0===e&&(e=!0);var t=this,i=t.params.direction;return a||(a="horizontal"===i?"vertical":"horizontal"),a===i||"horizontal"!==a&&"vertical"!==a||("vertical"===i&&(t.$el.removeClass(t.params.containerModifierClass+"vertical wp8-vertical").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),"horizontal"===i&&(t.$el.removeClass(t.params.containerModifierClass+"horizontal wp8-horizontal").addClass(""+t.params.containerModifierClass+a),(I.isIE||I.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a)),t.params.direction=a,t.slides.each(function(e,t){"vertical"===a?t.style.width="":t.style.height=""}),t.emit("changeDirection"),e&&t.update()),t},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),ee.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){ee.extend(x,e)},e.extendedDefaults.get=function(){return x},e.defaults.get=function(){return w},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(n),E={name:"device",proto:{device:g},static:{device:g}},S={name:"support",proto:{support:te},static:{support:te}},C={name:"browser",proto:{browser:I},static:{browser:I}},M={name:"resize",create:function(){var e=this;ee.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){J.addEventListener("resize",this.resize.resizeHandler),J.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){J.removeEventListener("resize",this.resize.resizeHandler),J.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},z={func:J.MutationObserver||J.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new z.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};J.requestAnimationFrame?J.requestAnimationFrame(t):J.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(te.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},P={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){ee.extend(this,{observer:{init:z.init.bind(this),attach:z.attach.bind(this),destroy:z.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},k={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(ee.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var z=0;z<u.length;z+=1)y<=z&&z<=x&&(void 0===c||e?C.push(z):(c<z&&C.push(z),z<p&&S.push(z)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,o={};Object.keys(n).forEach(function(e){o[parseInt(e,10)+s]=n[e]}),t.virtual.cache=o}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;0<=i;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},$={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;ee.extend(e,{virtual:{update:k.update.bind(e),appendSlide:k.appendSlide.bind(e),prependSlide:k.prependSlide.bind(e),removeSlide:k.removeSlide.bind(e),removeAllSlides:k.removeAllSlides.bind(e),renderSlide:k.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},D={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=J.innerWidth,o=J.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},O={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){ee.extend(this,{keyboard:{enabled:!1,enable:D.enable.bind(this),disable:D.disable.bind(this),handle:D.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var A={lastScrollTime:ee.now(),event:-1<J.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=A.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=ee.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<ee.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new J.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!A.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(A.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!A.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(A.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},H={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),ee.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},N={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),ee.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},G={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(te.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(te.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),ee.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=ee.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!te.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!te.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};te.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),ee.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},B={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},X={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!te.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=X.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=X.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=te.gestures?e.scale*a.currentScale:i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!te.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!g.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(g.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=ee.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=ee.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},Y={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},V={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new V.LinearSpline(t.slidesGrid,e.slidesGrid):new V.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof T&&n(r[o]);else r instanceof T&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&ee.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof T&&r(s[a]);else s instanceof T&&e!==s&&r(s)}},F={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},R={init:function(){var e=this;if(e.params.history){if(!J.history||!J.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=R.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||J.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||J.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=R.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=J.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=R.slugify(a.attr("data-history"));J.location.pathname.includes(e)||(i=e+"/"+i);var s=J.history.state;s&&s.value===i||(this.params.history.replaceState?J.history.replaceState({value:i},null,i):J.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(R.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},q={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&J.history&&J.history.replaceState)J.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(J).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(J).off("hashchange",this.hashNavigation.onHashCange)}},W={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=ee.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},j={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},U={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),z=d.shadowScale,P=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+z+", 1, "+P+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},K={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},_={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(te.pointerEvents||te.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},Z={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,ee.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),ee.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):ee.isObject(t.swiper)&&(e.thumbs.swiper=new a(ee.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&L(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},Q=[E,S,C,M,P,$,O,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;ee.extend(e,{mousewheel:{enabled:!1,enable:A.enable.bind(e),disable:A.disable.bind(e),handle:A.handle.bind(e),handleMouseEnter:A.handleMouseEnter.bind(e),handleMouseLeave:A.handleMouseLeave.bind(e),lastScrollTime:ee.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;ee.extend(e,{navigation:{init:H.init.bind(e),update:H.update.bind(e),destroy:H.destroy.bind(e),onNextClick:H.onNextClick.bind(e),onPrevClick:H.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||L(e.target).is(r)||L(e.target).is(s)||(s?t=s.hasClass(a.params.navigation.hiddenClass):r&&(t=r.hasClass(a.params.navigation.hiddenClass)),!0===t?a.emit("navigationShow",a):a.emit("navigationHide",a),s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;ee.extend(e,{pagination:{init:N.init.bind(e),render:N.render.bind(e),update:N.update.bind(e),destroy:N.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&(!0===t.pagination.$el.hasClass(t.params.pagination.hiddenClass)?t.emit("paginationShow",t):t.emit("paginationHide",t),t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;ee.extend(e,{scrollbar:{init:G.init.bind(e),destroy:G.destroy.bind(e),updateSize:G.updateSize.bind(e),setTranslate:G.setTranslate.bind(e),setTransition:G.setTransition.bind(e),enableDraggable:G.enableDraggable.bind(e),disableDraggable:G.disableDraggable.bind(e),setDragPosition:G.setDragPosition.bind(e),onDragStart:G.onDragStart.bind(e),onDragMove:G.onDragMove.bind(e),onDragEnd:G.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){ee.extend(this,{parallax:{setTransform:B.setTransform.bind(this),setTranslate:B.setTranslate.bind(this),setTransition:B.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=X[e].bind(i)}),ee.extend(i,{zoom:t});var s=1;Object.defineProperty(i.zoom,"scale",{get:function(){return s},set:function(e){if(s!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,a=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,a)}s=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){ee.extend(this,{lazy:{initialImageLoaded:!1,load:Y.load.bind(this),loadInSlide:Y.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;ee.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:V.getInterpolateFunction.bind(e),setTranslate:V.setTranslate.bind(e),setTransition:V.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;ee.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(F).forEach(function(e){t.a11y[e]=F[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;ee.extend(e,{history:{init:R.init.bind(e),setHistory:R.setHistory.bind(e),setHistoryPopState:R.setHistoryPopState.bind(e),scrollToSlide:R.scrollToSlide.bind(e),destroy:R.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;ee.extend(e,{hashNavigation:{initialized:!1,init:q.init.bind(e),destroy:q.destroy.bind(e),setHash:q.setHash.bind(e),onHashCange:q.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;ee.extend(t,{autoplay:{running:!1,paused:!1,run:W.run.bind(t),start:W.start.bind(t),stop:W.stop.bind(t),pause:W.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){ee.extend(this,{fadeEffect:{setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){ee.extend(this,{cubeEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){ee.extend(this,{flipEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){ee.extend(this,{coverflowEffect:{setTranslate:_.setTranslate.bind(this),setTransition:_.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){ee.extend(this,{thumbs:{swiper:null,init:Z.init.bind(this),update:Z.update.bind(this),onThumbClick:Z.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===T.use&&(T.use=T.Class.use,T.installModule=T.Class.installModule),T.use(Q),T});
//# sourceMappingURL=swiper.min.js.map

/* Service object */
var service_comment = {
    phone_num_regex: /(0|\+)([0-9]{3})([0-9]{6,9})([^0-9^-]|\<|$)/m,
    // Detect URL
    urlify: function(text) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function(url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        })
    },
    // Hide phone no
    hidePhoneNo: function(str, regex) {
        var retstr = str;
        var rx = service_comment.phone_num_regex;
        if (regex) {
            rx = regex;
        }
        retstr = str.replace(rx, "$1$2******$4");

        return retstr;
    },
    _commentToHtml: function(data) {
        var html = '';
        jQuery.each(data.comments, function(key, comment) {
            var parent_content = service_comment.hidePhoneNo(comment.content);
            html = html + '<div class="item-comment" >';
                html = html + '<div id = "item_' + comment.id + '" class="item-comment__box-cmt">';

                var btnPin = '';
                var fncBtnPin = '';
                switch (comment.is_pin) {
                    case '0':
                        btnPin = 'icon-cps-pin';
                        fncBtnPin = 'pinComment.pinComment(' + comment.id + ')';
                        break;
                    case '1':
                        btnPin = 'icon-cps-unpin';
                        fncBtnPin = 'pinComment.unPinComment(' + comment.id + ')';
                        break;
                }

                if (comment.is_admin) {
                    html = html + '<div class="box-cmt__box-info">';
                        html = html + '<div class="box-info">';
                            if (comment.name) {
                                html = html + '<i class="cps-icons icon-cps"></i>';
                            } else {
                                html = html + '<div class="box-info__avatar">G</div>';
                            }
                            html = html + '<p class="box-info__name">' + comment.name + '</p>';
                            html = html + '<span class="box-info__tag">QTV</span>';
                        html = html + '</div>';
                        html = html + '<p class="box-time-cmt"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path id="clock" d="M7.72,8.78,5.25,6.31V3h1.5v2.69L8.78,7.72ZM6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,10.5A4.5,4.5,0,1,1,10.5,6,4.5,4.5,0,0,1,6,10.5Z" fill="#707070"/></svg>&nbsp;'+ (comment.diff_posted_date ? comment.diff_posted_date : 'vài giây trước') + '</p>';
                        html = html + '<a class="' + btnPin + '" onclick="' + fncBtnPin + '"></a>';
                    html = html + '</div>';
                    parent_content = service_comment.urlify(comment.content);
                } else {
                    html = html + '<div class="box-cmt__box-info">';
                        html = html + '<div class="box-info">';
                            if (comment.name) {
                                html = html + '<div class="box-info__avatar">' + comment.name.charAt(0) + '</div>';
                            } else {
                                html = html + '<div class="box-info__avatar">G</div>';
                            }
                            html = html + '<p class="box-info__name">' + comment.name + '</p>';
                        html = html + '</div>';
                        html = html + '<p class="box-time-cmt"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path id="clock" d="M7.72,8.78,5.25,6.31V3h1.5v2.69L8.78,7.72ZM6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,10.5A4.5,4.5,0,1,1,10.5,6,4.5,4.5,0,0,1,6,10.5Z" fill="#707070"/></svg>&nbsp;'+ (comment.diff_posted_date ? comment.diff_posted_date : 'vài giây trước') + '</p>';
                        html = html + '<a class="' + btnPin + '" onclick="' + fncBtnPin + '"></a>';
                    html = html + '</div>';
                }

                // html = html + '</div>';
                html = html + '<div class="box-cmt__box-question">';
                html = html + '<p>'+parent_content.replace(/<br\/>(|\s)<br\/>/gi, "<br>")+'</p>';
                html = html + '<a href="javascript:void(0)" class="btn-rep-cmt respondent" onclick="comment.replyCmtAction(' + comment.id + ',' + comment.ticket_id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 12 10.8"><path id="chat" d="M3.48,8.32V4.6H1.2A1.2,1.2,0,0,0,0,5.8V9.4a1.2,1.2,0,0,0,1.2,1.2h.6v1.8l1.8-1.8h3A1.2,1.2,0,0,0,7.8,9.4V8.308a.574.574,0,0,1-.12.013H3.48ZM10.8,1.6H5.4A1.2,1.2,0,0,0,4.2,2.8V7.6H8.4l1.8,1.8V7.6h.6A1.2,1.2,0,0,0,12,6.4V2.8a1.2,1.2,0,0,0-1.2-1.2Z" transform="translate(0 -1.6)" fill="#707070"/></svg>&nbsp;Trả lời</a>';
                html = html + '</div>';

                if (comment.replies.length > 0) {
                    html = html + '<div class="item-comment__box-rep-comment">';
                        html = html + '<div class="list-rep-comment">';
                        jQuery.each(comment.replies, function(key, reply) {
                            var reply_content = service_comment.hidePhoneNo(reply.content);
                            
                            html = html + '<div class="item-rep-comment" id="item_' + reply.id + '">';
                            
                            //html = html + '<div class="rowuser"><a href="javascript:void(0)"><div>'+reply.name.charAt(0)+'</div><strong>'+reply.name+'</strong></a>';
                            if (reply.is_admin) {
                                html = html + '<div class="box-cmt__box-info">';
                                    html = html + '<div class="box-info">';
                                        if (reply.name) {
                                            html = html + '<i class="cps-icons icon-cps"></i>';
                                        } else {
                                            html = html + '<div class="box-info__avatar">G</div>';
                                        }
                                        html = html + '<p class="box-info__name">' + reply.name + '</p>';
                                        html = html + '<span class="box-info__tag">QTV</span>';
                                    html = html + '</div>';
                                    html = html + '<p class="box-time-cmt"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path id="clock" d="M7.72,8.78,5.25,6.31V3h1.5v2.69L8.78,7.72ZM6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,10.5A4.5,4.5,0,1,1,10.5,6,4.5,4.5,0,0,1,6,10.5Z" fill="#707070"/></svg>&nbsp;'+reply.diff_posted_date+'</p>';
                                    html = html + '<a class="' + btnPin + '" onclick="' + fncBtnPin + '"></a>';
                                html = html + '</div>';
                            } else {
                                html = html + '<div class="box-cmt__box-info">';
                                    html = html + '<div class="box-info">';
                                        if (reply.name) {
                                            html = html + '<div class="box-info__avatar">' + reply.name.charAt(0) + '</div>';
                                        } else {
                                            html = html + '<div class="box-info__avatar">G</div>';
                                        }
                                        html = html + '<p class="box-info__name">' + reply.name + '</p>';
                                    html = html + '</div>';
                                    html = html + '<p class="box-time-cmt"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path id="clock" d="M7.72,8.78,5.25,6.31V3h1.5v2.69L8.78,7.72ZM6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,10.5A4.5,4.5,0,1,1,10.5,6,4.5,4.5,0,0,1,6,10.5Z" fill="#707070"/></svg>&nbsp;'+reply.diff_posted_date+'</p>';
                                    html = html + '<a class="' + btnPin + '" onclick="' + fncBtnPin + '"></a>';
                                html = html + '</div>';
                            }
                            html = html + '<div class="box-cmt__box-question">';
                                html = html + '<p>'+reply_content.replace(/<br\/>(|\s)<br\/>/gi, "<br>")+'</p>';
                                html = html + '<a href="javascript:void(0)" class="btn-rep-cmt respondent" onclick="comment.replyCmtAction(' + comment.id + ',' + comment.ticket_id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 12 10.8"><path id="chat" d="M3.48,8.32V4.6H1.2A1.2,1.2,0,0,0,0,5.8V9.4a1.2,1.2,0,0,0,1.2,1.2h.6v1.8l1.8-1.8h3A1.2,1.2,0,0,0,7.8,9.4V8.308a.574.574,0,0,1-.12.013H3.48ZM10.8,1.6H5.4A1.2,1.2,0,0,0,4.2,2.8V7.6H8.4l1.8,1.8V7.6h.6A1.2,1.2,0,0,0,12,6.4V2.8a1.2,1.2,0,0,0-1.2-1.2Z" transform="translate(0 -1.6)" fill="#707070"/></svg>&nbsp;Trả lời</a>';
                            html = html + '</div>';
                        });
                        html = html + '</div>';
                    html = html + '</div>';
                }
            html = html + '<div id="form_reply_' + comment.id + '" class="form_reply_wrap"></div>';
            html = html + '</div>';
            html = html + '</div>';
            html = html + '</div>';
        });
        return html;
    }
};
/* Comment object */
var comment = {
    init: function() {
        comment.load();
    },
    productCommentId: '',
    pageIndex: 1,
    // Comment send
    sendCmt: function() {
        jQuery("#comment-error").remove();
        var currentContent = jQuery('textarea#review_field').val();
        if (!currentContent) {
            jQuery(".form-add").append('<span id="comment-error" class="error">Vui lòng nhập bình luận</span>');
            return false;
        } else if (currentContent.length < 10) {
            jQuery(".form-add").append('<span id="comment-error" class="error">Bình luận của bạn quá ngắn.</span>');
            return false;
        } else {
            jQuery("#comment-error").remove();
        }

        jQuery('#lastParentId').val('');
        jQuery('#lastCmtContent').val(currentContent);
        jQuery("#popup_cmt_form").modal('show');
    },
    replyCmtAction: function(parentId, ticketId) {
        jQuery('textarea#review_field').val('');
        var html = '';
        html = html + '<form id="form_reply_' + parentId + '" class="form_reply">';
        html = html + '<textarea class="cps-textarea" name="detail" id="form_reply_field_' + parentId + '" cols="5" rows="4" class="required-entry" placeholder="Xin mời để lại câu hỏi, CellphoneS sẽ trả lời trong 30 phút từ 8h - 22h mỗi ngày ."></textarea>';
        // html = html + '<div class="f-left user_action_wrap"><div class="cmt_left"><a href="" target="_blank" class="poli">Quy định đăng bình luận</a></div>';
        html = html + '<a href="javascript:void(0)" id="btnSendCmt" class="btn-send-cmt" onclick="comment.sendCmtReply(' + parentId + ',' + ticketId + ');">Gửi</a>';
        jQuery('.form_reply_wrap').html('');
        jQuery('.main_form .user_action_wrap').hide();
        jQuery('#form_reply_' + parentId).html(html);
        jQuery('#lastCmtContent').val(jQuery('textarea#form_reply_field_' + parentId).val());
        jQuery('#lastParentId').val(parseInt(parentId));
        jQuery('#lastTicketId').val(parseInt(ticketId));
    },
    // Reply comment send
    sendCmtReply: function(parentId, ticketId) {
        jQuery("#comment-error").remove();
        var currentContent = jQuery('textarea#form_reply_field_' + parentId).val();
        if (!currentContent) {
            jQuery('#form_reply_' + parentId).after('<span id="comment-error" class="error">Vui lòng nhập bình luận</span>');
            return false;
        } else if (currentContent.length < 10) {
            jQuery('#form_reply_' + parentId).after('<span id="comment-error" class="error">Bình luận của bạn quá ngắn. Vui lòng nhập lại</span>');
            return false;
        } else {
            jQuery("#comment-error").remove();
        }

        jQuery('#lastCmtContent').val(currentContent);
        jQuery('#lastParentId').val(parentId);
        jQuery('#lastTicketId').val(ticketId);
        jQuery("#popup_cmt_form").modal('show');
    },
    backToMainCmt: function() {
        jQuery('.form_reply_wrap').html('');
        jQuery('.main_form .user_action_wrap').show();
    },
    load: function() {
        var commentCount = parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('count'));
        var commentLoaded = parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('load'));
        var pageSize = 10;
        jQuery.ajax({
            type: "POST",
            url: "/ltpextra/comment/loadComment",
            data: {
                "page_size": pageSize,
                "page_index": comment.pageIndex,
                "product_id": comment.productCommentId
            },
            beforeSend: function() {
                //jQuery('#simple_loader').show();
            },
            success: function(result) {
                var html = '';
                var data = JSON.parse(result);

                jQuery('#product_comment_list_' + comment.productCommentId).data('index', comment.pageIndex + 1);
                jQuery('#product_comment_list_' + comment.productCommentId).data('load', commentLoaded + parseInt(data.return));
                jQuery('#product_comment_list_' + comment.productCommentId).data('count', data.count);
                jQuery('#total_comment').html('Hỏi và đáp (' + data.total + ' bình luận)');

                html = service_comment._commentToHtml(data);

                jQuery('#product_group_' + comment.productCommentId).append(html);
                if (parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('load')) == parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('count')) || data.count < 10 ) {
                    jQuery('#cmt_loadmore').prop("onclick", null).off("click");
                    jQuery('#cmt_loadmore').css('display', 'none');
                } else {
                    jQuery('#cmt_loadmore').css('display', 'flex');
                }
                jQuery('#product_comment_list_' + comment.productCommentId).html(html);

                // Pin comments
                pinComment.checkAuthorize();
            }
        });
    },
    loadMore: function() {
        var commentCount = parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('count'));
        var commentLoaded = parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('load'));
        var pageIndex = parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('index'));
        var pageSize = 10;
        jQuery.ajax({
            type: "POST",
            url: "/ltpextra/comment/loadComment",
            data: {
                "page_size": pageSize,
                "page_index": pageIndex,
                "product_id": comment.productCommentId
            },
            beforeSend: function() {
                //jQuery('#simple_loader').show();
            },
            success: function(result) {
                var html = '';
                var data = JSON.parse(result);

                html = service_comment._commentToHtml(data);

                jQuery('#product_comment_list_' + comment.productCommentId).data('index', pageIndex + 1);
                jQuery('#product_comment_list_' + comment.productCommentId).data('load', commentLoaded + parseInt(data.return));
                jQuery('#product_comment_list_' + comment.productCommentId).data('count', data.count);

                jQuery('#product_group_' + comment.productCommentId).append(html);
                if (parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('load')) == parseInt(jQuery('#product_comment_list_' + comment.productCommentId).data('count'))) {
                    jQuery('#cmt_loadmore').prop("onclick", null).off("click");
                    jQuery('#cmt_loadmore').hide();
                }
                jQuery('#product_comment_list_' + comment.productCommentId).append(html);

                // Pin comments
                pinComment.checkAuthorize();
            }
        });
    }
};
/* Page Comment object */
var pageComment = {
    init: function() {
        pageComment.load();
    },
    pageId: '',
    pageUrl: '',
    pageIndex: 1,
    // Comment send
    sendCmt: function() {
        jQuery("#comment-error").remove();
        var currentContent = jQuery('textarea#review_field').val();
        if (!currentContent) {
            jQuery(".form-add").after('<span id="comment-error" class="error">Vui lòng nhập bình luận</span>');
            return false;
        } else if (currentContent.length < 10) {
            jQuery(".form-add").after('<span id="comment-error" class="error">Bình luận của bạn quá ngắn.</span>');
            return false;
        } else {
            jQuery("#comment-error").remove();
        }

        jQuery('#lastParentId').val('');
        jQuery('#lastCmtContent').val(currentContent);
        jQuery("#popup_cmt_form").modal('show');
    },
    replyCmtAction: function(parentId, ticketId) {
        jQuery('textarea#review_field').val('');
        var html = '';
        html = html + '<form id="form_reply_' + parentId + '" class="form_reply">';
        html = html + '<textarea class="cps-textarea" name="detail" id="form_reply_field_' + parentId + '" cols="5" rows="4" class="required-entry" placeholder="Xin mời để lại câu hỏi, CellphoneS sẽ trả lời trong 30 phút từ 8h - 22h mỗi ngày ."></textarea>';
        // html = html + '<div class="f-left user_action_wrap"><div class="cmt_left"><a href="" target="_blank" class="poli">Quy định đăng bình luận</a></div>';
        html = html + '<a href="javascript:void(0)" id="btnSendCmt" class="btn-send-cmt" onclick="pageComment.sendCmtReply(' + parentId + ',' + ticketId + ');">Gửi</a>';
        jQuery('.form_reply_wrap').html('');
        jQuery('.main_form .user_action_wrap').hide();
        jQuery('#form_reply_' + parentId).html(html);
        jQuery('#lastCmtContent').val(jQuery('textarea#form_reply_field_' + parentId).val());
        jQuery('#lastParentId').val(parseInt(parentId));
        jQuery('#lastTicketId').val(parseInt(ticketId));
    },
    // Reply comment send
    sendCmtReply: function(parentId, ticketId) {
        jQuery("#comment-error").remove();
        var currentContent = jQuery('textarea#form_reply_field_' + parentId).val();
        if (!currentContent) {
            jQuery('#form_reply_' + parentId).after('<span id="comment-error" class="error">Vui lòng nhập bình luận</span>');
            return false;
        } else if (currentContent.length < 10) {
            jQuery('#form_reply_' + parentId).after('<span id="comment-error" class="error">Bình luận của bạn quá ngắn. Vui lòng nhập lại</span>');
            return false;
        } else {
            jQuery("#comment-error").remove();
        }

        jQuery('#lastCmtContent').val(currentContent);
        jQuery('#lastParentId').val(parentId);
        jQuery('#lastTicketId').val(ticketId);
        jQuery("#popup_cmt_form").modal('show');
    },
    backToMainCmt: function() {
        jQuery('.form_reply_wrap').html('');
        jQuery('.main_form .user_action_wrap').show();
    },
    load: function() {
        var commentCount = parseInt(jQuery('#page_comment_list').data('count'));
        var commentLoaded = parseInt(jQuery('#page_comment_list').data('load'));
        var pageSize = 10;
        jQuery.ajax({
            type: "POST",
            url: "/ltpextra/comment/loadPageComment",
            data: {
                "page_size": pageSize,
                "page_index": pageComment.pageIndex,
                "page_url": pageComment.pageUrl
            },
            beforeSend: function() {
                //jQuery('#simple_loader').show();
            },
            success: function(result) {
                var html = '';
                var data = JSON.parse(result);

                jQuery('#page_comment_list').data('index', pageComment.pageIndex + 1);
                jQuery('#page_comment_list').data('load', commentLoaded + parseInt(data.return));
                jQuery('#page_comment_list').data('count', data.count);
                jQuery('#total_comment').html('Hỏi và đáp (' + data.total + ' bình luận)');
                html = service_comment._commentToHtml(data);

                if (parseInt(jQuery('#page_comment_list').data('load')) == parseInt(jQuery('#page_comment_list').data('count'))) {
                    jQuery('#cmt_loadmore').prop("onclick", null).off("click");
                    jQuery('#cmt_loadmore').css('display', 'none');
                } else {
                    jQuery('#cmt_loadmore').css('display', 'flex');
                }
                jQuery('#page_comment_list').html(html);
            }
        });
    },
    loadMore: function() {
        var commentCount = parseInt(jQuery('#page_comment_list').data('count'));
        var commentLoaded = parseInt(jQuery('#page_comment_list').data('load'));
        var pageIndex = parseInt(jQuery('#page_comment_list').data('index'));
        var pageSize = 10;
        jQuery.ajax({
            type: "POST",
            url: "/ltpextra/comment/loadPageComment",
            data: {
                "page_size": pageSize,
                "page_index": pageIndex,
                "page_url": pageComment.pageUrl
            },
            beforeSend: function() {
                //jQuery('#simple_loader').show();
            },
            success: function(result) {
                var html = '';
                var data = JSON.parse(result);

                html = service_comment._commentToHtml(data);
                jQuery('#page_comment_list').data('index', pageIndex + 1);
                jQuery('#page_comment_list').data('load', commentLoaded + parseInt(data.return));
                jQuery('#page_comment_list').data('count', data.count);

                if (parseInt(jQuery('#page_comment_list').data('load')) == parseInt(jQuery('#page_comment_list').data('count'))) {
                    jQuery('#cmt_loadmore').prop("onclick", null).off("click");
                    jQuery('#cmt_loadmore').css('display', 'none');
                } else {
                    jQuery('#cmt_loadmore').css('display', 'flex');
                }
                jQuery('#page_comment_list').append(html);
            }
        });
    }
};
/* Pin Comment */
var pinComment = {
    checkAuthorize: function() {
        jQuery.ajax({
            type: "GET",
            url: "/ltpextra/comment/authorize",
            success: function(result) {
                var data = pinComment.formatData(result);
                if (data && data !== null) {
                    jQuery('.btn-pin').css('display', 'block');
                } else {
                    jQuery('.btn-pin').css('display', 'none');
                }
            }
        });
    },
    pinComment: function(commentId) {
        jQuery.ajax({
            type: "POST",
            url: "/ltpextra/comment/updatePinComment",
            data: {
                "product_id": comment.productCommentId,
                "comment_id": commentId,
                "is_pin": 1,
                "type": "pin",
            },
            success: function(result) {
                location.reload();
            }
        });
    },
    unPinComment: function(commentId) {
        jQuery.ajax({
            type: "POST",
            url: "/ltpextra/comment/updatePinComment",
            data: {
                "product_id": comment.productCommentId,
                "comment_id": commentId,
                "is_pin": 0,
                "type": "unpin",
            },
            success: function(result) {
                location.reload();
            }
        });
    },
    formatData: function(result) {
        clearResult = /(^\<\!\-\-)([A-Za-z0-9\s\_\-\:]*)(\>$)/gm;
        result = result.replace(clearResult, "").trim();
        result = JSON.parse(result);
        return result;
    }
}
/* Show More */
var showMoreContent = {
    hide: function(_class) {
        if (jQuery(_class).length > 0) {
            var wrap = jQuery(_class);
            var current_height = wrap.height();
            var your_height = 500;
            if (current_height > your_height) {
                wrap.css('height', your_height + 'px');
                wrap.append(function() {
                    return '<div class="product-left_blog-content_showmore"><a title="Đọc thêm" href="javascript:void(0);" class="button_readmore">Xem thêm đánh giá <i class="fa fa-angle-down"></i></a></div>';
                });
                jQuery('body').on('click', '.product-left_blog-content_showmore', function() {
                    wrap.removeAttr('style');
                    jQuery('body .product-left_blog-content_showmore').remove();
                });
            }
        }
    }
}


jQuery(document).ready(function () {
    swiper.init();
    lazyLoad.init();
    headerOverlay.init();
    filter.init();
    sideNav.init();
});

let cpsLazy = new LazyLoad({
    elements_selector: ".cpslazy",
    load_delay: 200
});

var format_price = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
});

var blackfriday = {
    data: {
        arr_data_id: []
    },
    init: function () {

    },
    methods: {
        checkBlackFriday: function (product_id) {
            jQuery.ajax({
                method: "GET",
                url: "https://catalog.cps.onl/api/check?id=" + product_id,
                dataType: "json",
                beforeSend: function () {

                },
                success: function (response) {
                    if (response.Data.status) {
                        let data = response.Data.data;
                        let type = data['type'];
                        let from_date = data['from'];
                        let to_date = data['to'];
                        let sale_price = data['sale_price'];
                        blackfriday.data.arr_data_id = data['exclude_id'];

                        blackfriday.methods.setCountDown(from_date, to_date, type, sale_price);
                    }
                },
                error: function (jqXHR, exception) {
                    console.log(jqXHR);
                },
            });
        },
        setCountDown: function (from_date, to_date, type, sale_price) {
            let now = new Date();
            now = (Date.parse(now) / 1000);

            let value_from = new Date(from_date);
            value_from.setDate(value_from.getDate() + 0);
            from = (Date.parse(value_from) / 1000);

            let value_to = new Date(to_date);
            value_to.setDate(value_to.getDate() + 0);
            to = (Date.parse(value_to) / 1000);

            if (now >= from && now <= to) {
                if (jQuery('#boxHotSale').length > 0) jQuery('#boxHotSale').hide();
                jQuery('#boxBlackFriday').removeClass('hidden').addClass(type == "flash_sale" ? 'black-friday-flash-sale' : 'black-friday');
                jQuery('#boxBlackFriday .hot-sale__box-countdown .title').html('Kết thúc sau&nbsp;');

                if (sale_price > 0) {
                    jQuery('section.cps-section .block-detail-product .box-detail-product .detail-product__box-center .box-info .box-info__box-price .special-price').text(format_price.format(sale_price));
                    if (jQuery('#configurable_swatch_color li>a>p>span').length > 0) {
                        jQuery('#configurable_swatch_color li').each(function () {
                            if (blackfriday.data.arr_data_id.indexOf(jQuery(this).attr("data-id")) == -1) {
                                jQuery(this).children('a').children('p').children('span').text(format_price.format(sale_price));
                            }
                        })
                    }
                    if (jQuery('section.cps-section .block-detail-product .box-detail-product .detail-product__box-center .box-linked .list-linked .item-linked.active>span').length > 0) {
                        jQuery('section.cps-section .block-detail-product .box-detail-product .detail-product__box-center .box-linked .list-linked .item-linked.active>span').text(format_price.format(sale_price));
                    }
                }

                setInterval(function () {
                    countDown.methods.countDown(to_date, '#boxBlackFriday .hot-sale__box-countdown');
                }, 1000);
            } else if (now < from) {
                // if (from - now <= 86400 && jQuery('#boxHotSale').length <= 0) {
                // if (jQuery('#boxHotSale').length <= 0) {
                if (jQuery('#boxHotSale').length > 0) jQuery('#boxHotSale').hide();
                jQuery('#boxBlackFriday').removeClass('hidden').addClass(type == "flash_sale" ? 'black-friday-flash-sale' : 'black-friday');
                jQuery('#boxBlackFriday .hot-sale__box-countdown .title').html('Bắt đầu sau&nbsp;');
                setInterval(function () {
                    countDown.methods.countDown(new Date(value_from), '#boxBlackFriday .hot-sale__box-countdown');
                }, 1000);
                // }
            }
        }
    }
}

var header = {
    data: {

    },
    init: function () {

    },
    methods: {
        hideMenuCate: function () {
            var boxHeaderMenu = jQuery("header.cps-header nav.cps-navbar #btnHeaderMenu");
            var heightHeader = jQuery("header.cps-header nav.cps-navbar .cps-navbar__box-main").height();
            var boxSlidingMenu = jQuery("section.cps-section .block-sliding-home .block-sliding-home__box-left>.box-list-menu");

            if (boxSlidingMenu.length) {
                var top = boxSlidingMenu.offset().top;
                var height = boxSlidingMenu.height();
                var offsettop = (top + height) - heightHeader;

                jQuery(window).on('scroll', function () {
                    if (jQuery(window).scrollTop() < offsettop) {
                        boxHeaderMenu.css({ 'pointer-events': 'none' });
                    } else {
                        boxHeaderMenu.css({ 'pointer-events': 'unset' });
                    }
                });
            }
        }
    }
}

var swiper = {
    data: {

    },
    init: function () {
        swiper.methods.slidingHome();
        swiper.methods.slidingCate();
        swiper.methods.hotSale();
        swiper.methods.listProduct();
    },
    methods: {
        slidingHome: function () {
            var swiper_sliding_thumbs = new Swiper('.block-sliding-home .gallery-thumbs', {
                slidesPerView: 5,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            var swiper_sliding_top = new Swiper('.block-sliding-home .gallery-top', {
                loop: true,
                lazy: {
                    loadPrevNext: true,
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.block-sliding-home .swiper-button-next',
                    prevEl: '.block-sliding-home .swiper-button-prev',
                },
                thumbs: {
                    swiper: swiper_sliding_thumbs
                }
            });
        },
        slidingCate: function () {
            var swiper_sliding_top = new Swiper('.block-sliding .sliding-cate', {
                spaceBetween: 20,
                loop: true,
                lazy: {
                    loadPrevNext: true,
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.block-sliding .sliding-cate .swiper-button-next',
                    prevEl: '.block-sliding .sliding-cate .swiper-button-prev',
                },
                pagination: {
                    el: '.block-sliding .sliding-cate .swiper-pagination',
                    clickable: true,
                },
            });
        },
        hotSale: function () {
            var swiper_hot_sale = new Swiper('.block-hotsale .box-products .swiper-container', {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 10,
                loopFillGroupWithBlank: true,
                observer: true,
                observeParents: true,
                lazy: {
                    loadPrevNext: true,
                },
                navigation: {
                    nextEl: '.block-hotsale .box-products .swiper-button-next',
                    prevEl: '.block-hotsale .box-products .swiper-button-prev',
                },
            });
        },
        listProduct: function () {
            var swiper_list_product = new Swiper('.box-list-product .swiper-container', {
                slidesPerView: 5,
                slidesPerGroup: 5,
                // spaceBetween: 30,
                loop: false,
                loopFillGroupWithBlank: false,
                lazy: {
                    loadPrevNext: true,
                },
                // pagination: {
                //     el: '.box-flashsale .swiper-pagination',
                //     clickable: true,
                // },
                navigation: {
                    nextEl: '.box-list-product .swiper-button-next',
                    prevEl: '.box-list-product .swiper-button-prev',
                },
            });
        }
    }
}

var lazyLoad = {
    init: function () {
        let cpsLazy = new LazyLoad({
            elements_selector: ".cpslazy",
            load_delay: 200
        });
    }
}

var countDown = {
    data: {
        flash_sale: false,
    },
    init: function () {

    },
    methods: {
        countDown: function (to_date, element) {
            var endTime = new Date(to_date);
            endTime = (Date.parse(endTime) / 1000);

            let now = new Date();
            now = (Date.parse(now) / 1000);

            let timeLeft = endTime - now;

            let days = Math.floor(timeLeft / 86400);
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

            if (days < "10") { days = "0" + days; }
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }

            jQuery(element + " #days").html(days);
            jQuery(element + " #hours").html(hours);
            jQuery(element + " #minutes").html(minutes);
            jQuery(element + " #seconds").html(seconds);
        }
    }
}

var headerOverlay = {
    init: function () {
        headerOverlay.methods.boxHeaderMenu();
        headerOverlay.methods.selectlocal();
    },
    methods: {
        boxHeaderMenu: function () {
            jQuery("#btnHeaderMenu").hover(function () {
                jQuery(".header-overlay").addClass("active");
            }, function () {
                if (!(jQuery(".box-local-store").hasClass('open'))) {
                    jQuery(".header-overlay").removeClass("active");
                }
            });
        },
        selectlocal: function () {
            jQuery(".box-local-store").on("show.bs.dropdown", function () {
                jQuery(".header-overlay").addClass("active");
            });
            jQuery(".box-local-store").on("hide.bs.dropdown", function () {
                jQuery(".header-overlay").removeClass("active");
            });
        }
    }
}

var button = {
    data: {
        page: 1,
        param: jQuery('#param_lm'),
        count_prdct: jQuery('#count_prdct').val(),
        fearture_prdct: jQuery('#fearturedPrdct').val(),
    },
    init: function () {
        if (typeof this.data.param.val() != 'undefined') {
            this.data.param = this.data.param.val().replace(/<|>|%|\+|\/|"|'/gi, '');
            button.methods.showMoreBlog();
        }
    },
    methods: {
        showMoreBlog: function () {
            var wrap = jQuery('.block-blog-content .blog-content');
            if (wrap.length > 0) {
                var current_height = wrap.height();
                var your_height = 400;

                if (current_height > your_height) {
                    wrap.css({ 'height': your_height + 'px' });
                    wrap.parent().append(`<div class="box-btn-show-more"><a class="btn-show-more cta-xem-them-bai-viet">Xem thêm&emsp;<i class="fas fa-chevron-down"></i></a></div>`);
                    jQuery('.block-blog-content .box-btn-show-more .btn-show-more').click(function () {
                        wrap.removeAttr('style');
                        jQuery(this).parent().remove();
                    });
                }
            }
        },
        loadMoreProduct: function (cate_id, parent_id) {
            ++button.data.page;
            jQuery.ajax({
                method: "GET",
                url: "https://cellphones.com.vn/lapi/LoadMoreProductCate/index/?page=" + button.data.page + button.data.param + "&fearture=" + button.data.fearture_prdct,
                dataType: "json",
                beforeSend: function () {
                    jQuery('.block-products .box-products .btn-load-more').html('Đang tải ...');
                },
                success: function (response) {
                    if (response.length > 0) {
                        const list_product = response;
                        button.data.count_prdct = button.data.count_prdct - list_product.length;
                        jQuery('.block-products .box-products .btn-load-more').html('Xem thêm ' + button.data.count_prdct + ' sản phẩm  <i class="fas fa-chevron-down"></i>');
                        var html = printHtml.methods.printListProduct(cate_id, parent_id, list_product, button.data.count_prdct);
                        if (list_product.length > 0) {
                            jQuery('.block-products .list-product').append(html);
                            cpsLazy.update();
                        }
                    }
                },
                error: function (jqXHR, exception) {
                    console.log(jqXHR);
                },
            });
        }
    }
}

var viewMedia = {
    data: {

    },
    init: function () {

    },
    methods: {
        changeVideo: function (id, link) {
            var html = `<iframe src="` + link + `" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="560" height="315"></iframe>`;
            jQuery('.cps-media-view .box-view-video .view-video').html(html);
            jQuery('#' + id).parent().siblings().removeClass('select');
            jQuery('#' + id).parent().addClass('select');
        }
    }
}

var filter = {
    data: {

    },
    init: function () {
        filter.methods.dropdownFilter();
        // setTimeout(function() {
        //     filter.methods.hideFilterBrand();
        // }, 3000);
    },
    methods: {
        dropdownFilter: function () {
            jQuery('.block-filter .box-list-filter .cps-select .btn-filter').on("click", function (e) {
                e.stopPropagation();
                jQuery(this).addClass('active');
                jQuery(this).parent().siblings('.cps-select').children('.btn-filter').removeClass('active');
                jQuery(this).next('.box-select').show();
                jQuery(this).parent().siblings('.cps-select').children('.box-select').hide();
            });
            jQuery('.block-filter .box-list-filter .cps-select .box-select').on("click", function (e) {
                e.stopPropagation();
            });
            jQuery('body').click(function () {
                jQuery('.block-filter .box-list-filter .cps-select .btn-filter').removeClass('active');
                jQuery('.block-filter .box-list-filter .cps-select .box-select').hide();
            });
        },
        checkFilter: function () {
            var tag = jQuery('.filtered .box-list-filter .list-filter>a');
            var select = jQuery('.filter__block-list-filter .box-list-filter .cps-select .box-select>a');
            for (let i = 0; i < tag.length; i++) {
                var tag_item = tag[i];
                var tag_text = jQuery(tag_item).text().trim();

                if (tag_text == 'Tình trạng kho: Còn hàng') {
                    jQuery('.cps-select.item-filter .btn-filter[data-name="stock_available"]').addClass('selected');
                }

                for (let y = 0; y < select.length; y++) {
                    var select_item = select[y];
                    var select_text = jQuery(select_item).text().trim();
                    if (tag_text.indexOf(select_text) >= 0) {
                        jQuery(select_item).addClass('selected');
                        jQuery(select_item).attr('href', jQuery(tag_item).attr('href'));
                        jQuery(select_item).parent().siblings('.btn-filter').addClass('selected');
                    }
                }
            }
        },
        checkSingleFilter: function () {
            var tag = jQuery('.filtered .box-list-filter .list-filter>a');

        },
        checkMoreFilter: function () {
            var tag = jQuery('.filtered .box-list-filter .list-filter>a');
            var filter = jQuery('.btn-more-filter+.box-select .filter__block-list-filter .list-filter .item-filter');
            for (let i = 0; i < tag.length; i++) {
                var tag_item = tag[i];
                var tag_text = jQuery(tag_item).text().trim();
                for (let y = 0; y < filter.length; y++) {
                    var filter_item = filter[y];
                    var filter_text = jQuery(filter_item).text().trim();
                    if (tag_text.indexOf(filter_text) >= 0) {
                        jQuery(filter_item).addClass('selected');
                        jQuery(filter_item).attr('href', jQuery(tag_item).attr('href'));
                        jQuery('.filter__block-list-filter .box-list-filter .list-filter .btn-more-filter').addClass('selected');
                    }
                }
            }
        },
        hideFilterBrand: function () {
            var lastTop = -1;
            var rowCount = 0;
            var itemBrand = jQuery('.block-filter .filter__block-list-brand .box-list-brand .list-brand .item-brand');
            itemBrand.each(function (i) {
                var top = jQuery(this).position().top;
                if (top != lastTop) {
                    rowCount++;
                    lastTop = top;
                }
                if (rowCount >= 2) {
                    jQuery(this).addClass('hidden');
                }
            });
            if (rowCount >= 2) {
                itemBrand.not('.hidden').last().addClass('hidden');
                itemBrand.not('.hidden').last().addClass('hidden');
                itemBrand.not('.hidden').last().addClass('hidden');
                itemBrand.parent().append('<a id="showAllBrand" class="item-brand color-black" onclick="filter.methods.showAllBrand()">Xem thêm&ensp;<i class="fas fa-chevron-right"></i></a>');
            }
        },
        showAllBrand: function () {
            var itemBrand = jQuery('.block-filter .filter__block-list-brand .box-list-brand .list-brand .item-brand.hidden').removeClass('hidden');
            jQuery('.block-filter .filter__block-list-brand .box-list-brand .list-brand .item-brand#showAllBrand').hide();
        }
    }
}

var sideNav = {
    data: {

    },
    init: function () {
        // sideNav.methods.sideNavMoreFilter();
        // sideNav.methods.checkHeightFilter();
    },
    methods: {
        sideNavMoreFilter: function () {
            jQuery('.block-sidenav .box-list-filter .list-filter .btn-filter').on("click", function () {
                jQuery(this).addClass('active');
            });
            jQuery('.block-sidenav').on("click", function (e) {
                e.stopPropagation();
            });
            jQuery('body').click(function () {
                sideNav.methods.closeSideNav();
            });
        },
        openSideNav: function (e) {
            e.stopPropagation();
            jQuery('#filterSidenav').css({ 'right': '0' });
            jQuery(".header-overlay").addClass("active");
            jQuery(".header-overlay").css({ 'z-index': '1001' });
            jQuery('.btn-filter.btn-more-filter').addClass('selected');
        },
        closeSideNav: function () {
            jQuery('#filterSidenav').css({ 'right': '-80%' });
            jQuery(".header-overlay").removeClass("active");
            jQuery(".header-overlay").css({ 'z-index': '30' });
            jQuery('.btn-filter.btn-more-filter').removeClass('selected');
        },
        checkHeightFilter: function () {
            var body = jQuery('body');
            var box_sidenav_content = jQuery('section.cps-section .block-sidenav .sidenav__box-content');
            var box_show_more = jQuery('section.cps-section .block-sidenav .sidenav__box-content .box-show-more');
            if (box_sidenav_content.height() > body.height()) {
                box_sidenav_content.addClass('unscroll');
                box_show_more.show();
            }
        },
        showMoreFilter: function () {
            var box_sidenav_content = jQuery('section.cps-section .block-sidenav .sidenav__box-content');
            var box_show_more = jQuery('section.cps-section .block-sidenav .sidenav__box-content .box-show-more');
            box_sidenav_content.removeClass('unscroll');
            box_sidenav_content.addClass('scroll');
            box_show_more.hide();
        }
    }
}

var tab = {
    data: {

    },
    init: function () {

    },
    methods: {
        tabToggle: function (cate_id, parent_id, id_nav_tabs, id_tab_content) {
            jQuery(id_nav_tabs).addClass('active');
            jQuery(id_nav_tabs).siblings().removeClass('active');
            jQuery(id_tab_content).show();
            jQuery(id_tab_content).siblings().hide();
            tab.methods.loadMoreProduct(cate_id, parent_id);
        },
        loadMoreProduct: function (cate_id, parent_id) {
            var page_prdct = jQuery('#page_prdct_' + cate_id).val();
            ++page_prdct;
            jQuery('#page_prdct_' + cate_id).attr('value', page_prdct);

            var count_prdct = jQuery('#count_prdct_' + cate_id).val();
            var fearture_prdct = jQuery('#fearturedPrdct').val();

            jQuery.ajax({
                method: "GET",
                url: "https://cellphones.com.vn/lapi/LoadMoreProductCate/index/?page=" + page_prdct + "&id=" + cate_id + "&fearture=" + fearture_prdct,
                dataType: "json",
                beforeSend: function () {
                    jQuery('.cps-tab-content #tab_content_' + cate_id + '.block-products .box-products .btn-load-more').html('Đang tải ...');
                },
                success: function (response) {
                    if (response.length > 0) {
                        const list_product = response;
                        count_prdct = count_prdct - list_product.length;
                        jQuery('#count_prdct_' + cate_id).attr('value', count_prdct);
                        jQuery('.cps-tab-content #tab_content_' + cate_id + '.block-products .box-products .btn-load-more').html('Xem thêm ' + count_prdct + ' sản phẩm  <i class="fas fa-chevron-down"></i>');
                        var html = printHtml.methods.printListProduct(cate_id, parent_id, list_product, count_prdct);
                        if (list_product.length > 0) {
                            jQuery('.cps-tab-content #tab_content_' + cate_id + '.block-products .list-product').append(html);
                            if (page_prdct == 1) {
                                jQuery('.cps-tab-content #tab_content_' + cate_id + '.block-products .btn-load-more').show();
                            }
                            cpsLazy.update();
                        }
                    }
                },
                error: function (jqXHR, exception) {
                    console.log(jqXHR);
                },
            });
        },
        changeTabHotSale: function (index) {
            jQuery('.block-hotsale.hotsale-normal .block-hotsale__box-tab-menu').children('a.item-tab-menu.tab-menu-' + index).addClass('active').siblings('a.item-tab-menu').removeClass('active');
            jQuery('.block-hotsale.hotsale-normal').eq(index).show().siblings('.block-hotsale.hotsale-normal').hide();
            // console.log(swiper.methods.hotSale());
        }
    }
}

var navTabs = {
    data: {

    },
    init: function () {

    },
    methods: {
        listNavTabs: function () {
            var i = '';
            var html = '';
            var list_nav_tabs = jQuery('.block-list-box-product .cps-nav-tabs .list-nav-tabs');
            var compare_product = jQuery('.block-list-box-product .list-box-product .block-products.compare-product');
            var accessory_product = jQuery('.block-list-box-product .list-box-product .block-products.accessory-product');
            var computerbased_product = jQuery('.block-list-box-product .list-box-product .block-products.computerbased-product');
            var new_product = jQuery('.block-list-box-product .list-box-product .block-products.new-product');
            var old_product = jQuery('.block-list-box-product .list-box-product .block-products.old-product');

            var listBoxProduct = jQuery('.block-list-box-product .list-box-product div[class*=block-products]:not(:first-child)');
            listBoxProduct.hide();

            if (computerbased_product.length) {
                html += `<a id="nav_tabs_0" class="item-nav-tabs text-uppercase" onclick="navTabs.methods.changeNavTabs('nav_tabs_0', 'computerbased-product')">Linh kiện cấu thành</a>`;
                i++;
            }

            if (accessory_product.length) {
                html += `<a id="nav_tabs_1" class="item-nav-tabs text-uppercase" onclick="navTabs.methods.changeNavTabs('nav_tabs_1', 'accessory-product')">Phụ kiện mua cùng</a>`;
                i++;
            }

            if (compare_product.length) {
                html += `<a id="nav_tabs_2" class="item-nav-tabs text-uppercase" onclick="navTabs.methods.changeNavTabs('nav_tabs_2', 'compare-product')">Sản phẩm tương tự</a>`;
                i++;
            }

            if (new_product.length) {
                html += `<a id="nav_tabs_3" class="item-nav-tabs text-uppercase" onclick="navTabs.methods.changeNavTabs('nav_tabs_3', 'new-product')">Tham khảo thêm máy mới</a>`;
                i++;
            }

            if (old_product.length) {
                html += `<a id="nav_tabs_4" class="item-nav-tabs text-uppercase" onclick="navTabs.methods.changeNavTabs('nav_tabs_4', 'old-product')">Tham khảo thêm máy cũ</a>`;
                i++;
            }

            if (i > 1) {
                list_nav_tabs.html(html);
                jQuery('section.cps-section .cps-nav-tabs').show();
                jQuery('section.cps-section .cps-nav-tabs .list-nav-tabs .item-nav-tabs:first-child').addClass('active');
            }
        },
        changeNavTabs: function (nav_id, class_name) {
            jQuery('.block-list-box-product .list-box-product .block-products.' + class_name).show().siblings().hide();
            jQuery('#' + nav_id).addClass('active').siblings().removeClass('active');
        }
    }
}

var printHtml = {
    data: {
        arr_cate_id_laptop: [380, 864, 785]
    },
    init: function () {

    },
    methods: {
        printListProduct: function (cate_id, parent_id, list_product, count_prdct) {
            var html = "";
            jQuery.each(list_product, function (index, product) {

                var id = product['entity_id'];
                var name = product['name'];
                var img = product['small_image'];
                var url = product['url'];

                var old_price = product['price'];
                var special_price = product['final_price'];

                if (special_price <= 0 && old_price > 0) {
                    special_price = old_price;
                }

                var promotion_information = product['promotion_information'];
                var countAllReviews = product['count_all_reviews'];
                var averageRatings = product['average_ratings'];
                var specifications = product['linh_kien_attribute'];
                var black_friday = product['attribute_black_friday'];
                var flash_sale = product['attribute_uu_dai_tet'];

                var short_description = product['short_description'];
                var is_hotsale = false;
                if (short_description) {
                    short_description = short_description.toLowerCase();
                    if (short_description.indexOf('hotsale') < 0 && short_description.indexOf('<!--') < 0) {
                        is_hotsale = true;
                    }
                }

                var percent = 0;
                if (old_price > 0) {
                    percent = Math.round(((old_price - special_price) / old_price) * 100);
                }

                var tinh_trang_may_cu = '';
                if (cate_id == 29 || parent_id == 29) {
                    var tinh_trang_may_cu = product['tinh_trang_may_cu'];
                }

                if (printHtml.data.arr_cate_id_laptop.includes(parent_id)) {
                    var display_size = product['display_size'];
                    var laptop_ram = product['laptop_ram'];
                    var hdd_sdd = product['hdd_sdd'];
                    var laptop_cpu = product['laptop_cpu'];
                }

                if (parent_id == 3 || parent_id == 4) {
                    var display_size = product['display_size'];
                    var memory_internal = product['memory_internal'];
                    var storage = product['storage'];
                }

                var text_stock = '';
                var stock_available = product['stock_available'];
                switch (stock_available) {
                    case 46:
                        text_stock = '';
                        product_status = 'Đã hết hàng';
                        break;
                    case 152:
                        text_stock = 'Hàng đặt trước';
                        product_status = 'Giá liên hệ';
                        break;
                    case 56:
                        text_stock = 'Sắp về hàng';
                        product_status = 'Đăng ký nhận tin';
                        break;
                    case 43:
                        text_stock = '';
                        product_status = 'Đã hết hàng';
                        break;
                }

                html += '<div id="' + id + '" class="item-product">';
                html += '<div class="item-product__box-img">';
                html += '<a href="' + url + '" rel="nofollow">';
                html += '<img class="cpslazy" data-src="' + img + '" alt="' + name + '"/>';
                html += '</a>';
                html += '</div>';
                if (flash_sale == 1) {
                    html += '<div class="item-product__sticker-flashsale"></div>';
                } else if (black_friday == 1) {
                    html += '<div class="item-product__sticker-blackFriday"></div>';
                }
                if (percent > 2) {
                    html += '<div class="item-product__sticker-percent"><p>Giảm ' + percent + '%</p></div>';
                }
                html += '<div class="item-product__box-name">';
                html += '<a href="' + url + '">';
                html += '<h3>' + name + '</h3>';
                html += '</a>';
                html += '</div>';
                if (tinh_trang_may_cu) {
                    if (tinh_trang_may_cu == "2001") {
                        html += '<div class="item-product__more-info">';
                        html += '<p>Bảo hành 12 tháng</p>';
                        html += '<p>Đổi trả 30 ngày</p>';
                        html += '</div>';
                    } else {
                        html += '<div class="item-product__more-info">';
                        html += '<p>Bảo hành 6 tháng</p>';
                        html += '<p>Đổi trả 30 ngày</p>';
                        html += '</div>';
                    }
                }
                if (printHtml.data.arr_cate_id_laptop.includes(parent_id)) {
                    if (display_size || laptop_ram || hdd_sdd || laptop_cpu) {
                        html += '<div class="item-product__more-info">';
                        if (display_size) {
                            html += '<p>' + display_size + '</p>';
                        }
                        if (laptop_ram) {
                            html += '<p>' + laptop_ram + '</p>';
                        }
                        if (hdd_sdd) {
                            html += '<p>' + hdd_sdd + '</p>';
                        }
                        if (laptop_cpu) {
                            html += '<p>' + laptop_cpu + '</p>';
                        }
                        html += '</div>';
                    }
                }
                if (parent_id == 3 || parent_id == 4) {
                    if (display_size || memory_internal || storage) {
                        html += '<div class="item-product__more-info">';
                        if (display_size) {
                            html += '<p>' + display_size + '</p>';
                        }
                        if (memory_internal) {
                            html += '<p>' + memory_internal + '</p>';
                        }
                        if (storage) {
                            html += '<p>' + storage + '</p>';
                        }
                        html += '</div>';
                    }
                }
                if(specifications){
                    html += '<div class="item-product__more-info">'
                    specifications.forEach(function (item){
                        if(item['value']) {
                            html += '<p class="label-infor" >' + item['value'] + '</p>';
                        }
                    });
                    html+='</div>';
                }
                if (text_stock) {
                    html += '<div class="item-product__more-info text-stock"><p>' + text_stock + '</p></div>';
                }
                if (parent_id == 29) {
                    html += '<div class="item-product__box-price">';
                    if (special_price > 0) {
                        html += '<p class="special-price">' + format_price.format(special_price) + '</p>';
                    }
                    if (old_price > 0 && old_price > special_price) {
                        html += '<p class="nomal-price full">Giá máy mới:&nbsp;<strong>' + format_price.format(old_price) + '</strong></p>';
                    }
                    if (special_price > 0 && old_price > 0 && old_price > special_price) {
                        html += '<p class="discount-price">Tiết kiệm:&nbsp;' + format_price.format(old_price - special_price) + '</p>';
                    }
                    if (old_price <= 0 && special_price <= 0) {
                        html += '<p class="special-price"><strong>' + product_status + '</strong></p>';
                    }
                    html += '</div>';
                } else {
                    html += '<div class="item-product__box-price">';
                    if (stock_available != 43) {
                        if (special_price != 0 && old_price > special_price) {
                            html += '<p class="special-price">' + format_price.format(special_price) + '</p>';
                            html += '<p class="old-price">' + format_price.format(old_price) + '</p>';
                        } else {
                            if (special_price == 0) {
                                html += '<p class="special-price"><strong>' + product_status + '</strong></p>';
                            } else {
                                html += '<p class="special-price">' + format_price.format(special_price) + '</p>';
                            }
                        }
                    } else {
                        html += '<p class="special-price"><strong>' + product_status + '</strong></p>';
                    }
                    html += '</div>';
                }
                if (promotion_information) {
                    html += promotion_information;
                }
                if (countAllReviews > 0) {
                    html += '<div class="item-product__box-raiting">';
                    for (var i = 1; i <= 5; i++) {
                        if (i <= Math.round(averageRatings)) {
                            html += '<i class="fas fa-star checked"></i>&nbsp;';
                        } else {
                            html += '<i class="fas fa-star"></i>&nbsp;';
                        }
                    }
                    html += countAllReviews + ' đánh giá';
                    html += '</div>';
                }
                html += '</div>';
                length++;
                //Kiểm tra phải trang cuối hay ko?
                // console.log(product['isLastPage']);
                // console.log(count_prdct);
                // console.log('');
                if (product['isLastPage'] == true || count_prdct <= 0) {
                    if (parent_id == 30) {
                        jQuery('.cps-tab-content #tab_content_' + cate_id + '.block-products .box-products .btn-load-more').hide();
                    } else {
                        jQuery('.block-products .box-products .btn-load-more').hide();
                    }
                }
            });
            return html;
        }
    }
}
