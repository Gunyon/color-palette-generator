(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function X(){}function L0(e){return e()}function d0(){return Object.create(null)}function H(e){e.forEach(L0)}function F0(e){return typeof e=="function"}function U0(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function x0(e){return Object.keys(e).length===0}function F(e,t){e.appendChild(t)}function r0(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function m0(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function o0(e){return document.createTextNode(e)}function U(){return o0(" ")}function V0(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function N(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y0(e){return Array.from(e.childNodes)}function P0(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let c0;function W(e){c0=e}const j=[],p0=[];let x=[];const b0=[],J0=Promise.resolve();let n0=!1;function W0(){n0||(n0=!0,J0.then(O0))}function e0(e){x.push(e)}const t0=new Set;let G=0;function O0(){if(G!==0)return;const e=c0;do{try{for(;G<j.length;){const t=j[G];G++,W(t),X0(t.$$)}}catch(t){throw j.length=0,G=0,t}for(W(null),j.length=0,G=0;p0.length;)p0.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];t0.has(n)||(t0.add(n),n())}x.length=0}while(j.length);for(;b0.length;)b0.pop()();n0=!1,t0.clear(),W(e)}function X0(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(e0)}}function Z0(e){const t=[],n=[];x.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),x=t}const K0=new Set;function Q0(e,t){e&&e.i&&(K0.delete(e),e.i(t))}function S0(e,t,n,s){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),s||e0(()=>{const c=e.$$.on_mount.map(L0).filter(F0);e.$$.on_destroy?e.$$.on_destroy.push(...c):H(c),e.$$.on_mount=[]}),o.forEach(e0)}function H0(e,t){const n=e.$$;n.fragment!==null&&(Z0(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function v0(e,t){e.$$.dirty[0]===-1&&(j.push(e),W0(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function tt(e,t,n,s,r,o,c,u=[-1]){const l=c0;W(e);const a=e.$$={fragment:null,ctx:[],props:o,update:X,not_equal:r,bound:d0(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:d0(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};c&&c(a.root);let f=!1;if(a.ctx=n?n(e,t.props||{},(m,p,...I)=>{const M=I.length?I[0]:p;return a.ctx&&r(a.ctx[m],a.ctx[m]=M)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](M),f&&v0(e,m)),p}):[],a.update(),f=!0,H(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const m=Y0(t.target);a.fragment&&a.fragment.l(m),m.forEach(v)}else a.fragment&&a.fragment.c();t.intro&&Q0(e.$$.fragment),S0(e,t.target,t.anchor,t.customElement),O0()}W(l)}class nt{$destroy(){H0(this,1),this.$destroy=X}$on(t,n){if(!F0(n))return X;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!x0(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return e<0?-1:e===0?0:1}function M0(e,t,n){return(1-n)*e+n*t}function et(e,t,n){return n<e?e:n>t?t:n}function st(e){return e=e%360,e<0&&(e=e+360),e}function s0(e,t){const n=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],s=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],r=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[n,s,r]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],ot=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],ct=[95.047,100,108.883];function a0(e,t,n){return(255<<24|(e&255)<<16|(t&255)<<8|n&255)>>>0}function g0(e){const t=q(e[0]),n=q(e[1]),s=q(e[2]);return a0(t,n,s)}function D0(e){return e>>16&255}function T0(e){return e>>8&255}function B0(e){return e&255}function at(e,t,n){const s=ot,r=s[0][0]*e+s[0][1]*t+s[0][2]*n,o=s[1][0]*e+s[1][1]*t+s[1][2]*n,c=s[2][0]*e+s[2][1]*t+s[2][2]*n,u=q(r),l=q(o),a=q(c);return a0(u,l,a)}function lt(e){const t=V(D0(e)),n=V(T0(e)),s=V(B0(e));return s0([t,n,s],rt)}function it(e){const t=Q(e),n=q(t);return a0(n,n,n)}function I0(e){const t=lt(e)[1];return 116*ft(t/100)-16}function Q(e){return 100*ht((e+16)/116)}function V(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function q(e){const t=e/100;let n=0;return t<=.0031308?n=t*12.92:n=1.055*Math.pow(t,1/2.4)-.055,et(0,255,Math.round(n*255))}function ut(){return ct}function ft(e){const t=.008856451679035631,n=24389/27;return e>t?Math.pow(e,1/3):(n*e+16)/116}function ht(e){const t=.008856451679035631,n=24389/27,s=e*e*e;return s>t?s:(116*e-16)/n}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static make(t=ut(),n=200/Math.PI*Q(50)/100,s=50,r=2,o=!1){const c=t,u=c[0]*.401288+c[1]*.650173+c[2]*-.051461,l=c[0]*-.250268+c[1]*1.204414+c[2]*.045854,a=c[0]*-.002079+c[1]*.048952+c[2]*.953127,f=.8+r/10,m=f>=.9?M0(.59,.69,(f-.9)*10):M0(.525,.59,(f-.8)*10);let p=o?1:f*(1-1/3.6*Math.exp((-n-42)/92));p=p>1?1:p<0?0:p;const I=f,M=[p*(100/u)+1-p,p*(100/l)+1-p,p*(100/a)+1-p],b=1/(5*n+1),A=b*b*b*b,g=1-A,d=A*n+.1*g*g*Math.cbrt(5*n),_=Q(s)/t[1],h=1.48+Math.sqrt(_),y=.725/Math.pow(_,.2),D=y,R=[Math.pow(d*M[0]*u/100,.42),Math.pow(d*M[1]*l/100,.42),Math.pow(d*M[2]*a/100,.42)],P=[400*R[0]/(R[0]+27.13),400*R[1]/(R[1]+27.13),400*R[2]/(R[2]+27.13)],O=(2*P[0]+P[1]+.05*P[2])*y;return new E(_,O,y,D,m,I,M,d,Math.pow(d,.25),h)}constructor(t,n,s,r,o,c,u,l,a,f){this.n=t,this.aw=n,this.nbb=s,this.ncb=r,this.c=o,this.nc=c,this.rgbD=u,this.fl=l,this.fLRoot=a,this.z=f}}E.DEFAULT=E.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n,s,r,o,c,u,l,a){this.hue=t,this.chroma=n,this.j=s,this.q=r,this.m=o,this.s=c,this.jstar=u,this.astar=l,this.bstar=a}distance(t){const n=this.jstar-t.jstar,s=this.astar-t.astar,r=this.bstar-t.bstar,o=Math.sqrt(n*n+s*s+r*r);return 1.41*Math.pow(o,.63)}static fromInt(t){return B.fromIntInViewingConditions(t,E.DEFAULT)}static fromIntInViewingConditions(t,n){const s=(t&16711680)>>16,r=(t&65280)>>8,o=t&255,c=V(s),u=V(r),l=V(o),a=.41233895*c+.35762064*u+.18051042*l,f=.2126*c+.7152*u+.0722*l,m=.01932141*c+.11916382*u+.95034478*l,p=.401288*a+.650173*f-.051461*m,I=-.250268*a+1.204414*f+.045854*m,M=-.002079*a+.048952*f+.953127*m,b=n.rgbD[0]*p,A=n.rgbD[1]*I,g=n.rgbD[2]*M,d=Math.pow(n.fl*Math.abs(b)/100,.42),_=Math.pow(n.fl*Math.abs(A)/100,.42),h=Math.pow(n.fl*Math.abs(g)/100,.42),y=C(b)*400*d/(d+27.13),D=C(A)*400*_/(_+27.13),R=C(g)*400*h/(h+27.13),P=(11*y+-12*D+R)/11,O=(y+D-2*R)/9,L=(20*y+20*D+21*R)/20,Y=(40*y+20*D+R)/20,k=Math.atan2(O,P)*180/Math.PI,T=k<0?k+360:k>=360?k-360:k,l0=T*Math.PI/180,w0=Y*n.nbb,J=100*Math.pow(w0/n.aw,n.c*n.z),E0=4/n.c*Math.sqrt(J/100)*(n.aw+4)*n.fLRoot,k0=T<20.14?T+360:T,C0=.25*(Math.cos(k0*Math.PI/180+2)+3.8),z0=5e4/13*C0*n.nc*n.ncb*Math.sqrt(P*P+O*O)/(L+.305),i0=Math.pow(z0,.9)*Math.pow(1.64-Math.pow(.29,n.n),.73),u0=i0*Math.sqrt(J/100),f0=u0*n.fLRoot,N0=50*Math.sqrt(i0*n.c/(n.aw+4)),q0=(1+100*.007)*J/(1+.007*J),h0=1/.0228*Math.log(1+.0228*f0),G0=h0*Math.cos(l0),j0=h0*Math.sin(l0);return new B(T,u0,J,E0,f0,N0,q0,G0,j0)}static fromJch(t,n,s){return B.fromJchInViewingConditions(t,n,s,E.DEFAULT)}static fromJchInViewingConditions(t,n,s,r){const o=4/r.c*Math.sqrt(t/100)*(r.aw+4)*r.fLRoot,c=n*r.fLRoot,u=n/Math.sqrt(t/100),l=50*Math.sqrt(u*r.c/(r.aw+4)),a=s*Math.PI/180,f=(1+100*.007)*t/(1+.007*t),m=1/.0228*Math.log(1+.0228*c),p=m*Math.cos(a),I=m*Math.sin(a);return new B(s,n,t,o,c,l,f,p,I)}static fromUcs(t,n,s){return B.fromUcsInViewingConditions(t,n,s,E.DEFAULT)}static fromUcsInViewingConditions(t,n,s,r){const o=n,c=s,u=Math.sqrt(o*o+c*c),a=(Math.exp(u*.0228)-1)/.0228/r.fLRoot;let f=Math.atan2(c,o)*(180/Math.PI);f<0&&(f+=360);const m=t/(1-(t-100)*.007);return B.fromJchInViewingConditions(m,a,f,r)}toInt(){return this.viewed(E.DEFAULT)}viewed(t){const n=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),s=Math.pow(n/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),r=this.hue*Math.PI/180,o=.25*(Math.cos(r+2)+3.8),c=t.aw*Math.pow(this.j/100,1/t.c/t.z),u=o*(5e4/13)*t.nc*t.ncb,l=c/t.nbb,a=Math.sin(r),f=Math.cos(r),m=23*(l+.305)*s/(23*u+11*s*f+108*s*a),p=m*f,I=m*a,M=(460*l+451*p+288*I)/1403,b=(460*l-891*p-261*I)/1403,A=(460*l-220*p-6300*I)/1403,g=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),d=C(M)*(100/t.fl)*Math.pow(g,1/.42),_=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),h=C(b)*(100/t.fl)*Math.pow(_,1/.42),y=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),D=C(A)*(100/t.fl)*Math.pow(y,1/.42),R=d/t.rgbD[0],P=h/t.rgbD[1],O=D/t.rgbD[2],L=1.86206786*R-1.01125463*P+.14918677*O,Y=.38752654*R+.62144744*P-.00897398*O,K=-.0158415*R-.03412294*P+1.04996444*O;return at(L,Y,K)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const n=t/100;let s=0;return n<=.0031308?s=n*12.92:s=1.055*Math.pow(n,1/2.4)-.055,s*255}static chromaticAdaptation(t){const n=Math.pow(Math.abs(t),.42);return C(t)*400*n/(n+27.13)}static hueOf(t){const n=s0(t,i.SCALED_DISCOUNT_FROM_LINRGB),s=i.chromaticAdaptation(n[0]),r=i.chromaticAdaptation(n[1]),o=i.chromaticAdaptation(n[2]),c=(11*s+-12*r+o)/11,u=(s+r-2*o)/9;return Math.atan2(u,c)}static areInCyclicOrder(t,n,s){const r=i.sanitizeRadians(n-t),o=i.sanitizeRadians(s-t);return r<o}static intercept(t,n,s){return(n-t)/(s-t)}static lerpPoint(t,n,s){return[t[0]+(s[0]-t[0])*n,t[1]+(s[1]-t[1])*n,t[2]+(s[2]-t[2])*n]}static setCoordinate(t,n,s,r){const o=i.intercept(t[r],n,s[r]);return i.lerpPoint(t,o,s)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,n){const s=i.Y_FROM_LINRGB[0],r=i.Y_FROM_LINRGB[1],o=i.Y_FROM_LINRGB[2],c=n%4<=1?0:100,u=n%2===0?0:100;if(n<4){const l=c,a=u,f=(t-l*r-a*o)/s;return i.isBounded(f)?[f,l,a]:[-1,-1,-1]}else if(n<8){const l=c,a=u,f=(t-a*s-l*o)/r;return i.isBounded(f)?[a,f,l]:[-1,-1,-1]}else{const l=c,a=u,f=(t-l*s-a*r)/o;return i.isBounded(f)?[l,a,f]:[-1,-1,-1]}}static bisectToSegment(t,n){let s=[-1,-1,-1],r=s,o=0,c=0,u=!1,l=!0;for(let a=0;a<12;a++){const f=i.nthVertex(t,a);if(f[0]<0)continue;const m=i.hueOf(f);if(!u){s=f,r=f,o=m,c=m,u=!0;continue}(l||i.areInCyclicOrder(o,m,c))&&(l=!1,i.areInCyclicOrder(o,n,m)?(r=f,c=m):(s=f,o=m))}return[s,r]}static midpoint(t,n){return[(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,n){const s=i.bisectToSegment(t,n);let r=s[0],o=i.hueOf(r),c=s[1];for(let u=0;u<3;u++)if(r[u]!==c[u]){let l=-1,a=255;r[u]<c[u]?(l=i.criticalPlaneBelow(i.trueDelinearized(r[u])),a=i.criticalPlaneAbove(i.trueDelinearized(c[u]))):(l=i.criticalPlaneAbove(i.trueDelinearized(r[u])),a=i.criticalPlaneBelow(i.trueDelinearized(c[u])));for(let f=0;f<8&&!(Math.abs(a-l)<=1);f++){const m=Math.floor((l+a)/2),p=i.CRITICAL_PLANES[m],I=i.setCoordinate(r,p,c,u),M=i.hueOf(I);i.areInCyclicOrder(o,n,M)?(c=I,a=m):(r=I,o=M,l=m)}}return i.midpoint(r,c)}static inverseChromaticAdaptation(t){const n=Math.abs(t),s=Math.max(0,27.13*n/(400-n));return C(t)*Math.pow(s,1/.42)}static findResultByJ(t,n,s){let r=Math.sqrt(s)*11;const o=E.DEFAULT,c=1/Math.pow(1.64-Math.pow(.29,o.n),.73),l=.25*(Math.cos(t+2)+3.8)*(5e4/13)*o.nc*o.ncb,a=Math.sin(t),f=Math.cos(t);for(let m=0;m<5;m++){const p=r/100,I=n===0||r===0?0:n/Math.sqrt(p),M=Math.pow(I*c,1/.9),A=o.aw*Math.pow(p,1/o.c/o.z)/o.nbb,g=23*(A+.305)*M/(23*l+11*M*f+108*M*a),d=g*f,_=g*a,h=(460*A+451*d+288*_)/1403,y=(460*A-891*d-261*_)/1403,D=(460*A-220*d-6300*_)/1403,R=i.inverseChromaticAdaptation(h),P=i.inverseChromaticAdaptation(y),O=i.inverseChromaticAdaptation(D),L=s0([R,P,O],i.LINRGB_FROM_SCALED_DISCOUNT);if(L[0]<0||L[1]<0||L[2]<0)return 0;const Y=i.Y_FROM_LINRGB[0],K=i.Y_FROM_LINRGB[1],k=i.Y_FROM_LINRGB[2],T=Y*L[0]+K*L[1]+k*L[2];if(T<=0)return 0;if(m===4||Math.abs(T-s)<.002)return L[0]>100.01||L[1]>100.01||L[2]>100.01?0:g0(L);r=r-(T-s)*r/(2*T)}return 0}static solveToInt(t,n,s){if(n<1e-4||s<1e-4||s>99.9999)return it(s);t=st(t);const r=t/180*Math.PI,o=Q(s),c=i.findResultByJ(r,n,o);if(c!==0)return c;const u=i.bisectToLimit(o,r);return g0(u)}static solveToCam(t,n,s){return B.fromInt(i.solveToInt(t,n,s))}}i.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];i.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];i.Y_FROM_LINRGB=[.2126,.7152,.0722];i.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static from(t,n,s){return new Z(i.solveToInt(t,n,s))}static fromInt(t){return new Z(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(i.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(i.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(i.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const n=B.fromInt(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=I0(t),this.argb=t}setInternalState(t){const n=B.fromInt(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=I0(t),this.argb=t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static fromInt(t){const n=Z.fromInt(t);return S.fromHueAndChroma(n.hue,n.chroma)}static fromHueAndChroma(t,n){return new S(t,n)}constructor(t,n){this.hue=t,this.chroma=n,this.cache=new Map}tone(t){let n=this.cache.get(t);return n===void 0&&(n=Z.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,n)),n}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e){const t=D0(e),n=T0(e),s=B0(e),r=[t.toString(16),n.toString(16),s.toString(16)];for(const[o,c]of r.entries())c.length===1&&(r[o]="0"+c);return"#"+r.join("")}function mt(e){e=e.replace("#","");const t=e.length===3,n=e.length===6,s=e.length===8;if(!t&&!n&&!s)throw new Error("unexpected hex "+e);let r=0,o=0,c=0;return t?(r=$(e.slice(0,1).repeat(2)),o=$(e.slice(1,2).repeat(2)),c=$(e.slice(2,3).repeat(2))):n?(r=$(e.slice(0,2)),o=$(e.slice(2,4)),c=$(e.slice(4,6))):s&&(r=$(e.slice(2,4)),o=$(e.slice(4,6)),c=$(e.slice(6,8))),(255<<24|(r&255)<<16|(o&255)<<8|c&255)>>>0}function $(e){return parseInt(e,16)}function A0(e,t,n){const s=e.slice();return s[4]=t[n],s}function _0(e,t,n){const s=e.slice();return s[4]=t[n],s}function y0(e){let t,n=e[4].color+"",s,r;return{c(){t=w("div"),s=o0(n),r=U(),N(t,"class","color-item svelte-1da46hh"),z(t,"background-color",e[4].color),z(t,"color",e[4].contrast)},m(o,c){r0(o,t,c),F(t,s),F(t,r)},p(o,c){c&1&&n!==(n=o[4].color+"")&&P0(s,n),c&1&&z(t,"background-color",o[4].color),c&1&&z(t,"color",o[4].contrast)},d(o){o&&v(t)}}}function R0(e){let t,n=e[4].color+"",s,r;return{c(){t=w("div"),s=o0(n),r=U(),N(t,"class","color-item svelte-1da46hh"),z(t,"background-color",e[4].color),z(t,"color",e[4].contrast)},m(o,c){r0(o,t,c),F(t,s),F(t,r)},p(o,c){c&2&&n!==(n=o[4].color+"")&&P0(s,n),c&2&&z(t,"background-color",o[4].color),c&2&&z(t,"color",o[4].contrast)},d(o){o&&v(t)}}}function pt(e){let t,n,s,r,o,c,u,l,a,f,m,p,I,M=e[0],b=[];for(let d=0;d<M.length;d+=1)b[d]=y0(_0(e,M,d));let A=e[1],g=[];for(let d=0;d<A.length;d+=1)g[d]=R0(A0(e,A,d));return{c(){t=w("main"),n=w("input"),s=U(),r=w("div"),o=w("div"),c=w("h2"),c.textContent="Material palette",u=U();for(let d=0;d<b.length;d+=1)b[d].c();l=U(),a=w("div"),f=w("h2"),f.textContent="Chroma palette",m=U();for(let d=0;d<g.length;d+=1)g[d].c();N(n,"type","color"),N(o,"class","col"),N(a,"class","col"),N(r,"class","row svelte-1da46hh"),N(t,"class","svelte-1da46hh")},m(d,_){r0(d,t,_),F(t,n),F(t,s),F(t,r),F(r,o),F(o,c),F(o,u);for(let h=0;h<b.length;h+=1)b[h]&&b[h].m(o,null);F(r,l),F(r,a),F(a,f),F(a,m);for(let h=0;h<g.length;h+=1)g[h]&&g[h].m(a,null);p||(I=V0(n,"change",e[2]),p=!0)},p(d,[_]){if(_&1){M=d[0];let h;for(h=0;h<M.length;h+=1){const y=_0(d,M,h);b[h]?b[h].p(y,_):(b[h]=y0(y),b[h].c(),b[h].m(o,null))}for(;h<b.length;h+=1)b[h].d(1);b.length=M.length}if(_&2){A=d[1];let h;for(h=0;h<A.length;h+=1){const y=A0(d,A,h);g[h]?g[h].p(y,_):(g[h]=R0(y),g[h].c(),g[h].m(a,null))}for(;h<g.length;h+=1)g[h].d(1);g.length=A.length}},i:X,o:X,d(d){d&&v(t),m0(b,d),m0(g,d),p=!1,I()}}}function bt(e){const t=chroma.scale([chroma(e).darken(2),e,"#fff"]).mode("lch").colors(10);return $0(t.reverse())}function $0(e){return e.map(t=>{const n=Mt(t);return{color:t,contrast:n}})}function Mt(e){return chroma.contrast(e,"#fff")>chroma.contrast(e,"#000")?"#fff":"#000"}function gt(e,t,n){let s=[],r=[];const o=u=>{const l=u.target.value;n(0,s=c(l)),n(1,r=bt(l))};function c(u){const l=mt(u),a=[];return[95,90,80,70,60,50,40,35,30,25,20].forEach(m=>{const p=S.fromInt(l).tone(m),I=dt(p);a.push(I)}),$0(a)}return[s,r,o]}class It extends nt{constructor(t){super(),tt(this,t,gt,pt,U0,{})}}new It({target:document.getElementById("app")});
