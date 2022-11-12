import React, { Component } from "react";

import bg from "./app.css";


// element from another file
// let _element=<h1>Hello World</h1>;

// export default _element;

// create component

// class Chandan extends Component {
//     render() {
//        // return React.createElement("h1", null, "Hi, How are you ?");
//        return <h1>Hello , HI </h1>

//     }

// }

// export default Chandan;

// let el=<h1>{20+30}</h1>;

//let el=<h1> Value is  : {20+30}</h1>;
//  const name ="Ajeet Kumar";
// let el=<h1>My name is {name}</h1>;
// function show(){
//     return "hello Ajeet";
// }

let user={
    firstname:"Chandan"
}

//let el=<h1>{show()}</h1>;
// let el=<h1>{user.firstname}</h1>;
let el=<h1 className="bg">{user.firstname}</h1>;

export default el;
