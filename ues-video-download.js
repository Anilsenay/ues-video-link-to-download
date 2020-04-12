var videoWrapper = document.getElementsByClassName("video-wrapper");
var videoID = "#" + videoWrapper[1].id;

var video = [];
while(video.length === 0){
  var video = flowplayer(videoID);
}
video.load();

var videoEng = document.getElementsByClassName("fp-engine");
var link = videoEng[0].src;

console.log(link);

var linkElement = document.createElement("a");
linkElement.download = ""+link+".mp4";
linkElement.target = "_blank";

// Construct the URI
linkElement.href = link;
document.body.appendChild(linkElement);
linkElement.click();

// Cleanup the DOM
document.body.removeChild(linkElement);
delete linkElement;
