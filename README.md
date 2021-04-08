# Check if Youtube channel is streaming at the moment, without using YT API.

Education purposes only. I'm not encouraging anyone to use this.

Simple script for checking if Youtube channel is live streaming at the moment - without using the YT API.

```javascript
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
```
