const r={};function _(e){r.context=e}function V(){return{...r.context,id:`${r.context.id}${r.context.count++}-`,count:0}}let j=W;const T={},b=1,A=2,q={owned:null,cleanups:null,context:null,owner:null};var c=null;let S=null,g=null,x=null,u=null,a=null,B=0;function J(e,t){const n=g,i=c,s=e.length===0?q:{owned:null,cleanups:null,context:null,owner:t||i};c=s,g=null;try{return I(()=>e(()=>U(s)),!0)}finally{g=n,c=i}}function E(e,t,n){const i=Z(e,t,!1,b);O(i)}function K(e){if(x)return e();let t;const n=x=[];try{t=e()}finally{x=null}return I(()=>{for(let i=0;i<n.length;i+=1){const s=n[i];if(s.pending!==T){const o=s.pending;s.pending=T,L(s,o)}}},!1),t}function m(e){let t,n=g;return g=null,t=e(),g=n,t}function L(e,t,n){if(x)return e.pending===T&&x.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&I(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];i&&S.disposed.has(o),(i&&!o.tState||!i&&!o.state)&&(o.pure?u.push(o):a.push(o),o.observers&&v(o)),i||(o.state=b)}if(u.length>1e6)throw u=[],new Error},!1),t}function O(e){if(!e.fn)return;U(e);const t=c,n=g,i=B;g=c=e,X(e,e.value,i),g=n,c=t}function X(e,t,n){let i;try{i=e.fn(t)}catch(s){G(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?L(e,i):e.value=i,e.updatedAt=n)}function Z(e,t,n,i=b,s){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:c,context:null,pure:n};return c===null||c!==q&&(c.owned?c.owned.push(o):c.owned=[o]),o}function R(e){const t=S;if(e.state===0||t)return;if(e.state===A||t)return H(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===b||t)O(e);else if(e.state===A||t){const s=u;u=null,H(e,n[0]),u=s}}function I(e,t){if(u)return e();let n=!1;t||(u=[]),a?n=!0:a=[],B++;try{const i=e();return k(n),i}catch(i){G(i)}finally{u=null,n||(a=null)}}function k(e){u&&(W(u),u=null),!e&&(a.length?K(()=>{j(a),a=null}):a=null)}function W(e){for(let t=0;t<e.length;t++)R(e[t])}function H(e,t){const n=S;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===b||n?s!==t&&R(s):(s.state===A||n)&&H(s,t))}}function v(e){const t=S;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=A,i.pure?u.push(i):a.push(i),i.observers&&v(i))}}function U(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();i<s.length&&(o.sourceSlots[l]=i,s[i]=o,n.observerSlots[i]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)U(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function G(e){throw e}let M=!1;function z(){M=!0}function ee(e,t){if(M&&r.context){const n=r.context;_(V());const i=m(()=>e(t||{}));return _(n),i}return m(()=>e(t||{}))}function te(e,t,n){let i=n.length,s=t.length,o=i,l=0,f=0,d=t[s-1].nextSibling,p=null;for(;l<s||f<o;){if(t[l]===n[f]){l++,f++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const h=o<i?f?n[f-1].nextSibling:n[o-f]:d;for(;f<o;)e.insertBefore(n[f++],h)}else if(o===f)for(;l<s;)(!p||!p.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[f]===t[s-1]){const h=t[--s].nextSibling;e.insertBefore(n[f++],t[l++].nextSibling),e.insertBefore(n[--o],h),t[s]=n[o]}else{if(!p){p=new Map;let w=f;for(;w<o;)p.set(n[w],w++)}const h=p.get(t[l]);if(h!=null)if(f<h&&h<o){let w=l,N=1,Y;for(;++w<s&&w<o&&!((Y=p.get(t[w]))==null||Y!==h+N);)N++;if(N>h-f){const Q=t[l];for(;f<h;)e.insertBefore(n[f++],Q)}else e.replaceChild(n[f++],t[l++])}else l++;else t[l++].remove()}}}function F(e,t,n){let i;return J(s=>{i=s,t===document?e():ne(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function ne(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return C(e,t,i,n);E(s=>C(e,t(),s,n),i)}function ie(e,t,n={}){r.completed=globalThis._$HY.completed,r.events=globalThis._$HY.events,r.load=globalThis._$HY.load,r.gather=s=>P(t,s),r.registry=new Map,r.context={id:n.renderId||"",count:0},P(t,n.renderId);const i=F(e,t,[...t.childNodes]);return r.context=null,i}function C(e,t,n,i,s){for(r.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(r.context)return n;if(o==="number"&&(t=t.toString()),l){let f=n[0];f&&f.nodeType===3?f.data=t:f=document.createTextNode(t),n=y(e,n,i,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(r.context)return n;n=y(e,n,i)}else{if(o==="function")return E(()=>{let f=t();for(;typeof f=="function";)f=f();n=C(e,f,n,i)}),()=>n;if(Array.isArray(t)){const f=[];if($(f,t,s))return E(()=>n=C(e,f,n,i,!0)),()=>n;if(r.context){for(let d=0;d<f.length;d++)if(f[d].parentNode)return n=f}if(f.length===0){if(n=y(e,n,i),l)return n}else Array.isArray(n)?n.length===0?D(e,f,i):te(e,n,f):(n&&y(e),D(e,f));n=f}else if(t instanceof Node){if(r.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=y(e,n,i,t);y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function $(e,t,n){let i=!1;for(let s=0,o=t.length;s<o;s++){let l=t[s],f;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=$(e,l)||i;else if((f=typeof l)=="string")e.push(document.createTextNode(l));else if(f==="function")if(n){for(;typeof l=="function";)l=l();i=$(e,Array.isArray(l)?l:[l])||i}else e.push(l),i=!0;else e.push(document.createTextNode(l.toString()))}return i}function D(e,t,n){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function y(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const f=t[l];if(s!==f){const d=f.parentNode===e;!o&&!l?d?e.replaceChild(s,f):e.insertBefore(s,n):d&&f.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}function P(e,t){const n=e.querySelectorAll("*[data-hk]");for(let i=0;i<n.length;i++){const s=n[i],o=s.getAttribute("data-hk");(!t||o.startsWith(t))&&!r.registry.has(o)&&r.registry.set(o,s)}}const se=(...e)=>(z(),ie(...e));var le=e=>(t,n,i,{client:s})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!e.hasAttribute("ssr"))return;const o=s==="only"?F:se;let l;o(()=>ee(t,{...n,get children(){return i!=null&&(r.context&&(l=e.querySelector("astro-fragment")),l==null&&(l=document.createElement("astro-fragment"),l.innerHTML=i)),l}}),e)};export{le as default};