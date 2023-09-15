import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="py-0.5">
      <Link
        to={'/'}
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transitions-colors"
      >
        <svg viewBox="0 0 1200 1227" width={30} height={30}>
          <path
            fill="#fff"
            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          />
        </svg>
      </Link>
    </div>
  )
}
