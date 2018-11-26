    let sliderImages = document.querySelectorAll('.slide'),
        arrowLeft = document.querySelector("#arrow-left"),
        arrowRight = document.querySelector("#arrow-right"),
        bannerStatus = 1,
        bannerTimer = 4000;
        let prevBanner = 0;

        console.log("in script.js")

        window.onload = function(){
            console.log("onload")
            bannerLoop();
        }

        var startBannerLoop = setInterval(function(){
            bannerLoop()
        }, bannerTimer);
        

        function bannerLoop(){
            
            
            if (bannerStatus === 1){ 
                document.getElementById("imgban2").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban1").style.right = "0px";
                    document.getElementById("imgban1").style.zIndex = "1000px";
                    document.getElementById("imgban2").style.right = "-1200px";
                    document.getElementById("imgban2").style.zIndex = "1500px";
                    document.getElementById("imgban3").style.right = "1200px";
                    document.getElementById("imgban3").style.zIndex = "500px"
                }, 1000);
                setTimeout(function(){
                    document.getElementById("imgban2").style.opacity = "1";
                }, 500);
                    bannerStatus = 2;
                    prevBanner = 1;
            } else if (bannerStatus == 2) {
                document.getElementById("imgban3").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban2").style.right = "0px";
                    document.getElementById("imgban2").style.zIndex = "1000px";
                    document.getElementById("imgban3").style.right = "-1200px";
                    document.getElementById("imgban3").style.zIndex = "1500px";
                    document.getElementById("imgban1").style.right = "1200px";
                    document.getElementById("imgban1").style.zIndex = "500px"
                }, 750);
                setTimeout(function(){
                    document.getElementById("imgban3").style.opacity = "1";
                }, 500);
                if (prevBanner == 3){
                    prevBanner = 2
                    bannerStatus = 1;
                }else{ 
                    bannerStatus = 3;
                }
                
            }
            else if (bannerStatus == 3) {
                document.getElementById("imgban1").style.opacity = "0";
                setTimeout(function(){
                    document.getElementById("imgban3").style.right = "0px";
                    document.getElementById("imgban3").style.zIndex = "1000px";
                    document.getElementById("imgban1").style.right = "-1200px";
                    document.getElementById("imgban1").style.zIndex = "1500px";
                    document.getElementById("imgban2").style.right = "1200px";
                    document.getElementById("imgban2").style.zIndex = "500px"
                }, 750);
                setTimeout(function(){
                    document.getElementById("imgban1").style.opacity = "1";
                }, 1000)
                
                bannerStatus = 2;
                prevBanner = 3;
            }
            
        }



     