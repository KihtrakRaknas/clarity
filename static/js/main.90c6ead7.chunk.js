(this["webpackJsonpbig-thonk"]=this["webpackJsonpbig-thonk"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(48),s=n.n(r),c=(n(58),n(8)),l=n(10),i=n(25),m=n(3),u=n(4),p=n(6),d=n(5),h=n(16),b=n.n(h),g=n(26),f=n.n(g);n(101);f.a.initializeApp({apiKey:"AIzaSyBHgeNNvgO_HbYJ6NWNnVs8Y8Xbg0Xealw",authDomain:"big-thonk.firebaseapp.com",databaseURL:"https://big-thonk.firebaseio.com",projectId:"big-thonk",storageBucket:"big-thonk.appspot.com",messagingSenderId:"199147602141",appId:"1:199147602141:web:e1a0ff1fdf473a66ab5b34"});var v=f.a,E=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={views:0,comments:0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.database().ref(this.props.id).on("value",(function(t){var n=t.val();n&&e.setState({views:n.views?n.views:0,comments:n.comments?Object.keys(n.comments).length:0})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("div",{className:"card"},this.props.img?o.a.createElement("img",{className:"card-img-top",src:this.props.img,alt:"Card image cap"}):null,o.a.createElement("div",{className:"card-body"},o.a.createElement("h3",{className:"card-title"},this.props.title),o.a.createElement("p",{className:"card-text"},b()(this.props.text.replace(" [&hellip;]","..."))),o.a.createElement("div",{className:"btn-div"},o.a.createElement(c.b,{to:"/"+this.props.id},o.a.createElement("a",{className:"btn btn btn-outline-primary"},"Click Here to Read More")))),o.a.createElement("div",{className:"card-footer"},this.props.name+" - "+this.props.date.toLocaleDateString()+" - \ud83d\udc40"+this.state.views+" \ud83d\udcac"+this.state.comments)))}}]),n}(o.a.Component),y=n(51),w=n.n(y),k=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={showText:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.showTimeout=setTimeout((function(){return e.setState({showText:!0})}),500)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.showTimeout)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),this.state.showText?o.a.createElement("p",{className:"display-4"},"Geting the latest content!"):null,o.a.createElement(w.a,{type:"cubes",color:"#ffffff",height:"20%",width:"20%"}))}}]),n}(o.a.Component),O=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getPosts=function(){fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/").then((function(e){return e.json()})).then((function(e){var t,n=[],r=Object(i.a)(e.posts);try{for(r.s();!(t=r.n()).done;){var s=t.value;console.log(s),n.push(o.a.createElement(E,{id:s.slug,text:s.excerpt,date:new Date(s.date),title:s.title,img:s.post_thumbnail?s.post_thumbnail.URL:null,name:s.author.first_name+" "+s.author.last_name,key:s.id}))}}catch(c){r.e(c)}finally{r.f()}a.setState({miniPosts:n})})).catch((function(){fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/")).then((function(e){return e.json()})).then((function(e){var t,n=[],r=Object(i.a)(e.posts);try{for(r.s();!(t=r.n()).done;){var s=t.value;console.log(s),n.push(o.a.createElement(E,{id:s.slug,text:s.excerpt,date:new Date(s.date),title:s.title,img:s.post_thumbnail?s.post_thumbnail.URL:null,name:s.author.first_name+" "+s.author.last_name,key:s.id}))}}catch(c){r.e(c)}finally{r.f()}a.setState({miniPosts:n})}))}))},a.resetPageTags=function(e){document.title="A Lack Of Clarity!",document.querySelectorAll('[property="og:title"]')[0].setAttribute("content","A Lack Of Clarity! - Home Page"),document.getElementsByTagName("meta").namedItem("description").setAttribute("content","A blog written by some high schoolers. Exploring the topics we find interesting. Read if you dare."),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content","Check out the blog!"),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content",""),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","website"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content",window.location.href)},a.state={},a.getPosts(),a.resetPageTags(),a}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App container"},o.a.createElement("div",{id:"Posts",className:"row"},this.state.miniPosts?this.state.miniPosts:o.a.createElement(k,null)))}}]),n}(o.a.Component),A=n(20),N=n(52),j=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"getColor",value:function(){return"hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(85+10*Math.random())+"%)"}},{key:"render",value:function(){var e=this.getColor();return console.log(e),o.a.createElement("div",{className:"comment",style:{borderRadius:"5px",borderWidth:"2px",borderColor:e,color:e,borderStyle:"solid",padding:"5px",margin:"10px"}},o.a.createElement("h5",{style:{paddingLeft:"10px",textDecoration:"underline"}},this.props.name),o.a.createElement("br",null),o.a.createElement("p",null,this.props.text))}}]),n}(o.a.Component),S=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a,r;return Object(m.a)(this,n),(a=t.call(this,e)).state={comments:[]},a.commentInput=function(){return a.state.writing?o.a.createElement("div",null,o.a.createElement("input",{class:"form-control",id:"nameInput",placeholder:"Type your name here"}),o.a.createElement("br",null),o.a.createElement("textarea",{className:"form-control",id:"textInput",rows:"3",placeholder:"Type your comment here"}),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn btn-outline-success btn-block",onClick:a.post},"Post"),o.a.createElement("br",null)):o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn btn-outline-success btn-block",onClick:function(){return a.setState({writing:!0})}},"Create Comment"),o.a.createElement("br",null))},a.post=function(){var e=v.database().ref(a.postId),t=document.getElementById("nameInput").value,n=document.getElementById("textInput").value;if(""==t.trim()||""==n.trim())alert("Please include a name and a comment before posting");else{var o=e.child("comments").push().key;e.child("comments").update(Object(N.a)({},o,{name:t,text:n})),document.getElementById("textInput").value=""}},a.checkFirebase=function(){console.log("post: "+a.postId);var e=v.database().ref(a.postId);e.child("views").transaction((function(e){return(e||0)+1})),e.child("comments").on("value",(function(e){a.commentsObj=e.val(),0==a.state.comments.length&&a.get5Comments()}))},a.get5Comments=function(){var e=[];if(a.state.comments&&(e=Object(A.a)(a.state.comments)),a.commentsObj)for(var t=0;5!=t&&0!=Object.keys(a.commentsObj).length;t++){var n=Object.keys(a.commentsObj)[Math.floor(Math.random()*Object.keys(a.commentsObj).length)],r=JSON.parse(JSON.stringify(a.commentsObj[n]));delete a.commentsObj[n],e.push(o.a.createElement(j,{name:r.name?r.name:"No Name",text:r.text?r.text:"No Text",key:JSON.stringify(r)}))}console.log(e.length),a.setState({comments:e})},a.getPost=function(){if(a.props.post){var e=a.props.post;console.log(e),a.updatePageTags(e),a.state={name:e.author.first_name+" "+e.author.last_name,title:e.title,content:e.content,date:new Date(e.date),err:!1,comments:[]},a.checkFirebase()}else console.log("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+a.postId),fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+a.postId).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(e.author.first_name),a.updatePageTags(e),console.log("page tags updated"),a.setState({name:e.author.first_name+" "+e.author.last_name,title:e.title,content:e.content,date:new Date(e.date),err:!1}),console.log("STATE UPDATED"),a.checkFirebase()})).catch((function(e){console.log("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+a.postId)),fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/slug:"+a.postId)).then((function(e){return e.json()})).then((function(e){console.log(e),a.updatePageTags(e),a.setState({name:e.author.first_name+" "+e.author.last_name,title:e.title,content:e.content,date:new Date(e.date),err:!1}),a.checkFirebase()})).catch((function(e){console.log(e),a.setState({err:!0})}))}))},a.updatePageTags=function(e){document.title=e.title,document.querySelectorAll('[property="og:title"]')[0].setAttribute("content",e.title),document.getElementsByTagName("meta").namedItem("description").setAttribute("content",e.excerpt?e.excerpt.replace(/<[^>]*>?/gm,""):"A article titled: "+e.title),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content",e.excerpt?e.excerpt.replace(/<[^>]*>?/gm,""):"A article titled: "+e.title),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content",e.post_thumbnail?e.post_thumbnail.URL:""),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","article"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content",window.location.href)},r=a.props.post?a.props.post.slug:a.props.match.params.postId,a.postId=r,a.getPost(),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.match?this.props.match.params.postId:"feed";return"about"==e||"authors"==e?o.a.createElement("div",{className:"App container"},b()(this.state.content)):this.state.err?o.a.createElement("div",{className:"App container"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",{className:"text-center"},"Couldn't find the post you are looking for"),o.a.createElement("h3",{className:"text-center"},"Double check your link!")):o.a.createElement("div",{className:"App container blogpost"},o.a.createElement("br",null),this.state.content?o.a.createElement("div",null,o.a.createElement("h1",{className:"text-center"},this.state.title),o.a.createElement("div",{className:"d-flex justify-content-between author-box"},o.a.createElement("p",null,this.state.name?this.state.name:null),o.a.createElement("p",null,this.state.date?this.state.date.toLocaleDateString()+"   "+this.state.date.toLocaleTimeString():null)),o.a.createElement("hr",null),o.a.createElement("br",null),b()(this.state.content),o.a.createElement("br",null),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("h2",{className:"text-center"},"Comments:"),o.a.createElement("br",null),this.commentInput(),this.state.comments.length>0?o.a.createElement("div",null,this.state.comments,this.commentsObj&&Object.keys(this.commentsObj).length>0?o.a.createElement("button",{className:"btn btn btn-outline-info btn-block",onClick:this.get5Comments},"Show more comments"):null):o.a.createElement("p",null,o.a.createElement("em",null,"No comments yet. You could be the first!")),o.a.createElement("br",null)):o.a.createElement(k,null))}}]),n}(o.a.Component),x=(n(108),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleScroll=function(e){document.body.scrollHeight-window.innerHeight-window.scrollY<500&&a.renderNewPost()},a.getPosts=function(){fetch("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/").then((function(e){return e.json()})).then((function(e){a.postsJSON=e.posts,a.renderNewPost()})).catch((function(){fetch("https://wordpress-redirect.herokuapp.com/?url="+encodeURIComponent("https://public-api.wordpress.com/rest/v1.1/sites/176343073/posts/")).then((function(e){return e.json()})).then((function(e){a.postsJSON=e.posts,a.renderNewPost()}))}))},a.renderNewPost=function(){var e=[];a.state.posts&&(e=Object(A.a)(a.state.posts)),a.postsJSON&&a.postsJSON.length>0&&(e.push(o.a.createElement(S,{post:a.postsJSON[0]})),a.postsJSON.splice(0,1),a.setState({posts:e}))},a.resetPageTags=function(e){document.title="A Lack Of Clarity! - Feed",document.querySelectorAll('[property="og:title"]')[0].setAttribute("content","A Lack Of Clarity! - Feed"),document.getElementsByTagName("meta").namedItem("description").setAttribute("content","A blog written by some high schoolers. Exploring the topics we find interesting. Read if you dare."),document.querySelectorAll('[property="og:description"]')[0].setAttribute("content","This is the blog feed, it lets you veiw our posts all on one page!"),document.querySelectorAll('[property="og:image"]')[0].setAttribute("content",""),document.querySelectorAll('[property="og:type"]')[0].setAttribute("content","website"),document.querySelectorAll('[property="og:url"]')[0].setAttribute("content",window.location.href)},a.state={},a.getPosts(),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App container"},o.a.createElement("div",{id:"Posts",className:"row"},this.state.posts?this.state.posts:o.a.createElement(k,null)))}}]),n}(o.a.Component));function C(){return o.a.createElement(c.a,{basename:"/clarity"},o.a.createElement("div",null,o.a.createElement("nav",{class:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"},o.a.createElement(c.b,{to:"/",style:{color:"white"}},o.a.createElement("a",{class:"navbar-brand"},"A Lack Of Clarity")),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"})),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{class:"navbar-nav"},o.a.createElement("li",{class:"nav-item active"},o.a.createElement(c.b,{to:"/"},o.a.createElement("a",{class:"nav-link",href:"#"},"Home ",o.a.createElement("span",{class:"sr-only"},"(current)")))),o.a.createElement("li",{class:"nav-item active"},o.a.createElement(c.b,{to:"/feed"},o.a.createElement("a",{class:"nav-link",href:"#"},"Feed"))),o.a.createElement("li",{class:"nav-item"},o.a.createElement(c.b,{to:"/about"},o.a.createElement("a",{class:"nav-link",href:"#"},"About"))),o.a.createElement("li",{class:"nav-item"},o.a.createElement(c.b,{to:"/authors"},o.a.createElement("a",{class:"nav-link",href:"#"},"Authors")))))),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/feed",component:x}),o.a.createElement(l.a,{path:"/:postId",component:S}),o.a.createElement(l.a,{exact:!0,path:"/",component:O}))))}var I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clarity",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/clarity","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()},53:function(e,t,n){e.exports=n(109)},58:function(e,t,n){},83:function(e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.90c6ead7.chunk.js.map