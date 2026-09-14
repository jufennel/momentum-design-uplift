import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideAllControls, hideControls } from '../../../config/storybook/utils';

import { DEFAULTS, VARIANT } from './progressbar.constants';

const render = (args: Args) => html`
  <mdc-progressbar
    value="${args.value}"
    variant="${args.variant}"
    label="${args.label}"
    ?error="${args.error}"
    help-text="${args['help-text']}"
    data-aria-label="${args['data-aria-label']}"
  ></mdc-progressbar>
`;

const meta: Meta = {
  title: 'Components/progressbar',
  tags: ['autodocs'],
  component: 'mdc-progressbar',
  render,

  argTypes: {
    value: {
      control: 'text',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: Object.values(VARIANT),
    },
    label: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    'help-text': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls([
      'help-text-type',
      'required',
      'name',
      'disabled',
      'validation-message',
      'toggletip-text',
      'toggletip-placement',
      'toggletip-strategy',
      'info-icon-aria-label',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: '0',
    variant: DEFAULTS.VARIANT,
    label: 'Label',
    error: false,
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progressbar',
  },
};

export const Motion: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 24rem;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span>Default variant</span>
        <mdc-progressbar
          id="motion-progressbar-default"
          variant="${VARIANT.DEFAULT}"
          value="25"
          label="Uploading"
          help-text="Helper text"
          data-aria-label="Upload progress"
        ></mdc-progressbar>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          <button type="button" id="motion-progressbar-default-decrement">−10</button>
          <button type="button" id="motion-progressbar-default-increment">+10</button>
          <button type="button" id="motion-progressbar-default-complete">Complete</button>
          <button type="button" id="motion-progressbar-default-error">Toggle error</button>
          <button type="button" id="motion-progressbar-default-reset">Reset</button>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span>Inline variant</span>
        <mdc-progressbar
          id="motion-progressbar-inline"
          variant="${VARIANT.INLINE}"
          value="25"
          label="Sync"
          help-text="Helper text"
          data-aria-label="Sync progress"
        ></mdc-progressbar>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          <button type="button" id="motion-progressbar-inline-decrement">−10</button>
          <button type="button" id="motion-progressbar-inline-increment">+10</button>
          <button type="button" id="motion-progressbar-inline-complete">Complete</button>
          <button type="button" id="motion-progressbar-inline-error">Toggle error</button>
          <button type="button" id="motion-progressbar-inline-reset">Reset</button>
        </div>
      </div>
    </div>
    <script>
      const bindProgressbarMotion = (prefix) => {
        const progressbar = document.getElementById(\`motion-progressbar-\${prefix}\`);
        const decrementButton = document.getElementById(\`motion-progressbar-\${prefix}-decrement\`);
        const incrementButton = document.getElementById(\`motion-progressbar-\${prefix}-increment\`);
        const completeButton = document.getElementById(\`motion-progressbar-\${prefix}-complete\`);
        const errorButton = document.getElementById(\`motion-progressbar-\${prefix}-error\`);
        const resetButton = document.getElementById(\`motion-progressbar-\${prefix}-reset\`);

        const setValue = (nextValue) => {
          progressbar?.setAttribute('value', String(Math.max(0, Math.min(100, nextValue))));
        };

        decrementButton?.addEventListener('click', () => {
          const current = Number(progressbar?.getAttribute('value') ?? '0');
          setValue(current - 10);
        });

        incrementButton?.addEventListener('click', () => {
          const current = Number(progressbar?.getAttribute('value') ?? '0');
          setValue(current + 10);
        });

        completeButton?.addEventListener('click', () => {
          progressbar?.removeAttribute('error');
          setValue(100);
        });

        errorButton?.addEventListener('click', () => {
          if (progressbar?.hasAttribute('error')) {
            progressbar.removeAttribute('error');
          } else {
            progressbar?.setAttribute('error', '');
          }
        });

        resetButton?.addEventListener('click', () => {
          progressbar?.removeAttribute('error');
          setValue(0);
        });
      };

      bindProgressbarMotion('default');
      bindProgressbarMotion('inline');
    </script>
  `,
  ...hideAllControls(),
};

export const AllVariants: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8rem;">
      <div>
        <h3>Default Variant</h3>
        ${[false, true].map(error =>
          (error ? [100] : [0, 25, 50, 75, 100]).map(
            value => html`
              <mdc-progressbar
                value="${value}"
                variant="${VARIANT.DEFAULT}"
                label="Label"
                ?error="${error}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `,
          ),
        )}
      </div>
      <div>
        <h3>Inline Variant</h3>
        ${[false, true].map(error =>
          (error ? [100] : [0, 25, 50, 75, 100]).map(
            value => html`
              <mdc-progressbar
                value="${value}"
                variant="${VARIANT.INLINE}"
                label="Label"
                ?error="${error}"
                help-text="Helper text"
                data-aria-label="This is a progressbar"
                style="margin-bottom: 1rem"
              ></mdc-progressbar>
            `,
          ),
        )}
      </div>
    </div>
  `,
};
