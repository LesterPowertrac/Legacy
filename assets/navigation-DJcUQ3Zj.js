import{m as l,c as w}from"./create-element-if-not-defined-DQ8JpCh6.js";function y(x){let{swiper:a,extendParams:C,on:c,emit:g}=x;C({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};function u(n){let i;return n&&typeof n=="string"&&a.isElement&&(i=a.el.querySelector(n)||a.hostEl.querySelector(n),i)?i:(n&&(typeof n=="string"&&(i=[...document.querySelectorAll(n)]),a.params.uniqueNavElements&&typeof n=="string"&&i&&i.length>1&&a.el.querySelectorAll(n).length===1?i=a.el.querySelector(n):i&&i.length===1&&(i=i[0])),n&&!i?n:i)}function v(n,i){const t=a.params.navigation;n=l(n),n.forEach(e=>{e&&(e.classList[i?"add":"remove"](...t.disabledClass.split(" ")),e.tagName==="BUTTON"&&(e.disabled=i),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](t.lockClass))})}function d(){const{nextEl:n,prevEl:i}=a.navigation;if(a.params.loop){v(i,!1),v(n,!1);return}v(i,a.isBeginning&&!a.params.rewind),v(n,a.isEnd&&!a.params.rewind)}function E(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),g("navigationPrev"))}function h(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),g("navigationNext"))}function f(){const n=a.params.navigation;if(a.params.navigation=w(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let i=u(n.nextEl),t=u(n.prevEl);Object.assign(a.navigation,{nextEl:i,prevEl:t}),i=l(i),t=l(t);const e=(s,p)=>{s&&s.addEventListener("click",p==="next"?h:E),!a.enabled&&s&&s.classList.add(...n.lockClass.split(" "))};i.forEach(s=>e(s,"next")),t.forEach(s=>e(s,"prev"))}function m(){let{nextEl:n,prevEl:i}=a.navigation;n=l(n),i=l(i);const t=(e,s)=>{e.removeEventListener("click",s==="next"?h:E),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};n.forEach(e=>t(e,"next")),i.forEach(e=>t(e,"prev"))}c("init",()=>{a.params.navigation.enabled===!1?b():(f(),d())}),c("toEdge fromEdge lock unlock",()=>{d()}),c("destroy",()=>{m()}),c("enable disable",()=>{let{nextEl:n,prevEl:i}=a.navigation;if(n=l(n),i=l(i),a.enabled){d();return}[...n,...i].filter(t=>!!t).forEach(t=>t.classList.add(a.params.navigation.lockClass))}),c("click",(n,i)=>{let{nextEl:t,prevEl:e}=a.navigation;t=l(t),e=l(e);const s=i.target;let p=e.includes(s)||t.includes(s);if(a.isElement&&!p){const o=i.path||i.composedPath&&i.composedPath();o&&(p=o.find(r=>t.includes(r)||e.includes(r)))}if(a.params.navigation.hideOnClick&&!p){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===s||a.pagination.el.contains(s)))return;let o;t.length?o=t[0].classList.contains(a.params.navigation.hiddenClass):e.length&&(o=e[0].classList.contains(a.params.navigation.hiddenClass)),g(o===!0?"navigationShow":"navigationHide"),[...t,...e].filter(r=>!!r).forEach(r=>r.classList.toggle(a.params.navigation.hiddenClass))}});const k=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),f(),d()},b=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(a.navigation,{enable:k,disable:b,update:d,init:f,destroy:m})}export{y as N};