export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        header - testing deployment
      </header>
      <main className="row-start-2 items-center sm:items-start">
        <form
          action=""
          className="flex flex-col gap-4 p-5 rounded-xl border-2 border-blue-100 shadow-lg"
        >
          <div className="ml-6">
            E-Mail: <input type="text" className="border-2" />
          </div>
          <div className="">
            Password: <input type="text" className="border-2" />
          </div>
          <div className="flex justify-center w-full">
            <button className="bg-blue-300 rounded-lg px-8 py-2 hover:shadow-lg">
              Login
            </button>
          </div>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
