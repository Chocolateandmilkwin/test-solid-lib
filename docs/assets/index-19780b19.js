(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const m={};let Q=M;const A=1,$=2,F={owned:null,cleanups:null,context:null,owner:null};var h=null;let y=null,a=null,d=null,v=null,O=0;function V(e,t){const n=a,s=h,i=e.length===0,o=i?F:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=i?e:()=>e(()=>U(()=>S(o)));h=o,a=null;try{return C(r,!0)}finally{a=n,h=s}}function x(e,t,n){const s=Y(e,t,!1,A);H(s)}function U(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function J(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=y&&y.running;r&&y.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?d.push(o):v.push(o),o.observers&&W(o)),r||(o.state=A)}if(d.length>1e6)throw d=[],new Error},!1)),t}function H(e){if(!e.fn)return;S(e);const t=h,n=a,s=O;a=h=e,X(e,e.value,s),a=n,h=t}function X(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=A,e.owned&&e.owned.forEach(S),e.owned=null),j(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?J(e,s):e.value=s,e.updatedAt=n)}function Y(e,t,n,s=A,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==F&&(h.owned?h.owned.push(o):h.owned=[o]),o}function I(e){const t=y;if(e.state===0||t)return;if(e.state===$||t)return N(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<O);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===A||t)H(e);else if(e.state===$||t){const i=d;d=null,C(()=>N(e,n[0]),!1),d=i}}function C(e,t){if(d)return e();let n=!1;t||(d=[]),v?n=!0:v=[],O++;try{const s=e();return Z(n),s}catch(s){n||(v=null),d=null,j(s)}}function Z(e){if(d&&(M(d),d=null),e)return;const t=v;v=null,t.length&&C(()=>Q(t),!1)}function M(e){for(let t=0;t<e.length;t++)I(e[t])}function N(e,t){const n=y;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===A||n?i!==t&&I(i):(i.state===$||n)&&N(i,t))}}function W(e){const t=y;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=$,s.pure?d.push(s):v.push(s),s.observers&&W(s))}}function S(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)S(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function k(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function j(e){throw e=k(e),e}function T(e,t){return U(()=>e(t||{}))}function z(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,f=t[i-1].nextSibling,u=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const c=o<s?l?n[l-1].nextSibling:n[o-l]:f;for(;l<o;)e.insertBefore(n[l++],c)}else if(o===l)for(;r<i;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],c),t[i]=n[o]}else{if(!u){u=new Map;let _=l;for(;_<o;)u.set(n[_],_++)}const c=u.get(t[r]);if(c!=null)if(l<c&&c<o){let _=r,E=1,R;for(;++_<i&&_<o&&!((R=u.get(t[_]))==null||R!==c+E);)E++;if(E>c-l){const K=t[r];for(;l<c;)e.insertBefore(n[l++],K)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}function ee(e,t,n,s={}){let i;return V(o=>{i=o,t===document?e():L(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function P(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function p(e,t){t==null?e.removeAttribute("class"):e.className=t}function L(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return b(e,t,s,n);x(i=>b(e,t(),i,n),s)}function b(e,t,n,s,i){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(m.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=w(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(m.context)return n;n=w(e,n,s)}else{if(o==="function")return x(()=>{let l=t();for(;typeof l=="function";)l=l();n=b(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],f=n&&Array.isArray(n);if(B(l,t,n,i))return x(()=>n=b(e,l,n,s,!0)),()=>n;if(m.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=w(e,n,s),r)return n}else f?n.length===0?D(e,l,s):z(e,n,l):(n&&w(e),D(e,l));n=l}else if(t instanceof Node){if(m.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=w(e,n,s,t);w(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function B(e,t,n,s){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],f=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=B(e,l,f)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=B(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||i}else e.push(l),i=!0;else{const u=String(l);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function D(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function w(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const f=l.parentNode===e;!o&&!r?f?e.replaceChild(i,l):e.insertBefore(i,n):f&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const G=""+new URL("logo-123b04bc.svg",import.meta.url).href,te="_App_9g4xh_1",ne="_logo_9g4xh_5",ie="_header_9g4xh_11",se="_link_9g4xh_22",g={App:te,logo:ne,"logo-spin":"_logo-spin_9g4xh_1",header:ie,link:se},le=P('<div><header><img alt="logo"><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>'),oe=e=>(console.warn(e),(()=>{const t=le.cloneNode(!0),n=t.firstChild,s=n.firstChild,i=s.nextSibling,o=i.nextSibling;return q(s,"src",G),x(r=>{const l=g.App,f=g.header,u=g.logo,c=g.link;return l!==r._v$&&p(t,r._v$=l),f!==r._v$2&&p(n,r._v$2=f),u!==r._v$3&&p(s,r._v$3=u),c!==r._v$4&&p(o,r._v$4=c),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})()),re=P('<div><header><img alt="logo"><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>'),fe=e=>(()=>{const t=re.cloneNode(!0),n=t.firstChild,s=n.firstChild,i=s.nextSibling,o=i.nextSibling;return q(s,"src",G),x(r=>{const l=g.App,f=g.header,u=g.logo,c=g.link;return l!==r._v$&&p(t,r._v$=l),f!==r._v$2&&p(n,r._v$2=f),u!==r._v$3&&p(s,r._v$3=u),c!==r._v$4&&p(o,r._v$4=c),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})(),ue=P("<div>Hello World!</div>");function ce(){return(()=>{const e=ue.cloneNode(!0);return e.firstChild,L(e,T(oe,{text:"yo"}),null),L(e,T(fe,{test:1}),null),e})()}ee(()=>T(ce,{}),document.body);