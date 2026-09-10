import{L as r,M as Q,N as Z,k as a,m as ee}from"./iframe-BRzdycIC.js";import{c as te,s as oe}from"./commonArgTypes-BG7EqI50.js";import{i as re}from"./imageFixtures-CD4avj2q.js";import{h as ce,a as d}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,ae=e=>a`
  <div role="main">
    <mdc-checkbox
      label="${e.label}"
      help-text="${e["help-text"]}"
      help-text-type="${e["help-text-type"]}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      ?readonly="${e.readonly}"
      ?soft-disabled="${e["soft-disabled"]}"
      name="${e.name}"
      value="${e.value}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
      class="${e.class}"
      style="${e.style}"
      ?required="${e.required}"
      id="${e.id}"
      ?indeterminate="${e.indeterminate}"
      data-aria-label="${e["data-aria-label"]}"
      info-icon-aria-label="${e["info-icon-aria-label"]}"
      toggletip-text="${e["toggletip-text"]}"
      toggletip-placement="${e["toggletip-placement"]}"
      toggletip-strategy="${e["toggletip-strategy"]}"
      @change="${n("onchange")}"
      @keydown="${n("onkeydown")}"
      @focus="${n("onfocus")}"
      @click="${n("onclick")}"
    ></mdc-checkbox>
  </div>
`,me={title:"Components/checkbox",tags:["autodocs"],component:"mdc-checkbox",render:ae,argTypes:{label:{control:"text"},"help-text":{control:"text"},"help-text-type":{control:"radio",options:Object.values(r)},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},"data-aria-label":{control:"text"},required:{control:"boolean"},name:{control:"text"},value:{control:"text"},"auto-focus-on-mount":{control:"boolean"},"toggletip-text":{control:"text"},"toggletip-placement":{control:"select",options:Object.values(Q)},"toggletip-strategy":{control:"select",options:Object.values(Z)},"info-icon-aria-label":{control:"text"},...ce(["id","internals","validation-message","validity","willValidate"]),...te,...oe}},m={args:{label:"I agree to the terms","help-text":"",checked:!1,indeterminate:!1,disabled:!1,readonly:!1,"soft-disabled":!1,"data-aria-label":"Agree to all terms and conditions","help-text-type":r.DEFAULT}},p={args:{"data-aria-label":"This is a checkbox with no label","help-text-type":r.DEFAULT}},h={args:{label:"Email Opt In","help-text":"I agree to receiving monthly promotional emails.","help-text-type":r.DEFAULT}},b={args:{label:"Checkbox Label","help-text":"Checkbox Help Text",indeterminate:!0,"help-text-type":r.DEFAULT}},u={render:()=>a`
    <mdc-checkbox
      checked
      label="Alex Example"
      help-text="example.com"
      toggletip-text="This participant is connected from a video device."
      info-icon-aria-label="About Alex Example"
    >
      <mdc-avatar
        slot="leading-visual"
        size="32"
        src=${re.avatar}
        presence=${ee.ON_DEVICE}
      ></mdc-avatar>
    </mdc-checkbox>
  `,...d()},x={render:()=>a` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
        <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
      </div>
    </div>`},k={render:()=>a`
      <div role="main">
        <form @submit=${t=>{t.preventDefault();const l=new FormData(t.target).getAll("super-power");n("Form Submitted")({value:l})}}>
          <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
            <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox
            label="Mind Control"
            value="mind-control"
            name="super-power"
            required
            validation-message="This selection is necessary"
          ></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
      </div>
    `,...d()},f={render:e=>{const t=c=>{const o=Array.from(c.querySelectorAll('mdc-checkbox[name="super-power"]')).find(v=>v.hasAttribute("required"));return o?o.checked?(o.setAttribute("help-text","Looks good!"),o.setAttribute("help-text-type","default"),!0):(o.setAttribute("help-text","Please select this required option"),o.setAttribute("help-text-type","error"),!1):!0};return a`
      <div role="main">
        <form @submit=${c=>{c.preventDefault();const s=c.target;if(!t(s))return;const v=new FormData(s).getAll("super-power");n("Form Submitted")({value:v})}} @reset=${c=>{const o=c.target.querySelector('mdc-checkbox[name="super-power"][required]');o&&(o.setAttribute("help-text",e["help-text"]||""),o.setAttribute("help-text-type",e["help-text-type"]||"default"))}} novalidate>
          <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
            <legend>Select your super hero power (with validation)</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power" required></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
      </div>
    `},args:{"help-text":"","help-text-type":r.DEFAULT},...d()},y={render:()=>a`
    <div role="main" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Hover, click, and toggle states to observe checkbox motion (background, border, scale, icon fade). Wrap with
        <code>mdc-motionprovider</code> or enable OS reduced motion to verify instant updates.
      </p>
      <mdc-checkbox id="checkbox-motion-demo" label="Send me product updates"></mdc-checkbox>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-button id="checkbox-motion-indeterminate" variant="secondary" size="28">Set indeterminate</mdc-button>
        <mdc-button id="checkbox-motion-error" variant="secondary" size="28">Toggle error</mdc-button>
      </div>
    </div>
  `,decorators:[e=>(queueMicrotask(()=>{const t=document.getElementById("checkbox-motion-demo"),i=document.getElementById("checkbox-motion-indeterminate"),l=document.getElementById("checkbox-motion-error");i==null||i.addEventListener("click",()=>{t&&(t.indeterminate=!t.indeterminate,t.indeterminate&&(t.checked=!1))}),l==null||l.addEventListener("click",()=>{if(!t)return;t.getAttribute("help-text-type")==="error"?(t.setAttribute("help-text-type",r.DEFAULT),t.removeAttribute("help-text")):(t.setAttribute("help-text-type",r.ERROR),t.setAttribute("help-text","This field is required."))})}),e())],...d()},g={decorators:[e=>{const t=document.createElement("style");return t.textContent=`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        mdc-checkbox:state(checked) { animation: fade-in 400ms ease-in-out; }
      `,document.head.appendChild(t),e()}],render:()=>a`
    <div role="main" style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="margin: 0; font-size: 0.875rem;">
        When checked, <code>mdc-checkbox:state(checked)</code> triggers a fade-in on the checkbox host element.
      </p>
      <mdc-checkbox label="Click me to see the fade-in animation"></mdc-checkbox>
    </div>
  `,...d()};var A,E,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    'help-text': '',
    checked: false,
    indeterminate: false,
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    'data-aria-label': 'Agree to all terms and conditions',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var C,S,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    'data-aria-label': 'This is a checkbox with no label',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,L,F;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Email Opt In',
    'help-text': 'I agree to receiving monthly promotional emails.',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(F=(L=h.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var I,O,q;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox Label',
    'help-text': 'Checkbox Help Text',
    indeterminate: true,
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  }
}`,...(q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var $,B,V;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-checkbox
      checked
      label="Alex Example"
      help-text="example.com"
      toggletip-text="This participant is connected from a video device."
      info-icon-aria-label="About Alex Example"
    >
      <mdc-avatar
        slot="leading-visual"
        size="32"
        src=\${imageFixtures.avatar}
        presence=\${PRESENCE_TYPE.ON_DEVICE}
      ></mdc-avatar>
    </mdc-checkbox>
  \`,
  ...hideAllControls()
}`,...(V=(B=u.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var _,H,R;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\` <div role="main">
      <div style="display: flex; flex-direction: column;">
        <mdc-checkbox label="Unselected" disabled></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled indeterminate></mdc-checkbox>
        <mdc-checkbox label="Unselected" disabled help-text="This is a help text"></mdc-checkbox>
        <mdc-checkbox label="Selected" disabled help-text="This is a help text" checked></mdc-checkbox>
        <mdc-checkbox label="Indeterminate" disabled help-text="This is a help text" indeterminate></mdc-checkbox>
      </div>
    </div>\`
}`,...(R=(H=x.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var z,U,M;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    return html\`
      <div role="main">
        <form @submit=\${handleSubmit}>
          <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
            <legend>Select your super hero power</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox
            label="Mind Control"
            value="mind-control"
            name="super-power"
            required
            validation-message="This selection is necessary"
          ></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
      </div>
    \`;
  },
  ...hideAllControls()
}`,...(M=(U=k.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var N,K,P;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const validateCheckboxGroup = (form: HTMLFormElement): boolean => {
      const checkboxes = Array.from(form.querySelectorAll('mdc-checkbox[name="super-power"]')) as Checkbox[];
      const requiredBox = checkboxes.find(cb => cb.hasAttribute('required'));
      if (!requiredBox) return true;
      if (!requiredBox.checked) {
        requiredBox.setAttribute('help-text', 'Please select this required option');
        requiredBox.setAttribute('help-text-type', 'error');
        return false;
      }
      requiredBox.setAttribute('help-text', 'Looks good!');
      requiredBox.setAttribute('help-text-type', 'default');
      return true;
    };
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!validateCheckboxGroup(form)) {
        return;
      }
      const formData = new FormData(form);
      const selectedValues = formData.getAll('super-power');
      action('Form Submitted')({
        value: selectedValues
      });
    };
    const handleReset = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const requiredBox = form.querySelector('mdc-checkbox[name="super-power"][required]') as Checkbox;
      if (requiredBox) {
        requiredBox.setAttribute('help-text', args['help-text'] || '');
        requiredBox.setAttribute('help-text-type', args['help-text-type'] || 'default');
      }
    };
    return html\`
      <div role="main">
        <form @submit=\${handleSubmit} @reset=\${handleReset} novalidate>
          <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
            <legend>Select your super hero power (with validation)</legend>
          <mdc-checkbox label="Flight" value="flight" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Mind Control" value="mind-control" name="super-power" required></mdc-checkbox>
          <mdc-checkbox label="Super strength" value="super-strength" name="super-power"></mdc-checkbox>
          <mdc-checkbox label="Tactics" value="tactics" name="super-power"></mdc-checkbox>
          <div style="display: flex; gap: 0.25rem;">
            <mdc-button type="submit" size="24">Submit</mdc-button>
            <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
          </div>
        </fieldset>
      </form>
      </div>
    \`;
  },
  args: {
    'help-text': '',
    'help-text-type': CHECKBOX_VALIDATION.DEFAULT
  },
  ...hideAllControls()
}`,...(P=(K=f.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var W,X,G;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
    <div role="main" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Hover, click, and toggle states to observe checkbox motion (background, border, scale, icon fade). Wrap with
        <code>mdc-motionprovider</code> or enable OS reduced motion to verify instant updates.
      </p>
      <mdc-checkbox id="checkbox-motion-demo" label="Send me product updates"></mdc-checkbox>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-button id="checkbox-motion-indeterminate" variant="secondary" size="28">Set indeterminate</mdc-button>
        <mdc-button id="checkbox-motion-error" variant="secondary" size="28">Toggle error</mdc-button>
      </div>
    </div>
  \`,
  decorators: [story => {
    queueMicrotask(() => {
      const checkbox = document.getElementById('checkbox-motion-demo') as Checkbox | null;
      const indeterminateButton = document.getElementById('checkbox-motion-indeterminate');
      const errorButton = document.getElementById('checkbox-motion-error');
      indeterminateButton?.addEventListener('click', () => {
        if (!checkbox) return;
        checkbox.indeterminate = !checkbox.indeterminate;
        if (checkbox.indeterminate) {
          checkbox.checked = false;
        }
      });
      errorButton?.addEventListener('click', () => {
        if (!checkbox) return;
        const isError = checkbox.getAttribute('help-text-type') === 'error';
        if (isError) {
          checkbox.setAttribute('help-text-type', CHECKBOX_VALIDATION.DEFAULT);
          checkbox.removeAttribute('help-text');
        } else {
          checkbox.setAttribute('help-text-type', CHECKBOX_VALIDATION.ERROR);
          checkbox.setAttribute('help-text', 'This field is required.');
        }
      });
    });
    return story();
  }],
  ...hideAllControls()
}`,...(G=(X=y.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var Y,j,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [story => {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        mdc-checkbox:state(checked) { animation: fade-in 400ms ease-in-out; }
      \`;
    document.head.appendChild(style);
    return story();
  }],
  render: () => html\`
    <div role="main" style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="margin: 0; font-size: 0.875rem;">
        When checked, <code>mdc-checkbox:state(checked)</code> triggers a fade-in on the checkbox host element.
      </p>
      <mdc-checkbox label="Click me to see the fade-in animation"></mdc-checkbox>
    </div>
  \`,
  ...hideAllControls()
}`,...(J=(j=g.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const pe=["Example","WithoutLabel","HelperText","Indeterminate","LeadingVisual","DisabledVariants","FormField","FormFieldCheckboxWithHelpTextValidation","Motion","CustomStateChecked"];export{g as CustomStateChecked,x as DisabledVariants,m as Example,k as FormField,f as FormFieldCheckboxWithHelpTextValidation,h as HelperText,b as Indeterminate,u as LeadingVisual,y as Motion,p as WithoutLabel,pe as __namedExportsOrder,me as default};
