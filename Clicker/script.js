// console.log("123") - вывод информации в консоль
// alert("") - позволяет вывести какую-либо информацию во всплывающем окне в браузере

//Создание переменной
let counter = 0;
let timer = 0;
let timerInterval;
//Создание функции
function Click(){
    if (counter == 0){
        //Запуск цикла который вызывает функцию каждый промежуток указанного времени
        timerInterval = setInterval(Timer,1000);
        setInterval(Speed,100);
        document.querySelector(".color5").value = "Stop"
    }
    if(document.querySelector(".color5").value == "Stop"){
    counter++;
    document.querySelector(".color3").innerHTML = counter
    }
}

function Timer(){
    timer++;
    document.querySelector(".color1").innerHTML = timer
}

function Speed(){
    if(timer>0){
        document.querySelector(".color2").innerHTML = Math.round(counter / timer,2) + " Click/s"
    }
}
function myFunction() {
    clearInterval(timerInterval)
    counter = 0;
    timer = 0;
    document.querySelector(".color1").innerHTML = timer;
    document.querySelector(".color2").innerHTML = "Click/s";
    document.querySelector(".color3").innerHTML = counter;
}

function State(){
    if(document.querySelector(".color5").value == "Stop"){
        document.querySelector(".color5").value = "Start"
        clearInterval(timerInterval)
    }
    else if(document.querySelector(".color5").value == "Start"){
        document.querySelector(".color5").value = "Stop"
        timerInterval = setInterval(Timer,1000);
    }
    
}
document.querySelector(".color5").addEventListener("click",State)
document.querySelector(".color4").addEventListener("click",myFunction)
// document - HTML кода со встроенными функциями
//querySelector - поиск конктретного элемента
document.querySelector(".clickerplace").addEventListener("click",Click);

