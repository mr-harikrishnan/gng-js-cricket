//container Div

const container = document.createElement("div")  // container
container.style.width = "100%"
container.style.height = "100vh"
container.style.border = "1px solid black"
container.style.background = "#aad1f7"
document.body.appendChild(container)

// ----------------------------------------------------------------------------

//container.header

const header = document.createElement("div")  //header
header.style.background = "#baa1f9"
header.style.width = "100%"
header.style.height = "10vh"
header.style.border = "1px solid black"
header.innerText = "CRICKET 10"
header.style.textAlign = "center"
header.style.fontSize = "50px"
header.style.paddingTop = "5px"
container.appendChild(header)

// --------------------------------------------------------------------------------------

//conatiner.controller

const controller = document.createElement("div")  // controler
controller.style.background = "#daa1f1"
controller.style.width = "100%"
controller.style.height = "25vh"
controller.style.border = "1px solid black"
controller.style.display = "flex"
container.appendChild(controller)


//container.controller.team1
const team1 = document.createElement("div")
team1.style.width = "40%"
team1.style.height = "100%"
team1.style.border = "1px solid black"
team1.style.display = "flex"
team1.style.flexDirection = "column"

team1.style.alignItems = "center"
controller.appendChild(team1)

var t1Head = document.createElement("h2")
t1Head.innerText = "TEAM 1 SCORE"
team1.appendChild(t1Head)

var t1ScoreBox = document.createElement("div")
t1ScoreBox.setAttribute("id", "t1scoreBox")
t1ScoreBox.innerText = 0
t1ScoreBox.style.fontSize = "30px"
team1.appendChild(t1ScoreBox)

var t1HitBox = document.createElement("div")
t1HitBox.innerText = "HIT"
t1HitBox.style.textAlign = "center"
t1HitBox.style.paddingTop = "5px"
t1HitBox.style.width = "60px"
t1HitBox.style.height = "29px"
t1HitBox.style.background = "blue"
t1HitBox.style.color = "white"
t1HitBox.style.fontSize = "20px"
t1HitBox.style.borderRadius = "5px"
t1HitBox.setAttribute("id", "t1HitBox")
team1.appendChild(t1HitBox)
//  ---------------------------------------

//container.controller.timer
const timer = document.createElement("div")
timer.style.width = "20%"
timer.style.height = "100%"
timer.style.border = "1px solid black"
timer.style.textAlign = "center"
timer.setAttribute("id", "timer")
controller.appendChild(timer)

var timerHead = document.createElement("h1")
timerHead.innerText = "TIMER"
timer.appendChild(timerHead)

var timerCount = document.createElement("h1")
timerCount.setAttribute("id", "timerCount")
timerCount.innerText = 60
timer.appendChild(timerCount)


//  --------------------------------------------
//container.controller.team2
const team2 = document.createElement("div")
team2.style.width = "40%"
team2.style.height = "100%"
team2.style.border = "1px solid black"
team2.style.display = "flex"
team2.style.flexDirection = "column"

team2.style.alignItems = "center"
controller.appendChild(team2)

var t2Head = document.createElement("h2")
t2Head.innerText = "TEAM 2 SCORE"
team2.appendChild(t2Head)

var t2ScoreBox = document.createElement("div")
t2ScoreBox.innerText = 0
t2ScoreBox.style.fontSize = "30px"
t2ScoreBox.setAttribute("id", "t2ScoreBox")
team2.appendChild(t2ScoreBox)

var t2HitBox = document.createElement("div")
t2HitBox.innerText = "HIT"
t2HitBox.style.textAlign = "center"
t2HitBox.style.paddingTop = "5px"
t2HitBox.style.width = "60px"
t2HitBox.style.height = "29px"
t2HitBox.style.background = "blue"
t2HitBox.style.color = "white"
t2HitBox.style.fontSize = "20px"
t2HitBox.style.borderRadius = "5px"
t2HitBox.setAttribute("id", "t2HitBox")
team2.appendChild(t2HitBox)


// ------------------------------------------------------------------------------------------

//container.resultGen
const resultGen = document.createElement("div")
resultGen.style.width = "100%"
resultGen.style.height = "7%"
resultGen.style.background = "#ebe1f1"
resultGen.style.border = "1px solid black"
resultGen.style.display = "flex"
resultGen.style.justifyContent = "center"
resultGen.style.alignItems = "center"
container.appendChild(resultGen)

var resultGenBtn = document.createElement("div")
resultGenBtn.style.background = "blue"
resultGenBtn.style.height = "30px"
resultGenBtn.style.width = "160px"
resultGenBtn.style.paddingTop = "5px"
resultGenBtn.style.paddingLeft = "9px"
resultGenBtn.innerText = "GENERATE RESULT"
resultGenBtn.style.color = "white"
resultGenBtn.style.borderRadius = "5px"
resultGenBtn.setAttribute("id", "resultGenBtn")
resultGen.appendChild(resultGenBtn)


