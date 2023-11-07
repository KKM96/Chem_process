import { 
    CloudIcon,
    FireIcon, 
    LockClosedIcon, 
    ServerIcon, 
} from '@heroicons/react/20/solid'


export default async function GAS(){
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
                <p className="text-base font-semibold leading-7 text-indigo-600">Gasification</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gasification process</h1>
                <p className="mt-6 text-l leading-8 text-gray-700">
                  석탄을 열분해하여 Syngas로 변화시킵니다.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* Image */}
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/gas.png"
              alt="input_process"
              style={{ width: '80%', maxWidth: 'none' }} 
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  건조화된 석탄을 열분해 한후에, 스팀개질을에 의한한 가스화를 진행해줍니다. 
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <FireIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">석탄의 열분해 과정</strong><p></p>
                      약 400°C에서 열분해 과정을 거칩니다. 열분해는 산소를 공급하지 않는 상태에서 유기물을 가열에 의해서만 처리하는 과정입니다.
                      열분해를 거친 석탄은 합성가스로 상태변화가 일어납니다.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FireIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">가스화</strong><p></p>
                      가스화는 탄화수소계 물질을 부분산화를 통해 CO,H2 및 CH4 등과 같은 혼합가스 형태로 전환하는 공정입니다.
                      또한 스팀개질에 의한 가스화는 가스화제로 수증기를 사용하고 열을 공급하여 중질 유분을 경질 성분으로 전환시킵니다.
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