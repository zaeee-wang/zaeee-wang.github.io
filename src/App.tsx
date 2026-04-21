import type { ComponentType } from 'react'
import Spline from '@splinetool/react-spline/next'
import { CodeXml, ContactRound, Mail, type LucideIcon } from 'lucide-react'

type NavItem = {
  label: string
  href: string
}

type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

type FocusTrack = {
  title: string
  description: string
  detail: string
}

type WorkCard = {
  title: string
  kind: string
  summary: string
  year: string
}

const SplineScene = Spline as unknown as ComponentType<{ scene: string }>

const SPLINE_SCENE_URL =
  'https://prod.spline.design/WesoEMwDbB2V73iE/scene.splinecode'

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
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
  'Building',
  'Reliable AI',
  'for Clinical',
  'Decisions',
]

const FOCUS_TRACKS: FocusTrack[] = [
  {
    title: 'Medical Vision',
    description: 'X-ray 기반 분석과 분할 자동화 연구',
    detail: '진단 보조 정확도와 해석 가능성을 함께 개선합니다.',
  },
  {
    title: 'Clinical NLP',
    description: '임상 노트 생성 및 요약 파이프라인',
    detail: '정보 회수율을 높이고 환각을 줄이는 구조를 설계합니다.',
  },
  {
    title: 'Agent Safety',
    description: 'RAG 진단 에이전트 보안·검증',
    detail: 'PHI 노출 가능성을 평가하는 프로토콜을 개발합니다.',
  },
]

const WORK_CARDS: WorkCard[] = [
  {
    title: 'PLADP Framework',
    kind: 'Research',
    summary: '의료 에이전트의 잠재 PHI 접근 여부를 탐지하는 평가 프레임워크',
    year: '2026',
  },
  {
    title: 'MARS Datathon',
    kind: 'Challenge',
    summary: '임상 텍스트 요약 체계 고도화로 본선 진출 성과 도출',
    year: '2025',
  },
  {
    title: 'Sign Language Platform',
    kind: 'Project',
    summary: '실시간 인식 기반 학습 플랫폼 구축 및 캡스톤 수상',
    year: '2025',
  },
]

