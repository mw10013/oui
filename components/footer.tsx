export default function Footer() {
  return (
    <footer className="relative mt-16 py-8 md:mt-20">
      <div className="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Oui
        </p>
      </div>
    </footer>
  );
}
