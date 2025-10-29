export function SocialBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
      <a href="https://twitter.com/b_hantsi" target="_blank" rel="noopener noreferrer" className="max-w-xs sm:max-w-none">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" className="h-auto w-full" />
      </a>
      <a href="https://linkedin.com/in/bala-hantsi" target="_blank" rel="noopener noreferrer" className="max-w-xs sm:max-w-none">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" className="h-auto w-full" />
      </a>
      <a href="https://dev.to/bhantsi" target="_blank" rel="noopener noreferrer" className="max-w-xs sm:max-w-none">
        <img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="Dev.to" className="h-auto w-full" />
      </a>
    </div>
  );
}
