import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../button';
import '../radio';

const render = (args: Args) =>
  html` <mdc-staticradio
    ?checked="${args.checked}"
    ?readonly="${args.readonly}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-staticradio>`;

const meta: Meta = {
  title: 'Components/decorator/staticradio',
  tags: ['autodocs'],
  component: 'mdc-staticradio',
  render,

  argTypes: {
    checked: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
  },
  parameters: {
    actions: { disable: true },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    checked: false,
    readonly: false,
    disabled: false,
    'soft-disabled': false,
  },
};

export const Motion: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
        Toggle the static radio, or hover, press, or select an option in the group to see the outer-circle background
        and border colors transition. Remove the <code>mds-animation</code> scope or reduce operating system motion to
        make state changes immediate.
      </p>

      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <mdc-staticradio id="staticradio-motion-demo"></mdc-staticradio>
        <mdc-button
          variant="secondary"
          size="28"
          @click=${() => document.getElementById('staticradio-motion-demo')?.toggleAttribute('checked')}
        >
          Toggle selected
        </mdc-button>
      </div>

      <div
        role="radiogroup"
        aria-label="Notification preference"
        style="display: flex; flex-direction: column; gap: 0.75rem;"
      >
        <mdc-radio name="staticradio-motion-group" value="email" label="Email" checked></mdc-radio>
        <mdc-radio name="staticradio-motion-group" value="message" label="Message"></mdc-radio>
      </div>
    </div>
  `,
};
