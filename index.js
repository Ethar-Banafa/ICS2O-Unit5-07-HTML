function myFunction() {
    var x= document.getElementById("x");
     var y= document.getElementById("y");
      var xvalue= +x.value;
      var yvalue= +y.value;
      var submit= (xvalue*yvalue);
    var divsubmit= document.getElementById("divsubmit");
    divsubmit.innerHTML= submit;
}