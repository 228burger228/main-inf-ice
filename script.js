const menu = document.getElementById("dropdownMenu");
function toggleMenu() {
menu.style.display = menu.style.display === "block" ? "none" : "block";
}


const products = [
{ name: "ATLANT ХМ 6025-031", img: "https://via.placeholder.com/300x400?text=Fridge", price: "34 990 ₽" },
{ name: "Haier C2F636", img: "https://via.placeholder.com/300x400?text=Fridge", price: "52 990 ₽" },
{ name: "Bosch Serie 4", img: "https://via.placeholder.com/300x400?text=Fridge", price: "61 490 ₽" },
{ name: "Indesit DS 4180", img: "https://via.placeholder.com/300x400?text=Fridge", price: "28 990 ₽" }
];


const container = document.getElementById("productList");
products.forEach(p => {
container.innerHTML += `
<div class="card">
<img src="${p.img}" alt="${p.name}" />
<h3>${p.name}</h3>
<p>${p.price}</p>
<button>Подробнее</button>
</div>
`;
});
