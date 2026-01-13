export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between text-sm text-neutral-400">
        <span>© {new Date().getFullYear()} ttOS</span>
        <span>AI Infrastructure for Global Tech Transfer</span>
      </div>
    </footer>
  )
}
