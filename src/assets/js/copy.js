function copy() {
    
    const text = document.getElementById("password");
    const oldText = text.innerHTML;
  
    navigator.clipboard.writeText(text.innerHTML);
  
    text.innerHTML = "Copied to clipboard!";
    setTimeout(() => {
        text.innerHTML = oldText;
    }, 1000);
  } 