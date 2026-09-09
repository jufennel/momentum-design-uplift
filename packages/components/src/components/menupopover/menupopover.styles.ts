import { css } from 'lit';

const styles = css`
  :host {
    --mdc-menupopover-slide-offset: var(--mdc-popover-slide-offset);
  }

  :host::part(popover-content) {
    padding: 0.75rem 0.5rem;
    scroll-padding-block: 0.25rem;
  }

  ::slotted(mdc-divider) {
    margin-block: 0.25rem;
  }
`;

export default [styles];
