export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>Logo</header>

      <nav>
        Menu
      </nav>

      <main>
        {children}
      </main>

      <footer>Footer</footer>

    </>
  )
}
