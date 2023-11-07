import { 
    CloudIcon,
    FireIcon, 
    LockClosedIcon, 
    ServerIcon, 
} from '@heroicons/react/20/solid'
import InputImg from "./InputImg"

export default async function Input(){
    return(
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">Input</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Input of Process</h1>
                <p className="mt-6 text-l leading-8 text-gray-700">
                  저등급 석탄을 Input으로 사용합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* Image */}
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/Input.png"
              alt="input_process"
              style={{ width: '80%', maxWidth: 'none' }} 
            />
            <InputImg></InputImg>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  저등급 석탄은 고등급 석탄에 비해 수분함량이 높아 연소시 효율이 낮으며, 자연발화 특성이 있어 저탄 및 이송이 어려운 점이 있습니다.
                  이 때문에 초기에 저등급 석탄을 안정적이게 건조하는 과정을 거칩니다.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <FireIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">건조화된 석탄 Input.</strong><p></p>
                      수소를 얻기위해 건조화된 석탄을 공정에 넣습니다.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CloudIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">ASU를 거친 산소 Input.</strong><p></p>
                      대기중의 air를 Air Separation Unit을 통해 가스화를 위한 산소를 공정에 넣습니다.
                    </span>
                  </li>
                </ul>             
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}