import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <div>
      <h1>
        Alexis Crozier
      </h1>
      <ul>
        <li onClick={() => router.push('/')}>Home</li>
        <li onClick={() => router.push('/about')}>About</li>
        <li onClick={() => router.push('/contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;