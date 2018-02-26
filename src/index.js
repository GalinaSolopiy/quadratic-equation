module.exports = function solveEquation(equation){
    let expression = equation.match(/(-?\d+)(?:\s\*\sx\^2\s)([-,+]\s\d+)(?:\s\*\sx\s)([-,+]\s\d+)/);
    let a = +expression[1];
    let b = +expression[2].replace(' ', '');
    let c = +expression[3].replace(' ', '');
    let D = Math.sqrt(b*b - 4*a*c);
    let x1 = Math.round((-b + D)/(2*a));
    let x2 = Math.round((-b - D)/(2*a));
    return x2 > x1 ? [x1, x2] : [x2, x1];
}



