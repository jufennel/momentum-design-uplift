import type { Decorator, Meta, StoryFn, StoryObj } from '@storybook/web-components';
import { action } from 'storybook/actions';
import { html } from 'lit';

import '.';
import './motionprovider.stories.styles.css';
import '../button';
import '../buttonsimple';
import '../accordionbutton';
import '../tab';
import '../tablist';
import '../menupopover';
import '../menuitem';
import '../divider';
import '../dialog';
import '../banner';
import '../calendar';
import '../cardcheckbox';
import '../filterchip';
import '../input';
import '../progressbar';
import '../sidenavigation';
import '../navmenuitem';
import '../menusection';
import '../icon';
import '../stepperitem';
import '../toggle';
import { hideAllControls } from '../../../config/storybook/utils';
import { ROLE } from '../../utils/roles';
import { STATUS } from '../stepperitem/stepperitem.constants';

const MENU_TRIGGER_ID = 'motion-demo-menu-trigger';
const PROGRESSBAR_SELECTOR = '[data-motion-demo="progressbar"]';
const PROGRESSBAR_VALUE_0_ID = 'motion-demo-progressbar-value-0';
const PROGRESSBAR_VALUE_50_ID = 'motion-demo-progressbar-value-50';
const PROGRESSBAR_VALUE_100_ID = 'motion-demo-progressbar-value-100';
const PROGRESSBAR_ERROR_ID = 'motion-demo-progressbar-error';
const DIALOG_TRIGGER_ID = 'motion-demo-dialog-trigger';
const DIALOG_ID = 'motion-demo-dialog';
const BANNER_SHOW_ID = 'motion-demo-banner-show';
const BANNER_SLOT_ID = 'motion-demo-banner-slot';

const stripBodyMotionClasses: Decorator = Story => {
  document.querySelector('body.sb-show-main')?.classList.remove('mds-motion', 'mds-animation');

  return Story();
};

const openDialog = (): void => {
  document.getElementById(DIALOG_ID)?.setAttribute('visible', '');
};

const closeDialog = (): void => {
  document.getElementById(DIALOG_ID)?.removeAttribute('visible');
};

const syncProgressbarDemoButtons = (value: string, error: boolean): void => {
  document.getElementById(PROGRESSBAR_VALUE_0_ID)?.toggleAttribute('active', value === '0' && !error);
  document.getElementById(PROGRESSBAR_VALUE_50_ID)?.toggleAttribute('active', value === '50' && !error);
  document.getElementById(PROGRESSBAR_VALUE_100_ID)?.toggleAttribute('active', value === '100' && !error);
  document.getElementById(PROGRESSBAR_ERROR_ID)?.toggleAttribute('active', error);
};

const getProgressbarDemo = (): HTMLElement | null => document.querySelector(PROGRESSBAR_SELECTOR);

const setProgressbarDemoState = (value: string, error: boolean): void => {
  const progressbar = getProgressbarDemo();
  if (!progressbar) {
    return;
  }

  if (error) {
    progressbar.setAttribute('error', '');
  } else {
    progressbar.removeAttribute('error');
    progressbar.setAttribute('value', value);
  }

  syncProgressbarDemoButtons(error ? (progressbar.getAttribute('value') ?? value) : value, error);
};

const setProgressbarDemoError = (): void => {
  const progressbar = getProgressbarDemo();
  const currentValue = progressbar?.getAttribute('value') ?? '50';
  setProgressbarDemoState(currentValue, true);
};

