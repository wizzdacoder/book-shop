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

const chart = document.createElement("div")
header.append(chart)
chart.className = "chart-icon"
chart.id = "charticon"

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

const charticon = document.getElementById("charticon");
const showmorecontainer = document.createElement("div");
showmorecontainer.className = "show-more-container";
showmorecontainer.id = "showmorecontainer";
layout.append(showmorecontainer)

let shopcart = []

booktitles.forEach((books) => {
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
    shopcart.push({
      img: books.imageLink,
      title: books.title,
      author: books.author,
      price: books.price
    });
  });
});

//shopping cart
const paintCart = () => {
    const modalHeader = document.createElement("div");
    modalcontainer.innerHTML = "";
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Shopping Cart</h1>
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
      shopcartcontent.innerHTML = `
      <img src="${books.imageLink}">
      <h3>${books.title}</h3>
      <p>${books.author}</p>
      <p><strong>Price: $${books.price}</strong></p>
      `;
    modalcontainer.append(shopcartcontent)

//remove book from cart
    let deletebook = document.createElement("span");
    deletebook.innerText = "❌";
    deletebook.className = "delete-book";
    shopcartcontent.append(deletebook);

    deletebook.addEventListener("click", deleteProduct);
    });

// total cart
    const total = shopcart.reduce((acc, el) => acc + el.price, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total to Pay: $${total}`;
    modalcontainer.append(totalBuying);
};

charticon.addEventListener("click", paintCart);

const deleteProduct = () => {
  const foundId = shopcart.find((element) => element.id);

  shopcart = shopcart.filer((shopcartId) => {
    return shopcartId !== foundId;
  });

  paintCart();
};

});
//summarize personal info