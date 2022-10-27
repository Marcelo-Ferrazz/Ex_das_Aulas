function item1() {
  let item1 = document.getElementById("item1");
  item1.style.backgroundColor = "blue";
  console.log(item1);
}

function items() {
  let items = document.getElementsByClassName("item");
  items[2].style.fontWeight = "bold";
  console.log(items);
}

function li() {
  let li = document.getElementsByTagName("li");
  console.log(li);
  for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = "#f4f4f4";
    else li[i].style.backgroundColor = "#fff";
  }
}

function fitem() {
  let nome = document.getElementsByName("fitem");
  nome[0].style.borderBottom = "solid 2px #000";
  console.log(nome);
}

function item2() {
  let item2 = document.getElementById("item2");
  item2.remove();
  console.log(item2);
}

function reset() {
    let lista = document.getElementById("items");
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    lista.insertBefore(item2, item1.nextSibling);
  item2.textContent = "recuperado";
  console.log(item2);
}
