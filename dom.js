 // DOM -- Document Object Model
 // All Website Code --> DOM
 // Website Output --> DOM
 // DOM --> HTML body

 // DOM Tree Structure:
 // Node --> Element (ex. h1, p, b, i), text (ex. lorem)

 // DOM Manipulation - change body or website using
 // select element from html
 // change text
 // change html
 // change css
 // change attribute 
 // event listeners
 // selecting elements
 // getElementById

 let a = document.getElementById("abc")
 console.log(a);
 // console.dir(a);

 // // getElementByClassName
let b = document.getElementsByClassName("abc")
console.dir(b);

// // getElementByTagName
let temp_c = document.getElementsByTagName("h1");
console.dir(temp_c);

// // querySelector and querySelectorAll
// // most in project and used by company
let c =document.querySelector("h1");// --only
//select first element that find in your html
console.dir(c);

let d = document.querySelectorAll("h1") // select all elements in your html
console.log(d);

// // Text/Content access: innerText, textContent, innerHTML
let e = document.querySelector("h1")
console.dir(e);
e.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"

e.textContent = "h1 tag"
e.innerHTML ="<i> first h1 tag</i>"


// e.outerHTML = "<i>h1 with outertext</i>"
// e.outerHTML = "h1 with outertext"


// outer vs inner
// innerText  -- show text between tag  -- ignore tag
// outerText  -- show text between tag  -- remove tag


// innerHTML  -- show text between too tag  -- not tag
// outerHTML  -- show text with tag

 // ============================
 // Attribute Manipulation
 // getAttribute, setAttribute, removeAttribute
 let link = document.querySelector('a')
 console.dir(link)
 // console.log("get Attribute", info) // -- give value of href attribute

 // link.href = "https://www.google.com/"
 // element.setAttribute("name", "change")
link.setAttribute("href", "https://www.google.com/")
 let info = link.getAttribute("href");
 console.log("get Attribute", info) // -- give value of href attribute

 // // element.removeAttribute("name")
 link.removeAttribute("href")
 link.removeAttribute("target");


 // Dynamic DOM manipulation
 // createElement, appendChild, removeChild, prepend

 // createElement
 let pre_tag = document.createElement("pre");
 console.log(pre_tag);
 pre_tag.textContent = "Hello Pre tag"

 // // append / prepend
 // document.querySelector("body").append(pre_tag); // add tag into last place in body
 document.querySelector("body").prepend(pre_tag); // add tag into first place in body

  // // remove
 let remove_h1 = document.querySelector("#abc")
 remove_h1.remove();


 // appendChild
 let div_h1 = document.createElement("div");
 div_h1.textContent = "innnder Div Tag create with JS";
 document.querySelector("#box").appendChild(div_h1)

 // -------------------------------------------------------------
 // Style Updates via .style and classList (add, remove, toggle)

 let h1 = document.querySelector("h1");
 h1.style.color = "red";
 h1.style.backgroundColor = "black";
 h1.style.fontFamily = "sherif";
 h1.style.textTransform = "capitalize";

 // ClassList -- add
 let box = document.querySelector(".box1");
 console.dir(box);
 box.classList.add("box-style");
 console.dir(box);

 //remove 
 box.classList.remove("box1");

 //toggle --- class ---> available --> remove it
 //           clsss ---> not available --> add
 box.classList.toggle("box1");

 //--------------------------------------------------
// 1. DOM Structure (no code needed)
//--------------------------------------------------


//--------------------------------------------------
// 2. Types of Nodes (comment only)
//--------------------------------------------------
// Element Node
// Text Node
// Comment Node
// Attribute Node
// Document Node


//--------------------------------------------------
// 3. Element vs Text Node (comment only)
//--------------------------------------------------
// <p>Hello</p>
// <p> → Element Node
// Hello → Text Node


//--------------------------------------------------
// 4. Identify Nodes (comment only)
//--------------------------------------------------
// <div>Hello<span>World</span></div>


