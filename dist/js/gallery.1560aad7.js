(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"289e":function(e,t,a){},4104:function(e,t,a){"use strict";a("289e")},"4ed8":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function l(e,t,a,l,n,i){var s=Object(c["M"])("router-view");return Object(c["E"])(),Object(c["h"])(s)}var n=a("5530"),i=a("213a"),s=a("5502"),r=Object(c["p"])({name:"GalleryPage",setup:function(){Object(i["c"])({title:"相簿",htmlAttrs:{lang:"zh-HK"}})},mounted:function(){var e=this;this.$nextTick((function(){e.localizePage()}))},methods:Object(n["a"])({},Object(s["b"])(["localizePage"]))}),o=a("b9a6"),u=a.n(o);const b=u()(r,[["render",l]]);t["default"]=b},a7f7:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),l={class:"container"},n={key:0},i={class:"row"},s={class:"ratio ratio-16x9"},r=["id","src","title"];function o(e,t,a,o,u,b){var d=Object(c["M"])("Chips");return Object(c["E"])(),Object(c["j"])("div",l,[e.isAdmin?(Object(c["E"])(),Object(c["j"])("div",n,[Object(c["o"])(d,{modelValue:u.youtubeList,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.youtubeList=e}),separator:","},null,8,["modelValue"]),Object(c["k"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return b.changeYoutubeList&&b.changeYoutubeList.apply(b,arguments)})}," 儲存 ")])):Object(c["i"])("",!0),Object(c["k"])("div",i,[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["K"])(u.youtubeList,(function(e){return Object(c["E"])(),Object(c["j"])("div",{key:e,class:"col-12 col-lg-6 my-2"},[Object(c["k"])("div",s,[Object(c["k"])("iframe",{id:e.substring(e.length-11),src:"//www.youtube.com/embed/".concat(e.substring(e.length-11),"?autoplay=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&cc_load_policy=0&rel=0"),title:e.substring(e.length-11),allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"1"},null,8,r)])])})),128))])])}var u=a("5530"),b=(a("e9c4"),a("3b43")),d=a("213a"),j=a("5502"),O=void 0,p={name:"VideoGallery",setup:function(){Object(d["c"])({title:"影片"})},data:function(){return{youtubeList:null}},computed:Object(u["a"])({},Object(j["c"])(["isAdmin"])),apollo:{getViewByRoute:{query:b["b"],variables:{route:"/gallery/videos"}}},watch:{getViewByRoute:function(e){console.log(e.content);var t=JSON.parse(e.content);this.youtubeList=Object.assign([],t)}},methods:{changeYoutubeList:function(){O.$apollo.mutate({mutation:b["c"],variables:{details:{contents:JSON.stringify(O.youtubeList),viewId:O.getViewByRoute.id}}})}}},g=a("b9a6"),y=a.n(g);const v=y()(p,[["render",o]]);t["default"]=v},d861:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),l={class:"carousel-indicators"},n=["data-slide-to","data-bs-slide-to"],i={class:"carousel-inner"},s=["src","alt"],r={class:"carousel-caption d-none d-md-block"},o=Object(c["m"])('<div class="carousel-dark" data-v-2eaa0ea4><button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev" data-v-2eaa0ea4><span class="carousel-control-prev-icon" aria-hidden="true" data-v-2eaa0ea4></span><span class="visually-hidden" data-v-2eaa0ea4>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next" data-v-2eaa0ea4><span class="carousel-control-next-icon" aria-hidden="true" data-v-2eaa0ea4></span><span class="visually-hidden" data-v-2eaa0ea4>Next</span></button></div>',1),u=["src","alt"],b={key:0,class:"Content"},d={class:"text-ellipsis-1l"},j={class:"text-ellipsis-2l"};function O(e,t,a,O,p,g){var y=Object(c["M"])("masonry-wall");return Object(c["E"])(),Object(c["j"])(c["b"],null,[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["K"])(e.getCarouselByRoute,(function(t){return Object(c["E"])(),Object(c["j"])("div",{id:"galleryCarousel",key:t.id,class:"swiper carousel slide mySwiper","data-bs-interval":"1500","data-bs-ride":"carousel"},[Object(c["k"])("div",l,[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["K"])(t.images,(function(t,a){return Object(c["E"])(),Object(c["j"])("button",{key:e.generateId(t.title),type:"button","data-bs-target":"#galleryCarousel","data-slide-to":a,"data-bs-slide-to":a,class:Object(c["x"])(0==a?"active":null),"aria-current":"true","aria-label":"Slide 1"},null,10,n)})),128))]),Object(c["k"])("div",i,[(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["K"])(t.images,(function(e,t){return Object(c["E"])(),Object(c["j"])("div",{key:e.imageUrl,class:Object(c["x"])("carousel-item  ".concat(0==t?"active":""))},[Object(c["k"])("img",{src:e.imageUrl,class:"img-fluid",alt:e.alt},null,8,s),Object(c["k"])("div",r,[Object(c["k"])("h3",null,Object(c["Q"])(e.title),1),Object(c["Y"])(Object(c["k"])("p",null,Object(c["Q"])(e.paragraph),513),[[c["V"],e.paragraph]])])],2)})),128))]),o])})),128)),(Object(c["E"])(!0),Object(c["j"])(c["b"],null,Object(c["K"])(e.getMasonryByRoute,(function(e){return Object(c["E"])(),Object(c["j"])("div",{key:e.id},[Object(c["k"])("h1",null,Object(c["Q"])(e.title),1),Object(c["o"])(y,{items:e.images,"ssr-columns":1,"column-width":300,gap:16},{default:Object(c["X"])((function(e){var t=e.item;return[Object(c["k"])("img",{class:"img-fluid",src:t.imageUrl,alt:t.alt},null,8,u),t.title||t.paragraph?(Object(c["E"])(),Object(c["j"])("div",b,[Object(c["k"])("h5",d,Object(c["Q"])(t.title),1),Object(c["k"])("p",j,Object(c["Q"])(t.paragraph),1)])):Object(c["i"])("",!0)]})),_:2},1032,["items"])])})),128))],64)}var p=a("5530"),g=a("3ba3"),y=a("213a"),v=a("7b17"),m=a("5502"),f=a("d1de"),h=a("9a05"),k=Object(c["p"])({name:"TrainingGallery",apollo:{getMasonryByRoute:{query:f["b"],variables:{route:"/gallery/training"}},getCarouselByRoute:{query:h["b"],variables:{route:"/gallery/training"}}},setup:function(){Object(y["c"])({title:"訓練照片"})},computed:Object(p["a"])({},Object(m["c"])({masonries:"getMasonries"})),mounted:function(){var e=document.querySelector("#galleryCarousel");new v["a"](e).cycle()},methods:Object(p["a"])({generateId:g["a"]},Object(m["b"])(["getMasonry"]))}),w=(a("4104"),a("b9a6")),E=a.n(w);const x=E()(k,[["render",O],["__scopeId","data-v-2eaa0ea4"]]);t["default"]=x}}]);
//# sourceMappingURL=gallery.1560aad7.js.map