import{i as g,j as f,r,o as t,a as n,e as _,w as s,f as d,t as o,u as m,k,F as p,l as b,m as i,c as x,b as B,p as C}from"./entry.88acea7e.js";g`
    mutation addInterviewMutation($files: [Upload]) {
        addInterview(interview: interviewInput) {
            company
            id
            publishedDate
            images {
                imageUrl
                alt
            }
            title
            url
        }
    }
`;const N=g`
    query getInterviewsQuery {
        getInterviews {
            id
            company
            title
            images {
                imageUrl
                alt
            }
            url
            publishedDate
        }
    }
`;const T=B("h1",null,"傳媒專訪",-1),U={key:0},V=["alt","src"],D={key:1},L={__name:"media-interviews",async setup(E){var u;let a,c;const{data:v}=([a,c]=f(()=>C(N)),a=await a,c(),a),y=(u=v.value)==null?void 0:u.getInterviews;return(q,A)=>{const w=r("Button"),h=r("Card"),I=r("Timeline");return t(),n(p,null,[T,_(I,{value:m(y),align:"left"},{content:s(({item:e})=>[_(h,null,{title:s(()=>[d(o(e.title)+" - "+o(e.company),1)]),subtitle:s(()=>[d(o(m(k)(e.publishedDate).format("L")),1)]),content:s(()=>[e.images.length>0?(t(),n("div",U,[(t(!0),n(p,null,b(e.images,l=>(t(),n("img",{key:l.imageUrl,alt:l.alt,src:l.imageUrl,class:"img-fluid"},null,8,V))),128))])):i("",!0),e.content?(t(),n("p",D,o(e.content),1)):i("",!0),e.url?(t(),x(w,{key:2,class:"p-button-text",label:"Read more"})):i("",!0)]),_:2},1024)]),_:1},8,["value"])],64)}}};export{L as default};
