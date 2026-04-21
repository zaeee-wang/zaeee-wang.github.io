import { useEffect, useState, type WheelEvent } from 'react'
import { ArrowDown, CodeXml, Mail, Phone } from 'lucide-react'

type Theme = 'light' | 'dark'
type ThemePreference = Theme | 'system'

type SplineViewerProps = {
  url: string
  className?: string
}

type ProjectLink = {
  label: 'Details' | 'GitHub' | 'Reference'
  href: string
}

type ProjectItem = {
  period: string
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
}

const THEME_STORAGE_KEY = 'portfolio-theme-preference'

const SPLINE_SCRIPT_SRC =
  'https://unpkg.com/@splinetool/viewer@1.0.9/build/spline-viewer.js'

// TODO: replace GitHub profile links with project-specific repositories as they become public.
const PROJECTS: ProjectItem[] = [
  {
    period: 'SEP 2025 - OCT 2025',
    title: 'Medical Note Generation',
    description:
      'MARS Challenge 예선 2위 및 결선 진출. MIMIC-III 데이터셋과 LLM을 활용한 임상 요약 파이프라인을 구축했습니다. scispaCy NER, UMLS, FAISS 등을 통합하여 RAG 파이프라인의 재현율(Recall)을 62%에서 81%로 향상시키고 환각 현상을 줄였습니다.',
    tags: ['RAG', 'LangChain', 'LLM'],
    links: [
      { label: 'GitHub', href: 'https://github.com/zaeeewang' },
      { label: 'Reference', href: 'https://physionet.org/content/mimiciii/1.4/' },
    ],
  },
  {
    period: 'OCT 2025 - PRESENT',
    title: 'Talkin Coffee',
    description:
      '개인 맞춤형 커피 레시피 로깅 및 원두 거래를 위한 풀스택 모바일 플랫폼입니다. Google Gemini API를 통합하여 AI 기반 레시피 추천을 구현했으며, 응답 스트리밍 및 비동기 처리를 통해 LLM 호출 지연 시간을 최적화했습니다.',
    tags: ['Flutter', 'Gemini API', 'NoSQL'],
    links: [
      { label: 'GitHub', href: 'https://github.com/zaeeewang' },
      {
        label: 'Reference',
        href: 'https://ai.google.dev/gemini-api/docs',
      },
    ],
  },
  {
    period: 'MAR 2026 - PRESENT',
    title: 'Pursuit-Evasion MARL System',
    description:
      'PPO 기반 다중 에이전트 강화학습 시스템. Occlusion(장애물 가림) 상황에서도 Evader 드론을 회피하며 목표 지점에 도달할 수 있도록 정책 학습 및 실험적 분석을 진행하고, Stage 커리큘럼 기반의 보상 함수 설계를 수행했습니다.',
    tags: ['RL', 'PPO', 'MARL'],
    links: [
      { label: 'GitHub', href: 'https://github.com/zaeeewang' },
      { label: 'Reference', href: 'https://arxiv.org/abs/1707.06347' },
    ],
  },
  {
    period: 'JAN 2026 - FEB 2026',
    title: '[DACON] Phishing Prevention Service',
    description:
      '스미싱 및 피싱 방지를 위한 데이터 인프라 개발. KISA, 더치트 등 외부 보안 API를 연동하고, Kotlin Coroutines와 WorkManager를 이용해 백그라운드 작업 및 비동기 워크플로우를 안정적으로 구축했습니다.',
    tags: ['Kotlin', 'Gemma', 'API'],
    links: [
      { label: 'GitHub', href: 'https://github.com/zaeeewang' },
      {
        label: 'Reference',
        href: 'https://www.kisa.or.kr/2060204/form?postSeq=12&page=1',
      },
    ],
  },
  {
    period: 'SEP 2025 - NOV 2025',
    title: 'Gamified Sign Language Platform',
    description:
      'Google-Ajou 캡스톤 콘테스트 우수상(3위) 수상작. 실시간 수어 인식 엔진을 설계하고 웹 플랫폼에 통합하여 상호작용 가능한 게임화 피드백 시스템을 구축했습니다. 실시간 양방향 서버 통신 백엔드도 구현했습니다.',
    tags: ['ML', 'MediaPipe', 'Backend'],
    links: [
      { label: 'GitHub', href: 'https://github.com/zaeeewang' },
      { label: 'Reference', href: 'https://ai.google.dev/edge/mediapipe/solutions/guide' },
    ],
  },
  {
    period: 'MAR 2026 - JUL 2026',
    title: 'Osteoporosis Prediction via X-ray',
    description:
      '치과 파노라마 X-ray 사진을 활용한 골다공증 예측 시스템. 전체 이미지 내에서 하악 피질, 이공 주변 및 하악각을 자동으로 감지하고, U-net을 기반으로 하악골 자동 분할 파이프라인을 구축했습니다.',
    tags: ['CNN', 'ViT', 'U-Net'],
    links: [
      { label: 'GitHub', href: 'https://github.com/zaeeewang' },
      { label: 'Reference', href: 'https://arxiv.org/abs/1505.04597' },
    ],
  },
]

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readThemePreference(): ThemePreference {
  if (typeof window === 'undefined') {
    return 'system'
  }

  const saved = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (saved === 'light' || saved === 'dark' || saved === 'system') {
    return saved
  }

  return 'system'
}

