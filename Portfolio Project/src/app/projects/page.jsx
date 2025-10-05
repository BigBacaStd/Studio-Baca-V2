import Image from 'next/image'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import logoNetflix from '@/images/logos/Netflix.svg'
import logoChurn from '@/images/logos/customerchurn.svg'
import logoJobMarket from '@/images/logos/jobmarket.svg'
import logoBirth from '@/images/logos/birthrate.svg'
import logoCrypto from '@/images/logos/Dashboard.svg'

const projects = [{
    name: 'Crypto Dashboard',
    description: 'This project is a real-time crypto dashboard built to track the price trends, volatility, and trading volume of the top cryptocurrencies. I pull data from public APIs and turn it into dynamic visualizations that help make sense of the fast-paced world of crypto. It’s my way of combining Python, APIs, and data visualization.',
    link: {href: '#', label: 'github.com'},
    logo: logoCrypto,
}, {
    name: 'Netflix EDA',
    description: 'This project dives into Netflix’s global content library to explore what kind of shows and movies are available across the world. Using Pandas and Matplotlib, I took a closer look at how different genres trend over time, which countries produce the most content, and how Netflix’s library has evolved.',
    link: {href: '#', label: 'github.com'},
    logo: logoNetflix,
}, {
    name: 'Job Market Scraper',
    description: 'This project is all about understanding what skills are actually in demand for data analysts. I built a Python web scraper that pulls job listings from popular platforms, then analyzed the job descriptions to find patterns in required tools, languages, and experience levels from SQL and Excel to Python and Tableau.',
    link: {href: '#', label: 'github.com'},
    logo: logoJobMarket,
}, {
    name: 'Churn Model',
    description: 'Using a dataset from a telecom company, I explored factors like contract type, service usage, and customer support history. After cleaning the data and engineering some useful features, I trained a machine learning model to predict which users were most likely to churn.',
    link: {href: '#', label: 'github.com'},
    logo: logoChurn,
}, {
    name: 'Declining Borth Rates in Mexico.',
    description: 'This project explores the steady decline in birth rates across Mexico over the last few decades. I used public health and census datasets to clean, analyze, and visualize key demographic trends — such as urban vs rural patterns, age of mothers, and regional shifts.',
    link: {href: '#', label: 'github.com'},
    logo: logoBirth,
},]

function LinkIcon(props) {
    return (<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>)
}

export const metadata = {
    title: 'Projects', description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
    return (<SimpleLayout
            title="Things I’ve made trying to put my dent in the universe."
            intro="I’ve worked on all sorts of projects while learning Python, data analysis, and algo trading — these are some of my favorites. Some are just fun experiments, others helped me understand real-world data a bit better. If anything looks interesting, feel free to check out the code or shoot me ideas to make it better."
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (<Card as="li" key={project.name}>
                        <div
                            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={project.logo}
                                alt=""
                                className="h-8 w-8"
                                unoptimized
                            />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                        </h2>
                        <Card.Description>{project.description}</Card.Description>
                        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                            <LinkIcon className="h-6 w-6 flex-none"/>
                            <span className="ml-2">{project.link.label}</span>
                        </p>
                    </Card>))}
            </ul>
        </SimpleLayout>)
}
