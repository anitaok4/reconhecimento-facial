Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png' ,
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function CapturarImagem(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

function IdentificarImagem(){
    img = document.getElementById('captured_image')
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error)}
        else{
            console.log(results);
            document.getElementById("Objeto").innerHTML = results[0].label;
            document.getElementById("Precisao").innerHTML = results[0].confidence.toFixed(3);
        }
    
}

console.log('versão ml5:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VFFz0uFJ0/model.json', modelLoaded);

function modelLoaded(){
    console.log("modelo carregado");
}