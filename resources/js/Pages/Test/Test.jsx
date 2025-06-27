import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import { useEffect, useState } from 'react';
export default function Test() {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    //
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);

    const [isVisibleBT1, setIsVisibleBT1] = useState(true);
    const [isVisibleBT2, setIsVisibleBT2] = useState(false);
    const [isVisibleBT3, setIsVisibleBT3] = useState(false);
    const [isVisibleBT4, setIsVisibleBT4] = useState(false);
    const [isVisibleBT5, setIsVisibleBT5] = useState(false);
    const [isVisibleBT6, setIsVisibleBT6] = useState(false);



    //Example Function
    const handlePileDiameter = (e) => {
        const value = e.target.value;
        setpilediameter(value);

        const numericDiameter = parseFloat(value);
        if (!isNaN(numericDiameter) && numericDiameter > 0) {
            const calculatedAreaMM = (Math.PI * Math.pow(numericDiameter, 2)) / 4;

            const calculatedArea = calculatedAreaMM / 1000000 ;
            setpilebasearea(calculatedArea); // round to 2 decimal places
        } else {
            setpilebasearea(null); // reset if input is invalid
        }
    };


    const handleDownLoad = (e) => {

        alert(" THIS  WILL  DOWN LOAD THE  VALUES  AS A PDF ");
    };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    <div
                        className={`transition-all duration-1500 transform ${
                            loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}
                    >
                        <p className="text-gray-800">TEST PAGE</p>
                    </div>
                </h2>
            }
        >
            <Head title="TEST"/>
            <div className="container mx-auto py-8" name="pilevalues_1" id="pilevalues_1">
                <div className="flex flex-wrap gap-2">
                    {/* Box 1: Form */}
                    <div className="flex-[2]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                <div
                                    className={`transition-all duration-700 transform ${
                                        loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                                    }`}
                                >
                                    <p className="text-gray-800">TEST PAGE</p>
                                </div>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                <div className="md:col-span-12">
                                    Block 1
                                    &nbsp;
                                </div>
                                <button
                                    onClick={() => {
                                        setIsVisible2(!isVisible2);
                                        setIsVisibleBT2(!isVisibleBT2);
                                        setIsVisibleBT1(!isVisibleBT1);
                                    }}
                                    className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${isVisibleBT1 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible2 ? '' : 'hidden'}`}>
                                <div className="md:col-span-12">
                                    &nbsp;
                                    Block2
                                </div>

                                <button
                                    onClick={() => {
                                        setIsVisible3(!isVisible3)
                                        setIsVisibleBT3(!isVisibleBT3);
                                        setIsVisibleBT2(!isVisibleBT2);
                                    }}
                                    className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${isVisibleBT2 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                            </div>

                        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible3 ? '' : 'hidden'}`}>
                            <div className="md:col-span-12">
                                &nbsp;
                                Block 3
                            </div>

                            <button
                                onClick={() => {
                                    setIsVisible4(!isVisible4)
                                    setIsVisibleBT4(!isVisibleBT4);
                                    setIsVisibleBT3(!isVisibleBT3);
                                }}

                                className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${isVisibleBT3 ? '' : 'hidden'}`}
                            >
                                Continue
                            </button>
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible4 ? '' : 'hidden'}`}>
                            <div className="md:col-span-12">
                                &nbsp;
                                Block 4
                            </div>

                            <button
                                onClick={() => {
                                    setIsVisible5(!isVisible5)
                                    setIsVisibleBT5(!isVisibleBT5);
                                    setIsVisibleBT4(!isVisibleBT4);
                                }}
                                className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${isVisibleBT4 ? '' : 'hidden'}`}
                            >
                                Continue
                            </button>
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible5 ? '' : 'hidden'}`}>
                            <div className="md:col-span-12">
                                &nbsp;
                                Block 5
                            </div>

                            <button
                                onClick={() => {
                                    setIsVisible6(!isVisible6);
                                    setIsVisible7(!isVisible7);
                                    setIsVisibleBT6(!isVisibleBT6);
                                    setIsVisibleBT5(!isVisibleBT5);
                                }}

                                className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${isVisibleBT5 ? '' : 'hidden'}`}
                            >
                                Continue
                            </button>
                            <button
                                onClick={handleDownLoad}
                                className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${isVisibleBT6 ? '' : 'hidden'}`}
                            >
                                DownLoad PDF
                            </button>
                        </div>
                        </div>
                    {/*END  BOX1 */}
                    </div>

                 { /* Box 2: Can be results or other content */}
                    <div className="flex-[1]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <div
                                className={`transition-all duration-700 transform ${
                                    loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                                }`}
                            >
                                <h2 className="text-xl font-semibold mb-4">

                                        <p className="text-gray-800">SOME HEADING</p>

                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad adipisci aliquam animi beatae, consectetur dolore earum eveniet explicabo illo iure nihil, quia quibusdam quod sit tempore totam voluptates.</p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`container mx-auto py-8 ${isVisible6 ? '' : 'hidden'}`} name="pilevalues_2" id="pilevalues_2">
                <div className="flex flex-wrap gap-2">
                    {/* Box 1: Form */}
                    <div className="flex-[2]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <p>Some MOre info to Display</p>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
)
    ;
}
