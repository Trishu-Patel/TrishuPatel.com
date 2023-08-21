/* eslint-disable react/prop-types */

export default function NavBarLink(props){
    return(
      <li>
        <a href={props.link}>{props.children}</a>
      </li>
    )
  }