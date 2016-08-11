function updateSumbitTime() {
submitTime = new Date();
alert('Thank you. Your request has been received. A specialist will assist you shortly.');
}


var submitTime = new Date();

function updateSumbitTime() {
submitTime = new Date();
alert('Thank you. Your request has been received. A specialist will assist you shortly.');
}

function checkWaitTime() {
var currentTime = new Date();
    alert('Approximately ' + Math.round((currentTime - submitTime)/1000) + ' minute(s)');
}
