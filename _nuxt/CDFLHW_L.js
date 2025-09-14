import{_ as z,f as A,c as D,d as E,u as W,g as O,a as X}from"./Dtfqm1tf.js";import{o as s,c as r,i as a,e as d,f as B,n as F,b as H,w as K,g as Z,h as G,d as _,F as J,r as Q,s as U,x as Y}from"./uDF8xnmj.js";import{S as ee}from"./aIEJ1UhE.js";const te={},ae={viewBox:"0 0 7 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},se=a("path",{d:"M3.20641 5L4.70641 3.45C4.87641 3.27 5.10641 3.07 5.29641 2.89C4.87641 2.9 4.67641 2.9 4.47641 2.9L0.486406 2.9L0.486406 2.1L4.47641 2.1C4.67641 2.1 4.86641 2.1 5.29641 2.11C5.10641 1.93 4.87641 1.7 4.69641 1.52L3.20641 0L4.34641 0L6.68641 2.5L4.34641 5L3.20641 5Z",fill:"currentColor"},null,-1),oe=[se];function re(e,t){return s(),r("svg",ae,oe)}const ce=z(te,[["render",re]]),ne={class:"relative flex gap-4"},ie=["src","poster"],le={class:"flex flex-col flex-1 uppercase gap-4 max-w-56 md:max-w-xs text-pretty"},ue=["innerHTML"],de=["innerHTML"],pe={__name:"Related",props:{project:Object},setup(e){const t=e,o={"aspect-video":t.project.thumbnail.format==="horizontal","aspect-square":t.project.thumbnail.format==="square","aspect-vertical":t.project.thumbnail.format==="vertical","aspect-verticalXL":t.project.thumbnail.format==="verticalXL"},c={order:t.project.order,client:t.project.client,capabilities:t.project.capabilities,nature:t.project.nature,locations:t.project.locations,year:t.project.year},n=A(c);return(p,m)=>{var i,l,u,g,v,j,x,b,w,y,k,$,L,R,C,I,S,V,T,P,q,M;const f=D,h=E;return s(),r("article",ne,[a("div",{class:F(["relative w-auto h-32",o])},[(i=e.project)!=null&&i.featuredVideo?(s(),r("video",{key:0,src:(l=e.project)==null?void 0:l.featuredVideo,autoplay:"",loop:"",muted:"",playsinline:"",class:"pointer-events-none cover bg-gray",poster:(v=(g=(u=e.project)==null?void 0:u.featuredImage)==null?void 0:g.asset)==null?void 0:v.url},null,8,ie)):d("",!0),(j=e.project)!=null&&j.featuredVideo?d("",!0):(s(),B(f,{key:1,class:"cover bg-gray",image:(x=e.project)==null?void 0:x.featuredImage,width:"400",mobileWidth:"400",alt:`${(b=e.project)==null?void 0:b.client} ${(w=e.project)==null?void 0:w.title}`},null,8,["image","alt"]))]),a("div",le,[a("div",{innerHTML:H(n)},null,8,ue),(k=(y=e.project)==null?void 0:y.status)!=null&&k.statusText?(s(),r("label",{key:0,class:F([{"text-blue":(L=($=e.project)==null?void 0:$.status)==null?void 0:L.isPublic,"opacity-30":!((C=(R=e.project)==null?void 0:R.status)!=null&&C.isPublic)}]),innerHTML:(S=(I=e.project)==null?void 0:I.status)==null?void 0:S.statusText},null,10,de)):d("",!0)]),(T=(V=e.project)==null?void 0:V.status)!=null&&T.isPublic?(s(),B(h,{key:0,"aria-label":`View ${(P=e.project)==null?void 0:P.client} ${(q=e.project)==null?void 0:q.title} project`,class:"inset",to:`/work/${(M=e.project)==null?void 0:M.slug}`},null,8,["aria-label","to"])):d("",!0)])}}},_e=pe,me=async e=>{const t=W();let o='[_type == "project" && isPublic == true && !(_id in path("drafts.**"))][0...9]|order(orderRank asc)';e!==void 0&&(o=`[_type == "project" && isPublic == true && slug.current != "${e}" && !(_id in path("drafts.**"))][0...9]|order(orderRank asc)`);const c=O`*${o}{
      _id,
      "order": count(*[_type == "project" && orderRank > ^.orderRank]) + 1,
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
      "status": {
        statusText,
        isPublic,
      },
      featuredVideo,
      featuredImage {
        asset-> {
          metadata,
          url,
          altText,
          originalFilename
        }
      },
      "thumbnail": {
        "format": tFormat,
        "size": tSize,
      },
      "client": client->title,
      capabilities[]->{
        title,
        "slug": slug.current,
        code,
      },
      nature->{
        title,
        "slug": slug.current,
        code,
      },
      locations[]->{
        title,
        "slug": slug.current,
        code,
      },
      "year": years->title,
      coverImages[]{
        asset-> {
          metadata,
          url,
          altText,
          originalFilename
        },
      },
      coverVideo,
    }`,{data:n}=await X("projects",()=>t.fetch(c));return n},N=e=>(U("data-v-b5d0e444"),e=e(),Y(),e),fe={class:"relative pt-8 overflow-x-hidden text-black container-fluid bg-gray-light pb-30"},he=N(()=>a("div",{class:"col-span-3"},[a("h4",null,"WORK")],-1)),ge={class:"flex items-center justify-end related-nav col-span-3 gap-2"},ve={class:"relative inset-0 w-2 p-0 m-0 h-fit button-prev after:hidden"},je=N(()=>a("div",{class:"w-2 bg-black aspect-square"},null,-1)),xe={class:"relative inset-0 w-2 p-0 m-0 h-fit button-next after:hidden"},be={class:"swiper-wrapper"},we={class:"swiper-slide"},ye={__name:"Related",props:{slug:{type:String,required:!1}},async setup(e){let t,o;const c=e,n=([t,o]=K(()=>me(c.slug)),t=await t,o(),t),p=Z(null);G(()=>{m()});const m=()=>{new ee(p.value,{slidesPerView:"auto",spaceBetween:60,navigation:{nextEl:".related-nav .button-next",prevEl:".related-nav .button-prev"}})};return(f,h)=>{const i=ce,l=_e;return s(),r("section",fe,[he,a("div",ge,[a("div",ve,[_(i,{class:"w-2 h-auto text-black rotate-180"})]),je,a("div",xe,[_(i,{class:"w-2 h-auto text-black"})])]),a("div",{ref_key:"swiperRelated",ref:p,class:"swiper-related col-span-full"},[a("div",be,[(s(!0),r(J,null,Q(H(n),u=>(s(),r("div",we,[_(l,{project:u},null,8,["project"])]))),256))])],512)])}}},Re=z(ye,[["__scopeId","data-v-b5d0e444"]]);export{Re as _};
