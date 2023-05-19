import{i as u,q as C,s as B,j as c,r as h,o as s,a as o,e as p,F as f,l as x,b as r,t as l,w as v,m as w,u as U,p as g,N as M,O as E}from"./entry.88acea7e.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";u`
    query GetCarouselByIdQuery($id: ID) {
        getCarouselById(id: $id) {
            id
            route
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;const $=u`
    query GetCarouselByRouteQuery($route: String) {
        getCarouselByRoute(route: $route) {
            id
            route
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;u`
    mutation UpdateCarouselMutation($carousel: CarouselInput) {
        updateCarousel(carousel: $carousel) {
            id
            route
            order
            images {
                imageUrl
                paragraph
                title
                alt
            }
        }
    }
`;const b=["src","alt"],I={key:0,class:"Content"},N={class:"text-ellipsis-1l"},S={class:"text-ellipsis-2l"},T={__name:"training",async setup(k){var i,_;let e,a;const d=C();B(d);const y=(i=([e,a]=c(()=>g(E,{route:"/gallery/training"})),e=await e,a(),e).data.value)==null?void 0:i.getMasonryByRoute;return(_=([e,a]=c(()=>g($,{route:"/gallery/training"})),e=await e,a(),e).data.value)==null||_.getCarouselByRoute,(G,Q)=>{const m=M,R=h("masonry-wall");return s(),o("section",null,[p(m),(s(!0),o(f,null,x(U(y),n=>(s(),o("div",{key:n.id},[r("h1",null,l(n.title),1),p(R,{items:n.images,"ssr-columns":1,"column-width":300,gap:16},{default:v(({item:t})=>[r("img",{class:"img-fluid",src:t.imageUrl,alt:t.alt},null,8,b),t.title||t.paragraph?(s(),o("div",I,[r("h5",N,l(t.title),1),r("p",S,l(t.paragraph),1)])):w("",!0)]),_:2},1032,["items"])]))),128))])}}},D=O(T,[["__scopeId","data-v-24b41d9b"]]);export{D as default};
