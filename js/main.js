/* Books & Coffee — izvēlne un katalogs. Pasūtījumi notiek Instagram Direct. */
(function () {
"use strict";

var CATS = window.CATEGORIES || [];
var PRODUCTS = window.PRODUCTS || [];
var DM = "https://ig.me/m/booksandcoffee.riga";
var SITE = "https://pogodinq112-lab.github.io/booksandcoffee/";

document.getElementById("year").textContent = new Date().getFullYear();

function price(p) {
return "Cena " + p.price.toFixed(2) + " €" + (p.priceNote ? " " + p.priceNote : "");
}
function esc(s) {
return String(s).replace(/[&<>"']/g, function (ch) {
return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
});
}
function inCat(p, cat) {
return p.category === cat || (p.also || []).indexOf(cat) !== -1;
}

/* ---------- Animācijas (Motion, motion.dev) ---------- */

// Ja Motion neielādējās vai lietotājs izslēdzis animācijas, viss vienkārši redzams uzreiz.
var M = window.Motion;
var animOn = !!M && !matchMedia("(prefers-reduced-motion: reduce)").matches;
var EASE = [0.22, 1, 0.36, 1];

// Elements parādās (no apakšas uz augšu), kad ieritinās ekrānā
function reveal(els, delayStep) {
if (!animOn) return;
Array.prototype.forEach.call(els, function (el, i) {
el.style.opacity = "0";
M.inView(el, function () {
M.animate(el, { opacity: [0, 1], y: [24, 0] },
{ duration: 0.7, delay: delayStep ? (i % 4) * delayStep : 0, ease: EASE });
}, { margin: "0px 0px -10% 0px" });
});
}

if (animOn) {
var heroEls = document.querySelectorAll(".hero .eyebrow, .hero .wm-line, .hero .wm-and, .hero-lead, .hero-actions, .hero-coffee");
M.animate(heroEls, { opacity: [0, 1], y: [18, 0] },
{ duration: 0.8, delay: M.stagger(0.1), ease: EASE });
reveal(document.querySelectorAll(".section-head, .menu-card .menu-list, .events-photo, .events-text, .contact > *"), 0.12);
}
document.documentElement.classList.remove("anim");

/* ---------- Mobilā izvēlne ---------- */

var toggle = document.querySelector(".menu-toggle");
var nav = document.getElementById("galvena-izvelne");
function setMenu(open) {
toggle.setAttribute("aria-expanded", String(open));
nav.classList.toggle("is-open", open);
}
toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", function (e) {
if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
});
document.addEventListener("click", function (e) {
if (toggle.getAttribute("aria-expanded") === "true" && !e.target.closest(".site-header")) setMenu(false);
});

/* ---------- Katalogs ---------- */

var list = document.getElementById("produkti");
var filters = document.querySelector(".filters");

CATS.forEach(function (c) {
if (!PRODUCTS.some(function (p) { return inCat(p, c.id); })) return;
var b = document.createElement("button");
b.type = "button";
b.className = "filter";
b.setAttribute("data-filter", c.id);
b.setAttribute("aria-pressed", "false");
b.textContent = c.name;
filters.appendChild(b);
});

function card(p) {
var media = p.image
? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" width="1000" height="1000">'
: '<span class="ph"><span>' + esc(p.name) + "</span></span>";
var hasPrice = typeof p.price === "number";
return '<li class="product' + (p.wide ? " product-wide" : "") + '" id="prece-' + esc(p.id) + '">' +
'<div class="product-media">' + media + "</div>" +
'<div class="product-body">' +
'<h4 class="product-name">' + esc(p.name) + "</h4>" +
(p.note ? '<p class="product-note">' + esc(p.note) + "</p>" : "") +
'<div class="product-foot">' +
(hasPrice
? '<span class="product-price">' + esc(price(p)) + "</span>"
: '<span class="product-price product-price-ask">Cena pēc pieprasījuma</span>') +
'<a class="btn btn-small' + (hasPrice ? "" : " btn-ask") + '" href="' + DM + '" target="_blank" rel="noopener" data-order="' + esc(p.id) + '">' +
(hasPrice ? "Pasūtīt" : "Jautāt") + '<span class="visually-hidden">: ' + esc(p.name) + "</span></a>" +
"</div>" +
"</div></li>";
}

