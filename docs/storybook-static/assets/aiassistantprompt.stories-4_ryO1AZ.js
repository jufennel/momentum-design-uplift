import{k as r,b as f,t as p}from"./iframe-CGzbqxft.js";import{c as S,s as A}from"./commonArgTypes-BG7EqI50.js";import{h as x}from"./utils-B5QUENNQ.js";import"./preload-helper-DvzR3F7X.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,v="aiassistantprompt-add-trigger",h="aiassistantprompt-adjust-trigger",y="aiassistantprompt-sources-trigger",d="aiassistantprompt-example",n="aiassistantprompt-suggestions",c="microphone-on-bold",I="microphone-muted-bold",u=e=>{var t;o("remove")(e),(t=e.target)==null||t.remove()},T=e=>{o("onclick")(e);const t=e.currentTarget,a=t.getAttribute("prefix-icon")===c;t.setAttribute("prefix-icon",a?I:c),t.setAttribute("aria-label",a?"Start voice input":"Stop voice input")},E=e=>{const t=document.getElementById(n);if(!t)return;const a=parseFloat(getComputedStyle(t).borderLeftWidth)+parseFloat(getComputedStyle(t).borderRightWidth),i=`${e.getBoundingClientRect().width-a}px`;t.style.setProperty("--mdc-popover-width",i),t.style.setProperty("--mdc-popover-max-width",i)},_=e=>{var a;o("onfocus")(e);const t=e.currentTarget;E(t),(a=document.getElementById(n))==null||a.setAttribute("visible","")},R=e=>{var t;o("onblur")(e),(t=document.getElementById(n))==null||t.removeAttribute("visible")},s=e=>{e.preventDefault()},m=e=>{var i;o("onclick")(e);const t=e.currentTarget,a=document.getElementById(d);a&&(a.value=t.getAttribute("label")??""),(i=document.getElementById(n))==null||i.removeAttribute("visible")},k=r`
  <mdc-inputchip
    slot="header"
    label="Today's Tasks"
    clear-aria-label="Remove Today's Tasks"
    @remove="${u}"
  ></mdc-inputchip>
  <mdc-inputchip
    slot="header"
    label="Generate Report"
    clear-aria-label="Remove Generate Report"
    @remove="${u}"
  ></mdc-inputchip>
  <mdc-button
    id="${v}"
    slot="footer-left"
    variant="tertiary"
    size="24"
    prefix-icon="plus-bold"
    aria-label="Add to prompt"
  ></mdc-button>
  <mdc-button
    id="${h}"
    slot="footer-left"
    variant="tertiary"
    size="24"
    prefix-icon="adjust-horizontal-bold"
    aria-label="Add context"
  ></mdc-button>
  <mdc-button
    id="${y}"
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
    prefix-icon="${c}"
    aria-label="Stop voice input"
    @click="${T}"
  ></mdc-button>
  <mdc-button
    slot="footer-right"
    variant="primary"
    size="32"
    prefix-icon="arrow-tail-up-bold"
    aria-label="Send prompt"
    @click="${o("onclick")}"
  ></mdc-button>
`,w=r`
  <mdc-menupopover
    triggerID="${v}"
    placement="bottom-start"
    aria-label="Add to prompt"
    @action="${o("onaction")}"
  >
    <mdc-menuitem label="Upload a file"></mdc-menuitem>
    <mdc-menuitem label="Add from Example project"></mdc-menuitem>
    <mdc-menuitem label="Add people"></mdc-menuitem>
  </mdc-menupopover>
`,D=r`
  <mdc-menupopover
    triggerID="${h}"
    placement="bottom-start"
    aria-label="Add context"
    @action="${o("onaction")}"
  >
    <mdc-menuitem label="Model 1"></mdc-menuitem>
    <mdc-menuitem label="Model 2"></mdc-menuitem>
    <mdc-menuitem label="Model 3"></mdc-menuitem>
  </mdc-menupopover>
`,O=r`
  <mdc-menupopover
    triggerID="${y}"
    placement="bottom-end"
    aria-label="Select sources"
    @action="${o("onaction")}"
  >
    <mdc-menuitem label="All sources"></mdc-menuitem>
    <mdc-menuitem label="Source 1"></mdc-menuitem>
    <mdc-menuitem label="Source 2"></mdc-menuitem>
    <mdc-menuitem label="Source 3"></mdc-menuitem>
  </mdc-menupopover>
`,M=r`
  <mdc-popover
    id="${n}"
    triggerID="${d}"
    trigger="manual"
    placement="top"
    disable-flip
    hide-on-escape
    aria-label="Prompt suggestions"
  >
    <mdc-list>
      <mdc-listitem
        label="Summarize Today's Tasks"
        @mousedown="${s}"
        @click="${m}"
      ></mdc-listitem>
      <mdc-listitem
        label="Draft an Example project update"
        @mousedown="${s}"
        @click="${m}"
      ></mdc-listitem>
      <mdc-listitem
        label="Generate Report recap"
        @mousedown="${s}"
        @click="${m}"
      ></mdc-listitem>
    </mdc-list>
  </mdc-popover>
`,C=e=>r`
  <div style="padding-block-start: 14rem;">
    <mdc-aiassistantprompt
      id="${d}"
      @input="${o("oninput")}"
      @change="${o("onchange")}"
      @focus="${_}"
      @blur="${R}"
      class="${e.class}"
      style="${e.style}"
      name="${e.name}"
      value="${e.value}"
      placeholder="${p(e.placeholder)}"
      rows="${e.rows}"
      data-aria-label="${p(e["data-aria-label"])}"
      ?disabled="${e.disabled}"
      ?readonly="${e.readonly}"
    >
      ${k}
    </mdc-aiassistantprompt>
    ${w} ${D} ${O} ${M}
  </div>
`,B={title:"Widgets/aiassistantprompt",tags:["autodocs"],component:"mdc-aiassistantprompt",render:C,argTypes:{...S,...A,name:{control:"text"},value:{control:"text"},placeholder:{control:"text"},rows:{control:"number"},disabled:{control:"boolean"},readonly:{control:"boolean"},"data-aria-label":{control:"text"},...x(["validity","willValidate"])}},l={args:{class:"custom-classname",style:"margin-top: 20px;",name:"prompt",value:"",placeholder:"Ask about the Example project",rows:f.ROWS,disabled:!1,readonly:!1,"data-aria-label":"AI assistant prompt"}};var b,g,$;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(g=l.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};const U=["Example"];export{l as Example,U as __namedExportsOrder,B as default};
