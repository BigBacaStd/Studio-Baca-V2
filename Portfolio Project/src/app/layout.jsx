import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
    title: {
        template: '%s - Studio Baca',
        default:
            'Studio Baca',
    },
    description:
        'I’m Polo, blending a passion for data pipelines, automation, and algorithmic trading with hands-on Python projects. Whether it’s wrangling messy datasets or testing trading strategies, I’m driven by curiosity and the thrill of solving complex problems.',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    )
}
