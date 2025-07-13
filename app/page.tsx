export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      </div>
      
      <div className="relative flex place-items-center">
        <h2 className="text-2xl font-semibold">
          Your Next.js project is running successfully!
        </h2>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">
            Docs
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">
            Learn
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">
            Templates
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">
            Deploy
          </h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL.
          </p>
        </div>
      </div>
    </main>
  )
}