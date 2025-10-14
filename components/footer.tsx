export default function Footer() {
  return (
    <footer className="relative mt-16 py-8 md:mt-20">
      <div className="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Oui
        </p>
        {/* <p className="text-sm text-muted-foreground">
          A project by{" "}
          <a
            className="font-medium text-foreground underline decoration-border underline-offset-4 hover:no-underline"
            href="https://github.com/mw10013"
            target="_blank"
            rel="noopener noreferrer"
          >
            mw10013
          </a>
          .
        </p> */}
      </div>
    </footer>
  );
}
