let content = document.getElementById("content")

content.oninput = function() {
    content.style.height = "";
    /* textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px"; */
    content.style.height = content.scrollHeight + "px"
  };