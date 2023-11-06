const click= document.getElementById("edit_all")

function find_edit_all(){
    const item  = document.getElementsByTagName('p')[1]
    console.log(item.innerText)
    item.innerText = 'Ivan'

    document.getElementsByTagName('li')[2].innerText = 'Ivanov'
    document.getElementsByTagName('li')[3].innerText = '20.02.20'
}

click.addEventListener("click",find_edit_all)