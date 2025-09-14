import{g as L,_ as B,a as V,b as S,c as W,d as A}from"./CKBxee-A.js";import{u as U,w as u,g as p,a as $,h as q,c as h,d as l,i as D,b as a,F as E,r as H,o as d,f as N}from"./uDF8xnmj.js";import{u as O,g as z,a as M,b as P}from"./Dtfqm1tf.js";import{u as R,s as G}from"./B_TWXxIm.js";import"./aIEJ1UhE.js";const J=async()=>{const m=O(),e=z`*[_id == "homepage"][0] {
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
  content[]{
    ...,
    _type=='block' => {
      markDefs [] {
            ...,
            _type == "link" => {
              title,
              isInternalLink,
              "internalLink": internalLink->{
                _id,
                _type,
                "slug": slug.current,
              },
              "externalUrl": externalUrl
            }
          }
    },
    _type == 'media' => {
      videoUrl,
      videoId,
      fullScreen,
      isVideo,
      autoplay,
      caption,
      videoType,
      image {
        asset->{
          metadata,
          url,
          altText,
          originalFilename
        }
      }
    },
    _type == 'gallery' => {
      "images": images[]{
        asset->{
          metadata,
          url,
          altText,
          originalFilename
        }
      },
    },
  },
}`,{data:t}=await M("homepage",()=>m.fetch(e));return t},K={class:"relative z-10"},Q={id:"work-container",class:"relative py-5 overflow-hidden"},se={__name:"index",async setup(m){var v,f;let e,t;const w=U().path,x=P(w),o=([e,t]=u(()=>J()),e=await e,t(),e),r=([e,t]=u(()=>L()),e=await e,t(),e),c=([e,t]=u(()=>G()),e=await e,t(),e),i=p(!1),b=n=>{i.value=n};$({bodyAttrs:{class:x}}),R((v=o==null?void 0:o.value)==null?void 0:v.seo,(f=o==null?void 0:o.value)==null?void 0:f.title,!1,c==null?void 0:c.value);const s=p(null),_=p(null);let g=null;return q(()=>{g=new IntersectionObserver(n=>{n.forEach(y=>{y.isIntersecting?s.value&&s.value.$el.classList.remove("active"):s.value&&s.value.$el.classList.add("active")})},{threshold:.1}),_.value&&g.observe(_.value.$el)}),(n,y)=>{const T=S,I=B,j=V,F=W,C=A;return d(),h("div",K,[l(T,{ref_key:"workFilter",ref:_,onToggle:b},null,512),D("div",Q,[l(I,{showIndex:a(i),projects:a(r)},null,8,["showIndex","projects"]),l(j,{showIndex:a(i),projects:a(r)},null,8,["showIndex","projects"]),(d(!0),h(E,null,H(a(r),k=>(d(),N(F,{key:k._id,project:k},null,8,["project"]))),128))]),l(C,{ref_key:"scrollToTop",ref:s},null,512)])}}};export{se as default};
