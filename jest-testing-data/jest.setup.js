require('jest-expect-message');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

jest.setTimeout(60000);
