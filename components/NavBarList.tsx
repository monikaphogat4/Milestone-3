//components and props
import Link from "next/link";

const NavbarList = (props) => {
  const items = props.items;

  const listItems = items.map((item, index) => (
    <li key={index} className="item">
      <Link href="/mac">
        <a href="https://www.apple.com/">{item}</a>
      </Link>
    </li>
  ));

  return <ul className="align-middle">{listItems}</ul>;
};

export default NavbarList;
