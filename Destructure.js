// const data={Name:"Yadhu",Age:36,Place:"Thalassery"}

// const Name=data.Name
// const Age=data.Age
// const Place=data.Place

// console.log(Name,Age,Place)


//----------Destructuring-----------//


// const data={Name:"Yadhu",Age:36,Place:"Thalassery"}

// const {Name,Age,Place} = data

// console.log(Name,Age,Place);


//-----------------------------------------------//


// const data={Name:"Yadhu",Age:36,Place:"Thalassery"}

// const {Place,...others} = data;

// console.log(Place,others);


//----------------------------------------------------------------------------------------------------------------//

// const score=[20,36,48,75,21]

// const one=score[0]
// const two=score[1]
// const three=score[2]
// const four=score[3]
// const five=score[4]

// console.log(one,two,three,four,five);

//------------Array-----------------//

const score=[20,36,48,75,21]

// const[a,b,c,d,e]=score;

// console.log(a,b,c,d,e);


//---------------------------------------------------//

const [a,b,...others]=score

console.log(a,b,others);


//-----------------------------------------------------------//

// const [,,c,...others]=score;

// console.log(c,others);


