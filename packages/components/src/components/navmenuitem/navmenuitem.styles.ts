import { css } from 'lit';

import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = [
  hostFitContentStyles,
  css`
    :host {
      --mdc-navmenuitem-in-sidenav-expanded-width: var(--mdc-sidenavigation-expanded-width, 100%);
      --mdc-navmenuitem-in-sidenav-expanded-margin-left: var(--mdc-sidenavigation-expanded-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-expanded-margin-right: var(--mdc-sidenavigation-expanded-right-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-width: var(--mdc-sidenavigation-collapsed-width, fit-content);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-left: var(--mdc-sidenavigation-collapsed-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-right: var(--mdc-sidenavigation-collapsed-right-padding, 1rem);

      --mdc-navmenuitem-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navmenuitem-notch-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navmenuitem-disabled-color: var(--mds-color-theme-text-primary-disabled);

      /* Background color when in default (normal) or active state */
      --mdc-navmenuitem-rest-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-navmenuitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navmenuitem-hover-active-background-color: var(--mds-color-theme-button-secondary-active-hover);
      --mdc-navmenuitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navmenuitem-pressed-active-background-color: var(--mds-color-theme-button-secondary-active-pressed);
      --mdc-navmenuitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-navmenuitem-disabled-active-background-color: var(--mds-color-theme-button-secondary-active-disabled);

      position: relative;
      flex-shrink: 0;
      height: 2.5rem;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      color: var(--mdc-navmenuitem-color);
      border-radius: 0.5rem;
      cursor: pointer;

      transition: var(--mds-transition-background-color);
    }

    :host::part(icon-container) {
      display: grid;
      flex-shrink: 0;
      place-items: center;
      position: relative;
    }

    :host::part(regular-icon),
    :host::part(filled-icon) {
      grid-area: 1 / 1;
    }

    :host::part(regular-icon) {
      opacity: 1;
      transition: var(--mds-transition-fade-in);
    }

    :host::part(filled-icon) {
      opacity: 0;
      transition: var(--mds-transition-fade-out);
    }

    :host([active]:not([cannot-activate]))::part(regular-icon) {
      opacity: 0;
      transition: var(--mds-transition-fade-out);
    }

    :host([active]:not([cannot-activate]))::part(filled-icon) {
      opacity: 1;
      transition: var(--mds-transition-fade-in);
    }

    :host([in-menupopover]),
    :host([in-dropdown-container]) {
      width: 100%;
      padding: 1rem;
    }

    :host(:not([in-menupopover])) {
      border-radius: 1.25rem;
    }

    :host([show-label]:not([in-menupopover])) {
      width: calc(
        var(--mdc-navmenuitem-in-sidenav-expanded-width) - var(--mdc-navmenuitem-in-sidenav-expanded-margin-left) - var(
            --mdc-navmenuitem-in-sidenav-expanded-margin-right
          )
      );

      margin-inline-start: var(--mdc-navmenuitem-in-sidenav-expanded-margin-left);
      transition:
        width var(--mds-motion-duration-fast) var(--mds-motion-easing-entrance) var(--mds-motion-delay-none),
        margin-inline-start var(--mds-motion-duration-fast) var(--mds-motion-easing-entrance)
          var(--mds-motion-delay-none),
        var(--mds-transition-background-color);
    }

    :host(:not([show-label]):not([in-menupopover])) {
      width: calc(
        var(--mdc-navmenuitem-in-sidenav-collapsed-width) - var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left) - var(
            --mdc-navmenuitem-in-sidenav-collapsed-margin-right
          )
      );

      margin-inline-start: var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left);
      transition:
        width var(--mds-motion-duration-instant) var(--mds-motion-easing-exit) var(--mds-motion-delay-none),
        margin-inline-start var(--mds-motion-duration-instant) var(--mds-motion-easing-exit)
          var(--mds-motion-delay-none),
        var(--mds-transition-background-color);
    }

    :host([active]) {
      background-color: var(--mdc-navmenuitem-rest-active-background-color);
    }

    :host([disabled]) {
      color: var(--mdc-navmenuitem-disabled-color);
      background-color: var(--mdc-navmenuitem-disabled-background-color);
    }

    :host([active][disabled]) {
      background-color: var(--mdc-navmenuitem-disabled-active-background-color);
      color: var(--mdc-navmenuitem-disabled-color);
    }

    :host(:hover) {
      background-color: var(--mdc-navmenuitem-hover-background-color);
    }

    :host(:hover[active]) {
      background-color: var(--mdc-navmenuitem-hover-active-background-color);
    }

    :host(:active) {
      background-color: var(--mdc-navmenuitem-pressed-background-color);
    }

    :host(:active[active]) {
      background-color: var(--mdc-navmenuitem-pressed-active-background-color);
    }

    :host(:not([in-menupopover]))::before,
    :host([in-dropdown-container])::before {
      content: '';
      display: block;
      position: absolute;
      background-color: var(--mdc-navmenuitem-notch-color);
      width: 0.25rem;
      height: 1rem;
      pointer-events: none;
      opacity: 0;
      transition: var(--mds-transition-fade-out);
    }

    :host([show-label]:dir(ltr))::before {
      left: calc(-1 * var(--mdc-navmenuitem-in-sidenav-expanded-margin-left));
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host([show-label]:dir(rtl))::before {
      right: calc(-1 * var(--mdc-navmenuitem-in-sidenav-expanded-margin-left));
      border-radius: 0.25rem 0 0 0.25rem;
    }

    :host(:not([show-label]):dir(ltr))::before {
      left: calc(-1 * var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left));
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host(:not([show-label]):dir(rtl))::before {
      right: calc(-1 * var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left));
      border-radius: 0.25rem 0 0 0.25rem;
    }

    :host([active])::before {
      opacity: 1;
      transition: var(--mds-transition-fade-in);
    }

    :host([disabled])::before {
      background-color: var(--mdc-navmenuitem-disabled-color);
    }

    :host::part(text-container) {
      min-width: 0;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      opacity: 1;
      transition: var(--mds-transition-text-change), var(--mds-transition-fade-in);
    }

    :host(:not([show-label]))::part(text-container) {
      opacity: 0;
      visibility: hidden;
      transition: var(--mds-transition-text-change), var(--mds-transition-fade-out);
    }

    :host(:dir(ltr))::part(badge) {
      position: absolute;
      right: -0.375rem;
      top: -0.375rem;
    }

    :host(:dir(rtl))::part(badge) {
      position: absolute;
      left: -0.375rem;
      top: -0.375rem;
    }

    :host(:not([show-label]))::part(trailing-arrow) {
      --mdc-icon-size: 0.75rem;
      flex-shrink: 0;

      position: absolute;
      inset-inline-end: -0.125rem;
      top: 0.875rem;
    }

    :host([show-label])::part(trailing-arrow),
    :host([show-label])::part(trailing-arrow-dropdown) {
      flex-shrink: 0;
    }

    /* Arrow rotation when dropdown is open */
    .arrow-rotated {
      transform: rotate(180deg);
    }

    :host mdc-badge {
      --mdc-badge-dot-width: 1rem;
      --mdc-badge-dot-height: 1rem;
    }

    @media (prefers-reduced-motion: reduce) {
      :host,
      :host([show-label]:not([in-menupopover])),
      :host(:not([show-label]):not([in-menupopover])),
      :host::part(regular-icon),
      :host::part(filled-icon),
      :host([active]:not([cannot-activate]))::part(regular-icon),
      :host([active]:not([cannot-activate]))::part(filled-icon),
      :host::before,
      :host([active])::before,
      :host::part(text-container),
      :host(:not([show-label]))::part(text-container) {
        transition: none;
      }
    }

    @media (forced-colors: active) {
      :host(:not([in-menupopover]))::before {
        background-color: ButtonText;
      }
    }
  `,
  ...hostFocusRingStyles(),
];

export default styles;
