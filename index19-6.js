/* for( var i =1; i <=10; i++){
    console.log(i);

    if(i <100){
        break
    }

} */

/* var rostGiven = 0;

while(rostGiven < 7){
    console.log('rost den plz: ')
    //console.log(rostGiven);

    rostGiven ++;  //rostGiven + =1; or rostGiven = rostGiven +1;
    if( rostGiven >= 4){
        break;
    }
    
} */

var items =['buttole', 'mouse', 'sunglass', 'pen']

for( var i =0; i<items.length ; i++){
    var item = items[i];
    //console.log(item);
    if(item == 'pen'){
        break;
    }
    console.log(item);
}

//

var numbers = [10, 20, 30, 40, 50, 50, 60];

for( var i = 0; i < numbers.length ; i++){
    var number = numbers[i];
    if(number > 50 ){
        continue;
    }
    console.log(number);
}
