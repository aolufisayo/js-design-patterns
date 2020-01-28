(function (win, $) {
	var CircleGeneratorSingleton = (function () {
		var instance;
		function init() {
			var _aCircle = [];
			var _stage = $('.advert')

			function _position(circle, top, left) {
				circle.css('top', top);
				circle.css('left', left);
			};
			function create(top, left) {
				var circle = $('<div class="circle"></div>');
				_position(circle, top, left)
				return circle;
			};
			function add(circle) {
				_stage.append(circle)
				_aCircle.push(circle);
			};
			function index() {
				return _aCircle.length;
			};

			return {
				index: index,
				create: create,
				add: add
			}

		}
		return {
			getInstance: function () {
				if (!instance) {
					instance = init();
				}
				return instance;
			}
		}
	})()
	$(win.document).ready(function () {
		$('.advert').click(function (e) {
			var cg = CircleGeneratorSingleton.getInstance();
			var circle = cg.create(e.pageY - 25, e.pageX - 25)
			cg.add(circle);

		})

	})
})(window, jQuery)