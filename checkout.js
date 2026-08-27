let cart = JSON.parse(localStorage.getItem('satkarCart')) || [];
let deliveryData = {};
let promoDiscount = 0;
let isExpress = false;

const promoCodes = {
    "SATKAR50": { type: "flat", value: 50, desc: "₹50 off" },
    "FRESH10": { type: "percent", value: 10, desc: "10% off" },
    "DAIRY20": { type: "percent", value: 20, desc: "20% off (max ₹100)", max: 100 },
    "FIRSTORDER": { type: "flat", value: 100, desc: "₹100 off for new users" },
    "FREEDEL": { type: "delivery", value: 0, desc: "Free Delivery" }
};

if (cart.length === 0 && !localStorage.getItem('satkarOrderPlaced')) {
    window.location.href = "index.html";
}

function renderSummary(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;
    container.innerHTML = cart.map(c => `
        <div class="sum-item">
            <span class="sum-icon">${c.emoji}</span>
            <div class="sum-info">
                <p class="sum-name">${c.name}</p>
                <p class="sum-qty">Qty: ${c.qty} x ₹${c.price}</p>
            </div>
            <span class="sum-price">₹${c.price * c.qty}</span>
        </div>
    `).join('');
}

function calculateTotals() {
    const subtotal = cart.reduce((s, c) => s + (c.price * c.qty), 0);
    const expressCharge = isExpress ? 49 : 0;
    let deliveryFee = subtotal >= 500 ? 0 : 40;
    const appliedPromo = document.getElementById('promoInput')?.value?.toUpperCase();
    if (appliedPromo && promoCodes[appliedPromo]?.type === 'delivery') deliveryFee = 0;
    let discount = 0;
    if (appliedPromo && promoCodes[appliedPromo]?.type === 'flat') discount = promoCodes[appliedPromo].value;
    else if (appliedPromo && promoCodes[appliedPromo]?.type === 'percent') discount = Math.min(subtotal * promoCodes[appliedPromo].value / 100, promoCodes[appliedPromo].max || Infinity);
    const codCharge = document.querySelector('input[name="payment"]:checked')?.value === 'cod' ? 25 : 0;
    const totalBeforeTax = subtotal + deliveryFee + expressCharge + codCharge - discount;
    const gst = Math.round(totalBeforeTax * 0.05);
    const total = totalBeforeTax + gst;
    return { subtotal, deliveryFee, expressCharge, codCharge, discount, gst, total };
}

function updateTotals() {
    const t = calculateTotals();
    ['subtotal','subtotal2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '₹' + t.subtotal; });
    ['deliveryFee','deliveryFee2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = t.deliveryFee === 0 ? 'FREE' : '₹' + t.deliveryFee; });
    ['gst','gst2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '₹' + t.gst; });
    ['finalTotal','finalTotal2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '₹' + t.total; });
    if (t.discount > 0) {
        ['discountRow','discountRow2'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'flex'; });
        ['discountAmt','discountAmt2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '-₹' + t.discount; });
    }
}

function renderDateOptions() {
    const container = document.getElementById('dateOptions');
    if (!container) return;
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(); d.setDate(d.getDate() + i);
        const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const label = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : `${dayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]}`;
        const dateStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        dates.push({ label, dateStr });
    }
    container.innerHTML = dates.map((d, i) => `
        <label class="date-chip"><input type="radio" name="date" value="${d.dateStr}" ${i===0?'checked':''}><span>${d.label}</span></label>
    `).join('');
}

document.querySelectorAll('input[name="slot"]').forEach(r => {
    r.addEventListener('change', () => { isExpress = r.value === 'express'; updateTotals(); });
});

document.getElementById('applyPromo')?.addEventListener('click', () => {
    const code = document.getElementById('promoInput').value.toUpperCase().trim();
    const msg = document.getElementById('promoMsg');
    if (!code) { msg.textContent = 'Enter a promo code'; msg.style.color = 'var(--danger)'; return; }
    if (promoCodes[code]) {
        msg.textContent = `Applied! ${promoCodes[code].desc}`;
        msg.style.color = 'var(--success)';
    } else {
        msg.textContent = 'Invalid promo code';
        msg.style.color = 'var(--danger)';
    }
    updateTotals();
});

const paymentForms = { upi: document.getElementById('upiForm'), card: document.getElementById('cardForm'), netbanking: document.getElementById('netbankingForm'), wallet: document.getElementById('walletForm'), cod: document.getElementById('codForm') };
document.querySelectorAll('.pay-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const method = card.dataset.method;
        Object.values(paymentForms).forEach(f => { if(f) f.style.display = 'none'; });
        if (paymentForms[method]) paymentForms[method].style.display = 'block';
        updateTotals();
    });
});

