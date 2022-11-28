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
    logo.innerHTML = `<a href='../main/index.html' id='mylogo'><h1>The Query</h1></a>
    <p>Bookshop</p>
    `;

    const ordertitle = document.createElement("div")
    header.append(ordertitle)
    ordertitle.className = ("order-title")
    ordertitle.innerText = "DETAILS OF YOUR ORDER"

    const orderpage = document.createElement("div")
    layout.append(orderpage)
    orderpage.className = "order-page"
    orderpage.id = "orderpage"
    orderpage.innerHTML = "<h2>YOUR ORDER</h2>"

    const form = document.createElement("form")
    orderpage.append(form)
    form.innerHTML = `
    <form action="../shopping/completed.html" method="post">
    <label for="fname">Name<span class="red">*</span>:</label><br>
    <input class="required" type="text" id="fname" name="fname" required><br>
    <label for="lname">Surname<span class="red">*</span>:</label><br>
    <input class="required" type="text" id="lname" name="lname" required><br>
    <label for="date">Delivery Date<span class="red">*</span>:</label><br>
    <input class="required" type="date" id="ddate" name="ddate" required><br>
    <label for="street">Street<span class="red">*</span>:</label><br>
    <input class="required" type="text" id="street" name="street" required><br>
    <label for="housenbr">House Number<span class="red">*</span>:</label>
    <input class="required" type="number" id="housenbr" name="housenbr" required><br>
    <label for="flat">Flat Number<span class="red">*</span>:</label><br>
    <input class="required" type="number" id="flatnbr" name="flatnbr" required><br>
    </form>
    <form class="select-payment">Payment Method<br>
    <input type="radio" id="card" name="payment_type" value="Card">
    <label for="card">CARD</label>
    <input type="radio" id="cash" name="payment_type" value="Cash">
    <label for="cash">CASH</label>
    </form>
    `;

//gift checkboxes
    const gift = document.createElement("div")
    gift.className = "gifttitle"
    gift.innerText = "Select a Free Gift"
    form.append(gift)

    const gift1 = document.createElement("div")
    gift1.innerText = "Pack as a Gift"
    const giftform1 = document.createElement("input")
    giftform1.setAttribute("type", "checkbox")
    giftform1.className ="check"
    form.append(gift1)
    gift1.append(giftform1)

    const gift2 = document.createElement("div")
    gift2.innerText = "Add Postcard"
    const giftform2 = document.createElement("input")
    giftform2.setAttribute("type", "checkbox")
    giftform2.className ="check"
    form.append(gift2)
    gift2.append(giftform2)

    const gift3 = document.createElement("div")
    gift3.innerText = "2% Discount on Next Purchase"
    const giftform3 = document.createElement("input")
    giftform3.setAttribute("type", "checkbox")
    giftform3.className ="check"
    form.append(gift3)
    gift3.append(giftform3)

    const gift4 = document.createElement("div")
    gift4.innerText = "Branded Pen or Pencil"
    const giftform4 = document.createElement("input")
    giftform4.setAttribute("type", "checkbox")
    giftform4.className ="check"
    form.append(gift4)
    gift4.append(giftform4)

// max 2 checkboxes
    var checks = document.querySelectorAll(".check");
var max = 2;
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= max + 1)
    return false;
}

    const submit = document.createElement("div")
    submit.className = "submitbtn"
    submit.innerText = "Submit"
    submit.innerHTML = `
    <input type="submit"/>
    <form action="../shopping/completed.html" method="post">
    `
    form.append(submit)

// submit button disabled
function enableSubmit(){
    let inputs = document.getElementsByClassName("required");
    let btn = document.querySelector('input[type="submit"]');
    let isValid = true;
    for (var i = 0; i < inputs.length; i++){
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null){
    isValid = false;
    break;
    }
    }
    btn.disabled = !isValid;
    }
})
