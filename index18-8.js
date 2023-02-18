//multi-stage-condition


var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money){
    console.log('Danish Kahbo:');

}
else if (butterBread < money){
    console.log('Butter bon Khamu')
}
else if (toastBiscuit < money){
    console.log('Toast Biscuit Khamu')
}
else{
    console.log('chai Khamu: ')
}



//nasted-Condition

var math = true;
var geometry = true;
var straightLine = false;


 if(math == true){
    if (geometry == true){
        if(straightLine == true){

        }
    }
    else{
        console.log('baka pothe colba')
    }

 }
 else{
    console.log('pithagoras hote parba na:')
 }