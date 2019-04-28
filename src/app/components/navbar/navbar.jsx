import React from 'react';
import {
Navbar,
 NavbarBrand,
  } from 'reactstrap';
import style from './style.css';



export default function CustomNavbar (props) {
    return (
        <div>
        <Navbar color="light" light expand="md" className="some-class">
          <NavbarBrand href="/">Moga visualizer</NavbarBrand>
        </Navbar>
      </div>
    )
  }

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md" className="some-class">
//           <NavbarBrand href="/">Moga visualizer</NavbarBrand>
//         </Navbar>
//       </div>
//     );
//   }
// }