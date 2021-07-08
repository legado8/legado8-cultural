(self.webpackChunksite=self.webpackChunksite||[]).push([[691],{8538:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",o="week",l="month",c="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,l),s=n-i<0,a=e.clone().add(r+(s?-1:1),l);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:o,d:u,D:h,h:a,m:s,s:i,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",M={};M[p]=v;var D=function(t){return t instanceof O},S=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(p=r),r||!n&&p},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},E=y;E.l=S,E.i=D,E.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t)}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(E.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return E},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return w(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<w(t)},g.$g=function(t,e,n){return E.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!E.u(e)||e,c=E.p(t),f=function(t,e){var i=E.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},m=function(t,e){return E.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case l:return r?f(1,v):f(0,v+1);case o:var p=this.$locale().weekStart||0,M=($<p?$+7:$)-p;return f(r?g-M:g+(6-M),v);case u:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=E.p(t),c="set"+(this.$u?"UTC":""),f=(n={},n[u]=c+"Date",n[h]=c+"Date",n[l]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===l||o===d){var $=this.clone().set(h,1);$.$d[f](m),$.init(),this.$d=$.set(h,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[E.p(t)]()},g.add=function(r,c){var h,f=this;r=Number(r);var m=E.p(c),$=function(t){var e=w(f);return E.w(e.date(e.date()+Math.round(t*r)),f)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===u)return $(1);if(m===o)return $(7);var v=(h={},h[s]=e,h[a]=n,h[i]=t,h)[m]||1,g=this.$d.getTime()+r*v;return E.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,l=n.months,c=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},d=function(t){return E.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:E.s(u+1,2,"0"),MMM:c(n.monthsShort,u,l,3),MMMM:c(l,u),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:E.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:E.s(a,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||m[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,f){var m,$=E.p(h),v=w(r),g=(v.utcOffset()-this.utcOffset())*e,y=this-v,p=E.m(this,v);return p=(m={},m[d]=p/12,m[l]=p,m[c]=p/3,m[o]=(y-g)/6048e5,m[u]=(y-g)/864e5,m[a]=y/n,m[s]=y/e,m[i]=y/t,m)[$]||y,f?p:E.a(p)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return E.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),_=O.prototype;return w.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",l],["$y",d],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,O,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=M[p],w.Ls=M,w.p={},w}()},1217:function(t,e,n){"use strict";n.d(e,{r:function(){return a}});var r=n(7294),i=n(428),s=n(4953),a=function(t){var e=t.children,n=t.breakpointCols,a=void 0===n?{default:3,700:2,500:1}:n;return r.createElement(s.Z,null,r.createElement(i.Z,{breakpointCols:a,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},e))}},3313:function(t,e,n){"use strict";n.d(e,{L:function(){return o}});var r=n(7294),i=n(5444),s=n(6802),a=n(7914),u=n(9).ZP.div.withConfig({displayName:"StyledGalleryItem",componentId:"sc-1gyj9x7-0"})(["& > div{padding:1rem;}"]),o=function(t){var e=t.image,n=void 0===e?null:e,o=t.title,l=void 0===o?null:o,c=t.description,d=void 0===c?null:c,h=t.meta,f=void 0===h?null:h,m=t.to,$=void 0===m?null:m,v=(0,s.d)(n);return r.createElement(u,null,r.createElement(i.Link,{to:$},r.createElement(s.G,{image:v,alt:l})),r.createElement("div",null,r.createElement(i.Link,{to:$},r.createElement("h3",null,l)),d&&r.createElement("p",null,d),f&&r.createElement(a.h,null,f)))}},7914:function(t,e,n){"use strict";n.d(e,{h:function(){return s}});var r=n(7294),i=n(2104),s=function(t){var e=t.children;return r.createElement(i.N,null,e)}},446:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(7294),i=n(5444),s=n(8538),a=n(3444),u=n(3520),o=n(7303),l=n(4625),c=n(1217),d=n(3313),h=n(9).ZP.div.withConfig({displayName:"StyledTitle",componentId:"sc-1md9w3t-0"})(["padding:12rem 1rem;text-align:center;h2{margin:0;padding:0;font-size:64px;line-height:64px;}@media (max-width:600px){h2{font-size:32px;line-height:32px;}}"]),f=function(t){var e=t.children;return r.createElement(h,null,e)},m=function(t){var e=t.data;return r.createElement(u.A,null,r.createElement(o.H,{title:"Home"}),r.createElement(a.VS,{y:[0,0]},r.createElement(l.V,null,"Bienvenido a Cultural, la revista digital libre de Legado8.")),r.createElement(a.VS,{y:[0,-10]},r.createElement(f,null,r.createElement("h2",null,"Cultural"),r.createElement("h3",null,"Estas son nuestras historias"))),r.createElement(a.VS,{y:[0,-50]},r.createElement(c.r,null,e.allMdx.edges.map((function(t){return r.createElement(d.L,{key:t.node.frontmatter.title,to:"/articles/"+t.node.slug,title:t.node.frontmatter.title,image:t.node.frontmatter.hero,description:t.node.excerpt,meta:[s(t.node.frontmatter.date).format("DD MMM YYYY"),Math.ceil(t.node.wordCount.words/200)+" minutos de lectura"].join(" - ")})})))),r.createElement(a.VS,{y:[0,-60]},r.createElement(f,null,r.createElement("h2",null,"¡Únete a la revolución cultural!"),r.createElement("h3",null,"Tu historia se escribe aquí..."),r.createElement("p",null,r.createElement(i.Link,{to:"/contact"},"Participa del legado!")))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0690367f0e3bb731423a.js.map