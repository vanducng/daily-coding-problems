(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{Gwnu:function(e,a,t){"use strict";t("LK8F"),t("Z2Ku"),t("L9s1");var n=t("cDcd"),l=t.n(n),o=t("17x9"),r=t.n(o),c=t("MGin"),i=t("TSYQ"),s=t.n(i),u=t("fvjX"),d=t("5J+W"),m=t("cK/l");t("JGr0");function p(e){var a=e.slug,t=e.linkText,n=e.icon,o=e.dataAttr,r=e.challenge,i=e.appUtil,u=i.params,d=u.challengeSlug,p=u.contestSlug,g=void 0===p?"master":p,h=i.isRouteActive,b="".concat(Object(m.f)(r),"/").concat(a);return h(b)?null:l.a.createElement("div",{className:"link-wrapper"},l.a.createElement(c.Link,{to:b,"data-analytics":"ChallengeSidebarUI","data-attr1":o,"data-attr2":d,"data-attr3":g},l.a.createElement("i",{className:s()(n,"ui-icon-grey sidebar-icon")}),l.a.createElement("span",{className:"ui-icon-label"},t)))}var g=function(e){var a=e.challenge,t=e.challenge,n=t.custom_tabs,o=t.is_editorial_available,r=t.kind,c=e.appUtil.location.pathname.includes("/forum"),i="mcq"===r,s=!!(Array.isArray(n)?n.length:n);return!s&&!o&&i&&c?null:l.a.createElement("div",{className:"challenge-sidebar-help"},l.a.createElement("h2",{className:"text-sec-headline-s"},"Need Help?"),l.a.createElement("hr",{className:"hr-line-light"}),l.a.createElement("div",{className:"mlB"},!!s&&l.a.createElement(p,{slug:"tutorial",linkText:"View tutorial",icon:"ui-icon-tutorial",dataAttr:"tutorial",challenge:a}),l.a.createElement(p,{slug:"forum",linkText:"View discussions",icon:"ui-icon-discussion",dataAttr:"discussions",challenge:a}),o&&l.a.createElement(p,{slug:"editorial",linkText:"View editorial",icon:"ui-icon-editorial",dataAttr:"editorial",challenge:a}),!i&&l.a.createElement(p,{slug:"leaderboard",linkText:"View top submissions",icon:"ui-icon-trophy",dataAttr:"topscorers",challenge:a})))};p.propTypes={appUtil:r.a.object.isRequired,slug:r.a.string.isRequired,linkText:r.a.string.isRequired,icon:r.a.string.isRequired,dataAttr:r.a.string.isRequired,challenge:r.a.object.isRequired},g.propTypes={challenge:r.a.object.isRequired};p=Object(d.a)(p),a.a=Object(u.d)(d.a)(g)},JGr0:function(e,a,t){},SDNY:function(e,a,t){},Vspg:function(e,a,t){},Xdos:function(e,a,t){"use strict";t.r(a),t.d(a,"PureChallengeLeaderboard",function(){return T});t("CX2u");var n=t("lwsE"),l=t.n(n),o=t("W8MJ"),r=t.n(o),c=t("a1gu"),i=t.n(c),s=t("Nsbk"),u=t.n(s),d=t("PJYZ"),m=t.n(d),p=t("7W2i"),g=t.n(p),h=t("lSNA"),b=t.n(h),f=t("cDcd"),v=t.n(f),k=t("17x9"),E=t.n(k),N=t("/MKj"),S=t("fvjX"),j=t("ix/g"),y=t("5J+W"),w=t("cK/l"),x=t("qePO"),L=t("LNHK"),q=t("z5MK"),A=t("2X1W"),C=t("lyz7"),O=t("cW2f"),U=t("9q+v"),M=t("Gwnu"),R=function(e){function a(){var e;return l()(this,a),e=i()(this,u()(a).call(this)),b()(m()(e),"state",void 0),b()(m()(e),"unlockSolution",function(){e.props.appUtil.isAuthRequired({type:"info",data:"Please signup or login to unlock solutions."})||e.setState({isUnlockSolutionModalOpen:!0})}),b()(m()(e),"closeUnlockSolutionModal",function(){e.setState({isUnlockSolutionModalOpen:!1})}),b()(m()(e),"triggerUnlockSolution",function(){var a=e.props,t=a.challenge,n=a.challengeActions,l=t.slug,o=t.contest_slug;e.setState({unlockingSolution:!0}),n.unlockSolution({contestSlug:o,challengeSlug:l}).finally(function(){e.setState({unlockingSolution:!1,isUnlockSolutionModalOpen:!1})})}),b()(m()(e),"renderLeaderboard",function(){var a=e.props,t=a.contest,n=a.challenge,l=a.leaderboard,o=a.profile,r=l.pageNo,c=l.total,i=l.limit;return v.a.createElement("div",{className:"container panes-container"},v.a.createElement("div",{className:"left-pane"},v.a.createElement(q.a,null,v.a.createElement(q.a.Content,{className:"tab-content"},v.a.createElement(C.a,{contest:t,challenge:n,unlockSolution:e.unlockSolution,leaderboard:l,profile:o,leaderboardType:"ChallengeLeaderboard"}))),!!c&&v.a.createElement(O.a,{totalItems:c,currentPage:r,itemPerPage:i,className:"leaderboard-pagination"})),v.a.createElement(j.a,null,v.a.createElement("aside",{className:"right-pane challenge-sidebar"},v.a.createElement(U.a,{leaderboard:l,availableFilters:["language","country","company","school"],filterLocation:"ChallengeLeaderboard"}),v.a.createElement(M.a,{challenge:n}))))}),e.state={},e}return g()(a,e),r()(a,[{key:"render",value:function(){var e=this.state,a=e.isUnlockSolutionModalOpen,t=e.unlockingSolution;return v.a.createElement("div",{className:"challenge-leaderboard"},this.renderLeaderboard(),v.a.createElement(A.a,{className:"challenge-modal theme-m",title:"Confirmation",open:a,onConfirm:this.triggerUnlockSolution,onCancel:this.closeUnlockSolutionModal,onClose:this.closeUnlockSolutionModal,inProgress:t},v.a.createElement("p",null,"Do you want to unlock solutions? If you do, your score will not be counted toward your progress.")))}}]),a}(v.a.Component);b()(R,"propTypes",{contest:E.a.object.isRequired,challenge:E.a.object.isRequired,challengeActions:E.a.object.isRequired,leaderboard:E.a.object,appUtil:E.a.object.isRequired,profile:E.a.object.isRequired});var T=R;R=Object(N.b)(function(e,a){var t=a.appUtil.params,n=t.contestSlug,l=void 0===n?"master":n,o=e.community.profile,r=Object(w.d)(e,t);return{challenge:r.detail,leaderboard:r.leaderboard,contest:Object(x.a)(l,e),profile:o}},function(e){return{challengeActions:Object(S.b)(L.a,e)}})(R),R=Object(y.a)(R),a.default=R},foLx:function(e,a,t){"use strict";t("Z2Ku"),t("f3/d");var n=t("MVZn"),l=t.n(n),o=t("cDcd"),r=t.n(o),c=t("TSYQ"),i=t.n(c),s=t("eOGF"),u=(t("SDNY"),["http://cdn.hrcdn.net/hackerrank/assets/gravatar.jpg","https://hrcdn.net/s3_pub/hr-avatars/dea116b8-45f8-4915-9995-9e9d853100fd/150x150.png"]),d=function(e){var a=e.avatar,t=e.defaultAvatar,n=void 0!==a,o=t?a!==t:!u.includes(a);return n&&o?function(e){var a=e.avatar,t=e.defaultAvatar,n=void 0===t?u[0]:t,l=e.size,o=e.avatarClass;return r.a.createElement("img",{src:a,height:l,width:l,className:i()("ui-avatar__img",o),onError:function(e){e.target.src!==n&&(e.target.src=n)}})}(e):function(e){var a=e.name,t=e.size,n=e.avatarClass,o=e.customColor,c=e.customFontSize,u=e.customBg,d=o||Object(s.Q)(a),m=Object(s.p)(a),p=c||"".concat(Math.max(Math.round(t/3),10),"px"),g=u?{backgroundImage:"url(".concat(u,")"),backgroundSize:"cover"}:{backgroundColor:d};return r.a.createElement("span",{className:i()("ui-avatar__initials",n),style:l()({},g,{width:"".concat(t,"px"),height:"".concat(t,"px"),fontSize:p})},r.a.createElement("span",{className:"ui-avatar__text absolute-center"},m))}(e)};d.defaultProps={size:25},a.a=d},lrHr:function(e,a,t){"use strict";var n=t("pVnL"),l=t.n(n),o=t("QILm"),r=t.n(o),c=t("cDcd"),i=t.n(c),s=t("TSYQ"),u=t.n(s);t("oLQN");a.a=function(e){var a=e.className,t=e.label,n=e.checked,o=r()(e,["className","label","checked"]),c=i.a.createElement("div",{className:"radio-wrap"},i.a.createElement("input",l()({type:"radio",className:"radio-input",checked:n},o)),i.a.createElement("span",{className:"custom-holder"}));return i.a.createElement("div",{className:u()("ui-radio",{checked:n},a)},t?i.a.createElement("label",{className:"label-wrap"},c,i.a.createElement("div",{className:"label"},t)):c)}},o3IM:function(e,a,t){"use strict";var n=t("pVnL"),l=t.n(n),o=t("QILm"),r=t.n(o),c=t("cDcd"),i=t.n(c),s=t("TSYQ"),u=t.n(s);t("Vspg");function d(e){var a=e.text,t=e.onDelete,n=e.removable,o=e.size,c=e.className,s=r()(e,["text","onDelete","removable","size","className"]);return i.a.createElement("div",l()({className:u()("ui-tag",o,c)},s),i.a.createElement("span",{className:"tag-text ellipsis"},a),n&&i.a.createElement("span",{className:"delete",onClick:function(e){e.stopPropagation(),t(e)}},i.a.createElement("i",{className:"ui-icon-cross"})))}d.defaultProps={onDelete:function(){},removable:!0,size:"medium"},a.a=d},oLQN:function(e,a,t){}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_leaderboardv2-0e61d662.js.map