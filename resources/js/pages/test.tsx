import { Link } from '@inertiajs/react'

const Test = ({ name }) => (
  <div>
    Hello world, {name}!
    <p>
      go to <Link href="test2">test</Link>
    </p>
  </div>
)

export default Test
