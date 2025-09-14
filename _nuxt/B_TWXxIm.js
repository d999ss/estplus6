import{a as y,E as D,G as w,u as k}from"./uDF8xnmj.js";import{u as q,g as v,a as x}from"./Dtfqm1tf.js";function C(a,l){const{title:t,titleTemplate:r,...c}=a;return y({title:t,titleTemplate:r,_flatMeta:c},{...l,transform(i){const n=D({...i._flatMeta});return delete i._flatMeta,{...i,meta:n}}})}var E={};const R=E.NUXT_PUBLIC_SITE_URL,b=w("site",{state:()=>({url:R})});function A(a,l,t=null,r){var p,m,o,$,f,_,T,d;const c=k(),i=b(),n=(p=i==null?void 0:i.url)==null?void 0:p.replace(/\/$/,""),u=(m=c==null?void 0:c.path)==null?void 0:m.replace(/^\//,""),M=u==null?void 0:u.replace(/\/$/,""),U=(c==null?void 0:c.name)=="index"?`${n}/`:`${n}/${M}/`;y(()=>({link:[{rel:"canonical",href:U}]}));const h={title:(a==null?void 0:a.ogtitle)||`${l} | ${r==null?void 0:r.siteTitle}`,ogTitle:(a==null?void 0:a.ogtitle)||`${l} | ${r==null?void 0:r.siteTitle}`,description:(a==null?void 0:a.ogdescription)||((o=r==null?void 0:r.seo)==null?void 0:o.ogdescription),ogDescription:(a==null?void 0:a.ogdescription)||(($=r==null?void 0:r.seo)==null?void 0:$.ogdescription),ogImage:a!=null&&a.ogimage?`${(_=(f=a==null?void 0:a.ogimage)==null?void 0:f.asset)==null?void 0:_.url}?w=1200&auto=format`:t?`${(T=t==null?void 0:t.asset)==null?void 0:T.url}?w=1200&auto=format`:(d=r==null?void 0:r.seo)==null?void 0:d.ogimage};C(h)}const B=async()=>{const a=q(),l=v`*[_type == "siteConfig"][0]{
        siteTitle,
        seo {
            ogtitle,
            ogdescription,
            ogimage {
                asset-> {
                    url
                },
            },
        },
    }`,{data:t}=await x("seoSettingsData",()=>a.fetch(l));return t};export{B as s,A as u};
