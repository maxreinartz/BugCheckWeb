window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search);
  var faceParam = urlParams.get("face");
  var titleParam = urlParams.get("title");
  var messageParam = urlParams.get("message");
  var codeParam = urlParams.get("code");
  var infoParam = urlParams.get("info");
  var imgParam = urlParams.get("img");
  var percentageParam = urlParams.get("percentage");

  var bgColorParam = urlParams.get("bgColor");
  var textColorParam = urlParams.get("textColor");

  if (faceParam) {
    document.getElementById("bugcheck-face").innerText = faceParam;
  }

  if (titleParam) {
    document.getElementById("bugcheck-title").innerText = titleParam;
  }

  if (messageParam) {
    document.getElementById("bugcheck-message").innerText = messageParam;
  }

  if (codeParam) {
    document.getElementById("stop-code").innerText = codeParam;
  } else {
    document.getElementById("stop-code").innerText =
      "Stop code: 0x" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(8, "0");
  }

  if (infoParam) {
    document.getElementById("bugcheck-info").innerText = infoParam;
  }

  var percentage;
  if (percentageParam) {
    percentage = percentageParam;
  } else {
    percentage = Math.floor(Math.random() * 101);
  }
  document.getElementById("bugcheck-percentage").innerText =
    percentage + "% complete";

  if (imgParam) {
    document.getElementById("bugcheck-img").src = imgParam;
  } else {
    document.getElementById("bugcheck-img").src = "assets/qrcode.png";
  }

  if (bgColorParam) {
    bgColorParam = "#" + bgColorParam;
    document.body.style.backgroundColor = bgColorParam;
  } else {
    document.body.style.backgroundColor = "#0000AA";
  }

    if (textColorParam) {
        textColorParam = "#" + textColorParam;
        document.body.style.color = textColorParam;
    } else {
        document.body.style.color = "#FFFFFF";
    }
};
