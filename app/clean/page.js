import { connectDB } from "/util/database.js"
import { 
    CloudIcon,
    FireIcon, 
    LockClosedIcon, 
    ServerIcon, 
    SparklesIcon,
} from '@heroicons/react/20/solid'


export default async function Clean(){
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
                <p className="text-base font-semibold leading-7 text-indigo-600">Cleaning</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Removing the H2S and ash</h1>
                <p className="mt-6 text-l leading-8 text-gray-700">
                  Ash와 H2S를 합성가스에서 분리합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* Image */}
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/clean.png"
              alt="input_process"
              style={{ width: '80%', maxWidth: 'none' }} 
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Separator로 ash를 분리해주고 COS를 H2S로 전환 후, H2S를 분리 해줍니다. 
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Ash 제거 과정</strong><p></p>
                      가스화를 거친후 Syngas에 포함되어 있는 ash를 Separator로 분리해 줍니다.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <SparklesIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">H2S 제거 과정</strong><p></p>
                      Syngas안의 황 성분은 H2S, COS로 존재합니다. COS를 제거가 용이한 H2S로 바꾸는 반응 과정을 거친 후, H2S를 제거해줍니다.
                      Syngas안의 황 성분을 제거하는 이유는 후 공정단계의 배관, 촉매 등에 악영향을 미치기 때문에 제거과정을 거치게 됩니다.
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