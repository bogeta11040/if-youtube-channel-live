var channelid = "UCnB-Fhp5FQfCZNfdAvm27Qw"; // REPLACE WITH YOUR CHANNEL ID

function onlive() {
  // DO SOMETHING IF CHANNEL IS LIVE STREAMING
}

/* REST OF THE CODE */

fetch('https://www.youtube.com/channel/' + channelid).then(function (response) {
	return response.text();
}).then(function (html) {
  if (html.includes("hqdefault_live.jpg")) {
onlive();
  }
}).catch(function (err) {
	console.warn('Something went wrong', err);
});
