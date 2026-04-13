export function ThemeScript() {
  const code = `(function(){const root=document.documentElement;const systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;root.setAttribute('data-theme',systemDark?'dark':'light');})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}