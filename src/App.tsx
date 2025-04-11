import { Button } from '@/components/ui/button'
import { useState } from 'react'
import packageJson from '../package.json'

function App() {
  const [count, setCount] = useState(0)

  const getVersion = (name: string) => name.replace('^', '')
  const getPackageManager = (name: string) => name.split('@')[1]

  const techStack = [
    { name: 'React', version: getVersion(packageJson.dependencies.react) },
    { name: 'TypeScript', version: getVersion(packageJson.devDependencies.typescript) },
    { name: 'Vite', version: getVersion(packageJson.devDependencies.vite) },
    { name: 'Bun', version: getPackageManager(packageJson.packageManager) },
    { name: 'UnoCSS', version: getVersion(packageJson.devDependencies.unocss) },
    { name: 'ESLint (antfu)', version: getVersion(packageJson.devDependencies.eslint) },
    { name: 'Shadcn UI' },
    { name: 'Iconify' },
    { name: 'Fontsource' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center gap-15 bg-background p-8">
      <h1 className="flex items-center gap-2 text-4xl font-bold">
        <span className="i-solar:star-bold text-primary"></span>
        React
      </h1>

      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl font-medium">
          Count:
          {' '}
          {count}
        </p>
        <Button className="text-lg" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </div>

      <div className="w-fit">
        <h2 className="mb-4 text-center text-2xl font-bold">Tech</h2>
        <ul className="flex flex-col items-start gap-2">
          {techStack.map(tech => (
            <li key={tech.name} className="flex items-center gap-2">
              <span className="i-solar:check-circle-bold text-primary"></span>
              {tech.name}
              {tech.version ? ` - v${tech.version}` : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
