import{m as a,b as p,i as m,c as o,f as d,t as y,h as b,j as g}from"./web.4ce277ca.js";import{c as f,a as h,s as B,B as c}from"./Button.162c9648.js";import"./env.2c279131.js";const C=y('<div role="group"></div>'),_=f.PREFIX,v=r=>{const t=a({size:"default",disabled:!1},r),u={[`${t.className}`]:!!t.className,[`${_}-group`]:!t.disabled&&!!t.type},i=p(()=>{const{disabled:e,type:n,theme:l,size:s}=t;return{disabled:e,type:n,theme:l,size:s}});return(()=>{const e=C.cloneNode(!0);return m(e,o(h.Provider,{get value(){return i()},get children(){return t.children}})),d(n=>{const l=u,s=r["aria-label"];return n._v$=b(e,l,n._v$),s!==n._v$2&&g(e,"aria-label",n._v$2=s),n},{_v$:void 0,_v$2:void 0}),e})()},{htmlTypes:T,btnTypes:$,sizes:G,themes:x}=B,k={parameters:{storySource:{source:`import { mergeProps as _$mergeProps } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import Button from '../Button';
import ButtonGroup from '../buttonGroup';
import { strings } from '@douyinfe/semi-foundation/button/constants';
const {
  htmlTypes,
  btnTypes,
  sizes,
  themes
} = strings;
export default {
  title: 'ButtonGroup',
  argTypes: {
    content: {
      control: 'text',
      value: 'hello'
    },
    backgroundColor: {
      control: 'color'
    },
    label: {
      control: 'text'
    },
    onClick: {
      action: 'onClick'
    },
    loading: {
      control: 'boolean',
      value: false
    },
    size: {
      control: {
        type: 'select'
      },
      options: sizes
    },
    type: {
      control: {
        type: 'select'
      },
      options: btnTypes
    },
    theme: {
      control: {
        type: 'select'
      },
      options: themes
    }
  }
};
export const ButtonGroupDemo = props => _$createComponent(ButtonGroup, _$mergeProps({
  "aria-label": "ButtonGroup demo"
}, props, {
  get children() {
    return [_$createComponent(Button, {
      children: "\\u590D\\u5236"
    }), _$createComponent(Button, {
      type: "primary",
      children: "\\u67E5\\u627E"
    }), _$createComponent(Button, {
      type: "danger",
      children: "\\u7C98\\u8D34"
    })];
  }

}));`,locationsMap:{"button-group-demo":{startLoc:{col:31,line:52},endLoc:{col:3,line:67},startBody:{col:31,line:52},endBody:{col:3,line:67}}}}},title:"ButtonGroup",argTypes:{content:{control:"text",value:"hello"},backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},loading:{control:"boolean",value:!1},size:{control:{type:"select"},options:G},type:{control:{type:"select"},options:$},theme:{control:{type:"select"},options:x}}},P=r=>o(v,a({"aria-label":"ButtonGroup demo"},r,{get children(){return[o(c,{children:"\u590D\u5236"}),o(c,{type:"primary",children:"\u67E5\u627E"}),o(c,{type:"danger",children:"\u7C98\u8D34"})]}})),L=["ButtonGroupDemo"];export{P as ButtonGroupDemo,L as __namedExportsOrder,k as default};
//# sourceMappingURL=ButtonGroup.stories.01714a5a.js.map