function App() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-[#f4f4f4]">
      <div
        className="pointer-events-none fixed inset-0 z-40 bg-[url('/texture.png')] bg-cover bg-center opacity-25 mix-blend-lighten"
        aria-hidden="true"
      />

      <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden border-b border-white/15 bg-black"
      >
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="pointer-events-auto h-[120vh] w-[130vw] opacity-95 md:h-[124vh] md:w-[116vw]">
            <SplineScene scene={SPLINE_SCENE_URL} />
          </div>
        </div>
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.14),rgba(8,8,8,0.9)_48%,#080808)]" />

        <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-[1831px] flex-col px-5 pb-12 pt-6 md:px-10 lg:px-16">
          <header className="flex items-center justify-between gap-5">
            <a
              href="#home"
              className="font-seasons text-xl leading-[1.4] tracking-[0.03em] text-white md:text-2xl"
            >
              Jaewang Lee
            </a>

            <nav className="liquid-glass hidden rounded-full px-5 py-2 md:block">
              <ul className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-poppins text-xs uppercase leading-[1.4] tracking-[0.17em] text-white/90 transition hover:text-white"
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
                  className="liquid-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </header>

          <div className="my-auto max-w-[860px] py-20 md:py-24">
            <p className="font-poppins text-sm uppercase leading-[1.5] tracking-[0.22em] text-white/65">
              Graduate Portfolio
            </p>
            <h1 className="mt-5 font-seasons text-[clamp(3rem,8.5vw,9rem)] leading-[0.93] tracking-[0.02em] text-white">
              {HERO_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-[720px] font-poppins text-base leading-[1.6] text-white/78 md:text-lg">
              아주대학교 소프트웨어 및 컴퓨터공학을 기반으로, 의료 현장에서 실제로
              작동하는 신뢰형 AI 시스템을 연구합니다.
            </p>

            <div className="mt-8 flex items-center gap-3 md:hidden">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="liquid-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-white/90"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#ececec] py-24 text-[#111111] md:py-28">
        <div className="mx-auto grid w-full max-w-[1831px] gap-14 px-5 md:grid-cols-[1.15fr_1fr] md:px-10 lg:px-16">
          <div>
            <p className="font-poppins text-xs uppercase leading-[1.5] tracking-[0.2em] text-black/60">
              About
            </p>
            <h2 className="mt-4 max-w-[700px] font-seasons text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.4]">
              연구는 정교해야 하고,
              <br />
              결과는 임상에서 읽혀야 합니다.
            </h2>
            <p className="lang-ko mt-6 max-w-[660px] text-lg text-black/75">
              모델 성능 수치만이 아니라 설명 가능성, 데이터 안전성, 활용 맥락까지
              함께 설계합니다. 실험을 논문으로 끝내지 않고 실제 워크플로로 연결하는
              데 집중합니다.
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-poppins text-base leading-[1.6] text-black/80">
              BS Candidate, Ajou University
              <br />
              Research Intern in Biomedical AI
            </p>
            <p className="lang-ko text-base text-black/72">
              의료영상 분석, 임상 텍스트 처리, 에이전트 안전성 검증을 중심으로
              연구를 확장하고 있습니다.
            </p>
            <a
              href="mailto:jaewang1535@ajou.ac.kr"
              className="liquid-glass inline-flex rounded-full border border-black/20 px-5 py-2 font-poppins text-sm uppercase leading-[1.4] tracking-[0.14em] text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="focus" className="bg-[#111111] py-24 md:py-28">
        <div className="mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <header className="border-b border-white/20 pb-6">
            <p className="font-poppins text-xs uppercase leading-[1.5] tracking-[0.2em] text-white/60">
              Research Focus
            </p>
            <h2 className="mt-3 max-w-[820px] font-seasons text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.4] text-white">
              Current Tracks
            </h2>
          </header>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {FOCUS_TRACKS.map((track) => (
              <article
                key={track.title}
                className="liquid-glass rounded-2xl bg-white/[0.03] p-6"
              >
                <h3 className="font-seasons text-[clamp(1.6rem,2.4vw,2.2rem)] leading-[1.4] text-white">
                  {track.title}
                </h3>
                <p className="lang-ko mt-4 text-base text-white/80">
                  {track.description}
                </p>
                <p className="lang-ko mt-3 text-sm text-white/64">{track.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#f0f0f0] py-24 text-[#101010] md:py-28">
        <div className="mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <header className="border-b border-black/20 pb-6">
            <p className="font-poppins text-xs uppercase leading-[1.5] tracking-[0.2em] text-black/60">
              Selected Work
            </p>
            <h2 className="mt-3 max-w-[820px] font-seasons text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.4]">
              Projects and Research Notes
            </h2>
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {WORK_CARDS.map((work) => (
              <article
                key={work.title}
                className="liquid-glass rounded-2xl border border-black/15 bg-white/40 p-6"
              >
                <p className="font-poppins text-xs uppercase leading-[1.5] tracking-[0.16em] text-black/55">
                  {work.kind} · {work.year}
                </p>
                <h3 className="mt-3 font-seasons text-[clamp(1.5rem,2.3vw,2.15rem)] leading-[1.4] text-black">
                  {work.title}
                </h3>
                <p className="lang-ko mt-4 text-base text-black/73">{work.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/20 bg-[#0b0b0b] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <div className="liquid-glass rounded-2xl p-6 md:p-10">
            <h2 className="font-seasons text-[clamp(2rem,4.3vw,3.75rem)] leading-[1.4] text-white">
              Let&apos;s Continue the Conversation
            </h2>
            <p className="lang-ko mt-4 max-w-[680px] text-base text-white/76 md:text-lg">
              공동 연구, 프로젝트 협업, 기술적 논의를 환영합니다. 아래 채널로
              연락 주시면 확인 후 답변드립니다.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-poppins text-sm leading-[1.4] text-white/88"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
