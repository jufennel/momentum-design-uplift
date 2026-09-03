import{k as p,R as u}from"./iframe-Bzl5oY3a.js";import{a as g}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,c="motion-demo-menu-trigger",s="motion-demo-dialog-trigger",n="motion-demo-dialog",h=t=>{var o;return(o=document.querySelector("body.sb-show-main"))==null||o.classList.remove("mds-motion","mds-animation"),t()},v=()=>{var t;(t=document.getElementById(n))==null||t.setAttribute("visible","")},d=()=>{var t;(t=document.getElementById(n))==null||t.removeAttribute("visible")},D=(t,{updateArgs:o})=>{const b=t.motionEnabled?"full":"reduce";return p`
    <div class="motionDemo">
      
      <h1>Motion Provider Demo</h1>
      <mdc-motionprovider motion="${b}">
        <div class="motionDemoSections">
          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Button</h3>
            <p class="motionDemoSectionHint">Hover or focus for token-based hover transitions.</p>
            <div class="motionDemoRow">
              <mdc-button color="positive" icon-start="plus-bold">Primary</mdc-button>
              <mdc-button variant="secondary" color="negative" icon-start="settings-bold">Secondary</mdc-button>
              <mdc-button variant="tertiary" color="accent" icon-start="settings-bold">Tertiary</mdc-button>
            </div>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Accordion</h3>
            <p class="motionDemoSectionHint">Expand and collapse to see fade and height transitions.</p>
            <div role="${u.MAIN}">
              <mdc-accordionbutton header-text="Accordion panel" prefix-icon="info-circle-bold">
                <h3>This is a heading for this accordion component.</h3>
                <p>Token-based expand and collapse motion runs when this panel opens and closes. This is a paragraph for this accordion component.</p>
              </mdc-accordionbutton>
            </div>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Tab list Primary</h3>
            <p class="motionDemoSectionHint">Switch tabs to see indicator and text transitions.</p>
            <mdc-tablist
              active-tab-id="${t["active-tab-id"]}"
              @change=${e=>{a("onchange")(e),o({"active-tab-id":e.detail.tabId})}}
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold"></mdc-tab>
            </mdc-tablist>
            <h3 class="motionDemoSectionTitle">Tab list Secondary</h3>
            <p class="motionDemoSectionHint">Switch tabs to see indicator and text transitions.</p>
            <mdc-tablist
              active-tab-id="${t["active-tab-id"]}"
              @change=${e=>{a("onchange")(e),o({"active-tab-id":e.detail.tabId})}}
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold" variant="line"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold" variant="line"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold" variant="line"></mdc-tab>
            </mdc-tablist>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Menu popover</h3>
            <p class="motionDemoSectionHint">Open the menu to see slide entrance and exit transitions.</p>
            <mdc-button id="${c}">Open menu</mdc-button>
            <mdc-menupopover triggerID="${c}" placement="bottom-start" aria-label="Demo menu">
              <mdc-menuitem label="New"></mdc-menuitem>
              <mdc-menuitem label="Open"></mdc-menuitem>
              <mdc-divider></mdc-divider>
              <mdc-menuitem label="Save"></mdc-menuitem>
            </mdc-menupopover>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Dialog</h3>
            <p class="motionDemoSectionHint">Open the dialog to see backdrop and content fade transitions.</p>
            <mdc-button id="${s}" @click=${v}>Open dialog</mdc-button>
            <mdc-dialog
              id="${n}"
              triggerID="${s}"
              header-text="Motion demo"
              description-text="Dialog fade transitions use motion tokens."
              size="medium"
              @close=${d}
            >
              <div slot="dialog-body">
                <p>Use the Motion toggle to compare backdrop and content fade transitions.</p>
              </div>
              <mdc-button slot="footer-button-primary" @click=${d}>Done</mdc-button>
            </mdc-dialog>
          </section>
        </div>
      </mdc-motionprovider>
    </div>
  `},T={title:"Providers/Motion Provider",tags:["autodocs"],component:"mdc-motionprovider",decorators:[h],render:D,argTypes:{motionEnabled:{control:"boolean",description:'When off, the provider uses `motion="reduce"` and token-based motion is disabled.'},"active-tab-id":{control:!1},...g(!0)}},i={args:{motionEnabled:!0,"active-tab-id":"calls-tab"}};var m,r,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    motionEnabled: true,
    'active-tab-id': 'calls-tab'
  }
}`,...(l=(r=i.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const y=["Example"];export{i as Example,y as __namedExportsOrder,T as default};
