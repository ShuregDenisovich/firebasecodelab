(function(window, document){
'use strict';function g(a){a=a||[];for(var b=[],c=0;c<a.length;c++){var d=(a[c]||"").trim().toLowerCase();d&&b.push(d)}b.sort();return b}function h(){this.f=document.getElementById("cards").querySelectorAll(".codelab-card");for(var a=0;a<this.f.length;a++){var b=this.f[a];b.g=(b.dataset.title||"").trim().toLowerCase();b.c=(b.dataset.category||"").trim().toLowerCase();b.b=g((b.dataset.tags||"").split(","))}this.a={b:[]}}
function k(a,b){if(!a.a.c&&!a.a.text&&!a.a.b.length)return!0;if(a.a.c&&a.a.c!==b.c||a.a.text&&-1===b.g.indexOf(a.a.text))return!1;if(0<a.a.b.length){for(var c=!1,d=0,f=0;d<a.a.b.length&&f<b.b.length;)if(a.a.b[d]<b.b[f])d++;else if(a.a.b[d]>b.b[f])f++;else{c=!0;break}if(!c)return!1}return!0};document.addEventListener("DOMContentLoaded",function(){var a=new h;var b=window.location.search.slice(1),c={};if(b)for(b=b.split("&");0<b.length;){var d=decodeURIComponent(b.shift()),f="",e=d.indexOf("=");0<e&&(f=d.substring(e+1),d=d.substring(0,e));e=c[d];e||(e=[],c[d]=e);e.push(f)}c={c:(c.cat||[])[0],b:c.tags};a.a.c=(c.c||"").trim().toLowerCase();a.a.text=(c.text||"").trim().toLowerCase();a.a.b=g(c.b);for(c=0;c<a.f.length;c++)b=a.f[c],b.style.display=k(a,b)?null:"none"});
})(window, document);
