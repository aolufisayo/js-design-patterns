var sudoChat = (function () {
	var _leadself = 'Me: ';
	var _leadcomputer = "PC: ";
	var _aSaid = ["This is a Cyber Chat"];
	var _msgYes = "Yes, that's a great idea.";
	var _msgNo = "No, that must be a mistake.";
	var _aSassyStuff = ["Like mold on books, grow myths on history.",
		"She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."];

	var _echo = function (msg) {
		_aSaid.push("<div>" + msg + "</div>");
		var asaidLength = _aSaid.length;
		var start = Math.max(asaidLength - 6, 0);
		out = "";
		for (var i = start; i < asaidLength; i++) {
			out += _aSaid[i]
		}
		$(".advert").html(out)
		$("#talk span").text(msg)
	};
	var talk = function (msg) {
		_echo(_leadself + msg)
	};
	var replyYesNo = function () {
		var msg = Math.random() > .5 ? _msgYes : _msgNo;
		_echo(_leadcomputer + msg)
	};

	var saySassyStuff = function () {
		var msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)];
		_echo(_leadcomputer + msg)
	};

	return {
		talk: talk,
		replyYesNo: replyYesNo,
		saySassyStuff: saySassyStuff
	}

})()
