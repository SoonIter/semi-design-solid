import{C as y,w as u,l as i,c as E,d as w}from"./iframe.bce6ee51.js";import{j as v}from"./jsx-runtime.8e06bc33.js";function T(){var r={setHandler:function(){},send:function(){}};return new y({transport:r})}var c;(function(r){r.TAB="tab",r.PANEL="panel",r.TOOL="tool",r.TOOLEXTRA="toolextra",r.PREVIEW="preview",r.NOTES_ELEMENT="notes-element"})(c||(c={}));function h(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function C(r,n,e){return n&&h(r.prototype,n),e&&h(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function O(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}var S=C(function r(){var n=this;O(this,r),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.serverChannel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){return n.channel||n.setChannel(T()),n.channel},this.getServerChannel=function(){if(!n.serverChannel)throw new Error("Accessing non-existent serverChannel");return n.serverChannel},this.ready=function(){return n.promise},this.hasChannel=function(){return!!n.channel},this.hasServerChannel=function(){return!!n.serverChannel},this.setChannel=function(e){n.channel=e,n.resolve()},this.setServerChannel=function(e){n.serverChannel=e},this.getElements=function(e){return n.elements[e]||(n.elements[e]={}),n.elements[e]},this.addPanel=function(e,t){n.add(e,Object.assign({type:c.PANEL},t))},this.add=function(e,t){var o=t.type,a=n.getElements(o);a[e]=Object.assign({id:e},t)},this.setConfig=function(e){Object.assign(n.config,e)},this.getConfig=function(){return n.config},this.register=function(e,t){n.loaders[e]&&i.warn("".concat(e," was loaded twice, this could have bad side-effects")),n.loaders[e]=t},this.loadAddons=function(e){Object.values(n.loaders).forEach(function(t){return t(e)})},this.promise=new Promise(function(e){n.resolve=function(){return e(n.getChannel())}})}),l="__STORYBOOK_ADDONS";function A(){return u[l]||(u[l]=new S),u[l]}var b=A(),D=u.window,N=function(n,e){return n.length===e.length&&n.every(function(t,o){return t===e[o]})},g=function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")};function H(){return D.STORYBOOK_HOOKS_CONTEXT||null}function m(){var r=H();if(r==null)throw g();return r}function P(r,n,e){var t=m();if(t.currentPhase==="MOUNT"){e!=null&&!Array.isArray(e)&&i.warn("".concat(r," received a final argument that is not an array (instead, received ").concat(e,"). When specified, the final argument must be an array."));var o={name:r,deps:e};return t.currentHooks.push(o),n(o),o}if(t.currentPhase==="UPDATE"){var a=t.getNextHook();if(a==null)throw new Error("Rendered more hooks than during the previous render.");return a.name!==r&&i.warn("Storybook has detected a change in the order of Hooks".concat(t.currentDecoratorName?" called by ".concat(t.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),e!=null&&a.deps==null&&i.warn("".concat(r," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),e!=null&&a.deps!=null&&e.length!==a.deps.length&&i.warn("The final argument passed to ".concat(r,` changed size between renders. The order and size of this array must remain constant.
Previous: `).concat(a.deps,`
Incoming: `).concat(e)),(e==null||a.deps==null||!N(e,a.deps))&&(n(a),a.deps=e),a}throw g()}function _(r,n,e){var t=P(r,function(a){a.memoizedState=n()},e),o=t.memoizedState;return o}function $(r,n){var e=m(),t=_("useEffect",function(){return{create:r}},n);e.currentEffects.includes(t)||e.currentEffects.push(t)}var I=function(n){var e=n.component,t=n.argTypes,o=n.parameters.docs,a=o===void 0?{}:o,f=a.extractArgTypes,d=f&&e?f(e):{},p=d?E(d,t):t;return p},k="storybook/docs",j="".concat(k,"/snippet-rendered"),s;(function(r){r.AUTO="auto",r.CODE="code",r.DYNAMIC="dynamic"})(s||(s={}));function L(r){var n,e=r==null||(n=r.parameters.docs)===null||n===void 0?void 0:n.source,t=r?.parameters.__isArgsStory;return e?.type===s.DYNAMIC?!1:!t||e?.code||e?.type===s.CODE}function M(r){return w(r)}function R(r,n){var e,t,o=(e=n.parameters.docs)!==null&&e!==void 0?e:{},a=(t=o.transformSource)!==null&&t!==void 0?t:M;return a(r,n)}function Y(r,n){var e,t,o=n!=null&&(e=n.parameters.docs)!==null&&e!==void 0&&(t=e.source)!==null&&t!==void 0&&t.excludeDecorators?n.originalStoryFn(n.args,n):r(),a;return L(n)||(typeof o=="string"?a=o:o instanceof Element&&(a=o.outerHTML),a&&(a=R(a,n))),$(function(){a&&b.getChannel().emit(j,n.id,a)}),o}function z(r){var n=r();return typeof n=="string"?v("div",{dangerouslySetInnerHTML:{__html:n}}):v("div",{ref:function(t){return t?t.appendChild(n):null}})}var F=[Y],U={docs:{inlineStories:!0,prepareForInline:z,source:{type:s.DYNAMIC,language:"html"}}},W=[I];export{W as argTypesEnhancers,F as decorators,U as parameters};
//# sourceMappingURL=config.8541587a.js.map
