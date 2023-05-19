import{i,D as O,L as S,q as $,s as A,j as I,r as f,o,a as c,u as n,m as y,e as a,w as b,F as g,l as M,c as F,t as R,p as U,v as T}from"./entry.88acea7e.js";import{_ as r}from"./Markdown.526b6a89.js";import{_ as V}from"./_plugin-vue_export-helper.c27b6911.js";const q=i`
    query getCourseContentsQuery {
        getCourseContents {
            name
            content
            id
        }
    }
`,B=i`
    mutation updateCourseContentMutation($course: CourseContentInput) {
        updateCourseContent(course: $course) {
            id
            name
            content
        }
    }
`,D=i`
    mutation addCourseContentMutation($course: CourseContentInput) {
        addCourseContent(course: $course) {
            name
            content
        }
    }
`;const P=["onClick"],L=0,Q=`

---
如希望自行组班或报名私人班，欢迎浏览[*私人及组班课程*](/course/session)
如有任何疑问，欢迎进行咨询`,j={__name:"content",async setup(G){var p;let s,_;O(!1),S({name:"",contents:""});const l=$(),{getIsAdmin:m}=A(l),{data:v}=([s,_]=I(()=>U(q)),s=await s,_(),s),C=(p=v.value)==null?void 0:p.getCourseContents;console.log(C);const{toggleModel:d}=l;function k(e){T(D,{course:e})}function E(e){console.log(e),T(B,{course:e})}function x(e){const u={content:e,type:"course",submitFunction:E};console.log(u),d(u)}function N(){d({content:{name:"",content:""},type:"course",submitFunction:k})}return(e,u)=>{const w=f("TabPanel"),h=f("TabView");return o(),c(g,null,[n(m)?(o(),c("button",{key:0,class:"btn btn-success",type:"submit",onClick:N}," 添加課堂介紹 ")):y("",!0),a(h,{"active-index":L},{default:b(()=>[(o(!0),c(g,null,M(n(C),t=>(o(),F(w,{key:t.name,header:t.name},{default:b(()=>[a(n(r),{source:"# "+t.name},null,8,["source"]),n(m)?(o(),c("button",{key:0,class:"btn btn-primary",type:"submit",onClick:z=>x(t)}," 編輯 "+R(t.name),9,P)):y("",!0),a(n(r),{source:t.content},null,8,["source"]),a(n(r),{source:Q})]),_:2},1032,["header"]))),128))]),_:1})],64)}}},W=V(j,[["__scopeId","data-v-7e47e658"]]);export{W as default};
