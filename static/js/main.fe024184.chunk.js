(this["webpackJsonpbig-thonk"]=this["webpackJsonpbig-thonk"]||[]).push([[0],{119:function(e,t,n){e.exports=n.p+"static/media/LoCLogo.02e9f3ce.svg"},120:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),s=n.n(r),c=(n(69),n(30)),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=document.getElementById("root");u.hasChildNodes()?s.a.hydrate(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null)),u):s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null)),u),function(e){if("serviceWorker"in navigator){if(new URL("/clarity",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/clarity","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(t,e)}))}}()},19:function(e,t,n){"use strict";var a=n(31),o=n.n(a);n(112);o.a.initializeApp({apiKey:"AIzaSyBHgeNNvgO_HbYJ6NWNnVs8Y8Xbg0Xealw",authDomain:"big-thonk.firebaseapp.com",databaseURL:"https://big-thonk.firebaseio.com",projectId:"big-thonk",storageBucket:"big-thonk.appspot.com",messagingSenderId:"199147602141",appId:"1:199147602141:web:e1a0ff1fdf473a66ab5b34"}),t.a=o.a},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(24),o=n(58),r=n(1),s=n(2),c=n(4),l=n(3),i=n(0),u=n.n(i),m=n(10),p=n.n(m),d=n(9),h=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"getColor",value:function(){return"hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(85+10*Math.random())+"%)"}},{key:"render",value:function(){var e=this.getColor();return console.log(e),u.a.createElement("div",{className:"comment",style:{borderRadius:"5px",borderWidth:"2px",borderColor:e,color:e,borderStyle:"solid",padding:"5px",margin:"10px"}},u.a.createElement("h5",{style:{paddingLeft:"10px",textDecoration:"underline"}},this.props.name),u.a.createElement("br",null),u.a.createElement("p",null,this.props.text))}}]),n}(u.a.Component),g=n(19),b=(n(53),n(54),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var s,c;return Object(r.a)(this,n),(s=t.call(this,e)).state={comments:[]},s.commentInput=function(){return s.state.writing?u.a.createElement("div",null,u.a.createElement("input",{class:"form-control",id:"nameInput",placeholder:"Type your name here"}),u.a.createElement("br",null),u.a.createElement("textarea",{className:"form-control",id:"textInput",rows:"3",placeholder:"Type your comment here"}),u.a.createElement("br",null),u.a.createElement("button",{className:"btn btn btn-outline-success btn-block",onClick:s.post},"Post"),u.a.createElement("br",null)):u.a.createElement("div",null,u.a.createElement("button",{className:"btn btn btn-outline-success btn-block",onClick:function(){return s.setState({writing:!0})}},"Create Comment"),u.a.createElement("br",null))},s.post=function(){var e=g.a.database().ref(s.postId),t=document.getElementById("nameInput").value,n=document.getElementById("textInput").value;if(""===t.trim()||""===n.trim())alert("Please include a name and a comment before posting");else{var a=e.child("comments").push().key;e.child("comments").update(Object(o.a)({},a,{name:t,text:n})),document.getElementById("textInput").value=""}},s.checkFirebase=function(){console.log("post: "+s.postId);var e=g.a.database().ref(s.postId);navigator.userAgent.includes("headless")||e.child("views").transaction((function(e){return(e||0)+1})).catch((function(e){console.log("FIREBASE DIDN'T UPDATE"),console.log(e)})),e.child("comments").on("value",(function(e){s.commentsObj=e.val(),0===s.state.comments.length&&s.get5Comments()}))},s.get5Comments=function(){var e=[];if(s.state.comments&&(e=Object(a.a)(s.state.comments)),s.commentsObj)for(var t=0;5!==t&&0!==Object.keys(s.commentsObj).length;t++){var n=Object.keys(s.commentsObj)[Math.floor(Math.random()*Object.keys(s.commentsObj).length)],o=JSON.parse(JSON.stringify(s.commentsObj[n]));delete s.commentsObj[n],e.push(u.a.createElement(h,{name:o.name?o.name:"No Name",text:o.text?o.text:"No Text",key:JSON.stringify(o)}))}console.log(e.length),s.setState({comments:e})},s.getPost=function(){if(s.props.post){var e=s.props.post;s.updatePageTags(e),s.state={name:e.author.first_name+" "+e.author.last_name,title:e.title,content:e.content,date:new Date(e.date),err:!1,comments:[]},s.checkFirebase()}else{var t="about"===s.postId?"first-blog-post":s.postId;console.log(t),console.log("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+t),fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+t).then((function(e){return e.json()})).then((function(e){console.log(e.author.first_name),s.updatePageTags(e),console.log("page tags updated"),s.setState({name:e.author.first_name+" "+e.author.last_name,title:e.title,content:e.content,date:new Date(e.date),err:!1}),console.log("STATE UPDATED"),"about"!==s.postId&&s.checkFirebase()})).catch((function(e){console.log("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+t)),fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+t)).then((function(e){return e.json()})).then((function(e){s.updatePageTags(e),s.setState({name:e.author.first_name+" "+e.author.last_name,title:e.title,content:e.content,date:new Date(e.date),err:!1}),"about"!==s.postId&&s.checkFirebase()})).catch((function(e){console.log(e),s.setState({err:!0})}))}))}},s.updatePageTags=function(e){document.title=e.title,document.querySelectorAll('[property="og:title"]')[0].setAttribute("content",e.title),document.getElementsByTagName("meta").namedItem("description").setAttribute("content",e.excerpt?e.excerpt.replace(/<[^>]*>?/gm,"").replace(" [&hellip;]","..."):"A article titled: "+e.title),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content",e.excerpt?e.excerpt.replace(/<[^>]*>?/gm,"").replace(" [&hellip;]","..."):"A article titled: "+e.title),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content",e.post_thumbnail?e.post_thumbnail.URL:""),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","article"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content","https://kihtrak.com/clarity/"+e.slug),document.querySelectorAll('[rel="canonical"]')[0].setAttribute("href","https://kihtrak.com/clarity/"+e.slug)},c=s.props.post?s.props.post.slug:s.props.match.params.postId,console.log(c),s.postId=c,s.getPost(),s}return Object(s.a)(n,[{key:"render",value:function(){return"about"===(this.props.match?this.props.match.params.postId:"feed")?u.a.createElement("div",{className:"App container"},u.a.createElement("br",null),p()(this.state.content)):this.state.err?u.a.createElement("div",{className:"App container"},u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h1",{className:"text-center"},"Couldn't find the post you are looking for"),u.a.createElement("h3",{className:"text-center"},"Double check your link!")):(console.log("rendering blogpost "),u.a.createElement("div",{className:"App container blogpost"},u.a.createElement("br",null),this.state.content?u.a.createElement("div",null,u.a.createElement("h1",{className:"text-center"},this.state.title),u.a.createElement("div",{className:"d-flex justify-content-between author-box"},u.a.createElement("p",null,this.state.name?this.state.name:null),u.a.createElement("p",null,this.state.date?this.state.date.toLocaleDateString()+"   "+this.state.date.toLocaleTimeString():null)),u.a.createElement("hr",null),u.a.createElement("br",null),p()(this.state.content),u.a.createElement("br",null),u.a.createElement("hr",null),u.a.createElement("br",null),u.a.createElement("h2",{className:"text-center"},"Comments: "),u.a.createElement("br",null),this.commentInput(),this.state.comments.length>0?u.a.createElement("div",null,this.state.comments,this.commentsObj&&Object.keys(this.commentsObj).length>0?u.a.createElement("button",{className:"btn btn btn-outline-info btn-block",onClick:this.get5Comments},"Show more comments"):null):u.a.createElement("p",null,u.a.createElement("em",null,"No comments yet. You could be the first!")),u.a.createElement("br",null)):u.a.createElement(d.a,null)))}}]),n}(u.a.Component))},30:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return v}));var a=n(13),o=n(1),r=n(2),s=n(4),c=n(3),l=n(0),i=n.n(l),u=n(12),m=n(6),p=n(63),d=n(25),h=(n(54),n(59)),g=n(62),b=n(60),f=n(61);e.appVersion=b.version;var v=function(t){Object(s.a)(b,t);var l=Object(c.a)(b);function b(){return Object(o.a)(this,b),l.apply(this,arguments)}return Object(r.a)(b,[{key:"componentDidMount",value:function(){fetch("https://kihtrak.com/clarity/meta.json").then((function(e){return console.log(e),e.json()})).then((function(t){console.log("test"),console.log("test"+t);var n=t.version;(function(e,t){for(var n=e.split(/\./g),a=t.split(/\./g);n.length||a.length;){var o=Number(n.shift()),r=Number(a.shift());if(o!==r)return o>r||isNaN(r)}return!1})(n,e.appVersion)?(console.log("We have a new version - ".concat(n,". Should force refresh")),console.log("Clearing cache and hard reloading..."),caches&&caches.keys().then((function(e){var t,n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;caches.delete(o)}}catch(r){n.e(r)}finally{n.f()}})),window.location.reload(!0)):console.log("You already have the latest version - ".concat(n,". No cache refresh needed."))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(u.a,{basename:"/clarity"},i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"},i.a.createElement(u.b,{to:"/",style:{color:"white"},className:"navbar-brand"},i.a.createElement("img",{src:n(119),width:"25",height:"25",alt:"A Lack Of Clarity Logo"})," A Lack Of Clarity"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/",className:"nav-link",activeClassName:"active"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/feed",className:"nav-link",activeClassName:"active"},"Feed")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/about",className:"nav-link",activeClassName:"active"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(u.b,{to:"/authors",className:"nav-link",activeClassName:"active"},"Authors"))))),i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/feed",component:h.a}),"Authors",i.a.createElement(m.a,{exact:!0,path:"/about",component:f.a}),i.a.createElement(m.a,{exact:!0,path:"/authors",component:g.a}),i.a.createElement(m.a,{path:"/:postId",component:d.a}),i.a.createElement(m.a,{exact:!0,path:"/",component:p.a}))))}}]),b}(i.a.Component)}).call(this,n(20))},53:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(24),o=n(1),r=n(2),s=n(4),c=n(3),l=n(0),i=n.n(l),u=n(9),m=n(25),p=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleScroll=function(e){document.body.scrollHeight-window.innerHeight-window.scrollY<500&&r.renderNewPost()},r.getPosts=function(){fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/").then((function(e){return e.json()})).then((function(e){r.postsJSON=e.posts,r.renderNewPost()})).catch((function(){fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/")).then((function(e){return e.json()})).then((function(e){r.postsJSON=e.posts,r.renderNewPost()}))}))},r.renderNewPost=function(){var e=[];r.state.posts&&(e=Object(a.a)(r.state.posts)),r.postsJSON&&r.postsJSON.length>0&&(e.push(i.a.createElement(m.a,{post:r.postsJSON[0]})),r.postsJSON.splice(0,1),r.setState({posts:e}))},r.resetPageTags=function(e){document.title="Feed A Lack Of Clarity!",document.querySelectorAll('[property="og:title"]')[0].setAttribute("content","Feed - A Lack Of Clarity!"),document.getElementsByTagName("meta").namedItem("description").setAttribute("content","A blog written by some high schoolers. Exploring the topics we find interesting. Read if you dare."),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content","This is the blog feed, it lets you veiw our posts all on one page!"),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content","https://github.com/KihtrakRaknas/clarity/raw/master/src/Images/LoCLogo.svg"),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","website"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content",window.location.href)},r.state={},r.getPosts(),r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App container"},i.a.createElement("div",{id:"Posts",className:"row"},this.state.posts?this.state.posts:i.a.createElement(u.a,null)))}}]),n}(i.a.Component)},60:function(e){e.exports=JSON.parse('{"name":"big-thonk","version":"1.3.1","private":true,"homepage":"https://kihtrak.com/clarity","dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","firebase":"^7.14.2","react":"^16.13.1","react-dom":"^16.13.1","react-html-parser":"^2.0.2","react-loading":"^2.0.3","react-router-dom":"^5.1.2","react-scripts":"3.4.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build ","postbuild":"react-snap","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build","generate-build-version":"node generate-build-version","prebuild":"npm run generate-build-version"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^2.2.0","react-snap":"^1.23.0"}}')},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(1),o=n(2),r=n(4),s=n(3),c=n(0),l=n.n(c),i=n(10),u=n.n(i),m=n(9),p=(n(53),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={comments:[]},o.getPost=function(){var e="first-blog-post";console.log(e),console.log("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+e),fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+e).then((function(e){return e.json()})).then((function(e){o.updatePageTags(e),console.log("page tags updated"),o.setState({content:e.content,err:!1}),console.log("STATE UPDATED")})).catch((function(t){console.log("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+e)),fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+e)).then((function(e){return e.json()})).then((function(e){o.updatePageTags(e),o.setState({content:e.content,err:!1}),"about"!==o.postId&&o.checkFirebase()})).catch((function(e){console.log(e),o.setState({err:!0})}))}))},o.updatePageTags=function(e){document.title="About - A Lack Of Clarity!",document.querySelectorAll('[property="og:title"]')[0].setAttribute("content","About - A Lack Of Clarity!"),document.getElementsByTagName("meta").namedItem("description").setAttribute("content","The about page for A Lack Of Clarity"),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content","The about page for A Lack Of Clarity"),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content",e.post_thumbnail?e.post_thumbnail.URL:""),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","website"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content","https://kihtrak.com/clarity/about"),document.querySelectorAll('[rel="canonical"]')[0].setAttribute("href","https://kihtrak.com/clarity/about")},o.getPost(),o}return Object(o.a)(n,[{key:"render",value:function(){return this.state.err?l.a.createElement("div",{className:"App container"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",{className:"text-center"},"Page had trouble loading. Try again later."),l.a.createElement("h3",{className:"text-center"},"Double check your link!")):this.state.content?l.a.createElement("div",{className:"App container"},l.a.createElement("br",null),u()(this.state.content)):l.a.createElement(m.a,null)}}]),n}(l.a.Component))},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(13),o=n(1),r=n(2),s=n(4),c=n(3),l=n(0),i=n.n(l),u=n(10),m=n.n(u),p=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-12 profile mt-2"},i.a.createElement("div",{className:"d-none d-md-flex flex-row rounded"},i.a.createElement("div",{className:"circular--landscape mt-2 mb-2"},i.a.createElement("img",{alt:this.props.name+" profile",src:this.props.image?this.props.image:"https://www.pngkit.com/png/detail/799-7998601_profile-placeholder-person-icon.png"})),i.a.createElement("div",{className:"pl-3 pt-2 pr-2 pb-2 w-75"},i.a.createElement("h3",null,this.props.name),m()("<p>"+this.props.description+"</p>"),this.props.link?i.a.createElement("p",{className:"text-right m-0"},i.a.createElement("a",{href:this.props.link,className:"btn btn-primary"},this.props.linktxt?this.props.linktxt:"My Link")):null)),i.a.createElement("div",{className:"d-block d-md-none rounded "},i.a.createElement("div",{className:"d-block mx-auto circular--landscape mt-2 mb-2 text-center"},i.a.createElement("img",{alt:"Placeholder profile",src:this.props.image?this.props.image:"https://www.pngkit.com/png/detail/799-7998601_profile-placeholder-person-icon.png"})),i.a.createElement("div",{className:"p2-3 pt-2 pr-3 pb-2"},i.a.createElement("h3",null,this.props.name),m()("<p>"+this.props.description+"</p>"),this.props.link?i.a.createElement("p",{className:"text-center m-0"},i.a.createElement("a",{href:this.props.link,className:"btn btn-primary"},this.props.linktxt?this.props.linktxt:"My Link")):null)))}}]),n}(i.a.Component),d=n(9),h=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).getAuthors=function(){fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:authors").then((function(e){return e.json()})).then((function(e){r.readPostContent(e.content)})).catch((function(e){console.log("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:authors")),fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:authors")).then((function(e){return e.json()})).then((function(e){r.readPostContent(e.content)})).catch((function(e){console.log(e),r.setState({err:!0})}))}))},r.readPostContent=function(e){console.log(e),e=e.split(/<h[^>]>?/gm),console.log(e),e=e.map((function(e){var t={};if(e.includes('src="')){var n=e.substring(e.indexOf('src="')+5);n=n.substring(0,n.indexOf('"')),console.log(n),t.image=n}if(e.includes('href="')){var o=e.substring(e.indexOf('href="')+6);o=o.substring(0,o.indexOf('"')),console.log(o),t.link=o}var r,s=e.split(/<[^>]*>?/gm).filter((function(e){return""!==e.trim()})),c=Object(a.a)(s);try{for(c.s();!(r=c.n()).done;){var l=r.value;l.split(":").length>1&&(console.log(l.substring(l.indexOf(":")+1).trim()),console.log(l),t[l.split(":")[0].toLowerCase()]=l.substring(l.indexOf(":")+1).trim())}}catch(i){c.e(i)}finally{c.f()}return t})),console.log(e);var t,n=[],o=Object(a.a)(e);try{for(o.s();!(t=o.n()).done;){var s=t.value;JSON.stringify(s)!==JSON.stringify({})&&n.push(i.a.createElement(p,{name:s.name?s.name:"",description:s.description?s.description:"",link:s.link?s.link:"",linktxt:s.linktxt?s.linktxt:"",image:s.image?s.image:""}))}}catch(c){o.e(c)}finally{o.f()}console.log(n),r.setState({authors:n})},r.resetPageTags=function(e){document.title="Authors - A Lack Of Clarity!",document.querySelectorAll('[property="og:title"]')[0].setAttribute("content","Authors - A Lack Of Clarity!"),document.getElementsByTagName("meta").namedItem("description").setAttribute("content","A list of the authors at A Lack Of Clarity"),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content","A list of the authors at A Lack Of Clarity"),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content","https://github.com/KihtrakRaknas/clarity/raw/master/src/Images/LoCLogo.svg"),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","website"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content","https://kihtrak.com/clarity/authors"),document.querySelectorAll('[rel="canonical"]')[0].setAttribute("href","https://kihtrak.com/clarity/authors")},r.state={},r.getAuthors(),r.resetPageTags(),r}return Object(r.a)(n,[{key:"render",value:function(){return this.state.err?i.a.createElement("div",{className:"App container"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h1",{className:"text-center"},"Couldn't load in the information about our authors"),i.a.createElement("h3",{className:"text-center"},"Try again later!")):i.a.createElement("div",{className:"App container"},i.a.createElement("div",{id:"Posts",className:"row"},i.a.createElement("br",null),this.state.authors?this.state.authors:i.a.createElement(d.a,null)))}}]),n}(i.a.Component)},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(13),o=n(1),r=n(2),s=n(4),c=n(3),l=n(0),i=n.n(l),u=n(10),m=n.n(u),p=n(12),d=n(19),h=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={views:0,comments:0},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.database().ref(this.props.id).on("value",(function(t){var n=t.val();n&&e.setState({views:n.views?n.views:0,comments:n.comments?Object.keys(n.comments).length:0})}))}},{key:"render",value:function(){var e=[];if(console.log(this.props.categories),this.props.categories)for(var t in this.props.categories)e.push(i.a.createElement("small",{key:t,style:{paddingLeft:5,paddingRight:5,marginLeft:5,marginRight:3,paddingBottom:2,borderRadius:5,backgroundColor:"white",color:"black"}},t));else e=[i.a.createElement("small",{key:"err",style:{marginRight:10,marginLeft:10,backgroundColor:"grey"}},"No categories found!")];return i.a.createElement("div",{className:"col-sm-6",id:this.props.id},i.a.createElement("div",{className:"card"},this.props.img?i.a.createElement("img",{className:"card-img-top",src:this.props.img,alt:this.props.title}):null,i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{className:"card-title"},i.a.createElement("strong",null,this.props.title)),i.a.createElement("div",{className:"card-text categories",style:{textAlign:"center"}},e),i.a.createElement("div",{className:"card-text"},m()(this.props.text.replace(" [&hellip;]","..."))),i.a.createElement("div",{className:"btn-div"},"?showBtn=false"!==window.location.search?i.a.createElement(p.b,{to:"/"+this.props.id,className:"btn btn btn-outline-primary"},"Click Here to Read More"):null)),i.a.createElement("div",{className:"card-footer"},this.props.name+" - "+this.props.date.toLocaleDateString()+" - \ud83d\udc40"+("?showBtn=false"!==window.location.search?this.state.views+" \ud83d\udcac"+this.state.comments:""))))}}]),n}(i.a.Component),g=n(9),b=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).getPosts=function(){fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/").then((function(e){return e.json()})).then((function(e){var t,n=[],o=Object(a.a)(e.posts);try{for(o.s();!(t=o.n()).done;){var s=t.value;n.push(i.a.createElement(h,{id:s.slug,text:s.excerpt,date:new Date(s.date),title:s.title,img:s.post_thumbnail?s.post_thumbnail.URL:null,name:s.author.first_name+" "+s.author.last_name,key:s.slug,categories:s.categories}))}}catch(c){o.e(c)}finally{o.f()}r.setState({miniPosts:n})})).catch((function(e){console.log(e),fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/")).then((function(e){return e.json()})).then((function(t){var n,o=[],s=Object(a.a)(t.posts);try{for(s.s();!(n=s.n()).done;){var c=n.value;o.push(i.a.createElement(h,{id:c.slug,text:c.excerpt,date:new Date(c.date),title:c.title,img:c.post_thumbnail?c.post_thumbnail.URL:null,name:c.author.first_name+" "+c.author.last_name,key:c.id,categories:c.categories}))}}catch(e){s.e(e)}finally{s.f()}r.setState({miniPosts:o})})).catch((function(e){console.log(e)}))}))},r.resetPageTags=function(e){document.title="A Lack Of Clarity!",document.querySelectorAll('[property="og:title"]')[0].setAttribute("content","A Lack Of Clarity! - Home Page"),document.getElementsByTagName("meta").namedItem("description").setAttribute("content","A blog written by some high schoolers. Exploring the topics we find interesting. Read if you dare."),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content","Check out the blog!"),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content","https://github.com/KihtrakRaknas/clarity/raw/master/src/Images/LoCLogo.svg"),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","website"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content","https://kihtrak.com/clarity/"),document.querySelectorAll('[rel="canonical"]')[0].setAttribute("href","https://kihtrak.com/clarity/")},r.state={},r.getPosts(),r.resetPageTags(),r}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App container"},i.a.createElement("div",{id:"Posts",className:"row"},this.state.miniPosts?this.state.miniPosts:i.a.createElement(g.a,null)))}},{key:"componentDidUpdate",value:function(){if(this.state.miniPosts&&window.location.href.includes("#")){var e=window.location.href.substring(window.location.href.indexOf("#")+1);console.log(e),document.getElementById(e)&&document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}}}]),n}(i.a.Component)},64:function(e,t,n){e.exports=n(120)},69:function(e,t,n){},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),o=n(2),r=n(4),s=n(3),c=n(0),l=n.n(c),i=n(57),u=n.n(i),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={showText:!1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.showTimeout=setTimeout((function(){return e.setState({showText:!0})}),500)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.showTimeout)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),this.state.showText?l.a.createElement("p",{className:"display-4"},"Geting the latest content!"):null,l.a.createElement(u.a,{type:"cubes",color:"#ffffff",height:"20%",width:"20%"}))}}]),n}(l.a.Component)},94:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.fe024184.chunk.js.map