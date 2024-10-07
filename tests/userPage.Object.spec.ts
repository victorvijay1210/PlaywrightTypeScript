import { test, expect } from '@playwright/test';
import { PageManager } from '../Page-Objects/PageManager';

test.beforeEach('Launch the brower app', async ({ page }) => {
  await page.goto('/');
});


test('basic Navigation test', {
  tag: '@smoke1',
}, async ({ page }) => {

  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage()
  await pm.navigateTo().datePickerPage()
  await pm.navigateTo().formLayoutsPage()
  await pm.navigateTo().smartTablePage()
  await pm.navigateTo().toastrPage()
  await pm.navigateTo().tooltipPage()
});

test('basic form fill', {
  tag: '@smoke2',
}, async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().fillBasicForm('vijay@gmail.com', 'abcd');

});


test.afterEach('Close the browse app', async ({ page }) => {
  page.close();
});