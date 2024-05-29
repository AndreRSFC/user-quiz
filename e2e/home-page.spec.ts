import { test, expect } from '@playwright/test';

test('Home Page - Checking page content', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Manual: Men´s health care made easy/);

  const pageInitialTitle = page.getByText('Be good to yourself');
  await expect(pageInitialTitle).toBeVisible();

  const pageQuiz = page.getByText('TAKE THE QUIZ');
  await expect(pageQuiz).toBeVisible();

  const pageSections = page.getByText('What we can help with');
  await expect(pageSections).not.toBeInViewport();

  await pageSections.scrollIntoViewIfNeeded();
  await expect(pageSections).toBeInViewport();

  const pageFirstSection = page.getByText(
    'Hair loss needn’t be irreversible. We can help!',
  );
  await expect(pageFirstSection).toBeInViewport();

  const pageSecondSection = page.getByText(
    'Erections can be a tricky thing. But no need to feel down!',
  );
  await expect(pageSecondSection).not.toBeInViewport();

  await pageSecondSection.scrollIntoViewIfNeeded();
  await expect(pageSecondSection).toBeInViewport();

  const pageEnd = page.getByText('© 2024 Manual. All rights reserverd');
  await expect(pageEnd).not.toBeInViewport();

  await pageEnd.scrollIntoViewIfNeeded();
  await expect(pageEnd).toBeInViewport();
});

test('Home Page - Checking quiz navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Manual: Men´s health care made easy/);

  const pageInitialTitle = page.getByText('Be good to yourself');
  await expect(pageInitialTitle).toBeVisible();

  const pageQuiz = page.getByText('TAKE THE QUIZ');
  await expect(pageQuiz).toBeVisible();

  await pageQuiz.click();

  const quizFirstStepTitle = page.getByText(
    'Which image best matches your hair loss?',
  );
  await expect(quizFirstStepTitle).toBeVisible();
});

test('Home Page - Checking footer navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Manual: Men´s health care made easy/);

  const pageInitialTitle = page.getByText('Be good to yourself');
  await expect(pageInitialTitle).toBeVisible();

  const pageEnd = page.getByText('© 2024 Manual. All rights reserverd');

  await pageEnd.scrollIntoViewIfNeeded();

  const footerCustomerServiceLink = page.getByText('Customer Service');

  await footerCustomerServiceLink.click();

  const notFoundPage = page.getByText('This page could not be found.');
  await expect(notFoundPage).toBeVisible();
});
