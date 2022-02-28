
var photos =["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg"]
var imgTag = document.querySelector("img");

count = 0;


function next(){

    count++

    if(count>=photos.length){
        count=0;
        imgTag.src=photos[count];

    }
    else{

        imgTag.src=photos[count];
    }
    
}


function prev(){

    count--

    if(count < 0){
        count=photos.length - 1;
        imgTag.src=photos[count];

    }
    else{

        imgTag.src=photos[count];
    }
    

    
}