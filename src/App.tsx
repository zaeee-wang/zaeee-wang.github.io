import type { ComponentType } from 'react'
import Spline from '@splinetool/react-spline/next'
import {
  ArrowUpRight,
  CodeXml,
  ContactRound,
  Mail,
  type LucideIcon,
} from 'lucide-react'

type NavItem = {
  label: string
  href: string
}

type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

type FeaturedCard = {
  title: string
  subtitle: string
  overlayLabel: string
  overlayValue: string
}

const SplineScene = Spline as unknown as ComponentType<{ scene: string }>

const SPLINE_SCENE_URL =
  'https://prod.spline.design/WesoEMwDbB2V73iE/scene.splinecode'

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'HIGHLIGHTS', href: '#highlights' },
  { label: 'CONTACT', href: '#contact' },
]

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Mail', href: 'mailto:jaewang1535@ajou.ac.kr', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/zaeee-wang', icon: CodeXml },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaewang-lee',
    icon: ContactRound,
  },
]

const HERO_LINES = [
  'ENGINEERING TRUST',
  'IN MEDICAL AI',
  'FOR CLINICAL',
  'DECISION SYSTEMS',
]

const KEYWORD_CLUSTERS = [
  'MEDICAL IMAGE ANALYSIS / COMPUTER-AIDED DIAGNOSIS / EXPLAINABLE AI',
  'CLINICAL NLP / RAG SAFETY / PHI PROTECTION / TRUSTWORTHY AGENTS',
  'TIME-SERIES MODELING / RISK ESTIMATION / HEALTH DATA ENGINEERING',
]

const FEATURED_CARDS: FeaturedCard[] = [
  {
    title: 'TRUSTWORTHY MEDICAL AGENTS',
    subtitle: 'RAG Safety + PHI Leakage Detection',
    overlayLabel: 'RESEARCH FOCUS',
    overlayValue: 'CLINICAL AI SAFETY',
  },
  {
    title: 'COMPUTER-AIDED DIAGNOSIS',
    subtitle: 'X-Ray Analysis, Segmentation, Risk Modeling',
    overlayLabel: 'SELECTED AREA',
    overlayValue: 'MEDICAL VISION',
  },
  {
    title: 'RESEARCH TO PROTOTYPE',
    subtitle: 'Applied ML, Platform Engineering, Product Thinking',
    overlayLabel: 'HIGHLIGHT',
    overlayValue: 'AWARDS + DATATHON IMPACT',
  },
]

