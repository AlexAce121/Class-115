function preload(){

}

function draw(){
    image(video , 0 , 100 , 420 , 300) ;
}

function setup(){
    canvas = createCanvas(420, 300);
    canvas.center();
    video= createCapture(VIDEO) ;
    video.size(420 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotposes);
}

function TakePicture(){
  save("supppp.png") ; 
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotposes(results){
    if(results.length > 0) {
        console.log(results);
        console.log('nose x = ' + results[0].pose.nose.x);
        console.log('nose y = ' + results[0].pose.nose.y);
    }
}