'use client';

import Link from 'next/link';

function Navbar() {
  return (
    <>
      <nav>
        <h2>Portfolio</h2>
        <br />
        <Link href="/">Home</Link>
        <br />
        <Link href="/about">About</Link>
        <br />
        <Link href="/education">Education</Link>
        <br />
        <Link href="/certifications">Certifications</Link>
        <br />
        <Link href="/skills">Skills</Link>
        <br />
        <Link href="/contact">Contact</Link>
        <br />
        <br />
      </nav>
    </>
  );
}

export default Navbar;