//--------------------------------------------------
// 5. getElementById vs querySelector
//--------------------------------------------------
document.getElementById("heading");
document.querySelector("#heading");


//--------------------------------------------------
// 6. getElementsByClassName
//--------------------------------------------------
let classItems = document.getElementsByClassName("item"); // Example only


//--------------------------------------------------
// 7. Select all .buy-now buttons
//--------------------------------------------------
let buyBtns = document.querySelectorAll(".buy-now");
console.log(buyBtns);


//--------------------------------------------------
// 8. Change heading text
//--------------------------------------------------
document.getElementById("heading").textContent = "Welcome to JS DOM";


//--------------------------------------------------
// 9. Print all li text
//--------------------------------------------------
let list = document.querySelectorAll("li");

list.forEach((val)=>{
    console.log(val.textContent);
});


//--------------------------------------------------
// 10. innerText / textContent / innerHTML (examples)
//--------------------------------------------------
let para = document.getElementById("myPara");
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);


//--------------------------------------------------
// 11. When to use textContent
//--------------------------------------------------
para.textContent = "<b>Hello</b>";


//--------------------------------------------------
// 12. Replace paragraph content
//--------------------------------------------------
document.getElementById("myPara").innerHTML = "<b>Updated</b> by JavaScript";


//--------------------------------------------------
// 13. Get image src
//--------------------------------------------------
let img = document.getElementById("myImg");
console.log(img.src);


//--------------------------------------------------
// 14. setAttribute
//--------------------------------------------------
document.getElementById("myDiv").setAttribute("data-info", "div-info");


//--------------------------------------------------
// 15. Add title attribute to a div
//--------------------------------------------------
document.getElementById("myDiv").setAttribute("title", "This is a div");


//--------------------------------------------------
// 16. Remove disabled from button
//--------------------------------------------------
document.getElementById("myBtn").removeAttribute("disabled");


//--------------------------------------------------
// 17. createElement
//--------------------------------------------------
let newPara = document.createElement("p");
newPara.textContent = "Hello from createElement()";
console.log(newPara);


//--------------------------------------------------
// 18. appendChild vs prepend
//--------------------------------------------------
let box1 = document.getElementById("myDiv");

let endText = document.createElement("p");
endText.textContent = "Added at end";
box.appendChild(endText);

let startText = document.createElement("p");
startText.textContent = "Added at start";
box.prepend(startText);


//--------------------------------------------------
// 19. removeChild
//--------------------------------------------------
let ul1 = document.getElementById("myList");
// ul1.removeChild(ul1.children[0]);  // Optional Example


//--------------------------------------------------
// 20. Add new li to end of ul
//--------------------------------------------------
let li = document.createElement("li");
li.textContent = "New Task";
document.getElementById("myList").appendChild(li);


//--------------------------------------------------
// 21. Add new image at top of div
//--------------------------------------------------
let img2 = document.createElement("img");
img2.src = "https://via.placeholder.com/150";
document.getElementById("myDiv").prepend(img2);


//--------------------------------------------------
// 22. Delete first list item
//--------------------------------------------------
let ul2 = document.getElementById("myList");
ul2.removeChild(ul2.firstElementChild);


//--------------------------------------------------
// 23. Change background color
//--------------------------------------------------
document.getElementById("myDiv").style.backgroundColor = "lightblue";


//--------------------------------------------------
// 24. classList.add vs toggle
//--------------------------------------------------
document.getElementById("myDiv").classList.add("active");
document.getElementById("myDiv").classList.toggle("active");


//--------------------------------------------------
// 25. Highlight even items
//--------------------------------------------------
let liEven = document.querySelectorAll("ul li:nth-child(2n)");

liEven.forEach((elem)=>{
    elem.classList.add("highlight");
});


//--------------------------------------------------
// 26. Set font size for all <p>
//--------------------------------------------------
let p = document.querySelectorAll("p");

p.forEach((elem)=>{
    elem.style.fontSize = "18px";
});
