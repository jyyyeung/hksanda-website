import{i,q as w,x as m,y,j as g,o,a as n,b as t,F as c,l as k,t as s,c as C,w as b,f as d,u as x,p as v,h as T}from"./entry.88acea7e.js";const A=i`
    query getContactsQuery {
        getContacts {
            id
            field
            icon
            to
            content
        }
    }
`;i`
    mutation addContactMutation($contact: ContactInput) {
        addContact(contact: $contact) {
            id
            field
            icon
            to
            content
        }
    }
`;i`
    mutation updateContactMutation($contact: ContactInput) {
        updateContact(contact: $contact) {
            id
            to
            icon
            field
            content
        }
    }
`;const B={class:"container"},M=t("h1",null,"联络我们",-1),N={class:"row justify-content-center"},$={class:"contact col-12 fs-4 col-xl-6"},q=t("h2",null,"香港極拳道武術協會",-1),I={class:"row row-cols-1 row-cols-sm-2"},S={class:"col"},j={class:"col"},E=t("p",null,"請報名前致電或whatsApp有關開班詳情及確認上課時間",-1),F=t("div",{class:"col-12 col-xl-6 d-none d-md-block",style:{height:"50vh",margin:"auto"}},[t("iframe",{id:"facebook-frame",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",allowfullscreen:"true",frameborder:"0",height:"100%",src:"https://www.facebook.com/plugins/page.php?href=www.facebook.com/散打自衛術訓練班-172784523322461&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=936602643635144&height=1000&width=500",style:{border:"none",overflow:"hidden"},title:"facebook-frame",width:"100%"})],-1),D={__name:"contact",async setup(L){var r;let a,l;const _=w(),{localizePage:u}=_;m(()=>{y(()=>{u()})});const{data:h}=([a,l]=g(()=>v(A)),a=await a,l(),a),p=(r=h.value)==null?void 0:r.getContacts;return(Q,V)=>{const f=T;return o(),n("div",B,[M,t("div",N,[t("div",$,[q,t("dl",I,[(o(!0),n(c,null,k(x(p),e=>(o(),n(c,{key:e.id},[t("dt",S,s(e.field),1),t("dd",j,[e.to?(o(),C(f,{key:0,href:e.to,target:"_blank"},{default:b(()=>[d(s(e.content),1)]),_:2},1032,["href"])):(o(),n(c,{key:1},[d(s(e.content),1)],64))])],64))),128))]),E]),F])])}}};export{D as default};
