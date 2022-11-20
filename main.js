function startclassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HjR4pa_uJ/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,results)
{
if(error)
{
    console.log(error)
}
else{
    console.log(results)
document.getElementById('result_label').innerHTML= 'I can hear '+results[0].label;
document.getElementById('result_confidence').innerHTML= 'Accuracy - '+(results[0].confidence * 100).toFixed(2)+' %';
i1=document.getElementById('alien1')
i2=document.getElementById('alien2')
i3=document.getElementById('alien3')
i4=document.getElementById('alien4')

if(results[0].label=='Clap'){
    i1.src='Alien.gif';
    i2.src='cute-alien-mascot-character-design-vector-removebg-preview.png';
    i3.src='cute-alien-singing-moon-cartoon-illustration_403370-104-removebg-preview.png';
    i4.src='cute-alien-flying-with-spaceship-ufo-cartoon-science-technology-icon-concept-isolated-flat-cartoon-style_138676-2203-removebg-preview.png';
}
else if(results[0].label=='Snap'){
    i1.src='https://i.pinimg.com/originals/c3/16/f4/c316f4ce0a35de07ef33bb9d5f9ed399.png';
    i2.src='Alien.gif';
    i3.src='cute-alien-singing-moon-cartoon-illustration_403370-104-removebg-preview.png';
    i4.src='cute-alien-flying-with-spaceship-ufo-cartoon-science-technology-icon-concept-isolated-flat-cartoon-style_138676-2203-removebg-preview.png';
}
else if(results[0].label=='Bell'){
    i1.src='https://i.pinimg.com/originals/c3/16/f4/c316f4ce0a35de07ef33bb9d5f9ed399.png';
    i2.src='cute-alien-mascot-character-design-vector-removebg-preview.png';
    i3.src='Alien.gif';
    i4.src='cute-alien-flying-with-spaceship-ufo-cartoon-science-technology-icon-concept-isolated-flat-cartoon-style_138676-2203-removebg-preview.png';
}
else{
    i1.src='https://i.pinimg.com/originals/c3/16/f4/c316f4ce0a35de07ef33bb9d5f9ed399.png';
    i2.src='cute-alien-mascot-character-design-vector-removebg-preview.png';
    i3.src='cute-alien-singing-moon-cartoon-illustration_403370-104-removebg-preview.png';
    i4.src='Alien.gif';
}






}












































}