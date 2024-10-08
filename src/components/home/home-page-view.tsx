import Link from "next/link";
import { ThemeToggleButton } from "../core/theme-toggle-button";

export function HomePageView() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center justify-between px-4 py-3 bg-card shadow-sm sm:px-6 md:py-4">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          MegaBoard
        </Link>
        <div className="flex items-center justify-between bg-card shadow-sm space-x-2 ">
          <ThemeToggleButton />
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2"
            prefetch={false}
          >
            Login
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 md:py-24">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The best way to organize your work
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Simplifying your job in a stylish and straightforward manner.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2"
              prefetch={false}
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground w-full justify-center">
            <CheckIcon className="h-4 w-4" />
            <span className="text-sm">100%</span>
            <span className="text-sm">Free forever</span>
          </div>
        </div>
      </main>
      <footer className="bg-card py-4 px-4 text-center text-muted-foreground sm:px-6 flex-row flex justify-between">
        <p>&copy; 2024 KanbanBoard. All rights reserved. </p>
        <p>Built with ♥</p>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
