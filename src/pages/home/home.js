import { Navbar } from "../../components/navbar"
import Tabel from "../dashboard/Tabel"
import Maskot from "../../assets/banner.jpeg"
const home = () => {
  return (
    <div>
      <Navbar />
      <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
    <div className="d-flex justify-content-center align-items-center h-100">

    </div>
  </div>
    <div className="p-5 text-center bg-image rounded-3">
      <a className="/">
        <img style={{marginRight : ""}} src={Maskot} alt="Logo" width={1299} height={500}/>
      </a>
    </div>
      {/* <Tabel /> */}
    
    </div>
  );
};

export default home;