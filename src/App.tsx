import Spline from '@splinetool/react-spline'
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
  category: string
  summary: string
  year: string
}

const SPLINE_SCENE_URL =
  'https://prod.spline.design/WesoEMwDbB2V73iE/scene.splinecode'

const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'FOCUS', href: '#focus' },
  { label: 'WORK', href: '#work' },
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

const HERO_LINES = ['Reliable AI', 'for Clinical', 'Decisions']

const FOCUS_TRACKS: FocusTrack[] = [
  {
    title: 'Medical Vision',
    description: '의료영상 기반 자동 분석 파이프라인',
    detail: '정확도와 해석 가능성을 동시에 높이는 모델 구조를 연구합니다.',
  },
  {
    title: 'Clinical NLP',
    description: '임상 노트 요약·정보 추출 시스템',
    detail: '실사용 문맥에서 회수율을 높이고 환각을 줄이는 방법을 설계합니다.',
  },
  {
    title: 'Agent Safety',
    description: '진단 에이전트 안전성 평가',
    detail: 'PHI 노출 가능성과 신뢰성 리스크를 체계적으로 검증합니다.',
  },
]

const WORK_CARDS: WorkCard[] = [
  {
    title: 'PLADP Framework',
    category: 'Research',
    summary: '의료 에이전트의 잠재 PHI 접근 여부를 탐지하는 평가 프레임워크',
    year: '2026',
  },
  {
    title: 'MARS Datathon',
    category: 'Challenge',
    summary: '임상 텍스트 요약 체계 고도화로 본선 단계까지 성과를 확장',
    year: '2025',
  },
  {
    title: 'Sign Language Platform',
    category: 'Project',
    summary: '실시간 인식 기반 학습 플랫폼 구축 및 캡스톤 수상',
    year: '2025',
  },
]

