var channelid = "UCnB-Fhp5FQfCZNfdAvm27Qw"; // REPLACE WITH YOUR CHANNEL ID
var channelname = "@BeogradCom"; // REPLACE WITH YOUR CHANNEL NAME

var channelidurl = 'https://www.youtube.com/channel/' + channelid;
var channelnameurl = 'https://www.youtube.com/' + channelname;

function onlive() {
  // DO SOMETHING IF CHANNEL IS LIVE STREAMING
}

/* REST OF THE CODE */

//fetch(channelnameurl).then(function (response) {
fetch(channelidurl).then(function (response) {
	return response.text();
}).then(function (html) {
  if (html.includes("hqdefault_live.jpg")) {
onlive();
  }
}).catch(function (err) {
	console.warn('Something went wrong', err);
});
