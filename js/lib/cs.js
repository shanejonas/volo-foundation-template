/**
 * @license cs 0.4.2 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/require-cs for details
 */
define(["coffee-script"],function(a){var b,c,d=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],e=function(){throw new Error("Environment unsupported.")},f={};return typeof process!="undefined"&&process.versions&&!!process.versions.node?(b=require.nodeRequire("fs"),e=function(a,c){c(b.readFileSync(a,"utf8"))}):typeof window!="undefined"&&window.navigator&&window.document||typeof importScripts!="undefined"?(c=function(){var a,b,c;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(b=0;b<3;b++){c=d[b];try{a=new ActiveXObject(c)}catch(e){}if(a){d=[c];break}}if(!a)throw new Error("getXhr(): XMLHttpRequest not available");return a},e=function(a,b){var d=c();d.open("GET",a,!0),d.onreadystatechange=function(a){d.readyState===4&&b(d.responseText)},d.send(null)}):typeof Packages!="undefined"&&(e=function(a,b){var c="utf-8",d=new java.io.File(a),e=java.lang.System.getProperty("line.separator"),f=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(d),c)),g,h,i="";try{g=new java.lang.StringBuffer,h=f.readLine(),h&&h.length()&&h.charAt(0)===65279&&(h=h.substring(1)),g.append(h);while((h=f.readLine())!==null)g.append(e),g.append(h);i=String(g.toString())}finally{f.close()}b(i)}),{get:function(){return a},write:function(a,b,c){if(f.hasOwnProperty(b)){var d=f[b];c.asModule(a+"!"+b,d)}},version:"0.4.2",load:function(b,c,d,g){var h=c.toUrl(b+".coffee");e(h,function(e){try{e=a.compile(e,g.CoffeeScript)}catch(i){throw i.message="In "+h+", "+i.message,i}g.isBuild&&(f[b]=e),g.isBuild||(e+="\r\n//@ sourceURL="+h),d.fromText(b,e),c([b],function(a){d(a)})})}}})