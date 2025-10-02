

    ```javascript
// Basic interactivity: mobile nav, portfolio modal, contact form
document.addEventListener('DOMContentLoaded', ()=>{
// year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', ()=> mainNav.classList.toggle('open'));

// portfolio modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.portfolio-item').forEach(item=>{
const open = ()=>{
modalImg.src = item.dataset.img;
modalImg.alt = item.dataset.title;
modalTitle.textContent = item.dataset.title;
modalDesc.textContent = item.dataset.desc;
modal.setAttribute('aria-hidden','false');
document.body.style.overflow = 'hidden';
};
item.addEventListener('click', open);
item.addEventListener('keypress', (e)=>{ if(e.key === 'Enter') open() });
});

modalClose.addEventListener('click', ()=>{ modal.setAttribute('aria-hidden','true'); document.body.style.overflow='';
});
modal.addEventListener('click', (e)=>{ if(e.target === modal) { modal.setAttribute('aria-hidden','true');
document.body.style.overflow=''; } });

// contact form (progressive enhancement)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', async (e)=>{
e.preventDefault();
const data = new FormData(form);
msg.textContent = 'Sending...';
try{
const res = await fetch(form.action, {method:form.method, body:data, headers:{'Accept':'application/json'}});
if(res.ok){ msg.textContent = 'Thanks — we got your message!'; form.reset(); }
else { msg.textContent = 'Oops, there was a problem. Try email: hello@studioone.example'; }
} catch(err){ msg.textContent = 'Network error. Try emailing hello@studioone.example'; }
});
});
```

---

### === Folder: assets ===

    Place these files in `/assets`:

* favicon.svg(simple S1 monogram)
    * hero - mockup.png(1024×720) — large showcase mockup
        * portfolio - 1.png, portfolio - 2.png, portfolio - 3.png, portfolio - 4.png(full - size)
            * portfolio - 1 - thumb.png, portfolio - 2 - thumb.png, ... (400×280 thumbs)
* icon - design.svg, icon - ux.svg, icon - web.svg, icon - ml.svg(48×48)

    (Sources: use high - res images from your own projects or royalty - free sites like Unsplash, Pexels — recommended sizes:
        hero 1600×1000, portfolio full 1400px width, thumbs 600px width.)

---

### === File: README.md ===

    ```md
Studio One — website package

Files:
- index.html
- css/styles.css
- js/script.js
- assets/* (images + icons)

