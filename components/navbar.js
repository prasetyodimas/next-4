import Link from 'next/link';

const StyleNavBar = {
  margin: 10,
  backgroundColor: "lightcoral",
  border: "2px, dotted, #DDD"
}

const StyleLink = {
  marginRight: 10
}

const NavBar = () => {
  return (
    <div style={StyleNavBar}>
      <Link href="/">
        Username
      </Link>
      <Link href="/product/detail">
        Product Detail
      </Link>
        <span>
          Product Detail
        </span>
    </div>
  );
}

export default NavBar;
