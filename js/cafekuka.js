$(function(){
    $("#navbar").load("../html/navbar.html", function() {
        $("#navbar").find('[data-tab=' + $("#navbar").data("active")+ ']').addClass("active")
      }); 
    $("#footer").load("../html/footer.html"); 
  });