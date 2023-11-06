const node_for_click = document.getElementById('translating')

function edit_all() {
    document.getElementsByTagName ('p')[0].innerText = "Nagornaya"
    document.getElementsByTagName ('p')[1].innerText = "Ulyana"
    }
    node_for_click.addEventListener('click', edit_all)