  function onExit(){
    document.getElementById("individual__card--master").classList.remove("individual__card--master--active");
    document.getElementById("individual__card--master").classList.add("individual__card--master");
    document.getElementById("blurhook").style.filter = "blur(0px)";
  }

  export default onExit;
  