import{k as g,R as D}from"./iframe-BRzdycIC.js";import{a as S}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var a=Object.freeze,f=Object.defineProperty,y=(n,t)=>a(f(n,"raw",{value:a(n.slice())})),c;const{action:s}=__STORYBOOK_MODULE_ACTIONS__,d="motion-demo-menu-trigger",m="motion-demo-dialog-trigger",i="motion-demo-dialog",r="motion-demo-banner-show",l="motion-demo-banner-slot",k=n=>{var t;return(t=document.querySelector("body.sb-show-main"))==null||t.classList.remove("mds-motion","mds-animation"),n()},x=()=>{var n;(n=document.getElementById(i))==null||n.setAttribute("visible","")},b=()=>{var n;(n=document.getElementById(i))==null||n.removeAttribute("visible")},T=(n,{updateArgs:t})=>{const v=n.motionEnabled?"full":"reduce";return g(c||(c=y([`
    <div class="motionDemo">
      
      <h1>Motion Provider Demo</h1>
      <mdc-motionprovider motion="`,`">
        <div class="motionDemoSections">
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
            <h3 class="motionDemoSectionTitle">Banner</h3>
            <p class="motionDemoSectionHint">
              Show and dismiss the banner to see expand/collapse and fade transitions. Turn motion off to compare instant state changes.
            </p>
            <mdc-button id="`,`" variant="secondary">Show banner</mdc-button>
            <div id="`,`" class="motionDemoBannerSlot"></div>
          </section>

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
            <h3 class="motionDemoSectionTitle">Calendar</h3>
            <p class="motionDemoSectionHint">
              Hover days, adjust the range, and change months to see day, range-fill, and month cross-fade transitions.
            </p>
            <mdc-calendar
              class="motionDemoCalendar"
              selection-mode="range"
              value="2025-07-10"
              end-value="2025-07-20"
              locale="en-US"
              show-today-button
              locale-today-label="Today"
              locale-prev-month-label="Go to previous month"
              locale-next-month-label="Go to next month"
            ></mdc-calendar>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Card checkbox</h3>
            <p class="motionDemoSectionHint">
              Click each card to see background and selection-indicator transitions. Turn motion off to compare instant
              state changes.
            </p>
            <div class="motionDemoRow">
              <mdc-cardcheckbox
                card-title="Check indicator"
                subtitle='selection-type="check"'
                icon-name="placeholder-bold"
                selection-type="check"
                style="--mdc-card-width: 16rem;"
              ></mdc-cardcheckbox>
              <mdc-cardcheckbox
                card-title="Check indicator"
                subtitle='selection-type="check"'
                icon-name="placeholder-bold"
                selection-type="check"
                style="--mdc-card-width: 16rem;"
              ></mdc-cardcheckbox>
            </div>
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
            <h3 class="motionDemoSectionTitle">Filter chip</h3>
            <p class="motionDemoSectionHint">
              Click each chip to see background, border-color, and checkmark fade transitions. Turn motion off to
              compare instant state changes.
            </p>
            <div class="motionDemoRow">
              <mdc-filterchip label="In stock"></mdc-filterchip>
              <mdc-filterchip label="On sale"></mdc-filterchip>
              <mdc-filterchip label="Free shipping"></mdc-filterchip>
            </div>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Input</h3>
            <p class="motionDemoSectionHint">
              Hover and focus the field to see background and border color transitions. Turn motion off to compare
              instant state changes.
            </p>
            <mdc-input
              label="Project name"
              placeholder="Enter a project name"
              help-text="Used across your workspace."
              style="max-width: 20rem;"
            ></mdc-input>
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
  `])),v,D.MAIN,r,l,m,x,i,m,b,b,d,d,n["active-tab-id"],e=>{s("onchange")(e),t({"active-tab-id":e.detail.tabId})},n["active-tab-id"],e=>{s("onchange")(e),t({"active-tab-id":e.detail.tabId})},l,r)},w={title:"Providers/Motion Provider",tags:["autodocs"],component:"mdc-motionprovider",decorators:[k],render:T,argTypes:{motionEnabled:{control:"boolean",description:'When off, the provider uses `motion="reduce"` and token-based motion is disabled.'},"active-tab-id":{control:!1},...S(!0)}},o={args:{motionEnabled:!0,"active-tab-id":"calls-tab"}};var p,h,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    motionEnabled: true,
    'active-tab-id': 'calls-tab'
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const I=["Example"];export{o as Example,I as __namedExportsOrder,w as default};
