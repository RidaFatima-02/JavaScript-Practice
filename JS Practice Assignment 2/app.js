// ---------------Question-1-----------------

// function addNo(number) {
//     return function (a) {
//       return number + a;
//     }
//   }

// const addFive = addNo(5);
// console.log(addFive(10)); // Output: 15
// console.log(addFive(45)); // Output: 50
// console.log(addFive(62)); // Output: 67

// ---------------Question-2-----------------

// function searchArray(arr, val) {
//     if (arr.length === 0) { // if array is empty
//       return false;
//     }

//     if (arr[0] === val) {  // if value is found return true
//       return true;
//     } else {
//       return searchArray(arr.slice(1), val);  // recursive calling of function with increment in index
//     }
//   }

//   const arr = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
// console.log(searchArray(arr, "Wednesday")); // Output: true
// console.log(searchArray(arr, "Saturday")); // Output: false
// console.log(searchArray(arr, "weekday")); // Output: false


// ---------------Question-3-----------------

// function addPara(text) {
//     const newPara = document.createElement('p');
//     newPara.textContent = text; 
//     document.body.appendChild(newPara); 
//   }
  
// addPara('This is a new paragraph.');

// ---------------Question-4-----------------

// function addListItem(text) {
//     const newListItem = document.createElement('li'); // create a new list item element
//     newListItem.textContent = text; // set the text content of the new list item
//     const unorderedList = document.querySelector('ul'); // get the unordered list element
//     unorderedList.appendChild(newListItem); // append the new list item to the unordered list
//   }  
  
// addListItem('New item');

// ---------------Question-5-----------------

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }  
// const myDiv = document.querySelector('.my-div');
//     changeBackgroundColor(myDiv, 'blue');

// ---------------Question-6-----------------

// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }

// const savedObject = JSON.parse(localStorage.getItem(key));

// const myObject = { name: 'John', age: 30 };
// saveObjectToLocalStorage('myObject', myObject);

// const myObject = { name: 'John', age: 30 };
// saveObjectToLocalStorage('myKey', myObject);

// ---------------Question-7-----------------
// function getObjectFromLocalStorage(key) {
//     const storedObject = localStorage.getItem(key);
//     if (storedObject) {
//       return JSON.parse(storedObject);
//     }
//     return null;
//   }

//   const storedPerson = getObjectFromLocalStorage('person');
//   if (storedPerson) {
//     console.log('Name:', storedPerson.name);
//     console.log('Age:', storedPerson.age);
//   } else {
//     console.log('No person found in localStorage.');
//   }
  

// ---------------Question-8-----------------
function saveObjectToLocalStorage(obj) {
    // Save each property to localStorage
    Object.keys(obj).forEach(key => {
      localStorage.setItem(key, obj[key]);
    });
  
    // Retrieve the object from localStorage and return it
    const newObj = {};
    Object.keys(obj).forEach(key => {
      newObj[key] = localStorage.getItem(key);
    });
  
    return newObj;
  }
  const myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const newObj = saveObjectToLocalStorage(myObj);
  console.log(newObj); // { name: 'John', age: '30', city: 'New York' }
    