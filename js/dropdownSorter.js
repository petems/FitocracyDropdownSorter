$('#history_activity_chooser').ready(function(){
  sortDropDownListByText();
});

function sortDropDownListByText() {
	$("#history_activity_chooser").html($("#history_activity_chooser option").sort(function (a, b) {
    	return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
	}))
	$("#history_activity_chooser").val($("#history_activity_chooser option:first").val());
}