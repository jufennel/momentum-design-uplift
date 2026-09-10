import{k as d}from"./iframe-BRzdycIC.js";import{c as _,s as C}from"./commonArgTypes-BG7EqI50.js";import{h as D,a as $}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,T=s=>d` <mdc-filterchip
    @click="${e("onclick")}"
    @keydown="${e("onkeydown")}"
    @keyup="${e("onkeyup")}"
    @focus="${e("onfocus")}"
    label="${s.label}"
    ?selected="${s.selected}"
    ?disabled="${s.disabled}"
  ></mdc-filterchip>`,V={title:"Components/chip/filterchip",tags:["autodocs"],component:"mdc-filterchip",render:T,argTypes:{label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"},..._,...C,...D(["soft-disabled","size","role","type","active","icon-name","color"])}},r={args:{label:"Filterchip",selected:!1,disabled:!1}},l={args:{label:"Filterchip",selected:!0,disabled:!1}},i={args:{label:"Filterchip",selected:!1,disabled:!0}},c={args:{label:"Filterchip",selected:!0,disabled:!0}},a={render:()=>d` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>`},t={render:()=>d`
    <div role="main" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Click each filter chip to observe selected/unselected motion on the background, border color, and checkmark
        icon. Wrap with <code>mdc-motionprovider</code> or enable OS reduced motion to verify instant updates.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-filterchip label="In stock"></mdc-filterchip>
        <mdc-filterchip label="On sale"></mdc-filterchip>
        <mdc-filterchip label="Free shipping"></mdc-filterchip>
      </div>
    </div>
  `,...$()};var o,n,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: false
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,f,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: false
  }
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,u,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: false,
    disabled: true
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,v,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Filterchip',
    selected: true,
    disabled: true
  }
}`,...(k=(v=c.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,x,F;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; gap: 0.5rem;">
      <mdc-filterchip label="Filterchip"></mdc-filterchip>
      <mdc-filterchip label="Selected" selected></mdc-filterchip>
      <mdc-filterchip label="Disabled" disabled></mdc-filterchip>
    </div>\`
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var w,O,A;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <div role="main" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Click each filter chip to observe selected/unselected motion on the background, border color, and checkmark
        icon. Wrap with <code>mdc-motionprovider</code> or enable OS reduced motion to verify instant updates.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-filterchip label="In stock"></mdc-filterchip>
        <mdc-filterchip label="On sale"></mdc-filterchip>
        <mdc-filterchip label="Free shipping"></mdc-filterchip>
      </div>
    </div>
  \`,
  ...hideAllControls()
}`,...(A=(O=t.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const W=["Example","Selected","Disabled","SelectedAndDisabled","StatesAndVariants","Motion"];export{i as Disabled,r as Example,t as Motion,l as Selected,c as SelectedAndDisabled,a as StatesAndVariants,W as __namedExportsOrder,V as default};
