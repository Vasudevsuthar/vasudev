// // // EXAMINE THE DOCUMENT OBJECT 


// // // console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document[10]);
// // document.all[10].textContent = 'Hello';
// // //but this the way to do because if we add somethingindex will change.
// // console.log(document.forms);
// // //HTML collectionare in form of array.
// // console.log(document.forms[0]);

// // console.log(document.links);




// // GETELEMENTBYID
// // console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle.textContent);
// // //output = Item Lister 123
// console.log(headerTitle.innerText);
// // //output = Item Lister

// // //diff between textcontent & innertext
// // //textcontent shows everything which you hide also
// // //  <h1 id='header-title'>Item Lister <span style='display:none'>123</span></h1>
// // //innertext show only text hide can show

// var header = document.getElementById('main-header');

// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Vasudev';
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// // headerTitle.style.borderBottom = 'solid 3px #000';


// // GETELEMENTBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';

// // for(let i=0;i<items.length;i++){
// //     items[i].style.backgroundColor='yellow'
// // }

// // //task 3 by class name

//  const AddItems = document.getElementsByClassName('title');
//  console.log(AddItems);

//  AddItems[0].style.fontWeight = 'bold';
//  AddItems[0].style.color = 'green';
