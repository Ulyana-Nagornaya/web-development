function sort(){
    let price=document.getElementById('price')
    let title=document.getElementById('title')

    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponcePrice()
    }

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponceTitle()
    }
}



async function getResponcePrice() {
    let responce = await fetch("https://ulyana-nagornaya.github.io/web-development/KP/Main%20page/shop.json")
    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 10)
    //console.log(content)

    //let key
    //for (key in content) {
    //    console.log(content[key].id, content[key].title)
    //    console.log(content[key])

    let key

    sorted_content = content.sort((a,b) => a.price - b.price);

    let node_for_insert = document.getElementById("node_for_insert")
    
    for (key in sorted_content) {
        node_for_insert.innerHTML += `
        <li style="width: 220px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 200px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title" style="background-color: #923737;">${content[key].title}</h5>
        <p class="card-text">${content[key].description} Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" min = 0 name="amount" value="0"></p>
        </li>
                `
    }
}


getResponcePrice()

async function getResponceTitle() {
    let responce = await fetch("https://ulyana-nagornaya.github.io/web-development/KP/Main%20page/shop.json")
    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 10)
    //console.log(content)

    //let key
    //for (key in content) {
    //    console.log(content[key].id, content[key].title)
    //    console.log(content[key])

    let key
    sorted_content = content.sort((a,b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in sorted_content) {
        node_for_insert.innerHTML += `
        <li style="width: 220px" class="d-flex flex-column m-1 p-1 border bg-body" >
        <img style="width: 200px;" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title" style="background-color: #923737;">${content[key].title}</h5>
        <p class="card-text">${content[key].description} Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" min = 0 name="amount" value="0"></p>
        </li>
                `
    }
}
getResponceTitle()

sort()