(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelectorAll(".js-close-menu"),c=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",c),n.forEach((e=>e.addEventListener("click",c)))})();
//# sourceMappingURL=index.2e50343f.js.map
