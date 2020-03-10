var arrows=document.querySelectorAll(".div1 .slider1 ul li a");//8 arrows of first slider (always 2 visible , 6 hidden)
var maxZindex=arrows.length/2; //max value for z-index for slider 1 
var n=arrows.length/2; //n is number of images in slider1
setInterval(doNext,6000); //every 6 seconds change image on sliders

for(i=0;i<arrows.length;i++){
    arrows[i].parentNode.setAttribute("index",Math.floor(i/2)+1); //set index of each li element on slider1
    arrows[i].parentNode.setAttribute("style","z-index:" +  (Math.floor(i/2)+1).toString()); //set z-index of each li element on slider1
    
    arrows[i].onclick=function(){ //function fired when arrow is clicked

    var x= parseInt(this.parentNode.getAttribute("index")); //index of the clicked arrow
    var y;
        console.log(this.parentNode.getAttribute("style")    );
    if (this.classList.contains('next')){//if the arrow is "next" arrow 
        y=  x%n +1 //y is changed as follow  1-2-3-4-1-2-3-4-1.......
    }   
        else{ //if arrow is "previous" arrow
            y=x-1; // y is changed as follow  1-4-3-2-1-4 -3-2-1....
            if(y==0)
                y=n
        }
  
        this.parentNode.classList.add('hidden'); //hide current image of slider1
        document.querySelector(".div1 .slider1 ul li[index='" + y +"']").classList.remove('hidden'); //show next(or prev) image of slider1
        maxZindex+=1;
        document.querySelector(".div1 .slider1 ul li[index='" + y +"']").setAttribute("style","z-index:"+maxZindex ); //increment z-index of the new image to be on the top of slider1
     
    }
}
///
var arrows2=document.querySelectorAll(".div1 .slider2 ul li a"); //8 arrows of decond slider (always 2 visible , 6 hidden)
var maxZindex2=arrows2.length/2; //max value for z-index for slider 2
var n2=arrows2.length/2; //n2 is number of images in slider1


for(i=0;i<arrows2.length;i++){
    arrows2[i].parentNode.setAttribute("index",Math.floor(i/2)+1); //set index of each li element on slider2
    arrows2[i].parentNode.setAttribute("style","z-index:" +  (Math.floor(i/2)+1).toString()); //set z-index of each li element on slider2
    
    arrows2[i].onclick=function(){ //function fired when arrow is clicked
   
    var x= parseInt(this.parentNode.getAttribute("index")); //index of the clicked arrow
    var y;
        console.log(this.parentNode.getAttribute("style")    );
    if (this.classList.contains('next')){ //if the arrow is "next" arrow
        y=  x%n2 +1 //y is changed as follow  1-2-3-4-1-2-3-4-1.......
    }   
        else{ //if arrow is "previous" arrow
            y=x-1; //y is changed as follow  1-4-3-2-1-4 -3-2-1....
            if(y==0)
                y=n2
        }
  
        this.parentNode.classList.add('hidden'); //hide current image of slider2
        document.querySelector(".div1 .slider2 ul li[index='" + y +"']").classList.remove('hidden'); //show next(or prev) image of slider2
        maxZindex2+=1;
        document.querySelector(".div1 .slider2 ul li[index='" + y +"']").setAttribute("style","z-index:"+maxZindex2 ); //increment z-index of the new image to be on the top of slider2
     
    }
}
///

function doNext(){ //this function will be called automatically every 6 seconds
     var x= document.querySelector('.div1 .slider1 ul li:not(.hidden)'); //first visible li element of slider1
    if(x==null)
     return;
    
    x=parseInt(x.getAttribute("index")); //index of first visible li element of slider1
    console.log(x);
    var y=  x%n +1; //next index of slider1  1-2-3-4-1-2.....
        document.querySelector('.div1 .slider1 ul li:not(.hidden)').classList.add('hidden'); //hide the current visisble li of slider1
        document.querySelector(".div1 .slider1 ul li[index='" + y +"']").classList.remove('hidden'); //show the next li of slider1
        maxZindex+=1;
        document.querySelector(".div1 .slider1 ul li[index='" + y +"']").setAttribute("style","z-index:"+maxZindex ); //increment z-index of new li of slider1 to be on the top

        x= parseInt(document.querySelector('.div1 .slider2 ul li:not(.hidden)').getAttribute("index")); //index of first visible li element of slider2
       y=  x%n2 +1; // next index of slider2  1-2-3-4-1-2.....
        document.querySelector('.div1 .slider2 ul li:not(.hidden)').classList.add('hidden'); //hide the current visisble li of slider2
        document.querySelector(".div1 .slider2 ul li[index='" + y +"']").classList.remove('hidden'); //show the next li of slider2
        maxZindex2+=1;
        document.querySelector(".div1 .slider2 ul li[index='" + y +"']").setAttribute("style","z-index:"+maxZindex2 ); //increment z-index of new li of slider2 to be on the top
 
}