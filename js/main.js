
var array =[1,3,6,9,2,1,0,1,6,3,2,8,22,56,0,-6,8,-34,22,-56];

function displayArraySum(array){
    var sum = 0;

    for(var i= 0; i<array.length; i++){
        sum+=array[i];
    }
    alert(sum);
}

function displayMaxValue(array){
    var maxValue = Number.MIN_VALUE;

    for(var i = 0; i<array.length; i++){
        if(array[i]>maxValue){
            maxValue = array[i];
        }
    }
    alert(maxValue);
}

/*console.log(56);

displayArraySum(array);

displayMaxValue(array);*/

var counter = 0;

function onClick(element){
    counter++;
    element.innerHTML = "Вы нажали " + counter + " раз!";
}

document.getE
