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
    if (page == "quiz") {
        /*
Quiz maker
By (c) Ad5001 2016
*/

        QandA = [{
                question: "Where should you put your main file?",
                a: "In the src folder",
                b: "In te src/<Your_Username> folder",
                c: "In your resources folder",
                valid: "2"
            },
            {
                question: "How to log a message on the console?",
                a: "$this->info('My message');",
                b: "$this->getLogger()->info(My message);",
                c: "$this->getLogger()->info('My message');",
                valid: "3"
            },
            {
                question: "What is the class for the sender of a command?",
                a: "\\pocketmine\\command\\CommandSender",
                b: "\\pocketmine\\command\\CmdSender",
                c: "\\pocketmine\\Player",
                valid: "1"
            },
            {
                question: "How to save the plugin config?",
                a: "$this->getConfig()->reload();",
                b: "$this->saveConifg();",
                c: "$this->getConfig()->save();",
                valid: "3"
            },
            {
                question: "How much is a tick?",
                a: "1 tick = 20 seconds",
                b: "1 tick = 1/20 seconds",
                c: "1 tick = 20 seconds",
                valid: "2"
            },
        ]

        quizStep = -1;
        score = 0;
        question = document.getElementById("question");
        answers = [document.getElementById("answer1"), document.getElementById("answer2"), document.getElementById("answer3")];
        nextQuestion();


    }
}

function quizValidate(num) {
    if (typeof QandA[quizStep + 1] == "undefined") {
        alert("Your score is : " + score + " / " + quizStep);
        quizStep = 0;
        location.hash = "#";
        return;
    }
    if (num == QandA[quizStep].valid) {
        score++;
        answers[num - 1].style.backgroundColor = "lime";
    } else {
        answers[num - 1].style.backgroundColor = "red";
    }
    setTimeout(function() {
        nextQuestion();
        answers[num - 1].style.backgroundColor = "gray";
    }, 2000);
}

function nextQuestion() {
    quizStep++;
    question.innerHTML = QandA[quizStep].question;
    answers[0].innerHTML = QandA[quizStep].a;
    answers[1].innerHTML = QandA[quizStep].b;
    answers[2].innerHTML = QandA[quizStep].c;
}