// ---------------------------------------------------------------------------------------------
//container.scoreBoard

const scoreBoard = document.createElement("div")
scoreBoard.style.width = "100%"
scoreBoard.style.height = "58vh"
scoreBoard.style.background = "#abe1f1"
scoreBoard.style.border = "1px solid black"
scoreBoard.style.display = "flex"
container.appendChild(scoreBoard)

//container.scoreBoard.team1
const team1Scores = document.createElement("div")
team1Scores.style.width = "40%"
team1Scores.style.height = "100%"
team1Scores.style.border = "1px solid black"
team1Scores.style.display = "flex"
team1Scores.style.justifyContent = "center"
team1Scores.style.flexDirection = "column"
team1Scores.style.alignItems = "center"
team1Scores.innerText = "TEAM 1 SCORE BOARD"

scoreBoard.appendChild(team1Scores)

//table 1
var table1 = document.createElement("table");
table1.setAttribute("id", "t1ScoreTable")
table1.style.border = "1px solid black";
team1Scores.appendChild(table1);

var bollNo = 1
var playerNo = 1
for (var i = 0; i < 11; i++) {
    if (i == 0) {
        var trh = document.createElement("tr")
        table1.appendChild(trh)
        for (var j = 0; j < 8; j++) {

            var th = document.createElement("th")

            if (j == 0) {
                th.innerText = "TEAM 1"
            }
            if (j == 7) {
                th.innerText = "TOTAL"
            }
            if (j != 0 && j != 7) {
                th.innerText = `B${bollNo}`
                bollNo++
            }
            th.style.border = "1px solid black"
            th.style.padding = "5px"
            trh.appendChild(th)
        }

    }
    else {
        var trd = document.createElement("tr")

        table1.appendChild(trd)
        for (var j = 0; j < 8; j++) {
            var td = document.createElement("td")
            td.style.border = "1px solid black"
            td.style.padding = "5px"

            if (j == 0) {
                td.innerText = `PLAYER${playerNo}`
                playerNo++
            }
            else {
                td.innerText = ""
                td.setAttribute("id", `t1${i}${j}`)
            }
            trd.appendChild(td)
        }


    }
}









// ----------------------------------------------------------
//container.scoreBoard.teamResult
const teamResult = document.createElement("div")
teamResult.style.width = "20%"
teamResult.style.height = "100%"
teamResult.style.border = "1px solid black"
teamResult.style.textAlign = "center"
scoreBoard.appendChild(teamResult)

var matchWonBy = document.createElement("h2")
matchWonBy.innerText = "MATCH WON BY"
matchWonBy.setAttribute("id", "matchWonBy")
teamResult.appendChild(matchWonBy)

var manOfTheMatch = document.createElement("h2")
manOfTheMatch.innerText = "MAN OF THE MATCH"
teamResult.appendChild(manOfTheMatch)

var startBtn = document.createElement("button")
startBtn.setAttribute("id", "startBtn")
startBtn.innerText = "START"
startBtn.style.background = "green"
startBtn.style.color = "white"
startBtn.style.height = "30px"
startBtn.style.fontSize = "18px";
startBtn.style.fontFamily = "TIMESROMEN"
startBtn.style.borderRadius = "5px"
startBtn.style.marginTop = "130px"

teamResult.appendChild(startBtn)
// ----------------------------------------------------------------
//container.scoreBoard.team1
const team2Scores = document.createElement("div")
team2Scores.style.width = "40%"
team2Scores.style.height = "100%"
team2Scores.style.display = "flex"
team2Scores.style.justifyContent = "center"
team2Scores.style.alignItems = "center"
team2Scores.style.flexDirection = "column"
team2Scores.style.border = "1px solid black"
team2Scores.innerText = "TEAM 2 SCORE BOARD"
scoreBoard.appendChild(team2Scores)




//table 2
var table2 = document.createElement("table");
table2.style.border = "1px solid black";
table2.setAttribute("id", "t2ScoreTable")
team2Scores.appendChild(table2);

var bollNo = 1
var playerNo = 1
for (var i = 0; i < 11; i++) {
    if (i == 0) {
        var trh = document.createElement("tr")
        table2.appendChild(trh)
        for (var j = 0; j < 8; j++) {

            var th = document.createElement("th")

            if (j == 0) {
                th.innerText = "TEAM 2"
            }
            if (j == 7) {
                th.innerText = "TOTAL"
            }
            if (j != 0 && j != 7) {
                th.innerText = `B${bollNo}`
                bollNo++
            }
            th.style.border = "1px solid black"
            th.style.padding = "5px"
            trh.appendChild(th)
        }

    }
    else {
        var trd = document.createElement("tr")

        table2.appendChild(trd)
        for (var j = 0; j < 8; j++) {
            var td = document.createElement("td")
            td.setAttribute("id", `t2${i}${j}`)
            td.style.border = "1px solid black"
            td.style.padding = "5px"

            if (j == 0) {
                td.innerText = `PLAYER${playerNo}`
                playerNo++
            }
            else {
                td.innerText = ""
            }
            trd.appendChild(td)
        }


    }
}


