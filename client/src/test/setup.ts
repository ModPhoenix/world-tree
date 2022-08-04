import '@testing-library/jest-dom';

import { fetch } from 'cross-fetch';

// Add `fetch` polyfill.
global.fetch = fetch;
