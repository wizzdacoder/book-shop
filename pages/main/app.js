document.addEventListener('DOMContentLoaded', function(){

// body
const body = document.body
body.className = "wrapper"

// main
const main = document.createElement("main")
body.append(main)
main.className = "main"

const layout = document.createElement("div")
main.append(layout)
layout.className = "layout"

// header
const header = document.createElement("header")
layout.append(header)
header.className = "navbar"

const logo = document.createElement("div")
header.append(logo)
logo.setAttribute("class", "logo-header")
logo.innerHTML = "<a href='#' id='mylogo'><h1>The Query</h1></a>"

const ul = document.createElement("ul")
header.append(ul)
ul.className = "navlist"

const chart = document.createElement("div")
header.append(chart)
chart.className = "chart-icon"
const icon = document.createElement("img")
header.append(icon)
chart.innerHTML = "<a href='#' id='shopcart'></a>"


const li1 = document.createElement("li")
ul.append(li1)
li1.className = "bookstorebtn"
li1.innerHTML = "<a href='#' id='home'>Book Store</a>"

const li2 = document.createElement("li")
ul.append(li2)
li2.className = "wishbtn"
li2.innerHTML = 'Wishlist'

const li3 = document.createElement("li")
ul.append(li3)
li3.className = "my-collection"
li3.innerHTML = 'My Collection'

// bookgrid

let booktitles = `[
    {
      "author": "Douglas Crockford",
      "imageLink": "add image to your project,put link to it there",
      "title": "JavaScript: The Good Parts: The Good Parts",
      "price": 30,
      "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
    },
      {
        "author": "David Herman",
        "imageLink": "add image to your project,put link to it there",
        "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
        "price": 22,
        "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
      },
      {
        "author": "David Flanagan",
        "imageLink": "add image to your project,put link to it there",
        "title": "JavaScript: The Definitive Guide",
        "price": 40,
        "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
      },
      {
        "author": " Eric Elliott",
        "imageLink": "add image to your project,put link to it there",
        "title": "Programming JavaScript Applications",
        "price": 19,
        "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
      },
      {
        "author": "Addy Osmani",
        "imageLink": "add image to your project,put link to it there",
        "title": "Learning JavaScript Design Patterns",
        "price": 32,
        "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
      },
      {
        "author": "Boris Cherny",
        "imageLink": "add image to your project,put link to it there",
        "title": "Programming TypeScript",
        "price": 28,
        "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
      },
      {
        "author": "Alex Banks, Eve Porcello",
        "imageLink": "add image to your project,put link to it there",
        "title": "Learning React, 2nd Edition",
        "price": 25,
        "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
      },
      {
        "author": "Bradley Meck Alex Young and Mike Cantelon",
        "imageLink": "add image to your project,put link to it there",
        "title": "Node.js in Action",
        "price": 38,
        "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
      },
      {
        "author": "Kyle Simpson",
        "imageLink": "add image to your project,put link to it there",
        "title": "You Don't Know JS Yet: Get Started",
        "price": 26,
        "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
      },
      {
        "author": "John Resig and Bear Bibeault",
        "imageLink": "add image to your project,put link to it there",
        "title": "Secrets of the JavaScript Ninja",
        "price": 33,
        "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
      }
    ]`


const books  = document.createElement("div")
layout.append(books)
books.className = "bookgrid"

const firstbook = document.createElement("div")
books.append(firstbook)
firstbook.className = "book b1"
firstbook.innerHTML =  JSON.parse(booktitles)[0].author + "<h3>" +
JSON.parse(booktitles)[0].title + "<h3>" + "<br>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[0].price + "</strong>"

const book2 = document.createElement("div")
books.append(book2)
book2.className = "book b2"
book2.innerHTML =  JSON.parse(booktitles)[1].author + "<h3>" +
JSON.parse(booktitles)[1].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[1].price + "</strong>"

const book3 = document.createElement("div")
books.append(book3)
book3.className = "book b3"
book3.innerHTML =  JSON.parse(booktitles)[2].author + "<h3>" +
JSON.parse(booktitles)[2].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[2].price + "</strong>"

const book4 = document.createElement("div")
books.append(book4)
book4.className = "book b4"
book4.innerHTML =  JSON.parse(booktitles)[3].author + "<h3>" +
JSON.parse(booktitles)[3].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[3].price + "</strong>"

const book5 = document.createElement("div")
books.append(book5)
book5.className = "book b5"
book5.innerHTML =  JSON.parse(booktitles)[4].author + "<h3>" +
JSON.parse(booktitles)[4].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[4].price + "</strong>"

const book6 = document.createElement("div")
books.append(book6)
book6.className = "book b6"
book6.innerHTML =  JSON.parse(booktitles)[5].author + "<h3>" +
JSON.parse(booktitles)[5].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[5].price + "</strong>"

const book7 = document.createElement("div")
books.append(book7)
book7.className = "book b7"
book7.innerHTML =  JSON.parse(booktitles)[6].author + "<h3>" +
JSON.parse(booktitles)[6].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[6].price + "</strong>"

const book8 = document.createElement("div")
books.append(book8)
book8.className = "book b8"
book8.innerHTML =  JSON.parse(booktitles)[7].author + "<h3>" +
JSON.parse(booktitles)[7].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[7].price + "</strong>"

const book9 = document.createElement("div")
books.append(book9)
book9.className = "book b9"
book9.innerHTML =  JSON.parse(booktitles)[8].author + "<h3>" +
JSON.parse(booktitles)[8].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[8].price + "</strong>"

const book10 = document.createElement("div")
books.append(book10)
book10.className = "book b10"
book10.innerHTML =  JSON.parse(booktitles)[9].author + "<h3>" +
JSON.parse(booktitles)[9].title + "<h3>" + "<strong>" + "Price: $" + JSON.parse(booktitles)[9].price + "</strong>"

//show more btn
const showmorebtn = document.createElement("a")
firstbook.append(showmorebtn)
showmorebtn.className = "showmorebtn"
showmorebtn.innerHTML = "<a href='#' id='shopcart'>" + 'Show More' + "</a>"

//add to chart btn

const addtobagbtn = document.createElement("a")
firstbook.append(addtobagbtn)
addtobagbtn.className = "addtobagbtn"
addtobagbtn.innerHTML = "<a href='#' id='shopcart'>" + 'ADD TO BAG' + "</a>"




//shopping cart
//remove book from chart

//summarize personal info

})