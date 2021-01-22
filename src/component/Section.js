import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        return (
            <div>
             <div className="login-header mt-4">
                <h1><b>SECTIONS</b></h1>
             </div>
             <div className="row mt-5 text-center ">
                 <div className="col-sm-1"></div>
                 <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#35f03e"}}>
                   <h1 className="mt-3 text-white"><b>English</b></h1>
                   <p className="mt-3 text-white">Each question carry one marks.</p>
                   <p className="mt-1 text-white">All questions are compulsory.</p>
                   <button className="btn btn-warning mt-5">Start</button>
                 </div>
                 <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#40a3f5"}}>
                   <h1 className="mt-3 text-white"><b>Hindi</b></h1>
                   <p className="mt-3 text-white">Each question carry one marks.</p>
                   <p className="mt-1 text-white">All questions are compulsory.</p>
                   <button className="btn btn-warning mt-5"  >Start</button>
                 </div>
                 <div className="col-sm-3 ml-4 mb-3" style={{width:"85%",height:"50vh" ,borderWidth:0.1,borderColor:"gray",borderRadius:10,boxShadow:" 0 2px 8px 0 rgba(0, 0, 0, 0.25)",backgroundColor:"#ec3df5"}}>
                   <h1 className="mt-3 text-white"><b>Mathematics</b></h1>
                   <p className="mt-3 text-white">Each question carry one marks.</p>
                   <p className="mt-1 text-white">All questions are compulsory.</p>
                   <button className="btn btn-warning mt-5">Start</button>
                 </div>
            </div>
             </div>
        )
    }
}
