function Matrix(...args){
    let m = [];
    for(let arg of args){
        m.push(arg);
    }
    m.mult = (v)=>{
        
    }
    return m;
}

let m1 = new Matrix(1,2,3);
let m2 = new Matrix(9,0,2);
let m3 = new Matrix(6,4,1);
let m = new Matrix(m1,m2,m3)
console.log(m1);
