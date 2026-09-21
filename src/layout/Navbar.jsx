function Navbar({ title = "Dashboard" }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-gray-600 px-6">
      {/* Page title */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button
          type="button"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-700
          "
          aria-label="Notifications"
        >
          🔔
        </button>

        {/* User */}
        <div className="flex items-center gap-3 ">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
            A
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-900">Ammara</p>

            <p className="text-xs text-slate-400">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
