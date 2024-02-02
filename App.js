// const heading = React.createElement("h1",{id: "heading"},"welcome ");
//{} this object is the place where you will give atrributes to your tag
//lets create the root inside which react will do all dom manupulations

//let the root be div
//Note:- creating root is an DOM operations
//heading is nothing but an react element
// and a react element is nothing but a normal js object
//which is having props(id,welcome)etc
// id:_> attributr
//the message is the children it will go under h1 tag
// these will come under props
//props are children and atrributes that we pass in

 

//  console.log(heading);//OBJECT

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//the function of this render function is to basically 
// take this (heading) object create an html element<h1> tag </h1>
//which the browser understands
//and put that stuff inside the root

/**
 * 
 *  <div id="parent">
 *  <div id="child">
 * 
 *      <h1></h1>
 *      <h2></h2> //adding sibling
 * </div>
 * 
 * </div>
 * 
 */

//how to create this type of html structure in react

// const parent = React.createElement("div" ,  //as a children we passed div id parent to it

// { id: "parent"},
// React.createElement("div" , { id: "child"},React.createElement("h1" ,{},"hello"))
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
//this is how we create nested html structure under react
//so at the end of the day the React element is an object React(object)=> HTML(browser understand)
// this react element is converted into html that the browser understands  by(render func)



//note if you want to add more then one children(sibling) to the third argument of createElement func of react
// you need to convert the third argument to an array


const parent = React.createElement("div" ,  //as a children we passed div id parent to it

{ id: "parent"},
React.createElement("div" , { id: "child"},[React.createElement("h1" ,{},"hey"),React.createElement("h1" ,{},"hello"),]) //converted to array to add siblings
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//but complexed nested html structures creation traditionally like shown above can create problem in readability
// as it is very less readable
// so to solve this their is something known as JSX
//JSX
//PEOPLE THINK REACT CA ONLY BE WRITTEN IN JSX
//BUT NO THE ABOVE PART IS THE CORE OF REACT
//JSX WILL MAKE OUR LIFE EASY WHEN WE WANT TOCREATE TAGS'
//NOTE THE ORDER OF THE FILES WE ADD IN HTML SHOULD ALWAYS BE IN SEQUENCE