function App() {
  return (
    <main className="relative min-h-screen bg-[#060606] text-[#f5f5f5] font-ui">
      <div
        className="pointer-events-none fixed inset-0 z-40 bg-[url('/texture.png')] bg-cover bg-center opacity-24 mix-blend-lighten"
        aria-hidden="true"
      />

      <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden border-b border-white/15 bg-black"
      >
        <div className="absolute inset-0 z-10">
          <div className="pointer-events-none mx-auto h-full w-full max-w-[1831px]">
            <div className="pointer-events-auto absolute left-1/2 top-1/2 h-[78vh] w-[82vw] -translate-x-1/2 -translate-y-1/2 md:h-[82vh] md:w-[72vw]">
              <Spline scene={SPLINE_SCENE_URL} />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2),rgba(6,6,6,0.84)_52%,#060606)]" />

        <div className="pointer-events-none relative z-30 mx-auto flex min-h-screen w-full max-w-[1831px] flex-col px-5 pb-10 pt-6 md:px-10 lg:px-16">
          <header className="flex items-center justify-between gap-5">
            <a
              href="#home"
              className="pointer-events-auto font-display text-[clamp(1.75rem,2.2vw,2.35rem)] leading-[1.4] text-white"
            >
              Jaewang Lee
            </a>

            <nav className="pointer-events-auto liquid-glass hidden rounded-full px-5 py-2 md:block">
              <ul className="flex items-center gap-7">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-ui text-xs font-medium tracking-[0.16em] text-white/88 transition hover:text-white"
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
                  className="pointer-events-auto liquid-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </header>

          <div className="my-auto max-w-[820px] py-20 md:py-24">
            <p className="font-ui text-xs uppercase tracking-[0.2em] text-white/60">
              GRADUATE PORTFOLIO
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.2rem,6.8vw,7.4rem)] leading-[0.92] tracking-[0.01em] text-white">
              {HERO_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-7 max-w-[680px] font-ko text-base leading-[1.65] text-white/78 md:text-lg">
              아주대학교 소프트웨어 및 컴퓨터공학을 기반으로, 의료 현장에서 실제로
              작동하는 신뢰형 AI 시스템을 연구합니다.
            </p>

            <div className="mt-8 flex items-center gap-3 md:hidden">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="pointer-events-auto liquid-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#ececec] py-24 text-[#111111] md:py-28">
        <div className="mx-auto grid w-full max-w-[1831px] gap-14 px-5 md:grid-cols-[1.1fr_1fr] md:px-10 lg:px-16">
          <div>
            <p className="font-ui text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              ABOUT
            </p>
            <h2 className="mt-4 max-w-[720px] font-display text-[clamp(2.1rem,4.3vw,3.75rem)] leading-[1.4] text-black">
              Research should be precise.
              <br />
              Outcomes should be usable.
            </h2>
            <p className="mt-6 max-w-[680px] font-ko text-lg leading-[1.65] text-black/78">
              모델 성능 수치만이 아니라 설명 가능성, 데이터 안전성, 실제 활용
              맥락까지 함께 설계합니다. 실험 단계에 머무르지 않고 실행 가능한
              시스템으로 연결하는 데 집중합니다.
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-ui text-base leading-[1.6] text-black/82">
              BS Candidate, Ajou University
              <br />
              Research Intern in Biomedical AI
            </p>
            <p className="font-ko text-base leading-[1.65] text-black/75">
              의료영상 분석, 임상 텍스트 처리, 에이전트 안전성 검증을 중심으로
              학술성과와 프로토타입 구현을 함께 진행하고 있습니다.
            </p>
            <a
              href="mailto:jaewang1535@ajou.ac.kr"
              className="liquid-glass inline-flex rounded-full border border-black/20 px-5 py-2 font-ui text-xs font-medium tracking-[0.14em] text-black"
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      <section id="focus" className="bg-[#101010] py-24 md:py-28">
        <div className="mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <header className="border-b border-white/20 pb-6">
            <p className="font-ui text-xs font-medium uppercase tracking-[0.2em] text-white/58">
              FOCUS
            </p>
            <h2 className="mt-3 max-w-[760px] font-display text-[clamp(2.1rem,4.2vw,3.75rem)] leading-[1.4] text-white">
              Current Research Tracks
            </h2>
          </header>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {FOCUS_TRACKS.map((track) => (
              <article
                key={track.title}
                className="liquid-glass rounded-2xl bg-white/[0.03] p-6"
              >
                <h3 className="font-display text-[clamp(1.7rem,2.3vw,2.25rem)] leading-[1.4] text-white">
                  {track.title}
                </h3>
                <p className="mt-4 font-ko text-base leading-[1.65] text-white/82">
                  {track.description}
                </p>
                <p className="mt-3 font-ko text-sm leading-[1.65] text-white/64">
                  {track.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#efefef] py-24 text-[#101010] md:py-28">
        <div className="mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <header className="border-b border-black/20 pb-6">
            <p className="font-ui text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              WORK
            </p>
            <h2 className="mt-3 max-w-[780px] font-display text-[clamp(2.1rem,4.2vw,3.75rem)] leading-[1.4] text-black">
              Selected Projects and Notes
            </h2>
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {WORK_CARDS.map((work) => (
              <article
                key={work.title}
                className="liquid-glass rounded-2xl border border-black/15 bg-white/45 p-6"
              >
                <p className="font-ui text-xs font-medium tracking-[0.15em] text-black/56">
                  {work.category} · {work.year}
                </p>
                <h3 className="mt-3 font-display text-[clamp(1.6rem,2.1vw,2.2rem)] leading-[1.4] text-black">
                  {work.title}
                </h3>
                <p className="mt-4 font-ko text-base leading-[1.65] text-black/75">
                  {work.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/20 bg-[#0b0b0b] py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1831px] px-5 md:px-10 lg:px-16">
          <div className="liquid-glass rounded-2xl p-6 md:p-10">
            <h2 className="font-display text-[clamp(2.1rem,4.1vw,3.75rem)] leading-[1.4] text-white">
              Let&apos;s Continue the Conversation
            </h2>
            <p className="mt-4 max-w-[700px] font-ko text-base leading-[1.65] text-white/76 md:text-lg">
              공동 연구, 프로젝트 협업, 기술적 논의를 환영합니다. 아래 채널로
              연락주시면 확인 후 답변드리겠습니다.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-ui text-sm leading-[1.4] text-white/88"
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
