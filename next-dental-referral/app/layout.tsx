import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Dental Referral - Top Clinics in Latin America',
  description: 'Find the best dental clinics in Latin America',
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (e) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-gray-50">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
