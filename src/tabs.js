/**
 * Jquery Tabs
 *
 * @author DaVee8k
 * @version 0.1.1
 * @license WTFNMFPL 1.0
 */
(function ($) {
	$.fn.tabs = function (option) {
		var self = this;
		this.ac = option['activeClass'] !== undefined ? option['activeClass'] : "active";
		this.tabs = option['tabs'] !== undefined ? option['tab'] : "li";
		if (this.tabs && $(self).find(this.tabs).length === 0) return 0;

		/**
		 * Change active tab and displayed block
		 * @param {DOMelement} link
		 */
		this.changeTab = function (link) {
			if (this.tabs) {
				var item = $(link).closest(this.tabs);
				$(item).siblings().removeClass(this.ac);
				$(item).addClass(this.ac);
			}
			else {
				$(this).find("a").removeClass(this.ac);
				$(link).addClass(this.ac);
			}
			var tab = $(link).attr("href");
			$(tab).siblings().removeClass(this.ac);
			$(tab).addClass(this.ac);
		};

		$(this).find("a").click(function (e) {
			self.changeTab(this);
			return false;
		});

		if (option['open'] !== false && window.location.hash) {
			$(this).find("a").each(function () {
				if (this.hash == window.location.hash) return self.changeTab(this);
			});
		}
	};
}(jQuery));