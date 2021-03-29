$(document).ready(function(event) {
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
    event.preventDefault();
  });

  $("form#user-input").submit(function(event) {
    const userInput1 = $("#question-input1").val();
    const userInput2 = $("#question-input2").val();
    const userInput3 = $("#question-input3").val();
    const userInput4 = $("#question-input4").val();
    // const userInput5 = $("#question-input5").val();

    if (userInput2==="dev-ops" || userInput3==="usefulness" || userInput4==="algebra") {
      $("#bash-result").fadeToggle();
      $("#end-message").fadeToggle();
    } else if (userInput1==="beginner" || userInput2==="mobile" || userInput3==="visual" || userInput4==="algebra") {
      $("#javascript-result").fadeToggle();
      $("#end-message").fadeToggle();
    } else if (userInput1==="intermediate" || userInput2==="video-game" || userInput4==="calculus") {
      $("#c-sharp-result").fadeToggle();
      $("#end-message").fadeToggle();
    } else if (userInput1==="advanced" || userInput2==="website" || userInput3==="user-friendly" || userInput4==="calculus") {
      $("#rust-result").fadeToggle();
      $("#end-message").fadeToggle();
    } else if (userInput1==="expert" || userInput2==="systems" || userInput4==="group theory" || userInput4==="category theory") {
      $("#haskell-result").fadeToggle();
      $("#end-message").fadeToggle();
    } else {
      $("#javascript-result").fadeToggle();
      $("#end-message").fadeToggle();
    }
    event.preventDefault();
  });

});

// too many possible combinations to account for, must think of an easier way to tally up points for each language.