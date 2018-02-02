function getRequest() {
    sendRequest();
}
function postRequest() {
  sendPostRequest();
}

function buildXHTTPRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4)
            if (this.status == 200) {
                var response = JSON.parse(this.responseText);
                document.getElementById("response").innerHTML = response[0].title;
            }else  if(this.status = 201){
                document.getElementById("response").innerHTML = "Post has been created";
            } else if (this.status == 404) {
                document.getElementById("errorMessage").innerHTML = "NotFound";
            }
            else {
                document.getElementById("errorMessage").innerHTML = "Operation failed with status code" + this.status;
            }
    };
    return xhttp;
}
function sendRequest() {
    var xhttp = buildXHTTPRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}

function sendPostRequest() {
    var xhttp = buildXHTTPRequest();
    xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}
