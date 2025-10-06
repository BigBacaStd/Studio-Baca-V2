import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function ToolsSection({children, ...props}) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({title, href, children}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    )
}

export const metadata = {
    title: 'Reviews',
    description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
    return (
        <SimpleLayout
            title="Software I use, gadgets I love, and other things I recommend."
            intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
        >
            <div className="space-y-20">
                <ToolsSection title="Workstation">
                    <Tool title="14” MacBook Pro (M1 Max, 16GB RAM, 2021)">
                        This machine never breaks a sweat — even when I’m juggling datasets, backtests, and dashboards
                        all at once. The M1 Max chip handles everything I throw at it, quietly judging my messy code
                        while keeping its cool (literally — the fans never turn on).

                    </Tool>
                    <Tool title="Dual LG Monitors">
                        Once you go dual-screen, there’s no going back. One screen for charts and live data feeds, the
                        other for analysis, notes, and way too many browser tabs. Every extra inch of screen real estate
                        is another excuse to multitask.
                    </Tool>
                    <Tool title="Apple Magic Keyboard">
                        Clean, minimal, and surprisingly satisfying to type on. It’s like the polite version of a
                        mechanical keyboard — it never yells, but it gets the job done.

                    </Tool>
                    <Tool title="Logitech MX Master Mouse">
                        The MVP of my desk setup. Smooth, programmable, and ergonomically perfect. Scrolling through
                        massive spreadsheets feels almost therapeutic (almost).
                    </Tool>
                    <Tool title="Razer Chair">
                        If I’m going to sit for hours crunching data and watching market swings, I might as well do it
                        like a boss. It’s comfortable enough to make 12-hour trading days survivable — just barely.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="Development tools">
                    <Tool title="PyCharm">
                        My go-to for Python work — clean, powerful, and packed with features I actually use. From data
                        analysis scripts to trading automations, PyCharm keeps everything organized while quietly
                        judging my indentation choices.
                    </Tool>
                    <Tool title="WebStorm">
                        When I switch from data pipelines to front-end dashboards, WebStorm makes the transition
                        painless. It’s fast, smart, and occasionally reminds me that I’m not as clever as I think I am.
                    </Tool>
                    <Tool title="Warp">
                        It’s like the command line, but from the future. Fast, modern, and actually enjoyable to use —
                        which is something I never thought I’d say about a terminal.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="Productivity">
                    <Tool title="Notion">
                        My second brain — or maybe my first, depending on how much coffee I’ve had. Everything lives
                        here: notes, project plans, trading logs, and random ideas that might one day become something
                        real. It’s where chaos meets structure (and occasionally wins).
                    </Tool>
                    <Tool title="ChatGPT">
                        The ultimate brainstorming partner, research assistant, and debugging therapist. Whether I’m
                        writing SQL queries, summarizing reports, or arguing with myself about code logic, ChatGPT keeps
                        me sane — or at least productively distracted.
                    </Tool>
                </ToolsSection>
            </div>
        </SimpleLayout>
    )
}
