import { css } from 'lit';

const styles = [
  css`
    :host {
      --mdc-statictoggle-width: 2.75rem;
      --mdc-statictoggle-height: 1.5rem;
      --mdc-statictoggle-border-radius: 0.75rem;
      --mdc-statictoggle-border-color: var(--mds-color-theme-outline-input-normal);
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-normal);
      --mdc-statictoggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-normal);
      --mdc-statictoggle-icon-background-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-statictoggle-icon-size: 1.25rem;
      --mdc-statictoggle-icon-travel: 1.25rem;

      border-radius: var(--mdc-statictoggle-border-radius);
      position: relative;
    }

    :host::part(slider) {
      width: var(--mdc-statictoggle-width);
      height: var(--mdc-statictoggle-height);
      background-color: var(--mdc-statictoggle-background-color);
      border: 1px solid var(--mdc-statictoggle-border-color);
      border-radius: var(--mdc-statictoggle-border-radius);
      display: flex;
      align-items: center;
      transition: var(--mds-transition-background-color), var(--mds-transition-border-color);
      outline: none;
    }

    :host::part(toggle-icon) {
      box-sizing: content-box;
      display: grid;
      flex: none;
      align-items: center;
      justify-items:center;
      height: var(--mdc-statictoggle-icon-size);
      background-color: var(--mdc-statictoggle-icon-background-color);
      border-radius: 50%;
      transform: translateX(1px);
      transition: var(--mds-transition-background-color), var(--mds-transition-grow-shrink);
      width: var(--mdc-statictoggle-icon-size);
    }

    :host::part(toggle-icon-unchecked),
    :host::part(toggle-icon-checked) {
      --mdc-icon-fill-color: var(--mdc-statictoggle-icon-color);
      grid-area: 1 / 1;
    }

    :host::part(toggle-icon-unchecked) {
      opacity: 1;
      transition: var(--mds-transition-fade-in);
    }

    :host::part(toggle-icon-checked) {
      opacity: 0;
      transition: var(--mds-transition-fade-out);
    }

    :host([size='compact'])::part(slider) {
      --mdc-statictoggle-width: 2rem;
      --mdc-statictoggle-height: 1rem;
      --mdc-statictoggle-border-radius: 0.5rem;
      --mdc-statictoggle-icon-size: .75rem;
      --mdc-statictoggle-icon-travel: 1rem;
    }

    :host([checked]) {
      --mdc-statictoggle-border-color: transparent;
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-active-normal);
    }

    :host([checked])::part(toggle-icon) {
      transform: translateX(var(--mdc-statictoggle-icon-travel));
    }

    :host([checked]:dir(rtl))::part(toggle-icon) {
      transform: translateX(calc(-1 * var(--mdc-statictoggle-icon-travel)));
    }

    :host([checked])::part(toggle-icon-unchecked) {
      opacity: 0;
      transition: var(--mds-transition-fade-out);
    }

    :host([checked])::part(toggle-icon-checked) {
      opacity: 1;
      transition: var(--mds-transition-fade-in);
    }

    :host([readonly]) {
      --mdc-statictoggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-disabled);
    }

    :host([disabled]),
    :host([soft-disabled]) {
      --mdc-statictoggle-icon-color: var(--mds-color-theme-common-inverted-text-primary-disabled);
      --mdc-statictoggle-icon-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-statictoggle-border-color: var(--mds-color-theme-outline-primary-disabled);
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-inactive-disabled);
      cursor: default;
    }

    :host([checked][disabled]),
    :host([checked][soft-disabled]) {
      --mdc-statictoggle-border-color: transparent;
      --mdc-statictoggle-background-color: var(--mds-color-theme-control-active-disabled);
    }

    @media (prefers-reduced-motion: reduce) {
      :host::part(slider),
      :host::part(toggle-icon),
      :host::part(toggle-icon-unchecked),
      :host::part(toggle-icon-checked) {
        transition: none;
      }
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      :host::part(slider),
      :host::part(toggle-icon),
      :host::part(toggle-icon-unchecked),
      :host::part(toggle-icon-checked) {
        transition: none;
      }

      :host::part(toggle-icon) {
        --mdc-statictoggle-icon-color: CanvasText;
        border: 1px solid var(--mdc-statictoggle-border-color);
      }

      :host([checked]) {
        --mdc-statictoggle-icon-color: SelectedItemText;
        --mdc-statictoggle-border-color: SelectedItem;
        --mdc-statictoggle-background-color: SelectedItem;
      }

      :host([disabled])::part(toggle-icon),
      :host([soft-disabled])::part(toggle-icon) {
        --mdc-statictoggle-icon-color: GrayText;
        border: 1px solid GrayText;
      }
    }
  `,
];

export default styles;
