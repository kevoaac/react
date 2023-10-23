// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  setTimeout(() => {
    console.log('hola')
  }, 4000)

  const image = await page.getByRole('img')

  const imageSrc = await image.getAttribute('src')

  await page.getByRole('button').click()

  let newImageSrc = 'Hola'

  setTimeout(() => {
    newImageSrc = image.getAttribute('src').toString()
  }, 4000)

  console.log({ imageSrc, newImageSrc })
  expect(newImageSrc).not.toEqual(imageSrc)
})
