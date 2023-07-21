import Link from 'next/link';

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/Home">Home</Link>
      </li>
      <li>
        <Link href="/">Docente</Link>
      </li>
      <li>
        <Link href="/perfil">Perfil</Link>
      </li>
    </ul>
  );
}

export default Navigation;