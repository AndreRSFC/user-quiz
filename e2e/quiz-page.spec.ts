import { test, expect } from '@playwright/test';

test('Quiz Page - Success flow', async ({ page }) => {
  await page.goto('https://user-quiz-hazel.vercel.app/');

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

  const quizStep1Moderate = page.getByText('Moderate');
  const continueButton = page.getByText('Continue');
  await expect(quizStep1Moderate).toBeVisible();
  await expect(continueButton).toBeDisabled();

  await quizStep1Moderate.click();

  await expect(continueButton).toBeEnabled();

  await continueButton.click();

  const quizSecondStepTitle = page.getByText(
    'Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?',
  );
  await expect(quizSecondStepTitle).toBeVisible();

  const quizStep2No = page.getByText('No', { exact: true });
  await expect(quizStep2No).toBeVisible();

  await quizStep2No.click();

  await continueButton.click();

  const quizThirtyStepTitle = page.getByText(
    'Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?',
  );
  await expect(quizThirtyStepTitle).toBeVisible();

  const quizStep3No = page.getByText('No', { exact: true });
  await expect(quizStep3No).toBeVisible();

  await quizStep3No.click();

  await continueButton.click();

  const successTitle = page.getByText('You are eligible');
  await expect(successTitle).toBeVisible();

  const successDescription = page.getByText(
    'Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!',
  );
  await expect(successDescription).toBeVisible();

  const successButton = page.getByText('Go to Manual');
  await expect(successButton).toBeVisible();

  const successLink = page.getByText('Back to homepage');
  await expect(successLink).toBeVisible();

  await successLink.click();

  const manualHomePage = page.getByText('Be good to yourself');
  await expect(manualHomePage).toBeVisible();
});

test('Quiz Page - aren´t eligible flow', async ({ page }) => {
  await page.goto('https://user-quiz-hazel.vercel.app/');

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

  const quizStep1Complete = page.getByText('Complete');
  const continueButton = page.getByText('Continue');
  await expect(quizStep1Complete).toBeVisible();
  await expect(continueButton).toBeDisabled();

  await quizStep1Complete.click();

  await continueButton.click();

  const arentElegibleTitle = page.getByText('You aren´t eligible');
  await expect(arentElegibleTitle).toBeVisible();

  const arentElegibleDescription = page.getByText(
    'Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like thismedication.',
  );
  await expect(arentElegibleDescription).toBeVisible();

  const arentElegibleButton = page.getByText('Review your answers');
  await expect(arentElegibleButton).toBeVisible();

  const arentElegibleLink = page.getByText('Back to homepage');
  await expect(arentElegibleLink).toBeVisible();

  await expect(quizFirstStepTitle).not.toBeVisible();

  await arentElegibleButton.click();

  await expect(quizFirstStepTitle).toBeVisible();

  const quizStep1Moderate = page.getByText('Moderate');
  await expect(quizStep1Moderate).toBeVisible();

  await quizStep1Moderate.click();

  await continueButton.click();

  const quizSecondStepTitle = page.getByText(
    'Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?',
  );
  await expect(quizSecondStepTitle).toBeVisible();

  const quizStep2No = page.getByText('Yes', { exact: true });
  await expect(quizStep2No).toBeVisible();

  await quizStep2No.click();

  await continueButton.click();

  await expect(arentElegibleTitle).toBeVisible();

  await arentElegibleLink.click();

  const manualHomePage = page.getByText('Be good to yourself');
  await expect(manualHomePage).toBeVisible();
});

test('Quiz Page - Go back button', async ({ page }) => {
  await page.goto('https://user-quiz-hazel.vercel.app/');

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

  const quizStep1Moderate = page.getByText('Moderate');
  await expect(quizStep1Moderate).toBeVisible();

  const goBackButton = page.getByRole('navigation').getByRole('button');

  await expect(goBackButton).toBeVisible();

  goBackButton.click();

  const manualHomePage = page.getByText('Be good to yourself');
  await expect(manualHomePage).toBeVisible();
});

// here it is possible to modularize better and create more test cases
