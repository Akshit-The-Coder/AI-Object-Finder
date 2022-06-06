status = "";

function setup()
{
    canvas = createCanvas(400,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(400,350);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "Status = Detecting The Objects";
    objectToFind = document.getElementById("input1").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video , 0 , 0 , 400 , 350);
}