function SplineViewer({ url, className }: SplineViewerProps) {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${SPLINE_SCRIPT_SRC}"]`)

    if (!existingScript) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = SPLINE_SCRIPT_SRC
      document.head.appendChild(script)
    }
  }, [])

  const handleWheelCapture = (event: WheelEvent<HTMLDivElement>) => {
    if (event.cancelable) {
      event.preventDefault()
    }

    window.scrollBy({
      left: event.deltaX,
      top: event.deltaY,
      behavior: 'auto',
    })
  }

  return (
    <div
      className={`relative spline-scroll-pass ${className ?? ''}`}
      onWheelCapture={handleWheelCapture}
    >
      <spline-viewer url={url}></spline-viewer>
    </div>
  )
}

export default function App() {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() =>
    readThemePreference(),
  )
  const [systemTheme, setSystemTheme] = useState<Theme>(() =>
    typeof window === 'undefined' ? 'dark' : getSystemTheme(),
  )

  const resolvedTheme: Theme = themePreference === 'system' ? systemTheme : themePreference

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themePreference)
  }, [themePreference])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = resolvedTheme
    root.style.colorScheme = resolvedTheme
  }, [resolvedTheme])

  const toggleTheme = () => {
    setThemePreference((previous) => {
      const baseTheme = previous === 'system' ? systemTheme : previous
      return baseTheme === 'dark' ? 'light' : 'dark'
    })
  }

  return (
    <div className="min-h-screen break-keep bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-fg)] transition-colors duration-300">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[var(--border-main)] bg-[var(--nav-bg)] px-6 py-4 backdrop-blur md:px-12">
        <div className="font-english-ui text-xl font-bold tracking-tight text-[var(--text-strong)]">
          Portfolio
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden gap-6 md:flex">
            <a
              href="#about"
              className="font-english-ui text-sm font-semibold tracking-[0.12em] text-[var(--text-main)] transition-colors hover:text-[var(--text-strong)]"
            >
              ABOUT
            </a>
            <a
              href="#experience"
              className="font-english-ui text-sm font-semibold tracking-[0.12em] text-[var(--text-main)] transition-colors hover:text-[var(--text-strong)]"
            >
              EXPERIENCE
            </a>
            <a
              href="#projects"
              className="font-english-ui text-sm font-semibold tracking-[0.12em] text-[var(--text-main)] transition-colors hover:text-[var(--text-strong)]"
            >
              PROJECTS
            </a>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            className="font-english-ui rounded-full border border-[var(--border-main)] px-3 py-1 text-xs font-semibold tracking-[0.14em] text-[var(--text-main)] transition-colors hover:border-[var(--text-strong)] hover:text-[var(--text-strong)]"
          >
            {resolvedTheme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>

          <button
            type="button"
            onClick={() => setThemePreference('system')}
            aria-label="Use system theme"
            aria-pressed={themePreference === 'system'}
            className={`font-english-ui rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] transition-colors ${
              themePreference === 'system'
                ? 'border-[var(--text-strong)] text-[var(--text-strong)]'
                : 'border-[var(--border-main)] text-[var(--text-soft)] hover:border-[var(--text-main)] hover:text-[var(--text-main)]'
            }`}
          >
            AUTO
          </button>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg-main)] px-6 pt-24 md:px-12 md:pt-0">
        <div
          className="absolute right-0 top-0 z-0 flex h-full w-full cursor-grab items-center justify-center opacity-90 active:cursor-grabbing md:w-[80%]"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, var(--spline-mask-solid) 25%, var(--spline-mask-solid) 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, var(--spline-mask-solid) 25%, var(--spline-mask-solid) 100%)',
          }}
        >
          <SplineViewer
            url="https://prod.spline.design/GinCz5XdizMHBrvQ/scene.splinecode"
            className="h-full w-full scale-110 transform transition-transform duration-700 md:scale-125"
          />
        </div>

        <div className="pointer-events-none relative z-10 mt-12 flex w-full flex-col items-start text-left md:mt-0 md:w-1/2">
          <h1 className="pointer-events-auto font-inter-display text-5xl font-black leading-tight text-[var(--text-strong)] md:text-7xl">
            JAEWANG LEE <br />
            <span className="font-inter-display text-4xl font-black text-[var(--text-soft)] md:text-6xl">
              Portfolio
            </span>
          </h1>
          <p className="pointer-events-auto mt-6 font-english-ui text-lg font-semibold tracking-wide text-[var(--text-main)] md:text-xl">
            Medical AI &amp; Software Engineer
          </p>
          <p className="pointer-events-auto mt-4 max-w-md text-sm font-normal text-[var(--text-muted)] md:text-base">
            데이터와 인공지능을 통해 의료 기술의 새로운 가능성을 탐구하고,
            <br className="hidden md:block" />
            사람을 향하는 유의미한 엔지니어링을 실현합니다.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-[var(--text-soft)] md:block">
          <ArrowDown size={32} strokeWidth={1} />
        </div>
      </section>

      <section id="about" className="bg-[var(--bg-soft)] px-6 py-32 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-inter-section mb-16 border-b border-[var(--border-main)] pb-8 text-3xl font-bold tracking-tight text-[var(--text-strong)] md:text-5xl">
            RESEARCH INTERESTS
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col gap-4">
              <div className="font-english-ui text-4xl font-medium text-[var(--text-strong)]">01</div>
              <h3 className="font-inter-title text-xl font-bold text-[var(--text-strong)]">
                Medical Image Analysis
              </h3>
              <p className="text-sm text-[var(--text-muted)] md:text-base">
                Computer-Aided Diagnosis (CAD), 해부학적 정보를 반영한 모델링, 그리고 의료
                현장에서 신뢰할 수 있는 설명 가능한 AI(Explainable AI)를 연구합니다.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-english-ui text-4xl font-medium text-[var(--text-strong)]">02</div>
              <h3 className="font-inter-title text-xl font-bold text-[var(--text-strong)]">Agent AI</h3>
              <p className="text-sm text-[var(--text-muted)] md:text-base">
                복잡한 의료 기록 및 진단 파이프라인을 자동화하여 의료진의 워크플로우를
                혁신하는 지능형 Agent 시스템을 설계합니다.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-english-ui text-4xl font-medium text-[var(--text-strong)]">03</div>
              <h3 className="font-inter-title text-xl font-bold text-[var(--text-strong)]">
                Time Series Prediction
              </h3>
              <p className="text-sm text-[var(--text-muted)] md:text-base">
                KAN(Kolmogorov-Arnold Networks)을 활용하여 심혈관 질환(CVD) 유병률과 같은
                복잡한 시계열 임상 데이터를 예측하고 분석합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-[var(--border-main)] bg-[var(--bg-main)] px-6 py-32 md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-inter-section mb-16 border-b border-[var(--border-main)] pb-8 text-3xl font-bold tracking-tight text-[var(--text-strong)] md:text-5xl">
            EXPERIENCE &amp; EDUCATION
          </h2>

          <div className="space-y-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
              <div className="text-[var(--text-muted)] md:col-span-4">
                <span className="font-inter-title block text-lg font-bold text-[var(--text-strong)]">
                  BMAI Lab, Ajou Univ.
                </span>
                <span className="font-english-ui mt-2 block text-sm font-medium">
                  Mar. 2026 - Present
                </span>
                <span className="font-english-ui mt-1 block text-sm font-medium">Research Intern</span>
              </div>
              <div className="space-y-6 md:col-span-8">
                <p className="text-[var(--text-main)]">
                  <strong className="font-bold text-[var(--text-strong)]">
                    PLADP (PHI Latent Access Detection Protocol) 제안:
                  </strong>
                  <br />
                  의료 AI 에이전트가 내부적으로 개인건강정보(PHI)를 인코딩하는지 감지하는
                  블랙박스 프레임워크를 개발하고, 합성 PHI 데이터셋을 활용해 RAG 기반 진단
                  에이전트에 대한 체계적인 레드팀(Red-team) 평가를 수행했습니다.
                </p>
                <p className="text-[var(--text-main)]">
                  <strong className="font-bold text-[var(--text-strong)]">
                    CVD 임상 점수 평가 파이프라인:
                  </strong>
                  <br />
                  데이터 전처리, 모델 아키텍처, 평가 프로토콜을 포함한 전체 파이프라인 실험을
                  설계하여, KAN 기반 스플라인 계수와 기존 심혈관 질환 임상 점수(Framingham
                  Risk Score, QRISK3) 간의 일치성을 검증했습니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
              <div className="text-[var(--text-muted)] md:col-span-4">
                <span className="font-inter-title block text-lg font-bold text-[var(--text-strong)]">
                  Ajou University
                </span>
                <span className="font-english-ui mt-2 block text-sm font-medium">
                  Mar. 2022 - Aug. 2027
                </span>
              </div>
              <div className="space-y-4 md:col-span-8">
                <div>
                  <h4 className="font-inter-title text-lg font-bold text-[var(--text-strong)]">
                    B.S. in Software and Computer Engineering
                  </h4>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--text-muted)]">
                    <li>Overall GPA: 3.95 / 4.5</li>
                    <li>Major GPA: 4.0 / 4.5</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <h4 className="font-inter-title text-lg font-bold text-[var(--text-strong)]">
                    Micro degree in Medical Artificial Intelligence
                  </h4>
                  <p className="font-english-ui mt-2 text-sm font-medium text-[var(--text-muted)]">
                    Sep. 2026 - Aug. 2027
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="px-6 py-32 md:px-12"
        style={{
          backgroundImage: 'linear-gradient(to bottom, var(--bg-main), var(--bg-soft))',
        }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-inter-section mb-16 border-b border-[var(--border-main)] pb-8 text-3xl font-bold tracking-tight text-[var(--text-strong)] md:text-5xl">
            SELECTED PROJECTS
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between border border-[var(--border-main)] bg-[var(--bg-card)] p-8 transition-colors hover:border-[var(--text-soft)] md:p-12"
              >
                <div>
                  <div className="font-english-ui mb-4 text-xs font-semibold text-[var(--text-soft)]">
                    {project.period}
                  </div>
                  <h3 className="font-inter-title mb-4 text-2xl font-bold text-[var(--text-strong)]">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-[var(--text-muted)]">{project.description}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="border border-[var(--border-main)] bg-[var(--bg-chip)] px-3 py-1 font-english-ui text-xs font-medium text-[var(--text-main)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border-main)] pt-5">
                    {project.links.map((link) => (
                      <a
                        key={`${project.title}-${link.label}-${link.href}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-english-ui rounded-full border border-[var(--border-main)] px-3 py-1 text-xs font-semibold tracking-[0.1em] text-[var(--text-main)] transition-colors hover:border-[var(--text-strong)] hover:text-[var(--text-strong)]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative flex flex-col items-center justify-center overflow-hidden border-t border-[var(--border-main)] bg-[var(--bg-main)] px-6 py-24 text-center md:px-12">
        <div className="z-10 flex flex-col gap-8 md:flex-row">
          <a
            href="mailto:jaewang1535@ajou.ac.kr"
            className="flex items-center gap-3 text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
          >
            <Mail size={20} />
            <span className="font-english-ui text-lg font-medium">jaewang1535@ajou.ac.kr</span>
          </a>
          <a
            href="https://github.com/zaeeewang"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
          >
            <CodeXml size={20} />
            <span className="font-english-ui text-lg font-medium">github.com/zaeeewang</span>
          </a>
          <div className="flex items-center gap-3 text-[var(--text-muted)]">
            <Phone size={20} />
            <span className="font-english-ui text-lg font-medium">+82) 10-9548-1535</span>
          </div>
        </div>

        <div className="font-english-ui mt-20 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-soft)]">
          © 2026 Jaewang Lee. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