document.getElementById('cardNumber')?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    e.target.value = val.replace(/(.{4})/g, '$1 ').trim();
});
document.getElementById('cardExpiry')?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) val = val.substring(0,2) + '/' + val.substring(2);
    e.target.value = val;
});

function validateDeliveryForm() {
    const fields = ['firstName','lastName','email','phone','address1','city','state','pincode'];
    let valid = true;
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (!el.value.trim()) { el.style.borderColor = 'var(--danger)'; valid = false; }
        else el.style.borderColor = '';
    });
    return valid;
}

function validatePaymentForm() {
    const method = document.querySelector('input[name="payment"]:checked')?.value;
    if (method === 'upi') return document.getElementById('upiId')?.value?.includes('@');
    if (method === 'card') {
        const num = document.getElementById('cardNumber')?.value?.replace(/\s/g,'');
        return num?.length >= 13 && document.getElementById('cardName')?.value && document.getElementById('cardExpiry')?.value?.length === 5 && document.getElementById('cardCvv')?.value?.length === 3;
    }
    if (method === 'netbanking') return document.querySelector('input[name="bank"]:checked');
    return true;
}

document.getElementById('toPayment')?.addEventListener('click', () => {
    if (!validateDeliveryForm()) { alert('Please fill all required fields'); return; }
    deliveryData = {
        name: document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address1').value + (document.getElementById('address2').value ? ', ' + document.getElementById('address2').value : ''),
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value,
        slot: document.querySelector('input[name="slot"]:checked')?.value || 'morning',
        date: document.querySelector('input[name="date"]:checked')?.value
    };
    document.getElementById('deliverySection').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'block';
    document.getElementById('step3').classList.add('active');
    document.getElementById('stepLine2').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateTotals();
});

document.getElementById('backToDelivery')?.addEventListener('click', () => {
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('deliverySection').style.display = 'block';
    document.getElementById('step3').classList.remove('active');
    document.getElementById('stepLine2').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('placeOrder')?.addEventListener('click', () => {
    if (!validatePaymentForm()) { alert('Please complete payment details'); return; }
    const t = calculateTotals();
    const method = document.querySelector('input[name="payment"]:checked')?.value;
    const methodNames = { upi:'UPI', card:'Credit/Debit Card', netbanking:'Net Banking', wallet:'Wallet', cod:'Cash on Delivery' };
    const orderId = 'SPP' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2,6).toUpperCase();
    const slotNames = { morning:'8 AM - 12 PM', afternoon:'12 PM - 5 PM', evening:'5 PM - 9 PM', express:'Within 2 Hours' };
    const dateVal = document.querySelector('input[name="date"]:checked')?.value;
    const dateLabel = dateVal === new Date().toISOString().split('T')[0] ? 'Today' : dateVal;

    document.getElementById('orderId').textContent = orderId;
    document.getElementById('successAddress').textContent = deliveryData.address + ', ' + deliveryData.city + ', ' + deliveryData.state + ' - ' + deliveryData.pincode;
    document.getElementById('successDelivery').textContent = dateLabel + ', ' + slotNames[deliveryData.slot || 'morning'];
    document.getElementById('successPayment').textContent = methodNames[method] || method;
    document.getElementById('successTotal').textContent = '₹' + t.total;

    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('successSection').style.display = 'block';
    document.getElementById('step4').classList.add('active');
    document.getElementById('stepLine3').classList.add('active');

    localStorage.removeItem('satkarCart');
    localStorage.setItem('satkarOrderPlaced', 'true');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Init
renderSummary('summaryItems');
renderSummary('summaryItems2');
renderDateOptions();
updateTotals();
