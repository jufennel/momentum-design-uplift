import{s as h,x as se,y as x,z as T,q as le,I,k as t,C as y,t as n,p as i,E as pe}from"./iframe-Ctm5TQtB.js";import{i as v}from"./manifest-CNQCgfOm.js";import{c as be,s as ue}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,k=[9,99,999],r=e=>t`<mdc-button
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
    ?active="${e.active}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    variant="${n(e.variant)}"
    size="${n(e.size)}"
    color="${n(e.color)}"
    prefix-icon="${n(e["prefix-icon"])}"
    postfix-icon="${n(e["postfix-icon"])}"
    type="${n(e.type)}"
    name="${n(e.name)}"
    value="${n(e.value)}"
    role="${n(e.role)}"
    tabIndex="${n(e.tabIndex)}"
    aria-label="${n(e["aria-label"])}"
    ariaStateKey="${n(e.ariaStateKey)}"
    ?inverted="${e.inverted}"
    style="${n(e.style)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-button
  >`,de={"has-badge":{control:"boolean",description:"When true, shows a notification badge on the pill button."},"badge-type":{control:"select",options:Object.values(i),if:{arg:"has-badge",eq:!0}},"badge-counter":{control:"number",if:{arg:"badge-type",eq:i.COUNTER}},"badge-max-counter":{control:"select",options:k,if:{arg:"badge-type",eq:i.COUNTER}},"badge-icon-name":{control:"select",options:Object.keys(v),if:{arg:"badge-type",eq:i.ICON}},"badge-variant":{control:"select",options:Object.values(I),if:{arg:"badge-type",eq:i.ICON}},"badge-overlay":{control:"boolean",if:{arg:"has-badge",eq:!0}}},ce=e=>t`
  <div style="position: relative; display: inline-flex;">
    ${r(e)}
    ${e["has-badge"]?t`<mdc-badge
          style="position: absolute; top: -0.125rem; inset-inline-end: -0.125rem;"
          type="${e["badge-type"]}"
          icon-name="${n(e["badge-icon-name"])}"
          counter="${n(e["badge-counter"])}"
          max-counter="${n(e["badge-max-counter"])}"
          variant="${n(e["badge-variant"])}"
          ?overlay="${e["badge-overlay"]}"
          aria-hidden="true"
        ></mdc-badge>`:pe}
  </div>
`,ye={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:r,argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"select",options:Object.keys(v)},"postfix-icon":{control:"select",options:Object.keys(v)},active:{control:"boolean"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only buttons.",table:{category:"attributes"}},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(h)},size:{control:"select",options:Object.values(se)},color:{control:"select",options:Object.values(x)},type:{control:"select",options:Object.values(T)},name:{control:"text"},value:{control:"text"},ariaStateKey:{control:"text"},inverted:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...be,...ue}},a={render:ce,argTypes:de,args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:h.PRIMARY,size:se[32],color:x.DEFAULT,type:T.BUTTON,role:"button",tabIndex:0,inverted:!1,"has-badge":!1,"badge-type":le.TYPE,"badge-counter":3,"badge-max-counter":k[1],"badge-icon-name":"placeholder-bold","badge-variant":I.PRIMARY,"badge-overlay":!0}},l={render:ce,argTypes:de,args:{...a.args,"has-badge":!1,"badge-type":le.TYPE,"badge-counter":3,"badge-max-counter":k[1],"badge-icon-name":"placeholder-bold","badge-variant":I.PRIMARY,"badge-overlay":!0}},d={render:e=>t`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${r(e)}
    </div>`,args:{...a.args,inverted:!0}},c={args:{...a.args,children:"Left Icon","prefix-icon":"placeholder-bold"}},p={args:{...a.args,children:"Right Icon","postfix-icon":"placeholder-bold"}},s={argTypes:{size:{options:Object.values(y)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:h.PRIMARY,size:y[32],color:x.DEFAULT,type:T.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},b={render:e=>t`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${r(e)}
    </div>`,argTypes:{size:{options:Object.values(y)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{...s.args,inverted:!0}},u={render:e=>r({...e,style:"width: 150px;"}),args:{...a.args,children:"Long text with icons"}},f={render:e=>r({...e,style:"width: 150px;"}),args:{...a.args,children:"Long text with icons","prefix-icon":"placeholder-bold"}},m={render:e=>t`<mdc-button
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${n(e.variant)}"
      size="${n(e.size)}"
      color="${n(e.color)}"
      type="${n(e.type)}"
      role="${n(e.role)}"
      tabIndex="${n(e.tabIndex)}"
      aria-label="${n(e["aria-label"])}"
      ariaStateKey="${n(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${n(e.style)}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      ${e.children}
    </mdc-button>`,args:{...a.args,children:"Loading..."}},g={render:e=>t`<mdc-button
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${n(e.variant)}"
      size="${n(e.size)}"
      color="${n(e.color)}"
      type="${n(e.type)}"
      role="${n(e.role)}"
      tabIndex="${n(e.tabIndex)}"
      aria-label="${n(e["aria-label"])}"
      ariaStateKey="${n(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${n(e.style)}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-animation
        name="wow"
        loop="true"
        slot="postfix"
        style="height: 1.25rem; width: 1.25rem; flex-shrink: 0;"
      ></mdc-animation>
      ${e.children}
    </mdc-button>`,args:{...a.args,children:"Wow"}},$={render:e=>t`<mdc-button
        @click="${o("onclick")}"
        @keydown="${o("onkeydown")}"
        @keyup="${o("onkeyup")}"
        @focus="${o("onfocus")}"
        ?active="${e.active}"
        ?disabled="${e.disabled}"
        ?soft-disabled="${e["soft-disabled"]}"
        variant="${n(e.variant)}"
        size="${n(e.size)}"
        color="${n(e.color)}"
        type="${n(e.type)}"
        role="${n(e.role)}"
        tabIndex="${n(e.tabIndex)}"
        aria-label="${n(e["aria-label"])}"
        ariaStateKey="${n(e.ariaStateKey)}"
        ?inverted="${e.inverted}"
        style="${n(e.style)}"
        ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
        id="button"
      >
        ${e.children}

        <div slot="prefix">
          <mdc-icon name="placeholder-bold" size="small"></mdc-icon>
        </div>
        <div slot="postfix">
          <mdc-brandvisual name="webex-app-icon-color-container" style="width: 1.25rem;"></mdc-brandvisual>
        </div>
      </mdc-button>
      <mdc-tooltip show-arrow="true" triggerID="button" position="top">Tooltip text</mdc-tooltip>`,args:{...a.args,"prefix-icon":"placeholder-bold","postfix-icon":"placeholder-bold",children:"Hover me"}};var O,S,B;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: renderPillButtonWithBadge,
  argTypes: pillButtonBadgeArgTypes,
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
    inverted: false,
    'has-badge': false,
    'badge-type': BADGE_DEFAULTS.TYPE,
    'badge-counter': 3,
    'badge-max-counter': BADGE_MAX_COUNTER_LIST[1],
    'badge-icon-name': 'placeholder-bold',
    'badge-variant': BADGE_ICON_VARIANT.PRIMARY,
    'badge-overlay': true
  }
}`,...(B=(S=a.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var E,A,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: renderPillButtonWithBadge,
  argTypes: pillButtonBadgeArgTypes,
  args: {
    ...Example.args,
    'has-badge': false,
    'badge-type': BADGE_DEFAULTS.TYPE,
    'badge-counter': 3,
    'badge-max-counter': BADGE_MAX_COUNTER_LIST[1],
    'badge-icon-name': 'placeholder-bold',
    'badge-variant': BADGE_ICON_VARIANT.PRIMARY,
    'badge-overlay': true
  }
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var D,_,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      \${render(args)}
    </div>\`,
  args: {
    ...Example.args,
    inverted: true
  }
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var N,R,U;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    children: 'Left Icon',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var z,L,C;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    children: 'Right Icon',
    'postfix-icon': 'placeholder-bold'
  }
}`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var W,Y,K;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    },
    'aria-label': {
      description: 'Aria label for the icon button. Required for accessibility.'
    }
  },
  args: {
    'prefix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
    'aria-label': 'icon button'
  }
}`,...(K=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var M,j,q;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => html\`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      \${render(args)}
    </div>\`,
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    },
    'aria-label': {
      description: 'Aria label for the icon button. Required for accessibility.'
    }
  },
  args: {
    ...IconButton.args,
    inverted: true
  }
}`,...(q=(j=b.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,G,V;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    ...Example.args,
    children: 'Long text with icons'
  }
}`,...(V=(G=u.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var Z,X,H;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    ...Example.args,
    children: 'Long text with icons',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(H=(X=f.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var J,Q,ee;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => html\`<mdc-button
      @click="\${action('onclick')}"
      @keydown="\${action('onkeydown')}"
      @keyup="\${action('onkeyup')}"
      @focus="\${action('onfocus')}"
      ?active="\${args.active}"
      ?disabled="\${args.disabled}"
      ?soft-disabled="\${args['soft-disabled']}"
      variant="\${ifDefined(args.variant)}"
      size="\${ifDefined(args.size)}"
      color="\${ifDefined(args.color)}"
      type="\${ifDefined(args.type)}"
      role="\${ifDefined(args.role)}"
      tabIndex="\${ifDefined(args.tabIndex)}"
      aria-label="\${ifDefined(args['aria-label'])}"
      ariaStateKey="\${ifDefined(args.ariaStateKey)}"
      ?inverted="\${args.inverted}"
      style="\${ifDefined(args.style)}"
      ?auto-focus-on-mount="\${args['auto-focus-on-mount']}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      \${args.children}
    </mdc-button>\`,
  args: {
    ...Example.args,
    children: 'Loading...'
  }
}`,...(ee=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ne,oe,ae;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => html\`<mdc-button
      @click="\${action('onclick')}"
      @keydown="\${action('onkeydown')}"
      @keyup="\${action('onkeyup')}"
      @focus="\${action('onfocus')}"
      ?active="\${args.active}"
      ?disabled="\${args.disabled}"
      ?soft-disabled="\${args['soft-disabled']}"
      variant="\${ifDefined(args.variant)}"
      size="\${ifDefined(args.size)}"
      color="\${ifDefined(args.color)}"
      type="\${ifDefined(args.type)}"
      role="\${ifDefined(args.role)}"
      tabIndex="\${ifDefined(args.tabIndex)}"
      aria-label="\${ifDefined(args['aria-label'])}"
      ariaStateKey="\${ifDefined(args.ariaStateKey)}"
      ?inverted="\${args.inverted}"
      style="\${ifDefined(args.style)}"
      ?auto-focus-on-mount="\${args['auto-focus-on-mount']}"
    >
      <mdc-animation
        name="wow"
        loop="true"
        slot="postfix"
        style="height: 1.25rem; width: 1.25rem; flex-shrink: 0;"
      ></mdc-animation>
      \${args.children}
    </mdc-button>\`,
  args: {
    ...Example.args,
    children: 'Wow'
  }
}`,...(ae=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,re,ie;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => html\`<mdc-button
        @click="\${action('onclick')}"
        @keydown="\${action('onkeydown')}"
        @keyup="\${action('onkeyup')}"
        @focus="\${action('onfocus')}"
        ?active="\${args.active}"
        ?disabled="\${args.disabled}"
        ?soft-disabled="\${args['soft-disabled']}"
        variant="\${ifDefined(args.variant)}"
        size="\${ifDefined(args.size)}"
        color="\${ifDefined(args.color)}"
        type="\${ifDefined(args.type)}"
        role="\${ifDefined(args.role)}"
        tabIndex="\${ifDefined(args.tabIndex)}"
        aria-label="\${ifDefined(args['aria-label'])}"
        ariaStateKey="\${ifDefined(args.ariaStateKey)}"
        ?inverted="\${args.inverted}"
        style="\${ifDefined(args.style)}"
        ?auto-focus-on-mount="\${args['auto-focus-on-mount']}"
        id="button"
      >
        \${args.children}

        <div slot="prefix">
          <mdc-icon name="placeholder-bold" size="small"></mdc-icon>
        </div>
        <div slot="postfix">
          <mdc-brandvisual name="webex-app-icon-color-container" style="width: 1.25rem;"></mdc-brandvisual>
        </div>
      </mdc-button>
      <mdc-tooltip show-arrow="true" triggerID="button" position="top">Tooltip text</mdc-tooltip>\`,
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold',
    'postfix-icon': 'placeholder-bold',
    children: 'Hover me'
  }
}`,...(ie=(re=$.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const ve=["Example","PillButton","PillButtonInverted","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","IconButtonInverted","PillButtonEllipsis","PillWithPrefixIconEllipsis","PillWithPrefixSlot","PillWithPostfixSlot","ButtonWithTooltip"];export{$ as ButtonWithTooltip,a as Example,s as IconButton,b as IconButtonInverted,l as PillButton,u as PillButtonEllipsis,d as PillButtonInverted,p as PillWithPostfixIcon,g as PillWithPostfixSlot,c as PillWithPrefixIcon,f as PillWithPrefixIconEllipsis,m as PillWithPrefixSlot,ve as __namedExportsOrder,ye as default};
