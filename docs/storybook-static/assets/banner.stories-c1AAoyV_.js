import{r as t,k as n,s as a,u,v as D,h as k,t as b}from"./iframe-Ctm5TQtB.js";import{i as Y}from"./imageFixtures-CD4avj2q.js";import{c as M,s as V}from"./commonArgTypes-BG7EqI50.js";import{h as P,a as p}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";var A=Object.freeze,F=Object.defineProperty,z=(e,G)=>A(F(e,"raw",{value:A(e.slice())})),v;const{action:o}=__STORYBOOK_MODULE_ACTIONS__,U=e=>n`
  <mdc-banner
    variant="${b(e.variant)}"
    label="${b(e.label)}"
    secondary-label="${b(e["secondary-label"])}"
    class="${e.class}"
    style="${e.style}"
  >
    ${e.children}
  </mdc-banner>
`,K={title:"Components/banner",tags:["autodocs"],component:"mdc-banner",render:U,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(t)},label:{control:"text"},"secondary-label":{control:"text"},...M,...V,...P(["children"])}},r=n`
  <div slot="trailing-actions">
    <mdc-button variant="${a.TERTIARY}" aria-label="Cancel action">Cancel</mdc-button>
    <mdc-button variant="${a.SECONDARY}" aria-label="Perform primary action">Action</mdc-button>
    <mdc-button
      variant="${a.TERTIARY}"
      prefix-icon="cancel-bold"
      size="${u[20]}"
      aria-label="Dismiss banner"
      @click="${o("dismiss")}"
    ></mdc-button>
  </div>
