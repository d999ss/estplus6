import{g as B,_ as F,a as V,b as W,c as D,d as L}from"./CKBxee-A.js";import{u as S,w as u,a as $,g as i,h as q,c as x,d as a,i as E,b as p,F as N,r as O,o as d,f as P}from"./uDF8xnmj.js";import{u as z,g as H,a as R,b as G}from"./Dtfqm1tf.js";import{u as J,s as K}from"./B_TWXxIm.js";import"./aIEJ1UhE.js";const M=async()=>{const m=z(),e=H` *[_id == "projectsArchive"][0] {
        _id,
        title,
        seo {
            ...,
            ogimage {
                asset-> {
                    url
                }
            }
        },
    }`,{data:o}=await R("projectsArchiveMeta",()=>m.fetch(e));return o},Q={class:"relative z-10"},U={id:"work-container",class:"relative py-5 overflow-hidden"},se={__name:"index",async setup(m){var f,h;let e,o;const y=S().path,t=([e,o]=u(()=>M()),e=await e,o(),e),r=([e,o]=u(()=>B()),e=await e,o(),e),k=G(y),c=([e,o]=u(()=>K()),e=await e,o(),e);$({bodyAttrs:{class:k}}),J((f=t==null?void 0:t.value)==null?void 0:f.seo,(h=t==null?void 0:t.value)==null?void 0:h.title,!1,c==null?void 0:c.value);const l=i(!1),b=n=>{l.value=n},s=i(null),_=i(null);let v=null;return q(()=>{v=new IntersectionObserver(n=>{n.forEach(w=>{w.isIntersecting?s.value&&s.value.$el.classList.remove("active"):s.value&&s.value.$el.classList.add("active")})},{threshold:.1}),_.value&&v.observe(_.value.$el)}),(n,w)=>{const j=W,T=F,I=V,A=D,C=L;return d(),x("div",Q,[a(j,{ref_key:"workFilter",ref:_,onToggle:b},null,512),E("div",U,[a(T,{showIndex:l.value,projects:p(r)},null,8,["showIndex","projects"]),a(I,{showIndex:l.value,projects:p(r)},null,8,["showIndex","projects"]),(d(!0),x(N,null,O(p(r),g=>(d(),P(A,{key:g._id,project:g},null,8,["project"]))),128))]),a(C,{ref_key:"scrollToTop",ref:s},null,512)])}}};export{se as default};
