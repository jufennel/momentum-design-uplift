import{k as g,R as D}from"./iframe-Ctm5TQtB.js";import{a as S}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var a=Object.freeze,f=Object.defineProperty,y=(n,t)=>a(f(n,"raw",{value:a(n.slice())})),s;const{action:c}=__STORYBOOK_MODULE_ACTIONS__,d="motion-demo-menu-trigger",m="motion-demo-dialog-trigger",i="motion-demo-dialog",r="motion-demo-banner-show",l="motion-demo-banner-slot",B=n=>{var t;return(t=document.querySelector("body.sb-show-main"))==null||t.classList.remove("mds-motion","mds-animation"),n()},E=()=>{var n;(n=document.getElementById(i))==null||n.setAttribute("visible","")},b=()=>{var n;(n=document.getElementById(i))==null||n.removeAttribute("visible")},_=(n,{updateArgs:t})=>{const h=n.motionEnabled?"full":"reduce";return g(s||(s=y([`
    <div class="motionDemo">
      
      <h1>Motion Provider Demo</h1>
      <mdc-motionprovider motion="`,`">
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
            <div role="`,`">
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
              active-tab-id="`,`"
              @change=`,`
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold"></mdc-tab>
            </mdc-tablist>
            <h3 class="motionDemoSectionTitle">Tab list Secondary</h3>
            <p class="motionDemoSectionHint">Switch tabs to see indicator and text transitions.</p>
            <mdc-tablist
              active-tab-id="`,`"
              @change=`,`
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold" variant="line"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold" variant="line"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold" variant="line"></mdc-tab>
            </mdc-tablist>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Menu popover</h3>
            <p class="motionDemoSectionHint">Open the menu to see slide entrance and exit transitions.</p>
            <mdc-button id="`,`" variant="secondary">Open menu</mdc-button>
            <mdc-menupopover triggerID="`,`" placement="bottom-start" aria-label="Demo menu">
              <mdc-menuitem label="New"></mdc-menuitem>
              <mdc-menuitem label="Open"></mdc-menuitem>
              <mdc-divider></mdc-divider>
              <mdc-menuitem label="Save"></mdc-menuitem>
            </mdc-menupopover>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Dialog</h3>
            <p class="motionDemoSectionHint">Open the dialog to see backdrop and content fade transitions.</p>
            <mdc-button id="`,'" @click=',` variant="secondary">Open dialog</mdc-button>
            <mdc-dialog
              id="`,`"
              triggerID="`,`"
              header-text="Motion demo"
              description-text="Dialog fade transitions use motion tokens."
              size="medium"
              @close=`,`
            >
              <div slot="dialog-body">
                <p>Use the Motion toggle to compare backdrop and content fade transitions.</p>
              </div>
              <mdc-button slot="footer-button-primary" @click=`,`>Done</mdc-button>
            </mdc-dialog>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Banner</h3>
            <p class="motionDemoSectionHint">
              Show and dismiss the banner to see expand/collapse and fade transitions. Turn motion off to compare instant state changes.
            </p>
            <mdc-button id="`,`" variant="secondary">Show banner</mdc-button>
            <div id="`,`" class="motionDemoBannerSlot"></div>
          </section>
        </div>
      </mdc-motionprovider>
    </div>
    <script>
      const bannerSlot = document.getElementById('`,`');
      const showBannerButton = document.getElementById('`,`');

      const mountBanner = () => {
        bannerSlot.replaceChildren();

        const banner = document.createElement('mdc-banner');
        banner.setAttribute('variant', 'warning');
        banner.setAttribute('label', 'Connection unstable');
        banner.setAttribute('secondary-label', 'We will retry automatically in the background.');

        const actions = document.createElement('div');
        actions.setAttribute('slot', 'trailing-actions');

        const dismissButton = document.createElement('mdc-button');
        dismissButton.setAttribute('variant', 'tertiary');
        dismissButton.setAttribute('prefix-icon', 'cancel-bold');
        dismissButton.setAttribute('size', '20');
        dismissButton.setAttribute('aria-label', 'Dismiss banner');

        dismissButton.addEventListener('click', () => {
          banner.open = false;
        });

        banner.addEventListener('hidden', () => {
          banner.remove();
        });

        actions.appendChild(dismissButton);
        banner.appendChild(actions);
        bannerSlot.appendChild(banner);
      };

      showBannerButton?.addEventListener('click', mountBanner);
      mountBanner();
    <\/script>
  `])),h,D.MAIN,n["active-tab-id"],e=>{c("onchange")(e),t({"active-tab-id":e.detail.tabId})},n["active-tab-id"],e=>{c("onchange")(e),t({"active-tab-id":e.detail.tabId})},d,d,m,E,i,m,b,b,r,l,l,r)},A={title:"Providers/Motion Provider",tags:["autodocs"],component:"mdc-motionprovider",decorators:[B],render:_,argTypes:{motionEnabled:{control:"boolean",description:'When off, the provider uses `motion="reduce"` and token-based motion is disabled.'},"active-tab-id":{control:!1},...S(!0)}},o={args:{motionEnabled:!0,"active-tab-id":"calls-tab"}};var u,p,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    motionEnabled: true,
    'active-tab-id': 'calls-tab'
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const O=["Example"];export{o as Example,O as __namedExportsOrder,A as default};
