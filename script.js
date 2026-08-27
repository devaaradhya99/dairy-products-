const products = [
    { id:1, name:"Amul Gold (Full Cream, 500 mL)", price:35, category:"milk", badge:"Popular", emoji:"🥛", size:"500 mL" },
    { id:2, name:"Amul Gold (Full Cream, 1 L)", price:66, category:"milk", badge:"", emoji:"🥛", size:"1 L" },
    { id:3, name:"Amul Taaza (Toned Milk, 500 mL)", price:27, category:"milk", badge:"", emoji:"🥛", size:"500 mL" },
    { id:4, name:"Amul Taaza (Toned Milk, 1 L)", price:54, category:"milk", badge:"", emoji:"🥛", size:"1 L" },
    { id:5, name:"Amul Cow Milk (500 mL)", price:29, category:"milk", badge:"", emoji:"🥛", size:"500 mL" },
    { id:6, name:"Amul Cow Milk (1 L)", price:56, category:"milk", badge:"", emoji:"🥛", size:"1 L" },
    { id:7, name:"Amul Shakti (Standardized, 500 mL)", price:30, category:"milk", badge:"", emoji:"🥛", size:"500 mL" },
    { id:8, name:"Amul Slim n Trim (Double Toned, 500 mL)", price:24, category:"milk", badge:"Low Fat", emoji:"🥛", size:"500 mL" },
    { id:9, name:"Amul Buffalo Milk (500 mL)", price:37, category:"milk", badge:"", emoji:"🥛", size:"500 mL" },
    { id:10, name:"Amul Buffalo Milk (1 L)", price:72, category:"milk", badge:"", emoji:"🥛", size:"1 L" },
    { id:11, name:"Amul A2 Deshi Cow Milk (500 mL)", price:35, category:"milk", badge:"Premium", emoji:"🥛", size:"500 mL" },
    { id:12, name:"Amul T-Special Milk (For Tea/Cafes, 1 L)", price:60, category:"milk", badge:"", emoji:"🥛", size:"1 L" },
    { id:13, name:"Amul Taaza UHT Milk (1 L)", price:74, category:"milk", badge:"UHT", emoji:"📦", size:"1 L" },
    { id:14, name:"Amul Gold UHT Milk (1 L)", price:84, category:"milk", badge:"UHT", emoji:"📦", size:"1 L" },
    { id:15, name:"Amul Slim n Trim UHT Milk (1 L)", price:70, category:"milk", badge:"UHT", emoji:"📦", size:"1 L" },
    { id:16, name:"Amul Lactose-Free Milk (250 mL)", price:26, category:"milk", badge:"Special", emoji:"📦", size:"250 mL" },
    { id:17, name:"Amul Calci+ Calcium Fortified Milk (1 L)", price:98, category:"milk", badge:"Fortified", emoji:"📦", size:"1 L" },
    { id:18, name:"Amul Moti Long-Life Milk (450 mL)", price:32, category:"milk", badge:"", emoji:"📦", size:"450 mL" },
    { id:19, name:"Amul Camel Milk (200 mL)", price:30, category:"milk", badge:"Exotic", emoji:"📦", size:"200 mL" },
    { id:20, name:"Amul Haldi Milk (200 mL)", price:30, category:"milk", badge:"Special", emoji:"📦", size:"200 mL" },
    { id:21, name:"Amul Pasteurised Salted Butter (100 g)", price:63, category:"butter", badge:"Bestseller", emoji:"🧈", size:"100 g" },
    { id:22, name:"Amul Pasteurised Salted Butter (500 g)", price:230, category:"butter", badge:"", emoji:"🧈", size:"500 g" },
    { id:23, name:"Amul Cooking Unsalted White Butter (100 g)", price:65, category:"butter", badge:"", emoji:"🧈", size:"100 g" },
    { id:24, name:"Amul Cooking Unsalted White Butter (500 g)", price:305, category:"butter", badge:"", emoji:"🧈", size:"500 g" },
    { id:25, name:"Amul Garlic & Herbs Butter (100 g)", price:68, category:"butter", badge:"Flavoured", emoji:"🧈", size:"100 g" },
    { id:26, name:"Amul Lite Low-Fat Fat Spread (100 g)", price:58, category:"butter", badge:"Low Fat", emoji:"🧈", size:"100 g" },
    { id:27, name:"Amul Lite Low-Fat Fat Spread (500 g)", price:260, category:"butter", badge:"Low Fat", emoji:"🧈", size:"500 g" },
    { id:28, name:"Amul Chocolate Butter Spread (200 g)", price:100, category:"butter", badge:"New", emoji:"🧈", size:"200 g" },
    { id:29, name:"Delicious Margarine (Fat Spread, 500 g)", price:97, category:"butter", badge:"", emoji:"🧈", size:"500 g" },
    { id:30, name:"Amul Pure Ghee (500 mL Ceka Pack)", price:325, category:"ghee", badge:"Popular", emoji:"🪔", size:"500 mL" },
    { id:31, name:"Amul Pure Ghee (1 L Ceka Pack)", price:631, category:"ghee", badge:"", emoji:"🪔", size:"1 L" },
    { id:32, name:"Amul Pure Ghee (1 L Tin)", price:660, category:"ghee", badge:"Tin", emoji:"🪔", size:"1 L" },
    { id:33, name:"Amul Cow Ghee (500 mL Pouch)", price:365, category:"ghee", badge:"Cow", emoji:"🪔", size:"500 mL" },
    { id:34, name:"Amul Cow Ghee (1 L Tin)", price:705, category:"ghee", badge:"Cow", emoji:"🪔", size:"1 L" },
    { id:35, name:"Amul High-Aroma Brown Ghee (1 L Tin)", price:690, category:"ghee", badge:"Premium", emoji:"🪔", size:"1 L" },
    { id:36, name:"Sagar Pure Ghee (1 L Pouch)", price:615, category:"ghee", badge:"", emoji:"🪔", size:"1 L" },
    { id:37, name:"Amul Cheese Slices (5 Slices)", price:95, category:"cheese", badge:"Popular", emoji:"🧀", size:"100 g" },
    { id:38, name:"Amul Cheese Slices (10 Slices)", price:140, category:"cheese", badge:"", emoji:"🧀", size:"200 g" },
    { id:39, name:"Amul Cheese Cubes (8 Cubes)", price:135, category:"cheese", badge:"", emoji:"🧀", size:"200 g" },
    { id:40, name:"Amul Processed Cheese Block (200 g)", price:126, category:"cheese", badge:"", emoji:"🧀", size:"200 g" },
    { id:41, name:"Amul Processed Cheese Block (1 Kg)", price:530, category:"cheese", badge:"Value Pack", emoji:"🧀", size:"1 Kg" },
    { id:42, name:"Amul Diced Mozzarella & Pizza Cheese (200 g)", price:135, category:"cheese", badge:"For Pizza", emoji:"🧀", size:"200 g" },
    { id:43, name:"Amul Diced Mozzarella & Pizza Cheese (1 Kg)", price:493, category:"cheese", badge:"Value Pack", emoji:"🧀", size:"1 Kg" },
    { id:44, name:"Amul Cheese Spread Plain (200 g Tub)", price:105, category:"cheese", badge:"", emoji:"🧀", size:"200 g" },
    { id:45, name:"Amul Cheese Spread Flavoured (200 g Tub)", price:110, category:"cheese", badge:"Garlic/Chili", emoji:"🧀", size:"200 g" },
    { id:46, name:"Amul Cheese Sauce (250 g Squeezy)", price:110, category:"cheese", badge:"", emoji:"🧀", size:"250 g" },
    { id:47, name:"Amul Gouda Natural Cheese (200 g)", price:180, category:"cheese", badge:"Premium", emoji:"🧀", size:"200 g" },
    { id:48, name:"Amul Emmental Natural Cheese (200 g)", price:220, category:"cheese", badge:"Premium", emoji:"🧀", size:"200 g" },
    { id:49, name:"Amul Fresh Malai Paneer Block (100 g)", price:50, category:"paneer", badge:"", emoji:"🧀", size:"100 g" },
    { id:50, name:"Amul Fresh Malai Paneer Block (200 g)", price:92, category:"paneer", badge:"Popular", emoji:"🧀", size:"200 g" },
    { id:51, name:"Amul Fresh Malai Paneer Block (1 Kg)", price:430, category:"paneer", badge:"Value Pack", emoji:"🧀", size:"1 Kg" },
    { id:52, name:"Amul High Protein Paneer (400 g)", price:165, category:"paneer", badge:"High Protein", emoji:"🧀", size:"400 g" },
    { id:53, name:"Amul Mawa / Khoya (1 Kg)", price:410, category:"paneer", badge:"", emoji:"🧀", size:"1 Kg" },
    { id:54, name:"Amul Masti Dahi Pouch (200 g)", price:22, category:"paneer", badge:"", emoji:"🥛", size:"200 g" },
    { id:55, name:"Amul Masti Dahi Pouch (400 g)", price:36, category:"paneer", badge:"", emoji:"🥛", size:"400 g" },
    { id:56, name:"Amul Masti Dahi Cup (400 g)", price:35, category:"paneer", badge:"", emoji:"🥛", size:"400 g" },
    { id:57, name:"Amul Lite Low-Fat Dahi (200 g Cup)", price:25, category:"paneer", badge:"Low Fat", emoji:"🥛", size:"200 g" },
    { id:58, name:"Amul Mishti Doi Sweet Bengali Curd (85 g)", price:15, category:"yogurt", badge:"Traditional", emoji:"🍮", size:"85 g" },
    { id:59, name:"Amul Mishti Doi Sweet Bengali Curd (400 g)", price:45, category:"yogurt", badge:"", emoji:"🍮", size:"400 g" },
    { id:60, name:"Amul Flavoured Fruit Yogurt (100 g Cup)", price:30, category:"yogurt", badge:"", emoji:"🍮", size:"100 g" },
    { id:61, name:"Amul Shrikhand Plain/Elaichi (200 g)", price:40, category:"yogurt", badge:"Traditional", emoji:"🍮", size:"200 g" },
    { id:62, name:"Amul Shrikhand Kesar/Mango (200 g)", price:45, category:"yogurt", badge:"", emoji:"🍮", size:"200 g" },
    { id:63, name:"Amul Shrikhand Kesar/Mango (500 g)", price:110, category:"yogurt", badge:"Value", emoji:"🍮", size:"500 g" },
    { id:64, name:"Amul Masti Spiced Buttermilk (200 mL Pouch)", price:13, category:"yogurt", badge:"", emoji:"🥤", size:"200 mL" },
    { id:65, name:"Amul Masti Spiced Buttermilk (200 mL Tetra)", price:20, category:"yogurt", badge:"", emoji:"🥤", size:"200 mL" },
    { id:66, name:"Amul High Protein Buttermilk (200 mL)", price:30, category:"yogurt", badge:"Protein", emoji:"🥤", size:"200 mL" },
    { id:67, name:"Amul Sweet Lassi (200 mL Tetra Pack)", price:25, category:"yogurt", badge:"", emoji:"🥤", size:"200 mL" },
    { id:68, name:"Amul Flavoured Lassi Mango/Rose (200 mL)", price:25, category:"yogurt", badge:"", emoji:"🥤", size:"200 mL" },
    { id:69, name:"Amul Kool Flavoured Milk (180 mL Bottle)", price:30, category:"beverages", badge:"Glass Bottle", emoji:"🍶", size:"180 mL" },
    { id:70, name:"Amul Kool Milkshake (200 mL Tetra Pack)", price:35, category:"beverages", badge:"", emoji:"🍶", size:"200 mL" },
    { id:71, name:"Amul Kool Milkshake (200 mL Can)", price:40, category:"beverages", badge:"Can", emoji:"🍶", size:"200 mL" },
    { id:72, name:"Amul Smoothies Thick Fruit Dairy (200 mL)", price:35, category:"beverages", badge:"New", emoji:"🍶", size:"200 mL" },
    { id:73, name:"Amul Whey Protein Drink (200 mL)", price:40, category:"beverages", badge:"Protein", emoji:"🍶", size:"200 mL" },
    { id:74, name:"Amul High Protein Milkshake (200 mL)", price:50, category:"beverages", badge:"Protein", emoji:"🍶", size:"200 mL" },
    { id:75, name:"Amul Fresh Cream 25% Low Fat (250 mL)", price:70, category:"cream", badge:"", emoji:"🍦", size:"250 mL" },
    { id:76, name:"Amul Fresh Cream 25% Low Fat (1 L)", price:240, category:"cream", badge:"Value", emoji:"🍦", size:"1 L" },
    { id:77, name:"Amul Heavy Whipping Cream (1 L)", price:220, category:"cream", badge:"Whipping", emoji:"🍦", size:"1 L" },
    { id:78, name:"Amul Mithai Mate Condensed Milk (210 g)", price:80, category:"cream", badge:"For Mithai", emoji:"🍦", size:"210 g" },
    { id:79, name:"Amulya Dairy Whitener Powder (200 g)", price:145, category:"powder", badge:"", emoji:"🥛", size:"200 g" },
    { id:80, name:"Amulya Dairy Whitener Powder (1 Kg)", price:480, category:"powder", badge:"Value Pack", emoji:"🥛", size:"1 Kg" },
    { id:81, name:"Amul Sagar Skimmed Milk Powder (1 Kg)", price:420, category:"powder", badge:"Zero Fat", emoji:"🥛", size:"1 Kg" },
    { id:82, name:"Amulspray Infant Milk Powder (200 g)", price:135, category:"powder", badge:"Infant", emoji:"🥛", size:"200 g" },
    { id:83, name:"Amulspray Infant Milk Powder (500 g Tin)", price:253, category:"powder", badge:"Infant", emoji:"🥛", size:"500 g" },
    { id:84, name:"Amul Gulab Jamun (500 g Tin)", price:130, category:"sweets", badge:"Popular", emoji:"🍮", size:"500 g" },
    { id:85, name:"Amul Gulab Jamun (1 Kg Tin)", price:250, category:"sweets", badge:"Value", emoji:"🍮", size:"1 Kg" },
    { id:86, name:"Amul Rosogolla (500 g Tin)", price:130, category:"sweets", badge:"", emoji:"🍮", size:"500 g" },
    { id:87, name:"Amul Rosogolla (1 Kg Tin)", price:250, category:"sweets", badge:"Value", emoji:"🍮", size:"1 Kg" },
    { id:88, name:"Amul Kesar Peda / Malai Peda (250 g)", price:160, category:"sweets", badge:"Traditional", emoji:"🍮", size:"250 g" },
    { id:89, name:"Amul Kaju Katli (250 g)", price:300, category:"sweets", badge:"Premium", emoji:"🍮", size:"250 g" },
    { id:90, name:"Amul Milk Cake (250 g)", price:170, category:"sweets", badge:"", emoji:"🍮", size:"250 g" },
    { id:91, name:"Amul Kesar Basundi (1 L Carton)", price:200, category:"sweets", badge:"Traditional", emoji:"🍮", size:"1 L" },
    { id:92, name:"Amul Vanilla Magic Ice Cream (1 L Tub)", price:160, category:"icecream", badge:"Popular", emoji:"🍦", size:"1 L" },
    { id:93, name:"Amul Strawberry Ice Cream (1 L Tub)", price:160, category:"icecream", badge:"", emoji:"🍦", size:"1 L" },
    { id:94, name:"Amul Chocolate Ice Cream (1 L Tub)", price:190, category:"icecream", badge:"", emoji:"🍦", size:"1 L" },
    { id:95, name:"Amul Butterscotch Ice Cream (1 L Tub)", price:200, category:"icecream", badge:"", emoji:"🍦", size:"1 L" },
    { id:96, name:"Amul Alphonso Mango Ice Cream (1 L Tub)", price:220, category:"icecream", badge:"Premium", emoji:"🍦", size:"1 L" },
    { id:97, name:"Amul Premium Rajbhog Ice Cream (1 L Tub)", price:250, category:"icecream", badge:"Premium", emoji:"🍦", size:"1 L" },
    { id:98, name:"Amul Premium Tiramisu Ice Cream (1 L Tub)", price:280, category:"icecream", badge:"Premium", emoji:"🍦", size:"1 L" },
    { id:99, name:"Amul Premium Cookies & Cream (1 L Tub)", price:260, category:"icecream", badge:"Premium", emoji:"🍦", size:"1 L" },
    { id:100, name:"Amul Sugar-Free Vanilla Ice Cream (500 mL)", price:120, category:"icecream", badge:"Sugar Free", emoji:"🍦", size:"500 mL" }
];

