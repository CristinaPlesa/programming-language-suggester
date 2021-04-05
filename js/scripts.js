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
      $("#rust-result").hide();
      $("#c-sharp-result").hide();
      $("#javascript-result").hide();
      $("#haskell-result").hide();
      $("#bash-result").show();
      $("#end-message").show();
    } else if (userInput1==="beginner" || userInput2==="mobile" || userInput3==="visual" || userInput4==="algebra") {
      $("#haskell-result").hide();
      $("#bash-result").hide();
      $("#c-sharp-result").hide();
      $("#rust-result").hide();
      $("#javascript-result").show();
      $("#end-message").show();
    } else if (userInput1==="intermediate" || userInput2==="video-game" || userInput4==="calculus") {
      $("#bash-result").hide();
      $("#javascript-result").hide();
      $("#rust-result").hide();
      $("#haskell-result").hide();
      $("#c-sharp-result").show();
      $("#end-message").show();
    } else if (userInput1==="advanced" || userInput2==="website" || userInput3==="user-friendly" || userInput4==="calculus") {
      $("#bash-result").hide();
      $("#javascript-result").hide();
      $("#c-sharp-result").hide();
      $("#haskell-result").hide();
      $("#rust-result").show();
      $("#end-message").show();
    } else if (userInput1==="expert" || userInput2==="systems" || userInput4==="group theory" || userInput4==="category theory") {
      $("#bash-result").hide();
      $("#javascript-result").hide();
      $("#c-sharp-result").hide();
      $("#rust-result").hide();
      $("#haskell-result").show();
      $("#end-message").show();
    } else {
      $("#bash-result").hide();
      $("#c-sharp-result").hide();
      $("#rust-result").hide();
      $("#haskell-result").hide();
      $("#javascript-result").show();
      $("#end-message").show();
    }
    event.preventDefault();
  });

});

// too many possible combinations to account for, must think of an easier way to tally up points for each language.