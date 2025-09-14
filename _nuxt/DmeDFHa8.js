import{s as G,_ as J,c as E,u as K,g as Q,a as ee,b as te}from"./Dtfqm1tf.js";import{o as a,c,i as l,F as O,r as U,e as y,b as s,t as R,k as X,g as $,h as Y,l as ne,p as oe,d as L,n as P,m as le,v as se,f as F,q as ae,u as re,w as A,a as ie}from"./uDF8xnmj.js";import{_ as ce}from"./tvooFiCo.js";import{_ as ue}from"./BxzGoLf5.js";import{_ as de}from"./CDFLHW_L.js";import{u as me,s as fe}from"./B_TWXxIm.js";import"./aIEJ1UhE.js";const pe={class:"font-sans text-lg container-fluid"},_e={class:"col-span-full md:col-span-2"},ge=["innerHTML"],he=["innerHTML"],ve=["innerHTML"],ye={key:0,class:"col-span-full md:col-span-4"},be=["innerHTML"],xe=["innerHTML"],$e={__name:"Intro",props:{project:Object},setup(e){const o=e,r={order:o.project.order,capabilities:o.project.capabilities,natures:o.project.natures},i=G(r);return(u,n)=>{var _,t,d,m;return a(),c("section",pe,[l("div",_e,[l("h1",{innerHTML:(_=e.project)==null?void 0:_.client},null,8,ge),l("h2",{innerHTML:(t=e.project)==null?void 0:t.title},null,8,he),l("div",{innerHTML:(d=e.project)==null?void 0:d.year},null,8,ve)]),e.project.capabilities?(a(),c("div",ye,[l("ul",null,[(a(!0),c(O,null,U((m=e.project)==null?void 0:m.capabilities,f=>(a(),c("li",{key:f._id,innerHTML:f.title},null,8,be))),128))])])):y("",!0),l("div",{class:"mt-16 font-mono text-sm col-span-full",innerHTML:s(i)},null,8,xe)])}}},ke=$e,we={},je={viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=l("path",{d:"M0 0L6 3L0 6V0Z",fill:"currentColor"},null,-1),Ce=[Te];function Le(e,o){return a(),c("svg",je,Ce)}const Fe=J(we,[["render",Le]]),Me={class:"absolute inset-x-0 bottom-0 z-20 p-5 font-mono text-white video-controls bg-gradient-to-t from-black/50 to-transparent transition-colors"},Se={class:"z-10 flex wrap-controls gap-x-5"},He={key:0,class:"hidden md:block"},Pe={__name:"Controls",props:{isAutoplay:Boolean,isPlaying:Boolean,isFullscreen:Boolean,soundOn:Boolean,currentTime:{type:String,required:!0},rawDuration:{type:Number,required:!0},duration:{type:String,required:!0}},emits:["toggleVideo","stopVideo","goFullscreen"],setup(e,{emit:o}){const r=o;return(i,u)=>(a(),c("div",Me,[l("div",Se,[l("button",{onClick:u[0]||(u[0]=n=>r("toggleVideo")),class:"w-[5ch]"},R(e.isPlaying?"PAUSE":"PLAY"),1),l("button",{onClick:u[1]||(u[1]=n=>r("stopVideo"))},R("STOP")),e.duration?(a(),c("div",He,[l("time",null,R(e.currentTime),1),X(" / "),l("time",null,R(e.duration),1)])):y("",!0),l("button",{class:"ml-auto",onClick:u[2]||(u[2]=n=>r("goFullscreen"))},R(e.isFullscreen?"EXIT FULLSCREEN":"FULLSCREEN"),1)])]))}},Ve=Pe;function N(e){if(e){const o=e.play();o!==void 0&&o.then(()=>{}).catch(()=>{})}}function I(e){if(e){const o=e.pause();o!==void 0&&o.then(()=>{}).catch(()=>{})}}function Re(e){e&&(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitEnterFullScreen&&e.webkitEnterFullScreen())}function qe(e){e&&(e.muted=!0)}function ze(e){e&&(e.muted=!1)}const Ie={class:"absolute inset-0 z-20 flex items-center justify-center font-mono text-white uppercase"},Ee=["muted","loop","src"],Oe={__name:"VideoPlayer",props:{image:{type:Object,required:!0},videoUrl:{type:String,required:!0},alt:{type:String,required:!0}},setup(e){var q,V;const o=$(),r=e,i=r.autoplay?r.autoplay:((q=r.media)==null?void 0:q.videoUrl)&&((V=r.media)==null?void 0:V.autoplay),u=$(!1),n=$(i),_=$(i),t=$(null),d=$(null),m=$(null),f=$(0),v=$("0:00"),g=$(!1),h=()=>{var w;g.value=!0,!i&&(t!=null&&t.value)&&((w=t==null?void 0:t.value)!=null&&w.paused?(n.value=!0,N(t==null?void 0:t.value)):(I(t==null?void 0:t.value),n.value=!1))},b=()=>{t!=null&&t.value&&(I(t==null?void 0:t.value),n.value=!1,t.value.currentTime=0,g.value=!1)},x=()=>{_.value=!_.value,t!=null&&t.value&&(t.value.volume===1?qe(t==null?void 0:t.value):ze(t==null?void 0:t.value))},k=()=>{Re(t.value)};let j=null,C=!1;const M=$(null);return Y(()=>{if(t&&(t!=null&&t.value)){if(!i){const w=Math.floor(t.value.duration/60),T=Math.floor(t.value.duration%60),S=T<10?`0${T}`:T;f.value=t.value.duration?t.value.duration:0,m.value=t.value.duration?`${w}:${S}`:"00:00",t.value.addEventListener("timeupdate",()=>{const H=Math.floor(t.value.currentTime/60),p=Math.floor(t.value.currentTime%60),z=p<10?`0${p}`:p;v.value=`${H}:${z}`}),t.value.onended=()=>{n.value=!1,C=!0},t.value.onplay=()=>{C&&(o.value.resetControlsWithoutTransition(),C=!1)},t.value.onpause=()=>{n.value=!1}}j=new IntersectionObserver(w=>{w.forEach(T=>{T.isIntersecting?i&&N(t==null?void 0:t.value):I(t==null?void 0:t.value)})},{threshold:.1}),j.observe(t==null?void 0:t.value)}}),ne(()=>{j&&j.disconnect()}),oe("mediaWrapper",d),(w,T)=>{const S=Fe,H=E,p=Ve;return a(),c("div",{ref_key:"mediaWrapper",ref:d,class:"absolute inset-0 w-full h-full overflow-hidden media-item"},[l("div",{onClick:h,ref_key:"media",ref:M,class:P(["absolute inset-0 z-30 w-full h-full m-auto bg-black cursor-pointer transition-opacity duration-300",{"opacity-100 pointer-events-auto":!s(n)&&!s(g),"opacity-0 pointer-events-none":s(n)||s(g)}])},[l("div",Ie,[L(S,{class:"w-auto h-2.5 mr-2"}),X(" Play Video ")]),L(H,{class:"cover opacity-80",image:e.image,width:"1600",alt:e.alt,mobileWidth:"450"},null,8,["image","alt"])],2),l("video",{onClick:h,ref_key:"video",ref:t,preload:"metadata",muted:s(i),playsinline:"playsinline",loop:s(i),class:"z-10 object-cover w-full h-full pointer-events-none",src:e.videoUrl,type:"video/mp4"},null,8,Ee),le(L(p,{ref_key:"controls",ref:o,onToggleVideo:h,onToggleAudio:x,onGoFullscreen:k,onStopVideo:b,isPlaying:s(n),soundOn:s(_),rawDuration:s(f)?s(f):0,duration:s(m)?s(m):"00:00",currentTime:s(v),isFullscreen:s(u)},null,8,["isPlaying","soundOn","rawDuration","duration","currentTime","isFullscreen"]),[[se,s(n)||s(g)]])],512)}}},Z=Oe,Ue={key:0,class:"relative flex items-center justify-center overflow-hidden media-item aspect-video"},Be=["src"],De={__name:"Hero",props:{alt:String,hero:Object},setup(e){return(o,r)=>{var n,_,t,d,m,f,v,g,h,b,x,k,j,C,M;const i=Z,u=E;return(n=e.hero)!=null&&n.image||(_=e.hero)!=null&&_.video?(a(),c("section",Ue,[(t=e.hero)!=null&&t.video&&!((d=e.hero)!=null&&d.videoPlayer)?(a(),c("video",{key:0,src:(m=e.hero)==null?void 0:m.video,autoplay:"",loop:"",muted:"",playsinline:"",class:P(["pointer-events-none",{cover:(f=e.hero)==null?void 0:f.fullsizeHero,"object-contain w-full h-full p-[3%]":!((v=e.hero)!=null&&v.fullsizeHero)}])},null,10,Be)):y("",!0),(g=e.hero)!=null&&g.video&&((h=e.hero)!=null&&h.videoPlayer)?(a(),F(i,{key:1,videoUrl:(b=e.hero)==null?void 0:b.video,image:(x=e.hero)==null?void 0:x.image,alt:e.alt},null,8,["videoUrl","image","alt"])):y("",!0),(k=e.hero)!=null&&k.video?y("",!0):(a(),F(u,{key:2,class:P({cover:(j=e.hero)==null?void 0:j.fullsizeHero,"object-contain w-full h-full p-[3%]":!((C=e.hero)!=null&&C.fullsizeHero)}),image:(M=e.hero)==null?void 0:M.image,width:"2000",mobileWidth:"450",alt:e.alt},null,8,["class","image","alt"]))])):y("",!0)}}},We=De,Ae={class:"container-fluid"},Ne=["src"],Ge={__name:"Gallery",props:{project:Object,content:Object},setup(e){const o=e,r={"col-span-full md:col-span-1":o.content.grid==="6x6","col-span-full md:col-span-2":o.content.grid==="3x3","col-span-full md:col-span-3":o.content.grid==="2x2","col-span-full":o.content.grid==="1x1"},i={"aspect-video":o.content.format==="video","aspect-square":o.content.format==="square","aspect-vertical":o.content.format==="vertical","aspect-verticalXL":o.content.format==="verticalXL"};return(u,n)=>{const _=E;return a(),c("section",Ae,[(a(!0),c(O,null,U(e.content.gallery,({image:t,video:d})=>{var m,f,v,g,h;return a(),c("div",{class:P(["relative media-item bg-gray-light",r])},[d?(a(),c("video",{key:0,src:d,autoplay:"",loop:"",muted:"",playsinline:"",class:P(["block object-cover w-full h-full pointer-events-none col-span-full",i])},null,8,Ne)):y("",!0),d?y("",!0):(a(),F(_,{key:1,class:P(["block object-cover w-full h-full col-span-full",i]),image:t,width:`${((m=e.content)==null?void 0:m.grid)==="6x6"?"800":((f=e.content)==null?void 0:f.grid)==="3x3"?"1000":((v=e.content)==null?void 0:v.grid)==="2x2"?"1200":"1600"}`,alt:`${(g=e.project)==null?void 0:g.client} ${(h=e.project)==null?void 0:h.title}`,mobileWidth:"450"},null,8,["image","width","alt"]))])}),256))])}}},Xe=Ge,Ye={class:"relative pt-4 overflow-hidden container-fluid pb-[140px]"},Ze={class:"col-span-full md:col-span-2"},Je=["innerHTML"],Ke={class:"font-sans text-lg prose"},Qe=l("h3",{class:"text-lg font-normal"},"Full Case Study",-1),et=["innerHTML"],tt=l("br",null,null,-1),nt=["innerHTML"],ot=l("br",null,null,-1),lt=["innerHTML"],st={class:"col-span-full md:col-span-2"},at={class:"font-sans text-base whitespace-pre-line prose"},rt={class:"relative z-10 text-sm uppercase whitespace-pre-line grid grid-cols-2 col-span-full md:col-span-2 gap-4 prose"},it={__name:"Conclusion",props:{project:Object},setup(e){const o=e,r={order:o.project.order,capabilities:o.project.capabilities,natures:o.project.natures},i=G(r);return(u,n)=>{var t,d,m,f,v,g,h,b,x;const _=ue;return a(),c("section",Ye,[l("article",Ze,[l("div",{class:"pb-4 font-mono text-sm",innerHTML:s(i)},null,8,Je),l("div",Ke,[Qe,l("p",null,[l("span",{innerHTML:(t=e.project)==null?void 0:t.client},null,8,et),tt,l("span",{innerHTML:(d=e.project)==null?void 0:d.title},null,8,nt),ot,l("span",{innerHTML:(m=e.project)==null?void 0:m.year},null,8,lt)])])]),l("article",st,[l("div",at,[(f=e.project)!=null&&f.conclusion?(a(),F(_,{key:0,blocks:(v=e.project)==null?void 0:v.conclusion},null,8,["blocks"])):y("",!0)])]),l("article",rt,[l("div",null,[(g=e.project)!=null&&g.creditsLeft?(a(),F(_,{key:0,blocks:(h=e.project)==null?void 0:h.creditsLeft},null,8,["blocks"])):y("",!0)]),l("div",null,[(b=e.project)!=null&&b.creditsRight?(a(),F(_,{key:0,blocks:(x=e.project)==null?void 0:x.creditsRight},null,8,["blocks"])):y("",!0)])])])}}},ct=it,ut=async e=>{const o=K(),r=Q`*[_type == "project" && !(_id in path("drafts.**")) && slug.current == $projectSlug][0]{
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
      "hero": {
        "image": heroImage {
          asset-> {
            metadata,
            url,
            altText,
            originalFilename
          },
        },
        "video": heroVideo,
        fullsizeHero,
        videoPlayer,
      },
      content[]->{
        ...,
        _type == 'galleryRow' => {
          grid,
          format,
          "gallery": gallery.medias[]{
            image {
              asset->{
                metadata,
                url,
                altText,
                originalFilename
              }
            },
            "video": videoUrl,
          },
        },
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
              }
            }
        },
        _type == 'videoPlayer' => {
          videoUrl,
          image {
            asset->{
              metadata,
              url,
              altText,
              originalFilename
            }
          }
        }
      },
      coverVideo,
      conclusion,
      creditsLeft,
      creditsRight,
    }`,i=`work-${e}`,{data:u}=await ee(i,()=>o.fetch(r,{projectSlug:e}),"$a2ycSDc1T0");if(Object.keys(u.value).length===0)throw ae({statusCode:404,statusMessage:"Page Not Found",fatal:!0});return u},dt={class:"relative z-10 flex flex-col gap-4"},mt={key:2,class:"container-fluid"},ft={class:"relative col-span-full aspect-video"},xt={__name:"[id]",async setup(e){var d,m,f,v;let o,r;const i=re(),u=i.name,n=([o,r]=A(()=>ut(i.params.id)),o=await o,r(),o),_=te(u),t=([o,r]=A(()=>fe()),o=await o,r(),o);return ie({bodyAttrs:{class:_}}),me((d=n==null?void 0:n.value)==null?void 0:d.seo,`${(m=n==null?void 0:n.value)==null?void 0:m.client} ${(f=n==null?void 0:n.value)==null?void 0:f.title}`,(v=n==null?void 0:n.value)==null?void 0:v.featuredImage,t==null?void 0:t.value),Y(()=>{const g=document.querySelectorAll(".media-item"),h=new IntersectionObserver((b,x)=>{b.forEach(k=>{k.isIntersecting&&(k.target.classList.add("active"),x.unobserve(k.target))})},{threshold:.3});g.forEach(b=>{h.observe(b)})}),(g,h)=>{var V,w,T,S,H;const b=ke,x=We,k=Xe,j=ce,C=Z,M=ct,q=de;return a(),c("div",dt,[L(b,{project:s(n)},null,8,["project"]),L(x,{hero:(V=s(n))==null?void 0:V.hero,alt:`${(w=s(n))==null?void 0:w.client} ${(T=s(n))==null?void 0:T.title}`},null,8,["hero","alt"]),(a(!0),c(O,null,U((S=s(n))==null?void 0:S.content,p=>{var z,B,D,W;return a(),c("div",null,[p._type==="galleryRow"?(a(),F(k,{key:0,content:p,project:s(n),alt:`${(z=s(n))==null?void 0:z.client} ${(B=s(n))==null?void 0:B.title}`},null,8,["content","project","alt"])):y("",!0),p._type==="textRow"?(a(),F(j,{key:1,content:p==null?void 0:p.textColumns,image:p==null?void 0:p.image},null,8,["content","image"])):y("",!0),p._type==="videoPlayer"?(a(),c("div",mt,[l("div",ft,[L(C,{videoUrl:p.videoUrl,image:p.image,alt:`${(D=s(n))==null?void 0:D.client} ${(W=s(n))==null?void 0:W.title}`},null,8,["videoUrl","image","alt"])])])):y("",!0)])}),256)),L(M,{project:s(n)},null,8,["project"]),L(q,{slug:(H=s(n))==null?void 0:H.slug},null,8,["slug"])])}}};export{xt as default};
