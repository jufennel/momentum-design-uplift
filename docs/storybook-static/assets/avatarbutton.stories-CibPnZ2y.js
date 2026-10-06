import{n as i,o as c,k as l,t}from"./iframe-CGzbqxft.js";import{i as m}from"./manifest-CGL-1vHQ.js";import{c as u,s as p}from"./commonArgTypes-BG7EqI50.js";import{h as d}from"./utils-B5QUENNQ.js";import{i as b}from"./imageFixtures-CD4avj2q.js";import"./preload-helper-DvzR3F7X.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,y=o=>l`
  <mdc-avatarbutton
    @click="${e("onclick")}"
    @keydown="${e("onkeydown")}"
    @keyup="${e("onkeyup")}"
    @focus="${e("onfocus")}"
    counter="${t(o.counter)}"
    icon-name="${t(o["icon-name"])}"
    initials="${t(o.initials)}"
    presence="${o.presence==="none"?void 0:t(o.presence)}"
    size="${t(o.size)}"
    src="${t(o.src)}"
    ?is-typing="${o["is-typing"]}"
    aria-label=${o["aria-label"]}
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
  ></mdc-avatarbutton>
`,E={title:"Components/avatar/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:y,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(i)]},size:{control:"select",options:Object.values(c)},"is-typing":{control:"boolean"},"icon-name":{control:"select",options:Object.keys(m)},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...d(["active","disabled","soft-disabled","tabIndex","role","type","ariaStateKey","name","value","--mdc-button-height","--mdc-button-background","--mdc-button-border-color","--mdc-button-text-color"]),...u,...p}},n={args:{src:b.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const O=["Example"];export{n as Example,O as __namedExportsOrder,E as default};
