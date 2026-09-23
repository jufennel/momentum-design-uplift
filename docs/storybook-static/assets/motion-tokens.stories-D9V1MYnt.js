import{k as r}from"./iframe-Dzfa47RN.js";import{a as Y}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const Z={backgroundColor:{description:"Surface background color transition on state change",type:"transition",properties:["background-color"],duration:"{motion.duration.fast}",easing:"{motion.easing.standard}",delay:"{motion.delay.none}"},borderColor:{description:"Surface border color and shadow transition on state change",type:"transition",properties:["border-color","box-shadow"],duration:"{motion.duration.fast}",easing:"{motion.easing.standard}",delay:"{motion.delay.none}"},objectColor:{description:"Object color transition on state change",type:"transition",properties:["color"],duration:"{motion.duration.fast}",easing:"{motion.easing.standard}",delay:"{motion.delay.none}"},growShrink:{description:"Scale along the inline axis — transform transition for grow-in effects",type:"transition",properties:["transform"],duration:"{motion.duration.fast}",easing:"{motion.easing.standard}",delay:"{motion.delay.none}"},textChange:{description:"Text emphasis transition — color and font-weight between inactive and active states",type:"transition",properties:["color","font-weight"],duration:"{motion.duration.fast}",easing:"{motion.easing.standard}",delay:"{motion.delay.none}"},fadeIn:{description:"Overlay fade entrance — opacity and display when appearing",type:"transition",properties:["opacity","display"],duration:"{motion.duration.fast}",easing:"{motion.easing.entrance}",delay:"{motion.delay.none}"},fadeOut:{description:"Overlay fade exit — opacity and display when disappearing",type:"transition",properties:["opacity","display"],duration:"{motion.duration.instant}",easing:"{motion.easing.exit}",delay:"{motion.delay.none}"},expand:{description:"Panel expand — grid-template-rows from collapsed to open",type:"transition",properties:["grid-template-rows"],duration:"{motion.duration.normal}",easing:"{motion.easing.entrance}",delay:"{motion.delay.none}"},collapse:{description:"Panel collapse — grid-template-rows from open to collapsed",type:"transition",properties:["grid-template-rows"],duration:"{motion.duration.normal}",easing:"{motion.easing.exit}",delay:"{motion.delay.none}"},slideEntrance:{description:"Slide entrance — transform only; direction is set by the consuming component",type:"transition",properties:["transform"],duration:"{motion.duration.fast}",easing:"{motion.easing.entrance}",delay:"{motion.delay.none}"},slideExit:{description:"Slide exit — transform only; direction is set by the consuming component",type:"transition",properties:["transform"],duration:"{motion.duration.instant}",easing:"{motion.easing.exit}",delay:"{motion.delay.none}"}},J={animation:Z},K={duration:{instant:{value:"100ms",type:"duration",description:"Direct user feedback: press, toggle, focus, color shift. So fast it feels simultaneous with the action."},fast:{value:"200ms",type:"duration",description:"Immediate response: dropdown open, hover lift. Fast enough to not feel like waiting, slow enough to register direction."},normal:{value:"300ms",type:"duration",description:"State changes: accordion expand, tab indicator slide, entrance sweep, checkmark draw. Motion becomes visible here — the eye tracks it."},relaxed:{value:"450ms",type:"duration",description:"System events: dialog entrance, notifications. The motion takes its time because the change is significant and the user needs to orient."},slow:{value:"600ms",type:"duration",description:"Major layout restructuring: app frame collapse/expand, full-view transitions. Long enough to follow the whole environment reorganizing without losing track."},sustained:{value:"1200ms",type:"duration",description:"Ambient presence: the assistant glow rising or setting, background atmosphere shifts. Long enough to feel like an environmental change rather than a UI event."},extended:{value:"2400ms",type:"duration",description:"Ambient travel: the glow repositioning across the viewport. Twice the duration of sustained motion because the distance is roughly twice as far."}},easing:{standard:{value:"cubic-bezier(0.44, 0, 0, 1)",type:"cubicBezier",description:"State changes — background, border, color; hover, press, toggle"},entrance:{value:"cubic-bezier(0, 0, 0.2, 1)",type:"cubicBezier",description:"Elements entering the screen; give users time to orient"},exit:{value:"cubic-bezier(0.5, 0, 1, 1)",type:"cubicBezier",description:"Elements leaving the screen; get out of the way quickly"},linear:{value:"cubic-bezier(0, 0, 1, 1)",type:"cubicBezier",description:"Constant-speed transitions with no acceleration or deceleration"}},delay:{none:{value:"0ms",type:"duration",description:"No intentional pause before animation starts"},short:{value:"200ms",type:"duration",description:"Hover delay before tooltip appears"},medium:{value:"400ms",type:"duration",description:"Sequential reveals and debounced responses"},long:{value:"600ms",type:"duration",description:"Extended pause for complex sequential animations"}},stagger:{tight:{value:"30ms",type:"duration",description:"Delay between consecutive items — dropdown menu items"},normal:{value:"60ms",type:"duration",description:"Delay between consecutive items — card grids"},relaxed:{value:"100ms",type:"duration",description:"Delay between consecutive items — onboarding steps"}}},_={motion:K};function B(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}const X=100,$=10,D=X-$*2;function Q(e){const n=e.match(/cubic-bezier\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/i);return n?{x1:Number(n[1]),y1:Number(n[2]),x2:Number(n[3]),y2:Number(n[4])}:null}function y(e,n){return{x:$+e*D,y:$+(1-n)*D}}function ee(e){const n=Q(e);if(!n)return null;const t=y(0,0),o=y(n.x1,n.y1),a=y(n.x2,n.y2),i=y(1,1);return{path:`M ${t.x} ${t.y} C ${o.x} ${o.y} ${a.x} ${a.y} ${i.x} ${i.y}`,start:t,end:i,control1:o,control2:a}}const p="is-resetting",d="is-fading-out",g="is-fading-in",x="is-fading-in-visible",ne=2e3,v="is-cycling",f="is-active",l=new WeakMap;function te(e,n){return n.includes(e)?e:n.includes("border-color")&&/^border(-[a-z]+)?-color$/.test(e)?"border-color":null}function C(e){const n=e.querySelector("[data-animation-target]");return n instanceof HTMLElement?n:null}function G(e,n){const t=e.querySelector(".motionTokensAnimationPlayButton");if(t instanceof HTMLElement){if(n){t.setAttribute("disabled","");return}t.removeAttribute("disabled")}}function H(e){const n=l.get(e);n!=null&&n.holdTimeoutId&&clearTimeout(n.holdTimeoutId),l.delete(e)}function T(e){H(e),e.classList.remove(v,f),e.removeAttribute("data-animation-phase"),G(e,!1)}function E(e){const{transitionDuration:n}=getComputedStyle(e);return n.split(",").map(t=>{const o=t.trim();return!o||o==="none"?0:o.endsWith("ms")?Number.parseFloat(o):Number.parseFloat(o)*1e3}).reduce((t,o)=>Math.max(t,Number.isNaN(o)?0:o),0)}function A(e,n){const t=l.get(e);t&&(t.phase="hold",e.setAttribute("data-animation-phase","hold"),t.holdTimeoutId=setTimeout(n,ne))}function j(e,n){A(e,n)}function q(e,n,t){H(e),e.classList.add(v),e.setAttribute("data-animation-phase","forward"),l.set(e,{mode:n,phase:"forward",completedProperties:new Set,activeProperties:t}),G(e,!0),e.classList.add(f)}function V(e,n){const t=l.get(e);if(!t)return;const o=C(e);t.phase="exit",t.completedProperties.clear(),t.activeProperties=n,requestAnimationFrame(()=>{e.setAttribute("data-animation-phase","exit"),o==null||o.getBoundingClientRect(),requestAnimationFrame(()=>{e.classList.remove(f),o==null||o.getBoundingClientRect()})})}function oe(e){const n=l.get(e);if(!(!n||n.phase==="hold")){if(n.phase==="forward"){if(n.mode==="reverse"){A(e,()=>{n.phase="reverse",e.setAttribute("data-animation-phase","reverse"),e.classList.remove(f)});return}A(e,()=>{if(!n.exitProperties){T(e);return}V(e,n.exitProperties)});return}(n.phase==="reverse"||n.phase==="exit")&&T(e)}}function z(e,n,t){const o=te(n.propertyName,t);if(!o)return;const a=l.get(e);!a||a.phase==="hold"||(a.completedProperties.add(o),t.every(i=>a.completedProperties.has(i))&&(a.completedProperties.clear(),oe(e)))}function F(e,n){const o=e.currentTarget.closest("[data-animation-card]");if(!(o instanceof HTMLElement)||o.classList.contains(v))return;const a=C(o);a&&(q(o,"reverse",n),requestAnimationFrame(()=>{E(a)===0&&j(o,()=>{const i=l.get(o);i&&(i.phase="reverse",o.setAttribute("data-animation-phase","reverse"),o.classList.remove(f))})}))}function ie(e,n,t,o){if(n==="reverse"){F(e,t);return}const i=e.currentTarget.closest("[data-animation-card]");if(!(i instanceof HTMLElement)||i.classList.contains(v))return;const c=C(i);if(!c||!o)return;q(i,"sequence",t);const u=l.get(i);u&&(u.exitProperties=o),requestAnimationFrame(()=>{E(c)===0&&j(i,()=>{if(!o){T(i);return}V(i,o),requestAnimationFrame(()=>{E(c)===0&&T(i)})})})}function w(e,n){if(e.target!==e.currentTarget)return;const o=e.currentTarget.closest("[data-animation-card]");o instanceof HTMLElement&&z(o,e,n)}function ae(e,n,t,o){if(e.target!==e.currentTarget)return;const i=e.currentTarget.closest("[data-animation-card]");if(!(i instanceof HTMLElement))return;const c=l.get(i);if(!c){w(e,t);return}const u=c.phase==="exit"&&o?o:c.activeProperties;z(i,e,u)}function re(e,n="is-active"){e.classList.remove(d,g,x),e.classList.add(p),e.classList.remove(n),e.getBoundingClientRect(),e.classList.remove(p),e.classList.add(n)}function S(e){e.classList.add(p),e.classList.remove("is-active",d),e.classList.add(g),e.getBoundingClientRect(),e.classList.remove(p),requestAnimationFrame(()=>{e.classList.add(x)})}function L(e){e.classList.remove(g,x)}function se(e,n="is-active"){e.classList.add(p,n),e.getBoundingClientRect(),e.classList.remove(p,n)}const R=["duration","easing","delay","stagger"],ce=new Set(["fadeOut","collapse","slideExit"]),de=["backgroundColor","borderColor","objectColor","textChange"],le={borderColor:["border-color"]};function U(e){const n=e.match(/^\{motion\.(\w+)\.(\w+)\}$/);return n?{category:n[1],name:n[2]}:null}function m(e){var o;if(!e)return"";const n=U(e);return n?((o=_.motion[n.category][n.name])==null?void 0:o.value)??e:e}function me(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ue(e){const n=m(e.duration),t=m(e.easing),o=m(e.delay);if(!(!n||!t))return`border-color ${n} ${t} ${o||"0ms"}`}function pe(){const e=m("{motion.duration.normal}"),n=m("{motion.easing.entrance}"),t=m("{motion.delay.none}");return`opacity ${e} ${n} ${t}, display ${e} ${n} ${t}`}function ge(){return R.flatMap(e=>{const n=_.motion[e];return Object.entries(n).map(([t,o])=>({category:e,name:t,value:o.value,description:o.description??"",cssVar:`--mds-motion-${e}-${B(t)}`}))})}function fe(){const e=J.animation;return Object.entries(e).map(([n,t])=>{const o=B(n),a=t.type==="keyframe"||t.type==="keyframeCompound"?"animation":"transition",i=U(t.easing??""),c=(i==null?void 0:i.name)??"standard",u=t.properties??[];return{name:n,kebabName:o,description:t.description??"",type:t.type,cssVar:`--mds-${a}-${o}`,properties:u,demoProperties:le[n]??u,isExit:ce.has(n),durationValue:m(t.duration),easingName:c,easingLabel:me(c),borderColorTransition:n==="borderColor"?ue(t):void 0}})}const ye=ge(),W=fe(),he=de.map(e=>W.find(n=>n.name===e));function s(e){const n=W.find(t=>t.name===e);if(!n)throw new Error(`Animation token not found: ${e}`);return n}const Te=[{id:"growShrink",title:"growShrink",description:s("growShrink").description,previewVariant:"growShrink",playback:"reverse",metadataToken:s("growShrink"),entranceToken:s("growShrink")},{id:"fadeInOut",title:"fadeIn/Out",description:s("fadeIn").description,previewVariant:"fadeInOut",playback:"sequence",metadataToken:s("fadeIn"),metadataDurationValue:m("{motion.duration.normal}"),entranceToken:s("fadeIn"),entranceDemoProperties:["opacity"],entranceTransition:pe(),exitToken:s("fadeOut"),exitDemoProperties:["opacity"]},{id:"expandCollapse",title:"expand/collapse",description:s("expand").description,previewVariant:"expandCollapse",playback:"sequence",metadataToken:s("expand"),entranceToken:s("expand"),exitToken:s("collapse")},{id:"slideEntranceExit",title:"slideEntrance/Exit",description:s("slideEntrance").description,previewVariant:"slideEntranceExit",playback:"sequence",metadataToken:s("slideEntrance"),entranceToken:s("slideEntrance"),entranceDemoProperties:["transform"],exitToken:s("slideExit"),exitDemoProperties:["transform"]}],b=Object.fromEntries(R.map(e=>[e,ye.filter(n=>n.category===e)])),ve=e=>{var n;return(n=document.querySelector("body.sb-show-main"))==null||n.classList.remove("mds-motion","mds-animation"),e()},be=(e,n=!1)=>{const t=e.currentTarget.closest("[data-motion-card]");if(t instanceof HTMLElement){if(n){se(t);return}re(t)}},ke=e=>{if(e.target!==e.currentTarget)return;const n=e.currentTarget.closest("[data-motion-card]");if(n instanceof HTMLElement){if(e.propertyName==="left"&&n.classList.contains("is-active")&&!n.classList.contains(d)){n.classList.add(d);return}if(e.propertyName==="opacity"&&n.classList.contains(d)){S(n);return}e.propertyName==="opacity"&&n.classList.contains(g)&&L(n)}},I=e=>{if(e.target!==e.currentTarget)return;const n=e.currentTarget,t=n.closest("[data-motion-card]");if(!(t instanceof HTMLElement))return;const o=n.classList.contains("motionTokensEasingSquare");if(e.propertyName==="left"&&o&&t.classList.contains("is-active")&&!t.classList.contains(d)){t.classList.add(d);return}if(e.propertyName==="opacity"&&o&&t.classList.contains(d)){S(t);return}e.propertyName==="opacity"&&o&&t.classList.contains(g)&&L(t)},$e=e=>{if(e.target!==e.currentTarget)return;const n=e.currentTarget,t=n.closest("[data-motion-card]");if(!(t instanceof HTMLElement))return;const o=n.classList.contains("motionTokensDelayCircle");if(e.propertyName==="left"&&o&&t.classList.contains("is-active")&&!t.classList.contains(d)){t.classList.add(d);return}if(e.propertyName==="opacity"&&o&&t.classList.contains(d)){S(t);return}e.propertyName==="opacity"&&o&&t.classList.contains(g)&&L(t)},Ee=(e=!1)=>r`
  <mdc-button
    class="motionTokensPlayButton"
    size="40"
    variant="secondary"
    prefix-icon="play-bold"
    aria-label="Play animation"
    @click=${n=>be(n,e)}
  ></mdc-button>
`,Ae={standard:"var(--mds-color-theme-text-warning-normal)",entrance:"var(--mds-color-theme-text-success-normal)",exit:"var(--mds-color-theme-text-error-normal)",linear:"var(--mds-color-theme-text-accent-normal)"},xe=e=>Ae[e]??"var(--mds-color-theme-text-accent-normal)",P=(e,n,t,{isExit:o=!1,initialActive:a=!1,aboveHeader:i,cardStyle:c}={})=>r`
  <article
    class="motionTokensCard ${a?"is-active":""}"
    data-motion-card
    style=${c??""}
  >
    ${i}
    <div class="motionTokensCardHeader">
      <h4 class="title">${e.name}</h4>
      <h4 class="subtitle">${n}</h4>
    </div>
    <div class="motionTokensStage">
      ${Ee(o)}
      ${t}
    </div>
    <p class="motionTokensCardDescription">${e.description}</p>
  </article>
`,Ce=e=>P(e,e.value,r`
      <div class="motionTokensDurationTrack" style="--demo-duration: var(${e.cssVar})">
        <div class="motionTokensDurationDot" @transitionend=${ke}></div>
      </div>
    `),we=e=>{const n=ee(e.value);return n?r`
    <svg
      class="motionTokensEasingGraph"
      viewBox="0 0 100 100"
      role="img"
      aria-label="Easing curve for ${e.name}"
    >
      <line
        class="motionTokensEasingGraphHandle"
        x1="${n.start.x}"
        y1="${n.start.y}"
        x2="${n.control1.x}"
        y2="${n.control1.y}"
      ></line>
      <line
        class="motionTokensEasingGraphHandle"
        x1="${n.end.x}"
        y1="${n.end.y}"
        x2="${n.control2.x}"
        y2="${n.control2.y}"
      ></line>
      <path class="motionTokensEasingGraphCurve" d="${n.path}"></path>
      <circle
        class="motionTokensEasingGraphControl"
        cx="${n.control1.x}"
        cy="${n.control1.y}"
        r="2.5"
      ></circle>
      <circle
        class="motionTokensEasingGraphControl"
        cx="${n.control2.x}"
        cy="${n.control2.y}"
        r="2.5"
      ></circle>
      <circle
        class="motionTokensEasingGraphEndpoint"
        cx="${n.start.x}"
        cy="${n.start.y}"
        r="4"
      ></circle>
      <circle
        class="motionTokensEasingGraphEndpoint"
        cx="${n.end.x}"
        cy="${n.end.y}"
        r="4"
      ></circle>
    </svg>
  `:r``},Se=e=>P(e,e.value,r`
      <div class="motionTokensEasingTrack" style="--demo-easing: var(${e.cssVar})">
        <div
          class="motionTokensEasingSquare"
          @transitionend=${I}
        ></div>
        <div
          class="motionTokensEasingCircle"
          @transitionend=${I}
        ></div>
      </div>
    `,{aboveHeader:we(e),cardStyle:`--motion-tokens-demo-color: ${xe(e.name)}`}),Le=e=>P(e,e.value,r`
      <div class="motionTokensDelayTrack" style="--demo-delay: var(${e.cssVar})">
        <div class="motionTokensDelaySquare"></div>
        <div
          class="motionTokensDelayCircle"
          @transitionend=${$e}
        ></div>
      </div>
    `),Pe=e=>r`
  <mdc-button
    class="motionTokensAnimationPlayButton"
    size="32"
    variant="secondary"
    prefix-icon="play-bold"
    aria-label="Play ${e.name} animation"
    @click=${n=>F(n,e.demoProperties)}
  ></mdc-button>
`,De=e=>{const n=t=>w(t,e.demoProperties);return e.name==="objectColor"?r`
      <div class="motionTokensAnimationObject">
        <mdc-icon
          class="motionTokensAnimationIcon"
          name="launch-regular"
          data-animation-target
          @transitionend=${n}
        ></mdc-icon>
      </div>
    `:r`
    <div
      class="motionTokensAnimationObject"
      data-animation-target
      @transitionend=${n}
    >
      <mdc-icon class="motionTokensAnimationIcon" name="launch-regular"></mdc-icon>
    </div>
  `},Ie=e=>e.name==="textChange"?r`
      <p
        class="motionTokensAnimationText"
        data-animation-target
        @transitionend=${n=>w(n,e.demoProperties)}
      >
        This is an example.
      </p>
    `:De(e),Oe=e=>r`
  <article
    class="motionTokensAnimationCard motionTokensAnimationCard--${e.name}"
    data-animation-card
    style=${e.borderColorTransition?`--demo-border-transition: ${e.borderColorTransition}`:""}
  >
    <header class="motionTokensAnimationCardHeader">
      <h4 class="title">${e.name}</h4>
      ${Pe(e)}
    </header>
    <div class="motionTokensAnimationPreview">
      ${Ie(e)}
    </div>
    <p class="motionTokensCardDescription">${e.description}</p>
  </article>
`,Me=(e,n)=>r`
  <section>
    <h3>${e}</h3>
    <div class="motionTokensGrid">${n.map(Oe)}</div>
  </section>
`,Ne=e=>r`
  <mdc-button
    class="motionTokensAnimationPlayButton"
    size="32"
    variant="secondary"
    prefix-icon="play-bold"
    aria-label="Play ${e.title} animation"
    @click=${n=>{var t;return ie(n,e.playback,e.entranceDemoProperties??e.entranceToken.demoProperties,e.exitDemoProperties??((t=e.exitToken)==null?void 0:t.demoProperties))}}
  ></mdc-button>
`,_e=e=>{const n=a=>{var i;return ae(a,e.playback,e.entranceDemoProperties??e.entranceToken.demoProperties,e.exitDemoProperties??((i=e.exitToken)==null?void 0:i.demoProperties))},t=e.previewVariant==="slideEntranceExit"?"motionTokensAnimationPreview motionTokensAnimationPreview--slide":"motionTokensAnimationPreview",o={growShrink:"motionTokensAnimationObject",fadeInOut:"motionTokensAnimationObject motionTokensAnimationObject--fade",expandCollapse:"motionTokensAnimationExpandCollapse",slideEntranceExit:"motionTokensAnimationObject motionTokensAnimationObject--slide"};return e.previewVariant==="expandCollapse"?r`
      <div class=${t}>
        <div
          class=${o[e.previewVariant]}
          data-animation-target
          @transitionend=${n}
        >
          <div class="motionTokensAnimationExpandCollapseInner">
            <div class="motionTokensAnimationExpandCollapseSurface"></div>
          </div>
        </div>
      </div>
    `:r`
    <div class=${t}>
      <div
        class=${o[e.previewVariant]}
        data-animation-target
        @transitionend=${n}
      >
        <mdc-icon class="motionTokensAnimationIcon" name="launch-regular"></mdc-icon>
      </div>
    </div>
  `},Be=e=>r`
  <article
    class="motionTokensAnimationCard motionTokensAnimationCard--${e.previewVariant}"
    data-animation-card
    style=${e.entranceTransition?`--demo-fade-in-transition: ${e.entranceTransition}`:""}
  >
    <header class="motionTokensAnimationCardHeader">
      <h4 class="title">${e.title}</h4>
      ${Ne(e)}
    </header>
    ${_e(e)}
    <p class="motionTokensCardDescription">${e.description}</p>
  </article>
`,Ge=(e,n)=>r`
  <section>
    <h3>${e}</h3>
    <div class="motionTokensGrid">${n.map(Be)}</div>
  </section>
`,k=(e,n,t)=>r`
  <section>
    <h3>${e}</h3>
    <div class="motionTokensGrid">${n.map(t)}</div>
  </section>
`,Ve={title:"Foundations/Motion Tokens",decorators:[ve],parameters:{docs:{description:{component:"Interactive playground for Momentum motion primitives and named animation tokens. Toggle motion off to compare token-based transitions with instant state changes."}}},argTypes:{motionEnabled:{control:"boolean",description:'When off, the provider uses `motion="reduce"` and token-based motion is disabled.'},...Y(!0)}},h={globals:{"mdc-code-preview":!1},args:{motionEnabled:!0},render:({motionEnabled:e})=>r`
    <mdc-motionprovider motion="${e?"full":"reduce"}">
      <div class="motionTokensDemo">
        <header class="motionTokensIntro">
          <h1>Motion Tokens Demo</h1>
        </header>

        <section>
          <h2>Core motion tokens</h2>
          <p>
            Core motion tokens define our key timings and easing for all the animations that we use in Momentum. These tokens are used to define the duration, easing, and delay of all the animations that we use in Momentum.
          </p> 
        </section>

        ${k("Duration",b.duration,Ce)}
        ${k("Easing",b.easing,Se)}
        ${k("Delay",b.delay,Le)}

        <section class="motionTokensSection">
          <h2>Animation tokens</h2>
          <p>
            Animation tokens combine the core motion tokens to transition specific properties. These are combined to animate our components as well as as parts of the user’s interface. .
          </p>
          ${Me("Object state",he)}
          ${Ge("Layout",Te)}
        </section>
      </div>
    </mdc-motionprovider>
  `};var O,M,N;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    'mdc-code-preview': false
  },
  args: {
    motionEnabled: true
  },
  render: ({
    motionEnabled
  }) => html\`
    <mdc-motionprovider motion="\${motionEnabled ? 'full' : 'reduce'}">
      <div class="motionTokensDemo">
        <header class="motionTokensIntro">
          <h1>Motion Tokens Demo</h1>
        </header>

        <section>
          <h2>Core motion tokens</h2>
          <p>
            Core motion tokens define our key timings and easing for all the animations that we use in Momentum. These tokens are used to define the duration, easing, and delay of all the animations that we use in Momentum.
          </p> 
        </section>

        \${renderPrimitiveSection('Duration', motionPrimitivesByCategory.duration, renderDurationCard)}
        \${renderPrimitiveSection('Easing', motionPrimitivesByCategory.easing, renderEasingCard)}
        \${renderPrimitiveSection('Delay', motionPrimitivesByCategory.delay, renderDelayCard)}

        <section class="motionTokensSection">
          <h2>Animation tokens</h2>
          <p>
            Animation tokens combine the core motion tokens to transition specific properties. These are combined to animate our components as well as as parts of the user’s interface. .
          </p>
          \${renderAnimationSection('Object state', objectStateAnimationTokens)}
          \${renderLayoutSection('Layout', layoutAnimationDemos)}
        </section>
      </div>
    </mdc-motionprovider>
  \`
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const ze=["Example"];export{h as Example,ze as __namedExportsOrder,Ve as default};
