function complete() {
    document.getElementById("content").innerHTML = '<img id="downloadcomplete" src="media/thankyou.gif">';
}

function downloadedPage(event) {
    //change to file transfer graphic
    document.getElementById("content").innerHTML = '<img id="filetransfer" src="media/filetransfer3.gif">';
    //after x seconds, change to download complete graphic
    setTimeout(complete, 3000);
}