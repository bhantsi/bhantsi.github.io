import { CommandLine } from './CommandLine';
import { CommandOutput } from './CommandOutput';

export function GitHubTrophies() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="bg-[#1e1e1e] rounded-lg p-6 border border-[#2d2d2d]">
        <div className="font-mono text-sm mb-4">
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

        <div className="flex justify-center">
          <img 
            src="https://github-profile-trophy.vercel.app/?username=bhantsi&theme=tokyonight&no-frame=true&no-bg=true&column=7&margin-w=15&margin-h=15" 
            alt="GitHub Trophies"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
