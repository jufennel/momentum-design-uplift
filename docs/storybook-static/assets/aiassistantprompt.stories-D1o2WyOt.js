import{k as r,b as y,t as c}from"./iframe-B-FbFD8E.js";import{c as f,s as S}from"./commonArgTypes-BG7EqI50.js";import{h as x}from"./utils-B5QUENNQ.js";import"./preload-helper-DvzR3F7X.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,g="aiassistantprompt-add-trigger",$="aiassistantprompt-adjust-trigger",h="aiassistantprompt-sources-trigger",v="aiassistantprompt-example",n="aiassistantprompt-suggestions",s="microphone-on-bold",A="microphone-muted-bold",d=e=>{var t;o("remove")(e),(t=e.target)==null||t.remove()},I=e=>{o("onclick")(e);const t=e.currentTarget,a=t.getAttribute("prefix-icon")===s;t.setAttribute("prefix-icon",a?A:s),t.setAttribute("aria-label",a?"Start voice input":"Stop voice input")},T=e=>{const t=document.getElementById(n);if(!t)return;const a=parseFloat(getComputedStyle(t).borderLeftWidth)+parseFloat(getComputedStyle(t).borderRightWidth),m=`${e.getBoundingClientRect().width-a}px`;t.style.setProperty("--mdc-popover-width",m),t.style.setProperty("--mdc-popover-max-width",m)},_=e=>{var a;o("onfocus")(e);const t=e.currentTarget;T(t),(a=document.getElementById(n))==null||a.setAttribute("visible","")},k=e=>{var t;o("onblur")(e),(t=document.getElementById(n))==null||t.removeAttribute("visible")},l=e=>{e.preventDefault()},E=r`
  <mdc-inputchip
    slot="header"
    label="Today's Tasks"
    clear-aria-label="Remove Today's Tasks"
    @remove="${d}"
  ></mdc-inputchip>
  <mdc-inputchip
    slot="header"
    label="Generate Report"
    clear-aria-label="Remove Generate Report"
    @remove="${d}"
  ></mdc-inputchip>
  <mdc-button
    id="${g}"
    slot="footer-left"
    variant="tertiary"
    size="24"
    prefix-icon="plus-bold"
    aria-label="Add to prompt"
  ></mdc-button>
  <mdc-button
    id="${$}"
    slot="footer-left"
    variant="tertiary"
    size="24"
    prefix-icon="adjust-horizontal-bold"
    aria-label="Add context"
  ></mdc-button>
  <mdc-button
    id="${h}"
    slot="footer-right"
    variant="tertiary"
    size="24"
    postfix-icon="arrow-down-bold"
  >
    All sources
  </mdc-button>
  <mdc-button
    slot="footer-right"
    variant="tertiary"
    size="32"
    prefix-icon="${s}"
    aria-label="Stop voice input"
    @click="${I}"
  ></mdc-button>
  <mdc-button
    slot="footer-right"
    variant="primary"
    size="32"
    prefix-icon="arrow-tail-up-bold"
    aria-label="Send prompt"
    @click="${o("onclick")}"
  ></mdc-button>
`,R=r`
  <mdc-menupopover
    triggerID="${g}"
    placement="bottom-start"
    aria-label="Add to prompt"
    @action="${o("onaction")}"
  >
    <mdc-menuitem label="Upload a file"></mdc-menuitem>
    <mdc-menuitem label="Add from Example project"></mdc-menuitem>
    <mdc-menuitem label="Add people"></mdc-menuitem>
  </mdc-menupopover>
`,w=r`
  <mdc-menupopover
    triggerID="${$}"
    placement="bottom-start"
    aria-label="Add context"
    @action="${o("onaction")}"
  >
    <mdc-menuitem label="Model 1"></mdc-menuitem>
    <mdc-menuitem label="Model 2"></mdc-menuitem>
    <mdc-menuitem label="Model 3"></mdc-menuitem>
  </mdc-menupopover>
`,D=r`
  <mdc-menupopover
    triggerID="${h}"
    placement="bottom-end"
    aria-label="Select sources"
    @action="${o("onaction")}"
  >
    <mdc-menuitem label="All sources"></mdc-menuitem>
    <mdc-menuitem label="Source 1"></mdc-menuitem>
    <mdc-menuitem label="Source 2"></mdc-menuitem>
    <mdc-menuitem label="Source 3"></mdc-menuitem>
  </mdc-menupopover>
`,O=r`
  <mdc-popover
    id="${n}"
    triggerID="${v}"
    trigger="manual"
    placement="top"
    disable-flip
    hide-on-escape
    aria-label="Prompt suggestions"
  >
    <mdc-list>
      <mdc-listitem
        label="Summarize Today's Tasks"
        @mousedown="${l}"
        @click="${o("onclick")}"
      ></mdc-listitem>
      <mdc-listitem
        label="Draft an Example project update"
        @mousedown="${l}"
        @click="${o("onclick")}"
      ></mdc-listitem>
      <mdc-listitem
        label="Generate Report recap"
        @mousedown="${l}"
        @click="${o("onclick")}"
      ></mdc-listitem>
    </mdc-list>
  </mdc-popover>
`,M=e=>r`
  <div style="padding-block-start: 14rem;">
    <mdc-aiassistantprompt
      id="${v}"
      @input="${o("oninput")}"
      @change="${o("onchange")}"
      @focus="${_}"
      @blur="${k}"
      class="${e.class}"
      style="${e.style}"
      name="${e.name}"
      value="${e.value}"
      placeholder="${c(e.placeholder)}"
      rows="${e.rows}"
      data-aria-label="${c(e["data-aria-label"])}"
      ?disabled="${e.disabled}"
      ?readonly="${e.readonly}"
    >
      ${E}
    </mdc-aiassistantprompt>
    ${R} ${w} ${D} ${O}
  </div>
`,z={title:"Widgets/aiassistantprompt",tags:["autodocs"],component:"mdc-aiassistantprompt",render:M,argTypes:{...f,...S,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},rows:{control:"number"},disabled:{control:"boolean"},readonly:{control:"boolean"},"data-aria-label":{control:"text"},...x(["validity","willValidate"])}},i={args:{class:"custom-classname",style:"margin-top: 20px;",name:"prompt",value:"",placeholder:"Ask about the Example project",rows:y.ROWS,disabled:!1,readonly:!1,"data-aria-label":"AI assistant prompt"}};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    name: 'prompt',
    value: '',
    placeholder: 'Ask about the Example project',
    rows: DEFAULTS.ROWS,
    disabled: false,
    readonly: false,
    'data-aria-label': 'AI assistant prompt'
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const U=["Example"];export{i as Example,U as __namedExportsOrder,z as default};
