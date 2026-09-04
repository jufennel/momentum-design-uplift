import{P as E,c as M,k}from"./iframe-Ctm5TQtB.js";import{c as $,s as A}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,P="720px",S="1280px",n=e=>s=>{const t=s.currentTarget.closest("[data-demo-root]"),d=t==null?void 0:t.querySelector("mdc-animatedbackground");d==null||d[e]()},I=e=>{const s=window.matchMedia.bind(window);return window.matchMedia=t=>t.includes("prefers-reduced-motion")?{matches:!0,media:t,addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:()=>!0,onchange:null}:s(t),e()},w=e=>k`
  <div
    style="position: relative; width: 100%; height: ${P}; max-width: ${S}; margin: 0 auto; overflow: hidden;"
  >
    <mdc-animatedbackground
      initial-pose="${e.initialPose}"
      class="${e.class}"
      style="${e.style}"
    ></mdc-animatedbackground>
    <div
      style="position: relative; z-index: 1; padding: 24px; color: var(--mds-color-theme-text-primary-normal, #fff); pointer-events: none;"
    >
      <p style="margin: 0 0 8px; font: 600 16px/1.3 system-ui, sans-serif;">mdc-animatedbackground</p>
      <p style="margin: 0; opacity: 0.75; font: 14px/1.4 system-ui, sans-serif;">Settled ${e.initialPose} pose.</p>
    </div>
  </div>
`,D=e=>k`
  <div
    data-demo-root
    style="position: relative; width: 100%; height: ${P}; max-width: ${S}; margin: 0 auto; overflow: hidden;"
  >
    <mdc-animatedbackground
      initial-pose="${e.initialPose}"
      class="${e.class}"
      style="${e.style}"
      @gradientsettle="${O("gradientsettle")}"
    ></mdc-animatedbackground>
    <div
      style="position: relative; z-index: 1; padding: 24px; color: var(--mds-color-theme-text-primary-normal, #fff);"
    >
      <p style="margin: 0 0 8px; font: 600 16px/1.3 system-ui, sans-serif;">mdc-animatedbackground</p>
      <p style="margin: 0 0 16px; opacity: 0.75; font: 14px/1.4 system-ui, sans-serif;">
        Initial pose: ${e.initialPose}. Use the controls to trigger programmatic animations.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; pointer-events: auto;">
        <mdc-button @click=${n("wakeUp")}>Wake up</mdc-button>
        <mdc-button @click=${n("expand")}>Expand</mdc-button>
        <mdc-button @click=${n("collapse")}>Collapse</mdc-button>
        <mdc-button @click=${n("disable")}>Disable</mdc-button>
      </div>
    </div>
  </div>
`,L={title:"Work In Progress/animatedbackground",tags:["autodocs"],component:"mdc-animatedbackground",parameters:{docs:{description:{component:"Decorative uplift gradient background with programmatic pose animations. See the **Interactive Demo** story to trigger Wake up, Expand, Collapse, and Disable."}}},argTypes:{initialPose:{control:"select",options:E,description:"Pose rendered on mount before any programmatic animation. Does not update when methods are called."},...$,...A}},a={render:w,args:{initialPose:M.INITIAL_POSE},parameters:{docs:{description:{story:"Static reference at the default `collapsed` resting pose."}}}},o={render:D,args:{initialPose:"hidden"},parameters:{docs:{description:{story:"Primary documentation demo. Use the **Wake up**, **Expand**, **Collapse**, and **Disable** buttons to trigger the public animation API. Inspect `gradientsettle` in the Actions panel."}}}},r={decorators:[I],render:w,args:{initialPose:"expanded"},parameters:{docs:{description:{story:"Uses a Storybook-only reduced-motion media patch so the component selects the DOM/SVG fallback renderer."}}}},i={decorators:[I],render:D,args:{initialPose:"hidden"},parameters:{docs:{description:{story:"Interactive demo under reduced motion. Animations snap instantly to their target poses with no transition."}}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: renderStatic,
  args: {
    initialPose: DEFAULTS.INITIAL_POSE
  },
  parameters: {
    docs: {
      description: {
        story: 'Static reference at the default \`collapsed\` resting pose.'
      }
    }
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: renderInteractiveDemo,
  args: {
    initialPose: 'hidden' satisfies PoseName
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary documentation demo. Use the **Wake up**, **Expand**, **Collapse**, and **Disable** buttons to trigger the public animation API. Inspect \`gradientsettle\` in the Actions panel.'
      }
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [withReducedMotionMedia],
  render: renderStatic,
  args: {
    initialPose: 'expanded'
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses a Storybook-only reduced-motion media patch so the component selects the DOM/SVG fallback renderer.'
      }
    }
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,f,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [withReducedMotionMedia],
  render: renderInteractiveDemo,
  args: {
    initialPose: 'hidden'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo under reduced motion. Animations snap instantly to their target poses with no transition.'
      }
    }
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const R=["Example","InteractiveDemo","DomFallback","ReducedMotion"];export{r as DomFallback,a as Example,o as InteractiveDemo,i as ReducedMotion,R as __namedExportsOrder,L as default};
