    let sliderImages = document.querySelectorAll('.slide'),
        arrowLeft = document.querySelector("#arrow-left"),
        arrowRight = document.querySelector("#arrow-right"),
        bannerStatus = 1,
        bannerTimer = 5000;

        console.log("in script.js")

        window.onload = function(){
            console.log("onload")
            bannerLoopSwitch(1);
        }

       var startBannerLoop = setInterval(function(){
            bannerLoopSwitch(2)
            bannerLoopSwitch(3);
            bannerLoopSwitch(2);
            bannerLoopSwitch(1);
            clearInterval(startBannerLoop);
        }, bannerTimer); 

        var imgOrder = [2, 3, 2, 1];

      /*  setInterval(function(){
            
            for (img in imgOrder){
                console.log("startBannerLoop " + img)
                bannerLoopSwitch(img);
            }
            
        }, bannerTimer);  */

     /*   function bannerLoop(){
            console.log("in bannerLoop, the value of status is " + bannerStatus)
            if (bannerStatus === 1){ 
                console.log("bannerStatus = 1 ")
                document.getElementById("imgban2").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban1").style.right = "0px";
                    document.getElementById("imgban1").style.zIndex = "1000px";
                    document.getElementById("imgban2").style.right = "-1200px";
                    document.getElementById("imgban2").style.zIndex = "1500px";
                    document.getElementById("imgban3").style.right = "1200px";
                    document.getElementById("imgban3").style.zIndex = "500px"
                }, 500);
                setTimeout(function(){
                    document.getElementById("imgban2").style.opacity = "1";
                }, 1000);
                    bannerStatus = 2;
            } else if (bannerStatus === 2) {
                console.log("bannerStatus = 2 ")
                document.getElementById("imgban3").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban2").style.right = "0px";
                    document.getElementById("imgban2").style.zIndex = "1000px";
                    document.getElementById("imgban3").style.right = "-1200px";
                    document.getElementById("imgban3").style.zIndex = "1500px";
                    document.getElementById("imgban1").style.right = "1200px";
                    document.getElementById("imgban1").style.zIndex = "500px"
                }, 500);
                setTimeout(function(){
                    document.getElementById("imgban3").style.opacity = "1";
                }, 1000);
                bannerStatus = 3;
            }
            else if (bannerStatus === 3) {
                console.log("in the final else ")
                document.getElementById("imgban1").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban3").style.right = "0px";
                    document.getElementById("imgban3").style.zIndex = "1000px";
                    document.getElementById("imgban1").style.right = "-1200px";
                    document.getElementById("imgban1").style.zIndex = "1500px";
                    document.getElementById("imgban2").style.right = "1200px";
                    document.getElementById("imgban2").style.zIndex = "500px"
                }, 500);
                setTimeout(function(){
                    document.getElementById("imgban1").style.opacity = "1";
                }, 1000)
                
                bannerStatus = 1;
            }
            
        } */

        function bannerLoopSwitch(imgNo){
            let imgNumber = 0;
            if (typeof imgNo === "string"){
                console.log ("string found " + imgNo );
                imgNumber =  parseInt(imgNo)
            }
            else {
                imgNumber =imgNo
            }
                

            console.log("inside of the switch" + imgNo);

            console.log (typeof imgNo);
            switch (imgNo){

                case 1:{
                    console.log("switch 1")
                    document.getElementById("imgban2").style.opacity = "0";
                    setTimeout(function(){
                        document.getElementById("imgban1").style.right = "0px";
                        document.getElementById("imgban1").style.zIndex = "1000px";
                        document.getElementById("imgban2").style.right = "-1200px";
                        document.getElementById("imgban2").style.zIndex = "1500px";
                        document.getElementById("imgban3").style.right = "1200px";
                        document.getElementById("imgban3").style.zIndex = "500px"
                    }, 500);
                    setTimeout(function(){
                        document.getElementById("imgban2").style.opacity = "1";
                    }, 1000);
                        //bannerStatus = 2;
                    break;
                }
                case 2:{
                    console.log("switch 2")
                document.getElementById("imgban3").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban2").style.right = "0px";
                    document.getElementById("imgban2").style.zIndex = "1000px";
                    document.getElementById("imgban3").style.right = "-1200px";
                    document.getElementById("imgban3").style.zIndex = "1500px";
                    document.getElementById("imgban1").style.right = "1200px";
                    document.getElementById("imgban1").style.zIndex = "500px"
                }, 500);
                setTimeout(function(){
                    document.getElementById("imgban3").style.opacity = "1";
                }, 1000);
                //bannerStatus = 3;
                    break;
                }
                case 3:{
                    console.log("switch 3")
                document.getElementById("imgban1").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban3").style.right = "0px";
                    document.getElementById("imgban3").style.zIndex = "1000px";
                    document.getElementById("imgban1").style.right = "-1200px";
                    document.getElementById("imgban1").style.zIndex = "1500px";
                    document.getElementById("imgban2").style.right = "1200px";
                    document.getElementById("imgban2").style.zIndex = "500px"
                }, 500);
                setTimeout(function(){
                    document.getElementById("imgban1").style.opacity = "1";
                }, 1000)
               // bannerStatus = 1;
                break;
                }
            }
        }





      