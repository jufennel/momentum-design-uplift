import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../button';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';

const render = (args: Args) => html`
  <div role="main">
    <mdc-statictoggle
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?soft-disabled="${args['soft-disabled']}"
      size="${args.size}"
    ></mdc-statictoggle>
  </div>
`;

const meta: Meta = {
  title: 'Components/decorator/statictoggle',
  tags: ['autodocs'],
  component: 'mdc-statictoggle',
  render,

  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    size: {
      control: 'inline-radio',
      options: Object.values(TOGGLE_SIZE),
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
    disabled: false,
    readonly: false,
    'soft-disabled': false,
    size: TOGGLE_SIZE.DEFAULT,
  },
};

export const Motion: StoryObj = {
  render: () => {
    const toggleChecked = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      button.parentElement?.querySelector('mdc-statictoggle')?.toggleAttribute('checked');
    };

    return html`
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 1rem; padding: 1rem;">
        <p style="margin: 0; max-width: 36rem; font-size: 0.875rem;">
          Change the toggle state to observe track color, border, icon fade, and thumb motion. Disable motion tokens or
          enable OS reduced motion to verify instant state changes.
        </p>
        <mdc-statictoggle></mdc-statictoggle>
        <mdc-button variant="secondary" size="28" @click="${toggleChecked}">Toggle checked</mdc-button>
      </div>
    `;
  },
};
