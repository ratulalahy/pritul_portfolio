import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toufiq Imroze - Textile Engineer & Apparel Manufacturing Specialist',
  description: 'Portfolio and resume of Toufiq Imroze, passionate about textile engineering and sustainable apparel manufacturing. Currently pursuing graduation in Textile Engineering at NITER.',
  keywords: ['textile engineering', 'apparel manufacturing', 'sustainable textiles', 'NITER'],
  authors: [{ name: 'Toufiq Imroze' }],
  creator: 'Toufiq Imroze',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Toufiq Imroze - Textile Engineer',
    description: 'Portfolio showcasing expertise in textile engineering and sustainable apparel manufacturing.',
    type: 'website',
    locale: 'en_US',
    url: 'https://Toufiq-imroze-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toufiq Imroze - Textile Engineer',
    description: 'Portfolio showcasing expertise in textile engineering and sustainable apparel manufacturing.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
