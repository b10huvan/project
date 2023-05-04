function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classification = ml5.soundClassification('' ,modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}