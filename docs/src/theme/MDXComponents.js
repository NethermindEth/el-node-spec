import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import NotCLIDisclaimer from '@site/src/components/NotCLIDisclaimer';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  NotCLIDisclaimer,
};