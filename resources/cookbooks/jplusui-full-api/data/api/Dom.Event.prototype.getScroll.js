﻿jsonp({"fullName":'Dom.Event.prototype.getScroll',"source":'Base_1.js',"sourceFile":'data/source/Base_1.js.html#Dom-Event-prototype-getScroll',"summary":'<p>\u83b7\u53d6\u5f53\u524d Dom \u5bf9\u8c61\u7684\u6eda\u52a8\u6761\u7684\u4f4d\u7f6e\u3002</p>\n',"returns":{"type":'Point',"summary":'<p>\u8fd4\u56de\u7684\u5bf9\u8c61\u5305\u542b\u4e24\u4e2a\u6574\u578b\u5c5e\u6027\uff1ax \u548c y\u3002</p>\n'},"remark":'<p>\u6b64\u65b9\u6cd5\u5bf9\u53ef\u89c1\u548c\u9690\u85cf\u5143\u7d20\u5747\u6709\u6548\u3002</p>\n',"example":'<p>\u83b7\u53d6\u7b2c\u4e00\u6bb5\u76f8\u5bf9\u6eda\u52a8\u6761\u9876\u90e8\u7684\u504f\u79fb\u3002</p>\n\n<h5>HTML:</h5>\n\n<pre lang=\"htm\" format=\"none\">&lt;p&gt;Hello&lt;/p&gt;&lt;p&gt;2nd Paragraph&lt;/p&gt;</pre>\n\n<h5>JavaScript:</h5>\n\n<pre>\nvar p = Dom.query(\"p\").item(0);\ntrace( \"scrollTop:\" + p.getScroll() );\n</pre>\n\n<h5>\u7ed3\u679c:</h5>\n\n<pre lang=\"htm\" format=\"none\">\n&lt;p&gt;Hello&lt;/p&gt;&lt;p&gt;scrollTop: 0&lt;/p&gt;\n</pre>\n',"name":'getScroll',"memberOf":'Dom.Event',"memberType":'method',"params":[]});