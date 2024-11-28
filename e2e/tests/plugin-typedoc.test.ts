import { expect, test } from '@playwright/test';
import path from 'node:path';
import { getPort, killProcess, runDevCommand } from '../utils/runCommands';
import { getNavbarItems, getSidebarTexts } from '../utils/getSideBar';

const fixtureDir = path.resolve(__dirname, '../fixtures');

test.describe('plugin-typedoc single entry', async () => {
  let appPort;
  let app;
  test.beforeAll(async () => {
    const appDir = path.join(fixtureDir, 'plugin-typedoc', 'single');
    appPort = await getPort();
    app = await runDevCommand(appDir, appPort);
  });

  test.afterAll(async () => {
    if (app) {
      await killProcess(app);
    }
  });
  test('Should render nav and sidebar correctly', async ({ page }) => {
    await page.goto(`http://localhost:${appPort}/api/`, {
      waitUntil: 'networkidle',
    });

    const navItems = await getNavbarItems(page);
    expect(navItems?.length).toBe(2);

    const sidebarTexts = await getSidebarTexts(page);
    expect(sidebarTexts?.length).toBe(3);
    expect(sidebarTexts.join(',')).toEqual(
      [
        '@rspress-fixture/rspress-plugin-typedoc-single',
        'FunctionsFunction: createMiddlewareFunction: mergeMiddlewares',
        'TypesType alias: Middleware',
      ].join(','),
    );
  });
});

test.describe('plugin-typedoc multi entries', async () => {
  let appPort;
  let app;
  test.beforeAll(async () => {
    const appDir = path.join(fixtureDir, 'plugin-typedoc', 'multi');
    appPort = await getPort();
    app = await runDevCommand(appDir, appPort);
  });

  test.afterAll(async () => {
    if (app) {
      await killProcess(app);
    }
  });
  test('Should render nav and sidebar correctly', async ({ page }) => {
    await page.goto(`http://localhost:${appPort}/api/`, {
      waitUntil: 'networkidle',
    });

    const navItems = await getNavbarItems(page);
    expect(navItems?.length).toBe(2);

    const sidebarTexts = await getSidebarTexts(page);
    expect(sidebarTexts?.length).toBe(4);
    expect(sidebarTexts.join(',')).toEqual(
      [
        '@rspress-fixture/rspress-plugin-typedoc-multi',
        'FunctionsFunction: createMiddlewareFunction: mergeMiddlewares',
        'ModulesModule: middleware',
        'TypesType alias: Middleware',
      ].join(','),
    );
  });
});