// -------------------------------------------------------------------------------------------------------------------------------
// DESIGN COMPvarED
// ------------------------------------------------------------------------------------------------------------------------------


// TEAM 1 HIT FUNCTIONs

var startBtn = document.getElementById("startBtn")
var t1scoreBox = document.getElementById("t1scoreBox") //team1 score box
var t1HitBox = document.getElementById("t1HitBox") //team1 hit box
var t1ScoreTable = document.getElementById("t1ScoreTable")  //team1 score table
var t2ScoreBox = document.getElementById("t2ScoreBox")  //team2 score box
var t2HitBox = document.getElementById("t2HitBox") //team2 hit box
var t2ScoreTable = document.getElementById("t2ScoreTable")  //team2 score table


var timerTotalCount = 30
var highScore=0
var highScorePlayer


var timerCount = document.getElementById("timerCount")

startBtn.addEventListener("click", function () {

    //STARTING FIRST TEAM

    //TEAM 1 STARTING SET INTERVAL FUNCTION 
    var timerVariable = setInterval(function () {
        timerTotalCount -= 1
        timerCount.innerText = timerTotalCount


        if (timerTotalCount == 0 ||t1currentRow == 11) {

    
                t1HitBox.style.display = "none"
                clearInterval(timerVariable)
                timerTotalCount = 30
            



            // TEAM 1 STARTING SET INTERVAL FUNCTION 

            var timerVariable2 = setInterval(function () {
                timerTotalCount -= 1
                timerCount.innerText = timerTotalCount

                if (timerTotalCount == 0 || t2currentRow == 11 ) {

                    clearInterval(timerVariable2)
                    t2HitBox.style.display = "none"

                    if(t1TotalScores<t2TotalScores){
                        matchWonBy.innerText = "MATCH WON BY !TEAM 2"
                    }
                    else{
                        matchWonBy.innerText = "MATCH WON BY TEAM 1"
                    }
                    console.log(highScore,highScorePlayer)


                }

            }, 1000);

            /// ---------------------------------------------
            //TEAM 2 hit functions
            // ----------------------------------------------

            var t2TotalScores = 0
            var t2currentRow = 1
            var t2currentCel = 1
            var t2playerScore = 0

            t2HitBox.addEventListener("click", function () {
                var t2score = Math.floor(Math.random() * 7)

                t2TotalScores += t2score
                t2playerScore += t2score
                t2ScoreBox.innerText = t2TotalScores
                var changingCellValue = document.getElementById(`t2${t2currentRow}${t2currentCel}`)


                if (t2currentCel < 7) {
                    changingCellValue.innerText = t2score
                    t2currentCel++
                }

                if (t2score == 0 || t2currentCel == 7) {
                    var playerTotalValue = document.getElementById(`t2${t2currentRow}${7}`)
                    playerTotalValue.innerText = t2playerScore
                    if(highScore<t2playerScore){
                        highScore=t2playerScore
                        highScorePlayer=`TEAM 2 PLAYER${t2currentRow}`
        
                    }
                    t2playerScore = 0
                    t2currentCel = 1
                    t2currentRow++

                }


            })

        }

    }, 1000);


    // TEAM 1 STARTING HIT  FUNCTION 

    var t1TotalScores = 0
    var t1currentRow = 1
    var t1currentCel = 1
    var t1playerScore = 0
    t1HitBox.addEventListener("click", function () {
        var t1score = Math.floor(Math.random() * 7)

        t1TotalScores += t1score
        t1playerScore += t1score
        t1scoreBox.innerText = t1TotalScores
        var changingCellValue = document.getElementById(`t1${t1currentRow}${t1currentCel}`)


        if (t1currentCel < 7) {
            changingCellValue.innerText = t1score
            t1currentCel++
        }

        if (t1score == 0 || t1currentCel == 7) {
            var playerTotalValue = document.getElementById(`t1${t1currentRow}${7}`)
            playerTotalValue.innerText = t1playerScore
            if(highScore<t1playerScore){
                highScore=t1playerScore
                highScorePlayer=`TEAM 1 PLAYER${t1currentRow}`

            }
            t1playerScore = 0
            t1currentCel = 1
            t1currentRow++

        }

        

    })

})




var resultGenBtn = document.getElementById("resultGenBtn")  //result gen btn

resultGenBtn.addEventListener("click",function(){
    manOfTheMatch.innerText = `MAN OF THE MATCH ${highScorePlayer} `
})


// -----------------------------------------------------------------------------
// HIT AND TABLE FUNCTIONS COMPLETEDD
// -----------------------------------------------------------------------------






