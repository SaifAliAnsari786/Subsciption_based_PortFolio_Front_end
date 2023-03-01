import Head from "next/head";
import Image from "next/image";

const Icon = () => {
  return (<>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    </Head>

    <div className="container">
      <div className="page-head">
        <h4 className="page-tittle">Favicon</h4>
        <ul className="page-subdomain">
          <li><a href=""><i className="fa fa-home"></i></a></li>
          <li><i className="fa fa-chevron-right"></i></li>
          <li> Basic Settings </li>
          <li><i className="fa fa-chevron-right"></i></li>
          <li> Favicon</li>
        </ul>
      </div>
    </div>
    <div className="container favicon-page">
      <div className="row ">
        <div className="col-sm">
          <div className="subdomain">
            <h4 className="subdomain-head">Update Favicon</h4>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 setting-form">
                  <div className="col-12 mb-2 image-setting">
                    <label for="image">
                      <strong>Favicon **</strong>
                    </label>
                  </div>
                  <div className="col-md-12 showImage mb-3">
                    {/* <img src="/Favicon.png" alt=""/> */}
                    <Image src="/dashboard/setting/Favicon.png" width={75} height={81} alt="userpic" />
                  </div>
                  {/* <form>
                  <div className="form-group">
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                  </div>
                </form> */}
                  <div className="mb-3">
                    <input className="form-control form-control-sm" id="formFileSm" type="file" />
                  </div>
                  <div className="setting-card">
                    <div className="row">
                      <div className="col-12  card-footer">
                        <button type="submit" id="submitbtn" className="btn btn-success">Update</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container-fluid">
        <div className="setting-footer">Copyright © 2021. All rights reserved by Sasso.</div>
      </div>
    </footer>
  </>)
}
export default Icon;