import{a as zt,b as gt,c as se,d as le,e as mt,f as At,g as ce,h as jt,i as de,j as ue,k as Rt,l as pe,m as $t,n as be,o as he,p as ge,q as me,r as fe,s as at,t as B,v as Ht,w as lt,x as ft,y as I,z as ye}from"./chunk-4ZDWINYQ.js";import{a as ae}from"./chunk-LWEHUNEE.js";import{a as kt,b as ie,c as bt,d as Tt,e as ht,f as q,g as Y,h as re}from"./chunk-JL2IIGXE.js";import{$ as Zt,$a as Jt,Aa as Bt,Ab as N,Bb as nt,Cb as D,Db as z,Eb as Nt,Ga as y,Ha as H,Ia as it,Ib as ne,Ja as v,Jb as U,Ka as d,Lb as oe,M,Ma as ut,N as $,Na as wt,R as m,Rb as _,Sb as It,Ua as E,W as J,X as tt,Y as T,Za as Yt,_a as Xt,a as R,aa as xt,ab as s,bb as b,cb as h,db as x,eb as Ot,fb as Lt,gb as W,ha as vt,hb as G,ia as p,ib as Z,ja as dt,jb as rt,kb as pt,lb as te,mb as et,na as St,ob as u,pb as K,qb as Q,rb as F,sb as Vt,ta as Dt,tb as S,ub as w,va as l,xb as ee,za as Kt,zb as g}from"./chunk-P57UFNMI.js";function yt(...e){if(e){let a=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")a.push(n);else if(o==="object"){let i=Array.isArray(n)?[yt(...n)]:Object.entries(n).map(([r,c])=>c?r:void 0);a=i.length?a.concat(i.filter(r=>!!r)):a}}return a.join(" ").trim()}}var Et={};function ct(e="pui_id_"){return Object.hasOwn(Et,e)||(Et[e]=0),Et[e]++,`${e}${Et[e]}`}var ve=(()=>{class e extends I{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),O=(()=>{class e{document=m(xt);platformId=m(St);el=m(dt);injector=m(Zt);cd=m(oe);renderer=m(Kt);config=m(ye);baseComponentStyle=m(ve);baseStyle=m(I);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=ct("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return ge(t,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!re(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>Ht.off("theme:change",t))}_loadStyles(){let t=()=>{ft.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),ft.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!ft.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),ft.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!lt.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,R({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,R({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,R({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(R({name:"global-style"},this.styleOptions),i),lt.setLoadedStyleName("common")}if(!lt.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,R({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(R({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),lt.setLoadedStyleName(this.componentStyle?.name)}if(!lt.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,R({name:"layer-order",first:!0},this.styleOptions)),lt.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,R({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){ft.clearLoadedStyleNames(),Ht.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n={}){return yt(this._getOptionValue(this.$style?.classes,t,R({instance:this},n)))}sx(t="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,t,R({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=yt;static \u0275fac=function(n){return new(n||e)};static \u0275dir=it({type:e,inputs:{dt:"dt"},features:[D([ve,I]),vt]})}return e})();var _e=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let i=0;i<o.length;i++)t.classList.add(o[i])}else{let o=n.split(" ");for(let i=0;i<o.length;i++)t.className+=" "+o[i]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var i=0;i<n.length;i++){if(n[i]==t)return o;n[i].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],i=0;for(var r=0;r<o.length;r++){if(o[r]==t)return i;o[r].attributes&&o[r].attributes[n]&&o[r].nodeType==1&&i++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",i=!0){t&&n&&(i&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let i=st=>{if(st)return getComputedStyle(st).getPropertyValue("position")==="relative"?st:i(st.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),c=n.offsetHeight,f=n.getBoundingClientRect(),V=this.getWindowScrollTop(),C=this.getWindowScrollLeft(),k=this.getViewport(),P=i(t)?.getBoundingClientRect()||{top:-1*V,left:-1*C},j,ot,Ct="top";f.top+c+r.height>k.height?(j=f.top-P.top-r.height,Ct="bottom",f.top+j<0&&(j=-1*f.top)):(j=c+f.top-P.top,Ct="top");let Gt=f.left+r.width-k.width,Ze=f.left-P.left;if(r.width>k.width?ot=(f.left-P.left)*-1:Gt>0?ot=Ze-Gt:ot=f.left-P.left,t.style.top=j+"px",t.style.left=ot+"px",t.style.transformOrigin=Ct,o){let st=se(/-anchor-gutter$/)?.value;t.style.marginTop=Ct==="bottom"?`calc(${st??"2px"} * -1)`:st??""}}static absolutePosition(t,n,o=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,c=i.width,f=n.offsetHeight,V=n.offsetWidth,C=n.getBoundingClientRect(),k=this.getWindowScrollTop(),A=this.getWindowScrollLeft(),P=this.getViewport(),j,ot;C.top+f+r>P.height?(j=C.top+k-r,t.style.transformOrigin="bottom",j<0&&(j=k)):(j=f+C.top+k,t.style.transformOrigin="top"),C.left+c>P.width?ot=Math.max(0,C.left+A+V-c):ot=C.left+A,t.style.top=j+"px",t.style.left=ot+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),i=/(auto|scroll)/,r=c=>{let f=window.getComputedStyle(c,null);return i.test(f.getPropertyValue("overflow"))||i.test(f.getPropertyValue("overflowX"))||i.test(f.getPropertyValue("overflowY"))};for(let c of o){let f=c.nodeType===1&&c.dataset.scrollselectors;if(f){let V=f.split(",");for(let C of V){let k=this.findSingle(c,C);k&&r(k)&&n.push(k)}}c.nodeType!==9&&r(c)&&n.push(c)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),c=r?parseFloat(r):0,f=t.getBoundingClientRect(),C=n.getBoundingClientRect().top+document.body.scrollTop-(f.top+document.body.scrollTop)-i-c,k=t.scrollTop,A=t.clientHeight,P=this.getOuterHeight(n);C<0?t.scrollTop=k+C:C+P>A&&(t.scrollTop=k+C-A+P)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,i=0,r=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(t,n){var o=1,i=50,r=n,c=i/r;let f=setInterval(()=>{o=o-c,o<=0&&(o=0,clearInterval(f)),t.style.opacity=o},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return i.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,i=n.getElementsByTagName("body")[0],r=t.innerWidth||o.clientWidth||i.clientWidth,c=t.innerHeight||o.clientHeight||i.clientHeight;return{width:r,height:c}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var i=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),i=[];for(let r of o){let c=getComputedStyle(r);this.isVisible(r)&&c.display!="none"&&c.visibility!="hidden"&&i.push(r)}return i}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),i=0;if(o&&o.length>0){let r=o.indexOf(o[0].ownerDocument.activeElement);n?r==-1||r===0?i=o.length-1:i=r-1:r!=-1&&r!==o.length-1&&(i=r+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(c=>!!(c&&c.constructor&&c.call&&c.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let i=document.createElement(t);return this.setAttributes(i,n),i.append(...o),i}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(i,r)=>{let c=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((f,V)=>{if(V!=null){let C=typeof V;if(C==="string"||C==="number")f.push(V);else if(C==="object"){let k=Array.isArray(V)?o(i,V):Object.entries(V).map(([A,P])=>i==="style"&&(P||P===0)?`${A.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${P}`:P?A:void 0);f=k.length?f.concat(k.filter(A=>!!A)):f}}return f},c)};Object.entries(n).forEach(([i,r])=>{if(r!=null){let c=i.match(/^on(.+)/);c?t.addEventListener(c[1].toLowerCase(),r):i==="pBind"?this.setAttributes(t,r):(r=i==="class"?[...new Set(o("class",r))].join(" ").trim():i==="style"?o("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var Ce=(()=>{class e extends O{autofocus=!1;focused=!1;platformId=m(St);document=m(xt);host=m(dt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Y(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=_e.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275dir=it({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[v]})}return e})();var xe=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Ke=`
    ${xe}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Ye={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":he(e.value())&&String(e.value()).length===1,"p-badge-dot":be(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},Se=(()=>{class e extends I{name="badge";theme=Ke;classes=Ye;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Wt=(()=>{class e extends O{styleClass=U();badgeSize=U();size=U();severity=U();value=U();badgeDisabled=U(!1,{transform:_});_componentStyle=m(Se);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(g(o.cn(o.cx("root"),o.styleClass())),ee("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[D([Se]),v],decls:1,vars:1,template:function(n,o){n&1&&N(0),n&2&&nt(o.value())},dependencies:[q,B],encapsulation:2,changeDetection:0})}return e})(),we=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=$({imports:[Wt,B,B]})}return e})();var Ie=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Je=["*"],tn={root:"p-fluid"},ke=(()=>{class e extends I{name="fluid";classes=tn;theme=Ie;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Te=(()=>{class e extends O{_componentStyle=m(ke);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&g(o.cx("root"))},features:[D([ke]),v],ngContentSelectors:Je,decls:1,vars:0,template:function(n,o){n&1&&(K(),Q(0))},dependencies:[q],encapsulation:2,changeDetection:0})}return e})();var en=["*"],nn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ee=(()=>{class e extends I{name="baseicon";css=nn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var X=(()=>{class e extends O{spin=!1;_componentStyle=m(Ee);getClassNames(){return yt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&g(o.getClassNames())},inputs:{spin:[2,"spin","spin",_]},features:[D([Ee]),v],ngContentSelectors:en,decls:1,vars:0,template:function(n,o){n&1&&(K(),Q(0))},encapsulation:2,changeDetection:0})}return e})();var on=["data-p-icon","chevron-down"],Fe=(()=>{class e extends X{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["","data-p-icon","chevron-down"]],features:[v],attrs:on,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,o){n&1&&(T(),W(0,"path",0))},encapsulation:2})}return e})();var rn=["data-p-icon","chevron-left"],Pe=(()=>{class e extends X{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["","data-p-icon","chevron-left"]],features:[v],attrs:rn,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(n,o){n&1&&(T(),W(0,"path",0))},encapsulation:2})}return e})();var an=["data-p-icon","chevron-right"],Me=(()=>{class e extends X{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["","data-p-icon","chevron-right"]],features:[v],attrs:an,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,o){n&1&&(T(),W(0,"path",0))},encapsulation:2})}return e})();var sn=["data-p-icon","chevron-up"],De=(()=>{class e extends X{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["","data-p-icon","chevron-up"]],features:[v],attrs:sn,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(n,o){n&1&&(T(),W(0,"path",0))},encapsulation:2})}return e})();var ln=["data-p-icon","spinner"],Be=(()=>{class e extends X{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+ct()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["","data-p-icon","spinner"]],features:[v],attrs:ln,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(T(),Ot(0,"g"),W(1,"path",0),Lt(),Ot(2,"defs")(3,"clipPath",1),W(4,"rect",2),Lt()()),n&2&&(E("clip-path",o.pathId),l(3),te("id",o.pathId))},encapsulation:2})}return e})();var Oe=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var cn=`
    ${Oe}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,dn={root:"p-ink"},Le=(()=>{class e extends I{name="ripple";theme=cn;classes=dn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ve=(()=>{class e extends O{zone=m(wt);_componentStyle=m(Le);animationListener;mouseDownListener;timeout;constructor(){super(),ne(()=>{Y(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(gt(n,"p-ink-active"),!jt(n)&&!Rt(n)){let c=Math.max(le(this.el.nativeElement),ue(this.el.nativeElement));n.style.height=c+"px",n.style.width=c+"px"}let o=de(this.el.nativeElement),i=t.pageX-o.left+this.document.body.scrollTop-Rt(n)/2,r=t.pageY-o.top+this.document.body.scrollLeft-jt(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",i+"px"),zt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let c=this.getInk();c&&gt(c,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&gt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),gt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,pe(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=it({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[D([Le]),v]})}return e})();var Ne=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var un=["content"],pn=["loadingicon"],bn=["icon"],hn=["*"],je=e=>({class:e});function gn(e,a){e&1&&rt(0)}function mn(e,a){if(e&1&&x(0,"span"),e&2){let t=u(3);g(t.cx("loadingIcon")),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function fn(e,a){if(e&1&&(T(),x(0,"svg",7)),e&2){let t=u(3);g(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),s("spin",!0),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function yn(e,a){if(e&1&&(G(0),d(1,mn,1,4,"span",3)(2,fn,1,5,"svg",6),Z()),e&2){let t=u(2);l(),s("ngIf",t.loadingIcon),l(),s("ngIf",!t.loadingIcon)}}function vn(e,a){}function _n(e,a){if(e&1&&d(0,vn,0,0,"ng-template",8),e&2){let t=u(2);s("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Cn(e,a){if(e&1&&(G(0),d(1,yn,3,2,"ng-container",2)(2,_n,1,1,null,5),Z()),e&2){let t=u();l(),s("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),l(),s("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",z(3,je,t.cx("loadingIcon")))}}function xn(e,a){if(e&1&&x(0,"span"),e&2){let t=u(2);g(t.cx("icon")),E("data-pc-section","icon")}}function Sn(e,a){}function wn(e,a){if(e&1&&d(0,Sn,0,0,"ng-template",8),e&2){let t=u(2);s("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function In(e,a){if(e&1&&(G(0),d(1,xn,1,3,"span",3)(2,wn,1,1,null,5),Z()),e&2){let t=u();l(),s("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),l(),s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",z(3,je,t.cx("icon")))}}function kn(e,a){if(e&1&&(b(0,"span"),N(1),h()),e&2){let t=u();g(t.cx("label")),E("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),l(),nt(t.label)}}function Tn(e,a){if(e&1&&x(0,"p-badge",9),e&2){let t=u();s("value",t.badge)("severity",t.badgeSeverity)}}var En={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,a])=>!!a).reduce((a,[t])=>a+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},ze=(()=>{class e extends I{name="button";theme=Ne;classes=En;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var _t=(()=>{class e extends O{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=U(void 0,{transform:_});onClick=new ut;onFocus=new ut;onBlur=new ut;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=m(Te,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=m(ze);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-button"]],contentQueries:function(n,o,i){if(n&1&&(F(i,un,5),F(i,pn,5),F(i,bn,5),F(i,at,4)),n&2){let r;S(r=w())&&(o.contentTemplate=r.first),S(r=w())&&(o.loadingIconTemplate=r.first),S(r=w())&&(o.iconTemplate=r.first),S(r=w())&&(o.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",_],loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],severity:"severity",outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",It],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",_],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[D([ze]),v],ngContentSelectors:hn,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(K(),b(0,"button",0),et("click",function(r){return o.onClick.emit(r)})("focus",function(r){return o.onFocus.emit(r)})("blur",function(r){return o.onBlur.emit(r)}),Q(1),d(2,gn,1,0,"ng-container",1)(3,Cn,3,5,"ng-container",2)(4,In,3,5,"ng-container",2)(5,kn,2,5,"span",3)(6,Tn,1,2,"p-badge",4),h()),n&2&&(g(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),s("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),E("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),l(2),s("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),l(),s("ngIf",o.loading),l(),s("ngIf",!o.loading),l(),s("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),l(),s("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[q,bt,ht,Tt,Ve,Ce,Be,we,Wt,B],encapsulation:2,changeDetection:0})}return e})(),Ft=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=$({imports:[q,_t,B,B]})}return e})();var $e=`
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: row;
        gap: dt('carousel.content.gap');
    }

    .p-carousel-content:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-item-list {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-item-list:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-prev-button,
    .p-carousel-next-button {
        align-self: center;
        flex-shrink: 0;
    }

    .p-carousel-indicator-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: dt('carousel.indicator.list.padding');
        gap: dt('carousel.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-carousel-indicator-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('carousel.indicator.background');
        width: dt('carousel.indicator.width');
        height: dt('carousel.indicator.height');
        border: 0 none;
        transition:
            background dt('carousel.transition.duration'),
            color dt('carousel.transition.duration'),
            outline-color dt('carousel.transition.duration'),
            box-shadow dt('carousel.transition.duration');
        outline-color: transparent;
        border-radius: dt('carousel.indicator.border.radius');
        padding: 0;
        margin: 0;
        user-select: none;
        cursor: pointer;
    }

    .p-carousel-indicator-button:focus-visible {
        box-shadow: dt('carousel.indicator.focus.ring.shadow');
        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
        outline-offset: dt('carousel.indicator.focus.ring.offset');
    }

    .p-carousel-indicator-button:hover {
        background: dt('carousel.indicator.hover.background');
    }

    .p-carousel-indicator-active .p-carousel-indicator-button {
        background: dt('carousel.indicator.active.background');
    }

    .p-carousel-vertical .p-carousel-content {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-item-list {
        flex-direction: column;
        height: 100%;
    }

    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
`;var Fn=["item"],Pn=["header"],Mn=["footer"],Dn=["previousicon"],Bn=["nexticon"],On=["itemsContainer"],Ln=["indicatorContent"],Vn=[[["p-header"]],[["p-footer"]]],Nn=["p-header","p-footer"],zn=e=>({height:e}),Pt=e=>({index:e}),Qt=e=>({$implicit:e});function An(e,a){e&1&&rt(0)}function jn(e,a){if(e&1&&(b(0,"div"),Q(1),d(2,An,1,0,"ng-container",11),h()),e&2){let t=u();g(t.cx("header")),l(2),s("ngTemplateOutlet",t.headerTemplate)}}function Rn(e,a){e&1&&(T(),x(0,"svg",16))}function $n(e,a){e&1&&(T(),x(0,"svg",17))}function Hn(e,a){if(e&1&&(G(0),d(1,Rn,1,0,"svg",14)(2,$n,1,0,"svg",15),Z()),e&2){let t=u(3);l(),s("ngIf",!t.isVertical()),l(),s("ngIf",t.isVertical())}}function Wn(e,a){}function Qn(e,a){e&1&&d(0,Wn,0,0,"ng-template")}function Un(e,a){if(e&1&&(G(0),d(1,Qn,1,0,null,11),Z()),e&2){let t=u(3);l(),s("ngTemplateOutlet",t.previousIconTemplate||t._previousIconTemplate)}}function qn(e,a){if(e&1&&d(0,Hn,3,2,"ng-container",13)(1,Un,2,1,"ng-container",13),e&2){let t=u(2);s("ngIf",!t.previousIconTemplate&&!t._previousIconTemplate&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon)),l(),s("ngIf",(t.previousIconTemplate||t._previousIconTemplate)&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon))}}function Gn(e,a){if(e&1){let t=pt();b(0,"p-button",12),et("click",function(o){J(t);let i=u();return tt(i.navBackward(o))}),d(1,qn,2,2,"ng-template",null,1,Nt),h()}if(e&2){let t=u();g(t.cx("pcPrevButton")),s("text",!0)("buttonProps",t.prevButtonProps),E("aria-label",t.ariaPrevButtonLabel())}}function Zn(e,a){e&1&&rt(0)}function Kn(e,a){if(e&1&&(b(0,"div"),d(1,Zn,1,0,"ng-container",18),h()),e&2){let t=a.$implicit,n=a.index,o=u();g(o.cx("itemClone",z(7,Pt,n))),E("aria-hidden",o.totalShiftedItems*-1!==o.value.length)("aria-label",o.ariaSlideNumber(n))("aria-roledescription",o.ariaSlideLabel()),l(),s("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",z(9,Qt,t))}}function Yn(e,a){e&1&&rt(0)}function Xn(e,a){if(e&1&&(b(0,"div"),d(1,Yn,1,0,"ng-container",18),h()),e&2){let t=a.$implicit,n=a.index,o=u();g(o.cx("item",z(7,Pt,n))),E("aria-hidden",!(o.firstIndex()<=n&&o.lastIndex()>=n))("aria-label",o.ariaSlideNumber(n))("aria-roledescription",o.ariaSlideLabel()),l(),s("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",z(9,Qt,t))}}function Jn(e,a){e&1&&rt(0)}function to(e,a){if(e&1&&(b(0,"div"),d(1,Jn,1,0,"ng-container",18),h()),e&2){let t=a.$implicit,n=a.index,o=u();g(o.cx("itemClone",z(4,Pt,n))),l(),s("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",z(6,Qt,t))}}function eo(e,a){e&1&&(T(),x(0,"svg",22))}function no(e,a){e&1&&(T(),x(0,"svg",23))}function oo(e,a){if(e&1&&(G(0),d(1,eo,1,0,"svg",20)(2,no,1,0,"svg",21),Z()),e&2){let t=u(3);l(),s("ngIf",!t.isVertical()),l(),s("ngIf",t.isVertical())}}function io(e,a){}function ro(e,a){e&1&&d(0,io,0,0,"ng-template")}function ao(e,a){if(e&1&&(b(0,"span"),d(1,ro,1,0,null,11),h()),e&2){let t=u(3);l(),s("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function so(e,a){if(e&1&&d(0,oo,3,2,"ng-container",13)(1,ao,2,1,"span",13),e&2){let t=u(2);s("ngIf",!t.nextIconTemplate&&!t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon)),l(),s("ngIf",t.nextIconTemplate||t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon))}}function lo(e,a){if(e&1){let t=pt();b(0,"p-button",19),et("click",function(o){J(t);let i=u();return tt(i.navForward(o))}),d(1,so,2,2,"ng-template",null,1,Nt),h()}if(e&2){let t=u();g(t.cx("pcNextButton")),s("buttonProps",t.nextButtonProps)("text",!0),E("aria-label",t.ariaNextButtonLabel())}}function co(e,a){if(e&1){let t=pt();b(0,"li")(1,"button",25),et("click",function(o){let i=J(t).index,r=u(2);return tt(r.onDotClick(o,i))}),h()()}if(e&2){let t=a.index,n=u(2);g(n.cx("indicator",z(9,Pt,t))),E("data-pc-section","indicator"),l(),g(n.cx("indicatorButton")),s("ngStyle",n.indicatorStyle)("tabindex",n._page===t?0:-1),E("aria-label",n.ariaPageLabel(t+1))("aria-current",n._page===t?"page":void 0)}}function uo(e,a){if(e&1){let t=pt();b(0,"ul",24,2),et("keydown",function(o){J(t);let i=u();return tt(i.onIndicatorKeydown(o))}),d(2,co,2,11,"li",8),h()}if(e&2){let t=u();g(t.cx("indicatorList")),s("ngStyle",t.indicatorsContentStyle),l(2),s("ngForOf",t.totalDotsArray())}}function po(e,a){e&1&&rt(0)}function bo(e,a){if(e&1&&(b(0,"div"),Q(1,1),d(2,po,1,0,"ng-container",11),h()),e&2){let t=u();g(t.cx("footer")),l(2),s("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ho={root:({instance:e})=>["p-carousel p-component",{"p-carousel-vertical":e.isVertical(),"p-carousel-horizontal":!e.isVertical()}],header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:({instance:e})=>["p-carousel-prev-button",{"p-disabled":e.isBackwardNavDisabled()}],viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:({instance:e,index:a})=>["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":e.totalShiftedItems*-1===e.value.length,"p-carousel-item-start":a===0,"p-carousel-item-end":e.clonedItemsForStarting.length-1===a}],item:({instance:e,index:a})=>["p-carousel-item",{"p-carousel-item-active":e.firstIndex()<=a&&e.lastIndex()>=a,"p-carousel-item-start":e.firstIndex()===a,"p-carousel-item-end":e.lastIndex()===a}],pcNextButton:({instance:e})=>["p-carousel-next-button",{"p-disabled":e.isForwardNavDisabled()}],indicatorList:({instance:e})=>["p-carousel-indicator-list",e.indicatorsContentClass],indicator:({instance:e,index:a})=>["p-carousel-indicator",{"p-carousel-indicator-active":e._page===a}],indicatorButton:({instance:e})=>["p-carousel-indicator-button",e.indicatorStyleClass],footer:"p-carousel-footer"},He=(()=>{class e extends I{name="carousel";theme=$e;classes=ho;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ut=(()=>{class e extends O{el;zone;get page(){return this._page}set page(t){this.isCreated&&t!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),t>this._page&&t<=this.totalDots()-1?this.step(-1,t):t<this._page&&this.step(1,t)),this._page=t}get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t}get numScroll(){return this._numVisible}set numScroll(t){this._numScroll=t}responsiveOptions;orientation="horizontal";verticalViewPortHeight="300px";contentClass="";indicatorsContentClass="";indicatorsContentStyle;indicatorStyleClass="";indicatorStyle;get value(){return this._value}set value(t){this._value=t}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;styleClass;prevButtonProps={severity:"secondary",text:!0,rounded:!0};nextButtonProps={severity:"secondary",text:!0,rounded:!0};onPage=new ut;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousIconTemplate;nextIconTemplate;_itemTemplate;_headerTemplate;_footerTemplate;_previousIconTemplate;_nextIconTemplate;window;_componentStyle=m(He);constructor(t,n){super(),this.el=t,this.zone=n,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}ngOnChanges(t){Y(this.platformId)&&(t.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(t.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),t.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}templates;ngAfterContentInit(){this.id=ct("pn_id_"),Y(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"previousicon":this._previousIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}}),this.cd.detectChanges()}ngAfterContentChecked(){if(Y(this.platformId)){let t=this.isCircular(),n=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let o=this._page;this.totalDots()!==0&&o>=this.totalDots()&&(o=this.totalDots()-1,this._page=o,this.onPage.emit({page:this.page})),n=o*this._numScroll*-1,t&&(n-=this._numVisible),o===this.totalDots()-1&&this.remainingItems>0?(n+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,n!==this.totalShiftedItems&&(this.totalShiftedItems=n),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${n*(100/this._numVisible)}%, 0)`:`translate3d(${n*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}t&&(this.page===0?n=-1*this._numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",$t(this.carouselStyle,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle),$t(this.carouselStyle,"nonce",this.config?.csp()?.nonce));let t=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions){this.responsiveOptions.sort((n,o)=>{let i=n.breakpoint,r=o.breakpoint,c=null;return i==null&&r!=null?c=-1:i!=null&&r==null?c=1:i==null&&r==null?c=0:typeof i=="string"&&typeof r=="string"?c=i.localeCompare(r,void 0,{numeric:!0}):c=i<r?-1:i>r?1:0,-1*c});for(let n=0;n<this.responsiveOptions.length;n++){let o=this.responsiveOptions[n];t+=`
                    @media screen and (max-width: ${o.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/o.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=t}calculatePosition(){if(this.responsiveOptions){let t={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let n=window.innerWidth;for(let o=0;o<this.responsiveOptions.length;o++){let i=this.responsiveOptions[o];parseInt(i.breakpoint,10)>=n&&(t=i)}}if(this._numScroll!==t.numScroll){let n=this._page;n=Math.floor(n*this._numScroll/t.numScroll);let o=t.numScroll*this.page*-1;this.isCircular()&&(o-=t.numVisible),this.totalShiftedItems=o,this._numScroll=t.numScroll,this._page=n,this.onPage.emit({page:this.page})}this._numVisible!==t.numVisible&&(this._numVisible=t.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let t=this.totalDots();return t<=0?[]:Array(t).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(t,n){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,n),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}navBackward(t,n){(this.isCircular()||this._page!==0)&&this.step(1,n),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}onDotClick(t,n){let o=this._page;this.autoplayInterval&&this.stopAutoplay(),n>o?this.navForward(t,n):n<o&&this.navBackward(t,n)}onIndicatorKeydown(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let t=[...mt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)}onLeftKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)}onHomeKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)}onEndKey(){let t=[...mt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]r')],n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)}onTabKey(){let t=[...mt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],n=t.findIndex(r=>ce(r,"data-p-highlight")===!0),o=At(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),i=t.findIndex(r=>r===o.parentElement);t[i].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let t=[...mt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],n=At(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(o=>o===n.parentElement)}changedFocusedIndicator(t,n){let o=[...mt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')];o[t].children[0].tabIndex="-1",o[n].children[0].tabIndex="0",o[n].children[0].focus()}step(t,n){let o=this.totalShiftedItems,i=this.isCircular();if(n!=null)o=this._numScroll*n*-1,i&&(o-=this._numVisible),this.isRemainingItemsAdded=!1;else{o+=this._numScroll*t,this.isRemainingItemsAdded&&(o+=this.remainingItems-this._numScroll*t,this.isRemainingItemsAdded=!1);let r=i?o+this._numVisible:o;n=Math.abs(Math.floor(r/this._numScroll))}i&&this.page===this.totalDots()-1&&t===-1?(o=-1*(this.value.length+this._numVisible),n=0):i&&this.page===0&&t===1?(o=0,n=this.totalDots()-1):n===this.totalDots()-1&&this.remainingItems>0&&(o+=this.remainingItems*-1-this._numScroll*t,this.isRemainingItemsAdded=!0),this.itemsContainer&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${o*(100/this._numVisible)}%, 0)`:`translate3d(${o*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o,this._page=n,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(t=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,t&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(t){let n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchEnd(t){let n=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)}changePageOnTouch(t,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(t):this.navBackward(t))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria.nextPageLabel:void 0}ariaSlideNumber(t){return this.config.translation.aria?this.config.translation.aria.slideNumber.replace(/{slideNumber}/g,t):void 0}ariaPageLabel(t){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,t):void 0}bindDocumentListeners(){Y(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",t=>{this.calculatePosition()})))}unbindDocumentListeners(){Y(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static \u0275fac=function(n){return new(n||e)(Bt(dt),Bt(wt))};static \u0275cmp=y({type:e,selectors:[["p-carousel"]],contentQueries:function(n,o,i){if(n&1&&(F(i,me,5),F(i,fe,5),F(i,Fn,4),F(i,Pn,4),F(i,Mn,4),F(i,Dn,4),F(i,Bn,4),F(i,at,4)),n&2){let r;S(r=w())&&(o.headerFacet=r.first),S(r=w())&&(o.footerFacet=r.first),S(r=w())&&(o.itemTemplate=r.first),S(r=w())&&(o.headerTemplate=r.first),S(r=w())&&(o.footerTemplate=r.first),S(r=w())&&(o.previousIconTemplate=r.first),S(r=w())&&(o.nextIconTemplate=r.first),S(r=w())&&(o.templates=r)}},viewQuery:function(n,o){if(n&1&&(Vt(On,5),Vt(Ln,5)),n&2){let i;S(i=w())&&(o.itemsContainer=i.first),S(i=w())&&(o.indicatorContent=i.first)}},hostVars:4,hostBindings:function(n,o){n&2&&(E("id",o.id)("role","region"),g(o.cn(o.cx("root"),o.styleClass)))},inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:[2,"circular","circular",_],showIndicators:[2,"showIndicators","showIndicators",_],showNavigators:[2,"showNavigators","showNavigators",_],autoplayInterval:[2,"autoplayInterval","autoplayInterval",It],styleClass:"styleClass",prevButtonProps:"prevButtonProps",nextButtonProps:"nextButtonProps"},outputs:{onPage:"onPage"},features:[D([He]),v,vt],ngContentSelectors:Nn,decls:13,vars:21,consts:[["itemsContainer",""],["icon",""],["indicatorContent",""],[3,"class",4,"ngIf"],[3,"ngClass"],[3,"class","text","buttonProps","click",4,"ngIf"],[3,"touchend","touchstart","touchmove","ngStyle"],[3,"transitionend"],[3,"class",4,"ngFor","ngForOf"],["type","button",3,"class","buttonProps","text","click",4,"ngIf"],[3,"class","ngStyle","keydown",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"click","text","buttonProps"],[4,"ngIf"],["data-p-icon","chevron-left",4,"ngIf"],["data-p-icon","chevron-up",4,"ngIf"],["data-p-icon","chevron-left"],["data-p-icon","chevron-up"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",3,"click","buttonProps","text"],["data-p-icon","chevron-right",4,"ngIf"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-right"],["data-p-icon","chevron-down"],[3,"keydown","ngStyle"],["type","button",3,"click","ngStyle","tabindex"]],template:function(n,o){if(n&1){let i=pt();K(Vn),d(0,jn,3,3,"div",3),b(1,"div",4)(2,"div"),d(3,Gn,3,5,"p-button",5),b(4,"div",6),et("touchend",function(c){return J(i),tt(o.onTouchEnd(c))})("touchstart",function(c){return J(i),tt(o.onTouchStart(c))})("touchmove",function(c){return J(i),tt(o.onTouchMove(c))}),b(5,"div",7,0),et("transitionend",function(){return J(i),tt(o.onTransitionEnd())}),d(7,Kn,2,11,"div",8)(8,Xn,2,11,"div",8)(9,to,2,8,"div",8),h()(),d(10,lo,3,5,"p-button",9),h(),d(11,uo,3,4,"ul",10),h(),d(12,bo,3,3,"div",3)}n&2&&(s("ngIf",o.headerFacet||o.headerTemplate),l(),g(o.contentClass),s("ngClass",o.cx("contentContainer")),l(),g(o.cx("content")),E("aria-live",o.allowAutoplay?"polite":"off"),l(),s("ngIf",o.showNavigators),l(),g(o.cx("viewport")),s("ngStyle",z(19,zn,o.isVertical()?o.verticalViewPortHeight:"auto")),l(),g(o.cx("itemList")),l(2),s("ngForOf",o.clonedItemsForStarting),l(),s("ngForOf",o.value),l(),s("ngForOf",o.clonedItemsForFinishing),l(),s("ngIf",o.showNavigators),l(),s("ngIf",o.showIndicators),l(),s("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[q,kt,ie,bt,ht,Tt,Me,Ft,_t,Pe,Fe,De,B],encapsulation:2,changeDetection:0})}return e})(),We=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=$({imports:[Ut,B,B]})}return e})();var Qe=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var mo=["icon"],fo=["*"];function yo(e,a){if(e&1&&x(0,"span",3),e&2){let t=u(2);g(t.cx("icon")),s("ngClass",t.icon)}}function vo(e,a){if(e&1&&(G(0),d(1,yo,1,3,"span",2),Z()),e&2){let t=u();l(),s("ngIf",t.icon)}}function _o(e,a){}function Co(e,a){e&1&&d(0,_o,0,0,"ng-template")}function xo(e,a){if(e&1&&(b(0,"span"),d(1,Co,1,0,null,4),h()),e&2){let t=u();g(t.cx("icon")),l(),s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var So={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Ue=(()=>{class e extends I{name="tag";theme=Qe;classes=So;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var qt=(()=>{class e extends O{styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=m(Ue);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tag"]],contentQueries:function(n,o,i){if(n&1&&(F(i,mo,4),F(i,at,4)),n&2){let r;S(r=w())&&(o.iconTemplate=r.first),S(r=w())&&(o.templates=r)}},hostVars:2,hostBindings:function(n,o){n&2&&g(o.cn(o.cx("root"),o.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",_]},features:[D([Ue]),v],ngContentSelectors:fo,decls:5,vars:5,consts:[[4,"ngIf"],[3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(n,o){n&1&&(K(),Q(0),d(1,vo,2,1,"ng-container",0)(2,xo,2,3,"span",1),b(3,"span"),N(4),h()),n&2&&(l(),s("ngIf",!o.iconTemplate&&!o._iconTemplate),l(),s("ngIf",o.iconTemplate||o._iconTemplate),l(),g(o.cx("label")),l(),nt(o.value))},dependencies:[q,kt,bt,ht,B],encapsulation:2,changeDetection:0})}return e})(),qe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=H({type:e});static \u0275inj=$({imports:[qt,B,B]})}return e})();function ko(e,a){if(e&1&&(b(0,"span",8),x(1,"p-tag",12),h()),e&2){let t=a.$implicit;l(),s("value",t)}}function To(e,a){if(e&1&&(b(0,"div",2)(1,"div",3),x(2,"img",4),h(),b(3,"div",3)(4,"h4",5),N(5),h()(),b(6,"div",6)(7,"p",7),N(8),h()(),b(9,"div",3),Xt(10,ko,2,1,"span",8,Yt),h(),b(12,"div",9)(13,"a",10),x(14,"p-button",11),h()()()),e&2){let t=a.$implicit;l(2),s("src",t.imageUrl,Dt)("alt",t.title),l(3),nt(t.title),l(3),nt(t.description),l(2),Jt(t.tags),l(3),s("href",t.externalUrl,Dt),l(),s("label",t.button)}}var Mt=class e{items=U([]);responsiveOptions=[{breakpoint:"1299px",numVisible:2,numScroll:1},{breakpoint:"991px",numVisible:1,numScroll:1}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=y({type:e,selectors:[["app-carousel"]],inputs:{items:[1,"items"]},decls:2,vars:4,consts:[[3,"value","numVisible","numScroll","responsiveOptions"],["pTemplate","item"],[1,"border","border-surface","rounded-border","m-2","p-4","text-center"],[1,"mb-2"],["loading","lazy",1,"w-full","h-48","object-cover","rounded-border",3,"src","alt"],[1,"mb-1"],[1,"overflow-y-auto"],[1,"text-sm"],[1,"mr-1","mb-1","inline-block"],[1,"flex","justify-center","items-center"],["target","_blank","rel","noopener noreferrer",3,"href"],["icon","pi pi-external-link","styleClass","p-button-sm",3,"label"],[1,"tag",3,"value"]],template:function(t,n){t&1&&(b(0,"p-carousel",0),d(1,To,15,6,"ng-template",1),h()),t&2&&s("value",n.items())("numVisible",3)("numScroll",1)("responsiveOptions",n.responsiveOptions)},dependencies:[We,Ut,at,Ft,_t,qe,qt],styles:[".tag[_ngcontent-%COMP%]{margin:.25rem}.border[_ngcontent-%COMP%]{border:1px solid #dee2e6}.border-surface[_ngcontent-%COMP%]{border-color:var(--surface-border, #dee2e6)}.rounded-border[_ngcontent-%COMP%]{border-radius:6px}.m-2[_ngcontent-%COMP%]{margin:.5rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.mb-1[_ngcontent-%COMP%]{margin-bottom:.25rem}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.mb-3[_ngcontent-%COMP%]{margin-bottom:.75rem}.mb-4[_ngcontent-%COMP%]{margin-bottom:1rem}.mr-1[_ngcontent-%COMP%]{margin-right:.25rem}.text-center[_ngcontent-%COMP%]{text-align:center}.w-full[_ngcontent-%COMP%]{width:100%}.h-48[_ngcontent-%COMP%]{height:20rem}.object-cover[_ngcontent-%COMP%]{object-fit:contain}.text-sm[_ngcontent-%COMP%]{font-size:.875rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-clamp:2}.inline-block[_ngcontent-%COMP%]{display:inline-block}.flex[_ngcontent-%COMP%]{display:flex}.justify-center[_ngcontent-%COMP%]{justify-content:center}.items-center[_ngcontent-%COMP%]{align-items:center}[_nghost-%COMP%]     .p-carousel-prev-button{margin-left:25px;margin-right:15px}[_nghost-%COMP%]     .p-carousel-next-button{margin-right:25px;margin-left:15px}"],changeDetection:0})};var Ge=class e{seoService=m(ae);ngOnInit(){let a={title:"Projects",description:"Check out the projects our members have been working on. Contact an executive to showcase your work!",keywords:"CODERS Club, UWL, student projects, web development, programming, computer science"};this.seoService.setPageMeta(a)}projectData=[{title:"CODERS Website",description:"This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies.",imageUrl:"https://raw.githubusercontent.com/UWL-CODERS/website/refs/heads/main/src/assets/images/Logos/logo.png",externalUrl:"https://github.com/UWL-CODERS/website",tags:["TypeScript","HTML","SCSS","Angular"],button:"View Project"},{title:"YMCA Project",description:"A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.",imageUrl:"https://avatars.githubusercontent.com/u/63300213",externalUrl:"https://github.com/bishalkarki01/YMCAProject",tags:["JavaScript","HTML","CSS"],button:"View Project"},{title:"FaceMesh",description:"This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh.",imageUrl:"https://avatars.githubusercontent.com/u/132915020",externalUrl:"https://github.com/BlambrechtCodes/FaceMesh",tags:["Python","CV2","HTML"],button:"View Project"}];lightningTalksData=[{title:"2023 Lightning Talks",description:"",imageUrl:"assets/images/Logos/logo.png",externalUrl:"https://cs.uwlax.edu/~mzheng/LightningTalks2023.pdf",tags:["Samantha Foley","Mao Zheng","Rig Das","W. Michael Petullo","Dipankar Mitra"],button:"View Slides"},{title:"2024 Lightning Talks",description:"",imageUrl:"assets/images/Logos/logo.png",externalUrl:"https://cs.uwlax.edu/~mzheng/Lightning2024.pdf",tags:["Mao Zheng","Niusen Chen","Dipankar Mitra","Samantha Foley","Rig Das"],button:"View Slides"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=y({type:e,selectors:[["app-projects"]],decls:12,vars:2,consts:[[1,"research-projects"],[3,"items"]],template:function(t,n){t&1&&(b(0,"section",0)(1,"h1"),N(2,"Projects"),h(),b(3,"p"),N(4,"Check out the projects our members have been working on. Contact an executive to showcase your work!"),h()(),x(5,"app-carousel",1),b(6,"section",0)(7,"h1"),N(8,"CS Lightning Talks"),h(),b(9,"p"),N(10,"At the annual CS Lightning Talks, faculty give quick presentations on their research to inspire student projects."),h()(),x(11,"app-carousel",1)),t&2&&(l(5),s("items",n.projectData),l(6),s("items",n.lightningTalksData))},dependencies:[Mt],styles:[".research-projects[_ngcontent-%COMP%]{text-align:center;padding:20px}.research-projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{border-bottom:1px solid #aaa;padding:10px;display:inline-block}"]})};export{Ge as ProjectsComponent};
