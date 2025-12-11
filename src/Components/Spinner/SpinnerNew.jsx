export function SpinnerNew() {
  return (
    <div id="root">
      <section aria-label="Notifications alt+T" aria-live="polite" aria-relevant="additions text" aria-atomic="false">
      </section>
      <div data-slot="empty" className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12">
        <div data-slot="empty-header" className="flex flex-col items-center gap-2 text-center">
          <div data-slot="empty-icon" data-variant="icon" className="mb-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&amp;_svg:not([class*='size-'])]:size-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle size-4 animate-spin" role="status" aria-label="Loading">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
            </svg>
          </div>
          <div data-slot="empty-title" className="text-lg font-medium tracking-tight">Processing your request</div>
          <div data-slot="empty-description" className="text-muted-foreground [&amp;&gt;a:hover]:text-primary text-sm/relaxed [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4">
            Please wait while we process your request. Do not refresh the page.
          </div>
        </div>
      </div>
    </div>
  )
}
