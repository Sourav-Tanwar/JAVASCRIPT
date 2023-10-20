console.log("Hello Javascript")

// DOM


// Assignment 5.1
// Explain difference between innerText and innerHTML in the following example?


let content = document.getElementById('content');
// console.log(content)
console.log(content.innerHTML);

console.log(content.innerText);


// innerText:
// The innerText property is used to get or set the text content of an HTML element. It returns the text content without interpreting any HTML tags inside the element.
// When you use innerText, it will return or set the text as it appears on the screen, and any HTML tags within the content are treated as plain text. This means that any HTML tags inside the content are treated as text and not executed as HTML.

// innerHTML:
// The innerHTML property is used to get or set the HTML content of an element. It returns or sets the content along with the HTML tags within the element, allowing you to manipulate the structure and add or modify HTML elements and their attributes.
// When you use innerHTML, it can be used to both get and set the HTML content, which means you can insert new HTML content, including tags and elements.