import{_ as h}from"./DHm__6Bb.js";import{_ as w}from"./tvooFiCo.js";import{_ as k}from"./CDFLHW_L.js";import{u as R,w as l,a as v,b as a,c as i,d as p,F as A,r as B,e as F,o as s,f as L}from"./uDF8xnmj.js";import{u as T,g as q,a as N,b as S}from"./Dtfqm1tf.js";import{u as V,s as j}from"./B_TWXxIm.js";import"./BxzGoLf5.js";import"./aIEJ1UhE.js";const E=async()=>{const r=T(),t=q`*[_id == "about"][0] {
        _id,
        title,
        "slug": slug.current,
        seo {
            ...,
            ogimage {
                asset-> {
                    url
                }
            }
        },
        content[]->{
            ...,
            _type == 'textRow' => {
                _type == 'textColumn' => {
                    _type == 'textLarge' => {
                        title,
                        text,
                    },
                    _type == 'textRegular' => {
                        text,
                    },
                    _type == 'textMono' => {
                        textLeft,
                        textRgith,
                    },
                },
                image {
                    asset->{
                        metadata,
                        url,
                        altText,
                        originalFilename
                    },
                },
            },
        },
    }`,{data:o}=await N("about",()=>r.fetch(t));return o},H={key:0},U={__name:"about",async setup(r){var c,_;let t,o;const d=R().path,x=S(d),e=([t,o]=l(()=>E()),t=await t,o(),t),n=([t,o]=l(()=>j()),t=await t,o(),t);return v({bodyAttrs:{class:x}}),V((c=e==null?void 0:e.value)==null?void 0:c.seo,(_=e==null?void 0:e.value)==null?void 0:_.title,!1,n==null?void 0:n.value),(O,W)=>{var u,m;const y=h,g=w,f=k;return a(e)?(s(),i("div",H,[p(y,{title:(u=a(e))==null?void 0:u.title},null,8,["title"]),(s(!0),i(A,null,B((m=a(e))==null?void 0:m.content,({textColumns:C,image:b})=>(s(),L(g,{content:C,image:b},null,8,["content","image"]))),256)),p(f)])):F("",!0)}}};export{U as default};
