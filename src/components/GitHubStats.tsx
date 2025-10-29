import { TerminalSection } from './TerminalSection';
import { CommandLine } from './CommandLine';
import { CommandOutput } from './CommandOutput';

export function GitHubStats() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6 sm:mt-8 md:mt-12 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0">
      <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 md:p-6 border border-[#2d2d2d]">
        <div className="font-mono text-xs sm:text-sm mb-4 sm:mb-6">
          <CommandLine
            username="bala"
            host="osca"
            command="github-stats --user bhantsi --detailed"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 space-y-1 text-[#61afef]">
              <div>Fetching GitHub statistics...</div>
              <div>Analyzing contributions...</div>
              <div>Generating visualizations...</div>
            </div>
          </CommandOutput>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=bhantsi&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&text_color=C9D1D9&ring_color=58A6FF"
            alt="GitHub Stats"
            className="w-full h-auto"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=bhantsi&layout=compact&langs_count=8&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9"
            alt="Top Languages"
            className="w-full h-auto"
          />
        </div>

        <div className="font-mono text-xs sm:text-sm mb-2 sm:mb-4">
          <CommandLine
            username="bala"
            host="osca"
            command="github-streak --user bhantsi"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-[#61afef]">Loading streak data...</div>
          </CommandOutput>
        </div>

        <div className="mb-4 sm:mb-6">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=bhantsi&theme=tokyonight&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B6B&currStreakLabel=C9D1D9&sideNums=C9D1D9&currStreakNum=C9D1D9&dates=8B949E&sideLabels=C9D1D9"
            alt="GitHub Streak"
            className="w-full h-auto"
          />
        </div>

        <div className="font-mono text-xs sm:text-sm mb-2 sm:mb-4">
          <CommandLine
            username="bala"
            host="osca"
            command="github-activity-graph --theme tokyo-night"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-[#61afef]">Rendering contribution graph...</div>
          </CommandOutput>
        </div>

        <div>
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=bhantsi&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=58A6FF&line=1F6FEB&point=58A6FF"
            alt="Contribution Graph"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
