




var button=document.querySelector("#btn");

var txtInput=document.querySelector("#txt-input");

var outputDiv=document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL +"?"+"text="+ text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with the server ! try again after sometime");
}

button.addEventListener("click",function(){
    // console.log("button has clicked")
    var userText  =txtInput.value;
    fetch(getTranslationURL(userText))
    .then(response => response.json())
    .then( json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText =translatedText;
    })
    .catch(errorHandler);
})
