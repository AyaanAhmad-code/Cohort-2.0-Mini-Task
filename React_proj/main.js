let num1 = React.createElement("h1",null,"200+");
let num2 = React.createElement("h1",null,"50+");
let para1 = React.createElement("p",null,"Project completed");
let para2 = React.createElement("p",null,"Startup raised");

let div1 = React.createElement("div",{className:"box"},[num1,para1]);
let div2 = React.createElement("div",{className:"box1"},[num2,para2]);

let top = React.createElement("div",{className:"main"},[div1,div2]);

let h1 = React.createElement("h1",{className:"heading"},"Hello");
let para = React.createElement("p",{className:"para"},"— It's D.Nova a Design wizerd");

let middle = React.createElement("div",{className:"middle"},[h1,para]);

let bottom = React.createElement("h3",{className:"bottom"}, "Scroll down ↓");

let left = React.createElement("div",{className:"left"},[top,middle,bottom]);

let img = React.createElement("img",{src: "/person.png"});
let right = React.createElement("div",{className:"profile"},img);

let year = React.createElement("h5", {className:"side"},"2025");
let line = React.createElement("div",{className:"line"});
let field = React.createElement("h5",{className:"side"},"Product designer");

let side = React.createElement("div",{className:"rotate"},[year,line,field]);

let main = React.createElement("div",{className:"page"},[side,left,right]);

export default main;