let cart = JSON.parse(localStorage.getItem('satkarCart')) || [];
let activeCategory = 'all';
let modalQty = 1;
let currentModalProduct = null;

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const productTotal = document.getElementById('productTotal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

const categoryNames = {
    milk:"Fresh Milk & UHT", butter:"Butter & Spreads", ghee:"Ghee",
    cheese:"Cheese", paneer:"Paneer, Mawa & Curd", yogurt:"Yogurt, Shrikhand & Lassi",
    beverages:"Beverages", cream:"Creams & Condensed Milk", powder:"Milk Powders",
    sweets:"Traditional Sweets", icecream:"Ice Cream"
};

function renderProducts(filter = 'all', search = '') {
    let filtered = products;
    if (filter !== 'all') filtered = filtered.filter(p => p.category === filter);
    if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

    if (filtered.length === 0) {
        productsGrid.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>No products found</p></div>';
        productTotal.textContent = 'No products found';
        return;
    }

    productTotal.textContent = filter === 'all'
        ? `Showing all ${filtered.length} products`
        : `Showing ${filtered.length} ${categoryNames[filter] || ''} products`;

    productsGrid.innerHTML = filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
            ${p.badge ? `<span class="product-tag${p.badge === 'Premium' || p.badge === 'New' ? ' accent' : ''}">${p.badge}</span>` : ''}
            <div class="product-img">${p.emoji}</div>
            <div class="product-body">
                <span class="product-cat">${p.category}</span>
                <p class="product-title">${p.name}</p>
                <p class="product-size">${p.size}</p>
                <p class="product-price">₹${p.price}</p>
            </div>
            <div class="product-footer">
                <button class="btn-add" onclick="addToCart(${p.id}, event)">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-add')) openModal(parseInt(card.dataset.id));
        });
    });
}

