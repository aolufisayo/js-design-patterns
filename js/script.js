var sudoChat = (function () {
	var leadself = 'Me: ';
	var leadcomputer = "PC: ";
	var aSaid = ["This is a Cyber Chat"];
	var msgYes = "Yes, that's a great idea.";
	var msgNo = "No, that must be a mistake.";
	var aSassyStuff = ["Like mold on books, grow myths on history.",
		"She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."];

	var echo = function (msg) {
		aSaid.push("<div>" + msg + "</div>");
		var asaidLength = aSaid.length;
		var start = Math.max(asaidLength - 6, 0);
		out = "";
		for (var i = start; i < asaidLength; i++) {
			out += aSaid[i]
		}
		$(".advert").html(out)
		$("#talk span").text(msg)
	}

	return {
		talk: function (msg) {
			echo(leadself + msg)
		},
		replyYesNo: function () {
			var msg = Math.random() > .5 ? msgYes : msgNo;
			echo(leadcomputer + msg)
		},

		saySassyStuff: function () {
			var msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
			echo(leadcomputer + msg)
		},
	}

})()
