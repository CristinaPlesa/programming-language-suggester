$(document).ready(function() {
  
  // $("")
  // const $("input:radio[name=mathQuestionInitial]:checked").val();

  //   if ()

  // });

  $("form#user-input").submit(function(event) {
    const userInput1 = $("#question-input1").val();
    const userInput2 = $("#question-input2").val();
    const userInput3 = $("#question-input3").val();
    const userInput5 = $("#question-input5").val();

    if ((userInput1==="beginner" || userInput1==="intermediate") && (userInput2==="website" || userInput2==="video-game" || userInput2==="mobile") && (userInput3==="layout" || userInput3==="usefulness") && (userInput5==="panda" || userInput5==="fox" || userInput5==="giraffe")){
      $("#programming-result").hide();
      $("#javascript-result").toggle();
    }

    event.preventDefault();
  });
});