export function ProfileBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
      <img src="https://img.shields.io/badge/Open%20Source-Advocate-00D084?style=for-the-badge&logo=github&logoColor=white" alt="Open Source Advocate" className="h-auto max-w-xs" />
      <img src="https://img.shields.io/badge/OSCA-Chapter%20Lead-0072B1?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="OSCA" className="h-auto max-w-xs" />
      <img src="https://img.shields.io/badge/CHAOSS-Contributor-blueviolet?style=for-the-badge&logo=chaoss&logoColor=white" alt="CHAOSS" className="h-auto max-w-xs" />
    </div>
  );
}
