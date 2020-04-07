const CodeKey = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"];
const KeyArr = ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab" , "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",  	'&#92; ', "CapsLock" , "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter" , "Shift" , "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "	&#9650;" , "Shift","Control" , "Meta","Alt"," ","Alt", "Control","	&#9668;","&#9660;","&#9658;"];
const KeyArrAlt = ["~","!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace","Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "CapsLock"  , "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", ' " ', "Enter" , "Shift"  , "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?","&#9650;" , "Shift" , "Control", "Meta","Alt"," ","Alt", "Control", "&#9668;","&#9660;","&#9658;"];
const KeyArrRus =["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", " &#92;", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","&#9650;" , "Shift" , "Control", "Meta","Alt"," ","Alt", "Control", "&#9668;","&#9660;","&#9658;"];
const KeyArrRusAlt = ["Ё",'"', "!", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift" , "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",","&#9650;" ,  "Shift" , "Control", "Meta","Alt"," ","Alt", "Control", "&#9668;","&#9660;","&#9658;"];
const Caps = ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab" ,"Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","[", "]",'&#92; ', "CapsLock" , "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter" , "Shift" , "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&#9650;" , "Shift","Control" , "Meta","Alt"," ","Alt", "Control","	&#9668;","&#9660;","&#9658;"];
const CapsRus = ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab","Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ","&#92;", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift" , "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".","&#9650;" ,  "Shift" , "Control", "Meta","Alt"," ","Alt", "Control", "&#9668;","&#9660;","&#9658;"];


document.querySelector("body").innerHTML = '<textarea readonly> </textarea> <div class="box"></div> <h2>Alt+Shift - сменить язык <h2>Ctrl+X - очистить всё<h2><h2>';



function animation(){
    for(let i= 0; i< 14*100; i=i+100){
    
        setTimeout(()=>{(document.querySelectorAll(".element")[i/100]).classList.add("animation")}, i);
    }  
    
    for(let i= 0; i< 14*100; i=i+100){
        
        setTimeout(()=>{(document.querySelectorAll(".element")[i/100 +14]).classList.add("animation")}, i+200);
    }  
    for(let i= 0; i< 13*100; i=i+100){
        
        setTimeout(()=>{(document.querySelectorAll(".element")[i/100 + 28]).classList.add("animation")}, i+400);
    }  
    for(let i= 0; i< 13*100; i=i+100){
        
        setTimeout(()=>{(document.querySelectorAll(".element")[i/100 + 41]).classList.add("animation")}, i+600);
    }
    for(let i= 0; i< 9*100; i=i+100){
        
        setTimeout(()=>{(document.querySelectorAll(".element")[i/100 + 54]).classList.add("animation")}, i+800);
    }
}




function draw(KeyArr){
    let out ="";
    for(let i= 0; i<KeyArr.length ; i++){
        if(KeyArr[i]=="Control"){
            out+= '<div class="element " data=" '+ KeyArr[i] +' "><p> Ctrl </p></div>'
        } else if(KeyArr[i]=="Meta") {
            out+= '<div class="element " data=" '+ KeyArr[i] +' "><p> Win </p></div>'
        } else {
            out+= '<div class="element " data=" '+ KeyArr[i] +' "><p>' + KeyArr[i] +'</p></div>'
        }
        
    }
    document.querySelector(".box").innerHTML = out;
}


let LangCheck = localStorage.getItem('key'); 


if(LangCheck == "0"){
    draw(KeyArr);
    animation(); 
} else {
    draw(KeyArrRus);
    animation(); 
}
  
  

console.log(`начальный лангчек${LangCheck}`);



let AltCheck = 0;
 /* let LangCheck = "0";  */
let flag = false;
let language = [KeyArr,KeyArrAlt];
document.addEventListener("keydown", (event)=>{
    
    console.log(` лангчек при нажатии кнопки  ${LangCheck}`);
    if(event.key=="Alt"){
        flag = true;
    }
    if(event.key=="Shift" && flag){
        flag = false;
        AltCheck = 0;
        if(LangCheck == "0"){
            language = [KeyArrRus,KeyArrRusAlt]; 
            
            
            localStorage.setItem('key', '1');
            LangCheck = localStorage.getItem('key'); 
            console.log(` лангчек после нажатии кнопки  ${LangCheck}`);
        
        } else {
            language = [KeyArr,KeyArrAlt];

           localStorage.setItem('key', '0');
           LangCheck = localStorage.getItem('key'); 
           console.log(` лангчек после нажатии кнопки  ${LangCheck}`);
            
        }
        draw(language[0]);
        animation();
    } else if(event.key=="Shift" && AltCheck == 0){
        draw(language[1]);
         animation(); 
        AltCheck = 1;
    } else if (event.key=="Shift" && AltCheck == 1){
        draw(language[0]);
         animation(); 
        AltCheck = 0;
    }
   
}) 

let CapsCheck = 0;
console.log(CapsCheck);
  document.addEventListener("keydown", (event)=>{
    if(event.key=="CapsLock" && AltCheck == 0 &&  LangCheck == "0" ){
       if(CapsCheck==0) {
            draw(Caps);
            animation(); 
            CapsCheck = 1;
            console.log(CapsCheck);
        } else if(CapsCheck==1) {
            draw(KeyArr);
            animation(); 
            CapsCheck = 0;
            console.log(CapsCheck);
        }
    }  else if (event.key=="CapsLock" && AltCheck == 0 && LangCheck == "1" ){
        if(CapsCheck==0) {
            draw(CapsRus);
            animation(); 
            CapsCheck = 1;
        } else if(CapsCheck==1) {
            draw(KeyArrRus);
            animation(); 
            CapsCheck = 0;
        }
    } 
    
});  

document.addEventListener("keydown", (event)=>{
    let t;
    console.log(`код клавиши ${event.code}`);
    for(let i= 0; i < CodeKey.length; i++){
        if(event.code == "Backslash"){
            (document.querySelectorAll(".element"))[27].classList.add("active");
            document.querySelector("textarea").value += "\\";
            break;
        } else if(event.code==CodeKey[i]){
            t = i;
            (document.querySelectorAll(".element"))[t].classList.add("active");
            /* document.querySelector("textarea").value += (document.querySelectorAll(".element"))[t].textContent; */
            switch(event.code){
                case "Backspace":
                    let arr =  document.querySelector("textarea").value.split("");
                    arr.splice(arr.length-1,1);
                     document.querySelector("textarea").value = arr.join("");
                    break;
                case "ControlLeft" :
                    break;
                case "ShiftLeft" :
                    break;   
                case "MetaLeft" :
                    break;    
                case "CapsLock" :
                    
                    break;  
                case "Tab" :
                    document.querySelector("textarea").value += "\t";
                    break; 
                case "AltLeft" :
                    break; 
                case "ShiftRight" :
                    break; 
                case "AltRight" :
                        break; 
                case "ControlRight" :
                    break; 
                case "Enter" :
                    document.querySelector("textarea").value += "\n";
                    break ;
                case "ArrowLeft" :
                    document.querySelector("textarea").value += "←";
                    break;   
                case "ArrowRight" :
                    document.querySelector("textarea").value += "→";
                        break;
                case "ArrowUp" :
                    document.querySelector("textarea").value += "↑";
                    break;
                case "ArrowDown" :
                    document.querySelector("textarea").value +="↓";
                    break;             
                default : document.querySelector("textarea").value += (document.querySelectorAll(".element"))[t].textContent;
            }

    }
        
    }
    
});


document.addEventListener("keyup", (event)=>{
    let t;
    if(event.code == "Backslash"){
        (document.querySelectorAll(".element"))[27].classList.remove("active");
    }
    for(let i= 0; i < CodeKey.length; i++){
        if(event.code==CodeKey[i]){
            t = i;
            (document.querySelectorAll(".element"))[t].classList.remove("active");
        }
        
    }
    
});

let flag2 = false;
document.addEventListener("keydown", (event)=>{
    console.log(event.code);
    if(event.code=="ControlLeft"){
        flag2 = true;
    }
    if(event.code=="KeyX" && flag2){
        flag2 = false;
        document.querySelector("textarea").value = " ";
    }
});

document.addEventListener("mousedown", (event)=>{
    if(event.target.classList.contains('element')){
        event.target.classList.add('active');

        console.log(event.target.textContent);
        switch(event.target.textContent){
            case "Backspace":
                let arr =  document.querySelector("textarea").value.split("");
                arr.splice(arr.length-1,1);
                 document.querySelector("textarea").value = arr.join("");
                break;
            case " Ctrl " :
                
                break;
            case "Shift" :
                 if(AltCheck == 0){
                    draw(language[1]);
                    animation(); 
                    AltCheck = 1;
                } else if (AltCheck == 1){
                    draw(language[0]);
                    animation(); 
                    AltCheck = 0;
                } 
                
                break;   
            case " Win " :
                document.querySelector("textarea").value = document.querySelector("textarea").value;
                break;    
            case "CapsLock" :
                if(AltCheck == 0 &&  LangCheck == "0" ){
                    if(CapsCheck==0) {
                         draw(Caps);
                         animation(); 
                         CapsCheck = 1;
                         console.log(CapsCheck);
                     } else if(CapsCheck==1) {
                         draw(KeyArr);
                         animation(); 
                         CapsCheck = 0;
                         console.log(CapsCheck);
                     }
                 }  else if (AltCheck == 0 && LangCheck == "1" ){
                     if(CapsCheck==0) {
                         draw(CapsRus);
                         animation(); 
                         CapsCheck = 1;
                     } else if(CapsCheck==1) {
                         draw(KeyArrRus);
                         animation(); 
                         CapsCheck = 0;
                     }
                 } 
                break;  
            case "Tab" :
                document.querySelector("textarea").value += "\t";
                break; 
            case "Alt" :
                break; 
            case "Enter" :
                document.querySelector("textarea").value += "\n";
                break ;
            case "	◄" :
                document.querySelector("textarea").value += "←";
                break;   
            case "►" :
                document.querySelector("textarea").value += "→";
                    break;
            case "	▲" :
                document.querySelector("textarea").value += "↑";
                break;
            case "▼" :
                document.querySelector("textarea").value +="↓";
                break;             
            default : document.querySelector("textarea").value += event.target.textContent;
        }
        
}
});
document.addEventListener("mouseup", (event)=>{
    if(event.target.classList.contains('element')){
        event.target.classList.remove('active');
}
});