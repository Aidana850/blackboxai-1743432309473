import createMiddleware from 'next-intl/middleware';
import config from './next-intl.config';

export default createMiddleware({
  locales: config.locales,
  defaultLocale: config.defaultLocale
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};