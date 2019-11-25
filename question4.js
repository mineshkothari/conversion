/* 
    QUESTION 4
*/


/* 1. 
Grab the <ul> element which holds all search results and put that in a variable
*/
const searchResultsItems = document.getElementById('search-result-items');


/* 2. 
Create an array of all child elements of the <ul> element declared above. I've used ES6 Spread Syntax below
This array will also include any <script> tags injected when we filter for specific items, so we'll need to filter these out. See Step 3.
*/
const results = [...searchResultsItems.children];
console.dir(results);

/* 3.
Use JS filter method to filter all <li> (all individual items)
*/
const filteredResults = results.filter(function(result) {
    if (result.localName === 'li') {
        return result;
    } 
});
console.dir(filteredResults);

/* 4.
Target the second value in the new filtered array and create a variable for it
*/
const secondResult = filteredResults[1];
console.log(secondResult);

/* 5.
Traverse the DOM within secondResult to find grab the price within .price-sales
With Black Friday sales, many shirts have been discounted. 
Even items which haven't been discounted appear to be within .price-sales - so we'll work with this.
*/

/* 6.
Convert the string value of price into an integer value.
We can use either parseInt() or parseFloat() on the string value, 
but the idea is to covert the value into pence as we'll use this to apply the 10% discount.
*/

/* 7.
Grab the value from step 6 above and times the number by 0.9 (this will apply the 10% discount)
*/

/* 8.
Convert this number into a float with two decimal places. (value / 100)
*/

/* 9.
Write this new discounted price to the innerHTML value of .price-sales
*/






/* Things to consider: Highlighting the new price

TM Lewin already have their discounted prices highlighted in red,
but to be sure, we could inject new HTML element with custom in-line styles to display the
new price in red (removing the existing node entirely or using display: none).
*/



/* Things to consider: Persisting when using filters

As per the brief, it is imperative to persist the functionality when using filters.
In order for this to work, we could initialise an empty array which will hold our search results.

let results = [];

And add an event listener to run a function which will push the search results (<li> elements)
into the `results` array on either page load, or when a user selects a filter.

This will follow the same steps from 2 - 9.
*/

