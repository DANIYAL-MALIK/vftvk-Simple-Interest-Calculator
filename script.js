function compute() {
  let Amount = document.getElementById("principal").value;
  let Rate=document.getElementById("rate").value;
  if (Amount==""){
    alert("please enter the amount");
    Amount.focus();
    return false;
  }
  else if(Rate==""){
    alert("please enter the rate");
    Rate.focus();
    return false;
  }
  else{
    alert(Rate*Amount);
  }
}
