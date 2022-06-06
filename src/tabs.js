/**
 * Jquery Tabs
 *
 * @author DaVee8k
 * @version 0.1.0
 * @license WTFNMFPL 1.0
 */
(function ($) {
	$.fn.tabs = function (option) {
		var self = this;
		var tabPanels = $(self).find("li");
		if (tabPanels.length === 0) return 0;

		this.changeTab = function (link) {
			$(link).parent().siblings().removeClass("active");
			$(link).parent().addClass("active");
			var tab = $(link).attr("href");
			$(tab).siblings().removeClass("active");
			$(tab).addClass("active");
		}

		$(this).find("a").click(function (e) {
			self.changeTab(this);
			return false;
		});

		if (option["open"] !== false && window.location.hash) {
			$(this).find("a").each(function () {
				if (this.hash == window.location.hash) return self.changeTab(this);
			});
		}
	};
}(jQuery));