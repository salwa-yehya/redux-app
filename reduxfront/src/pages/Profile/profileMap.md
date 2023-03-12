
 {dataUsers.map((users,index)=>{

 console.log(users.fullname,"");
 return (<div key={index}>
 <NavBar />

 <div className='parent'>
 <div className="wrapper-1">
         <div className="left"> 
           <!-- {/* <img src={require(`../../images/${users.image}`)} alt="user" width={100} /> */} -->
           <h4>{users.fullname}</h4>
          {/* <p>Reader</p> */}
//         </div>
//         <div className="right">
//           <div className="info">
//             <h3>Information</h3>
//             <div className="info_data">
//               <div className="data">
//                 <h4>Email</h4>
//                 <p>{users.email}</p>
//               </div>
//             </div>
//           </div>
//           <div className="projects">
//             <h3>Books</h3>
//             <div className="projects_data">
//               <div className="data">
//                 <h4>Recent</h4>
//                 <p>Lorem ipsum dolor sit amet.</p>
//               </div>
//               <div className="data">
//                 <h4>Most Viewed</h4>
//                 <p>dolor sit amet.</p>
//               </div>
//             </div>
//           </div>
//           <div className="social_media">
//             <ul>
//               <li><a href={`/profile/${users.id}/edit`}>edit</a></li>
              
//             </ul>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>)
        })}