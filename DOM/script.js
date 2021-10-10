const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const img = document.getElementById("icon");
const darkModeClass = 'dark-mode';

function changeMode(){
    changeClasses();
    changeText();
    
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    img.classList.toggle("fadeIn");
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    const imgLight = "images/sun.png";
    const imgDark = "images/2286975.png";

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        img.setAttribute('src', imgDark);
        
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
    img.setAttribute('src', imgLight);  
    
}


button.addEventListener("click", changeMode);
