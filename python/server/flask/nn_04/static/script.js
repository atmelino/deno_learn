
async function reloadImg(url) {
    await fetch(url, { cache: 'reload', mode: 'no-cors' })
    document.body.querySelectorAll(`img[src='${url}']`)
        .forEach(img => img.src = url)
}

function sendRequest(params) {
    const url = 'http://localhost:8989?' + params;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            printlnMessage('resultsText', JSON.stringify(json));
            printlnMessage('resultsText', JSON.stringify(json.image));
            // newimg = "static/%s" % json.image;
            newimg = "static/" + json.image;
            printlnMessage('resultsText', newimg);
            const img = document.getElementById("nn");
            img.src = newimg;
            reloadImg(newimg)
        })
}

function activation() {
    params = 'cmd=act'
    sendRequest(params);
}


function backward() {
    params = 'cmd=bwd'
    sendRequest(params);
}

function zeroGradient() {
    params = 'cmd=zer'
    sendRequest(params);
}

function updateParams() {
    params = 'cmd=upd'
    sendRequest(params);
}

function optStep() {
    params = 'cmd=ost'
    sendRequest(params);
}

function resetModel() {
    params = 'cmd=res'
    sendRequest(params);
}




function sendPOST() {
    yourUrl = "/"
    value = "123"
    var xhr = new XMLHttpRequest();
    xhr.open("POST", yourUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value: value
    }));

    console.log("sayHello")
    // location.reload();
    console.log("Hello, World!");
}

function printMessage(target, message) {
    elementId = document.getElementById(target);
    if (elementId != null) {
        elementId.innerHTML += message;
        elementId.scrollTop = elementId.scrollHeight;
    }
}

function printlnMessage(target, message) {
    elementId = document.getElementById(target);
    if (elementId != null) {
        printMessage(target, message);
        elementId.innerHTML += '\n';
    }
}

function clearMessage(target) {
    document.getElementById(target).innerHTML = '';
}