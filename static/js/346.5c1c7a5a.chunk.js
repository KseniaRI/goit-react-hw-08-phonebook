"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[346],{6960:function(e,n,t){t.d(n,{V:function(){return c}});var r,o=t(168),a=t(5838).Z.h1(r||(r=(0,o.Z)(["\nfont-size: ",";\nfont-weight: 500;\nletter-spacing: 0.8em;\ncolor: ",";\ntext-transform: uppercase;\nmargin-bottom: 40px;\n"])),(function(e){return e.theme.fontSizes.xl}),(function(e){return e.theme.colors.white})),i=t(3329),c=function(e){var n=e.title;return(0,i.jsx)(a,{children:n})}},3346:function(e,n,t){t.r(n),t.d(n,{default:function(){return en}});var r=t(2791),o=t(7022),a=t(9434),i=t(4064),c=t(8104),s=t(1091),l=t(8820),u=t(4834),d=t(5987),p=t(1413),f=t(1694),v=t.n(f),h=t(6543),m=t(162),g=t(6882),b=t(1991),Z=t(3329),x=["bsPrefix","size","hasValidation","className","as"],w=(0,h.Z)("input-group-text",{Component:"span"}),y=r.forwardRef((function(e,n){var t=e.bsPrefix,o=e.size,a=e.hasValidation,i=e.className,c=e.as,s=void 0===c?"div":c,l=(0,d.Z)(e,x);t=(0,m.vE)(t,"input-group");var u=(0,r.useMemo)((function(){return{}}),[]);return(0,Z.jsx)(b.Z.Provider,{value:u,children:(0,Z.jsx)(s,(0,p.Z)((0,p.Z)({ref:n},l),{},{className:v()(i,t,o&&"".concat(t,"-").concat(o),a&&"has-validation")}))})}));y.displayName="InputGroup";var j=Object.assign(y,{Text:w,Radio:function(e){return(0,Z.jsx)(w,{children:(0,Z.jsx)(g.Z,(0,p.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,Z.jsx)(w,{children:(0,Z.jsx)(g.Z,(0,p.Z)({type:"checkbox"},e))})}}),k=t(241),C=function(){var e=(0,a.v9)(c.zK),n=(0,a.I0)();return(0,Z.jsx)(u.x,{as:"div",display:"flex",flexDirection:"column",alignItems:"center",width:"280px",m:"0 auto",children:(0,Z.jsxs)(j,{className:"mb-3",children:[(0,Z.jsx)(j.Text,{children:(0,Z.jsx)(l.RB5,{size:"24"})}),(0,Z.jsx)(k.Z.Control,{value:e,onChange:function(e){return n(s.Fr.actions.changeFilter(e.target.value))},placeholder:"Find Contact by name"})]})})},P=t(885),E={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function O(e){var n=function(e){if("number"===typeof e)return{value:e,unit:"px"};var n,t=(e.match(/^[0-9.]*/)||"").toString();n=t.includes(".")?parseFloat(t):parseInt(t,10);var r=(e.match(/[^0-9]*$/)||"").toString();return E[r]?{value:n,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}(e);return"".concat(n.value).concat(n.unit)}var N=function(){return N=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},N.apply(this,arguments)},R=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},T=function(e,n,t){var r="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var a=o.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(n,"\n    }\n  ");return a&&a.insertRule(i,0),r}("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");var z=function(e){var n=e.loading,t=void 0===n||n,o=e.color,a=void 0===o?"#000000":o,i=e.speedMultiplier,c=void 0===i?1:i,s=e.cssOverride,l=void 0===s?{}:s,u=e.size,d=void 0===u?35:u,p=R(e,["loading","color","speedMultiplier","cssOverride","size"]),f=N({background:"transparent !important",width:O(d),height:O(d),borderRadius:"100%",border:"2px solid",borderTopColor:a,borderBottomColor:"transparent",borderLeftColor:a,borderRightColor:a,display:"inline-block",animation:"".concat(T," ").concat(.75/c,"s 0s infinite linear"),animationFillMode:"both"},l);return t?r.createElement("span",N({style:f},p)):null},_=t(168),S=t(5838),F=t(3360),I=t(9007),M=t(4787),D=t(8633),L=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],V=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.active,o=e.disabled,a=e.eventKey,i=e.className,c=e.variant,s=e.action,l=e.as,u=(0,d.Z)(e,L);t=(0,m.vE)(t,"list-group-item");var f=(0,M.v)((0,p.Z)({key:(0,D.h)(a,u.href),active:r},u)),h=(0,P.Z)(f,2),g=h[0],b=h[1],x=(0,I.Z)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();g.onClick(e)}));o&&void 0===u.tabIndex&&(u.tabIndex=-1,u["aria-disabled"]=!0);var w=l||(s?u.href?"a":"button":"div");return(0,Z.jsx)(w,(0,p.Z)((0,p.Z)((0,p.Z)({ref:n},u),g),{},{onClick:x,className:v()(i,t,b.isActive&&"active",o&&"disabled",c&&"".concat(t,"-").concat(c),s&&"".concat(t,"-action"))}))}));V.displayName="ListGroupItem";var B,K,U,A,G=V,H=(0,S.Z)(F.Z)(B||(B=(0,_.Z)(["\nbackground-color: ",";\ncolor: ",";\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.black})),J=(0,S.Z)(z)(K||(K=(0,_.Z)(["\nposition: absolute;\ncolor:  ",";\ntop: 70%;\nleft: 50%;\n"])),(function(e){return e.theme.colors.background})),$=(0,S.Z)(G)(U||(U=(0,_.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-around;\nalign-items: center;\nwidth: 100%;\n\n&:nth-of-type(2n){\n  background-color: ",";\n}\n"])),(function(e){return e.theme.colors.background})),q=S.Z.div(A||(A=(0,_.Z)(["\nwidth: calc(100% / 3);\ntext-align: center;\n"]))),W=t(2982),Q=t(3189),X=t(5746),Y=t(1683),ee=Math.pow(2,31)-1;function ne(e,n,t){var r=t-Date.now();e.current=r<=ee?setTimeout(n,r):setTimeout((function(){return ne(e,n,t)}),ee)}function te(){var e=(0,X.Z)(),n=(0,r.useRef)();return(0,Y.Z)((function(){return clearTimeout(n.current)})),(0,r.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(t(),o<=ee?n.current=setTimeout(r,o):ne(n,r,Date.now()+o))},clear:t}}),[])}t(2391);var re=t(239),oe=t(3201),ae=t(4164),ie=t(7731),ce=t(2293),se=t(4468),le=t(8376),ue=t(6050),de=function(){};var pe=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.disabled,a=t.clickTrigger,i=n||de;(0,ue.Z)(e,i,{disabled:o,clickTrigger:a});var c=(0,I.Z)((function(e){27===e.keyCode&&i(e)}));(0,r.useEffect)((function(){if(!o&&null!=e){var n=(0,le.Z)((0,ue.f)(e)),t=(n.defaultView||window).event,r=(0,se.Z)(n,"keyup",(function(e){e!==t?c(e):t=void 0}));return function(){r()}}}),[e,o,c])},fe=t(183),ve=t(1012),he=r.forwardRef((function(e,n){var t=e.flip,o=e.offset,a=e.placement,i=e.containerPadding,c=e.popperConfig,s=void 0===c?{}:c,l=e.transition,u=(0,ie.Z)(),d=(0,P.Z)(u,2),p=d[0],f=d[1],v=(0,ie.Z)(),h=(0,P.Z)(v,2),m=h[0],g=h[1],b=(0,oe.Z)(f,n),x=(0,fe.Z)(e.container),w=(0,fe.Z)(e.target),y=(0,r.useState)(!e.show),j=(0,P.Z)(y,2),k=j[0],C=j[1],E=(0,ce.Z)(w,p,(0,ve.ZP)({placement:a,enableEvents:!!e.show,containerPadding:i||5,flip:t,offset:o,arrowElement:m,popperConfig:s}));e.show?k&&C(!1):e.transition||k||C(!0);var O=e.show||l&&!k;if(pe(p,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!O)return null;var N=e.children(Object.assign({},E.attributes.popper,{style:E.styles.popper,ref:b}),{popper:E,placement:a,show:!!e.show,arrowProps:Object.assign({},E.attributes.arrow,{style:E.styles.arrow,ref:g})});if(l){var R=e.onExit,T=e.onExiting,z=e.onEnter,_=e.onEntering,S=e.onEntered;N=(0,Z.jsx)(l,{in:e.show,appear:!0,onExit:R,onExiting:T,onExited:function(){C(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:z,onEntering:_,onEntered:S,children:N})}return x?ae.createPortal(N,x):null}));he.displayName="Overlay";var me=he,ge=t(9815),be=t(6755),Ze=(0,h.Z)("popover-header"),xe=(0,h.Z)("popover-body"),we=t(3144),ye=t(5671),je=t(136),ke=t(3668);r.Component;function Ce(e,n){var t=e;return"left"===e?t=n?"end":"start":"right"===e&&(t=n?"start":"end"),t}var Pe=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"],Ee=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.placement,o=e.className,a=e.style,i=e.children,c=e.body,s=e.arrowProps,l=(e.popper,e.show,(0,d.Z)(e,Pe)),u=(0,m.vE)(t,"popover"),f=(0,m.SC)(),h=(null==r?void 0:r.split("-"))||[],g=(0,P.Z)(h,1)[0],b=Ce(g,f);return(0,Z.jsxs)("div",(0,p.Z)((0,p.Z)({ref:n,role:"tooltip",style:a,"x-placement":g,className:v()(o,u,g&&"bs-popover-".concat(b))},l),{},{children:[(0,Z.jsx)("div",(0,p.Z)({className:"popover-arrow"},s)),c?(0,Z.jsx)(xe,{children:i}):i]}))}));Ee.defaultProps={placement:"right"};var Oe=Object.assign(Ee,{Header:Ze,Body:xe,POPPER_OFFSET:[0,8]});var Ne=t(2709),Re=t(7002),Te=["children","transition","popperConfig"],ze={transition:Ne.Z,rootClose:!1,show:!1,placement:"top"};var _e=r.forwardRef((function(e,n){var t=e.children,o=e.transition,a=e.popperConfig,i=void 0===a?{}:a,c=(0,d.Z)(e,Te),s=(0,r.useRef)({}),l=(0,ie.Z)(),u=(0,P.Z)(l,2),f=u[0],h=u[1],g=function(e){var n=(0,r.useRef)(null),t=(0,m.vE)(void 0,"popover"),o=(0,r.useMemo)((function(){return{name:"offset",options:{offset:function(){return n.current&&(0,be.Z)(n.current,t)?e||Oe.POPPER_OFFSET:e||[0,0]}}}}),[e,t]);return[n,[o]]}(c.offset),b=(0,P.Z)(g,2),x=b[0],w=b[1],y=(0,oe.Z)(n,x),j=!0===o?Ne.Z:o||void 0,k=(0,I.Z)((function(e){h(e),null==i||null==i.onFirstUpdate||i.onFirstUpdate(e)}));return(0,ge.Z)((function(){f&&(null==s.current.scheduleUpdate||s.current.scheduleUpdate())}),[f]),(0,Z.jsx)(me,(0,p.Z)((0,p.Z)({},c),{},{ref:y,popperConfig:(0,p.Z)((0,p.Z)({},i),{},{modifiers:w.concat(i.modifiers||[]),onFirstUpdate:k}),transition:j,children:function(e,n){var a,i,c=n.arrowProps,l=n.popper,u=n.show;!function(e,n){var t=e.ref,r=n.ref;e.ref=t.__wrapped||(t.__wrapped=function(e){return t((0,Re.Z)(e))}),n.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,Re.Z)(e))})}(e,c);var d=null==l?void 0:l.placement,f=Object.assign(s.current,{state:null==l?void 0:l.state,scheduleUpdate:null==l?void 0:l.update,placement:d,outOfBoundaries:(null==l||null==(a=l.state)||null==(i=a.modifiersData.hide)?void 0:i.isReferenceHidden)||!1});return"function"===typeof t?t((0,p.Z)((0,p.Z)((0,p.Z)({},e),{},{placement:d,show:u},!o&&u&&{className:"show"}),{},{popper:f,arrowProps:c})):r.cloneElement(t,(0,p.Z)((0,p.Z)({},e),{},{placement:d,arrowProps:c,popper:f,className:v()(t.props.className,!o&&u&&"show"),style:(0,p.Z)((0,p.Z)({},t.props.style),e.style)}))}}))}));_e.displayName="Overlay",_e.defaultProps=ze;var Se=_e,Fe=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function Ie(e,n,t){var r=(0,P.Z)(n,1)[0],o=r.currentTarget,a=r.relatedTarget||r.nativeEvent[t];a&&a===o||(0,Q.Z)(o,a)||e.apply(void 0,(0,W.Z)(n))}function Me(e){var n=e.trigger,t=e.overlay,o=e.children,a=e.popperConfig,i=void 0===a?{}:a,c=e.show,s=e.defaultShow,l=void 0!==s&&s,u=e.onToggle,f=e.delay,v=e.placement,h=e.flip,m=void 0===h?v&&-1!==v.indexOf("auto"):h,g=(0,d.Z)(e,Fe),b=(0,r.useRef)(null),x=(0,oe.Z)(b,o.ref),w=te(),y=(0,r.useRef)(""),j=(0,re.$c)(c,l,u),k=(0,P.Z)(j,2),C=k[0],E=k[1],O=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(f),N="function"!==typeof o?r.Children.only(o).props:{},R=N.onFocus,T=N.onBlur,z=N.onClick,_=(0,r.useCallback)((function(){w.clear(),y.current="show",O.show?w.set((function(){"show"===y.current&&E(!0)}),O.show):E(!0)}),[O.show,E,w]),S=(0,r.useCallback)((function(){w.clear(),y.current="hide",O.hide?w.set((function(){"hide"===y.current&&E(!1)}),O.hide):E(!1)}),[O.hide,E,w]),F=(0,r.useCallback)((function(){_(),null==R||R.apply(void 0,arguments)}),[_,R]),I=(0,r.useCallback)((function(){S(),null==T||T.apply(void 0,arguments)}),[S,T]),M=(0,r.useCallback)((function(){E(!C),null==z||z.apply(void 0,arguments)}),[z,E,C]),D=(0,r.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];Ie(_,n,"fromElement")}),[_]),L=(0,r.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];Ie(S,n,"toElement")}),[S]),V=null==n?[]:[].concat(n),B={ref:function(e){x((0,Re.Z)(e))}};return-1!==V.indexOf("click")&&(B.onClick=M),-1!==V.indexOf("focus")&&(B.onFocus=F,B.onBlur=I),-1!==V.indexOf("hover")&&(B.onMouseOver=D,B.onMouseOut=L),(0,Z.jsxs)(Z.Fragment,{children:["function"===typeof o?o(B):(0,r.cloneElement)(o,B),(0,Z.jsx)(Se,(0,p.Z)((0,p.Z)({},g),{},{show:C,onHide:S,flip:m,placement:v,popperConfig:i,target:b.current,children:t}))]})}Me.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var De=Me,Le=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],Ve=r.forwardRef((function(e,n){var t=e.bsPrefix,r=e.placement,o=e.className,a=e.style,i=e.children,c=e.arrowProps,s=(e.popper,e.show,(0,d.Z)(e,Le));t=(0,m.vE)(t,"tooltip");var l=(0,m.SC)(),u=(null==r?void 0:r.split("-"))||[],f=(0,P.Z)(u,1)[0],h=Ce(f,l);return(0,Z.jsxs)("div",(0,p.Z)((0,p.Z)({ref:n,style:a,role:"tooltip","x-placement":f,className:v()(o,t,"bs-tooltip-".concat(h))},s),{},{children:[(0,Z.jsx)("div",(0,p.Z)({className:"tooltip-arrow"},c)),(0,Z.jsx)("div",{className:"".concat(t,"-inner"),children:i})]}))}));Ve.defaultProps={placement:"right"},Ve.displayName="Tooltip";var Be=Ve,Ke=function(e){var n=e.id,t=e.name,o=e.number,s=(0,a.v9)(c.Vc),l=(0,a.I0)(),u=(0,r.useState)(null),d=(0,P.Z)(u,2),p=d[0],f=d[1];return(0,Z.jsxs)($,{as:"li",action:!0,children:[(0,Z.jsxs)(q,{children:[t,":"]}),(0,Z.jsx)(q,{children:o}),(0,Z.jsx)(q,{children:(0,Z.jsx)(De,{placement:"right",delay:{show:250,hide:400},overlay:(0,Z.jsx)(Be,{id:"button-tooltip",children:"Are you sure? The contact will be deleted."}),children:(0,Z.jsxs)(H,{type:"button",onClick:function(){f(n),l((0,i.GK)(n))},disabled:s,children:[n===p&&(0,Z.jsx)(z,{loading:s,size:10}),"Delete"]})})})]})},Ue=t(1337),Ae=["className","bsPrefix","variant","horizontal","numbered","as"],Ge=r.forwardRef((function(e,n){var t,r=(0,re.Ch)(e,{activeKey:"onSelect"}),o=r.className,a=r.bsPrefix,i=r.variant,c=r.horizontal,s=r.numbered,l=r.as,u=void 0===l?"div":l,f=(0,d.Z)(r,Ae),h=(0,m.vE)(a,"list-group");return c&&(t=!0===c?"horizontal":"horizontal-".concat(c)),(0,Z.jsx)(Ue.Z,(0,p.Z)((0,p.Z)({ref:n},f),{},{as:u,className:v()(o,h,i&&"".concat(h,"-").concat(i),t&&"".concat(h,"-").concat(t),s&&"".concat(h,"-numbered"))}))}));Ge.displayName="ListGroup";var He,Je=Object.assign(Ge,{Item:G}),$e=function(){var e=(0,a.v9)(c.Jr),n=(0,a.v9)(c.Vc);return(0,Z.jsxs)(Je,{as:"ul",variant:"flush",children:[(0,Z.jsx)(J,{loading:n,size:50}),e&&e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,Z.jsx)(Ke,{id:n,name:t,number:r},n)}))]})},qe=t(6960),We=S.Z.section(He||(He=(0,_.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n    background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),\n    url('https://cdn.pixabay.com/photo/2018/02/23/09/14/finger-3175060_960_720.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    width: 100%;\n    height: 360px;\n    margin-bottom: ","px; \n"])),(function(e){return e.theme.space[5]})),Qe=function(){return(0,Z.jsx)(We,{children:(0,Z.jsx)(qe.V,{title:"Contacts"})})},Xe=t(3504),Ye=t(7573),en=function(){var e=(0,a.v9)(c.Jr),n=(0,a.I0)();return(0,r.useEffect)((function(){n((0,i.yF)())}),[n]),(0,Z.jsxs)(o.Z,{children:[(0,Z.jsx)(Qe,{}),(0,Z.jsx)(C,{}),0===e.length?(0,Z.jsxs)(Ye.v,{children:["There are no contacts. ",(0,Z.jsx)(Xe.OL,{to:"/",children:"Add contact"})," or change the search query."]}):(0,Z.jsx)($e,{})]})}},7573:function(e,n,t){t.d(n,{P:function(){return l},v:function(){return s}});var r,o,a=t(168),i=t(5838),c=t(7022),s=i.Z.p(r||(r=(0,a.Z)(["\nwidth: fit-content;\nmargin: 0 auto;\nfont-size: ",";\nfont-weight: ",";\ncolor: ",";\nbackground-color: ",";\nmargin-bottom: ","px;\nborder-radius: ",";\nopacity: 0.9;\n"])),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.colors.title}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.space[5]}),(function(e){return e.theme.radii.normal})),l=(0,i.Z)(c.Z)(o||(o=(0,a.Z)(["\n    padding-top: ","px;\n    padding-bottom:  ","px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-image: url('https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_960_720.png');\n"])),(function(e){return e.theme.space[6]}),(function(e){return e.theme.space[6]}))},8104:function(e,n,t){t.d(n,{Jr:function(){return i},Vc:function(){return o},kk:function(){return r},zK:function(){return a}});var r=function(e){return e.phonebook.items.contacts},o=function(e){return e.phonebook.items.isLoading},a=function(e){return e.phonebook.filter.value},i=function(e){var n=r(e),t=a(e);return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}}}]);
//# sourceMappingURL=346.5c1c7a5a.chunk.js.map