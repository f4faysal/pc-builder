import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
const NavBar = () => {

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { data: session } = useSession()
  // console.log(session?.user?.email)
  useEffect(() =>{
    dispatch(setUser(session?.user?.email));
  },[session?.user , dispatch ])

  const handelLogOut = () => {
    signOut()
    dispatch(setUser(null));
  }
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
                  <li><Link href='/prodact/CPUProcessor'>CPU / Processor</Link></li>
                  <li><Link href='/prodact/Motherboard'>Motherboard</Link></li>
                  <li><Link href='/prodact/RAM'>RAM</Link></li>
                  <li><Link href='/prodact/PowerSupplyUnit'>Power Supply Unit</Link></li>
                  <li><Link href='/prodact/StorageDevice'>Storage Device</Link></li>
                  <li><Link href='/prodact/Monitor'>Monitor</Link></li>
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
            <li><Link href='/prodact/CPUProcessor'>CPU Processor</Link></li>
            <li><Link href='/prodact/Motherboard'>Motherboard</Link></li>
            <li><Link href='/prodact/RAM'>RAM</Link></li>
            <li><Link href='/prodact/PowerSupplyUnit'>Power Supply Unit</Link></li>
            <li><Link href='/prodact/StorageDevice'>Storage Device</Link></li>
            <li><Link href='/prodact/Monitor'>Monitor</Link></li>
          </ul>
        </ul>

        <div className="navbar-end">
          <Link href='/pc-build' className="btn">PC Build</Link>
          <ul className="">
            {user?.email ? <li><p className="btn btn-warning" onClick={handelLogOut}>Log Out</p></li> :
              <li><Link className="btn btn-primary" href='/login'>Login</Link></li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;



