import{p as e,I as F,q as b,k as o}from"./iframe-Ctm5TQtB.js";import{i as J}from"./manifest-CNQCgfOm.js";import{c as K,s as Q}from"./commonArgTypes-BG7EqI50.js";import{a as X}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var p=Object.freeze,Z=Object.defineProperty,ee=(t,ne)=>p(Z(t,"raw",{value:p(t.slice())})),y;const n=[9,99,999],te=t=>o`
  <div
    data-badge-demo
    style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;"
  >
    <mdc-badge
      data-testid="example-badge"
      type="${t.type}"
      icon-name="${t["icon-name"]}"
      counter="${t.counter}"
      max-counter="${t["max-counter"]}"
      variant="${t.variant}"
      ?overlay="${t.overlay}"
      aria-label="${t["aria-label"]}"
    ></mdc-badge>
  </div>
`,z=t=>o`
  <mdc-badge
    type="${t.type}"
    icon-name="${t["icon-name"]}"
    counter="${t.counter}"
    max-counter="${t["max-counter"]}"
    variant="${t.variant}"
    ?overlay="${t.overlay}"
    aria-label="${t["aria-label"]}"
  ></mdc-badge>
`,oe=t=>o`
  <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;">${z(t)}</div>
`,se={title:"Components/badge",tags:["autodocs"],component:"mdc-badge",render:z,argTypes:{type:{control:"select",options:Object.values(e)},overlay:{control:"boolean"},counter:{if:{arg:"type",eq:e.COUNTER},control:"number"},"max-counter":{if:{arg:"type",eq:e.COUNTER},control:"select",options:n},"icon-name":{if:{arg:"type",eq:e.ICON},control:"select",options:Object.keys(J)},variant:{if:{arg:"type",eq:e.ICON},control:"select",options:Object.values(F)},"aria-label":{control:"text"},...K,...Q}},a={render:te,args:{type:b.TYPE,"icon-name":"placeholder-bold",variant:b.VARIANT,counter:1,"max-counter":n[1],overlay:!1}},r={args:{type:b.TYPE,"icon-name":"placeholder-bold",variant:b.VARIANT,counter:1,"max-counter":n[1]}},d={args:{type:e.ICON,"icon-name":"placeholder-bold",variant:F.PRIMARY}},c={args:{type:e.COUNTER,counter:10,"max-counter":n[1]}},i={args:{type:e.SUCCESS}},s={args:{type:e.WARNING}},m={args:{type:e.ERROR,overlay:!1}},l={render:oe,args:{type:e.COUNTER,counter:1e3,"max-counter":n[2],overlay:!0}},u={render:()=>o(y||(y=ee([`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
        <span>Counter badge</span>
        <mdc-badge id="motion-badge-counter" type="`,`" counter="1" max-counter="99"></mdc-badge>
        <div style="display: flex; gap: 0.5rem;">
          <button type="button" id="motion-badge-counter-show">Show badge</button>
          <button type="button" id="motion-badge-counter-increment">Increment counter</button>
          <button type="button" id="motion-badge-counter-clear">Clear badge</button>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
        <span>Dot badge</span>
        <mdc-badge id="motion-badge-dot" type="`,`"></mdc-badge>
        <div style="display: flex; gap: 0.5rem;">
          <button type="button" id="motion-badge-dot-show">Show badge</button>
          <button type="button" id="motion-badge-dot-hide">Hide badge</button>
        </div>
      </div>
    </div>
    <script>
      const counterBadge = document.getElementById('motion-badge-counter');
      const counterShowButton = document.getElementById('motion-badge-counter-show');
      const counterIncrementButton = document.getElementById('motion-badge-counter-increment');
      const counterClearButton = document.getElementById('motion-badge-counter-clear');

      counterShowButton?.addEventListener('click', () => {
        counterBadge?.setAttribute('type', 'counter');
        counterBadge?.setAttribute('counter', '1');
        counterBadge?.setAttribute('visible', '');
      });

      counterIncrementButton?.addEventListener('click', () => {
        const current = Number(counterBadge?.getAttribute('counter') ?? '0');
        counterBadge?.setAttribute('counter', String(current + 1));
      });

      counterClearButton?.addEventListener('click', () => {
        counterBadge?.removeAttribute('counter');
        counterBadge?.removeAttribute('visible');
      });

      const dotBadge = document.getElementById('motion-badge-dot');
      const dotShowButton = document.getElementById('motion-badge-dot-show');
      const dotHideButton = document.getElementById('motion-badge-dot-hide');

      dotShowButton?.addEventListener('click', () => {
        dotBadge?.setAttribute('type', 'dot');
        dotBadge?.setAttribute('visible', '');
      });

      dotHideButton?.addEventListener('click', () => {
        if (dotBadge) {
          dotBadge.visible = false;
        }
      });
    <\/script>
  `])),e.COUNTER,e.DOT),...X()},g={render:()=>o`
    <h5>Without overlay</h5>
    <div style="display: flex; justify-content: space-between; align-items: center; width: 10rem;">
      <mdc-badge type="${e.DOT}"></mdc-badge>
      <mdc-badge type="${e.ICON}" icon-name="placeholder-bold"></mdc-badge>
      <mdc-badge type="${e.COUNTER}" counter="10"></mdc-badge>
      <mdc-badge type="${e.SUCCESS}"></mdc-badge>
      <mdc-badge type="${e.WARNING}"></mdc-badge>
      <mdc-badge type="${e.ERROR}"></mdc-badge>
    </div>
    <h5>With overlay</h5>
    <div
      style="display: flex; justify-content: space-between; align-items: center; width: 10rem; background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;"
    >
      <mdc-badge type="${e.DOT}" overlay></mdc-badge>
      <mdc-badge type="${e.ICON}" icon-name="placeholder-bold" overlay></mdc-badge>
      <mdc-badge type="${e.COUNTER}" counter="10" overlay></mdc-badge>
      <mdc-badge type="${e.SUCCESS}" overlay></mdc-badge>
      <mdc-badge type="${e.WARNING}" overlay></mdc-badge>
      <mdc-badge type="${e.ERROR}" overlay></mdc-badge>
    </div>
  `,...X()};var v,E,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: renderExample,
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1],
    overlay: false
  }
}`,...(T=(E=a.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var B,h,f;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    counter: 1,
    'max-counter': MAX_COUNTER_LIST[1]
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,A,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: TYPE.ICON,
    'icon-name': 'placeholder-bold',
    variant: ICON_VARIANT.PRIMARY
  }
}`,...(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var C,I,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: TYPE.COUNTER,
    counter: 10,
    'max-counter': MAX_COUNTER_LIST[1]
  }
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var O,N,$;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: TYPE.SUCCESS
  }
}`,...($=(N=i.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var w,P,U;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: TYPE.WARNING
  }
}`,...(U=(P=s.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var Y,_,L;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: TYPE.ERROR,
    overlay: false
  }
}`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var k,D,W;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: renderOverlay,
  args: {
    type: TYPE.COUNTER,
    counter: 1000,
    'max-counter': MAX_COUNTER_LIST[2],
    overlay: true
  }
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var M,j,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
        <span>Counter badge</span>
        <mdc-badge id="motion-badge-counter" type="\${TYPE.COUNTER}" counter="1" max-counter="99"></mdc-badge>
        <div style="display: flex; gap: 0.5rem;">
          <button type="button" id="motion-badge-counter-show">Show badge</button>
          <button type="button" id="motion-badge-counter-increment">Increment counter</button>
          <button type="button" id="motion-badge-counter-clear">Clear badge</button>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
        <span>Dot badge</span>
        <mdc-badge id="motion-badge-dot" type="\${TYPE.DOT}"></mdc-badge>
        <div style="display: flex; gap: 0.5rem;">
          <button type="button" id="motion-badge-dot-show">Show badge</button>
          <button type="button" id="motion-badge-dot-hide">Hide badge</button>
        </div>
      </div>
    </div>
    <script>
      const counterBadge = document.getElementById('motion-badge-counter');
      const counterShowButton = document.getElementById('motion-badge-counter-show');
      const counterIncrementButton = document.getElementById('motion-badge-counter-increment');
      const counterClearButton = document.getElementById('motion-badge-counter-clear');

      counterShowButton?.addEventListener('click', () => {
        counterBadge?.setAttribute('type', 'counter');
        counterBadge?.setAttribute('counter', '1');
        counterBadge?.setAttribute('visible', '');
      });

      counterIncrementButton?.addEventListener('click', () => {
        const current = Number(counterBadge?.getAttribute('counter') ?? '0');
        counterBadge?.setAttribute('counter', String(current + 1));
      });

      counterClearButton?.addEventListener('click', () => {
        counterBadge?.removeAttribute('counter');
        counterBadge?.removeAttribute('visible');
      });

      const dotBadge = document.getElementById('motion-badge-dot');
      const dotShowButton = document.getElementById('motion-badge-dot-show');
      const dotHideButton = document.getElementById('motion-badge-dot-hide');

      dotShowButton?.addEventListener('click', () => {
        dotBadge?.setAttribute('type', 'dot');
        dotBadge?.setAttribute('visible', '');
      });

      dotHideButton?.addEventListener('click', () => {
        if (dotBadge) {
          dotBadge.visible = false;
        }
      });
    <\/script>
  \`,
  ...hideAllControls()
}`,...(V=(j=u.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var G,H,q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => html\`
    <h5>Without overlay</h5>
    <div style="display: flex; justify-content: space-between; align-items: center; width: 10rem;">
      <mdc-badge type="\${TYPE.DOT}"></mdc-badge>
      <mdc-badge type="\${TYPE.ICON}" icon-name="placeholder-bold"></mdc-badge>
      <mdc-badge type="\${TYPE.COUNTER}" counter="10"></mdc-badge>
      <mdc-badge type="\${TYPE.SUCCESS}"></mdc-badge>
      <mdc-badge type="\${TYPE.WARNING}"></mdc-badge>
      <mdc-badge type="\${TYPE.ERROR}"></mdc-badge>
    </div>
    <h5>With overlay</h5>
    <div
      style="display: flex; justify-content: space-between; align-items: center; width: 10rem; background-color: var(--mds-color-theme-inverted-background-normal); padding: 5px;"
    >
      <mdc-badge type="\${TYPE.DOT}" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.ICON}" icon-name="placeholder-bold" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.COUNTER}" counter="10" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.SUCCESS}" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.WARNING}" overlay></mdc-badge>
      <mdc-badge type="\${TYPE.ERROR}" overlay></mdc-badge>
    </div>
  \`,
  ...hideAllControls()
}`,...(q=(H=g.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const me=["Example","Dot","Icon","Counter","Success","Warning","Error","Overlay","Motion","AllVariants"];export{g as AllVariants,c as Counter,r as Dot,m as Error,a as Example,d as Icon,u as Motion,l as Overlay,i as Success,s as Warning,me as __namedExportsOrder,se as default};
