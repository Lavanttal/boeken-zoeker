(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc9f4"],{"4f5a":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),l=Object(o["g"])("BoekenZoeker"),c=Object(o["g"])("Home"),r=Object(o["g"])("Meest verkochte boek vandaag:"),u=Object(o["h"])("br",null,null,-1),s=Object(o["h"])("br",null,null,-1),b=Object(o["g"])("Koop"),a=Object(o["h"])("br",null,null,-1),i=Object(o["h"])("br",null,null,-1),j=Object(o["g"])("Deel op Twitter"),h=Object(o["g"])("Quote van de dag"),O=Object(o["h"])("p",null,"Geleverd door: They Said So",-1),d=Object(o["g"])("Deel op Twitter");function f(e,t,n,f,g,m){var p=this,S=Object(o["x"])("ion-title"),_=Object(o["x"])("ion-toolbar"),D=Object(o["x"])("ion-header"),k=Object(o["x"])("ion-item"),v=Object(o["x"])("ion-card-title"),x=Object(o["x"])("ion-button"),q=Object(o["x"])("ion-card-header"),I=Object(o["x"])("ion-card-content"),w=Object(o["x"])("ion-card"),y=Object(o["x"])("ion-content"),B=Object(o["x"])("ion-page");return Object(o["q"])(),Object(o["e"])(B,null,{default:Object(o["D"])((function(){return[Object(o["h"])(D,null,{default:Object(o["D"])((function(){return[Object(o["h"])(_,null,{default:Object(o["D"])((function(){return[Object(o["h"])(S,null,{default:Object(o["D"])((function(){return[l]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(y,{fullscreen:!0},{default:Object(o["D"])((function(){return[Object(o["h"])(D,{collapse:"condense"},{default:Object(o["D"])((function(){return[Object(o["h"])(_,null,{default:Object(o["D"])((function(){return[Object(o["h"])(S,{size:"large"},{default:Object(o["D"])((function(){return[c]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(k),Object(o["h"])(w,null,{default:Object(o["D"])((function(){return[Object(o["h"])(I,null,{default:Object(o["D"])((function(){return[Object(o["h"])(q,null,{default:Object(o["D"])((function(){return[Object(o["h"])(v,null,{default:Object(o["D"])((function(){return[r]})),_:1}),Object(o["h"])(v,null,{default:Object(o["D"])((function(){return[Object(o["g"])(Object(o["z"])(e.bestSellers),1)]})),_:1}),u,Object(o["h"])("img",{src:e.bestSellersImage},null,8,["src"]),Object(o["h"])("h2",null,"Auteur: "+Object(o["z"])(e.bestSellersAuthor),1),Object(o["h"])("p",null,"ISBN: "+Object(o["z"])(e.bestSellersISBN),1),s,Object(o["h"])("a",{href:e.bestSellersBuy},[Object(o["h"])(x,{style:{margin:"-5px"},color:"success",shape:"round"},{default:Object(o["D"])((function(){return[b]})),_:1})],8,["href"]),a,i,Object(o["h"])("a",{href:"http://twitter.com/share?text=Vandaag is het meest verkochte boek: "+p.bestSellers+" via BoekenZoeker"},[Object(o["h"])(x,{style:{margin:"-5px"},color:"secondary",shape:"round"},{default:Object(o["D"])((function(){return[j]})),_:1})],8,["href"])]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(w,null,{default:Object(o["D"])((function(){return[Object(o["h"])(q,null,{default:Object(o["D"])((function(){return[Object(o["h"])(v,null,{default:Object(o["D"])((function(){return[h]})),_:1}),Object(o["h"])("p",null,'"'+Object(o["z"])(e.quote)+'"',1),Object(o["h"])("p",null,"Door: "+Object(o["z"])(e.quoteAuthor),1),O,Object(o["h"])("a",{href:"http://twitter.com/share?text=Quote van de dag: "+e.quote+" via BoekenZoeker"},[Object(o["h"])(x,{style:{margin:"-5px"},color:"secondary",shape:"round"},{default:Object(o["D"])((function(){return[d]})),_:1})],8,["href"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var g=n("bc3a"),m=n.n(g),p=n("ff79"),S=n("8a30"),_=Object(o["i"])({beforeMount:function(){this.bestSeller()},data:function(){return{moon:p["m"],bestSellers:"",bestSellersBuy:"",bestSellersAuthor:"",bestSellersISBN:"",bestSellersImage:"",quote:"",quoteAuthor:""}},methods:{changeColor:function(e){console.log("switched theme");var t=document.getElementById("darkToggler");t.classList.toggle("dark")},bestSeller:function(){var e=this,t="http://twitter.com/share?text=textgoeshere";console.log(t),m.a.get("https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=Y6JSCmMtdMzP8yqnqX0mL5C324Ec3jHY").then((function(t){console.log(t.data.results[0]),e.bestSellers=t.data.results[0].book_details[0].title,e.bestSellersBuy=t.data.results[0].amazon_product_url,e.bestSellersAuthor=t.data.results[0].book_details[0].author,e.bestSellersISBN=t.data.results[0].isbns[1].isbn13,console.log(t.data.results[1]),console.log(e.bestSellers),m.a.get("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(e.bestSellersISBN)).then((function(t){e.bestSellersImage=t.data.items[0].volumeInfo.imageLinks.thumbnail,console.log(e.bestSellersImage)})),m.a.get("https://quotes.rest/qod?language=en").then((function(t){console.log(t),e.quote=t.data.contents.quotes[0].quote,e.quoteAuthor=t.data.contents.quotes[0].author,console.log(e.quote)}))}))}},name:"tab1",components:{IonHeader:S["d"],IonToolbar:S["s"],IonTitle:S["r"],IonContent:S["c"],IonPage:S["j"]}});_.render=f;t["default"]=_}}]);
//# sourceMappingURL=chunk-2d0cc9f4.8ac80d71.js.map