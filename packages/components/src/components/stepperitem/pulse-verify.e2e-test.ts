import { ComponentsPage, test, expect } from '../../../config/playwright/setup';

const mount = async (componentsPage: ComponentsPage, status: string) => {
  await componentsPage.mount({
    html: `<mdc-stepperitem label="Step" status="${status}" step-number="1"></mdc-stepperitem>`,
    clearDocument: true,
  });
  const stepperitem = componentsPage.page.locator('mdc-stepperitem');
  await stepperitem.waitFor();
  return stepperitem;
};

test.use({ viewport: { width: 600, height: 400 } });

test('pulse curve sampling', async ({ componentsPage }) => {
  const stepperitem = await mount(componentsPage, 'not-started');

  const samples = await stepperitem.evaluate(async (node) => {
    const circle = node.shadowRoot?.querySelector('[part="status-container"]') as HTMLElement;
    const readScale = () => {
      const { transform } = getComputedStyle(circle);
      const match = transform.match(/matrix\(([^,]+)/);
      return match ? Number.parseFloat(match[1]) : 1;
    };

    const series: Array<{ t: number; scale: number; attr: string | null }> = [];
    const start = performance.now();

    node.setAttribute('status', 'completed');

    await new Promise<void>((resolve) => {
      const tick = () => {
        series.push({
          t: Math.round(performance.now() - start),
          scale: Number(readScale().toFixed(4)),
          attr: node.getAttribute('data-pulse-step'),
        });
        if (performance.now() - start > 700) {
          resolve();
          return;
        }
        setTimeout(tick, 25);
      };
      tick();
    });

    return series;
  });

  // eslint-disable-next-line no-console
  console.log('PULSE_SERIES', JSON.stringify(samples));

  const peak = Math.max(...samples.map((s) => s.scale));
  const min = Math.min(...samples.map((s) => s.scale));
  // eslint-disable-next-line no-console
  console.log('PEAK', peak, 'MIN', min, 'FINAL', samples[samples.length - 1].scale);

  expect(peak).toBeGreaterThan(1.1);
});
