
function search() {
    var artist = document.getElementById("artist").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/search", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                displayResults(response.songs);
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send("artist=" + encodeURIComponent(artist));
}

function displayResults(songs) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Top Tracks:</h2>";
    var s = "<table>";
    for (var i = 0; i < songs.length; i++) {
       s+= "<tr><td>" + (i + 1) + "</td><td>" + songs[i].name + "</td></tr>";
      
    }
    s+= "</table>";
    resultsDiv.innerHTML += s;
    console.log(resultsDiv.innerHTML);
}
