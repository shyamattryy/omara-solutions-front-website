import {useState} from 'react';
import Link from 'next/link';
import Styles from "../scss/secondsec/second.module.scss"
import SecondSlider from './secondslider';

function Secondsec() {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
          
            <div className={`${Styles.dark} container-fluid`} style={{position:"relative"}}>
                <div className={`${Styles.secondsecond} row container`}>
                    <div className="col-4" style={{position:"relative", zIndex:"9"}}><div className={Styles.headingtext}>
                        <h2>Omra solutions</h2>
                        <p>The changes that have been unfolding in the pandemic are not evolutionary but revolutionary. And now, we are geared to help our customers revolutionize their businesses with next-gen technologies that power our solutions. With NXT.NOW™, we are ready to Imagine the future that we can deliver on, Build solutions that are unique, and Run the systems of the tomorrow efficiently today.</p>
<a href="#">Know More</a>
                    </div></div>

                    <div className="col-10" style={{position:"absolute", right:"0px"}}><SecondSlider /></div>
                    
                </div>
            </div>

      </>
    )
  }
  
  export default Secondsec;