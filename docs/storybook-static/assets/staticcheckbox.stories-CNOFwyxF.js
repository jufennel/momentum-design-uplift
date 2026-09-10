import{k as b}from"./iframe-BRzdycIC.js";import{c as h,s as k}from"./commonArgTypes-BG7EqI50.js";import{a as u}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const x=e=>b` <mdc-staticcheckbox
    ?checked="${e.checked}"
    ?indeterminate="${e.indeterminate}"
    ?disabled="${e.disabled}"
    ?readonly="${e.readonly}"
    ?soft-disabled="${e["soft-disabled"]}"
    class="${e.class}"
    style="${e.style}"
  ></mdc-staticcheckbox>`,v={title:"Components/decorator/staticcheckbox",tags:["autodocs"],component:"mdc-staticcheckbox",render:x,argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},"soft-disabled":{control:"boolean"},...h,...k},parameters:{actions:{disable:!0}}},o={args:{checked:!1,indeterminate:!1,disabled:!1,readonly:!1,"soft-disabled":!1}},c={render:()=>b`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Toggle and hover the checkbox to observe background, border, scale, and icon fade motion. Use Storybook
        <code>mds-motion</code> / <code>mds-animation</code> body classes or OS reduced motion to verify instant state
        changes.
      </p>
      <mdc-staticcheckbox id="staticcheckbox-motion-demo">Option</mdc-staticcheckbox>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-button id="staticcheckbox-motion-toggle" variant="secondary" size="28">Toggle checked</mdc-button>
        <mdc-button id="staticcheckbox-motion-indeterminate" variant="secondary" size="28"
          >Toggle indeterminate</mdc-button
        >
      </div>
    </div>
  `,decorators:[e=>(queueMicrotask(()=>{const t=document.getElementById("staticcheckbox-motion-demo"),i=document.getElementById("staticcheckbox-motion-toggle"),n=document.getElementById("staticcheckbox-motion-indeterminate");i==null||i.addEventListener("click",()=>{t&&(t.toggleAttribute("checked"),t.hasAttribute("checked")&&t.removeAttribute("indeterminate"))}),n==null||n.addEventListener("click",()=>{t&&(t.hasAttribute("indeterminate")?t.removeAttribute("indeterminate"):(t.setAttribute("indeterminate",""),t.removeAttribute("checked")))})}),e())],...u()};var d,a,r;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    readonly: false,
    'soft-disabled': false
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,m,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Toggle and hover the checkbox to observe background, border, scale, and icon fade motion. Use Storybook
        <code>mds-motion</code> / <code>mds-animation</code> body classes or OS reduced motion to verify instant state
        changes.
      </p>
      <mdc-staticcheckbox id="staticcheckbox-motion-demo">Option</mdc-staticcheckbox>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mdc-button id="staticcheckbox-motion-toggle" variant="secondary" size="28">Toggle checked</mdc-button>
        <mdc-button id="staticcheckbox-motion-indeterminate" variant="secondary" size="28"
          >Toggle indeterminate</mdc-button
        >
      </div>
    </div>
  \`,
  decorators: [story => {
    queueMicrotask(() => {
      const checkbox = document.getElementById('staticcheckbox-motion-demo') as HTMLElement | null;
      const toggleButton = document.getElementById('staticcheckbox-motion-toggle');
      const indeterminateButton = document.getElementById('staticcheckbox-motion-indeterminate');
      toggleButton?.addEventListener('click', () => {
        if (!checkbox) return;
        checkbox.toggleAttribute('checked');
        if (checkbox.hasAttribute('checked')) {
          checkbox.removeAttribute('indeterminate');
        }
      });
      indeterminateButton?.addEventListener('click', () => {
        if (!checkbox) return;
        if (checkbox.hasAttribute('indeterminate')) {
          checkbox.removeAttribute('indeterminate');
        } else {
          checkbox.setAttribute('indeterminate', '');
          checkbox.removeAttribute('checked');
        }
      });
    });
    return story();
  }],
  ...hideAllControls()
}`,...(l=(m=c.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const A=["Example","Motion"];export{o as Example,c as Motion,A as __namedExportsOrder,v as default};
