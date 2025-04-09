import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b py-4">
        <div className="mx-auto flex items-center justify-between px-4 container">
          <div className="flex items-center gap-2">
            <div className="i-solar:planet-bold text-2xl text-primary" />
            <h1 className="text-xl font-bold">React Stack</h1>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li><a href="https://github.com" className="text-muted-foreground transition-colors hover:text-foreground">GitHub</a></li>
              <li><a href="https://docs.com" className="text-muted-foreground transition-colors hover:text-foreground">Docs</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex-1 px-4 py-12 container">
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-8 text-center">
          <div className="i-solar:rocket-bold text-8xl text-primary" />

          <h2 className="text-4xl font-bold tracking-tight">Welcome to your React Stack</h2>

          <p className="max-w-2xl text-xl text-muted-foreground">
            A modern React template with TypeScript, UnoCSS, and shadcn components.
            Start building your application with this pre-configured stack.
          </p>

          <div className="grid grid-cols-1 mt-8 w-full gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2 border rounded-lg bg-card p-6 text-center">
              <span className="i-solar:lightning-bold text-3xl text-primary" />
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="text-muted-foreground">Optimized for speed and efficiency</p>
            </div>
            <div className="flex flex-col items-center gap-2 border rounded-lg bg-card p-6 text-center">
              <span className="i-solar:shield-check-bold text-3xl text-primary" />
              <h3 className="text-lg font-semibold">TypeScript</h3>
              <p className="text-muted-foreground">Type-safe development experience</p>
            </div>
            <div className="flex flex-col items-center gap-2 border rounded-lg bg-card p-6 text-center">
              <span className="i-solar:widget-bold text-3xl text-primary" />
              <h3 className="text-lg font-semibold">Components</h3>
              <p className="text-muted-foreground">Reusable UI components built-in</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="mx-auto px-4 text-center text-muted-foreground container">
          <p>Built with React, Vite, UnoCSS, and shadcn components</p>
        </div>
      </footer>
    </div>
  )
}

export default App
