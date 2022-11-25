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
