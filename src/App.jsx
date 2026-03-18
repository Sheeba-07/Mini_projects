import './App.css';

function App(){
  return {
 <div className="main_box">
  <input type="checkbox" id="check" />

  <div className="btn_one">
    <label htmlFor="check">
      <i className="fa-solid fa-bars"></i>
    </label>
  </div>

  <div className="sidebar_menu">
    {/* only changed class → className */}
    <div className="logo">
      <a href="#">Photography</a>
    </div>

    <div className="btn_two">
      {/* only changed style syntax */}
      <label htmlFor="check" style={{ color: "grey" }}>
        <i className="fa-solid fa-xmark"></i>
      </label>
    </div>

    <div className="menu">
      <ul>
        <li>
          <i className="fa-solid fa-image"></i>
          <a href="#">Gallery</a>
        </li>
        <li>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <a href="#">Shortcuts</a>
        </li>
        <li>
          <i className="fa-solid fa-photo-film"></i>
          <a href="#">Exhibits</a>
        </li>
        <li>
          <i className="fa-solid fa-calendar-days"></i>
          <a href="#">Events</a>
        </li>
        <li>
          <i className="fa-solid fa-store"></i>
          <a href="#">Store</a>
        </li>
        <li>
          <i className="fa-solid fa-phone"></i>
          <a href="#">Contact</a>
        </li>
        <li>
          <i className="fa-regular fa-comments"></i>
          <a href="#">Feedback</a>
        </li>
      </ul>
    </div>

    <div className="social_media">
      <ul>
        {/* kept structure same, only fixed extra </i> */}
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
      </ul>
    </div>

  </div>
</div>
  }
}

//another code
// function App() {
//   return (
//     <div className="main_box">
//       <input type="checkbox" id="check" />

//       {/* Menu button */}
//       <div className="btn_one">
//         <label htmlFor="check">
//           <i className="fa-solid fa-bars"></i>
//         </label>
//       </div>

//       {/* Sidebar */}
//       <div className="sidebar_menu">
        
//         {/* Logo */}
//         <div className="logo">
//           <a href="#">Photography</a>
//         </div>

//         {/* Close button */}
//         <div className="btn_two">
//           <label htmlFor="check" style={{ color: "grey" }}>
//             <i className="fa-solid fa-xmark"></i>
//           </label>
//         </div>

//         {/* Menu */}
//         <div className="menu">
//           <ul>
//             <li>
//               <i className="fa-solid fa-image"></i>
//               <a href="#">Gallery</a>
//             </li>
//             <li>
//               <i className="fa-solid fa-arrow-up-right-from-square"></i>
//               <a href="#">Shortcuts</a>
//             </li>
//             <li>
//               <i className="fa-solid fa-photo-film"></i>
//               <a href="#">Exhibits</a>
//             </li>
//             <li>
//               <i className="fa-solid fa-calendar-days"></i>
//               <a href="#">Events</a>
//             </li>
//             <li>
//               <i className="fa-solid fa-store"></i>
//               <a href="#">Store</a>
//             </li>
//             <li>
//               <i className="fa-solid fa-phone"></i>
//               <a href="#">Contact</a>
//             </li>
//             <li>
//               <i className="fa-regular fa-comments"></i>
//               <a href="#">Feedback</a>
//             </li>
//           </ul>
//         </div>

//         {/* Social media */}
//         <div className="social_media">
//           <ul>
//             <li>
//               <a href="#"><i className="fa-brands fa-facebook"></i></a>
//             </li>
//             <li>
//               <a href="#"><i className="fa-brands fa-twitter"></i></a>
//             </li>
//             <li>
//               <a href="#"><i className="fa-brands fa-instagram"></i></a>
//             </li>
//             <li>
//               <a href="#"><i className="fa-brands fa-youtube"></i></a>
//             </li>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// }

export default App;