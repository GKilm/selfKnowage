!function() {
	var i = null;
	function t() {
		this.textData = null, this.htmlData = null, i = this
	}
	function d(t) {
		if (140 < window.getSelection().getRangeAt(0).toString().length) {
			var e;
			t.preventDefault(), e = window.getSelection() + i.textData;
			window.getSelection(), i.htmlData;
			if (t.clipboardData)
				t.clipboardData.setData("text/plain", e);
			else {
				if (window.clipboardData)
					return window.clipboardData.setData("text", e);
						n = e,
						(a = document.createElement("textarea")).style.cssText = "position: fixed;z-index: -10;top: -50px;left: -50px;",
						a.innerHTML = n,
						document.getElementsByTagName("body")[0].appendChild(a),
						a.select(), document.execCommand("copy")
			}
		}
		var n, a
	}
	t.prototype.init = function(t, e, n) {
		var a, i, o;
		this.textData = e, this.htmlData = n, i = "copy", o = d,
				(a = t).addEventListener ? a.addEventListener(i, o, !1)
						: a.attachEvent ? a.attachEvent("on" + i, o) : a["on"
								+ i] = o
	}, window.csdn = window.csdn ? window.csdn : {}, csdn.copyright = new t
}();