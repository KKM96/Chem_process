'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const condition_1 = [
  {
    id: 1,
    name: 'Carbon 63.75% Brown Coal',
  },
  {
    id: 2,
    name: 'Carbon 65% Brown Coal',
  },
]
const condition_2 = [
    {
      id: 1,
      name: '1350℃ , 42bar',
    },
    {
      id: 2,
      name: '1500℃ , 42bar',
    },
  ]
const condition_3 = [
    {
      id: 1,
      name: '97.2% Conversion',
    },
    {
      id: 2,
      name: '99% Conversion',
    },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [selectedCondition1, setSelectedCondition1] = useState(condition_1[0]);
    const [selectedCondition2, setSelectedCondition2] = useState(condition_2[0]);
    const [selectedCondition3, setSelectedCondition3] = useState(condition_3[0]);
    const [resultValue, setResultValue] = useState(null);

    const handleListboxChange1 = (value) => {
        setSelectedCondition1(value);
        };
        
    const handleListboxChange2 = (value) => {
        setSelectedCondition2(value);
        };
        
    const handleListboxChange3 = (value) => {
        setSelectedCondition3(value);
        };

  const handleApiRequest = async () => {
    try {
        const response = await fetch(`/api/calculate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedCondition1: selectedCondition1.name,
            selectedCondition2: selectedCondition2.name,
            selectedCondition3: selectedCondition3.name,
          }),
        })
    
        const data = await response.json()
        if (Array.isArray(data) && data.length > 0) {
            setResultValue(data[0].result)
            console.log(data[0].result)
          } else {
            setResultValue('No result found')
          }
      } catch (error) {
        console.error('Error:', error)
      }
    }


    return (
        <div>
            {/* List 1 Condition 1 (석탄 Input)*/}
            <Listbox value={selectedCondition1} onChange={handleListboxChange1}>
            {({ open }) => (
                <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Condition 1(석탄 Input)</Listbox.Label>
                <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                        <span className="ml-3 block truncate">{selectedCondition1.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                    </Listbox.Button>

                    <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {condition_1.map((condition_1) => (
                        <Listbox.Option
                            key={condition_1.id}
                            className={({ active }) =>
                            classNames(
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                            }
                            value={condition_1}
                        >
                            {({ selectedCondition1, active }) => (
                            <>
                                <div className="flex items-center">
                                <span
                                    className={classNames(selectedCondition1 ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                    {condition_1.name}
                                </span>
                                </div>

                                {selectedCondition1 ? (
                                <span
                                    className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                ) : null}
                            </>
                            )}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                </div>
                </>
            )}
            </Listbox>
            {/* List 2 Condition 2 (Gasifier Condition)*/}
            <Listbox value={selectedCondition2} onChange={handleListboxChange2}>
            {({ open }) => (
                <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Condition 2(Gasifier Condtion)</Listbox.Label>
                <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                        <span className="ml-3 block truncate">{selectedCondition2.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                    </Listbox.Button>

                    <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {condition_2.map((condition_2) => (
                        <Listbox.Option
                            key={condition_2.id}
                            className={({ active }) =>
                            classNames(
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                            }
                            value={condition_2}
                        >
                            {({ selectedCondition2, active }) => (
                            <>
                                <div className="flex items-center">
                                <span
                                    className={classNames(selectedCondition2 ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                    {condition_2.name}
                                </span>
                                </div>

                                {selectedCondition2 ? (
                                <span
                                    className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                ) : null}
                            </>
                            )}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                </div>
                </>
            )}
            </Listbox>
            {/* List 3 (WGS Conversion rate) */}
            <Listbox value={selectedCondition3} onChange={handleListboxChange3}>
            {({ open }) => (
                <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Condition 3(WGS Conversion rate)</Listbox.Label>
                <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                        <span className="ml-3 block truncate">{selectedCondition3.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                    </Listbox.Button>

                    <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {condition_3.map((condition_3) => (
                        <Listbox.Option
                            key={condition_3.id}
                            className={({ active }) =>
                            classNames(
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                            }
                            value={condition_3}
                        >
                            {({ selectedCondition3, active }) => (
                            <>
                                <div className="flex items-center">
                                <span
                                    className={classNames(selectedCondition3 ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                    {condition_3.name}
                                </span>
                                </div>

                                {selectedCondition3 ? (
                                <span
                                    className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                ) : null}
                            </>
                            )}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                </div>
                </>
            )}
            </Listbox>
            <div className='w-575px flex justify-center items-center mt-4'>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleApiRequest}>계산</button>
            </div>
            <div className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center">
                        <dt className="text-base leading-7 text-gray-600">H2 Product </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {resultValue}
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    )
}