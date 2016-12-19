/* 
Page downloader & switcher to make code cleaner.
By (c) Ad5001 2016
*/

articles = document.getElementsByTagName("article");
console.log(articles);
/*l = location.pathname.split("/");
l[l.length - 1] = undefined;
dir = l.join("/");*/
for (i = 0; i < articles.length; i++) {
    console.log("pages/" + articles[i].id + ".html");
    $.get("pages/" + articles[i].id + ".html", function(responseText) {
        setPage(responseText);
    });
}


function setPage(text) {
    page = text.substr(5).split(" -->")[0]; // Temporary working solution
    document.getElementById(page).innerHTML = text + '<div class="close" onclick="location.hash=\'\';">Close</div>';
}