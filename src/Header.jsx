import taskLogo from "./assets/Task Manager -logos_white.png";

export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <div>
          <a href="/">
            <img className="w-[150px] h-[150px]" src={taskLogo} alt="Lws" />
          </a>
        </div>
        <button className="py-4 px-4 bg-green-700 rounded-xl shadow-sm shadow-black ">
          Manage Your Task
        </button>
      </div>
    </nav>
  );
}
