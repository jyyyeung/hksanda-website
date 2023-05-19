import{r as S,o as n,a as i,b as e,t as l,F as y,m as u,c as h,e as q,J as x,K as D,i as _,q as E,s as F,j as L,u as p,l as T,p as V,v as b}from"./entry.88e81619.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";const f=s=>(x("data-v-4f1db7dc"),s=s(),D(),s),w={class:"class my-4 col-12 col-lg-6 class__info"},N={class:"h3"},P={class:"row h5"},G=f(()=>e("dt",{class:"col-3"},"教室",-1)),O={class:"col-9"},R=f(()=>e("dt",{class:"col-3"},"时间：",-1)),J={class:"col-9"},K=f(()=>e("dt",{class:"col-3"},"對象",-1)),U={class:"col-9"},z=f(()=>e("dt",{class:"col-3"},"地点",-1)),H={class:"col-9"},W={__name:"ClassInfoCard",props:{session:{type:Object,default:()=>({title:"",type:"",students:null,location:null,mapQuery:null,classroom:null})},edit:{type:Function,required:!0},remove:{type:Function,required:!0},isAdmin:Boolean},setup(s){const a=s;function r(c,o){this.$confirm.require({target:c.currentTarget,message:"你确定要删除吗？",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{a.remove(o),this.$toast.add({severity:"info",summary:"成功",detail:"已成功删除",life:3e3})},reject:()=>{}})}return(c,o)=>{const m=S("Button"),C=S("ConfirmPopup");return n(),i("span",w,[e("h3",N,l(s.session.title)+" （"+l(s.session.type)+"）",1),e("dl",P,[s.session.classroom?(n(),i(y,{key:0},[G,e("dd",O,"（"+l(s.session.classroom)+"）上课",1)],64)):u("",!0),R,e("dd",J,"逢"+l(s.session.time),1),K,e("dd",U,l(s.session.students),1),s.session.location?(n(),i(y,{key:1},[z,e("dd",H,l(s.session.location),1)],64)):u("",!0)]),s.isAdmin?(n(),h(m,{key:0,label:`編輯 ${s.session.type}`,class:"p-button-primary p-button-sm",type:"submit",onClick:o[0]||(o[0]=d=>s.edit(s.session))},null,8,["label"])):u("",!0),q(C),s.isAdmin?(n(),h(m,{key:1,class:"p-button-danger p-button-outlined p-button-sm ml-2",icon:"pi pi-times",label:"删除",onClick:o[1]||(o[1]=d=>r(d,s.session))})):u("",!0)])}}},X=j(W,[["__scopeId","data-v-4f1db7dc"]]),Y=_`
    query GetClassesQuery {
        getClasses {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`,Z=_`
    mutation updateClassMutation($details: ClassInput) {
        updateClass(details: $details) {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`,ss=_`
    mutation addClassMutation($details: ClassInput) {
        addClass(details: $details) {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`,ts=_`
    mutation removeClassMutation($classId: ID) {
        removeClass(classId: $classId) {
            id
            title
            type
            classroom
            time
            students
            location
            mapQuery
        }
    }
`,es=e("h1",null,"常規課程及地點",-1),os={class:"container"},ns={class:"row"},is={__name:"class",async setup(s){var v;let a,r;const c=E(),{getIsAdmin:o}=F(c),{data:m}=([a,r]=L(()=>V(Y)),a=await a,r(),a),C=(v=m.value)==null?void 0:v.getClasses,{toggleModel:d}=c;function $(t){console.log("remove: ",t),b(ts,{classId:t.id})}function k(t){console.log("edit: ",t),d({content:t,submitFunction:g,type:"class"})}function A(){d({content:{title:"",type:"",students:null,location:null,mapQuery:null,classroom:null},submitFunction:g,type:"class"})}function Q(t){b(ss,{details:t})}function B(t){console.log(t),b(Z,{details:t})}function g(t){console.log(t),t.classId?B(t):Q(t)}return(t,M)=>(n(),i(y,null,[es,p(o)?(n(),i("button",{key:0,class:"btn btn-success",type:"submit",onClick:A}," 添加課堂 ")):u("",!0),e("div",os,[e("div",ns,[(n(!0),i(y,null,T(p(C),I=>(n(),h(p(X),{key:I.id,edit:k,"is-admin":p(o),remove:$,session:I},null,8,["is-admin","session"]))),128))])])],64))}};export{is as default};
