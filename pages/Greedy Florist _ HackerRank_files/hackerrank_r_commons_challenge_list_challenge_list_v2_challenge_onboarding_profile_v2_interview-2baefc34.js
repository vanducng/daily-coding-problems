(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8KV7":function(e,a,t){"use strict";t("2Spj");var c=t("lwsE"),n=t.n(c),o=t("W8MJ"),r=t.n(o),i=t("a1gu"),s=t.n(i),l=t("Nsbk"),m=t.n(l),u=t("PJYZ"),h=t.n(u),p=t("7W2i"),d=t.n(p),k=t("lSNA"),g=t.n(k),w=(t("f3/d"),t("cDcd")),b=t.n(w),f=t("17x9"),_=t.n(f),v=t("/MKj"),y=t("MfAl"),C=t("TSYQ"),N=t.n(C),E=t("5J+W"),R=t("oBtd"),S=t.n(R),J=t("CFIE");t("P9et");var j=function(e){function a(){var e,t;n()(this,a);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return t=s()(this,(e=m()(a)).call.apply(e,[this].concat(o))),g()(h()(t),"shareOnPopup",function(e){var a=screen.width/2-300,t=screen.height/2-150;window.open(e,"_blank","noopener noreferrer","height=".concat(300,",width=").concat(600,",top=").concat(t,",left=").concat(a)),window.focus()}),t}return d()(a,e),r()(a,[{key:"shareLink",value:function(e,a){var t=this;a.preventDefault();var c=this.props,n=c.quote,o=c.hashtag,r=c.page,i=c.name,s=c.appUtil,l="";Object(y.a)(function(e,a){var t=a.name,c=a.page,n=a.slug,o=a.meta,r=a.badge,i=void 0===r?{}:r,s="trigger"===t?"social-dialog":"social-buttons",l=a.profile.username,m={attribute1:c,attribute2:e,attribute3:s,attribute4:n,attribute5:JSON.stringify(i)},u=i.badge_type,h=i.stars,p=i.level;switch(S.a.track("Click","SocialShare",m),c){case"30daysofcode":return"https://www.hackerrank.com/domains/tutorials/30-days-of-code?utm_campaign=".concat(s,"&utm_medium=").concat(e,"&utm_source=tutorial");case"crackingthecodinginterview":return"https://www.hackerrank.com/domains/tutorials/cracking-the-coding-interview?utm_campaign=".concat(s,"&utm_medium=").concat(e,"&utm_source=tutorial");case"tutorial":return"https://www.hackerrank.com/".concat(n,"?utm_campaign=").concat(s,"&utm_medium=").concat(e,"&utm_source=tutorial");case"contest":return"https://www.hackerrank.com/".concat(n,"?utm_campaign=").concat(s,"&utm_medium=").concat(e,"&utm_source=contest");case"domain":return"https://www.hackerrank.com/domains/".concat(n,"?utm_campaign=").concat(s,"&utm_medium=").concat(e,"&utm_source=domain");case"domains":return"https://www.hackerrank.com?utm_campaign=".concat(s,"&utm_medium=").concat(e,"&utm_source=domainlist");case"challenges":case"challenge_attempt_share":return"https://www.hackerrank.com/challenges/".concat(n,"?utm_campaign=").concat(s,"&utm_medium=").concat(e,"&utm_source=challenge");case"chapter_completed":return"https://www.hackerrank.com/domains/".concat(o.track,"/").concat(o.chapter_slug,"?utm_campaign=").concat(s,"&utm_medium=").concat(e,"&utm_source=").concat(c);case"code_snippet":return"https://www.hackerrank.com/snippets/".concat(n,"?utm_campaign=").concat(s,"&utm_medium=").concat(e,"&utm_source=").concat(c);case"badge_share":case"badge_share_profile":return"https://www.hackerrank.com/".concat(l,"?badge=").concat(u,"&stars=").concat(h,"&level=").concat(p,"&hr_r=1&utm_campaign=").concat(s,"&utm_medium=").concat(e,"&utm_source=").concat(c,"&social=linkedin");default:return"https://www.hackerrank.com?utm_campaign=".concat(s,"&utm_medium=").concat(e,"&utm_source=domains")}}(e,this.props)).then(function(a){var c;switch(e){case"twitter":c="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(function(e,a){var t=a.name,c=a.meta,n=a.page,o=a.badge,r=void 0===o?{}:o;switch(n){case"30daysofcode":return"Just joined the #30DaysofCode challenge to improve my #coding skills! Join me and thousands of coders ".concat(e," @HackerRank");case"crackingthecodinginterview":return"Started Cracking the Coding Interview on @HackerRank! Join me and learn the secrets from @gayle ".concat(e," @HackerRank");case"tutorial":return"Just joined ".concat(t," on @HackerRank to improve my #programming skills! Join me and thousands of coders ").concat(e);case"contest":return"Join me and sign up to compete in ".concat(t," on @HackerRank ").concat(e," #programming");case"domain":return"Want to boost your coding skills? @HackerRank is the best way to practice ".concat(t," ").concat(e," #programming");case"domains":return"Keep your coding skills sharp by solving programming challenges ".concat(e,"  on @HackerRank #programming");case"challenges":return"Success! Just solved ".concat(t," on @HackerRank. Can you complete the challenge? ").concat(e," #programming");case"challenge_attempt_share":return"Can you help me solve this challenge? ".concat(e," #programming");case"chapter_completed":return"Just solved all ".concat(c.chapter," challenges in ").concat(c.track," on @HackerRank. Try it out! ").concat(e," #programming");case"code_snippet":return"Check out my code snippet on @HackerRank. ".concat(e);case"badge_share":case"badge_share_profile":return"".concat(Object(J.c)(r)," ").concat(e);default:return"Keep your coding skills sharp by solving programming challenges ".concat(e," on @HackerRank #programming")}}(a,t.props)));break;case"facebook":n&&(l+="&quote=".concat(encodeURIComponent(n))),o&&(l+="&hashtag=".concat(encodeURIComponent(o))),c="https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(a)).concat(l);break;case"linkedin":n&&(l+="&title=".concat(i?encodeURIComponent("".concat(n," - (").concat(i,")")):encodeURIComponent(n))),c="https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(a)).concat(l)}t.shareOnPopup(c),mixpanel.push(["track","SocialShareButtonClick",{h_l:s.location.pathname,social_network:e,page:r}])})}},{key:"renderShareLinks",value:function(){var e=this.props.align,a=this.props.className;return b.a.createElement("div",{className:N()("social-links-wrapper",a,{"pull-left":"left"===e,"text-center":"center"===e,"pull-right":"right"===e||!e})},b.a.createElement("a",{className:"cursor",onClick:this.shareLink.bind(this,"facebook")},b.a.createElement("i",{className:"social-share-icon ui-icon-facebook"})),b.a.createElement("a",{className:"cursor",onClick:this.shareLink.bind(this,"twitter")},b.a.createElement("i",{className:"social-share-icon ui-icon-twitter"})),b.a.createElement("a",{className:"cursor",onClick:this.shareLink.bind(this,"linkedin")},b.a.createElement("i",{className:"social-share-icon ui-icon-linkedin"})))}},{key:"renderFabShare",value:function(){var e=this.props.align,a=this.props.className;return b.a.createElement("div",{className:N()(a,"fab-icon-share-wrapper",{"pull-left":"left"===e,"text-center":"center"===e,"pull-right":"right"===e||!e})},b.a.createElement("a",{className:"social-btn-fab",onClick:this.shareLink.bind(this,"facebook")},b.a.createElement("i",{className:"social-share-icon ui-icon-facebook"})," ",b.a.createElement("span",{className:"fab-fallback-share"},"Share on Facebook")),b.a.createElement("a",{className:"social-btn-fab",onClick:this.shareLink.bind(this,"twitter")},b.a.createElement("i",{className:"social-share-icon ui-icon-twitter"})," ",b.a.createElement("span",{className:"fab-fallback-share"},"Share on Twitter")),b.a.createElement("a",{className:"social-btn-fab",onClick:this.shareLink.bind(this,"linkedin")},b.a.createElement("i",{className:"social-share-icon ui-icon-linkedin"})," ",b.a.createElement("span",{className:"fab-fallback-share"},"Share on LinkedIn")))}},{key:"render",value:function(){return this.props.fab?this.renderFabShare():this.renderShareLinks()}}]),a}(b.a.Component);g()(j,"propTypes",{name:_.a.string,page:_.a.string,slug:_.a.string,meta:_.a.object,align:_.a.oneOf(["right","left","center"]),quote:_.a.string,hashtag:_.a.string,appUtil:_.a.object,fab:_.a.bool,badge:_.a.object,profile:_.a.object}),g()(j,"defaultProps",{meta:{},align:"right",fab:!1}),j=Object(v.b)(function(e){return{profile:e.community.profile}})(j),j=Object(E.a)(j),a.a=j},P9et:function(e,a,t){}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_commons~challenge_list~challenge_list_v2~challenge~onboarding~profile_v2~interview-2baefc34.js.map