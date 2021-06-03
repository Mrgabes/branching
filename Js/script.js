
$(document).ready(function() {
  $("#datingForm").submit(function(event) {
    event.preventDefault();
  
    let firstQuestion = parseInt($("#firstDate").val())
    let secondQuestion = parseInt($("#secondDate").val())
    let thirdQuestion = parseInt($("#thirdDate").val())
    let forthQuestion = parseInt($("#forthDate").val())
    let total = firstQuestion + secondQuestion + thirdQuestion + forthQuestion;
  
    console.log("total",total)
    if(total === 4) {
      $("#firstOne").show()
      console.log("helllleeee00")
    } else if (total >=5 && total <=8) {
      $("#secondOne").show()
    } else if (total >=9 && total <=12) {
      $("#thirdOne").show()
  
    } else if (total >=13 && total<=16) {
    $("#forthOne").show()
}
    
});
});
