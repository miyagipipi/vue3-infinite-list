import{I as m,C as c,a as u}from"./CtrlBar.a9284327.js";import{_ as p}from"./main.8b6bdefc.js";import{d as _,j as f,r as a,o as v,c as g,e as n,b as s,w as b,F as C,t as r}from"./vendor.eefaf204.js";const h=_({name:"Demo7",components:{InfiniteList:m,CtrlBar:c},setup(){const e=f(!1),t=u.generateData(1e5);return{debug:e,data:t}}}),B={class:"vl-con"},D={class:"li-con"};function I(e,t,V,k,$,w){const i=a("CtrlBar"),d=a("InfiniteList");return v(),g(C,null,[n(i,{modelValue:e.debug,"onUpdate:modelValue":t[0]||(t[0]=o=>e.debug=o),link:"https://github.com/tnfe/vue-infinite-list/blob/master/demo/components/demo/Demo7.vue"},null,8,["modelValue","link"]),s("div",B,[n(d,{overscanCount:2,data:e.data,width:"100%",height:500,itemSize:50,debug:e.debug},{default:b(({item:o,index:l})=>[s("div",D,r(l+1)+" : "+r(o),1)]),_:1},8,["data","debug"])])],64)}var F=p(h,[["render",I],["__scopeId","data-v-07a9cdfc"]]);export{F as default};
