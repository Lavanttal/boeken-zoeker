(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a4cf84a"],{"2c2c":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o["g"])("BoekenZoeker - Boekenplank"),l=Object(o["g"])("Mijn boekenplank"),a={key:0},r={style:{margin:"10px"}},i={key:0},u={key:1},s=Object(o["g"])(" Door "),b=Object(o["g"])("Koop / meer informatie"),O=Object(o["g"])("Status"),j=Object(o["g"])("Gelezen"),f=Object(o["g"])("Nog niet gelezen"),h=Object(o["g"])("Aan het lezen"),d={class:"trash"},g=Object(o["h"])("br",null,null,-1);function p(e,t,n,p,m,x){var v=this,y=Object(o["x"])("ion-title"),I=Object(o["x"])("ion-toolbar"),D=Object(o["x"])("ion-header"),S=Object(o["x"])("ion-card-title"),k=Object(o["x"])("ion-card-subtitle"),_=Object(o["x"])("ion-card-header"),w=Object(o["x"])("ion-button"),z=Object(o["x"])("ion-label"),J=Object(o["x"])("ion-select-option"),N=Object(o["x"])("ion-select"),A=Object(o["x"])("ion-item"),T=Object(o["x"])("ion-icon"),q=Object(o["x"])("ion-card"),C=Object(o["x"])("ion-list"),M=Object(o["x"])("ion-content"),B=Object(o["x"])("ion-page");return Object(o["q"])(),Object(o["e"])(B,null,{default:Object(o["D"])((function(){return[Object(o["h"])(D,null,{default:Object(o["D"])((function(){return[Object(o["h"])(I,null,{default:Object(o["D"])((function(){return[Object(o["h"])(y,null,{default:Object(o["D"])((function(){return[c]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(M,{fullscreen:!0},{default:Object(o["D"])((function(){return[Object(o["h"])(D,{collapse:"condense"},{default:Object(o["D"])((function(){return[Object(o["h"])(I,null,{default:Object(o["D"])((function(){return[Object(o["h"])(y,{size:"large"},{default:Object(o["D"])((function(){return[l]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(C,null,{default:Object(o["D"])((function(){return[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(m.list,(function(n,c){return Object(o["q"])(),Object(o["e"])(q,{shape:"round",key:c,onItemadded:v.getItems},{default:Object(o["D"])((function(){return[n.title?Object(o["f"])("",!0):(Object(o["q"])(),Object(o["e"])("span",a,"Geen auteur(s) bekend")),Object(o["h"])("h4",r,"Boek "+Object(o["z"])(c+1),1),Object(o["h"])(_,null,{default:Object(o["D"])((function(){return[Object(o["h"])(S,null,{default:Object(o["D"])((function(){return[Object(o["g"])(Object(o["z"])(n.title),1)]})),_:2},1024),n.authors?(Object(o["q"])(),Object(o["e"])("span",u,[s,(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(n.authors,(function(t){return Object(o["q"])(),Object(o["e"])("span",{key:t},[Object(o["h"])("em",null,Object(o["z"])(e.index+1!==n.authors.length&&e.index+1!==n.authors.length-1?t:e.index+1==e.book.items.authors.length&&e.index+1!==1?" and "+t:t),1)])})),128))])):(Object(o["q"])(),Object(o["e"])("span",i,"Geen auteur(s) bekend")),Object(o["h"])(k,null,{default:Object(o["D"])((function(){return[Object(o["g"])(" Pagina's: "+Object(o["z"])(n.pageCount),1)]})),_:2},1024),Object(o["h"])(k,null,{default:Object(o["D"])((function(){return[Object(o["g"])(" Taal: "+Object(o["z"])(n.language),1)]})),_:2},1024),Object(o["h"])(k,null,{default:Object(o["D"])((function(){return[Object(o["g"])(" Book/E-book: "+Object(o["z"])(n.printType),1)]})),_:2},1024)]})),_:2},1024),Object(o["h"])("a",{href:n.previewLink},[Object(o["h"])(w,{style:{margin:"10px"},shape:"round",fill:"outline"},{default:Object(o["D"])((function(){return[b]})),_:1})],8,["href"]),Object(o["h"])(A,null,{default:Object(o["D"])((function(){return[Object(o["h"])(z,null,{default:Object(o["D"])((function(){return[O]})),_:1}),Object(o["h"])(N,{onIonChange:x.store,modelValue:e.options,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.options=t}),placeholder:v.myArray[c]},{default:Object(o["D"])((function(){return[Object(o["h"])(J,{value:"Gelezen"},{default:Object(o["D"])((function(){return[j]})),_:1}),Object(o["h"])(J,{value:"Nog niet gelezen"},{default:Object(o["D"])((function(){return[f]})),_:1}),Object(o["h"])(J,{value:"Momenteel aan het lezen"},{default:Object(o["D"])((function(){return[h]})),_:1})]})),_:2},1032,["onIonChange","modelValue","placeholder"])]})),_:2},1024),Object(o["h"])("div",d,[Object(o["h"])(T,{icon:m.trashOutline,onClick:x.removeItem,style:{"margin-top":"9px","margin-right":"10px",position:"absolute",top:"0px",right:"0px","font-size":"30px"}},null,8,["icon","onClick"])]),g]})),_:2},1032,["onItemadded"])})),128))]})),_:1})]})),_:1})]})),_:1})}n("a434");var m=n("8a30"),x=n("ff79"),v={data:function(){return{selected:"",list:[],listTwo:[],savedName:[],showDefault:!0,interval:null,imageUrl:"",trashOutline:x["t"]}},created:function(){this.interval=setInterval(this.getItems,3e3)},beforeUnmount:function(){clearInterval(this.interval)},mounted:function(){this.getItems(),localStorage.options&&(this.savedName=localStorage.options),this.myArray=[];var e=localStorage.getItem(["options"]);if(e){var t=JSON.parse(e);this.myArray=t}},methods:{store:function(e){var t=e.detail.value;console.log(this.myArray),console.log("hallo"),this.myArray.push(t),localStorage.setItem("options",JSON.stringify(this.myArray)),console.log("test"+this.myArray)},removeItem:function(e){var t=localStorage.getItem("items"),n=localStorage.getItem("options"),o=JSON.parse(t),c=JSON.parse(n);o.splice(e,1),c.splice(e,1),localStorage.setItem("items",JSON.stringify(o)),localStorage.setItem("options",JSON.stringify(c)),this.getItems()},getItems:function(){var e=localStorage.getItem(["items"]);if(console.log("storedData: ",JSON.parse(e)),e){var t=JSON.parse(e);this.list=t,console.log("JA")}else this.list=[];var n=localStorage.getItem("options");if(console.log("storedData2: ",JSON.parse(n)),n){var o=JSON.parse(e);this.listTwo=o,console.log("JA status"+this.listTwo)}else this.listTwo=[]}},name:"tab3",components:{IonHeader:m["d"],IonToolbar:m["s"],IonList:m["i"],IonTitle:m["r"],IonContent:m["c"],IonPage:m["j"]}};v.render=p;t["default"]=v},a434:function(e,t,n){"use strict";var o=n("23e7"),c=n("23cb"),l=n("a691"),a=n("50c4"),r=n("7b0b"),i=n("65f0"),u=n("8418"),s=n("1dde"),b=n("ae40"),O=s("splice"),j=b("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,d=9007199254740991,g="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!O||!j},{splice:function(e,t){var n,o,s,b,O,j,p=r(this),m=a(p.length),x=c(e,m),v=arguments.length;if(0===v?n=o=0:1===v?(n=0,o=m-x):(n=v-2,o=h(f(l(t),0),m-x)),m+n-o>d)throw TypeError(g);for(s=i(p,o),b=0;b<o;b++)O=x+b,O in p&&u(s,b,p[O]);if(s.length=o,n<o){for(b=x;b<m-o;b++)O=b+o,j=b+n,O in p?p[j]=p[O]:delete p[j];for(b=m;b>m-o+n;b--)delete p[b-1]}else if(n>o)for(b=m-o;b>x;b--)O=b+o-1,j=b+n-1,O in p?p[j]=p[O]:delete p[j];for(b=0;b<n;b++)p[b+x]=arguments[b+2];return p.length=m-o+n,s}})}}]);
//# sourceMappingURL=chunk-7a4cf84a.782e0491.js.map