var date = {
     start: '',
     end: '',
     checkin: true,
     count: 0,
     today: new Date(),
     calendars: [],
     id: 0,
     parent: '',
     init: function() {
          if (document.querySelectorAll('.fusion-dates').length>0) {
               for (var i = 0; i < document.querySelectorAll('.fusion-dates').length; i++) {
                    var a, configs, calendar;
                    
                    a = document.querySelectorAll('.fusion-dates')[i];

                    configs = date.configs;

                    configs.field = a;

                    configs.variant = 'fusion-dates-'+i;

                    configs.bound = a.dataset.dateBound ? a.dataset.dateBound : configs.bound;
                    
                    configs.theme = a.dataset.dateTheme ? a.dataset.dateTheme : configs.theme;
                    
                    configs.position = a.dataset.datePosition ? a.dataset.datePosition : configs.position;

                    configs.format = a.dataset.dateFormat ? a.dataset.dateFormat : configs.format;

                    configs.output = a.dataset.dateOutput.split(',');
                    configs.label = configs.output;
                    
                    if (configs.bound) {
                         configs.theme += ' bound';
                    } else {
                         configs.container = a;
                         configs.theme += ' isnot-bound';
                    }

                    calendar = new Pikaday(configs);
                    a.dataset.pikaday = calendar;
                    f.addClass(a, configs.variant);
                    a.dataset.dateVariant = configs.variant;

                    date.calendars.push(calendar);
               }

               if (document.getElementById('date-overlay') == null) {
                    var overlay = document.createElement('div');
                    overlay.id = 'date-overlay';
                    overlay.addEventListener('click', function(){
                         date.close();              
                    }, false);
                    document.getElementById('fusion').appendChild(overlay);
               }
          }
     },
     format: function(date, format) {
          format = format || date.config.format;
          return moment(date).format(format);
     },
     add: function(date, days) {
          var result = new Date(date);
          result.setDate(result.getDate() + days);
          return result;
     },
     compare: function(date1, date2) {
          var startFormat = new Date(moment(date1).format('M/D/YYYY'));
          var endFormat = new Date(moment(date2).format('M/D/YYYY'));

          var timeDiff = endFormat.getTime() - startFormat.getTime();
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

          return diffDays;
     },
     close: function() {
          if (document.querySelectorAll('.pika-single.active').length>0) {
               date.calendars[document.querySelectorAll('.pika-single.active')[0].getAttribute('data-date-id').slice(-1)].hide();
          }
          f.removeClass(document.body, 'dates-active');
     },
     hover: function(child) {
          f.removeClass('[data-identifier]', 'is-hovering');

          if (date.start != "" || date.end != "") {
               var parent, id_current, id_start, id_end;

               if (child.tagName.toLowerCase()==="a") {
                    child = child.parentNode;
               }

               parent = document.querySelectorAll('[data-date-id="'+child.dataset.identifierParent+'"]')[0];
               
               id_current = parseInt(child.dataset.identifier);

               if (f.device == "desktop" && !f.hasClass(child, 'is-disabled')) {
                    if (date.start!="" && date.end == "" && !f.hasClass(child, 'is-startrange')) {
                         if (parent.querySelectorAll('.is-startrange')[0]!==undefined) {
                         id_start = parseInt(parent.querySelectorAll('.is-startrange')[0].dataset.identifier);
                         for (var j = (id_start+1); j <= id_current; j++) {
                              var k = parent.querySelectorAll('[data-identifier="'+j+'"]')[0];
                              if (!f.hasClass(k, 'is-hovering')) {
                                   f.addClass(k, 'is-hovering');
                              }
                         }
                         }
                    } else if (date.start=="" && date.end!="" && !f.hasClass(child, 'is-endrange')) {
                         if (parent.querySelectorAll('.is-endrange')[0]!==undefined) {
                              id_end = parseInt(parent.querySelectorAll('.is-endrange')[0].dataset.identifier);
                              for (var j = (id_end-1); j >= id_current; j--) {
                                   var k = parent.querySelectorAll('[data-identifier="'+j+'"]')[0];
                                   if (!f.hasClass(k, 'is-hovering')) {
                                        f.addClass(k, 'is-hovering');
                                   }
                              }
                         }
                    }
               }
          }
     },
};

