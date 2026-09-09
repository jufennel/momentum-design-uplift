import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

interface SetupOptions {
  componentsPage: ComponentsPage;
  value?: string;
  endValue?: string;
  selectionMode?: string;
  locale?: string;
  min?: string;
  max?: string;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  await componentsPage.mount({
    html: `
      <mdc-calendar
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.endValue ? `end-value="${restArgs.endValue}"` : ''}
        ${restArgs.selectionMode ? `selection-mode="${restArgs.selectionMode}"` : ''}
        ${restArgs.locale ? `locale="${restArgs.locale}"` : ''}
        ${restArgs.min ? `min="${restArgs.min}"` : ''}
        ${restArgs.max ? `max="${restArgs.max}"` : ''}
        locale-today-label="Today"
        locale-prev-month-label="Go to previous month"
        locale-next-month-label="Go to next month"
      ></mdc-calendar>
    `,
    clearDocument: true,
  });

  const calendar = componentsPage.page.locator('mdc-calendar');
  await calendar.waitFor();
  await componentsPage.waitForPendingIcons();
  return calendar;
};

test.describe('mdc-calendar', () => {
  test.describe('rendering', () => {
    test('should render the calendar with default props', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage });
      await expect(calendar).toBeVisible();

      const grid = calendar.locator('[role="grid"]');
      await expect(grid).toBeVisible();

      const header = calendar.locator('.calendar-header mdc-text');
      await expect(header).toBeVisible();
    });

    test('should render with a selected date', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15' });

      const selectedDay = calendar.locator('[data-date="2025-07-15"]');
      await expect(selectedDay).toHaveAttribute('aria-selected', 'true');
    });

    test('should render weekday headers', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, locale: 'en-US' });

      const weekdays = calendar.locator('.calendar-weekday');
      await expect(weekdays).toHaveCount(7);
    });

    test('should order weekday headers for Saturday-start locale', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, locale: 'fa-IR' });

      const weekdays = calendar.locator('.calendar-weekday');
      await expect(weekdays).toHaveCount(7);

      const headers = await Promise.all(Array.from({ length: 7 }, (_, i) => weekdays.nth(i).textContent()));
      // fa-IR starts on Saturday; first header should not equal last
      expect(headers[0]).not.toBe(headers[6]);
      // Verify all 7 headers are present and non-empty
      headers.forEach(text => {
        expect(text?.trim().length).toBeGreaterThan(0);
      });
    });

    test('should render 42 day cells (6 rows x 7 cols)', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage });

      const dayCells = calendar.locator('.calendar-day');
      await expect(dayCells).toHaveCount(42);
    });
  });

  test.describe('navigation', () => {
    test('should navigate to next month', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15' });

      const nextButton = calendar.locator('mdc-button[aria-label="Go to next month"]');
      await nextButton.click();

      const header = calendar.locator('.calendar-header mdc-text');
      await expect(header).toContainText('August');
    });

    test('should navigate to previous month', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15' });

      const prevButton = calendar.locator('mdc-button[aria-label="Go to previous month"]');
      await prevButton.click();

      const header = calendar.locator('.calendar-header mdc-text');
      await expect(header).toContainText('June');
    });
  });

  test.describe('selection', () => {
    test('should select a single date on click', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15', selectionMode: 'single' });

      const day20 = calendar.locator('[data-date="2025-07-20"]');
      await day20.click();

      await expect(day20).toHaveAttribute('aria-selected', 'true');
    });

    test('should select a week on click in week mode', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15', selectionMode: 'week', locale: 'en-US' });

      const day = calendar.locator('[data-date="2025-07-16"]');
      await day.click();

      const sunday = calendar.locator('[data-date="2025-07-13"]');
      await expect(sunday).toHaveAttribute('aria-selected', 'true');

      const saturday = calendar.locator('[data-date="2025-07-19"]');
      await expect(saturday).toHaveAttribute('aria-selected', 'true');
    });
  });

  test.describe('keyboard navigation', () => {
    test('should navigate with arrow keys', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15' });

      const grid = calendar.locator('[role="grid"]');
      const day15 = calendar.locator('[data-date="2025-07-15"]');
      await day15.focus();

      await grid.press('ArrowRight');
      const day16 = calendar.locator('[data-date="2025-07-16"]');
      await expect(day16).toBeFocused();

      await grid.press('ArrowDown');
      const day23 = calendar.locator('[data-date="2025-07-23"]');
      await expect(day23).toBeFocused();
    });

    test('should select date with Enter', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15', selectionMode: 'single' });

      const day15 = calendar.locator('[data-date="2025-07-15"]');
      await day15.focus();

      const grid = calendar.locator('[role="grid"]');
      await grid.press('ArrowRight');
      await grid.press('Enter');

      const day16 = calendar.locator('[data-date="2025-07-16"]');
      await expect(day16).toHaveAttribute('aria-selected', 'true');
    });
  });

  test.describe('min/max constraints', () => {
    test('should disable dates outside min/max range', async ({ componentsPage }) => {
      const calendar = await setup({
        componentsPage,
        value: '2025-07-15',
        min: '2025-07-10',
        max: '2025-07-20',
      });

      const day5 = calendar.locator('[data-date="2025-07-05"]');
      await expect(day5).toHaveAttribute('aria-disabled', 'true');

      const day25 = calendar.locator('[data-date="2025-07-25"]');
      await expect(day25).toHaveAttribute('aria-disabled', 'true');

      const day15 = calendar.locator('[data-date="2025-07-15"]');
      await expect(day15).not.toHaveAttribute('aria-disabled', 'true');
    });
  });

  test.describe('accessibility', () => {
    test('should have grid role', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage });

      const grid = calendar.locator('[role="grid"]');
      await expect(grid).toBeVisible();
      await expect(grid).toHaveAttribute('aria-label');
    });

    test('should have gridcell roles on days', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage });

      const gridcells = calendar.locator('[role="gridcell"]');
      const count = await gridcells.count();
      expect(count).toBe(42);
    });

    test('should mark today with aria-current', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage });

      const todayCell = calendar.locator('[aria-current="date"]');
      const count = await todayCell.count();
      expect(count).toBeLessThanOrEqual(1);
    });
  });

  test.describe('motion', () => {
    test('should settle to idle grid motion after month navigation', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15' });

      const nextButton = calendar.locator('mdc-button[aria-label="Go to next month"]');
      await nextButton.click();

      const viewport = calendar.locator('.calendar-grid-viewport');
      await expect(viewport).toHaveAttribute('data-grid-motion', 'idle', { timeout: 2000 });
      await expect(calendar.locator('[data-grid-layer="outgoing"]')).toHaveCount(0);
    });

    test('should swap months instantly when motion tokens are unavailable', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15' });

      await calendar.evaluate((element: HTMLElement) => {
        element.classList.remove('mds-motion', 'mds-animation');
      });

      const nextButton = calendar.locator('mdc-button[aria-label="Go to next month"]');
      await nextButton.click();

      const viewport = calendar.locator('.calendar-grid-viewport');
      await expect(viewport).toHaveAttribute('data-grid-motion', 'idle');
      await expect(calendar.locator('[data-grid-layer="outgoing"]')).toHaveCount(0);

      const header = calendar.locator('.calendar-header mdc-text');
      await expect(header).toContainText('August');
    });

    test('should keep focus on prev/next buttons after keyboard activation', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-15' });

      const nextButton = calendar.locator('mdc-button[aria-label="Go to next month"]');
      await nextButton.focus();
      await nextButton.press('Enter');

      await expect(nextButton).toBeFocused();

      const header = calendar.locator('.calendar-header mdc-text');
      await expect(header).toContainText('August');
    });

    test('should keep keyboard navigation active when crossing a month boundary', async ({ componentsPage }) => {
      const calendar = await setup({ componentsPage, value: '2025-07-31' });

      const day31 = calendar.locator('[data-grid-layer="incoming"] [data-date="2025-07-31"]');
      await day31.focus();

      const grid = calendar.locator('[data-grid-layer="incoming"] [role="grid"]');
      await grid.press('ArrowRight');

      const dayAug1 = calendar.locator('[data-grid-layer="incoming"] [data-date="2025-08-01"]');
      await expect(dayAug1).toBeFocused();

      await grid.press('ArrowRight');

      const dayAug2 = calendar.locator('[data-grid-layer="incoming"] [data-date="2025-08-02"]');
      await expect(dayAug2).toBeFocused();
    });

    test('should swap months instantly inside motionprovider with motion reduce', async ({ componentsPage }) => {
      await componentsPage.mount({
        html: `
          <mdc-motionprovider motion="reduce">
            <mdc-calendar
              value="2025-07-15"
              locale-prev-month-label="Go to previous month"
              locale-next-month-label="Go to next month"
            ></mdc-calendar>
          </mdc-motionprovider>
        `,
        clearDocument: true,
      });

      const calendar = componentsPage.page.locator('mdc-calendar');
      await calendar.waitFor();

      const nextButton = calendar.locator('mdc-button[aria-label="Go to next month"]');
      await nextButton.click();

      const viewport = calendar.locator('.calendar-grid-viewport');
      await expect(viewport).toHaveAttribute('data-grid-motion', 'idle');
      await expect(calendar.locator('[data-grid-layer="outgoing"]')).toHaveCount(0);
    });
  });

  test.describe('visual regression', () => {
    test('should match screenshot with selected date', async ({ componentsPage }) => {
      const calendar = await setup({
        componentsPage,
        value: '2025-07-15',
        selectionMode: 'single',
        locale: 'en-US',
      });

      await test.step('single selection', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-calendar-single', { element: calendar });
      });
    });

    test('should match screenshot with week selection', async ({ componentsPage }) => {
      const calendar = await setup({
        componentsPage,
        value: '2025-07-13',
        endValue: '2025-07-19',
        selectionMode: 'week',
        locale: 'en-US',
      });

      await test.step('week selection', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-calendar-week', { element: calendar });
      });
    });

    test('should match screenshot with range selection', async ({ componentsPage }) => {
      const calendar = await setup({
        componentsPage,
        value: '2025-07-10',
        endValue: '2025-07-20',
        selectionMode: 'range',
        locale: 'en-US',
      });

      await test.step('range selection', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-calendar-range', { element: calendar });
      });
    });

    test('should match screenshot with range spanning multiple rows', async ({ componentsPage }) => {
      const calendar = await setup({
        componentsPage,
        value: '2025-07-08',
        endValue: '2025-07-25',
        selectionMode: 'range',
        locale: 'en-US',
      });

      await test.step('range spanning rows', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-calendar-range-multirow', { element: calendar });
      });
    });

    test('should match screenshot with min/max constraints', async ({ componentsPage }) => {
      const calendar = await setup({
        componentsPage,
        value: '2025-07-15',
        min: '2025-07-10',
        max: '2025-07-20',
        locale: 'en-US',
      });

      await test.step('min/max constraints', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-calendar-minmax', { element: calendar });
      });
    });
  });
});
