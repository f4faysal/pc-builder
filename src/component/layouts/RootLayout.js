import Footer from "../Footer";
import NavBar from "../NavBar";

const RootLayout = ({ children }) => {
     return (
          <div>
               <NavBar/>
               {children}
               <Footer/>
          </div>
     );
};

export default RootLayout;