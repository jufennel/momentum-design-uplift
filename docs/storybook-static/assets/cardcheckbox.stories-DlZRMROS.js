import{H as K,O as g,K as r,h,J as e,k as l,Q as z,t as a}from"./iframe-BRzdycIC.js";import{i as P}from"./manifest-CNQCgfOm.js";import{i}from"./imageFixtures-CD4avj2q.js";import{c as Y,s as j}from"./commonArgTypes-BG7EqI50.js";import{h as X,a as V}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,W=t=>l`<div role="main">
    <mdc-cardcheckbox
      @click="${n("onclick")}"
      @keydown="${n("onkeydown")}"
      @keyup="${n("onkeyup")}"
      @focus="${n("onfocus")}"
      @change="${n("onchange")}"
      variant="${a(t.variant)}"
      orientation="${a(t.orientation)}"
      card-title="${a(t["card-title"])}"
      subtitle="${a(t.subtitle)}"
      image-src="${a(t["image-src"])}"
      image-alt="${a(t["image-alt"])}"
      icon-name="${a(t["icon-name"])}"
      ?checked="${t.checked}"
      ?disabled="${t.disabled}"
      aria-label="${a(t["aria-label"])}"
      selection-type="${a(t["selection-type"])}"
      title-tag-name="${a(t["title-tag-name"])}"
      subtitle-tag-name="${a(t["subtitle-tag-name"])}"
      tabindex="${a(t.tabIndex)}"
      class="${a(t.class)}"
      style="${a(t.style)}"
      >${t.children}</mdc-cardcheckbox
    >
  </div>`,ae={title:"Components/card/cardcheckbox",tags:["autodocs"],component:"mdc-cardcheckbox",render:W,argTypes:{variant:{control:"select",options:Object.values(K)},orientation:{control:"select",options:Object.values(g)},"card-title":{control:"text"},subtitle:{control:"text"},"image-src":{control:"text"},"image-alt":{control:"text"},"icon-name":{control:"select",options:Object.keys(P)},checked:{control:"boolean"},disabled:{control:"boolean"},tabIndex:{control:"number"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only cards.",table:{category:"attributes"}},"selection-type":{control:"select",options:Object.values(r)},"title-tag-name":{control:"select",options:Object.values(h)},"subtitle-tag-name":{control:"select",options:Object.values(h)},...X(["children"]),...Y,...j}},c=l`<mdc-text slot="body" type="body-midsize-medium" tagname="span"
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate aliquet risus, eget auctor ante egestas
  facilisis. Curabitur malesuada tempor pulvinar. Quisque sollicitudin magna leo, gravida ultrices lacus lobortis at.
  Praesent gravida dui diam, non elementum risus laoreet vitae. Sed sed nunc ullamcorper, porttitor dui id, posuere
  justo. Curabitur laoreet sem ut pharetra hendrerit. Vivamus mattis ligula eget imperdiet tempor. Ut in massa luctus
  lacus sodales accumsan. Praesent at aliquam leo. Ut a scelerisque turpis.</mdc-text
>`,o={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,variant:e.VARIANT,orientation:e.ORIENTATION,checked:!1,disabled:!1,tabIndex:0,"selection-type":r.CHECK,children:c}},d={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold","aria-label":"Aria Label","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:g.HORIZONTAL,children:c}},s={args:{"card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,"aria-label":"Aria Label","selection-type":r.CHECK,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:e.ORIENTATION,children:c}},m={args:{"image-src":i.card,"image-alt":"Image Alt","card-title":"Title",subtitle:"Subtitle","icon-name":"placeholder-bold","selection-type":r.CHECK,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,checked:!1,disabled:!1,tabIndex:0,variant:e.VARIANT,orientation:e.ORIENTATION}},b={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:e.VARIANT,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,orientation:e.ORIENTATION,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="${i.card}" alt="Image Alt" />
      </div>
      ${c}`}},u={args:{"card-title":"Title",subtitle:"Subtitle","image-src":i.card,"image-alt":"Image Alt","icon-name":"placeholder-bold",variant:e.VARIANT,"title-tag-name":e.TAGNAME,"subtitle-tag-name":e.TAGNAME,orientation:g.HORIZONTAL,"selection-type":r.CHECKBOX,checked:!1,disabled:!1,tabIndex:0,children:l`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="${i.card}" alt="Image Alt" />
      </div>
      ${c}`}},p={render:()=>l`
    <div role="main" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Click each card to observe checked/unchecked motion on the card background and selection indicator. Wrap with
        <code>mdc-motionprovider</code> or enable OS reduced motion to verify instant updates.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <mdc-cardcheckbox
          card-title="Check indicator"
          subtitle='selection-type="check"'
          icon-name="placeholder-bold"
          selection-type="check"
          style="--mdc-card-width: 16rem;"
        ></mdc-cardcheckbox>
        <mdc-cardcheckbox
          card-title="Checkbox indicator"
          subtitle='selection-type="checkbox"'
          icon-name="placeholder-bold"
          selection-type="checkbox"
          style="--mdc-card-width: 16rem;"
        ></mdc-cardcheckbox>
      </div>
    </div>
  `,...V()},A={render:()=>l`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        ${z([1,2,3,4],t=>l`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title ${t}"
              subtitle="Subtitle"
              image-src="${i.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              ${c}
            </mdc-cardcheckbox>
          `)}
      </div>
    </mdc-formfieldgroup>
  `,...V()};var T,E,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    checked: false,
    disabled: false,
    tabIndex: 0,
    'selection-type': SELECTION_TYPE.CHECK,
    children: defaultChildren
  }
}`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,y,f;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    'aria-label': 'Aria Label',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: ORIENTATIONS.HORIZONTAL,
    children: defaultChildren
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var C,N,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    'aria-label': 'Aria Label',
    'selection-type': SELECTION_TYPE.CHECK,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION,
    children: defaultChildren
  }
}`,...(k=(N=s.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var S,v,O;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'icon-name': 'placeholder-bold',
    'selection-type': SELECTION_TYPE.CHECK,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    checked: false,
    disabled: false,
    tabIndex: 0,
    variant: DEFAULTS.VARIANT,
    orientation: DEFAULTS.ORIENTATION
  }
}`,...(O=(v=m.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var L,$,F;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: DEFAULTS.ORIENTATION,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="before-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content Before Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(F=($=b.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var R,M,G;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    'card-title': 'Title',
    subtitle: 'Subtitle',
    'image-src': imageFixtures.card,
    'image-alt': 'Image Alt',
    'icon-name': 'placeholder-bold',
    variant: DEFAULTS.VARIANT,
    'title-tag-name': DEFAULTS.TAGNAME,
    'subtitle-tag-name': DEFAULTS.TAGNAME,
    orientation: ORIENTATIONS.HORIZONTAL,
    'selection-type': SELECTION_TYPE.CHECKBOX,
    checked: false,
    disabled: false,
    tabIndex: 0,
    children: html\`<div slot="after-body">
        <mdc-text type="body-midsize-medium" tagname="span">Content After Body</mdc-text>
        <img src="\${imageFixtures.card}" alt="Image Alt" />
      </div>
      \${defaultChildren}\`
  }
}`,...(G=(M=u.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var D,U,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => html\`
    <div role="main" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Click each card to observe checked/unchecked motion on the card background and selection indicator. Wrap with
        <code>mdc-motionprovider</code> or enable OS reduced motion to verify instant updates.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <mdc-cardcheckbox
          card-title="Check indicator"
          subtitle='selection-type="check"'
          icon-name="placeholder-bold"
          selection-type="check"
          style="--mdc-card-width: 16rem;"
        ></mdc-cardcheckbox>
        <mdc-cardcheckbox
          card-title="Checkbox indicator"
          subtitle='selection-type="checkbox"'
          icon-name="placeholder-bold"
          selection-type="checkbox"
          style="--mdc-card-width: 16rem;"
        ></mdc-cardcheckbox>
      </div>
    </div>
  \`,
  ...hideAllControls()
}`,...(B=(U=p.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var H,w,_;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-formfieldgroup label="Checkbox Cards" help-text="Help Text" data-aria-label="Checkbox Cards">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        \${repeat([1, 2, 3, 4], index => html\`
            <mdc-cardcheckbox
              name="checkbox cards"
              variant="border"
              orientation="vertical"
              card-title="Title \${index}"
              subtitle="Subtitle"
              image-src="\${imageFixtures.card}"
              image-alt="Image Alt"
              icon-name="placeholder-bold"
              tabIndex="0"
            >
              \${defaultChildren}
            </mdc-cardcheckbox>
          \`)}
      </div>
    </mdc-formfieldgroup>
  \`,
  ...hideAllControls()
}`,...(_=(w=A.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const ie=["Example","HorizontalCard","CardWithoutImage","CardWithoutBody","ContentBeforeBody","ContentAfterBody","Motion","CardsInCheckboxGroup"];export{m as CardWithoutBody,s as CardWithoutImage,A as CardsInCheckboxGroup,u as ContentAfterBody,b as ContentBeforeBody,o as Example,d as HorizontalCard,p as Motion,ie as __namedExportsOrder,ae as default};
