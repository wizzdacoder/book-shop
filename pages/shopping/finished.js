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
    ordertitle.innerText = "ORDER SUBMITTED"

    const orderpage = document.createElement("div")
    layout.append(orderpage)
    orderpage.className = "order-page"
    orderpage.id = "orderpage"
    orderpage.innerHTML = "<h2>YOUR ORDER HAS BEEN SUBMITTED CORRECTLY ✅</h2>"

});