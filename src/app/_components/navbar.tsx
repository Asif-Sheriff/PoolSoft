import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-50 text-black px-10">
      <div className="flex items-center">
        <span className="text-2xl font-bold">Snooker Club</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link href={'/'} className="px-3 py-2 text-lg font-semibold text-black rounded-md hover:bg-slate-300">POS</Link>
        <Link href={'/admin/tables'} className="px-3 py-2 text-lg font-semibold text-black rounded-md hover:bg-slate-300">Tables</Link>
      </div>
    </nav>
  );
};

export default NavBar;
