import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  async rewrites() {
    return { beforeFiles: [{ source: '/', has: [{ type: 'host', value: 'time.devarajsolutions.site' }], destination: '/time' }], afterFiles: [], fallback: [] };
  },
};
export default config;
