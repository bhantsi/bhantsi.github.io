import { CommandLine } from './CommandLine';
import { CommandOutput } from './CommandOutput';

export function GitHubTrophies() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0">
      <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 md:p-6 border border-[#2d2d2d]">
        <div className="font-mono text-xs sm:text-sm mb-2 sm:mb-4">
          <CommandLine
            username="bala"
            host="osca"
            command="display-trophies --all"
            delay={0}
          />
          <CommandOutput delay={200}>
            <div className="mt-2 text-[#61afef]">Unlocking achievements...</div>
          </CommandOutput>
        </div>

        <div className="flex justify-center overflow-x-auto">
          <img
            src="https://github-profile-trophy.vercel.app/?username=bhantsi&theme=tokyonight&no-frame=true&no-bg=true&column=4&margin-w=5&margin-h=5"
            alt="GitHub Trophies"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
