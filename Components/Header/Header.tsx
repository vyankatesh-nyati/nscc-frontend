import classes from "./Header.module.css";
import Image from "next/image";
import NSCCLogo from "../../assets/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged ,} from "firebase/auth"
function Navbar() {

  const [active,setactive] =useState(false);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log(user)
        
        // localStorage.setItem("accessToken",`${user.accessToken}`)
        setactive(true)
      }
      else {
        // localStorage.removeItem("accessToken")
        setactive(false)
      }
    })
  },[])

  const handlelogout=()=>{
    if(active){
      auth.signOut();
      localStorage.removeItem("login")
    }
  }
  

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Image src={NSCCLogo} alt="NSCC PCCOE" />
        </div>
      </div>
      <div className={classes.navigators}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <Link href="/">Opportunities</Link>
          </li>
          <li>
            <Link href="/">Resources</Link>
          </li> */}
          <li>
            <Link href="/event">Events</Link>
          </li>
          {/* <li>
            <Link href="/">Connect</Link>
          </li> */}
          <li>
            <Link  onClick={handlelogout} className={classes.button} href="/auth">{active?"logout":"login"}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
