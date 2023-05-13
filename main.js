function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LQ4hW3AwE/', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r =  math.foor(Math.random() * 255) + 1;
    random_number_g = math.foor(Math.random() * 255) + 1;
    random_number_b = math.foor(Math.random() * 255) + 1;
 
    document.getElementById("result_label").innerHTML = 'i can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].condidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('capture.JPG');
    img2 = document.getElementById('capture2.JPG');
    img3 = document.getElementById('capture3.JPG');
    img4 = document.getElementById('capture4.JPG');


    if (results[0].label == "lion") {
     img.src = 'capture.JPG'
     img2.src = 'capture2.JPG'
     img3.src = 'capture3.JPG'
     img4.src = 'lion.gif'
    } else if (results[0].label == "dog") {
     img.src = 'dog.gif' 
     img2.src = 'capture2.JPG'
     img3.src = 'capture3.JPG'
     img4.src = 'capture4.JPG'  
    } else if (results[0].label == "cow") {
     img.src = 'capture.JPG'
     img2.src = 'running-cow.gif'
     img3.src = 'capture3.JPG'
     img4.src = 'capture4.JPG'
    }else{
     img.src = 'capture.JPG'
     img2.src = 'capture2.JPG'
     img3.src = 'sheep.gif'
     img4.src = 'capture4.JPG' 
    } 
  }
}
