(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{attrs:{elevated:""}},[e("q-toolbar",[e("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),e("q-toolbar-title",[t._v("\n        Quasar App\n      ")]),e("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),e("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[e("q-list",[e("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Essential Links\n      ")]),t._l(t.essentialLinks,(function(a){return e("EssentialLink",t._b({key:a.title},"EssentialLink",a,!1))}))],2)],1),e("q-page-container",[e("router-view")],1)],1)},r=[],i=function(){var t=this,e=t._self._c;return e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:t.icon}})],1):t._e(),e("q-item-section",[e("q-item-label",[t._v(t._s(t.title))]),e("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},o=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=s,c=a("2877"),u=a("66e5"),p=a("4074"),d=a("0016"),m=a("0170"),b=a("eebe"),f=a.n(b),v=Object(c["a"])(l,i,o,!1,null,null,null),k=v.exports;f()(v,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:d["a"],QItemLabel:m["a"]});const q=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}];var w={name:"MainLayout",components:{EssentialLink:k},data(){return{leftDrawerOpen:!1,essentialLinks:q}}},h=w,_=a("4d5a"),Q=a("e359"),g=a("65c6"),L=a("9c40"),y=a("6ac5"),D=a("9404"),O=a("1c1c"),C=a("09e3"),E=Object(c["a"])(h,n,r,!1,null,null,null);e["default"]=E.exports;f()(E,"components",{QLayout:_["a"],QHeader:Q["a"],QToolbar:g["a"],QBtn:L["a"],QToolbarTitle:y["a"],QDrawer:D["a"],QList:O["a"],QItemLabel:m["a"],QPageContainer:C["a"]})}}]);