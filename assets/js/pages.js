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
                a: "In the src folder OR src/Your_Username folder",
                b: "In the Your_USERNAME/SRC folder",
                c: "In your resources folder",
                valid: "1"
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
                b: "$this->saveConfig();",
                c: "$this->getConfig()->save();",
                valid: "3"
            },
            {
                question: "How much is a tick?",
                a: "20 ticks = 1/20 of a second",
                b: "20 ticks = 1 second",
                c: "20 ticks = 20 seconds",
                valid: "2"
            },
            {
                question: "Which method is used to detect a positive number?",
                a: "is_number",
                b: "is_int",
                c: "is_float",
                valid: "2"
            },
            {
                question: "Which class should be extended to make a task?",
                a: "pocketmine\\plugin\\PluginTask",
                b: "pocketmine\\scheduler\\Task",
                c: "pocketmine\\scheduler\\PluginTask",
                valid: "3"
            },
                 {
                     question: "(For more advenced users) How do we call this kind of PHP methods",
                     a: "OOP (Oriented Object Programming)",
                     b: "OPP (Object Programming Possibility)",
                     c: "OOP (Object Oriented Programming",
                     valid: 3
                 }
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
        alert("Your score is : " + (score / quizStep * 100) + "%");
        quizStep = -1;
        nextQuestion();
        score = 0;
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
        answers[num - 1].style.backgroundColor = "lightgray";
    }, 2000);
}

function nextQuestion() {
    quizStep++;
    question.innerHTML = QandA[quizStep].question;
    answers[0].innerHTML = QandA[quizStep].a;
    answers[1].innerHTML = QandA[quizStep].b;
    answers[2].innerHTML = QandA[quizStep].c;
}
