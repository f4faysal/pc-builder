import { useAppDispatch } from "@/redux/hook";
import { signIn, useSession } from "next-auth/react";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession()
  console.log(session?.user?.email)


  const handelGithubLogin = () => {


  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold"></h1>
                         <p className="py-6"></p>
                    </div> */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex justify-evenly">
              <button
                onClick={() => signIn("google", {
                  callbackUrl: "https://pc-builder-ten.vercel.app/",
                })}
                className="btn btn-primary"
              >
                Google
              </button>
              <button
                onClick={() => signIn("github", {
                  callbackUrl: "https://pc-builder-ten.vercel.app/",
                })}
                className="btn btn-primary"
              >
                Git Hub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
