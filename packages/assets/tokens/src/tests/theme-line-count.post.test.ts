const path = require('path');
const { countLines } = require('./utils.js');

const darkPath = path.posix.join(__dirname, '../../dist/css/theme/webex/dark-stable.css');
const lightPath = path.posix.join(__dirname, '../../dist/css/theme/webex/light-stable.css');
const fluidDarkPath = path.posix.join(__dirname, '../../dist/css/theme/webex/fluid-dark-stable.css');
const fluidLightPath = path.posix.join(__dirname, '../../dist/css/theme/webex/fluid-light-stable.css');

describe('Theme tokens', () => {
  it('Theme token files should have same line count', async () => {
    const darkLinesCount = await countLines(darkPath);
    const lightLinesCount = await countLines(lightPath);

    expect(darkLinesCount).toBe(lightLinesCount);
  });

  it('Fluid theme token files should have same line count', async () => {
    const darkLinesCount = await countLines(fluidDarkPath);
    const lightLinesCount = await countLines(fluidLightPath);

    expect(darkLinesCount).toBe(lightLinesCount);
  });
});