/* 
Moment
https://github.com/moment/moment
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.moment=e()}(this,function(){"use strict";function t(){return Qn.apply(null,arguments)}function e(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function n(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function i(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function r(t,e){for(var n in e)s(e,n)&&(t[n]=e[n]);return s(e,"toString")&&(t.toString=e.toString),s(e,"valueOf")&&(t.valueOf=e.valueOf),t}function a(t,e,n,i){return Pt(t,e,n,i,!0).utc()}function o(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function u(t){return null==t._pf&&(t._pf=o()),t._pf}function d(t){if(null==t._isValid){var e=u(t);t._isValid=!(isNaN(t._d.getTime())||!(e.overflow<0)||e.empty||e.invalidMonth||e.invalidWeekday||e.nullInput||e.invalidFormat||e.userInvalidated),t._strict&&(t._isValid=t._isValid&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour)}return t._isValid}function l(t){var e=a(NaN);return null!=t?r(u(e),t):u(e).userInvalidated=!0,e}function h(t){return void 0===t}function c(t,e){var n,i,s;if(h(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),h(e._i)||(t._i=e._i),h(e._f)||(t._f=e._f),h(e._l)||(t._l=e._l),h(e._strict)||(t._strict=e._strict),h(e._tzm)||(t._tzm=e._tzm),h(e._isUTC)||(t._isUTC=e._isUTC),h(e._offset)||(t._offset=e._offset),h(e._pf)||(t._pf=u(e)),h(e._locale)||(t._locale=e._locale),Xn.length>0)for(n in Xn)i=Xn[n],s=e[i],h(s)||(t[i]=s);return t}function f(e){c(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),!1===Kn&&(Kn=!0,t.updateOffset(this),Kn=!1)}function m(t){return t instanceof f||null!=t&&null!=t._isAMomentObject}function _(t){return 0>t?Math.ceil(t):Math.floor(t)}function y(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=_(e)),n}function g(t,e,n){var i,s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),a=0;for(i=0;s>i;i++)(n&&t[i]!==e[i]||!n&&y(t[i])!==y(e[i]))&&a++;return a+r}function p(e){!1===t.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function v(t,e){var n=!0;return r(function(){return n&&(p(t+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),n=!1),e.apply(this,arguments)},e)}function D(t,e){ti[t]||(p(e),ti[t]=!0)}function M(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function S(t){return"[object Object]"===Object.prototype.toString.call(t)}function Y(t){var e,n;for(n in t)e=t[n],M(e)?this[n]=e:this["_"+n]=e;this._config=t,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function w(t,e){var n,i=r({},t);for(n in e)s(e,n)&&(S(t[n])&&S(e[n])?(i[n]={},r(i[n],t[n]),r(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);return i}function k(t){null!=t&&this.set(t)}function T(t){return t?t.toLowerCase().replace("_","-"):t}function b(t){for(var e,n,i,s,r=0;r<t.length;){for(e=(s=T(t[r]).split("-")).length,n=(n=T(t[r+1]))?n.split("-"):null;e>0;){if(i=O(s.slice(0,e).join("-")))return i;if(n&&n.length>=e&&g(s,n,!0)>=e-1)break;e--}r++}return null}function O(t){var e=null;if(!ni[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=ei._abbr,require("./locale/"+t),W(e)}catch(t){}return ni[t]}function W(t,e){var n;return t&&(n=h(e)?G(t):x(t,e))&&(ei=n),ei._abbr}function x(t,e){return null!==e?(e.abbr=t,null!=ni[t]?(D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),e=w(ni[t]._config,e)):null!=e.parentLocale&&(null!=ni[e.parentLocale]?e=w(ni[e.parentLocale]._config,e):D("parentLocaleUndefined","specified parentLocale is not defined yet")),ni[t]=new k(e),W(t),ni[t]):(delete ni[t],null)}function U(t,e){if(null!=e){var n;null!=ni[t]&&(e=w(ni[t]._config,e)),(n=new k(e)).parentLocale=ni[t],ni[t]=n,W(t)}else null!=ni[t]&&(null!=ni[t].parentLocale?ni[t]=ni[t].parentLocale:null!=ni[t]&&delete ni[t]);return ni[t]}function G(t){var n;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return ei;if(!e(t)){if(n=O(t))return n;t=[t]}return b(t)}function P(){return Object.keys(ni)}function C(t,e){var n=t.toLowerCase();ii[n]=ii[n+"s"]=ii[e]=t}function F(t){return"string"==typeof t?ii[t]||ii[t.toLowerCase()]:void 0}function H(t){var e,n,i={};for(n in t)s(t,n)&&(e=F(n))&&(i[e]=t[n]);return i}function L(e,n){return function(i){return null!=i?(N(this,e,i),t.updateOffset(this,n),this):V(this,e)}}function V(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function N(t,e,n){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](n)}function I(t,e){var n;if("object"==typeof t)for(n in t)this.set(n,t[n]);else if(t=F(t),M(this[t]))return this[t](e);return this}function A(t,e,n){var i=""+Math.abs(t),s=e-i.length;return(t>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+i}function R(t,e,n,i){var s=i;"string"==typeof i&&(s=function(){return this[i]()}),t&&(oi[t]=s),e&&(oi[e[0]]=function(){return A(s.apply(this,arguments),e[1],e[2])}),n&&(oi[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),t)})}function E(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function j(t){var e,n,i=t.match(si);for(e=0,n=i.length;n>e;e++)oi[i[e]]?i[e]=oi[i[e]]:i[e]=E(i[e]);return function(s){var r="";for(e=0;n>e;e++)r+=i[e]instanceof Function?i[e].call(s,t):i[e];return r}}function z(t,e){return t.isValid()?(e=Z(e,t.localeData()),ai[e]=ai[e]||j(e),ai[e](t)):t.localeData().invalidDate()}function Z(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(ri.lastIndex=0;i>=0&&ri.test(t);)t=t.replace(ri,n),ri.lastIndex=0,i-=1;return t}function $(t,e,n){ki[t]=M(e)?e:function(t,i){return t&&n?n:e}}function q(t,e){return s(ki,t)?ki[t](e._strict,e._locale):new RegExp(J(t))}function J(t){return B(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,s){return e||n||i||s}))}function B(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),"number"==typeof e&&(i=function(t,n){n[e]=y(t)}),n=0;n<t.length;n++)Ti[t[n]]=i}function X(t,e){Q(t,function(t,n,i,s){i._w=i._w||{},e(t,i._w,i,s)})}function K(t,e,n){null!=e&&s(Ti,t)&&Ti[t](e,n._a,n,t)}function tt(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function et(t,n){return e(this._months)?this._months[t.month()]:this._months[Hi.test(n)?"format":"standalone"][t.month()]}function nt(t,n){return e(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Hi.test(n)?"format":"standalone"][t.month()]}function it(t,e,n){var i,s,r;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;12>i;i++){if(s=a([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function st(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=y(e);else if("number"!=typeof(e=t.localeData().monthsParse(e)))return t;return n=Math.min(t.date(),tt(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function rt(e){return null!=e?(st(this,e),t.updateOffset(this,!0),this):V(this,"Month")}function at(){return tt(this.year(),this.month())}function ot(t){return this._monthsParseExact?(s(this,"_monthsRegex")||dt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex}function ut(t){return this._monthsParseExact?(s(this,"_monthsRegex")||dt.call(this),t?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex}function dt(){function t(t,e){return e.length-t.length}var e,n,i=[],s=[],r=[];for(e=0;12>e;e++)n=a([2e3,e]),i.push(this.monthsShort(n,"")),s.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),s.sort(t),r.sort(t),e=0;12>e;e++)i[e]=B(i[e]),s[e]=B(s[e]),r[e]=B(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")$","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")$","i")}function lt(t){var e,n=t._a;return n&&-2===u(t).overflow&&(e=n[Oi]<0||n[Oi]>11?Oi:n[Wi]<1||n[Wi]>tt(n[bi],n[Oi])?Wi:n[xi]<0||n[xi]>24||24===n[xi]&&(0!==n[Ui]||0!==n[Gi]||0!==n[Pi])?xi:n[Ui]<0||n[Ui]>59?Ui:n[Gi]<0||n[Gi]>59?Gi:n[Pi]<0||n[Pi]>999?Pi:-1,u(t)._overflowDayOfYear&&(bi>e||e>Wi)&&(e=Wi),u(t)._overflowWeeks&&-1===e&&(e=Ci),u(t)._overflowWeekday&&-1===e&&(e=Fi),u(t).overflow=e),t}function ht(t){var e,n,i,s,r,a,o=t._i,d=Ai.exec(o)||Ri.exec(o);if(d){for(u(t).iso=!0,e=0,n=ji.length;n>e;e++)if(ji[e][1].exec(d[1])){s=ji[e][0],i=!1!==ji[e][2];break}if(null==s)return void(t._isValid=!1);if(d[3]){for(e=0,n=zi.length;n>e;e++)if(zi[e][1].exec(d[3])){r=(d[2]||" ")+zi[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(d[4]){if(!Ei.exec(d[4]))return void(t._isValid=!1);a="Z"}t._f=s+(r||"")+(a||""),Tt(t)}else t._isValid=!1}function ct(e){var n=Zi.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(ht(e),void(!1===e._isValid&&(delete e._isValid,t.createFromInputFallback(e))))}function ft(t,e,n,i,s,r,a){var o=new Date(t,e,n,i,s,r,a);return 100>t&&t>=0&&isFinite(o.getFullYear())&&o.setFullYear(t),o}function mt(t){var e=new Date(Date.UTC.apply(null,arguments));return 100>t&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function _t(t){return yt(t)?366:365}function yt(t){return t%4==0&&t%100!=0||t%400==0}function gt(){return yt(this.year())}function pt(t,e,n){var i=7+e-n;return-((7+mt(t,0,i).getUTCDay()-e)%7)+i-1}function vt(t,e,n,i,s){var r,a,o=1+7*(e-1)+(7+n-i)%7+pt(t,i,s);return 0>=o?(r=t-1,a=_t(r)+o):o>_t(t)?(r=t+1,a=o-_t(t)):(r=t,a=o),{year:r,dayOfYear:a}}function Dt(t,e,n){var i,s,r=pt(t.year(),e,n),a=Math.floor((t.dayOfYear()-r-1)/7)+1;return 1>a?(s=t.year()-1,i=a+Mt(s,e,n)):a>Mt(t.year(),e,n)?(i=a-Mt(t.year(),e,n),s=t.year()+1):(s=t.year(),i=a),{week:i,year:s}}function Mt(t,e,n){var i=pt(t,e,n),s=pt(t+1,e,n);return(_t(t)-i+s)/7}function St(t,e,n){return null!=t?t:null!=e?e:n}function Yt(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function wt(t){var e,n,i,s,r=[];if(!t._d){for(i=Yt(t),t._w&&null==t._a[Wi]&&null==t._a[Oi]&&kt(t),t._dayOfYear&&(s=St(t._a[bi],i[bi]),t._dayOfYear>_t(s)&&(u(t)._overflowDayOfYear=!0),n=mt(s,0,t._dayOfYear),t._a[Oi]=n.getUTCMonth(),t._a[Wi]=n.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=r[e]=i[e];for(;7>e;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[xi]&&0===t._a[Ui]&&0===t._a[Gi]&&0===t._a[Pi]&&(t._nextDay=!0,t._a[xi]=0),t._d=(t._useUTC?mt:ft).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[xi]=24)}}function kt(t){var e,n,i,s,r,a,o,d;null!=(e=t._w).GG||null!=e.W||null!=e.E?(r=1,a=4,n=St(e.GG,t._a[bi],Dt(Ct(),1,4).year),i=St(e.W,1),(1>(s=St(e.E,1))||s>7)&&(d=!0)):(r=t._locale._week.dow,a=t._locale._week.doy,n=St(e.gg,t._a[bi],Dt(Ct(),r,a).year),i=St(e.w,1),null!=e.d?(0>(s=e.d)||s>6)&&(d=!0):null!=e.e?(s=e.e+r,(e.e<0||e.e>6)&&(d=!0)):s=r),1>i||i>Mt(n,r,a)?u(t)._overflowWeeks=!0:null!=d?u(t)._overflowWeekday=!0:(o=vt(n,i,s,r,a),t._a[bi]=o.year,t._dayOfYear=o.dayOfYear)}function Tt(e){if(e._f!==t.ISO_8601){e._a=[],u(e).empty=!0;var n,i,s,r,a,o=""+e._i,d=o.length,l=0;for(s=Z(e._f,e._locale).match(si)||[],n=0;n<s.length;n++)r=s[n],(i=(o.match(q(r,e))||[])[0])&&((a=o.substr(0,o.indexOf(i))).length>0&&u(e).unusedInput.push(a),o=o.slice(o.indexOf(i)+i.length),l+=i.length),oi[r]?(i?u(e).empty=!1:u(e).unusedTokens.push(r),K(r,i,e)):e._strict&&!i&&u(e).unusedTokens.push(r);u(e).charsLeftOver=d-l,o.length>0&&u(e).unusedInput.push(o),!0===u(e).bigHour&&e._a[xi]<=12&&e._a[xi]>0&&(u(e).bigHour=void 0),e._a[xi]=bt(e._locale,e._a[xi],e._meridiem),wt(e),lt(e)}else ht(e)}function bt(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?((i=t.isPM(n))&&12>e&&(e+=12),i||12!==e||(e=0),e):e}function Ot(t){var e,n,i,s,a;if(0===t._f.length)return u(t).invalidFormat=!0,void(t._d=new Date(NaN));for(s=0;s<t._f.length;s++)a=0,e=c({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[s],Tt(e),d(e)&&(a+=u(e).charsLeftOver,a+=10*u(e).unusedTokens.length,u(e).score=a,(null==i||i>a)&&(i=a,n=e));r(t,n||e)}function Wt(t){if(!t._d){var e=H(t._i);t._a=i([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),wt(t)}}function xt(t){var e=new f(lt(Ut(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Ut(t){var i=t._i,s=t._f;return t._locale=t._locale||G(t._l),null===i||void 0===s&&""===i?l({nullInput:!0}):("string"==typeof i&&(t._i=i=t._locale.preparse(i)),m(i)?new f(lt(i)):(e(s)?Ot(t):s?Tt(t):n(i)?t._d=i:Gt(t),d(t)||(t._d=null),t))}function Gt(s){var r=s._i;void 0===r?s._d=new Date(t.now()):n(r)?s._d=new Date(+r):"string"==typeof r?ct(s):e(r)?(s._a=i(r.slice(0),function(t){return parseInt(t,10)}),wt(s)):"object"==typeof r?Wt(s):"number"==typeof r?s._d=new Date(r):t.createFromInputFallback(s)}function Pt(t,e,n,i,s){var r={};return"boolean"==typeof n&&(i=n,n=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=s,r._l=n,r._i=t,r._f=e,r._strict=i,xt(r)}function Ct(t,e,n,i){return Pt(t,e,n,i,!1)}function Ft(t,n){var i,s;if(1===n.length&&e(n[0])&&(n=n[0]),!n.length)return Ct();for(i=n[0],s=1;s<n.length;++s)(!n[s].isValid()||n[s][t](i))&&(i=n[s]);return i}function Ht(){return Ft("isBefore",[].slice.call(arguments,0))}function Lt(){return Ft("isAfter",[].slice.call(arguments,0))}function Vt(t){var e=H(t),n=e.year||0,i=e.quarter||0,s=e.month||0,r=e.week||0,a=e.day||0,o=e.hour||0,u=e.minute||0,d=e.second||0,l=e.millisecond||0;this._milliseconds=+l+1e3*d+6e4*u+36e5*o,this._days=+a+7*r,this._months=+s+3*i+12*n,this._data={},this._locale=G(),this._bubble()}function Nt(t){return t instanceof Vt}function It(t,e){R(t,0,0,function(){var t=this.utcOffset(),n="+";return 0>t&&(t=-t,n="-"),n+A(~~(t/60),2)+e+A(~~t%60,2)})}function At(t,e){var n=(e||"").match(t)||[],i=((n[n.length-1]||[])+"").match(Qi)||["-",0,0],s=60*i[1]+y(i[2]);return"+"===i[0]?s:-s}function Rt(e,i){var s,r;return i._isUTC?(s=i.clone(),r=(m(e)||n(e)?+e:+Ct(e))-+s,s._d.setTime(+s._d+r),t.updateOffset(s,!1),s):Ct(e).local()}function Et(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function jt(e,n){var i,s=this._offset||0;return this.isValid()?null!=e?("string"==typeof e?e=At(Si,e):Math.abs(e)<16&&(e*=60),!this._isUTC&&n&&(i=Et(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),s!==e&&(!n||this._changeInProgress?oe(this,ee(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?s:Et(this):null!=e?this:NaN}function zt(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Zt(t){return this.utcOffset(0,t)}function $t(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Et(this),"m")),this}function qt(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(At(Mi,this._i)),this}function Jt(t){return!!this.isValid()&&(t=t?Ct(t).utcOffset():0,(this.utcOffset()-t)%60==0)}function Bt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Qt(){if(!h(this._isDSTShifted))return this._isDSTShifted;var t={};if(c(t,this),(t=Ut(t))._a){var e=t._isUTC?a(t._a):Ct(t._a);this._isDSTShifted=this.isValid()&&g(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Xt(){return!!this.isValid()&&!this._isUTC}function Kt(){return!!this.isValid()&&this._isUTC}function te(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function ee(t,e){var n,i,r,a=t,o=null;return Nt(t)?a={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(a={},e?a[e]=t:a.milliseconds=t):(o=Xi.exec(t))?(n="-"===o[1]?-1:1,a={y:0,d:y(o[Wi])*n,h:y(o[xi])*n,m:y(o[Ui])*n,s:y(o[Gi])*n,ms:y(o[Pi])*n}):(o=Ki.exec(t))?(n="-"===o[1]?-1:1,a={y:ne(o[2],n),M:ne(o[3],n),w:ne(o[4],n),d:ne(o[5],n),h:ne(o[6],n),m:ne(o[7],n),s:ne(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(r=se(Ct(a.from),Ct(a.to)),a={},a.ms=r.milliseconds,a.M=r.months),i=new Vt(a),Nt(t)&&s(t,"_locale")&&(i._locale=t._locale),i}function ne(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function ie(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function se(t,e){var n;return t.isValid()&&e.isValid()?(e=Rt(e,t),t.isBefore(e)?n=ie(t,e):(n=ie(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function re(t){return 0>t?-1*Math.round(-1*t):Math.round(t)}function ae(t,e){return function(n,i){var s,r;return null===i||isNaN(+i)||(D(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),r=n,n=i,i=r),n="string"==typeof n?+n:n,s=ee(n,i),oe(this,s,t),this}}function oe(e,n,i,s){var r=n._milliseconds,a=re(n._days),o=re(n._months);e.isValid()&&(s=null==s||s,r&&e._d.setTime(+e._d+r*i),a&&N(e,"Date",V(e,"Date")+a*i),o&&st(e,V(e,"Month")+o*i),s&&t.updateOffset(e,a||o))}function ue(t,e){var n=t||Ct(),i=Rt(n,this).startOf("day"),s=this.diff(i,"days",!0),r=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse",a=e&&(M(e[r])?e[r]():e[r]);return this.format(a||this.localeData().calendar(r,this,Ct(n)))}function de(){return new f(this)}function le(t,e){var n=m(t)?t:Ct(t);return!(!this.isValid()||!n.isValid())&&(e=F(h(e)?"millisecond":e),"millisecond"===e?+this>+n:+n<+this.clone().startOf(e))}function he(t,e){var n=m(t)?t:Ct(t);return!(!this.isValid()||!n.isValid())&&(e=F(h(e)?"millisecond":e),"millisecond"===e?+n>+this:+this.clone().endOf(e)<+n)}function ce(t,e,n){return this.isAfter(t,n)&&this.isBefore(e,n)}function fe(t,e){var n,i=m(t)?t:Ct(t);return!(!this.isValid()||!i.isValid())&&(e=F(e||"millisecond"),"millisecond"===e?+this==+i:(n=+i,+this.clone().startOf(e)<=n&&n<=+this.clone().endOf(e)))}function me(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function _e(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function ye(t,e,n){var i,s,r,a;return this.isValid()?(i=Rt(t,this),i.isValid()?(s=6e4*(i.utcOffset()-this.utcOffset()),e=F(e),"year"===e||"month"===e||"quarter"===e?(a=ge(this,i),"quarter"===e?a/=3:"year"===e&&(a/=12)):(r=this-i,a="second"===e?r/1e3:"minute"===e?r/6e4:"hour"===e?r/36e5:"day"===e?(r-s)/864e5:"week"===e?(r-s)/6048e5:r),n?a:_(a)):NaN):NaN}function ge(t,e){var n,i,s=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(s,"months");return 0>e-r?(n=t.clone().add(s-1,"months"),i=(e-r)/(r-n)):(n=t.clone().add(s+1,"months"),i=(e-r)/(n-r)),-(s+i)}function pe(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ve(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?M(Date.prototype.toISOString)?this.toDate().toISOString():z(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function De(e){var n=z(this,e||t.defaultFormat);return this.localeData().postformat(n)}function Me(t,e){return this.isValid()&&(m(t)&&t.isValid()||Ct(t).isValid())?ee({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Se(t){return this.from(Ct(),t)}function Ye(t,e){return this.isValid()&&(m(t)&&t.isValid()||Ct(t).isValid())?ee({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function we(t){return this.to(Ct(),t)}function ke(t){var e;return void 0===t?this._locale._abbr:(null!=(e=G(t))&&(this._locale=e),this)}function Te(){return this._locale}function be(t){switch(t=F(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function Oe(t){return t=F(t),void 0===t||"millisecond"===t?this:this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms")}function We(){return+this._d-6e4*(this._offset||0)}function xe(){return Math.floor(+this/1e3)}function Ue(){return this._offset?new Date(+this):this._d}function Ge(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function Pe(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Ce(){return this.isValid()?this.toISOString():null}function Fe(){return d(this)}function He(){return r({},u(this))}function Le(){return u(this).overflow}function Ve(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ne(t,e){R(0,[t,t.length],0,e)}function Ie(t){return je.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Ae(t){return je.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Re(){return Mt(this.year(),1,4)}function Ee(){var t=this.localeData()._week;return Mt(this.year(),t.dow,t.doy)}function je(t,e,n,i,s){var r;return null==t?Dt(this,i,s).year:(r=Mt(t,i,s),e>r&&(e=r),ze.call(this,t,e,n,i,s))}function ze(t,e,n,i,s){var r=vt(t,e,n,i,s),a=mt(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function Ze(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function $e(t){return Dt(t,this._week.dow,this._week.doy).week}function qe(){return this._week.dow}function Je(){return this._week.doy}function Be(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function Qe(t){var e=Dt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function Xe(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Ke(t,n){return e(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(n)?"format":"standalone"][t.day()]}function tn(t){return this._weekdaysShort[t.day()]}function en(t){return this._weekdaysMin[t.day()]}function nn(t,e,n){var i,s,r;for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;7>i;i++){if(s=Ct([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(s,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(s,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(s,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function sn(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Xe(t,this.localeData()),this.add(t-e,"d")):e}function rn(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function an(t){return this.isValid()?null==t?this.day()||7:this.day(this.day()%7?t:t-7):null!=t?this:NaN}function on(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function un(){return this.hours()%12||12}function dn(t,e){R(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function ln(t,e){return e._meridiemParse}function hn(t){return"p"===(t+"").toLowerCase().charAt(0)}function cn(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function fn(t,e){e[Pi]=y(1e3*("0."+t))}function mn(){return this._isUTC?"UTC":""}function _n(){return this._isUTC?"Coordinated Universal Time":""}function yn(t){return Ct(1e3*t)}function gn(){return Ct.apply(null,arguments).parseZone()}function pn(t,e,n){var i=this._calendar[t];return M(i)?i.call(e,n):i}function vn(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function Dn(){return this._invalidDate}function Mn(t){return this._ordinal.replace("%d",t)}function Sn(t){return t}function Yn(t,e,n,i){var s=this._relativeTime[n];return M(s)?s(t,e,n,i):s.replace(/%d/i,t)}function wn(t,e){var n=this._relativeTime[t>0?"future":"past"];return M(n)?n(e):n.replace(/%s/i,e)}function kn(t,e,n,i){var s=G(),r=a().set(i,e);return s[n](r,t)}function Tn(t,e,n,i,s){if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return kn(t,e,n,s);var r,a=[];for(r=0;i>r;r++)a[r]=kn(t,r,n,s);return a}function bn(t,e){return Tn(t,e,"months",12,"month")}function On(t,e){return Tn(t,e,"monthsShort",12,"month")}function Wn(t,e){return Tn(t,e,"weekdays",7,"day")}function xn(t,e){return Tn(t,e,"weekdaysShort",7,"day")}function Un(t,e){return Tn(t,e,"weekdaysMin",7,"day")}function Gn(){var t=this._data;return this._milliseconds=Ms(this._milliseconds),this._days=Ms(this._days),this._months=Ms(this._months),t.milliseconds=Ms(t.milliseconds),t.seconds=Ms(t.seconds),t.minutes=Ms(t.minutes),t.hours=Ms(t.hours),t.months=Ms(t.months),t.years=Ms(t.years),this}function Pn(t,e,n,i){var s=ee(e,n);return t._milliseconds+=i*s._milliseconds,t._days+=i*s._days,t._months+=i*s._months,t._bubble()}function Cn(t,e){return Pn(this,t,e,1)}function Fn(t,e){return Pn(this,t,e,-1)}function Hn(t){return 0>t?Math.floor(t):Math.ceil(t)}function Ln(){var t,e,n,i,s,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||0>=r&&0>=a&&0>=o||(r+=864e5*Hn(Nn(o)+a),a=0,o=0),u.milliseconds=r%1e3,t=_(r/1e3),u.seconds=t%60,e=_(t/60),u.minutes=e%60,n=_(e/60),u.hours=n%24,a+=_(n/24),s=_(Vn(a)),o+=s,a-=Hn(Nn(s)),i=_(o/12),o%=12,u.days=a,u.months=o,u.years=i,this}function Vn(t){return 4800*t/146097}function Nn(t){return 146097*t/4800}function In(t){var e,n,i=this._milliseconds;if("month"===(t=F(t))||"year"===t)return e=this._days+i/864e5,n=this._months+Vn(e),"month"===t?n:n/12;switch(e=this._days+Math.round(Nn(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function An(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*y(this._months/12)}function Rn(t){return function(){return this.as(t)}}function En(t){return t=F(t),this[t+"s"]()}function jn(t){return function(){return this._data[t]}}function zn(){return _(this.days()/7)}function Zn(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}function $n(t,e,n){var i=ee(t).abs(),s=Ls(i.as("s")),r=Ls(i.as("m")),a=Ls(i.as("h")),o=Ls(i.as("d")),u=Ls(i.as("M")),d=Ls(i.as("y")),l=s<Vs.s&&["s",s]||1>=r&&["m"]||r<Vs.m&&["mm",r]||1>=a&&["h"]||a<Vs.h&&["hh",a]||1>=o&&["d"]||o<Vs.d&&["dd",o]||1>=u&&["M"]||u<Vs.M&&["MM",u]||1>=d&&["y"]||["yy",d];return l[2]=e,l[3]=+t>0,l[4]=n,Zn.apply(null,l)}function qn(t,e){return void 0!==Vs[t]&&(void 0===e?Vs[t]:(Vs[t]=e,!0))}function Jn(t){var e=this.localeData(),n=$n(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function Bn(){var t,e,n,i=Ns(this._milliseconds)/1e3,s=Ns(this._days),r=Ns(this._months);e=_((t=_(i/60))/60),i%=60,t%=60;var a=n=_(r/12),o=r%=12,u=s,d=e,l=t,h=i,c=this.asSeconds();return c?(0>c?"-":"")+"P"+(a?a+"Y":"")+(o?o+"M":"")+(u?u+"D":"")+(d||l||h?"T":"")+(d?d+"H":"")+(l?l+"M":"")+(h?h+"S":""):"P0D"}var Qn,Xn=t.momentProperties=[],Kn=!1,ti={};t.suppressDeprecationWarnings=!1;var ei,ni={},ii={},si=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ri=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ai={},oi={},ui=/\d/,di=/\d\d/,li=/\d{3}/,hi=/\d{4}/,ci=/[+-]?\d{6}/,fi=/\d\d?/,mi=/\d\d\d\d?/,_i=/\d\d\d\d\d\d?/,yi=/\d{1,3}/,gi=/\d{1,4}/,pi=/[+-]?\d{1,6}/,vi=/\d+/,Di=/[+-]?\d+/,Mi=/Z|[+-]\d\d:?\d\d/gi,Si=/Z|[+-]\d\d(?::?\d\d)?/gi,Yi=/[+-]?\d+(\.\d{1,3})?/,wi=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ki={},Ti={},bi=0,Oi=1,Wi=2,xi=3,Ui=4,Gi=5,Pi=6,Ci=7,Fi=8;R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),R("MMMM",0,0,function(t){return this.localeData().months(this,t)}),C("month","M"),$("M",fi),$("MM",fi,di),$("MMM",function(t,e){return e.monthsShortRegex(t)}),$("MMMM",function(t,e){return e.monthsRegex(t)}),Q(["M","MM"],function(t,e){e[Oi]=y(t)-1}),Q(["MMM","MMMM"],function(t,e,n,i){var s=n._locale.monthsParse(t,i,n._strict);null!=s?e[Oi]=s:u(n).invalidMonth=t});var Hi=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Li="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Vi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ni=wi,Ii=wi,Ai=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Ri=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Ei=/Z|[+-]\d\d(?::?\d\d)?/,ji=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],zi=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Zi=/^\/?Date\((\-?\d+)/i;t.createFromInputFallback=v("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),R("Y",0,0,function(){var t=this.year();return 9999>=t?""+t:"+"+t}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),C("year","y"),$("Y",Di),$("YY",fi,di),$("YYYY",gi,hi),$("YYYYY",pi,ci),$("YYYYYY",pi,ci),Q(["YYYYY","YYYYYY"],bi),Q("YYYY",function(e,n){n[bi]=2===e.length?t.parseTwoDigitYear(e):y(e)}),Q("YY",function(e,n){n[bi]=t.parseTwoDigitYear(e)}),Q("Y",function(t,e){e[bi]=parseInt(t,10)}),t.parseTwoDigitYear=function(t){return y(t)+(y(t)>68?1900:2e3)};var $i=L("FullYear",!1);t.ISO_8601=function(){};var qi=v("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var t=Ct.apply(null,arguments);return this.isValid()&&t.isValid()?this>t?this:t:l()}),Ji=v("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var t=Ct.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:l()}),Bi=function(){return Date.now?Date.now():+new Date};It("Z",":"),It("ZZ",""),$("Z",Si),$("ZZ",Si),Q(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=At(Si,t)});var Qi=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var Xi=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,Ki=/^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;ee.fn=Vt.prototype;var ts=ae(1,"add"),es=ae(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var ns=v("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ne("gggg","weekYear"),Ne("ggggg","weekYear"),Ne("GGGG","isoWeekYear"),Ne("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),$("G",Di),$("g",Di),$("GG",fi,di),$("gg",fi,di),$("GGGG",gi,hi),$("gggg",gi,hi),$("GGGGG",pi,ci),$("ggggg",pi,ci),X(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=y(t)}),X(["gg","GG"],function(e,n,i,s){n[s]=t.parseTwoDigitYear(e)}),R("Q",0,"Qo","quarter"),C("quarter","Q"),$("Q",ui),Q("Q",function(t,e){e[Oi]=3*(y(t)-1)}),R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),$("w",fi),$("ww",fi,di),$("W",fi),$("WW",fi,di),X(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=y(t)});var is={dow:0,doy:6};R("D",["DD",2],"Do","date"),C("date","D"),$("D",fi),$("DD",fi,di),$("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),Q(["D","DD"],Wi),Q("Do",function(t,e){e[Wi]=y(t.match(fi)[0],10)});var ss=L("Date",!0);R("d",0,"do","day"),R("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),R("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),R("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),$("d",fi),$("e",fi),$("E",fi),$("dd",wi),$("ddd",wi),$("dddd",wi),X(["dd","ddd","dddd"],function(t,e,n,i){var s=n._locale.weekdaysParse(t,i,n._strict);null!=s?e.d=s:u(n).invalidWeekday=t}),X(["d","e","E"],function(t,e,n,i){e[i]=y(t)});var rs="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),as="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),os="Su_Mo_Tu_We_Th_Fr_Sa".split("_");R("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),$("DDD",yi),$("DDDD",li),Q(["DDD","DDDD"],function(t,e,n){n._dayOfYear=y(t)}),R("H",["HH",2],0,"hour"),R("h",["hh",2],0,un),R("hmm",0,0,function(){return""+un.apply(this)+A(this.minutes(),2)}),R("hmmss",0,0,function(){return""+un.apply(this)+A(this.minutes(),2)+A(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+A(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+A(this.minutes(),2)+A(this.seconds(),2)}),dn("a",!0),dn("A",!1),C("hour","h"),$("a",ln),$("A",ln),$("H",fi),$("h",fi),$("HH",fi,di),$("hh",fi,di),$("hmm",mi),$("hmmss",_i),$("Hmm",mi),$("Hmmss",_i),Q(["H","HH"],xi),Q(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),Q(["h","hh"],function(t,e,n){e[xi]=y(t),u(n).bigHour=!0}),Q("hmm",function(t,e,n){var i=t.length-2;e[xi]=y(t.substr(0,i)),e[Ui]=y(t.substr(i)),u(n).bigHour=!0}),Q("hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;e[xi]=y(t.substr(0,i)),e[Ui]=y(t.substr(i,2)),e[Gi]=y(t.substr(s)),u(n).bigHour=!0}),Q("Hmm",function(t,e,n){var i=t.length-2;e[xi]=y(t.substr(0,i)),e[Ui]=y(t.substr(i))}),Q("Hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;e[xi]=y(t.substr(0,i)),e[Ui]=y(t.substr(i,2)),e[Gi]=y(t.substr(s))});var us=/[ap]\.?m?\.?/i,ds=L("Hours",!0);R("m",["mm",2],0,"minute"),C("minute","m"),$("m",fi),$("mm",fi,di),Q(["m","mm"],Ui);var ls=L("Minutes",!1);R("s",["ss",2],0,"second"),C("second","s"),$("s",fi),$("ss",fi,di),Q(["s","ss"],Gi);var hs=L("Seconds",!1);R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),$("S",yi,ui),$("SS",yi,di),$("SSS",yi,li);var cs;for(cs="SSSS";cs.length<=9;cs+="S")$(cs,vi);for(cs="S";cs.length<=9;cs+="S")Q(cs,fn);var fs=L("Milliseconds",!1);R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var ms=f.prototype;ms.add=ts,ms.calendar=ue,ms.clone=de,ms.diff=ye,ms.endOf=Oe,ms.format=De,ms.from=Me,ms.fromNow=Se,ms.to=Ye,ms.toNow=we,ms.get=I,ms.invalidAt=Le,ms.isAfter=le,ms.isBefore=he,ms.isBetween=ce,ms.isSame=fe,ms.isSameOrAfter=me,ms.isSameOrBefore=_e,ms.isValid=Fe,ms.lang=ns,ms.locale=ke,ms.localeData=Te,ms.max=Ji,ms.min=qi,ms.parsingFlags=He,ms.set=I,ms.startOf=be,ms.subtract=es,ms.toArray=Ge,ms.toObject=Pe,ms.toDate=Ue,ms.toISOString=ve,ms.toJSON=Ce,ms.toString=pe,ms.unix=xe,ms.valueOf=We,ms.creationData=Ve,ms.year=$i,ms.isLeapYear=gt,ms.weekYear=Ie,ms.isoWeekYear=Ae,ms.quarter=ms.quarters=Ze,ms.month=rt,ms.daysInMonth=at,ms.week=ms.weeks=Be,ms.isoWeek=ms.isoWeeks=Qe,ms.weeksInYear=Ee,ms.isoWeeksInYear=Re,ms.date=ss,ms.day=ms.days=sn,ms.weekday=rn,ms.isoWeekday=an,ms.dayOfYear=on,ms.hour=ms.hours=ds,ms.minute=ms.minutes=ls,ms.second=ms.seconds=hs,ms.millisecond=ms.milliseconds=fs,ms.utcOffset=jt,ms.utc=Zt,ms.local=$t,ms.parseZone=qt,ms.hasAlignedHourOffset=Jt,ms.isDST=Bt,ms.isDSTShifted=Qt,ms.isLocal=Xt,ms.isUtcOffset=Kt,ms.isUtc=te,ms.isUTC=te,ms.zoneAbbr=mn,ms.zoneName=_n,ms.dates=v("dates accessor is deprecated. Use date instead.",ss),ms.months=v("months accessor is deprecated. Use month instead",rt),ms.years=v("years accessor is deprecated. Use year instead",$i),ms.zone=v("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",zt);var _s=ms,ys={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},gs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ps=/\d{1,2}/,vs={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ds=k.prototype;Ds._calendar=ys,Ds.calendar=pn,Ds._longDateFormat=gs,Ds.longDateFormat=vn,Ds._invalidDate="Invalid date",Ds.invalidDate=Dn,Ds._ordinal="%d",Ds.ordinal=Mn,Ds._ordinalParse=ps,Ds.preparse=Sn,Ds.postformat=Sn,Ds._relativeTime=vs,Ds.relativeTime=Yn,Ds.pastFuture=wn,Ds.set=Y,Ds.months=et,Ds._months=Li,Ds.monthsShort=nt,Ds._monthsShort=Vi,Ds.monthsParse=it,Ds._monthsRegex=Ii,Ds.monthsRegex=ut,Ds._monthsShortRegex=Ni,Ds.monthsShortRegex=ot,Ds.week=$e,Ds._week=is,Ds.firstDayOfYear=Je,Ds.firstDayOfWeek=qe,Ds.weekdays=Ke,Ds._weekdays=rs,Ds.weekdaysMin=en,Ds._weekdaysMin=os,Ds.weekdaysShort=tn,Ds._weekdaysShort=as,Ds.weekdaysParse=nn,Ds.isPM=hn,Ds._meridiemParse=us,Ds.meridiem=cn,W("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===y(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),t.lang=v("moment.lang is deprecated. Use moment.locale instead.",W),t.langData=v("moment.langData is deprecated. Use moment.localeData instead.",G);var Ms=Math.abs,Ss=Rn("ms"),Ys=Rn("s"),ws=Rn("m"),ks=Rn("h"),Ts=Rn("d"),bs=Rn("w"),Os=Rn("M"),Ws=Rn("y"),xs=jn("milliseconds"),Us=jn("seconds"),Gs=jn("minutes"),Ps=jn("hours"),Cs=jn("days"),Fs=jn("months"),Hs=jn("years"),Ls=Math.round,Vs={s:45,m:45,h:22,d:26,M:11},Ns=Math.abs,Is=Vt.prototype;return Is.abs=Gn,Is.add=Cn,Is.subtract=Fn,Is.as=In,Is.asMilliseconds=Ss,Is.asSeconds=Ys,Is.asMinutes=ws,Is.asHours=ks,Is.asDays=Ts,Is.asWeeks=bs,Is.asMonths=Os,Is.asYears=Ws,Is.valueOf=An,Is._bubble=Ln,Is.get=En,Is.milliseconds=xs,Is.seconds=Us,Is.minutes=Gs,Is.hours=Ps,Is.days=Cs,Is.weeks=zn,Is.months=Fs,Is.years=Hs,Is.humanize=Jn,Is.toISOString=Bn,Is.toString=Bn,Is.toJSON=Bn,Is.locale=ke,Is.localeData=Te,Is.toIsoString=v("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Bn),Is.lang=ns,R("X",0,0,"unix"),R("x",0,0,"valueOf"),$("x",Di),$("X",Yi),Q("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),Q("x",function(t,e,n){n._d=new Date(y(t))}),t.version="2.12.0",function(t){Qn=t}(Ct),t.fn=_s,t.min=Ht,t.max=Lt,t.now=Bi,t.utc=a,t.unix=yn,t.months=bn,t.isDate=n,t.locale=W,t.invalid=l,t.duration=ee,t.isMoment=m,t.weekdays=Wn,t.parseZone=gn,t.localeData=G,t.isDuration=Nt,t.monthsShort=On,t.weekdaysMin=Un,t.defineLocale=x,t.updateLocale=U,t.locales=P,t.weekdaysShort=xn,t.normalizeUnits=F,t.relativeTimeThreshold=qn,t.prototype=_s,t});

/*
Pikaday
https://github.com/dbushell/Pikaday
*/
(function(root, factory) {
     "use strict";
     var moment;

     if (typeof exports === "object") {
          try {
               moment = require("moment")
          } catch (e) {}
          module.exports = factory(moment)
     } else if (typeof define === "function" && define.amd) {
          define(function(req) {
               var id = "moment";
               try {
                    moment = req(id)
               } catch (e) {}
               return factory(moment)
          })
     } else {
          root.Pikaday = factory(root.moment)
     }
})(this, function(moment) {
     "use strict";
     var hasMoment = typeof moment === "function",
          hasEventListeners = !!window.addEventListener,
          document = window.document,
          sto = window.setTimeout,
          addEvent = function(el, e, callback, capture) {
               if (hasEventListeners) {
                    el.addEventListener(e, callback, !!capture)
               } else {
                    el.attachEvent("on" + e, callback)
               }
          },
          removeEvent = function(el, e, callback, capture) {
               if (hasEventListeners) {
                    el.removeEventListener(e, callback, !!capture)
               } else {
                    el.detachEvent("on" + e, callback)
               }
          },
          fireEvent = function(el, eventName, data) {
               var ev;
               if (document.createEvent) {
                    ev = document.createEvent("HTMLEvents");
                    ev.initEvent(eventName, true, false);
                    ev = extend(ev, data);
                    el.dispatchEvent(ev)
               } else if (document.createEventObject) {
                    ev = document.createEventObject();
                    ev = extend(ev, data);
                    el.fireEvent("on" + eventName, ev)
               }
          },
          trim = function(str) {
               return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "")
          },
          hasClass = function(el, cn) {
               return (" " + el.className + " ").indexOf(" " + cn + " ") !== -1
          },
          addClass = function(el, cn) {
               if (!hasClass(el, cn)) {
                    el.className = el.className === "" ? cn : el.className + " " + cn
               }
          },
          removeClass = function(el, cn) {
               el.className = trim((" " + el.className + " ").replace(" " + cn + " ", " "))
          },
          isArray = function(obj) {
               return /Array/.test(Object.prototype.toString.call(obj))
          },
          isDate = function(obj) {
               return /Date/.test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime())
          },
          isWeekend = function(date) {
               var day = date.getDay();
               return day === 0 || day === 6
          },
          isLeapYear = function(year) {
               return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
          },
          getDaysInMonth = function(year, month) {
               return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
          },
          setToStartOfDay = function(date) {
               if (isDate(date)) date.setHours(0, 0, 0, 0)
          },
          dateCompare = function(a, b) {
               return a.getTime() === b.getTime()
          },
          extend = function(to, from, overwrite) {
               var prop, hasProp;
               for (prop in from) {
                    hasProp = to[prop] !== undefined;
                    if (hasProp && typeof from[prop] === "object" && from[prop] !== null && from[prop].nodeName === undefined) {
                         if (isDate(from[prop])) {
                              if (overwrite) {
                                   to[prop] = new Date(from[prop].getTime())
                              }
                         } else if (isArray(from[prop])) {
                              if (overwrite) {
                                   to[prop] = from[prop].slice(0)
                              }
                         } else {
                              to[prop] = extend({}, from[prop], overwrite)
                         }
                    } else if (overwrite || !hasProp) {
                         to[prop] = from[prop]
                    }
               }
               return to
          },
          adjustCalendar = function(calendar) {
               if (calendar.month < 0) {
                    calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
                    calendar.month += 12
               }
               if (calendar.month > 11) {
                    calendar.year += Math.floor(Math.abs(calendar.month) / 12);
                    calendar.month -= 12
               }
               return calendar
          },
          defaults = {
               field: null,
               start: null,
               end: null,
               label: null,
               variant: null,
               output: null,
               arrow: null,
               bound: undefined,
               position: "bottom left",
               reposition: true,
               format: "YYYY-MM-DD",
               formatDelimiter: null,
               defaultDate: null,
               setDefaultDate: false,
               firstDay: 0,
               minDate: null,
               maxDate: null,
               yearRange: 10,
               showWeekNumber: false,
               minYear: 0,
               maxYear: 9999,
               minMonth: undefined,
               maxMonth: undefined,
               startRange: null,
               endRange: null,
               isRTL: false,
               yearSuffix: "",
               showMonthAfterYear: false,
               numberOfMonths: 1,
               mainCalendar: "left",
               container: undefined,
               i18n: {
                    previousMonth: "",
                    nextMonth: "",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
               },
               theme: null,
               onSelect: null,
               onOpen: null,
               onClose: null,
               onDraw: null
          },
          renderDayName = function(opts, day, abbr) {
               day += opts.firstDay;
               while (day >= 7) {
                    day -= 7
               }
               return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day]
          },
          renderDay = function(opts) {
               if (opts.isEmpty) {
                    var newDay, newMonth, newDays, currentMonth;

                    currentMonth = opts.month + 1;

                    newDays = new Date(opts.year, currentMonth, 0).getDate();

                    if (opts.day < 1) {
                         newMonth = opts.month;
                         newDay = new Date(opts.year, newMonth, 0).getDate();
                         newDay = newDay + opts.day;
                    } else {
                         newDay = 1;
                         newDay = opts.day - newDays;
                    }

                    return '<td class="is-empty"><span class="">' + newDay + '</span></td>';
               }
               var arr = [];
               if (opts.isDisabled) {
                    arr.push("is-disabled")
               }
               if (opts.isToday) {
                    arr.push("is-today")
               }
               if (opts.isSelected) {
                    arr.push("is-selected")
               }
               if (opts.isInRange) {
                    arr.push("is-inrange")
               }
               if (opts.isStartRange) {
                    if (true) {}
                    arr.push("is-startrange")
               }
               if (opts.isEndRange) {
                    arr.push("is-endrange")
               }
               date.id++;
               return '<td onMouseEnter="date.hover(event.target);" data-identifier-parent="'+date.parent+'" data-identifier="' + (date.id) + '" data-day="' + opts.day + '" class="' + arr.join(" ") + '">' + '<a class="pika-button pika-day" ' + 'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' + opts.day + "</a>" + "</td>"
          },
          renderWeek = function(d, m, y) {
               var onejan = new Date(y, 0, 1),
                    weekNum = Math.ceil(((new Date(y, m, d) - onejan) / 864e5 + onejan.getDay() + 1) / 7);
               return '<td class="pika-week">' + weekNum + "</td>"
          },
          renderRow = function(days, isRTL) {
               return "<tr>" + (isRTL ? days.reverse() : days).join("") + "</tr>"
          },
          renderBody = function(rows) {
               return "<tbody>" + rows.join("") + "</tbody>"
          },
          renderHead = function(opts) {
               var i, arr = [];
               if (opts.showWeekNumber) {
                    arr.push("<th></th>")
               }
               for (i = 0; i < 7; i++) {
                    arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + "</abbr></th>")
               }
               return "<thead>" + (opts.isRTL ? arr.reverse() : arr).join("") + "</thead>"
          },
          renderTitle = function(instance, c, year, month, refYear) {
               var i, j, arr, opts = instance._o,
                    isMinYear = year === opts.minYear,
                    isMaxYear = year === opts.maxYear,
                    html = '<div class="pika-title">',
                    monthHtml, yearHtml, prev = true,
                    next = true;
               for (arr = [], i = 0; i < 12; i++) {
                    arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' + (i === month ? " selected" : "") + (isMinYear && i < opts.minMonth || isMaxYear && i > opts.maxMonth ? "disabled" : "") + ">" + opts.i18n.months[i] + "</option>")
               }
               monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join("") + "</select></div>";
               if (isArray(opts.yearRange)) {
                    i = opts.yearRange[0];
                    j = opts.yearRange[1] + 1
               } else {
                    i = year - opts.yearRange;
                    j = 1 + year + opts.yearRange
               }
               for (arr = []; i < j && i <= opts.maxYear; i++) {
                    if (i >= opts.minYear) {
                         arr.push('<option value="' + i + '"' + (i === year ? " selected" : "") + ">" + i + "</option>")
                    }
               }
               yearHtml = '<span>&nbsp;</span><div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join("") + "</select></div>";
               if (opts.showMonthAfterYear) {
                    html += yearHtml + monthHtml
               } else {
                    html += monthHtml + yearHtml
               }
               if (isMinYear && (month === 0 || opts.minMonth >= month)) {
                    prev = false
               }
               if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
                    next = false
               }
               if (c === 0) {
                    html += '<a class="pika-prev pika-nav' + (prev ? "" : " is-disabled") + '"></a>'
               }
               if (c === instance._o.numberOfMonths - 1) {
                    html += '<a class="pika-next pika-nav' + (next ? "" : " is-disabled") + '"></a>'
               }
               return html += "</div>"
          },
          renderTable = function(opts, data) {
               return '<table cellpadding="0" cellspacing="0" class="pika-table">' + renderHead(opts) + renderBody(data) + "</table>"
          },
          Pikaday = function(options) {
               var self = this,
                    opts = self.config(options);

               self._onMouseDown = function(e) {
                    if ((f.device == "mobile" && f.drag) || (!self._v)) {
                         return
                    }

                    e = e || window.event;
                    
                    var target = e.target || e.srcElement;
                    
                    if (!target) {
                         return
                    }

                    if (target.tagName.toLowerCase() == 'b'||target.tagName.toLowerCase() == 'span'||target.tagName.toLowerCase() == 'i') {
                         target = target.parentElement;
                    }

                    self.setState(target);

                    if (!hasClass(target, "is-disabled")) {
                         if (hasClass(target, "dd-select")) {
                              return
                         } else if (hasClass(target, "pika-button") && !hasClass(target, "is-empty")) {
                              self.setDate(new Date(target.getAttribute("data-pika-year"), target.getAttribute("data-pika-month"), target.getAttribute("data-pika-day")));
                         } else if (hasClass(target, "pika-prev")) {
                              self.prevMonth()
                         } else if (hasClass(target, "pika-next")) {
                              self.nextMonth()
                         } else if (hasClass(target, "pika-options")) {
                              return false;
                         }
                    }

                    if (!hasClass(target, "pika-select")) {
                         if (e.preventDefault) {
                              e.preventDefault()
                         } else {
                              e.returnValue = false;
                              return false
                         }
                    } else {
                         self._c = true
                    }
               };
               self._onChange = function(e) {
                    e = e || window.event;
                    var target = e.target || e.srcElement;
                    if (!target) {
                         return
                    }
                    if (hasClass(target, "pika-select-month")) {
                         self.gotoMonth(target.value)
                    } else if (hasClass(target, "pika-select-year")) {
                         self.gotoYear(target.value)
                    }                    
               };
               self._onInputChange = function(e) {
                    var date;
                    if (e.firedBy === self) {
                         return
                    }
                    if (hasMoment) {
                         date = moment(opts.field.value, opts.format);
                         date = date && date.isValid() ? date.toDate() : null
                    } else {
                         date = new Date(Date.parse(opts.field.value))
                    }
                    if (isDate(date)) {
                         self.setDate(date)
                    }
                    if (!self._v) {
                         self.show()
                    }
               };
               self._onInputFocus = function() {
                    self.show()
               };
               self._onInputClick = function() {
                    self.show()
               };
               self._onInputBlur = function() {
                    var pEl = document.activeElement;
                    do {
                         if (hasClass(pEl, "pika-single")) {
                              return
                         }
                    } while (pEl = pEl.parentNode);
                    if (!self._c) {
                         self._b = sto(function() {
                              self.hide()
                         }, 50)
                    }
                    self._c = false
               };
               self._onClick = function(e) {
                    e = e || window.event;

                    var target = e.target || e.srcElement,
                         pEl = target;

                    if (!target) {
                         return
                    }

                    if (!hasEventListeners && hasClass(target, "pika-select")) {
                         if (!target.onchange) {
                              target.setAttribute("onchange", "return;");
                              addEvent(target, "change", self._onChange)
                         }
                    }

                    self.setState(target);

                    do {
                         if (hasClass(pEl, "pika-single") || pEl === opts.trigger) {
                              return
                         }
                    } while (pEl = pEl.parentNode);
               };

               self.el = document.createElement("div");
               self.el.className = "pika-single " + opts.variant + (opts.isRTL ? " is-rtl" : "") + (opts.theme ? " " + opts.theme : "");

               try {
                    self.el.setAttribute('data-date-id', opts.variant);
               } catch (err) { /* IE8 BUG */ }

               addEvent(self.el, "mousedown", self._onMouseDown, true);
               addEvent(self.el, "touchend", self._onMouseDown, true);
               addEvent(self.el, "change", self._onChange);

               if (opts.field) {
                    if (opts.container) {
                         opts.container.appendChild(self.el)
                    } else if (opts.bound) {
                         document.getElementById("fusion").appendChild(self.el)
                    } else {
                         opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling)
                    }
                    addEvent(opts.field, "change", self._onInputChange);
                    if (!opts.defaultDate) {
                         if (hasMoment && opts.field.value) {
                              opts.defaultDate = moment(opts.field.value, opts.format).toDate()
                         } else {
                              opts.defaultDate = new Date(Date.parse(opts.field.value))
                         }
                         opts.setDefaultDate = true
                    }
               }
               var defDate = opts.defaultDate;
               if (isDate(defDate)) {
                    if (opts.setDefaultDate) {
                         self.setDate(defDate, true)
                    } else {
                         self.gotoDate(defDate)
                    }
               } else {
                    self.gotoDate(new Date)
               }
               if (opts.bound) {
                    this.hide();
                    self.el.className += " is-bound";
                    addEvent(opts.trigger, "click", self._onInputClick);
                    addEvent(opts.trigger, "focus", self._onInputFocus);
                    addEvent(opts.trigger, "blur", self._onInputBlur)
               } else {
                    this.show()
               }
          };

     Pikaday.prototype = {
          config: function(options) {
               if (!this._o) {
                    this._o = extend({}, defaults, true)
               }
               var opts = extend(this._o, options, true);
               date.parent = opts.variant;
               opts.isRTL = !!opts.isRTL;
               opts.field = opts.field && opts.field.nodeName ? opts.field : null;
               opts.theme = typeof opts.theme === "string" && opts.theme ? opts.theme : null;
               opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);
               opts.trigger = opts.trigger && opts.trigger.nodeName ? opts.trigger : opts.field;
               opts.disableWeekends = !!opts.disableWeekends;
               opts.disableDayFn = typeof opts.disableDayFn === "function" ? opts.disableDayFn : null;
               //opts.numberOfMonths = parseInt(opts.numberOfMonths, 11) || 1;
               if (!isDate(opts.minDate)) {
                    opts.minDate = false
               }
               if (!isDate(opts.maxDate)) {
                    opts.maxDate = false
               }
               if (opts.minDate && opts.maxDate && opts.maxDate < opts.minDate) {
                    opts.maxDate = opts.minDate = false
               }
               if (opts.minDate) {
                    this.setMinDate(opts.minDate)
               }
               if (opts.maxDate) {
                    this.setMaxDate(opts.maxDate)
               }
               if (isArray(opts.yearRange)) {
                    var fallback = (new Date).getFullYear() - 10;
                    opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                    opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback
               } else {
                    opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                    if (opts.yearRange > 100) {
                         opts.yearRange = 100
                    }
               }
               return opts
          },
          toString: function(format) {
               return !isDate(this._d) ? "" : hasMoment ? moment(this._d).format(format || this._o.format) : this._d.toDateString()
          },
          getMoment: function() {
               return hasMoment ? moment(this._d) : null
          },
          setMoment: function(date, preventOnSelect) {
               if (hasMoment && moment.isMoment(date)) {
                    this.setDate(date.toDate(), preventOnSelect)
               }
          },
          getDate: function() {
               return isDate(this._d) ? new Date(this._d.getTime()) : null
          },
          setDate: function(date, preventOnSelect) {
               if (!date) {
                    this._d = null;

                    if (this._o.field) {
                         this._o.field.value = "";
                         fireEvent(this._o.field, "change", {
                              firedBy: this
                         })
                    }
                    return this.draw()
               }
               if (typeof date === "string") {
                    date = new Date(Date.parse(date))
               }
               if (!isDate(date)) {
                    return
               }
               var min = this._o.minDate,
                    max = this._o.maxDate;
               if (isDate(min) && date < min) {
                    date = min
               } else if (isDate(max) && date > max) {
                    date = max
               }
               this._d = new Date(date.getTime());
               setToStartOfDay(this._d);
               this.gotoDate(this._d);

               if (!preventOnSelect && typeof this._o.onSelect === "function") {
                    this._o.onSelect.call(this, this.getDate())
               }
          },
          gotoDate: function(date) {
               var newCalendar = true;
               if (!isDate(date)) {
                    return
               }
               if (this.calendars) {
                    var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                         lastVisibleDate = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                         visibleDate = date.getTime();
                    lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
                    lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
                    newCalendar = visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate
               }
               if (newCalendar) {
                    this.calendars = [{
                         month: date.getMonth(),
                         year: date.getFullYear()
                    }];
                    if (this._o.mainCalendar === "right") {
                         this.calendars[0].month += 1 - this._o.numberOfMonths
                    }
               }
               this.adjustCalendars()
          },
          adjustCalendars: function() {
               this.calendars[0] = adjustCalendar(this.calendars[0]);
               for (var c = 1; c < this._o.numberOfMonths; c++) {
                    this.calendars[c] = adjustCalendar({
                         month: this.calendars[0].month + c,
                         year: this.calendars[0].year
                    })
               }
               this.draw()
          },
          gotoToday: function() {
               this.gotoDate(new Date)
          },
          gotoMonth: function(month) {
               if (!isNaN(month)) {
                    this.calendars[0].month = parseInt(month, 10);
                    this.adjustCalendars()
               }
          },
          nextMonth: function() {
               this.calendars[0].month++;
               this.adjustCalendars()
          },
          prevMonth: function() {
               this.calendars[0].month--;
               this.adjustCalendars()
          },
          gotoYear: function(year) {
               if (!isNaN(year)) {
                    this.calendars[0].year = parseInt(year, 10);
                    this.adjustCalendars()
               }
          },
          setMinDate: function(value) {
               if (value != null) {
                    setToStartOfDay(value);
                    this._o.minDate = value;
                    this._o.minYear = value.getFullYear();
                    this._o.minMonth = value.getMonth();
               }
               this.draw()
          },
          setMaxDate: function(value) {
               if (value != null) {
                    setToStartOfDay(value);
                    this._o.maxDate = value;
                    this._o.maxYear = value.getFullYear();
                    this._o.maxMonth = value.getMonth();
               }
               this.draw()
          },
          setStartRange: function(value) {
               this._o.startRange = value
          },
          setEndRange: function(value) {
               this._o.endRange = value
          },
          setState: function(target) {
               if (target.className.indexOf('fusion-date-')!=-1) {

                    date.checkin = (hasClass(target, "fusion-date-checkout"))?false:true;

                    if (date.checkin) {
                         f.removeClass(document.body, 'dates-checkout');
                         this.setMinDate(today);
                    } else {
                         f.addClass(document.body, 'dates-checkout');
                         if (date.start != "") {
                              this.setMinDate(date.add(date.start,1));
                         }
                         this.setMaxDate(date.add(date.start,365));
                    }

                    this.adjustPosition();
                    this.draw();
               }
          },
          draw: function(force) {
               if (!this._v && !force) {
                    return
               }

               var opts = this._o,
                    minYear = opts.minYear,
                    maxYear = opts.maxYear,
                    minMonth = opts.minMonth,
                    maxMonth = opts.maxMonth,
                    html = "";
               if (this._y <= minYear) {
                    this._y = minYear;
                    if (!isNaN(minMonth) && this._m < minMonth) {
                         this._m = minMonth
                    }
               }
               if (this._y >= maxYear) {
                    this._y = maxYear;
                    if (!isNaN(maxMonth) && this._m > maxMonth) {
                         this._m = maxMonth
                    }
               }
               for (var c = 0; c < opts.numberOfMonths; c++) {
                    html += '<div class="pika-lendar'+((c+1)==opts.numberOfMonths?" last":"")+'">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year) + this.render(this.calendars[c].year, this.calendars[c].month) + "</div>"
               }
               this.el.innerHTML = '' +
                    // ARROW
                    '<div class="date-arrow" style="left:' + this._o.arrow + 'px;"></div>' +
                    // CONTENT
                    '<div class="date-content">' + html + '</div>' +
                    // FOOTER
                    '<div class="date-footer"></div>';
               if (opts.bound) {
                    if (opts.field.type !== "hidden") {
                         sto(function() {
                              opts.trigger.focus()
                         }, 1)
                    }
               }
               if (typeof this._o.onDraw === "function") {
                    var self = this;
                    sto(function() {
                         self._o.onDraw.call(self);
                    }, 0)
               }
          },
          adjustPosition: function() {
               date.id = 0;
               var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;
               if (this._o.container) return;
               this.el.style.position = "absolute";
               field = this._o.trigger;
               pEl = field;
               width = this.el.offsetWidth;
               height = this.el.offsetHeight;
               viewportWidth = window.innerWidth || document.documentElement.clientWidth;
               viewportHeight = window.innerHeight || document.documentElement.clientHeight;
               scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

               if (typeof field.getBoundingClientRect === "function") {
                    clientRect = field.getBoundingClientRect();
                    left = clientRect.left + window.pageXOffset;
                    top = clientRect.bottom + window.pageYOffset;
               } else {
                    left = pEl.offsetLeft;
                    top = pEl.offsetTop + pEl.offsetHeight;
                    while (pEl = pEl.offsetParent) {
                         left += pEl.offsetLeft;
                         top += pEl.offsetTop
                    }
               }

               // Check for 'Bottom Right'
               if ((this._o.reposition && left + width > viewportWidth) || (this._o.position.indexOf('right') > -1 && left - width + field.offsetWidth > 0)) {
                    left = left - width + field.offsetWidth;
               }

               // Update Arrow Position
               if (f.hasClass(document.body, 'dates-checkout') && this._o.output.length > 1) {
                    this._o.arrow = Math.abs(left - document.querySelectorAll(this._o.label[1])[0].getBoundingClientRect().left) + (document.querySelectorAll(this._o.label[1])[0].offsetWidth/2);
               } else {
                    this._o.arrow = Math.abs(left - document.querySelectorAll(this._o.label[0])[0].getBoundingClientRect().left) + (document.querySelectorAll(this._o.label[0])[0].offsetWidth/2);
               }

               this.el.style.left = left + 'px';
               this.el.style.top = top + 'px';
          },
          render: function(year, month) {
               var opts = this._o,
                    now = new Date,
                    days = getDaysInMonth(year, month),
                    before = new Date(year, month, 1).getDay(),
                    data = [],
                    row = [];
               setToStartOfDay(now);
               if (opts.firstDay > 0) {
                    before -= opts.firstDay;
                    if (before < 0) {
                         before += 7
                    }
               }
               var cells = days + before,
                    after = cells;
               while (after > 7) {
                    after -= 7
               }
               cells += 7 - after;
               for (var i = 0, r = 0; i < cells; i++) {
                    var day = new Date(year, month, 1 + (i - before)),
                         isSelected = isDate(this._d) ? dateCompare(day, this._d) : false,
                         isToday = dateCompare(day, now),
                         isEmpty = i < before || i >= days + before,
                         isStartRange = opts.startRange && dateCompare(opts.startRange, day),
                         isEndRange = opts.endRange && dateCompare(opts.endRange, day),
                         isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                         isDisabled = opts.minDate && day < opts.minDate || opts.maxDate && day > opts.maxDate || opts.disableWeekends && isWeekend(day) || opts.disableDayFn && opts.disableDayFn(day),
                         dayConfig = {
                              day: 1 + (i - before),
                              month: month,
                              year: year,
                              isSelected: isSelected,
                              isToday: isToday,
                              isDisabled: isDisabled,
                              isEmpty: isEmpty,
                              isStartRange: isStartRange,
                              isEndRange: isEndRange,
                              isInRange: isInRange
                         };
                    row.push(renderDay(dayConfig));
                    if (++r === 7) {
                         if (opts.showWeekNumber) {
                              row.unshift(renderWeek(i - before, month, year))
                         }
                         data.push(renderRow(row, opts.isRTL));
                         row = [];
                         r = 0
                    }
               }
               return renderTable(opts, data)
          },
          isVisible: function() {
               return this._v
          },
          show: function() {
               var self = this;

               if (!this._v) {
                    removeClass(this.el, "is-hidden");
                    this._v = true;

                    if (this._o.bound) {
                         date.close();

                         f.addClass(document.body, 'dates-active');

                         addClass(this.el, "active");
                         addEvent(document, "click", this._onClick);
                         this.adjustPosition()
                    } else {
                         f.removeClass(document.body, 'dates-active');
                    }

                    if (typeof this._o.onOpen === "function") {
                         this._o.onOpen.call(this, this.getDate());
                    }
               }
          },
          hide: function() {
               var v = this._v;
               var self = this;

               if (v !== false) {
                    if (this._o.bound) {
                         removeEvent(document, "click", this._onClick)
                         removeClass(this.el, "active");
                         addClass(this.el, "is-hidden");
                    }

                    this.el.style.position = "static";
                    this.el.style.left = "auto";
                    this.el.style.top = "auto";

                    this._v = false;
                    if (v !== undefined && typeof this._o.onClose === "function") {
                         this._o.onClose.call(this)
                    }
               }
          },
          destroy: function() {
               this.hide();
               removeEvent(this.el, "mousedown", this._onMouseDown, true);
               removeEvent(this.el, "touchend", this._onMouseDown, true);
               removeEvent(this.el, "change", this._onChange);
               if (this._o.field) {
                    removeEvent(this._o.field, "change", this._onInputChange);
                    if (this._o.bound) {
                         removeEvent(this._o.trigger, "click", this._onInputClick);
                         removeEvent(this._o.trigger, "focus", this._onInputFocus);
                         removeEvent(this._o.trigger, "blur", this._onInputBlur)
                    }
               }
               if (this.el.parentNode) {
                    this.el.parentNode.removeChild(this.el)
               }
          }
     };
     return Pikaday
});

