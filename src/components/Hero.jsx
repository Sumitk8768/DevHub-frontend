import React from 'react'

const Hero = () => {
  return (
    <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
           

            <h1 className="max-w-xl text-5xl font-black leading-tight md:text-7xl">
              Build. Share.
              <br />
              <span style={{ color: "var(--accent)" }}>Connect.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              The elite ecosystem where technical precision meets high-fidelity
              social networking. Architect your future with the world’s most
              talented developers.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button
                className="rounded-2xl px-7 py-4 font-semibold text-black transition hover:scale-105"
                style={{ background: "var(--accent)" }}
              >
                Explore Projects
              </button>

              <button
                className="rounded-2xl border px-7 py-4 font-semibold transition"
                style={{
                  borderColor: "var(--border-color)",
                  background: "var(--card-bg)",
                }}
              >
                Create Portfolio
              </button>
            </div>
          </div>

          <div
            className="rounded-4xl border p-8"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="flex h-64 items-end justify-between gap-4">
              {[35, 65, 85, 55, 72].map((height, index) => (
                <div
                  key={index}
                  className="w-full rounded-t-2xl"
                  style={{
                    height: `${height}%`,
                    background:
                      index === 2
                        ? "var(--accent)"
                        : "rgba(60, 242, 227, 0.45)",
                  }}
                />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl border p-5"
                style={{
                  borderColor: "var(--border-color)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Contributions
                </p>

                <h3 className="mt-2 text-3xl font-bold">1284</h3>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{
                  borderColor: "var(--border-color)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Reputation
                </p>

                <h3
                  className="mt-2 text-3xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  Elite
                </h3>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Hero
