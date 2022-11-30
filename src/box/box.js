import React ,{useState}  from "react"
// import Header from './header/header';
import data from "../MatchData.json";


let imgs = [
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221129T152903Z&X-Amz-Expires=86400&X-Amz-Signature=c84224b45a1adad6e831beb0f0a53be866bdaca3afb05afd94e59f417e435b28&X-Amz-SignedHeaders=host&x-id=GetObject',
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221127T172958Z&X-Amz-Expires=86400&X-Amz-Signature=efe54d2008cfdd827db06e99dce5d0a26cd71f46a88452bd1a8c23f4bac62687&X-Amz-SignedHeaders=host&x-id=GetObject',
    'https://img.icons8.com/search'
  ];


const Box = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
    return (
      <>
                       {/* // <!-- Header --> */}
        <div className="header">
        <div className="head">
             <h1>International Matches</h1>
        </div>


                                       {/* search bar */}
      
        <div className="search-bar">
        <form action="" className="searching">
          <button className="search-icon" type="submit" ><img src={imgs[2]} alt="" /></button>
          <input className="searching" type="text" placeholder="Search for Matches" id="searchInput" onChange={(event) => {
            setSearchTerm(event.target.value);
          }
        }  />
         
        </form>
    </div>



    </div>
                                                {/* //  <!-- End --> */}












        {/* // <!-- Div Boxes --> */}


      <div className="boxes" >
        {
          data
          .filter((val)=> {
            if(searchTerm == ""){
               return val;
            }
            else if((val.title.toLowerCase().includes(searchTerm.toLowerCase()))||(val.winner.toLowerCase().includes(searchTerm.toLowerCase()))||(val.looser.toLowerCase().includes(searchTerm.toLowerCase()))){
               return val;
            }
          })
        
      
         .map((val) => {
          return(
            <a href="../next">  <div className="container" key={val.id}>
                    <div className="texts"> 
                      {/* <p className="t1">All India Senior Ranking Badminton Tournament</p> */}
                      <p className="t1">{val.title}</p>
                      <p className="t2">Final</p>
                      <p className="t3">v/s</p>
                    </div>
        
                   <div className="result">
                                                     {/* <!-- picture 1 --> */}
                    <div className="p1">
                   <div className="crown"> <img src={imgs[0]} alt="" />
                   </div>
                   <div className="flag"><img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"  alt="" />
                <p  style={{color: "white"}}>{val.winner}</p>
                </div>
                    </div>
                                                        {/* <!-- end -->
                                                   <!-- score box --> */}
                    <div className="score">
                         <p>9-21, 21-10, 21-15</p>
                    </div>
                                                        {/* <!-- end -->
        
                                                        <!-- picture-2 --> */}
                    <div className="p2">
                                 <div className="flag"><img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" style={{marginTop: "15px"}}  alt="" />
                                    <p  style={{color: "white"}}>{val.looser}</p>
                                </div>
                    </div>
                    </div>           
                                                          {/* <!-- END -->
                                                          <!-- logo --> */}
                       <div className="logo">
                        <img src={imgs[1]} alt="" />
                       </div>
                                                          
                                                {/* <!-- end --> */}
            </div>
           </a>
            

                                                       
          )
         })
        }
         
                  </div>
                  
       </>
                
    )
}

export default Box