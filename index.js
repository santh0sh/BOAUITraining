window.addEventListener('load',function(){
    console.log("it's my preferred script");

    /*var data=1
    console.log(data<<2);
    var name=prompt("Enter your name");
    if(name!=null)
        console.log("My Name is"+name)
    else
        console.log("Name missing!!!")

     */
   // var form=document.querySelector("input[type=button]");
    var form=document.querySelector("form");
    form.addEventListener('submit',function(event){
        event.preventDefault();
        save();
        loadImage();
        loadImage("../assets/logo.png")
    })

})

function save(){
    console.log(document.getElementById("firstName").value);
}

function loadImage(fileName){
    if(fileName!=null){
    var img=new Image();
    //var imageElement=document.createElement('img');

    img.onload=function(event){
          var imageRef=document.querySelector('form');
          imageRef.appendChild(img);
    }
    img.width=150;
    img.height=150;
    img.src=fileName;

        }
    else
    {
        console.log("Image not found");
    }

}
