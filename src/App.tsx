import { TerminalWindow } from './components/TerminalWindow';
import { CommandLine } from './components/CommandLine';
import { CommandOutput } from './components/CommandOutput';
import { TerminalSection } from './components/TerminalSection';
import { TypingHeader } from './components/TypingHeader';
import { SocialBadges } from './components/SocialBadges';
import { ProfileBadges } from './components/ProfileBadges';
import { StatsWidgets } from './components/StatsWidgets';
import { GitHubStats } from './components/GitHubStats';
import { GitHubTrophies } from './components/GitHubTrophies';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Hero GIF - Mobile First */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <img
          src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"
          alt="Coding Animation"
          className="mx-auto rounded-lg shadow-2xl max-w-full h-auto object-cover"
          style={{ maxHeight: 'clamp(150px, 50vw, 400px)', width: 'auto' }}
        />
      </div>

      {/* Animated Header */}
      <TypingHeader />

      {/* Social Badges */}
      <SocialBadges />

      {/* Profile Badges */}
      <ProfileBadges />

      {/* Stats Widgets */}
      <StatsWidgets />

      {/* Separator */}
      <div className="max-w-5xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Main Terminal - About Me */}
      <TerminalWindow>
        {/* Whoami */}
        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="whoami"
            delay={100}
          />
          <CommandOutput delay={300}>
            <div className="mt-2">
              <span className="text-[#61dafb]">👨‍💻 Bala Hantsi</span>
            </div>
          </CommandOutput>
        </TerminalSection>

        {/* About Me */}
        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="cat about_me.txt"
            delay={600}
          />
          <CommandOutput delay={800}>
            <div className="mt-2 space-y-1 text-xs sm:text-sm">
              <div>Terminal-Driven Developer | Open Source Advocate | Community Builder</div>
              <div className="mt-2">
                I live in the terminal — where every keystroke matters, every alias has a purpose,
              </div>
              <div>
                and automation meets accessibility. My passion lies at the intersection of
              </div>
              <div>
                efficiency, inclusion, and clean code.
              </div>
            </div>
          </CommandOutput>
        </TerminalSection>

        {/* Current Focus */}
        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="cat current_focus.txt"
            delay={1100}
          />
          <CommandOutput delay={1300}>
            <div className="mt-2 space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[#61dafb] flex-shrink-0">🔭</span>
                <span>Building accessible open source tools & communities</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#98c379] flex-shrink-0">🌱</span>
                <span>Championing DEI (Diversity, Equity & Inclusion) in tech</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#e5c07b] flex-shrink-0">💡</span>
                <span>Empowering PWDs (Persons with Disabilities) in open source</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c678dd] flex-shrink-0">👨‍🏫</span>
                <span>Mentoring developers in Git workflows & best practices</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#e06c75] flex-shrink-0">⚡</span>
                <span>Automating everything that can be automated</span>
              </div>
            </div>
          </CommandOutput>
        </TerminalSection>

        {/* Leadership */}
        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="ls -l leadership/"
            delay={1600}
          />
          <CommandOutput delay={1800}>
            <div className="mt-2 space-y-0.5 text-xs overflow-x-auto">
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-[#56b6c2]">drwxr-xr-x</span>
                <span className="text-[#d19a66]">2</span>
                <span className="text-[#98c379]">bala</span>
                <span className="text-[#98c379]">osca</span>
                <span className="text-[#d19a66]">4096</span>
                <span className="text-[#e5c07b]">Oct 22 2025</span>
                <span className="text-[#61dafb]">OSCA/</span>
              </div>
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-[#56b6c2]">-rw-r--r--</span>
                <span className="text-[#d19a66]">1</span>
                <span className="text-[#98c379]">bala</span>
                <span className="text-[#98c379]">osca</span>
                <span className="text-[#d19a66]">256</span>
                <span className="text-[#e5c07b]">Oct 22 2025</span>
                <span>chapter-lead.txt</span>
              </div>
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-[#56b6c2]">drwxr-xr-x</span>
                <span className="text-[#d19a66]">2</span>
                <span className="text-[#98c379]">bala</span>
                <span className="text-[#98c379]">osca</span>
                <span className="text-[#d19a66]">4096</span>
                <span className="text-[#e5c07b]">Oct 22 2025</span>
                <span className="text-[#61dafb]">CHAOSS/</span>
              </div>
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-[#56b6c2]">-rw-r--r--</span>
                <span className="text-[#d19a66]">1</span>
                <span className="text-[#98c379]">bala</span>
                <span className="text-[#98c379]">osca</span>
                <span className="text-[#d19a66]">512</span>
                <span className="text-[#e5c07b]">Oct 22 2025</span>
                <span>contributor-maintainer.md</span>
              </div>
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-[#56b6c2]">-rw-r--r--</span>
                <span className="text-[#d19a66]">1</span>
                <span className="text-[#98c379]">bala</span>
                <span className="text-[#98c379]">osca</span>
                <span className="text-[#d19a66]">128</span>
                <span className="text-[#e5c07b]">Oct 22 2025</span>
                <span>chaosscast-speaker.log</span>
              </div>
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="text-[#56b6c2]">-rw-r--r--</span>
                <span className="text-[#d19a66]">1</span>
                <span className="text-[#98c379]">bala</span>
                <span className="text-[#98c379]">osca</span>
                <span className="text-[#d19a66]">384</span>
                <span className="text-[#e5c07b]">Oct 22 2025</span>
                <span>accessibility-advocate.sh</span>
              </div>
            </div>
          </CommandOutput>
        </TerminalSection>

        {/* Community Roles */}
        <TerminalSection>
          <div className="text-center mt-4 mb-4 text-xs sm:text-base">
            <span className="text-[#98c379]">🌍 Community Roles: </span>
            <a href="https://oscafrica.org" target="_blank" rel="noopener noreferrer" className="text-[#61dafb] hover:underline break-words">
              OSCA Chapter Lead
            </a>
            <span className="text-[#8b8b8b]"> • </span>
            <a href="https://chaoss.community" target="_blank" rel="noopener noreferrer" className="text-[#61dafb] hover:underline break-words">
              CHAOSS Contributor
            </a>
            <span className="text-[#8b8b8b]"> • </span>
            <span className="text-[#e5c07b]">Accessibility Advocate</span>
          </div>
        </TerminalSection>
      </TerminalWindow>

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Tech Stack Terminal */}
      <TerminalWindow>
        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="ls tech_stack/languages/"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-xs sm:text-sm space-y-1">
              <div>💻 JavaScript · TypeScript · Python</div>
              <div>🔧 C · C++ · Java · Rust</div>
              <div>🐚 Bash · Shell Scripting</div>
            </div>
          </CommandOutput>
        </TerminalSection>

        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="cat tech_stack/frontend.txt"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-xs sm:text-sm space-y-1">
              <div>⚛️  React · Next.js · Angular · Vue.js · Nuxt.js</div>
              <div>🎨 TailwindCSS · Bootstrap · Sass · Materialize</div>
              <div>🔄 Redux · React Native</div>
            </div>
          </CommandOutput>
        </TerminalSection>

        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="cat tech_stack/backend.txt"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-xs sm:text-sm space-y-1">
              <div>🟢 Node.js · Express.js</div>
              <div>🐍 Django · Flask</div>
              <div>💎 Ruby on Rails</div>
            </div>
          </CommandOutput>
        </TerminalSection>

        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="ls tech_stack/databases/"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-xs sm:text-sm space-y-1">
              <div>🐘 PostgreSQL</div>
              <div>🍃 MongoDB</div>
              <div>🐬 MySQL · MariaDB</div>
              <div>📦 SQLite</div>
            </div>
          </CommandOutput>
        </TerminalSection>

        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="ls tech_stack/devops-tools/"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-xs sm:text-sm space-y-1">
              <div>🐳 Docker</div>
              <div>🔥 Firebase</div>
              <div>☁️  AWS · Google Cloud · Heroku</div>
              <div>🌐 Nginx</div>
              <div>📦 Git · GitHub</div>
            </div>
          </CommandOutput>
        </TerminalSection>

        <TerminalSection className="mb-0">
          <CommandLine
            username="bala"
            host="osca"
            command="echo $CLI_POWER_TOOLS"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-xs sm:text-sm space-y-1">
              <div>🚀 Zsh · Oh My Zsh · fzf · eza · zoxide · neofetch · tmux</div>
              <div>🎯 Aliases: ll · gst · gh-feed</div>
              <div>⚙️  Package Managers: npm · pip · sudo</div>
              <div>🔄 Git-native with clean commit hygiene</div>
            </div>
          </CommandOutput>
        </TerminalSection>
      </TerminalWindow>

      {/* Tech Icons - Responsive */}
      <div className="text-center my-6 sm:my-8 md:my-10 overflow-x-auto">
        <img
          src="https://skillicons.dev/icons?i=js,ts,nodejs,python,react,nextjs,angular,vue,django,flask,postgres,mongodb,mysql,docker,git,linux,aws,firebase&perline=4"
          alt="Tech Stack"
          className="mx-auto max-w-full"
        />
      </div>

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Featured Projects Terminal */}
      <TerminalWindow>
        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="tree ~/projects/"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 space-y-1 text-xs overflow-x-auto">
              <div className="text-[#61dafb]">~/projects/</div>
              <div className="flex gap-1">
                <span className="text-[#8b8b8b] flex-shrink-0">├──</span>
                <span className="text-[#e5c07b]">gh-feed/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   ├──</span>
                <span>README.md</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   ├──</span>
                <span>pyproject.toml</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   └──</span>
                <span className="text-[#e5c07b]">src/</span>
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                CLI tool that fetches and displays recent GitHub activities
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                right from the terminal.
              </div>
              <div className="pl-8 text-[#61dafb] text-xs">
                Tech: Python, CLI, GitHub API, PyPI
              </div>
              <div className="mt-2 flex gap-1">
                <span className="text-[#8b8b8b] flex-shrink-0">├──</span>
                <span className="text-[#e5c07b]">gwani-cli/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   ├──</span>
                <span>README.md</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   ├──</span>
                <span>Makefile</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   └──</span>
                <span className="text-[#e5c07b]">src/</span>
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                A command-line interface for accessing Quranic verses
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                and translations with elegant formatting and caching.
              </div>
              <div className="pl-8 text-[#61dafb] text-xs">
                Tech: Python, Shell, Makefile, PyPI
              </div>
              <div className="mt-2 flex gap-1">
                <span className="text-[#8b8b8b] flex-shrink-0">├──</span>
                <span className="text-[#e5c07b]">maaji-platform/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   ├──</span>
                <span className="text-[#e5c07b]">frontend/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   ├──</span>
                <span className="text-[#e5c07b]">backend/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">│   └──</span>
                <span className="text-[#e5c07b]">database/</span>
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                Inventory management & admin dashboard for small businesses
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                to track stock, manage operations, and visualize data.
              </div>
              <div className="pl-8 text-[#61dafb] text-xs">
                Tech: React, Node.js, PostgreSQL
              </div>
              <div className="mt-2 flex gap-1">
                <span className="text-[#8b8b8b] flex-shrink-0">└──</span>
                <span className="text-[#e5c07b]">savatech.com.ng/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">    ├──</span>
                <span className="text-[#e5c07b]">pages/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">    ├──</span>
                <span className="text-[#e5c07b]">components/</span>
              </div>
              <div className="flex gap-1 pl-4">
                <span className="text-[#8b8b8b] flex-shrink-0">    └──</span>
                <span className="text-[#e5c07b]">styles/</span>
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                Professional business website for a tech solutions company
              </div>
              <div className="pl-8 text-[#8b8b8b] text-xs">
                — fast, responsive, and accessible.
              </div>
              <div className="pl-8 text-[#61dafb] text-xs">
                Tech: Next.js, TailwindCSS, Vercel
              </div>
            </div>
          </CommandOutput>
        </TerminalSection>
      </TerminalWindow>

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Community Impact Terminal */}
      <TerminalWindow>
        <TerminalSection>
          <CommandLine
            username="bala"
            host="osca"
            command="cat community_activities.log"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 space-y-1 text-xs">
              <div>[2024-10-15] 🎙️  Featured on CHAOSScast Podcast</div>
              <div>[2024-09-20] 🧑‍🏫 Mentored 50+ developers in Git, GitHub, and open source workflows</div>
              <div>[2024-08-10] ♿ Hosted inclusive open source event for Persons with Disabilities</div>
              <div>[2024-07-05] 📢 Delivered talk on DEI in Open Source at OSCA Summit</div>
              <div>[2024-06-12] 🤝 Onboarded 30+ new contributors to CHAOSS community</div>
              <div>[2024-05-01] 🌱 Launched accessibility initiative for OSCA chapter</div>
            </div>
          </CommandOutput>
        </TerminalSection>

        <TerminalSection className="mb-0">
          <CommandLine
            username="bala"
            host="osca"
            command="echo $COMMUNITY_STATS"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 space-y-1 text-xs sm:text-sm">
              <div>📊 Events Organized: 15+</div>
              <div>👥 Developers Mentored: 100+</div>
              <div>🎤 Talks Delivered: 8</div>
              <div>🌟 Contributors Onboarded: 50+</div>
              <div>♿ PWD Inclusion Events: 3</div>
            </div>
          </CommandOutput>
        </TerminalSection>
      </TerminalWindow>

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Philosophy Terminal */}
      <TerminalWindow>
        <TerminalSection className="mb-0">
          <CommandLine
            username="bala"
            host="osca"
            command="cat ~/.philosophy.txt"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-4 border-2 border-[#58A6FF] rounded-lg p-4 sm:p-6">
              <div className="text-center mb-2 sm:mb-4 text-[#61dafb] text-xs sm:text-sm">
                ╔═══════════════════════════════════════════════════════════════╗
              </div>
              <div className="text-center mb-2 sm:mb-4 text-[#61dafb] text-xs sm:text-sm">
                ║                    MY DEVELOPMENT MANTRA                      ║
              </div>
              <div className="text-center mb-4 sm:mb-6 text-[#61dafb] text-xs sm:text-sm">
                ╚═══════════════════════════════════════════════════════════════╝
              </div>

              <div className="space-y-3 text-xs sm:text-base">
                <div>💻 I build, break, and rebuild — all from the command line.</div>
                <div className="mt-3">
                  🤝 Open source isn't just collaboration — it's community,
                </div>
                <div className="pl-4">
                  accessibility, and shared purpose.
                </div>
                <div className="mt-3 text-[#98c379]">
                  💚 "Inclusive open source isn't a feature — it's the foundation."
                </div>
                <div className="mt-3">
                  ⚡ Automate the boring. Optimize the essential. Document everything.
                </div>
                <div className="mt-3">
                  🌍 Code for humans first, machines second.
                </div>
              </div>
            </div>
          </CommandOutput>
        </TerminalSection>
      </TerminalWindow>

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* GitHub Statistics */}
      <GitHubStats />

      {/* GitHub Trophies */}
      <GitHubTrophies />

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Blog Posts Terminal */}
      <TerminalWindow>
        <TerminalSection className="mb-0">
          <CommandLine
            username="bala"
            host="osca"
            command="fetch-blog-posts --source dev.to --limit 5"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 space-y-1 text-xs sm:text-sm">
              <div className="text-[#61afef]">Fetching latest articles...</div>
              <div className="text-[#61afef]">Source: dev.to/bhantsi</div>
              <div className="mt-4 text-center text-[#8b8b8b] italic">
                ⚡ Stay tuned for more content on open source, DEI in tech, and developer productivity!
              </div>
            </div>
          </CommandOutput>
        </TerminalSection>
      </TerminalWindow>

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Support Terminal */}
      <TerminalWindow>
        <TerminalSection className="mb-0">
          <CommandLine
            username="bala"
            host="osca"
            command="cat support.txt"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 space-y-2 text-xs sm:text-sm">
              <div>If you find my work valuable and want to support what I do:</div>
              <div className="mt-3 space-y-1">
                <div>☕ Buy me a coffee</div>
                <div>⭐ Star my repositories</div>
                <div>🤝 Contribute to my projects</div>
                <div>📢 Share my content</div>
                <div>💬 Engage with the community</div>
              </div>
              <div className="text-center mt-6">
                <a href="https://www.buymeacoffee.com/bhantsi" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                    className="inline-block"
                    style={{ height: 'auto', width: '100%', maxWidth: '210px' }}
                  />
                </a>
              </div>
            </div>
          </CommandOutput>
        </TerminalSection>
      </TerminalWindow>

      {/* Separator */}
      <div className="max-w-5xl mx-auto my-4 sm:my-6 md:my-8 lg:my-12 px-2 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#58A6FF] to-transparent"></div>
      </div>

      {/* Footer Terminal */}
      <TerminalWindow>
        <TerminalSection className="mb-0">
          <CommandLine
            username="bala"
            host="osca"
            command='figlet "Thank You!"'
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-[#61dafb] text-xs">
              <pre className="whitespace-pre overflow-x-auto text-xs sm:text-sm">
                {` _____ _                 _      __   __          _ 
|_   _| |__   __ _ _ __ | | __  \\ \\ / /__  _   _| |
  | | | '_ \\ / _\` | '_ \\| |/ /   \\ V / _ \\| | | | |
  | | | | | | (_| | | | |   <     | | (_) | |_| |_|
  |_| |_| |_|\\__,_|_| |_|_|\\_\\    |_|\\___/ \\__,_(_)`}
              </pre>
            </div>
          </CommandOutput>

          <div className="mt-4 sm:mt-6">
            <CommandLine
              username="bala"
              host="osca"
              command='echo "Made with ❤️ by Bala Hantsi"'
              delay={0}
            />
            <CommandOutput delay={200}>
              <div className="mt-2 text-xs sm:text-sm">Made with ❤️ by Bala Hantsi</div>
            </CommandOutput>
          </div>

          <div className="mt-4 sm:mt-6">
            <CommandLine
              username="bala"
              host="osca"
              command="cat signature.txt"
              delay={0}
            />
            <CommandOutput delay={200}>
              <div className="mt-2 text-xs sm:text-sm">
                <div>"Building accessible, inclusive, and community-driven open source</div>
                <div className="pl-1">— one commit at a time."</div>
              </div>
            </CommandOutput>
          </div>

          <div className="mt-4 sm:mt-6">
            <CommandLine
              username="bala"
              host="osca"
              command="exit"
              delay={0}
            />
            <CommandOutput delay={200}>
              <div className="mt-2 text-[#e5c07b] text-xs sm:text-sm">👋 Until next time, keep coding and stay curious!</div>
            </CommandOutput>
          </div>
        </TerminalSection>
      </TerminalWindow>

      {/* Bottom Wave */}
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <img
          src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg"
          alt="Bottom Wave"
          className="w-full"
        />
      </div>
    </div>
  );
}
