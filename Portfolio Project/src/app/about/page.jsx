import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata = {
    title: 'About',
    description:
        'Hey, I’m Polo — I live in Guadalajara, where I’m learning to turn raw data into meaningful stories.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Hey, I’m Polo — I live in Guadalajara, where I’m learning to turn raw data into meaningful
                        stories.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            II’ve always been fascinated by patterns — from the rise and fall of dinosaurs to the rise
                            and fall of markets. What started as a curiosity about how massive systems evolve over time
                            turned into a passion for understanding data — how it moves, mutates, and sometimes goes
                            extinct.
                        </p>
                        <p>
                            Today, I channel that curiosity into analyzing market behavior and building data models that
                            reveal hidden trends. I approach financial datasets the same way a paleontologist approaches
                            fossils — with patience, precision, and an eye for the story buried beneath the surface.
                        </p>
                        <p>
                            Whether it’s visualizing volatility, tracking performance, or optimizing trading strategies,
                            I find energy in uncovering the structure behind the chaos. In my view, markets and
                            ecosystems aren’t that different — both reward adaptability and punish stagnation.
                        </p>
                        <p>
                            Dinosaurs may be gone, but my fascination with complex systems lives on — only now, my
                            fossils are rows of market data, and my tools are Python, SQL, and a healthy respect for
                            what evolution (and the economy) can teach us.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="#" icon={XIcon}>
                            Follow on X
                        </SocialLink>
                        <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                            Follow on Instagram
                        </SocialLink>
                        <SocialLink href="https://github.com/BigBacaStd" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/jorge-vargas18" icon={LinkedInIcon}
                                    className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:jorge.vargas@studiobaca.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            jorge.vargas@studiobaca.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
