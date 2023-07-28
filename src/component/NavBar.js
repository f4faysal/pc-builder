import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li><a> CPU / Processor</a></li>
                  <li><a>Motherboard</a></li>
                  <li><a>RAM</a></li>
                  <li><a>Power Supply Unit</a></li>
                  <li><a>Storage Device</a></li>
                  <li><a>Monitor</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href='/' className="text-xl">PC Builder BD</Link>
        </div>

        <ul className="dropdown hidden lg:block">
          <label className="cursor-pointer" tabIndex={0} >
            Categories
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href='' >CPU / Processor</Link></li>
            <li><Link href='' >Motherboard</Link></li>
            <li><Link href='' >RAM</Link></li>
            <li><Link href='' >Power Supply Unit</Link></li>
            <li><Link href='' >Storage Device</Link></li>
            <li><Link href='' >Monitor</Link></li>
          </ul>
        </ul>

        <div className="navbar-end">
          <Link href='/pc-build' className="btn">PC Build</Link>
          <ul className="menu menu-horizontal px-1">
            {true ? <li><a>Log Out</a></li> :
              <li><Link href='/login'>Login</Link></li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;