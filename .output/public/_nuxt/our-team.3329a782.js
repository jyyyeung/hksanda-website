import{i as l,j as C,q as j,s as F,r as $,o as n,a as s,u as a,m as p,b as c,F as m,l as _,t as r,c as T,e as V,p as w,v as y}from"./entry.88acea7e.js";const P=l`
    query GetInstructorsQuery {
        getInstructors {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`,Q=l`
    mutation updateInstructorMutation($instructor: InstructorInput) {
        updateInstructor(instructor: $instructor) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`,K=l`
    mutation addInstructorMutation($instructor: InstructorInput) {
        addInstructor(instructor: $instructor) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`,L=l`
    mutation removeInstructorMutation($instructorId: ID) {
        removeInstructor(instructorId: $instructorId) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`,z=l`
    query GetRankingsQuery {
        getRankings {
            id
            name
            awardees
        }
    }
`;l`
    mutation updateRankMutation($details: RankInput) {
        updateRanking(details: $details) {
            id
            name
            awardees
        }
    }
`;const H={class:"container"},J=c("h1",null,"專業教練團隊",-1),W={class:"row"},X={class:"card"},Y={class:"card-body"},Z={class:"card-title"},D={class:"card-subtitle mb-2 text-muted"},ee={key:0,class:"card-footer"},te=c("hr",null,null,-1),ne=c("h1",null,"持有認可實用自衛散打段位證書",-1),se=["onClick"],oe={class:"row"},re={__name:"our-team",async setup(ce){var k,v,x;let i,g;const N=(v=(k=([i,g]=C(()=>w(P)),i=await i,g(),i).data)==null?void 0:k.value)==null?void 0:v.getInstructors,{data:f}=([i,g]=C(()=>w(z)),i=await i,g(),i),M=(x=f==null?void 0:f.value)==null?void 0:x.getRankings,h=j(),{getIsAdmin:d}=F(h),{toggleModel:I}=h;function S(e){console.log("remove: ",e),y(L,{instructorId:e.id})}function A(e){console.log("edit: ",e);const u={content:{...e,certificates:e.certificates?e.certificates.join(`
`):"",experiences:e.experiences?e.experiences.join(`
`):""},submitFunction:b,type:"instructor"};I(u)}function B(){I({content:{name:"",strengths:"",certificates:null,experiences:null},submitFunction:b,type:"instructor"})}function E(e){console.log("new instructor",e),y(K,{instructor:{...e,certificates:e.certificates!=null?e.certificates.split(`
`):"",experiences:e.experiences!=null?e.experiences.split(`
`):""}})}function q(e){console.log("update instructor",e),y(Q,{instructor:{...e,certificates:e.certificates!=null?e.certificates.split(`
`):"",experiences:e.experiences!=null?e.experiences.split(`
`):""}})}function b(e){console.log(e),e.instructorId?q(e):E(e)}function G(e,u){this.$confirm.require({target:e.currentTarget,message:`你确定要删除 ${u.name} 吗？`,icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{S(u),this.$toast.add({severity:"info",summary:"成功",detail:`已成功删除 ${u.name}`,life:3e3})},reject:()=>{}})}return(e,u)=>{const R=$("Button"),O=$("ConfirmPopup");return n(),s("div",H,[J,a(d)?(n(),s("button",{key:0,class:"btn btn-success",type:"submit",onClick:B}," 添加教练 ")):p("",!0),c("div",W,[(n(!0),s(m,null,_(a(N),t=>(n(),s("div",{key:t.id,class:"col-lg-6 my-2"},[c("div",X,[c("div",Y,[c("h2",Z,r(t.name),1),c("h5",D,r(t.strengths),1),(n(!0),s(m,null,_(t.certificates,(o,U)=>(n(),s("p",{key:o+U,class:"card-text"},r(o),1))),128))]),t.experiences||a(d)?(n(),s("div",ee,[(n(!0),s(m,null,_(t.experiences,o=>(n(),s("p",{key:t.id+o},r(o),1))),128)),a(d)?(n(),T(R,{key:0,label:`編輯 ${t.name}`,class:"p-button-primary p-button-sm",type:"submit",onClick:o=>A(t)},null,8,["label","onClick"])):p("",!0),V(O),a(d)?(n(),T(R,{key:1,class:"p-button-danger p-button-outlined p-button-sm ml-2",icon:"pi pi-times",label:"删除",onClick:o=>G(o,t)},null,8,["onClick"])):p("",!0)])):p("",!0)])]))),128))]),te,ne,(n(!0),s(m,null,_(a(M),t=>(n(),s("div",{key:t.name},[c("h2",null,r(t.name),1),a(d)?(n(),s("button",{key:0,class:"btn btn-success",type:"submit",onClick:o=>e.modify(t)}," 编辑 "+r(t.name)+" 学员 ",9,se)):p("",!0),c("div",oe,[(n(!0),s(m,null,_(t.awardees,o=>(n(),s("div",{key:o,class:"tag m-2 rank_tag"},r(o),1))),128))])]))),128))])}}};export{re as default};
