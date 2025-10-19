export default function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-12 *:py-12 sm:*:px-8 xl:*:px-12">
        {children}
      </div>
    </div>
  );
}
