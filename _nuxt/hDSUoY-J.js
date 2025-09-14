import{_ as C}from"./DHm__6Bb.js";import{_ as h}from"./tvooFiCo.js";import{u as b,w as i,a as w,b as s,c as m,d as k,F as v,r as B,e as R,o as n,f as T}from"./uDF8xnmj.js";import{u as A,g as F,a as L,b as q}from"./Dtfqm1tf.js";import{u as N,s as S}from"./B_TWXxIm.js";import"./BxzGoLf5.js";const V=async()=>{const r=A(),t=F`*[_id == "terms"][0] {
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
                    image {
                        asset->{
                            metadata,
                            url,
                            altText,
                            originalFilename
                        }
                    }
                },
            },
        },
    }`,{data:o}=await L("terms",()=>r.fetch(t));return o},j={key:0},K={__name:"terms",async setup(r){var c,u;let t,o;const p=b().path,d=q(p),e=([t,o]=i(()=>V()),t=await t,o(),t),a=([t,o]=i(()=>S()),t=await t,o(),t);return w({bodyAttrs:{class:d}}),N((c=e==null?void 0:e.value)==null?void 0:c.seo,(u=e==null?void 0:e.value)==null?void 0:u.title,!1,a==null?void 0:a.value),(H,M)=>{var l,_;const x=C,y=h;return s(e)?(n(),m("div",j,[k(x,{title:(l=s(e))==null?void 0:l.title},null,8,["title"]),(n(!0),m(v,null,B((_=s(e))==null?void 0:_.content,({textColumns:g,image:f})=>(n(),T(y,{content:g,image:f},null,8,["content","image"]))),256))])):R("",!0)}}};export{K as default};
