let search = document.getElementById("search");
let items = document.getElementsByClassName("item");

for (i = 0; i < items.length; i++)
    items[i].addEventListener("click", itemClick);

function itemClick(event) {
    search.value = event.target.innerText;
    for (i = 0; i < items.length; i++)
        items[i].style.display = "none";
}
search.addEventListener("keyup", function () {
    for (i = 0; i < items.length; i++) {
        let name = items[i].innerText.toUpperCase();
        if (name.includes(search.value.toUpperCase()) && search.value != "") {
            items[i].style.display = "block";
        }
        else
            items[i].style.display = "none";
    }
});