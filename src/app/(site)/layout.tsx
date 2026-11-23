// src/app/(site)/layout.tsx

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-1">{children}</main>
      <div id="modal-root" />
    </>
  );
}
