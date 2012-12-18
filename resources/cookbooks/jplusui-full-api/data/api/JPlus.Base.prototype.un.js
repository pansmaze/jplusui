﻿jsonp({"fullName":'JPlus.Base.prototype.un',"source":'Base.js',"sourceFile":'data/source/Base.js.html#JPlus-Base-prototype-un',"summary":'<p>\u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\u3002</p>\n',"params":[{"type":'String',"name":'eventName',"defaultValue":'',"summary":'<p>\u4e8b\u4ef6\u540d\u3002\u5982\u679c\u4e0d\u4f20\u9012\u6b64\u53c2\u6570\uff0c\u5219\u5220\u9664\u5168\u90e8\u4e8b\u4ef6\u7684\u5168\u90e8\u76d1\u542c\u5668\u3002</p>\n'},{"type":'Function',"name":'eventHandler',"defaultValue":'',"summary":'<p>\u56de\u8c03\u5668\u3002\u5982\u679c\u4e0d\u4f20\u9012\u6b64\u53c2\u6570\uff0c\u5728\u5220\u9664\u6307\u5b9a\u4e8b\u4ef6\u7684\u5168\u90e8\u76d1\u542c\u5668\u3002</p>\n'}],"returns":{"type":'',"summary":'<p>this</p>\n'},"remark":'<p>\u6ce8\u610f: <code>function () {} !== function () {}</code>, \u8fd9\u610f\u5473\u7740\u4e0b\u5217\u4ee3\u7801\u7684 un \u5c06\u5931\u8d25:</p>\n\n<pre>\nelem.on(\'click\', function () {});\nelem.un(\'click\', function () {});   // \u65e0\u6cd5\u5220\u9664 on \u7ed1\u5b9a\u7684\u51fd\u6570\u3002\n</pre>\n\n<p>\u6b63\u786e\u7684\u505a\u6cd5\u662f\u628a\u51fd\u6570\u4fdd\u5b58\u8d77\u6765\u3002 <pre>\nvar fn =  function () {};\nelem.on(\'click\', fn);\nelem.un(\'click\', fn); // fn  \u88ab\u6210\u529f\u5220\u9664\u3002</p>\n\n<p>\u5982\u679c\u540c\u4e00\u4e2a <em>eventListener</em> \u88ab\u589e\u52a0\u591a\u6b21\uff0c un \u53ea\u5220\u9664\u7b2c\u4e00\u4e2a\u3002\n</pre></p>\n',"example":'<pre>\n\n// \u521b\u5efa\u4e00\u4e2a\u7c7b A\nvar A = new Class({\n\n});\n\n// \u521b\u5efa\u4e00\u4e2a\u53d8\u91cf\u3002\nvar a = new A();\n\nvar fn = function (e) {\nreturn true;\n};\n\n// \u7ed1\u5b9a\u4e00\u4e2a click \u4e8b\u4ef6\u3002\na.on(\'click\', fn);\n\n// \u5220\u9664\u4e00\u4e2a click \u4e8b\u4ef6\u3002\na.un(\'click\', fn);\n</pre>\n',"name":'un',"memberOf":'JPlus.Base',"memberType":'method'});