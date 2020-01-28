(function (win, $) {
	var RedCircle = function () {
		this.item = $('<div class="circle"></div>');
	}
	var BlueCircle = function () {
		this.item = $('<div class="circle" style="background:blue"></div>');
	}
	var CircleFactory = function () {
		this.create = function (color) {
			if (color == "blue") {
				return new BlueCircle();
			} else {
				return new RedCircle();
			}
		}
	}
	var CircleGeneratorSingleton = (function () {
		var instance;
		function init() {
			var _aCircle = [];
			var _stage = $('.advert')
			var _circleFactory = new CircleFactory();

			function _position(circle, top, left) {
				circle.css('top', top);
				circle.css('left', left);
			};
			function create(top, left, color) {
				var circle = _circleFactory.create(color).item
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
		$(document).keypress(function (e) {
			if (e.key === 'a') {
				var cg = CircleGeneratorSingleton.getInstance();
				var circle = cg.create(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600), "blue")
				cg.add(circle);
			}
		})

	})
})(window, jQuery)