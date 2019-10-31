//header h1 is wrong, should be Fruits & Vegetables Corp (see first issue)

let h1 = document.querySelector('h1').textContent ='Fruits & Vegetables Corp';

//The last a tag in header ul has wrong text content and href attribute 
//(should be Vegetables and not Bananas)

let ul= document.querySelector('ul');
let myString = ul.lastElementChild.textContent;
let replacedString = myString.replace('Bananas', '');
ul.lastElementChild.textContent = replacedString;
let a = document.createElement('a');
ul.lastElementChild.appendChild(a);
a.href = '#vegetables';
a.textContent = 'Vegetables';

//The section #contact and #about are in the wrong order. Swap them

let main = document.querySelector('#main');
let contact = document.querySelector('#contact');
let about = document.querySelector('#about');
main.insertBefore(about, contact);

//Each section should have a h2 tag at the top with corresponding text 
//according to its id

let headerAbout = document.createElement('h2');
let headerText = document.createTextNode('About');
headerAbout.appendChild(headerText);
main.insertBefore(headerAbout, about);

let headerContact = document.createElement('h2');
let headerText2 = document.createTextNode('Contact');
headerContact.appendChild(headerText2);
main.insertBefore(headerContact, contact);

//The text "We're the best in fruits & vegetables" under #about should be 
//wrapped in a p tag

about.innerHTML = "";
let p = document.createElement('p');
p.textContent = "We're the best in fruits & vegetables";
let pText = document.querySelector('#about');
pText.appendChild(p);

//The developer used td elements in thead instead of th . Fix it.

let thead = document.querySelector('thead tr');
thead.innerHTML = '';
let th = document.createElement('th');
let th2 = document.createElement('th');
let thName = thead.appendChild(th);
let thEmail = thead.appendChild(th2);
thName.textContent = 'Name';
thEmail.textContent = 'Email';

//include the main.css file

let head  = document.querySelector('head');
let link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';
head.appendChild(link);

//Head title is wrong MDN info. Should be "Fruits & Vegetables Corp"

let title = document.querySelector('title').textContent = 'Fruits and Vegetables Corp';
