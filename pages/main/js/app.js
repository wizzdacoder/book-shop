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
layout.id ="lay-out"

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

const charticon = document.createElement("div")
charticon.innerText = "🛒"
header.append(charticon)
charticon.className = "chart-icon"
charticon.id = "charticon"

const counter = document.createElement("span")
counter.id = "cartcounter"
counter.className ="cart-counter"
header.append(counter)

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

const books  = document.createElement("div")
layout.append(books)
books.className = "bookgrid"
books.id = "book-grid"

const shopcontent = document.getElementById("book-grid");

//shopping cart
const modalcontainer = document.createElement("div");
modalcontainer.className = "modal-container";
modalcontainer.id = "modalcontainer";
layout.append(modalcontainer);

const showmorecontainer = document.createElement("div");
showmorecontainer.className = "show-more-container";
showmorecontainer.id = "showmorecontainer";
layout.append(showmorecontainer)

let shopcart = []

book.forEach((books) => {
  let content = document.createElement("div");
  content.classList = "book"
  content.innerHTML = `
  <p>${books.author}</p>
  <h3>${books.title}</h3>
  <img src="${books.imageLink}">
  <p><strong>Price: $${books.price}</strong></p>
  `;
  shopcontent.append(content);

  //showmorebtn
  let showmorebtn = document.createElement("a")
  showmorebtn.innerHTML = "<p>Show More...</p><br>"
  showmorebtn.className = "showmore-btn"
  showmorebtn.id ="showmorebtn"
  content.append(showmorebtn)

  showmorebtn.addEventListener("click", () => {
    showmorecontainer.innerHTML = "";
    const showmoreHeader = document.createElement("div");
    const showxbutton = document.createElement("h2");
    showxbutton.innerText = "❌";
    showxbutton.className = "showxbutton";
    showmorecontainer.style.display = "flex"
    showmorecontainer.append(showxbutton);
    showmoreHeader.className = "show-more-header";
    showmoreHeader.innerHTML = `
    <h2>${books.title}</h2>
    <h3 class="description-title">Description:</h3>
    <p>${books.description}</p>
    `;
    showmorecontainer.append(showmoreHeader);

    showxbutton.addEventListener("click", () => {
    showmorecontainer.style.display = "none";
    });
    });

 //add to cart btn
  let addtobag = document.createElement("button")
  addtobag.innerText = "Add to Bag"
  addtobag.className = "addtobagbtn"
  content.append(addtobag)

  addtobag.addEventListener("click", () =>{
    const repeat = shopcart.some((repeatBooks) => repeatBooks.title === books.title);
    if (repeat){
      shopcart.map((prod) => {
        if (prod.title === books.title){
          prod.quantity++
        }
      });
    } else {
    shopcart.push({
      imageLink: books.imageLink,
      title: books.title,
      author: books.author,
      price: books.price,
      quantity: books.quantity
    });
  }
  shopcartCounter();
  });
});

//shopping cart
const paintCart = () => {
    const modalHeader = document.createElement("div");
    modalcontainer.innerHTML = "";
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h2 class="modal-header-title">Shopping Cart</h2>
    `;
    modalcontainer.style.display = "flex"
    modalcontainer.append(modalHeader)

    const modalxbutton = document.createElement("h2");
    modalxbutton.innerText = "❌";
    modalxbutton.className = "modalxbutton"
    modalHeader.append(modalxbutton)

    modalxbutton.addEventListener("click", () => {
    modalcontainer.style.display = "none";
    });

    shopcart.forEach((books) => {
      let shopcartcontent = document.createElement("div");
      shopcartcontent.className = "modal-content";
      let titlecart = document.createElement("div")
      titlecart.className ="titlecart"
      let detailscart = document.createElement("div")
      detailscart.className="detailscart"
      titlecart.innerHTML = `
      <img src="${books.imageLink}">
      <h4 class="cart-title">${books.title}</h4>
      <p>Author: ${books.author}</p>
      `;
      detailscart.innerHTML = `
      <p>Price: $${books.price}</p>
      <p>Quantity: ${books.quantity}</p>
      <p><strong>SUB-TOTAL: $${books.quantity * books.price}</strong></price>
      `;
    modalcontainer.append(shopcartcontent)
    shopcartcontent.append(titlecart)
    shopcartcontent.append(detailscart)
    console.log(shopcart.length)

//remove book from cart
    let deletebook = document.createElement("span");
    deletebook.innerText = "❌";
    deletebook.className = "delete-book";
    shopcartcontent.append(deletebook);

    deletebook.addEventListener("click", deleteProduct);
    });

// total cart
    const total = shopcart.reduce((acc, el) => acc + el.price * el.quantity, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total to Pay: $${total}`;
    modalcontainer.append(totalBuying);
};

charticon.addEventListener("click", paintCart);

const deleteProduct = () => {
  const foundId = shopcart.find((element) => element.title);

  shopcart = shopcart.filter((shopcartId) => {
    return shopcartId !== foundId;
  });
  shopcartCounter();
  paintCart();
};

const shopcartCounter = () => {
  counter.style.display = "block";
  counter.innerText = shopcart.length;
}

});
//summarize personal info