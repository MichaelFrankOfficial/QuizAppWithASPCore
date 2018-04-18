$(document).ready(function () {
    var questionTemplate = '<div class="questionDiv"><p id="{{QID}}">{{QID}}. <span id="questionText">{{QuestionText}}</span></p>\n' +

        '<ul> \n' +
        '<li> \n' +
        '<input id="questionID{{QID}}Answer1" name="questionID{{QID}}Answer" data-isCorrect="{{Answer1isCorrect}}" type="radio" value=""> {{Answer1Text}} \n' +
        '<br> \n' +
        '<input id="questionID{{QID}}Answer2" name="questionID{{QID}}Answer" data-isCorrect="{{Answer2isCorrect}}" type="radio" value=""> {{Answer2Text}} \n' +
        '<br> \n' +
        '<input id="questionID{{QID}}Answer3" name="questionID{{QID}}Answer" data-isCorrect="{{Answer3isCorrect}}" type="radio" value=""> {{Answer3Text}} \n' +
        '<br> \n' +
        '<input id="questionID{{QID}}Answer4" name="questionID{{QID}}Answer" data-isCorrect="{{Answer4isCorrect}}" type="radio" value=""> {{Answer4Text}} \n' +
        '</li> \n' +
        '</ul> </div> \n';
    var questions;
    var questionsTotal;
    var questionsCorrect = 0;
    var quizGrade = 0.00;
    var QuestionList = [];
    var c = 0;

    $.getJSON('https://localhost:44392/api/quiz', function (data) {
        console.log(data);
        questions = data;

        
        
        for (var i = 0; i < questions.length; i++) {
            var newQuestion = questionTemplate.replace("{{QuestionText}}", questions[i].questionText)
                .replace("{{Answer1Text}}", questions[i].answer1Text)
                .replace("{{Answer2Text}}", questions[i].answer2Text)
                .replace("{{Answer3Text}}", questions[i].answer3Text)
                .replace("{{Answer4Text}}", questions[i].answer4Text)
                .replace("{{Answer1isCorrect}}", questions[i].isAnswer1Correct)
                .replace("{{Answer2isCorrect}}", questions[i].isAnswer2Correct)
                .replace("{{Answer3isCorrect}}", questions[i].isAnswer3Correct)
                .replace("{{Answer4isCorrect}}", questions[i].isAnswer4Correct)
                .replace(/{{QID}}/g, questions[i].id);
            questions[i].html = newQuestion;
            $('#question-list-div').append(newQuestion);
        }
        questionsTotal = questions.length;
    });


    $('#submit-quiz-button').on('click', function () {
        $(".questionDiv").each(function (idx, val) {
            var answersList = $(val).children("ul").find('li [data-isCorrect = "true"]');
            if (answersList[0].checked) {
                questionsCorrect++;
                $(val).addClass("isCorrectAnswer");
            }
            else {            
                $(val).addClass("isIncorrectAnswer");
            }
        });
        alert('Total Score: ' + (questionsCorrect / questionsTotal * 100).toFixed(2)+"%");
    });
    
});
        