date.configs = {
     i18n: {
          previousMonth: '',
          nextMonth: '',
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          monthsShorts: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          weekdaysShortAlt: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     },
     bound: true,
     container: undefined,
     firstDay: 0,
     format: "MM/DD/YY",
     minDate: new Date(),
     position: "left",
     reposition: true,
     theme: "fusion",
     onOpen: function() {
          this._o.numberOfMonths = 1;

          this.adjustCalendars();

          date.count = 0;
     },
     onSelect: function(selected) {
          f.removeClass('.fusion-date-state', 'active');

          selected.count++;

          if (date.checkin) {
               date.start = selected;
               this.setStartRange(date.start);
               this.setMinDate(date.start);
               this.setMaxDate(date.add(date.start,28));
               f.addClass(document.body, 'dates-checkout');
          } else {
               date.end = selected;
               this.setEndRange(date.end);
               this.setMinDate(date.today);
               this.setMaxDate(date.end);
               f.removeClass(document.body, 'dates-checkout');
          }

          date.checkin = !date.checkin;

          if (date.start != "" && date.end != "") {
               if (date.compare(date.start, date.end) <= 0 || date.compare(date.start, date.end) > 28) {
                    date.start = selected;
                    date.end = "";
                    this.setStartRange(date.start);
                    this.setEndRange(null);
                    this.setMinDate(date.start);
                    this.setMaxDate(date.add(date.start,365));
                    f.addClass(document.body, 'dates-checkout');
                    date.checkin = false;
               } else {
                    for (var i = 0; i < date.calendars.length; i++) {
                         var a, checkin, checkout;

                         a = date.calendars[i]._o.output;
                         a_format = date.calendars[i]._o.format;
                         checkin = document.querySelectorAll(a[0])[0];
                         checkout = a.length > 1 ? document.querySelectorAll(a[1])[0] : undefined;

                         if (checkin.tagName.toLowerCase()=="input") {
                              document.querySelectorAll(date.calendars[i]._o.output[0])[0].value = moment(date.start).format(a_format);
                              if (checkout !== undefined) {
                                   document.querySelectorAll(date.calendars[i]._o.output[1])[0].value = moment(date.end).format(a_format);
                              }
                         } else {
                              document.querySelectorAll(date.calendars[i]._o.output[0])[0].innerHTML = moment(date.start).format(a_format);
                              if (checkout !== undefined) {
                                   document.querySelectorAll(date.calendars[i]._o.output[1])[0].innerHTML = moment(date.end).format(a_format);
                              }
                         }

                         date.calendars[i].setStartRange(date.start);
                         date.calendars[i].setEndRange(date.end);
                    }

                    f.addClass(document.body, 'dates-set');

                    if (f.device != "mobile" && this._o.bound && date.count >= 2) {
                         date.close();
                    }

                    this.setMinDate(date.today);
                    this.setMaxDate(date.add(date.today, 365));
               }
          } else {
               f.removeClass(document.body, 'dates-set');
          }

          this.adjustPosition();
          this.draw();
     }
};