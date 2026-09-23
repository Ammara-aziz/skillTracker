import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-indigo-600">
            JobReady AI
          </h1>

          <div className="flex gap-3">
            <a
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-20 text-center">

        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          AI-powered career planning
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Turn your skills into a
          <span className="text-indigo-600"> job-ready career.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
          Analyze your target job, discover skill gaps, build a personalized
          roadmap, and track your progress in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/register"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Start Your Journey
          </a>

          <a
            href="/login"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 hover:bg-slate-50"
          >
            Sign In
          </a>
        </div>

      </main>
    </div>
  )
}

export default Home
