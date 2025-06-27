import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {useState} from "react";

export default function Hileyformula() {

    const [pilediameter, setpilediameter] = useState(0);
    const [pilebasearea, setpilebasearea] = useState(0);
    const [pileunitweight, setpileunitweight] = useState(0);
    const [pilelength, setpilelength] = useState(0);
    const [weighthammer, setweighthammer] =  useState(0);
    const [weightanvil, setweightanvil] =  useState(0);
    const [weighthelmet, setweighthelmet] =  useState(0);
    const [piletotalweight, setpiletotalweight] =  useState(0);
    const [weightpileanvilhelmet, setweightpileanvilhelmet] =  useState(0);
    const [freefallheight, setfreefallheight] =  useState(0);
    const [efficiencyfall, setefficiencyfall] =  useState(0);
    const [effectiveheight, seteffectiveheight] =  useState(0);
    const [finalpenetration, setfinalpenetration] =  useState(0);
    const [coefficientrestitution, setcoefficientrestitution] =  useState(0);
    const [efficiencyblow, setefficiencyblow] =  useState(0);
    const [potentialenergyhammer, setpotentialenergyhammer] =  useState(0);
    const [drivingforce, setdrivingforce] =  useState(0);
    const [stresspilesdrivingforce, setstresspilesdrivingforce] =  useState(0);



    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);

    const [isVisibleBT1, setIsVisibleBT1] = useState(true);
    const [isVisibleBT2, setIsVisibleBT2] = useState(false);
    const [isVisibleBT3, setIsVisibleBT3] = useState(false);
    const [isVisibleBT4, setIsVisibleBT4] = useState(false);
    const [isVisibleBT5, setIsVisibleBT5] = useState(false);


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

    const  handlePileTotalWeight  = (e) => {

        const value = e.target.value;
        setpileunitweight(value);

        const unitWeight = parseFloat(value) || 0;
        const length = parseFloat(pilelength) || 0;
        const baseArea = parseFloat(pilebasearea) || 0;
        const anvilWeight = parseFloat(weightanvil) || 0;
        const helmetWeight = parseFloat(weighthelmet) || 0;

        const totalWeight = unitWeight * length * baseArea;
        setpiletotalweight(totalWeight);

        const totalCombinedWeight = totalWeight + anvilWeight + helmetWeight;
        setweightpileanvilhelmet(totalCombinedWeight);
    };

    const  handleEffectiveHeightFall  = (e) => {

        const value = e.target.value;
        setefficiencyfall(value);

        const numericefficiencyfall = parseFloat(value)/100;
        const numericfreefallheight = parseFloat(freefallheight);

        const effectiveheightFall = (numericefficiencyfall * numericfreefallheight)/1000;

        seteffectiveheight(effectiveheightFall) ;
    };

    const handleEfficiency   = (e) => {

        const value = e.target.value;
        setcoefficientrestitution(value);

    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Piles
                </h2>
            }
        >
            <Head title="Hileyformula"/>
            <div className="container mx-auto py-8" name="pilevalues_1" id="pilevalues_1">
                <div className="flex flex-wrap gap-2">
                    {/* Box 1: Form */}
                    <div className="flex-[2]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Hiley Formula Input</h2>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                <div className="md:col-span-12">
                                    <br/> Block 1
                                    &nbsp;
                                </div>
                                <button
                                    onClick={() => {
                                        setIsVisible2(!isVisible2) ;
                                        setIsVisibleBT2(!isVisibleBT2);
                                        setIsVisibleBT1(!isVisibleBT1);
                                    }}
                                    className={`w-64 w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT1 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                                <div className="md:col-span-12">
                                    &nbsp;
                                    <br/>Block1 End
                                </div>
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible2 ? '' : 'hidden'}`}>
                                <div className="md:col-span-12">
                                    <br/> Block2
                                    &nbsp;
                                </div>

                                <button
                                    onClick={() => {
                                        setIsVisible3(!isVisible3)
                                        setIsVisibleBT3(!isVisibleBT3);
                                        setIsVisibleBT2(!isVisibleBT2);
                                }}
                                    className={`w-64 w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT2 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                                <div className="md:col-span-12">
                                    &nbsp;
                                    <br/>Block2 End
                                </div>
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible3 ? '' : 'hidden'}`}>
                                <div className="md:col-span-12">
                                    <br/> Block 3
                                    &nbsp;
                                </div>

                                <button
                                    onClick={() => {
                                        setIsVisible4(!isVisible4)
                                        setIsVisibleBT4(!isVisibleBT4);
                                        setIsVisibleBT3(!isVisibleBT3);
                                    }}

                                    className={`w-64 w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT3 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                                <div className="md:col-span-12">
                                    &nbsp;
                                    <br/>Block3 End
                                </div>
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible4 ? '' : 'hidden'}`}>
                                <div className="md:col-span-12">
                                    <br/>Block 4
                                    &nbsp;
                                </div>

                                <button
                                    onClick={() => {
                                        setIsVisible5(!isVisible5)
                                        setIsVisibleBT5(!isVisibleBT5);
                                        setIsVisibleBT4(!isVisibleBT4);
                                    }}
                                    className={`w-64 w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT4 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                                <div className="md:col-span-12">
                                    &nbsp;
                                    <br/>Block4 End
                                </div>
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible5 ? '' : 'hidden'}`}>
                                <div className="md:col-span-12">
                                    <br/>Block 5
                                    &nbsp;
                                </div>

                                <button
                                    className={`w-64 w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT5 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>

                                <div className="md:col-span-12">
                                    &nbsp;
                                    <br/>Block5 End
                                </div>
                            </div>
                        </div>

                        {/*END  BOX1 */}
                    </div>

                    {/* Box 2: Can be results or other content */}
                    <div className="flex-[1]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Hiley Formula Output</h2>
                            <p>Image will show here...</p>
                        </div>
                    </div>

                </div>
            </div>



        </AuthenticatedLayout>
    );
}
