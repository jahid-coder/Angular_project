var colors = {
    primary : 'Blue',
    secondary : 'Red',
    trtary:'White'
}



for (var color in colors){
    console.log(colors[color])
}



var colorArray = [ 'Yellow','Green','Orange','Pick']

for(var color in colorArray){
    console.log('colors' +'->'+ colorArray[color] );
}

var scores =  [60,90,80,75]

for (var score of scores ){
        console.log(score);
    }