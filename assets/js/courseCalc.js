/*
Course calculator - caculate the current part of the course done + resume course.
By (c) Ad5001 2016
*/
count = document.getElementsByTagName("article").length - 1 // The hidden page ;)
list = [];
for (i = 0; i < count; i++) {
    list[document.getElementsByTagName("article")[i].id] = Math.round(i / count * 100);
}
setInterval(function() {
    document.getElementById("course").value = list[location.hash.substr(1)];
    document.getElementById("progress").innerHTML = list[location.hash.substr(1)] + "%";
}, 100);