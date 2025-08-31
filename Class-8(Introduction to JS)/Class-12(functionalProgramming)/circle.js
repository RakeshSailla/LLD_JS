//Calculate area, circumference, diameter of radius given for the circle
//Create functions for each one of them
//create new arrays to store respective values
//Areas = []
//Circumference = []
//Diameters = []

let circleRadius = [1, 4, 6, 7, 9]

function CalculateArea(circleRadius){
    let Areas = []
    for(let i = 0; i < circleRadius.length; i++){
        Areas.push(Math.PI*circleRadius[i]*circleRadius[i])
    }
    console.log(Areas)
}

function CalculateCircumference(circleRadius){
    let Circumference = []
    for(let i = 0; i < circleRadius.length; i++){
        Circumference.push(2*Math.PI*circleRadius[i])
    }
    console.log(Circumference)
}

function CalculateDiameter(circleRadius){
    let Diameters = []
    for(let i = 0; i < circleRadius.length; i++){
        Diameters.push(2*circleRadius[i])
    }
    console.log(Diameters)
}

CalculateArea(circleRadius)
CalculateCircumference(circleRadius)
CalculateDiameter(circleRadius)