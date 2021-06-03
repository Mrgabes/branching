
$(document).ready(function() {
  $("#dating").submit(function(event) {
    event.preventDefault();
  
    let firstQuestion = parseInt($("#first").val())
    let secondQuestion = parseInt($("#second").val())
    let thirdQuestion = parseInt($("#third").val())
    let forthQuestion = parseInt($("#forth").val())
    let total = firstQuestion + secondQuestion + thirdQuestion + forthQuestion;
  
    console.log(total);
    if(total <=4) {
      $("#first1").show()
   
  } else if (total >=5 && total <=9) {
      $("#second2").show()
    
    } else if (total >=10 && total <=13) {
      $("#third3").show()
  
    } else if (total >=12 && total<=16) {
    $("#forth4").show()
}
    
});
});
