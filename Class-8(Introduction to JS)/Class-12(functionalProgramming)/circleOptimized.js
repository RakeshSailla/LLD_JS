//Calculate area, circumference, diameter of radius given for the circle
//Create functions for each one of them
//create new arrays to store respective values
//Areas = []
//Circumference = []
//Diameters = []

let circleRadius = [1, 4, 6, 7, 9]

function CalculateArea(radius){
    return Math.PI*radius*radius
}

function CalculateCircumference(radius){
    return 2*Math.PI*radius
}

function CalculateDiameter(radius){
    return 2*radius
}

function Calculate(circleRadius, cb){
    let result = []

    for(let i = 0; i < circleRadius.length; i++){
        result.push(cb(circleRadius[i]))
    }
    console.log(result)
}

Calculate(circleRadius, CalculateArea)
Calculate(circleRadius, CalculateCircumference)
Calculate(circleRadius, CalculateDiameter)