`,i={args:{variant:t.INFORMATIONAL,label:"System Update Available","secondary-label":"A new version is ready to install. Please save your work before proceeding.",children:r}},s={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${[{variant:t.CUSTOM,label:"Custom Banner with Slot Icon","secondary-label":"This banner uses a custom icon via slot instead of variant-based icon.",children:n`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
            ${r}
          `},{variant:t.INFORMATIONAL,label:"System Update Available","secondary-label":"A new version is ready to install.",children:r},{variant:t.WARNING,label:"Storage Almost Full","secondary-label":"Your storage is 95% full. Consider removing some files.",children:r},{variant:t.ERROR,label:"Connection Failed","secondary-label":"Unable to connect to the server. Please try again.",children:n`
            ${r}
            <mdc-button
              slot="trailing-actions"
              variant="${a.TERTIARY}"
              prefix-icon="reset-bold"
              size="${u[20]}"
              aria-label="Retry connection"
              @click="${o("retry")}"
            ></mdc-button>
          `},{variant:t.SUCCESS,label:"Changes Saved","secondary-label":"Your changes have been successfully saved.",children:r}].map(e=>U(e))}
    </div>
  `,...p()},l={args:{variant:t.INFORMATIONAL,label:"System Update Available",children:r}},c={args:{variant:t.INFORMATIONAL,label:"Information Message","secondary-label":"This banner has no action buttons."}},d={render:()=>n(v||(v=z([`
    <div id="banner-motion-root" style="display: flex; flex-direction: column; gap: 1rem;">
      <mdc-button id="banner-motion-show" variant="`,`">Show banners</mdc-button>
      <div id="banner-motion-slot" style="display: flex; flex-direction: column; gap: 1rem;"></div>
    </div>
    <script>
      const slot = document.getElementById('banner-motion-slot');
      const showButton = document.getElementById('banner-motion-show');

      const createBanner = ({ variant, label, secondaryLabel }) => {
        const banner = document.createElement('mdc-banner');
        banner.setAttribute('variant', variant);
        banner.setAttribute('label', label);
        banner.setAttribute('secondary-label', secondaryLabel);

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
        return banner;
      };

      const mountBanners = () => {
        slot.replaceChildren();

        slot.appendChild(
          createBanner({
            variant: 'warning',
            label: 'Connection unstable',
            secondaryLabel: 'We will retry automatically in the background.',
          }),
        );

        slot.appendChild(
          createBanner({
            variant: 'informational',
            label: 'System maintenance scheduled',
            secondaryLabel: 'Expect brief downtime tonight at 11:00 PM.',
          }),
        );
      };

      showButton?.addEventListener('click', mountBanners);
      mountBanners();
    <\/script>
  `])),a.SECONDARY),...p()},m={render:()=>{const e=n`<img
      src=${Y.card}
      alt="Promotional image"
      style="width: 120px; height: 100%; object-fit: cover;"
    />`;return n`
      <mdc-banner>
        <!-- Using the content slot to completely override the default banner structure -->
        <div
          slot="content"
          style="
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1.5rem;
          align-items: flex-start;
          width: 100%;
          padding: 0 2rem;
        "
        >
          <!-- Close button positioned absolutely in top-right corner -->
          <mdc-button
            variant="${a.TERTIARY}"
            prefix-icon="cancel-bold"
            size="${u[20]}"
            aria-label="Close promotional banner"
            @click="${o("close")}"
            style="position: absolute; right: 1rem;"
          ></mdc-button>

          <!-- Left Image -->
          ${e}

          <!-- Center Content Area -->
          <div style="flex: 1; min-width: 0;">
            <!-- Label -->
            <mdc-text type="${D.HEADING_LARGE_BOLD}" tagname="${k.H3}">Label text</mdc-text>

            <!-- Secondary label text -->
            <mdc-text>
              Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
              <mdc-link>Learn more</mdc-link>
            </mdc-text>

            <!-- Action buttons -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
              <mdc-button
                variant="${a.TERTIARY}"
                aria-label="Tertiary action"
                @click="${o("tertiary-action")}"
                >Label</mdc-button
              >
              <mdc-button
                variant="${a.SECONDARY}"
                aria-label="Secondary action"
                @click="${o("secondary-action")}"
                >Label</mdc-button
              >
            </div>
          </div>

          <!-- Right Image -->
          ${e}
        </div>
      </mdc-banner>
    `},...p()};var y,h,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install. Please save your work before proceeding.',
    children: DefaultButtons
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var T,f,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      \${[{
    variant: BANNER_VARIANT.CUSTOM,
    label: 'Custom Banner with Slot Icon',
    'secondary-label': 'This banner uses a custom icon via slot instead of variant-based icon.',
    children: html\`
            <mdc-icon slot="leading-icon" name="placeholder-bold" size="1.25"></mdc-icon>
            \${DefaultButtons}
          \`
  }, {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    'secondary-label': 'A new version is ready to install.',
    children: DefaultButtons
  }, {
    variant: BANNER_VARIANT.WARNING,
    label: 'Storage Almost Full',
    'secondary-label': 'Your storage is 95% full. Consider removing some files.',
    children: DefaultButtons
  }, {
    variant: BANNER_VARIANT.ERROR,
    label: 'Connection Failed',
    'secondary-label': 'Unable to connect to the server. Please try again.',
    children: html\`
            \${DefaultButtons}
            <mdc-button
              slot="trailing-actions"
              variant="\${BUTTON_VARIANTS.TERTIARY}"
              prefix-icon="reset-bold"
              size="\${BUTTON_SIZES[20]}"
              aria-label="Retry connection"
              @click="\${action('retry')}"
            ></mdc-button>
          \`
  }, {
    variant: BANNER_VARIANT.SUCCESS,
    label: 'Changes Saved',
    'secondary-label': 'Your changes have been successfully saved.',
    children: DefaultButtons
  }].map(args => render(args))}
    </div>
  \`,
  ...hideAllControls()
}`,...(N=(f=s.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var R,B,I;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'System Update Available',
    children: DefaultButtons
  }
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var E,S,x;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: BANNER_VARIANT.INFORMATIONAL,
    label: 'Information Message',
    'secondary-label': 'This banner has no action buttons.'
  }
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,$,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <div id="banner-motion-root" style="display: flex; flex-direction: column; gap: 1rem;">
      <mdc-button id="banner-motion-show" variant="\${BUTTON_VARIANTS.SECONDARY}">Show banners</mdc-button>
      <div id="banner-motion-slot" style="display: flex; flex-direction: column; gap: 1rem;"></div>
    </div>
    <script>
      const slot = document.getElementById('banner-motion-slot');
      const showButton = document.getElementById('banner-motion-show');

      const createBanner = ({ variant, label, secondaryLabel }) => {
        const banner = document.createElement('mdc-banner');
        banner.setAttribute('variant', variant);
        banner.setAttribute('label', label);
        banner.setAttribute('secondary-label', secondaryLabel);

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
        return banner;
      };

      const mountBanners = () => {
        slot.replaceChildren();

        slot.appendChild(
          createBanner({
            variant: 'warning',
            label: 'Connection unstable',
            secondaryLabel: 'We will retry automatically in the background.',
          }),
        );

        slot.appendChild(
          createBanner({
            variant: 'informational',
            label: 'System maintenance scheduled',
            secondaryLabel: 'Expect brief downtime tonight at 11:00 PM.',
          }),
        );
      };

      showButton?.addEventListener('click', mountBanners);
      mountBanners();
    <\/script>
  \`,
  ...hideAllControls()
}`,...(O=($=d.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var L,_,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const image = html\`<img
      src=\${imageFixtures.card}
      alt="Promotional image"
      style="width: 120px; height: 100%; object-fit: cover;"
    />\`;
    return html\`
      <mdc-banner>
        <!-- Using the content slot to completely override the default banner structure -->
        <div
          slot="content"
          style="
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1.5rem;
          align-items: flex-start;
          width: 100%;
          padding: 0 2rem;
        "
        >
          <!-- Close button positioned absolutely in top-right corner -->
          <mdc-button
            variant="\${BUTTON_VARIANTS.TERTIARY}"
            prefix-icon="cancel-bold"
            size="\${BUTTON_SIZES[20]}"
            aria-label="Close promotional banner"
            @click="\${action('close')}"
            style="position: absolute; right: 1rem;"
          ></mdc-button>

          <!-- Left Image -->
          \${image}

          <!-- Center Content Area -->
          <div style="flex: 1; min-width: 0;">
            <!-- Label -->
            <mdc-text type="\${TYPE.HEADING_LARGE_BOLD}" tagname="\${VALID_TEXT_TAGS.H3}">Label text</mdc-text>

            <!-- Secondary label text -->
            <mdc-text>
              Lorem ipsum dolor sit amet consectetur. Mattis augue imperdiet pretium dignissim purus.
              <mdc-link>Learn more</mdc-link>
            </mdc-text>

            <!-- Action buttons -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
              <mdc-button
                variant="\${BUTTON_VARIANTS.TERTIARY}"
                aria-label="Tertiary action"
                @click="\${action('tertiary-action')}"
                >Label</mdc-button
              >
              <mdc-button
                variant="\${BUTTON_VARIANTS.SECONDARY}"
                aria-label="Secondary action"
                @click="\${action('secondary-action')}"
                >Label</mdc-button
              >
            </div>
          </div>

          <!-- Right Image -->
          \${image}
        </div>
      </mdc-banner>
    \`;
  },
  ...hideAllControls()
}`,...(w=(_=m.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const q=["Example","AllVariants","LabelOnly","WithoutActions","Motion","PromotionalBanner"];export{s as AllVariants,i as Example,l as LabelOnly,d as Motion,m as PromotionalBanner,c as WithoutActions,q as __namedExportsOrder,K as default};
