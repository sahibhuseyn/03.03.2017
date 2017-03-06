//accordion

function menu(){
	var a = document.getElementsByClassName("menu");
	var x;
	for (x = 0; x < a.length; x++) {
	  a[x].onclick = function() {
	    this.classList.toggle("active");
	    var item = this.nextElementSibling;
	    if (item.style.maxHeight){
	      item.style.maxHeight = null;
	    } else {
	      item.style.maxHeight = item.scrollHeight + "px";
	    } 
	  }
	}
}



/*countdown*/
function date(){
  var t = Date.parse('Mar 21, 2017') - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  document.getElementsByClassName('days')[0].innerHTML = ""+days+"";
  document.getElementsByClassName('hours')[0].innerHTML = ""+hours+"";
  document.getElementsByClassName('minutes')[0].innerHTML = ""+minutes+"";
  document.getElementsByClassName('seconds')[0].innerHTML = ""+seconds+"";
}
setInterval(date, 1000)


//Almuni counter
function alumniCount(){
 function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
   return result;
}
   
var today=new Date("Jan 23, 2017");
var graduated=addDays(today,105);
document.getElementById('alminutes').innerHTML = graduated;
} setInterval(alumniCount, 1000)





//traffic
function changeLights() {
     function timeout(){
          setInterval(red, 1000)
          setInterval(yellow, 3000)
          setInterval(green, 5000)
        } timeout()   
        function red(){
        document.getElementsByClassName('bulb')[0].style.backgroundColor = "red";
         document.getElementsByClassName('bulb')[1].style.backgroundColor = "black";
         document.getElementsByClassName('bulb')[2].style.backgroundColor = "black";}
        function yellow(){
         document.getElementsByClassName('bulb')[0].style.backgroundColor = "black";
         document.getElementsByClassName('bulb')[1].style.backgroundColor = "yellow";
         document.getElementsByClassName('bulb')[2].style.backgroundColor = "black";
        }
          function green(){
          document.getElementsByClassName('bulb')[0].style.backgroundColor = "black";
          document.getElementsByClassName('bulb')[1].style.backgroundColor = "black";
          document.getElementsByClassName('bulb')[2].style.backgroundColor = "green";
        };     
        };

    
  changeLights();
 
 // }

/*shapes*/
