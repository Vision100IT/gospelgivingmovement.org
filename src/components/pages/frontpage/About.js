import React from 'react';
import TomAndMag from '../../../images/TomAndMag.jpg';
import Vimeo from '@u-wave/react-vimeo';


export default () => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-12">

          <h2 className="headerPink">HELP US BUILD A NETWORK</h2>
          <hr className="hrPink" />
          <div className="col-sm-4 img-center-border-50 text-center">
            <img src={TomAndMag} alt="" className="img img-responsive" />
          </div>
          <div className="col-sm-8">

            <p className="mrgn-30-top">The Gospel Giving Movement is an initiative of the Hobart ministries of AFES and City Bible Forum. We want to establish a network of committed supporters, to build relationships between them and gospel workers and Christian ministries in Tasmania.<br /><br />

              We believe that giving to gospel ministry is a form of worship and is in itself a meaningful act of Christian service. <br /><br />

              Join with us as we encourage one another to give joyfully, wisely and holistically. Help us raise up a new generation of gospel givers and draw in others from around Australia who see the need to not only give locally and globally but also regionally.
            </p></div>

        </div>

      </div>
      <div className="vimeo-vid text-center ">
        <Vimeo video={327195528} allowFullScreen={true} showTitle={false} showByline={false} showPortrait={false} sidedock={0} />
      </div>
    </div>
  </section>
)
