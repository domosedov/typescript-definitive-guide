(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FYJp:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r}));var n=a("heD2"),c=function(e){return e.releaseHistory[0]},r=function(e){return new n.Version(e)}},Tp7n:function(e,t,a){"use strict";a.r(t);var n,c=a("q1tI"),r=a.n(c),l=a("hGi/"),i=(a("kSBX"),a("T3EJ")),o=a("DEsH"),s=a("1G37"),m=a("eW31"),d=a("8qo5"),u=Object(c.createContext)(null),v=a("pJAA"),E=a("vIQ3"),h=a("FYJp"),_=function(e){Object(l.a)(e);var t=Object(c.useContext)(u),a=Object(h.a)(t),n=Object(h.b)(a.version),i=v.a(a.dateRelease),o=n.mmp+"/metadata/cover.png";return r.a.createElement("section",{className:"content__section"},r.a.createElement("div",{className:"main-presentation"},r.a.createElement("div",{className:"main-meta"},r.a.createElement("span",{className:"main-meta-informer__version"},n.preReleaseName),r.a.createElement("time",{className:"main-meta-informer__date",dateTime:a.dateRelease},i)),r.a.createElement("h1",{className:"main-title"},n.mmp),r.a.createElement("div",{className:"main-cover"},r.a.createElement(E.a,{className:"win-innovation-cover__cover",relativePath:o,alt:"cover"}))))},f=function(e){return Object(l.a)(e),r.a.createElement("div",{className:"social-network__share ya-share2","data-services":"vkontakte,facebook,twitter,whatsapp,telegram"})},b=function(e){return Object(l.a)(e),r.a.createElement("div",{className:"content__under-cover-bar"},r.a.createElement(f,null))},k=a("EKdO"),p=a("AnUa"),N=a("FATx"),O=a("Fatc"),g=a("EaY7"),j=Object(m.a)((function(e){Object(l.a)(e),Object(p.a)(),Object(N.a)(),Object(g.a)();var t=Object(O.d)().innovations.innovationDataAll.map((function(e,t){return r.a.createElement("section",{key:t,id:e.path,className:"content__section win-content__innovation-list-item"},r.a.createElement(k.a,{commitInfoAll:e.commitInfoAll,contentOnGithubLink:e.fileOnGithubLink}),r.a.createElement("span",{className:"content__html-content-wrapper",dangerouslySetInnerHTML:{__html:e.html}}))}));return r.a.createElement(r.a.Fragment,null,t)})),w=a("kmFt"),C=a("Va/Y"),A=a("KraK"),P=a("ouma"),x=a("OaiF"),S=a("4KgZ"),I=a("TSYQ"),y=a.n(I),V=a("MM21");!function(e){e[e.Active=0]="Active",e[e.Inactive=1]="Inactive"}(n||(n={}));var L=function(e){var t,a=e.isActive,c=e.state,l=void 0===c?n.Active:c,i=y()("activity",((t={})["activity-state_active"]=l===n.Active,t["activity-state_inactive"]=l===n.Inactive,t));return r.a.createElement(V.a,{condition:a},r.a.createElement("div",{className:i}))},F=Object(m.a)((function(e){var t=e.children,a=Object(O.c)();return a.isAllVersionChecked,r.a.createElement(w.a,{className:"filter-dropdown"},r.a.createElement(C.a,null,r.a.createElement(L,{isActive:!a.isAllVersionChecked,state:a.isAllVersionUnchecked?n.Inactive:n.Active}),r.a.createElement(A.a,{size:A.b.SM},r.a.createElement(P.m,null),r.a.createElement(S.a,{position:S.b.BottomCenter},"Фильтр версий"))),r.a.createElement(x.a,{className:"filter-dropdown__menu content__control-bar-dropdown-item",openClassName:"filter-dropdown__menu_open-state",closeClassName:"filter-dropdown__menu_close-state"},t))})),D=a("uRCh"),R=Object(c.createContext)({name:"",setState:function(e){},getState:function(e){return!1}}),T=function(e){var t=e.name,a=e.children,n=Object(c.useState)({}),l=n[0],i=n[1],o={name:null!=t?t:Object(D.generateStringId)(),setState:function(e){var t=e.id,a=e.checked;return i((function(){return Object.keys(l).reduce((function(e,n){var c;return Object.assign(e,((c={})[n]=n===t&&(null!=a?a:!l[n]),c))}),{})}))},getState:function(e){return l[e]}};return r.a.createElement(R.Provider,{value:o},a)},Y=Object(c.createContext)({id:"",checked:!1}),B=function(){return Object(c.useContext)(Y)},J=Object(m.a)((function(e){var t,a,n=e.onChecked,l=e.value,i=e.className,o=e.classNameChecked,s=void 0===o?"checked":o,m=e.classNameNotChecked,d=void 0===m?"not-checked":m,u=e.checked,v=void 0!==u&&u,E=e.id,h=e.children,_=Object(c.useContext)(R),f=_.name,b=_.setState,k=_.getState,p=Object(c.useRef)(null!=E?E:Object(D.generateStringId)()),N=null!==(t=k(p.current))&&void 0!==t?t:v,O={id:p.current,checked:N},g=y()("radio",i,((a={})[s]=N,a[d]=!N,a));return Object(c.useEffect)((function(){b({id:p.current,checked:O.checked!==N?N:v})}),[v]),r.a.createElement(Y.Provider,{value:O},r.a.createElement("label",{htmlFor:p.current,className:g},r.a.createElement("input",{type:"radio",id:p.current,name:f,value:l,className:"radio__input",checked:N,onChange:function(){var e={id:p.current,checked:!N};b(Object.assign({},e)),n&&n(Object.assign({},e))}}),h))})),H=Object(m.a)((function(e){var t,a=e.onChecked,n=e.className,l=e.classNameChecked,i=void 0===l?"checked":l,o=e.classNameNotChecked,s=void 0===o?"not-checked":o,m=e.value,d=e.children,u=e.checked,v=void 0!==u&&u,E=e.id,h=void 0===E?Object(D.generateStringId)():E,_=Object(c.useRef)(null!=h?h:Object(D.generateStringId)()),f=y()("checkbox",n,((t={})[i]=v,t[s]=!v,t)),b={id:_.current,checked:v};return r.a.createElement(Y.Provider,{value:b},r.a.createElement("label",{className:f},r.a.createElement("input",{type:"checkbox",value:m,id:_.current,className:"checkbox__input",onChange:function(){a&&a({checked:!v,id:_.current})},checked:v}),d))})),K=function(e){var t=e.id,a=e.className,n=e.children,c=B().id,l=void 0===c?t:c,i=y()("label",a);return r.a.createElement("label",{htmlFor:l,className:i},n)},z=function(e){var t,a=e.className,n=B().checked,c=y()("checkbox__icon-group",a,((t={})["checkbox__icon-group_checked"]=n,t["checkbox__icon-group_not-checked"]=!n,t));return r.a.createElement("div",{className:c},r.a.createElement(V.a,{condition:n},r.a.createElement(P.h,{className:"checkbox__svg-icon"})),r.a.createElement(V.a,{condition:!n},r.a.createElement(P.i,{className:"checkbox__svg-icon"})))},G=Object(m.a)((function(e){Object(l.a)(e);var t=Object(O.c)();return r.a.createElement("form",{className:"win-filter-dropdown-menu__control-bar"},r.a.createElement("fieldset",{className:"fieldset_md"},r.a.createElement("legend",{className:"legend_md"},"Отобразить:"),r.a.createElement(T,{name:"filter-version"},r.a.createElement(J,{value:"last",className:"win-filter-version__radio",classNameChecked:"win-filter-version__radio_checked",classNameNotChecked:"win-filter-version__radio_not-checked",onChecked:function(e){return e.checked&&t.checkedLastVersion()},checked:t.isLastVersionChecked},r.a.createElement(K,null,"Последнее")),r.a.createElement(J,{value:"all",className:"win-filter-version__radio",classNameChecked:"win-filter-version__radio_checked",classNameNotChecked:"win-filter-version__radio_not-checked",onChecked:function(e){return e.checked&&t.checkedAllVersion()},checked:t.isAllVersionChecked},r.a.createElement(K,null,"Все")))))})),M=Object(m.a)((function(e){Object(l.a)(e);var t=Object(O.c)(),a=t.versionInfoAll.map((function(e,a){return r.a.createElement("li",{key:a,className:"win-filter-content-form__list-item"},r.a.createElement(H,{id:e.data.version,className:"win-filter-content-form__checkbox",value:e.data.version,onChecked:function(){return t.changeByVersion(e.data.version)},checked:e.checked},r.a.createElement(K,{className:"win-filter-content-form__label"},r.a.createElement(z,null),r.a.createElement("span",{className:"win-filter-content-form__label_stage"},e.data.stage),r.a.createElement(V.a,{condition:""!==e.data.updateVersion},r.a.createElement("span",{className:"win-filter-content-form__label_update-version"},"upd",e.data.updateVersion)),r.a.createElement("span",{className:"win-filter-content-form__label_date"},"(",e.data.dateRelease,")"),r.a.createElement("span",{className:"win-filter-content-form__label_count"},e.data.count))))}));return r.a.createElement("form",{className:"win-filter-content-form"},r.a.createElement("fieldset",{className:"fieldset_md"},r.a.createElement("legend",{className:"legend_md legend-with-meta"},r.a.createElement("span",{className:"legend_md_base-info"},"История версий"),r.a.createElement("span",{className:"legend_md_meta-info"},"Всего: ",t.innovationCount)),r.a.createElement("ul",null,a)))})),U=Object(m.a)((function(e){return Object(l.a)(e),r.a.createElement("div",{className:"win-version-filter"},r.a.createElement("header",{className:"win-version-filter__header"},r.a.createElement("span",null,"Версионный фильтр")),r.a.createElement("div",{className:"scroll-wrapper"},r.a.createElement(G,null),r.a.createElement(M,null)))})),Q=a("pFkx"),q=function(e){var t=e.message;return r.a.createElement("div",{className:"content__content-placeholder_empty"},r.a.createElement("div",{className:"content-placeholder__informer"},r.a.createElement("span",{className:"content-placeholder__label"},t)))},X=Object(m.a)((function(e){Object(l.a)(e);var t=Object(O.d)().versionFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{condition:0===t.checkedLength},r.a.createElement(q,{message:"Ничего не выбранно"})),r.a.createElement(V.a,{condition:t.checkedLength>0&&0===t.checkedInnovationCount},r.a.createElement(V.a,{condition:1===t.checkedLength},r.a.createElement(q,{message:"Выбранная версия не содержит нововведений"})),r.a.createElement(V.a,{condition:t.checkedLength>1},r.a.createElement(q,{message:"Выбранные версии не содержат нововведений"}))))})),Z=a("DaPz"),W=Object(m.a)((function(e){return Object(l.a)(e),r.a.createElement(i.a,{driver:r.a.createElement(s.b,null),content:r.a.createElement(o.a,{controlBar:r.a.createElement(d.a,null,r.a.createElement("div",{className:"content__win-control-bar_wrapper"},r.a.createElement(F,null,r.a.createElement(U,null)))),content:r.a.createElement(Z.a,null,r.a.createElement(_,null),r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(X,null),r.a.createElement(Q.a,null))})})})),$=a("H8eV"),ee=a("bnLi"),te=a("73Uz"),ae=Object(c.createContext)(null),ne=a("KQm4"),ce=Object(c.createContext)(null),re=a("19Yi"),le=a("h59u"),ie=a("Bapu"),oe=a("mLh/"),se=a("cddY"),me=a("S8kh"),de=a("3ihZ");t.default=function(e){var t,a,n,l,i=e.pageContext,o=e.location,s=i.localization,m=i.innovationData,d=i.winTocTree,E=i.pageNavDataAll,_=O.b.getInstance({winTocTree:d,innovationData:m,pageNavDataAll:E,location:o,initialCheckedVersion:(n=new URLSearchParams(o.search).get("filter"),null!==(l=null==n?void 0:n.split(",").map((function(e){return e.trim()})))&&void 0!==l?l:[]),versionInfoAll:(t=m,a=t.innovations.reduce((function(e,t){return e.hasOwnProperty(t.version)||(e[t.version]=0),e[t.version]++,e}),{}),Object(ne.a)(t.releaseHistory).sort((function(e,t){return Date.parse(t.datePublication)-Date.parse(e.datePublication)})).map((function(e){var t,n=Object(h.b)(e.version);return{stage:n.preReleaseName,version:e.version,updateVersion:n.updateVersion,dateRelease:v.b(e.dateRelease),datePublication:v.b(e.datePublication),count:null!==(t=a[e.version])&&void 0!==t?t:0}})))}),f=_.stores,b=_.validators,k=f.router;return Object(de.a)(o,k),Object(c.useLayoutEffect)((function(){}),[k.pageName]),r.a.createElement(O.a.Provider,{value:f},r.a.createElement(ce.Provider,{value:b},r.a.createElement(re.a.Provider,{value:f.behaviorNotificationStore},r.a.createElement(ae.Provider,{value:E},r.a.createElement(ee.a.Provider,{value:s},r.a.createElement(me.b.Provider,{value:k},r.a.createElement(se.a.Provider,{value:f.contentIntersectionObserver},r.a.createElement(oe.a.Provider,{value:f.contentNav},r.a.createElement(ie.a.Provider,{value:f.contentDownPanelStore},r.a.createElement(te.a,null,r.a.createElement($.a,null),r.a.createElement(u.Provider,{value:m},r.a.createElement(W,null),r.a.createElement(le.a,null))))))))))))}},kSBX:function(e,t,a){}}]);
//# sourceMappingURL=component---src-page-templates-what-is-new-page-what-is-new-page-provider-tsx-de547ca1bd7aa0fe8cce.js.map