$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    var luckyResponses = [];
    var unluckyResponses =[];
    console.log(unluckyResponses);
    // $("#luck-responses").show();
    $("input:checkbox[name=lucky]:checked").each(function(){
      var fortuneTellerMode = $(this).val();
      luckyResponses.push(fortuneTellerMode);
    });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var fortuneTellerMode = $(this).val();
      unluckyResponses.push(fortuneTellerMode);
    });
    if ((unluckyResponses.length)<(luckyResponses.length)){
      $("#result").text("Lucky!");
    }
    else {
      $("#result").text("unlucky!");
    }
  });
});

    // $('#transportation_survey').hide();
    // var name = $("input#name").val();
    // var q1 = $("#q1").val();
    // var q2 = $("#q2").val();
    // if (name) {
    //   $(".name").text(name);
    //   $(".story").show();
    //   if (q1==0 && q2==0) {
    //     $(".politic").text('Conservative');
    //   } else if (q1==1 && q2==1){
    //     $(".politic").text('Liberal');
    //   } else {
    //     $(".politic").text('Moderate');
    //   }
    // } else {
    //   alert("Please enter a name")
    // }
