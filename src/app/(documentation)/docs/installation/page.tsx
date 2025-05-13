export default function Page() {
    return (
        <div>
            <section id="installation">
  <h1 className="text-3xl font-bold mb-4">Installation</h1>
  <p className="mb-4">
    To get started with the component library, run the following command in your project:
  </p>
  <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
    <code>npx shadcn-ui@latest init</code>
  </pre>
</section>

<section id="prerequisites">
  <h2 className="text-2xl font-semibold mt-10 mb-4">Prerequisites</h2>
  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
    <li>React 18 or newer</li>
    <li>Next.js 13+ (App Router)</li>
    <li>Tailwind CSS</li>
    <li>TypeScript</li>
  </ul>
</section>

<section id="commands">
  <h2 className="text-2xl font-semibold mt-10 mb-4">Usage Commands</h2>
  <p className="mb-2">To add components from the library:</p>
  <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
    <code>npx shadcn-ui@latest add button</code>
  </pre>
  <p className="mt-4">
    Replace <code>button</code> with the name of any component you&apos;d like to add.
  </p>
</section>

        </div>
    )
}