const render: StoryFn = (args, { updateArgs }) => {
  const motionMode = args.motionEnabled ? 'full' : 'reduce';

  return html`
    <div class="motionDemo">
      
      <h1>Motion Provider Demo</h1>
      <mdc-motionprovider motion="${motionMode}">
        <div class="motionDemoSections">
          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Accordion</h3>
            <p class="motionDemoSectionHint">Expand and collapse to see fade and height transitions.</p>
            <div role="${ROLE.MAIN}">
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
            <mdc-button id="${BANNER_SHOW_ID}" variant="secondary">Show banner</mdc-button>
            <div id="${BANNER_SLOT_ID}" class="motionDemoBannerSlot"></div>
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
            <mdc-button id="${DIALOG_TRIGGER_ID}" @click=${openDialog} variant="secondary">Open dialog</mdc-button>
            <mdc-dialog
              id="${DIALOG_ID}"
              triggerID="${DIALOG_TRIGGER_ID}"
              header-text="Motion demo"
              description-text="Dialog fade transitions use motion tokens."
              size="medium"
              @close=${closeDialog}
            >
              <div slot="dialog-body">
                <p>Use the Motion toggle to compare backdrop and content fade transitions.</p>
              </div>
              <mdc-button slot="footer-button-primary" @click=${closeDialog}>Done</mdc-button>
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
            <mdc-button id="${MENU_TRIGGER_ID}" variant="secondary">Open menu</mdc-button>
            <mdc-menupopover triggerID="${MENU_TRIGGER_ID}" placement="bottom-start" aria-label="Demo menu">
              <mdc-menuitem label="New"></mdc-menuitem>
              <mdc-menuitem label="Open"></mdc-menuitem>
              <mdc-divider></mdc-divider>
              <mdc-menuitem label="Save"></mdc-menuitem>
            </mdc-menupopover>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Progressbar</h3>
            <p class="motionDemoSectionHint">
              Change the value or error state to see width and fill color transitions. Turn motion off to compare
              instant state changes.
            </p>
            <mdc-progressbar
              data-motion-demo="progressbar"
              label="Uploading"
              value="50"
              help-text="Helper text"
              data-aria-label="Upload progress"
              style="max-width: 20rem;"
            ></mdc-progressbar>
            <div class="motionDemoRow">
              <mdc-button
                id="${PROGRESSBAR_VALUE_0_ID}"
                variant="secondary"
                @click=${() => setProgressbarDemoState('0', false)}
              >
                0%
              </mdc-button>
              <mdc-button
                id="${PROGRESSBAR_VALUE_50_ID}"
                variant="secondary"
                active
                @click=${() => setProgressbarDemoState('50', false)}
              >
                50%
              </mdc-button>
              <mdc-button
                id="${PROGRESSBAR_VALUE_100_ID}"
                variant="secondary"
                @click=${() => setProgressbarDemoState('100', false)}
              >
                100%
              </mdc-button>
              <mdc-button id="${PROGRESSBAR_ERROR_ID}" variant="secondary" @click=${setProgressbarDemoError}>
                Error
              </mdc-button>
            </div>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Side navigation</h3>
            <p class="motionDemoSectionHint">
              Expand and collapse the rail to see width and label fade transitions. Turn motion off to compare instant
              state changes.
            </p>
            <div class="motionDemoSidenavigation">
              <mdc-sidenavigation
                expanded
                variant="flexible"
                grabber-btn-aria-label="Toggle side navigation"
                footer-text="Example"
              >
                <mdc-menusection slot="scrollable-menubar" show-divider>
                  <mdc-navmenuitem icon-name="chat-bold" nav-id="1" label="Messaging"></mdc-navmenuitem>
                  <mdc-navmenuitem icon-name="meetings-bold" nav-id="2" label="Meetings"></mdc-navmenuitem>
                  <mdc-navmenuitem icon-name="audio-call-bold" nav-id="3" label="Calling"></mdc-navmenuitem>
                </mdc-menusection>
                <mdc-menusection slot="fixed-menubar">
                  <mdc-navmenuitem icon-name="settings-bold" nav-id="4" label="Settings"></mdc-navmenuitem>
                </mdc-menusection>
                <mdc-icon slot="brand-logo" name="apple-bold" aria-label="Brand logo"></mdc-icon>
              </mdc-sidenavigation>
            </div>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Stepperitem</h3>
            <p class="motionDemoSectionHint">
              Use the status control to see color, scale, and label transitions. Turn motion off to compare instant
              state changes.
            </p>
            <mdc-stepperitem
              variant="inline"
              status="${args.status}"
              label="Review details"
              help-text="Confirm the project settings"
              step-number="1"
              aria-label="Step 1: Review details, ${args.status}"
            ></mdc-stepperitem>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Tab list Primary</h3>
            <p class="motionDemoSectionHint">Switch tabs to see indicator and text transitions.</p>
            <mdc-tablist
              active-tab-id="${args['active-tab-id']}"
              @change=${(event: CustomEvent<{ tabId: string }>) => {
                action('onchange')(event);
                updateArgs({ 'active-tab-id': event.detail.tabId });
              }}
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold"></mdc-tab>
            </mdc-tablist>
            <h3 class="motionDemoSectionTitle">Tab list Secondary</h3>
            <p class="motionDemoSectionHint">Switch tabs to see indicator and text transitions.</p>
            <mdc-tablist
              active-tab-id="${args['active-tab-id']}"
              @change=${(event: CustomEvent<{ tabId: string }>) => {
                action('onchange')(event);
                updateArgs({ 'active-tab-id': event.detail.tabId });
              }}
            >
              <mdc-tab text="Calls" tab-id="calls-tab" icon-name="audio-call-bold" variant="line"></mdc-tab>
              <mdc-tab text="Messages" tab-id="messages-tab" icon-name="chat-bold" variant="line"></mdc-tab>
              <mdc-tab text="Settings" tab-id="settings-tab" icon-name="settings-bold" variant="line"></mdc-tab>
            </mdc-tablist>
          </section>

          <section class="motionDemoSection">
            <h3 class="motionDemoSectionTitle">Toggle</h3>
            <p class="motionDemoSectionHint">
              Click the toggle to see track, knob, and icon transitions. Turn motion off to compare instant state
              changes.
            </p>
            <div role="${ROLE.MAIN}">
              <mdc-toggle label="Enable notifications"></mdc-toggle>
            </div>
          </section>
        </div>
      </mdc-motionprovider>
    </div>
    <script>
      const bannerSlot = document.getElementById('${BANNER_SLOT_ID}');
      const showBannerButton = document.getElementById('${BANNER_SHOW_ID}');

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
    </script>
  `;
};

const meta: Meta = {
  title: 'Providers/Motion Provider',
  tags: ['autodocs'],
  component: 'mdc-motionprovider',
  decorators: [stripBodyMotionClasses],
  render,
  argTypes: {
    motionEnabled: {
      control: 'boolean',
      description: 'When off, the provider uses `motion="reduce"` and token-based motion is disabled.',
    },
    'active-tab-id': {
      control: false,
    },
    status: {
      control: { type: 'select' },
      options: Object.values(STATUS),
      description: 'Stepperitem status. Change it to see status-container color and pulse transitions.',
    },
    ...hideAllControls(true),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    motionEnabled: true,
    'active-tab-id': 'calls-tab',
    status: STATUS.CURRENT,
  },
};