function addToCart(id, event) {
    if (event) event.stopPropagation();
    const product = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) { existing.qty += 1; }
    else { cart.push({ ...product, qty: 1 }); }
    saveCart();
    updateCartUI();
    showAddedFeedback(event ? event.target.closest('.btn-add') : null);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) { removeFromCart(id); return; }
    }
    saveCart();
    updateCartUI();
}

function saveCart() { localStorage.setItem('satkarCart', JSON.stringify(cart)); }

function updateCartUI() {
    const totalItems = cart.reduce((s, c) => s + c.qty, 0);
    const totalPrice = cart.reduce((s, c) => s + (c.price * c.qty), 0);
    cartCount.textContent = totalItems;
    cartTotal.textContent = '₹' + totalPrice;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p><span>Add products to get started</span></div>';
        return;
    }

    cartItems.innerHTML = cart.map(c => `
        <div class="cart-item">
            <div class="cart-item-icon">${c.emoji}</div>
            <div class="cart-item-info">
                <p class="cart-item-name">${c.name}</p>
                <p class="cart-item-price">₹${c.price * c.qty}</p>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="changeQty(${c.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span>${c.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${c.id}, 1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${c.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');
}

function showAddedFeedback(btn) {
    if (!btn) return;
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    btn.classList.add('added');
    setTimeout(() => { btn.innerHTML = original; btn.classList.remove('added'); }, 1200);
}

function openModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    currentModalProduct = product;
    modalQty = 1;
    document.getElementById('modalImage').textContent = product.emoji;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalSize').textContent = product.size;
    document.getElementById('modalPrice').textContent = '₹' + product.price;
    document.getElementById('modalQty').textContent = modalQty;
    modalOverlay.classList.add('open');
}

// Cart
cartIcon.addEventListener('click', () => { cartSidebar.classList.add('open'); cartOverlay.classList.add('open'); });
function closeCart() { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); }
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) { alert('Your cart is empty!'); return; }
    window.location.href = 'checkout.html';
});

// Modal
modalClose.addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('open'); });
document.getElementById('modalMinus').addEventListener('click', () => {
    if (modalQty > 1) { modalQty--; document.getElementById('modalQty').textContent = modalQty; }
});
document.getElementById('modalPlus').addEventListener('click', () => {
    modalQty++; document.getElementById('modalQty').textContent = modalQty;
});
document.getElementById('modalAddCart').addEventListener('click', () => {
    if (!currentModalProduct) return;
    for (let i = 0; i < modalQty; i++) addToCart(currentModalProduct.id);
    modalOverlay.classList.remove('open');
    closeCart();
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
});

// Nav
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        renderProducts(activeCategory, searchInput.value);
    });
});

searchInput.addEventListener('input', () => renderProducts(activeCategory, searchInput.value));
searchBtn.addEventListener('click', () => renderProducts(activeCategory, searchInput.value));

// Init
renderProducts();
updateCartUI();
