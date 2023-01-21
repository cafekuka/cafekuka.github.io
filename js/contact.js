let content = document.getElementById("content")

content.oninput = function() {
    textarea.style.height = "";
    /* textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px"; */
  textarea.style.height = textarea.scrollHeight + "px"
  };