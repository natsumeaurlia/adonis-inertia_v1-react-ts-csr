import { Link } from '@inertiajs/react'

const Test2 = ({ name }) => (
  <div>
    Hello world, {name}!
    <p>
      back to
      <Link href="test">test</Link>
    </p>
  </div>
)

export default Test2
