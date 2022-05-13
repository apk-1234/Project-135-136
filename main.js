status="";
object="";
obj=[];
length="";
function setup() {
    canvas = createCanvas(380,320);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw()
{
    image(video,0,0,380,320);
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
    object=document.getElementById("object_name").value;
}
function gotResult(results)
{
    console.log(results);
}