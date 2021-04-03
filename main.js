var speechrecognishationshanoshintion=window.webkitSpeechRecognition;   
var recognitionshantionsham=new speechrecognishationshanoshintion();
function butan(){
    document.getElementById("textbox").innerHTML="";
    recognitionshantionsham.start();
}
recognitionshantionsham.onresult=function run(event){
    console.log(event)
    content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    speak();
}
function speak(){
    var regonitionsfboagnoduangvoua=window.speechSynthesis;
    var data=document.getElementById("textbox").value;
    if(data=="take my selfie"){
    var nou=new SpeechSynthesisUtterance("Taking Selfie in 5 Seconds");
    regonitionsfboagnoduangvoua.speak(nou);
    Webcam.attach("#camera")
    setTimeout(snapshot,"5000");
    }
}
function snapshot(){
    Webcam.snap(function (dataURI){
document.getElementById("result").innerHTML="<img id='selfie' src="+dataURI+">"
save();    
})
}
Webcam.set({
    width:360,
    height:250,
image_format:"jpeg",
jpeg_quality:90
})
function save(){
    link=document.getElementById("dis");
    result=document.getElementById("selfie").src;
    link.href=result;
    link.click();
}