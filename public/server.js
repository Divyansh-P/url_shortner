"use strict";
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
function vis() {
    const e1 = document.getElementById("fname").value;
    fetch("/api/short", {
        method: "POST",
        body: JSON.stringify({
            origurl: e1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => {
        console.log(res.json());
    })
        .then(json => console.log(json));
    console.log(e1);
}
