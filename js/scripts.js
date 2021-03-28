$(document).ready(function() {
  $(".mathSecond").attr('disabled', true);
  $(".form-check1").css('opacity', '.2');
  $("form input:radio.mathFirst").change(function() {
    if ($(this).val() === "no") {
      $(".mathSecond").attr('checked', false);
      $(".mathSecond").attr('disabled', true);
      $(".form-check1").css('opacity', '.2');
    }
    else {
      $(".mathSecond").attr('disabled', false);
      $(".form-check1").css('opacity', '1');
    }
  });
  });
  
  // $("")
  // const $("input:radio[name=mathQuestionInitial]:checked").val();



//   $("form#user-input").submit(function(event) {
//     const userInput1 = $("#question-input1").val();
//     const userInput2 = $("#question-input2").val();
//     const userInput3 = $("#question-input3").val();
//     const userInput5 = $("#question-input5").val();

//     if ((userInput1==="beginner" || userInput1==="intermediate") && (userInput2==="website" || userInput2==="video-game" || userInput2==="mobile") && (userInput3==="layout" || userInput3==="usefulness") && (userInput5==="panda" || userInput5==="fox" || userInput5==="giraffe")){
//       $("#programming-result").hide();
//       $("#javascript-result").toggle();
//     }

//     event.preventDefault();
//   });
// });

// too many possible combinations to account for, must think of an easier way to tally up points for each language.