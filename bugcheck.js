window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var faceParam = urlParams.get('face');
    var titleParam = urlParams.get('title');
    var messageParam = urlParams.get('message');
    var codeParam = urlParams.get('code');
    var infoParam = urlParams.get('info');
    var qrCodeParam = urlParams.get('qrCode');
    var percentageParam = urlParams.get('percentage');

    if (faceParam) {
        document.getElementById('bugcheck-face').innerText = faceParam;
    }

    if (titleParam) {
        document.getElementById('bugcheck-title').innerText = titleParam;
    }

    if (messageParam) {
        document.getElementById('bugcheck-message').innerText = messageParam;
    }

    if (codeParam) {
        document.getElementById('stop-code').innerText = codeParam;
    } else {
        document.getElementById('stop-code').innerText = 'Stop code: 0x' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(8, '0');
    }

    if (infoParam) {
        document.getElementById('bugcheck-info').innerText = infoParam;
    }

    var percentage;
    if (percentageParam) {
        percentage = percentageParam;
    } else {
        percentage = Math.floor(Math.random() * 101);
    }
    document.getElementById('bugcheck-percentage').innerText = percentage + '% complete';

    if (qrCodeParam) {
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: qrCodeParam,
            width: 128,
            height: 128
        });
    } else {
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            width: 128,
            height: 128
        });
    }
};