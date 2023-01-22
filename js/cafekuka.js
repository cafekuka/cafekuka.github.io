let creds = localStorage.getItem("creds")
if (!creds) {
    creds = JSON.stringify({uuid: Math.random().toString(16).slice(2), ts: +new Date()})
    localStorage.setItem("creds", creds)
}
creds = JSON.parse(creds);

$(function(){
    $("#navbar").load("../html/navbar.html", function() {
        $("#navbar").find('[data-tab=' + $("#navbar").data("active")+ ']').addClass("active")
      }); 
    $("#footer").load("../html/footer.html"); 
  });