import Link from "next/link";

export default function Nav() {
  return (
    <>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link href="/test">Test</Link>
        </li>
      </ul>
    </>
  );
}