// “Visas preces”: katra prece tikai vienreiz, savā galvenajā nodaļā.
// Konkrēta nodaļa: arī preces, kurām šī nodaļa ir papildu (also).
// “Visas preces”: nodaļa “Grāmatas” pirmā, pārējās iepriekšējā secībā.
function renderProducts(filter) {
var cats = filter === "visas"
? CATS.filter(function (c) { return c.id === "gramatas"; })
.concat(CATS.filter(function (c) { return c.id !== "gramatas"; }))
: CATS;
list.innerHTML = cats.filter(function (c) {
return filter === "visas" || c.id === filter;
}).map(function (c) {
var items = PRODUCTS.filter(function (p) {
return filter === "visas" ? p.category === c.id : inCat(p, c.id);
});
if (!items.length) return "";
return '<li class="cat-head"><h3>' + c.name + '</h3><span class="cat-count">' + items.length + "</span></li>" +
items.map(card).join("");
}).join("");
reveal(list.querySelectorAll(".product"), 0.06);
}

filters.addEventListener("click", function (e) {
var b = e.target.closest(".filter");
if (!b) return;
setFilter(b.getAttribute("data-filter"));
});
function setFilter(id) {
filters.querySelectorAll(".filter").forEach(function (f) {
f.setAttribute("aria-pressed", String(f.getAttribute("data-filter") === id));
});
renderProducts(id);
}

/* ---------- Poga “Pasūtīt”: teksts starpliktuvē + Instagram Direct ---------- */

var toast = document.getElementById("toast");
var toastTimer;
function showToast(msg) {
toast.textContent = msg;
toast.hidden = false;
clearTimeout(toastTimer);
toastTimer = setTimeout(function () { toast.hidden = true; }, 4000);
}

function orderText(p) {
var what = p.name + (typeof p.price === "number" ? ", " + price(p) : "");
var start = typeof p.price === "number" ? "Labdien! Vēlos pasūtīt: " : "Labdien! Vēlos uzzināt cenu: ";
return start + what + ". " + SITE + "#prece-" + p.id;
}

function copy(text) {
if (navigator.clipboard && window.isSecureContext) {
return navigator.clipboard.writeText(text);
}
return new Promise(function (resolve, reject) {
var ta = document.createElement("textarea");
ta.value = text;
ta.setAttribute("readonly", "");
ta.style.position = "fixed";
ta.style.opacity = "0";
document.body.appendChild(ta);
ta.select();
try { document.execCommand("copy") ? resolve() : reject(); } catch (err) { reject(err); }
document.body.removeChild(ta);
});
}

// Saite atveras parastā veidā (target=_blank), teksts tiek nokopēts tajā pašā klikšķī
list.addEventListener("click", function (e) {
var a = e.target.closest("[data-order]");
if (!a) return;
var id = a.getAttribute("data-order");
var p = PRODUCTS.filter(function (x) { return x.id === id; })[0];
if (!p) return;
copy(orderText(p)).then(function () {
showToast("Teksts nokopēts! Ielīmējiet to Directā.");
}, function () {});
});

/* ---------- Saite uz konkrētu preci (#prece-…) ---------- */

renderProducts("visas");

function openFromHash() {
var m = /^#prece-(.+)$/.exec(location.hash);
if (!m) return;
var el = document.getElementById("prece-" + decodeURIComponent(m[1]));
if (!el) return;
el.scrollIntoView({ block: "center" });
el.classList.add("is-target");
setTimeout(function () { el.classList.remove("is-target"); }, 2500);
}
window.addEventListener("hashchange", openFromHash);
openFromHash();
})();
