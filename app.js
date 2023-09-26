// General notes on creating object literals (literally an object).  An object uses {} and array [], objects count as 'usual', arrays have index counts (from 0).  Example below shows eg. Name: Tim.  Name is the key, Tim is the value.  The key and the value are the PROPERTIES of the object.

//To add another property to the object we can do - objName.height = "180cm".  This adds another property to the end of the object folder.

//You can also edit the properties in the object - objName.height = "Tim Jones".  This edits and updates the new objName folder.

// A method is a function that exists / belongs in an object.  Eg below calculateSales.

//A function without a name is called an annonyomus function

//We invoke to call a function as usual but we have to tell the function what object the function is in (also called the METHOD) like this seattle.calculateSales();

//You can put an array inside an object too, would be good for multiple answers such as my 3 fav hobbies

//We can access object information within an object like this - seattle.location which would equal "seattle" - as below

//To get within an array - objectName.favHobbies[3] - this would get the 4th item within the array

//We can also put an object within an object eg.
//seattle = {location: "Seattle", street "KingSt"}
// to access seattle.location.street
//concole log - King St

//arrays are good for same type values, objects are good for multiple types

//you can have an empty object like you can have an empty array

//if you see a 'this' within an object it is talking about 'itself', it is saying target this object
// eg. console.log(`$[this.location])
// will produce - seattle
//

// DOM's - Everything in JS is an object, these objects can be converted and manipulated by DOM

//DOM instuctions will overwrite HTML

//to create a DOM we need to find what we need to manipulate and target it.  See below for example.

//create a div for the parent element - eg const nameObj = document.getelementByID("nameObj") the rest can be seen below

// Folder for hours which helps us calculate the hours, which helps us calculate the customers per hour and cookies per hour in the below object labeled Seattle

//remember to put .app.js defer on your script otherwise things might not load correctly

//an object labeled const means the name of the object cannot be changed but the contents can

//we cannot put an image in an object but we can put the pathway to the image

//$ with `   ` can be used instead of "ijijj" + "kmkm" (strings and + signs)

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// HOW TO  - - - give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create our first shop - creating an object with info contained within it.
const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  //calculateSales is a METHOD, as it is a function within an object
  calculateSales: function () {
    // get the number of customers for this hour from the hours VAR above, in this case the shope is open 14 hours
    for (let i = 0; i < hours.length; i++) {
      // get the number of customers for this hour using the random number generator parameters, above and the values contained within the object
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      // add this calculation to the object key above
      this.customersPerHour.push(hourCustomers);

      // get the number of cookies sold this hour - as above
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);

      // increase the total cookies by adding this hours sales to it
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
      console.log(this.totalCookieSold);
    }
  },
};

const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      // get the number of customers for this hour
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);

      // get the number of cookies sold this hour
      const hourCookiesSold = Math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);

      // increase the total cookies by adding this hours sales to it
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  },
};

seattle.calculateSales();
tokyo.calculateSales();

// get the element on the page with the id salesData
const salesData = document.getElementById("salesData");

// add the title for the location
const seattleH2 = document.createElement("h2");
seattleH2.textContent = seattle.location;
salesData.appendChild(seattleH2);

// create a list to show the cookies sold at each hour
const seattleUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleUl.appendChild(li);
}

salesData.appendChild(seattleUl);

// add the title for the location
const tokyoH2 = document.createElement("h2");
tokyoH2.textContent = tokyo.location;
salesData.appendChild(tokyoH2);

// create a list to show the cookies sold at each hour
const tokyoUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoUl.appendChild(li);
}

salesData.appendChild(tokyoUl);
