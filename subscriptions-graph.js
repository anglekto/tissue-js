function createBarChart (data) {

	var chart = document.createElement("div");

	chart.style.position = "relative";

	var height = 0;
	for (var i = 0; i < data.length; i += 1) {
		height = Math.max(height, data[i].value);
	}
	chart.style.height = (height + 10) + "px";

	chart.style.borderBottomStyle = "solid";
	chart.style.borderBottomWidth = "0px";

	var barPosition = 0;

	var barWidth = 39;
	for (i = 0; i < data.length; i += 1) {
		var dataItem = data[i];
		var bar = document.createElement("div");
		bar.className = "bars";
		bar.style.position = "absolute";
		bar.style.left = barPosition + "px";
		bar.style.width = barWidth + "px";
		bar.style.backgroundColor = dataItem.color;
		bar.style.height = dataItem.value + "px";
		bar.style.borderStyle = "ridge";
		bar.style.borderColor = dataItem.color;
		bar.style.MozBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
		bar.style.WebkitBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
		bar.style.boxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
		bar.style.MozBorderRadiusTopLeft = "8px";
		bar.style.WebkitBorderTopLeftRadius = "8px";
		bar.style.borderTopLeftRadius = "8px";
		bar.style.MozBorderRadiusTopRight = "8px";
		bar.style.WebkitBorderTopRightRadius = "8px";
		bar.style.borderTopRightRadius = "8px";
		bar.style.backgroundImage =
			"-mox-linear-gradient(" + dataItem.color + ", black)";
		bar.style.backgroundImage =
			"-webkit-gradient(linear, 0% 0%, 0% 100%," +
			"color-stop(0, " + dataItem.color + "), color-stop(1, black))";
		bar.style.backgroundImage =
			"linear-gradient(" + dataItem.color + ", black)";
		bar.style.bottom = "0px";
		chart.appendChild(bar);
		barPosition += (barWidth * 2);
	}

	return chart;

};

function reset() {
    var bars = document.getElementsByClassName("bars");
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.height = "0px";
    }
}

window.onload = function () {
	var colors = [{color: "red", value: 40},
	{ color: "blue", value: 10 },
	{ color: "orange", value: 100 },
	{ color: "yellow", value: 65 },
	{ color: "green", value: 75 },
	{ color: "purple", value: 120 },
	{ color: "sienna", value: 121 },
	{ color: "brown", value: 175 },
	{ color: "pink", value: 220 },
	{ color: "olive", value: 275 },
	{ color: "skyblue", value: 300 },
	{ color: "lightyellow", value: 15 },
];

var chart = createBarChart(colors);
document.querySelector("main").appendChild(chart);
};