function App() {
  return (
    <div className="relative min-h-screen bg-background font-mono text-cream">
      <div
        className="pointer-events-none fixed inset-0 z-50 bg-[url('/texture.png')] bg-cover bg-center opacity-60 mix-blend-lighten"
        aria-hidden="true"
      />

      <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden rounded-b-[2rem] border-b border-cream/20 bg-[#020a2f]"
      >
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="pointer-events-auto h-[122vh] w-[132vw] opacity-95 md:h-[130vh] md:w-[120vw]">
            <SplineScene scene={SPLINE_SCENE_URL} />
          </div>
        </div>
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_34%,rgba(111,255,0,0.1),rgba(1,8,40,0.84)_56%,#010828)]" />

        <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-[1831px] flex-col px-5 pb-12 pt-6 md:px-10 lg:px-16">
          <header className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="font-grotesk text-lg uppercase tracking-[0.14em] text-cream md:text-2xl"
            >
              JAEWANG LEE
            </a>

            <nav className="liquid-glass hidden rounded-full px-6 py-3 md:block">
              <ul className="flex items-center gap-5 lg:gap-8">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-grotesk text-xs uppercase tracking-[0.18em] text-cream/90 transition hover:text-neon lg:text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="liquid-glass inline-flex h-11 w-11 items-center justify-center rounded-full text-cream transition hover:text-neon"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </header>

          <div className="my-auto max-w-[1120px] py-20 md:py-24">
            <p className="font-condiment text-3xl normal-case text-neon md:text-5xl">
              Graduate researcher
            </p>
            <h1 className="mt-4 font-grotesk text-[clamp(2.8rem,8.2vw,8.8rem)] uppercase leading-[0.95] tracking-[0.03em] text-cream">
              {HERO_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-[760px] text-sm uppercase leading-[1.5] tracking-[0.17em] text-cream/80 md:text-base">
              BS CANDIDATE IN SOFTWARE AND COMPUTER ENGINEERING AT AJOU
              UNIVERSITY, BUILDING RELIABLE AI SYSTEMS FOR MEDICAL CONTEXTS.
              <span className="mt-3 block lang-ko text-sm normal-case tracking-normal text-cream/75 md:text-base">
                아주대학교 소프트웨어 및 컴퓨터공학 기반으로 의료 AI의 신뢰성과
                임상 활용성을 연결하는 엔지니어링 연구를 수행합니다.
              </span>
            </p>

            <div className="mt-10 flex items-center gap-3 md:hidden">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="liquid-glass inline-flex h-11 w-11 items-center justify-center rounded-full text-cream transition hover:text-neon"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative isolate min-h-screen border-t border-cream/10 bg-[#06103a] py-24 md:py-32"
      >
        <div className="relative mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <p className="font-condiment text-3xl normal-case text-neon md:text-4xl">
                Researcher
              </p>
              <h2 className="mt-3 max-w-[790px] font-grotesk text-[clamp(2rem,4.5vw,3.75rem)] uppercase leading-[1.4] tracking-[0.04em] text-cream">
                HELLO, I&apos;M JAEWANG LEE
                <span className="block">ENGINEERING CLINICAL INTELLIGENCE.</span>
              </h2>
              <p className="mt-6 max-w-[680px] lang-ko text-base text-cream/75 md:text-lg">
                의료 데이터를 실제 의사결정 지원 시스템으로 연결하기 위해 모델
                설계와 검증 프로토콜을 함께 다루는 연구를 지향합니다.
              </p>
            </div>

            <p className="liquid-glass self-start rounded-3xl px-6 py-7 text-sm uppercase leading-[1.6] tracking-[0.16em] text-cream/85 md:text-base">
              BS CANDIDATE, AJOU UNIVERSITY.
              <br />
              RESEARCH INTERN IN BIOMEDICAL AI CONTEXTS.
              <br />
              FOCUSING ON MEDICAL IMAGE ANALYSIS, CLINICAL NLP, AND SAFETY-ORIENTED
              AGENT DESIGN.
              <span className="mt-4 block lang-ko text-sm normal-case tracking-normal text-cream/75">
                학부 연구 단계에서 영상 분석, 임상 노트 생성, 개인정보 보호형 AI
                에이전트 평가를 함께 확장하고 있습니다.
              </span>
            </p>
          </div>

          <div className="mt-24 space-y-5">
            {KEYWORD_CLUSTERS.map((cluster) => (
              <p
                key={cluster}
                className="font-grotesk text-[clamp(1.1rem,2.3vw,2.25rem)] uppercase leading-[1.42] tracking-[0.2em] text-cream/15"
              >
                {cluster}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="research"
        className="relative isolate border-t border-cream/10 bg-[#081548] py-24 md:py-32"
      >
        <div className="relative mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <header className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-condiment text-3xl normal-case text-neon md:text-4xl">
                Highlights
              </p>
              <h2 className="mt-2 max-w-[860px] font-grotesk text-[clamp(2rem,4.4vw,3.75rem)] uppercase leading-[1.4] tracking-[0.04em] text-cream">
                SELECTED RESEARCH
                <span className="block text-cream">CURRENT DIRECTIONS</span>
              </h2>
            </div>

            <a
              id="highlights"
              href="mailto:jaewang1535@ajou.ac.kr"
              className="group w-fit"
            >
              <span className="font-grotesk text-xl uppercase leading-[1.4] tracking-[0.14em] text-cream md:text-2xl">
                VIEW FULL CV
              </span>
              <span className="mt-2 block h-[5px] w-full rounded-full bg-neon transition group-hover:w-[96%]" />
            </a>
          </header>

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {FEATURED_CARDS.map((card) => (
              <article
                key={card.title}
                className="liquid-glass rounded-[1.5rem] bg-[#0a1a52]/70 p-4 md:p-5"
              >
                <div className="liquid-glass h-56 rounded-2xl bg-[#102467]" />

                <div className="mt-6 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-grotesk text-[clamp(1.2rem,2vw,2rem)] uppercase leading-[1.4] tracking-[0.03em] text-cream">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase leading-[1.5] tracking-[0.14em] text-cream/75">
                      {card.subtitle}
                    </p>
                  </div>
                  <span className="liquid-glass inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#1d1066]/70 text-neon">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="liquid-glass mt-6 rounded-xl px-4 py-3">
                  <p className="text-[0.68rem] uppercase leading-[1.45] tracking-[0.16em] text-cream/70">
                    {card.overlayLabel}
                  </p>
                  <p className="font-grotesk text-lg uppercase leading-[1.4] tracking-[0.03em] text-cream">
                    {card.overlayValue}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative isolate border-t border-cream/10 bg-[#091d5a] py-20 md:py-28"
      >
        <div className="relative mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <div className="liquid-glass rounded-[2rem] border border-cream/20 p-6 md:p-10 lg:p-14">
            <div className="flex flex-col justify-between gap-14">
              <div>
                <p className="font-condiment text-3xl normal-case text-neon md:text-4xl">
                  Let&apos;s connect
                </p>
                <h2 className="mt-4 max-w-[900px] font-grotesk text-[clamp(2rem,4.4vw,3.75rem)] uppercase leading-[1.4] tracking-[0.04em] text-cream">
                  READ THE WORK.
                  <span className="block">FOLLOW THE RESEARCH.</span>
                  <span className="block">SHAPE WHAT COMES NEXT.</span>
                </h2>
                <p className="mt-6 max-w-[640px] text-sm uppercase leading-[1.55] tracking-[0.16em] text-cream/80 md:text-base">
                  OPEN TO RESEARCH COLLABORATION, INTERDISCIPLINARY PROTOTYPING,
                  AND HEALTHCARE AI DISCUSSIONS.
                </p>
              </div>

              <div className="flex items-end justify-between gap-6">
                <div className="liquid-glass inline-flex flex-col gap-2 rounded-2xl p-2">
                  {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="liquid-glass inline-flex h-11 w-11 items-center justify-center rounded-full text-cream transition hover:text-neon"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>

                <a
                  href="mailto:jaewang1535@ajou.ac.kr"
                  className="font-mont text-sm uppercase leading-[1.45] tracking-[0.15em] text-neon md:text-base"
                >
                  jaewang1535@ajou.ac.kr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
