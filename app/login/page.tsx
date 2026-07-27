'use client'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-app text-default flex items-center justify-center px-4 py-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute right-[-10%] top-1/4 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[980px] overflow-hidden rounded-[2rem] border card-border bg-card shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_0.85fr]">
          <section className="hidden lg:flex flex-col justify-between bg-surface-soft px-10 py-12 text-default">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border card-border bg-card px-4 py-2 shadow-sm">
                <span className="text-sm font-semibold text-accent">SwiftPay</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Secure payment operations for your team.</h2>
                <p className="max-w-sm text-sm text-muted">Access revenue insights, disbursement approvals, and payment link controls from one merchant portal.</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted">
              <p className="font-semibold text-default">Need help?</p>
              <p>Contact support at support@swiftpay.com</p>
            </div>
          </section>

          <section className="p-8 sm:p-10">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-surface-soft px-4 py-2 text-sm font-semibold text-default">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" /> Merchant login
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-default">Sign in to SwiftPay</h1>
              <p className="mt-3 text-sm leading-6 text-muted">Use your merchant credentials to manage payments, disbursements, and approvals.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-default mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="you@business.com"
                  className="w-full rounded-3xl border card-border bg-card px-4 py-3 text-default outline-none transition focus:border-accent focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-default mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-3xl border card-border bg-card px-4 py-3 text-default outline-none transition focus:border-accent focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-muted">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-surface-soft text-orange-500 focus:ring-orange-500" />
                  Remember me
                </label>
                <a href="#" className="font-semibold text-orange-600 hover:text-orange-700">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full rounded-3xl bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/30 transition hover:from-orange-600 hover:to-rose-600"
              >
                Continue
              </button>
            </form>

            <div className="mt-8 border-t card-border pt-6 text-center text-sm text-muted">
              <p>Don’t have an account? <span className="font-semibold text-default">Get started with SwiftPay</span></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
