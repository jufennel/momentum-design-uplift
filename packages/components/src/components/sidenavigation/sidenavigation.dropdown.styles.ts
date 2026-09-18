import { css } from 'lit';

const styles = css`
  ::slotted(div[data-trigger]) {
    display: none;
  }

  ::slotted(div[data-trigger][data-closing]) {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: var(--mds-transition-collapse), var(--mds-transition-fade-out);
  }

  ::slotted(div[data-trigger][data-open]) {
    display: grid;
    grid-template-rows: 1fr;
    opacity: 1;
    transition: var(--mds-transition-expand), var(--mds-transition-fade-in);
  }

  @media (prefers-reduced-motion: reduce) {
    ::slotted(div[data-trigger][data-closing]),
    ::slotted(div[data-trigger][data-open]) {
      transition: none;
    }
  }
`;

export default styles;
