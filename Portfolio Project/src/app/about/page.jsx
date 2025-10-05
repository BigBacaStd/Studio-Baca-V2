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
                            I’ve always been obsessed with two things: dinosaurs and data. As a kid, I memorized the
                            names of every dino in the Jurassic Park franchise — and then made a spreadsheet ranking
                            them by size, teeth count, and “likely to eat me first.”
                        </p>
                        <p>
                            While most kids built pillow forts, I built databases. My first “big” project was a fossil
                            tracking system for a backyard dig site (which turned out to be mostly rocks and chicken
                            bones). But that didn’t stop me — I started learning Python just to make it more official.
                        </p>
                        <p>
                            Over time, my passion shifted from digging up ancient bones to digging through messy
                            datasets. I found the same thrill in cleaning, organizing, and optimizing information
                            pipelines — like piecing together a prehistoric puzzle, one row at a time.
                        </p>
                        <p>
                            Today, I’m working toward a career in data engineering, where I can build the systems that
                            power insights for others. And yes, I still think dinosaurs are cool — but clean, scalable
                            data architecture? Now that’s my kind of monster.
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
                        <SocialLink href="https://www.linkedin.com/in/jorge-vargas18"  icon={LinkedInIcon} className="mt-4">
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
