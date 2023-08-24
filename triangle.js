
/* TODO - Return the triangle calculations by calling your helper functions.
This function will be used in your eventListener
to print out the correct information about the triangle to your index.html page */
var flag = true;

function triangleOutput(){
    /* Fetches the values from the form. Notice that they have 
    id=value1, value2 and value3 in the HTML */
    const a = parseFloat(document.getElementById('value1').value);
    const b = parseFloat(document.getElementById('value2').value);
    const c = parseFloat(document.getElementById('value3').value);
    if (checkTriangle(a,b,c) === true ){
        /*TODO */
        flag = true;
        return "The given sides form a triangle.";
    }
    else{
        flag = false;
        return "The given sides do not form a triangle.";
    }
}


/* TODO - Below are suggested functions .
You do not have to use them, but it is recommended */

/*  Check if triangle */
function checkTriangle(side1, side2, side3){
    if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)){
        return true;
    }
    else{
        return false;
    }
}

/* Check if Equilateral, Isosceles or Scalene */
function getTriangleType(side1,side2,side3){
    const Equilateral = "Equilateral";
    const Isosceles = "Isosceles";
    const Scalene = "Scalene"
    if(side1 == side2 == side3){
        return Equilateral;
    }
    if(side1 == side2 || side2 == side3 || side1 == side3){
        return Isosceles;
    }
    else{
        return Scalene;
    }
}


/* Calculate perimeter */
function perimeter (side1, side2, side3) {
    var trianglePerimeter = side1 + side2 + side3;
    return trianglePerimeter;
}
/* Check if acute, right or obtuse */
function acuteRightObtuse (side1, side2, side3) {
    angles = [];
    angles = getTriangleAngles(side1,side2,side3);
    

    if(angles[0]>90 || angles[1]>90 || angles[2]>90){
        return "Obtuse";
    }

    if(angles[0]==90 || angles[1]==90 || angles[2]==90){
        return "Right";
    }

    if(angles[0]<90 & angles[1]<90 & angles[2]<90){
        return "Acute";
    }

    if(angles[0]==60 & angles[1]==60 & angles[2]==60){
        return "Equiangular";
    }

}

/* Function that gets the triangle angles*/
function getTriangleAngles(side1, side2, side3){
    var a = side1;
    var b = side2;
    var c = side3;
    const angleA1 =  Math.acos(((b*b) + (c*c) - (a*a))/(2*b*c));
    const angleB2 =  Math.acos(((c*c) + (a*a) - (b*b))/(2*c*a));
    const angleC3 =  Math.acos(((a*a) + (b*b) - (c*c))/(2*b*a));
    angleArray = [];
    angleArray[0] = (angleA1*(180/Math.PI)).toPrecision(2);
    angleArray[1] = (angleB2*(180/Math.PI)).toPrecision(2);
    angleArray[2] = (angleC3*(180/Math.PI)).toPrecision(2);
    return angleArray;
}

/* Calculate the area */
function getArea(side1, side2, side3){
    var p = perimeter(side1, side2, side3);
    var s = p/2;
    var area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    return area;
}

/* TODO - Create the Event listener, which calls the result of triangleOutput() */
const output = document.getElementById("output");
const form = document.getElementById("my-form");

form.addEventListener("submit",triangleResults);

function triangleResults(event){
    event.preventDefault();  /*prevents the page from reloading on submit*/
    console.log(event);
    var side1 = parseInt(event.target[0].value);
    var side2 = parseInt(event.target[1].value);
    var side3 = parseInt(event.target[2].value);
    triangleOutput()
    if (flag === true){
        var result = "The given sides form a triangle" + "<br />" + "The triangle is " + getTriangleType(side1,side2,side3) + "<br />" + "The triangle's perimeter is: " + perimeter(side1,side2,side3) + "<br />" + "The triangle angle type is " + acuteRightObtuse(side1,side2,side3) + "<br />" + "The area of the triangle is: " + getArea(side1,side2,side3) + "<br />" + "The angles are: " + getTriangleAngles(side1, side2, side3);
    }
    else{
        var result = "The given sides do not form a triangle"
    }
    output.innerHTML = result;
    return false;
}