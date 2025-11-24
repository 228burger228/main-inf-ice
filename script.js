const menu = document.getElementById("dropdownMenu");

function toggleMenu() {
    // Более надежная проверка стилей
    const isVisible = menu.style.display === "block";
    menu.style.display = isVisible ? "none" : "block";
}

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown') && !event.target.closest('.menu-button')) { // замени на свой селектор кнопки
        menu.style.display = 'none';
    }
});

const products = [
    { 
        id: 1,
        name: "ATLANT ХМ 6025-031", 
        img: "https://via.placeholder.com/300x400?text=Fridge", 
        price: "34 990 ₽" 
    },
    { 
        id: 2,
        name: "Haier C2F636", 
        img: "https://via.placeholder.com/300x400?text=Fridge", 
        price: "52 990 ₽" 
    },
    { 
        id: 3,
        name: "Bosch Serie 4", 
        img: "https://via.placeholder.com/300x400?text=Fridge", 
        price: "61 490 ₽" 
    },
    { 
        id: 4,
        name: "Indesit DS 4180", 
        img: "https://via.placeholder.com/300x400?text=Fridge", 
        price: "28 990 ₽" 
    }
];

const container = document.getElementById("productList");

// Более эффективный способ рендеринга
function renderProducts() {
    const productsHTML = products.map(product => `
        <div class="card" data-id="${product.id}">
            <img src="${product.img}" alt="${product.name}" loading="lazy" />
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="showProductDetails(${product.id})">Подробнее</button>
        </div>
    `).join('');
    
    container.innerHTML = productsHTML;
}

// Альтернативный способ - создание элементов
function renderProductsAlternative() {
    // Очищаем контейнер
    container.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = product.id;
        
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy" />
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Подробнее</button>
        `;
        
        // Добавляем обработчик события
        const button = card.querySelector('button');
        button.addEventListener('click', () => showProductDetails(product.id));
        
        container.appendChild(card);
    });
}

// Функция для показа деталей товара
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Детали товара: ${product.name}\nЦена: ${product.price}`);
        // Здесь можно добавить логику для модального окна или перехода на страницу товара
    }
}

// Инициализация
renderProducts();
