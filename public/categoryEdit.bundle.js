(()=>{"use strict";const e=document.getElementById("allPosition"),t=document.getElementById("input-field"),n=(n,i)=>{for(let o=0;o<n.length;o++){const l=`\n        <input id="position" name="position" type="text" class="validate newInput" value="${n[o]}">\n        <label for="position"></label>\n        <input id="price" name="price" type="text" class="validate newInput" required min="1" value="${i[o]}">\n        <span class="helper-text" data-error="Введите цену">Цена</span>\n    `;let s=document.createElement("div");s.classList.add("input-field"),s.innerHTML=l,e.insertBefore(s,t)}};fetch("/category/dataposition").then((e=>e.json())).then((e=>e)).then((e=>{(e=>{const t=window.location.href.split("").slice(31,67).join("");for(let i=0;i<e.length;i++)t===e[i].id&&n(e[i].position,e[i].price)})(e)}))})();