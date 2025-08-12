import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function Hileyformula({ result }) {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
    setLoaded(true);
    }, []);


    const { data, setData, post, processing, errors } = useForm({
        pilediameter: '',
        pilebasearea: '',
        pileunitweight: '',
        pilelength: '',
        weighthammer: '',
        weightanvil: '',
        weighthelmet: '',
        piletotalweight: '',
        weightpileanvilhelmet: '',
        freefallheight: '',
        efficiencyfall: '',
        effectiveheight: '',
        finalpenetration: '',
        coefficientrestitution: '',
        efficiencyblow: '',
        potentialenergyhammer: '',
        drivingforce: '',
        stresspilesdrivingforce: '',
        elasticcompresion: '',
    });

    const [selectedProject, setSelectedProject] = useState(null);
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
    const [elasticcompresion, setelasticcompresion] =  useState(0);

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

    const [tabIndex, setTabIndex] = useState("1");
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
    const handleEfficiency   = (e) => {

        const value = parseFloat( e.target.value );
        setcoefficientrestitution(value);
        const tmpcoefficientrestitution = Math.pow(value, 2);
        const tmpweighthammer = parseFloat(weighthammer);
        const tmpweightpileanvilhelmet = parseFloat(weightpileanvilhelmet);
        const tmpeffectiveheightfall =  parseFloat(effectiveheight) ;
        const tmpfinalpenetration = parseFloat(finalpenetration) ;
        const tmppilebasearea = parseFloat(pilebasearea) ;

        const EfficiencyofBlow =
        (tmpweighthammer + (weightpileanvilhelmet * tmpcoefficientrestitution))
        /(tmpweighthammer + tmpweightpileanvilhelmet) ;

        const Potentialenergyhammer = (tmpweighthammer  * tmpeffectiveheightfall) * 1000;

        const Drivingforce = ( tmpweighthammer *(tmpeffectiveheightfall/tmpfinalpenetration )) * 1000  ;

        const Stresspilesdrivingforce = (Potentialenergyhammer)/(tmpfinalpenetration*tmppilebasearea) ;

        setefficiencyblow(EfficiencyofBlow);
        setpotentialenergyhammer(Potentialenergyhammer) ;
        setdrivingforce(Drivingforce) ;
        setstresspilesdrivingforce(Stresspilesdrivingforce);
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

    const handleDownLoad = async (e) => {
        const input = document.getElementById('hileyformula_pdf');
        alert(" THIS  WILL  DOWN LOAD THE  VALUES  AS A PDF ");
    };

    const handleSubmit  = (e) => {
        e.preventDefault();

        post(route('hiley.store'));
    };

return (

    <AuthenticatedLayout
        header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            <div
            className={`transition-all duration-700 transform ${
            loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
            >
                <p className="text-gray-800">Hiley Formula</p>
            </div>
        </h2>
        }
    >
        <Head title="Hileyformula"/>
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <div className="container mx-auto py-8" name="pilevalues_1" id="pilevalues_1">
                <div className="flex flex-wrap gap-2">
                {/* Box 1: Form */}
                    <div className="flex-[2]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6" id="hileyformula_pdf">
                            <h2 className="text-xl font-semibold mb-4">
                                <div className={`transition-all duration-700 transform ${
                                        loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                                    }`}
                                >
                                    Hiley Formula Input
                                </div>
                            </h2>
                            <div className="flex border-b border-gray-300 mb-6">
                                {[
                                { key: '1', label: 'Hiley Form' },
                                { key: '2', label: 'Pile Capacity Table' },
                                { key: '3', label: 'Temporary Compresions' },
                                { key: '4', label: 'History' },
                                ].map((tab) => (
                                <button
                                    type = "button"
                                    key={tab.key}
                                    className={`px-4 py-2 -mb-px text-sm font-medium text-gray-600 border-b-2 transition-colors duration-300 ${
                                    tabIndex === tab.key
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent hover:text-blue-500'
                                    }`}
                                    onClick={() => setTabIndex(tab.key)}
                                >
                                {tab.label}
                                </button>
                                ))}
                            </div>

                            {/****Tab 1****/}
                            {tabIndex === '1' && (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                                        <div className="md:col-span-12">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilediameter">Pile Diameter: D =</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="pilediameter" id="pilediameter" required
                                                placeholder="Pile Diameter"
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                onChange={handlePileDiameter}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            mm
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilelength">Pile Length: L :=</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="pilelength" id="pilelength"
                                                required
                                                placeholder="Pile Length"
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                onChange={(e) => setpilelength(e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            m
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weighthammer">Weight of hammer: W :=</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="weighthammer" id="weighthammer" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of hammer"
                                                onChange={(e) => setweighthammer(e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            kN
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weightanvil">Weight of Anvil: W<sub>a</sub> :=</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="weightanvil" id="weightanvil" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of Anvil"
                                                onChange={(e) => setweightanvil(e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            kN
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weighthelmet">Weight of Helmet: W<sub>H</sub> :=</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="weighthelmet" id="weighthelmet" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of Helmet"
                                                onChange={(e) => setweighthelmet(e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                        kN
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pileunitweight">Pile Unit Weight: W<sub>p</sub> :=</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="pileunitweight" id="pileunitweight" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Pile Unit Weight"
                                                onChange={handlePileTotalWeight}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <div className="relative group inline-block">
                                                <span className="text-black-600"> kN.m<sup>-3</sup></span>
                                                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500" />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-black text-white px-2 py-1 rounded shadow-lg z-10 text-center">
                                                    Timber pile
                                                </div>
                                            </div>

                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilebasearea">Pile Base Area: A:= &pi; . D<sup>2</sup>/4</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="pilebasearea" id="pilebasearea" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Pile Base Area"
                                                value={pilebasearea ? parseFloat(pilebasearea).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            m<sup>2</sup>
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="piletotalweight">Pile Total weight: W<sub>T</sub>:= W<sub>P</sub>
                                                . L . A </label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="piletotalweight" id="piletotalweight" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Pile Total weight"
                                                value={piletotalweight ? parseFloat(piletotalweight).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                        kN
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weightpileanvilhelmet">Weight of pile, anvil, & helmet: P :=
                                                W<sub>T</sub> + W<sub>A</sub> + W<sub>H</sub>
                                            </label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="weightpileanvilhelmet" id="weightpileanvilhelmet"
                                                required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of pile, anvil, & helmet"
                                                value={weightpileanvilhelmet ? parseFloat(weightpileanvilhelmet).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            kN
                                        </div>

                                        <button
                                        type = "button"
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
                                        </div>
                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="freefallheight">Free fall height of hammer ff ≔</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="freefallheight" id="freefallheight" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Free fall height of hammer"
                                                onChange={(e) => setfreefallheight(e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            mm
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="efficiencyfall">Efficiency of fall Eff ≔</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="efficiencyfall" id="efficiencyfall" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Efficiency of fall Eff"
                                                onChange={handleEffectiveHeightFall}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            %
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="effectiveheight">
                                                Effective height of fall h ≔ ff ⋅ Eff =
                                            </label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="effectiveheight" id="effectiveheight" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Effective height of fall"
                                                value={effectiveheight ? parseFloat(effectiveheight).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            m
                                        </div>
                                        <button
                                            type = "button"
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
                                        </div>
                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="effectiveheight">Final set or penetration per blow
                                                (mean of final 10 blows) S ≔
                                            </label>
                                        </div>
                                        <div className="md:col-span-5">
                                            <input type="number" name="finalpenetration" id="finalpenetration" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Final set or penetration per blow (mean of final 10 blows)"
                                                onChange={(e) => setfinalpenetration(e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">

                                            <div className="relative group inline-block">
                                                <span className="text-black-600">mm</span>
                                                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500" />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-black text-white px-2 py-1 rounded shadow-lg z-10 text-center">
                                                    Vary set to achieve design load
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:col-span-3">
                                        &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="effectiveheight">
                                                Coefficient of restitution e ≔
                                            </label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="coefficientrestitution" id="coefficientrestitution"
                                                required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Coefficient of restitution"
                                                onChange={handleEfficiency}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <div className="relative group inline-block">
                                                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500" />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-black text-white px-2 py-1 rounded shadow-lg z-10 text-center">
                                                    Single Acting Hammer Timber piles
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="efficiencyblow">Efficiency of blow</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="efficiencyblow" id="efficiencyblow" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Efficiency of blow"
                                                value={efficiencyblow ? parseFloat(efficiencyblow).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                        &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="potentialenergyhammer">Potential Energy of hammer in free falL</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="potentialenergyhammer" id="potentialenergyhammer"
                                                required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Potential Energy of hammer in free falL"
                                                value={potentialenergyhammer ? parseFloat(potentialenergyhammer).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            J
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="drivingforce">Driving Force</label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="drivingforce" id="drivingforce" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Driving Force"
                                                value={drivingforce ? parseFloat(drivingforce).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                         kN
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="stresspilesdrivingforce">Stress in Piles due to Driving Force  &sigma;
                                                <sub>D</sub>
                                            </label>
                                        </div>
                                        <div className="md:col-span-8">
                                            <input type="number" name="stresspilesdrivingforce" id="stresspilesdrivingforce"
                                                required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Stress in Piles due to Driving Force"
                                                value={stresspilesdrivingforce ? parseFloat(stresspilesdrivingforce).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            MPa
                                        </div>

                                        <div className="md:col-span-12">
                                            if &sigma;<sub>D</sub> {'>'} 9.9 MPa , "Check Driving Type" , "Medium" = "Medium"
                                        </div>

                                        <button
                                            type = "button"
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
                                        </div>
                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilediameter">Elastic compression of pile
                                                head / dolly / packing: C<sub>c</sub>:=
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="elasticcompresion" id="elasticcompresion" required
                                                placeholder="Elastic compression of pile head / dolly / packing "
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   onChange={(e) => setelasticcompresion(e.target.value)}
                                            />
                                        </div>

                                        <div className="md:col-span-1">
                                            <div className="relative group inline-block">
                                                mm
                                                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500" />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1
                                                    w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                                    text-xs bg-black text-white px-2 py-1 rounded shadow-lg z-10 text-center">
                                                    Medium driving
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>
                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilediameter">Elastic compression of pile C<sub>p</sub>:=
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="elasticcompresion2" id="elasticcompresion2" required
                                                   placeholder="Elastic compression of pile "
                                                   step="any"
                                                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   onChange={(e) => setelasticcompresion2(e.target.value)}
                                            />
                                        </div>

                                        <div className="md:col-span-1">
                                            <div className="relative group inline-block">
                                                mm
                                                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500" />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1
                                                    w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                                    text-xs bg-black text-white px-2 py-1 rounded shadow-lg z-10 text-center">
                                                    Timber Pile / Medium driving
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type = "button"
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
                                        <div className="md:col-span-4">
                                            &nbsp;
                                            <button
                                                type = "button"
                                                onClick={handleDownLoad}
                                                className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${isVisibleBT5 ? '' : 'hidden'}`}
                                            >
                                                DownLoad PDF
                                            </button>
                                        </div>
                                        <div className="md:col-span-4">
                                            <button
                                                type="submit"
                                                className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 }`}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* TAB: Pile Capacity Table Content */}
                            {tabIndex === '2' && (
                                <>
                                    <div className="py-6">
                                        <h3 className="text-lg font-semibold mb-4">Pile Capacity Table</h3>
                                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Set (mm/blow)
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Ultimate Resistance (kN)
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Design Resistance (kN)
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">

                                                        <tr >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ee</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">tt</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ttt</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* TAB: Temporary Compresions Content */}
                            {tabIndex === '3' && (
                                <>
                                    <div className="py-6">
                                        <h3 className="text-lg font-semibold mb-4">Table 8. Temporary Compresion</h3>
                                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Form of Compresion
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Material
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Easy Driving
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Medium Driving
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            hard Driving
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Very hard Driving
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">

                                                    <tr >
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ee</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">tt</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ttt</td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {/* TAB: History Content */}
                            {tabIndex === '4' && (
                                <>
                                    <div className="py-12">
                                        <div className="max-w-6xl mx-auto p-6">
                                            <h1 className="text-2xl font-bold mb-6">Hiley Formula History</h1>

                                            {result.length === 0 ? (
                                                <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded">
                                                    No history found.
                                                </div>
                                            ) : (
                                                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                                                    <table className="min-w-full border-collapse">
                                                        <thead>
                                                        <tr className="bg-gray-100 text-gray-700">
                                                            <th className="px-6 py-3 text-left text-sm font-semibold border-b">Project name</th>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold border-b">Created At</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {result.map((history, index) => (
                                                            <tr
                                                                key={history.id}
                                                                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                                            >
                                                                <td className="px-6 py-4 text-sm border-b"
                                                                    onClick={() => setSelectedProject(history)}
                                                                >{history.project_name}</td>
                                                                <td className="px-6 py-4 text-sm border-b">{history.created_at}</td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {selectedProject && (
                                        <div className="py-12 fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-90">
                                            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                                                <h2 className="text-xl font-bold mb-4">{selectedProject.project_name}</h2>
                                                <p><span className="font-semibold">ID:</span> {selectedProject.id}</p>
                                                <p><span className="font-semibold">Project ID:</span> {selectedProject.project_id}</p>
                                                <p><span className="font-semibold">Created At:</span> {selectedProject.created_at}</p>
                                                <p><span className="font-semibold">Updated At:</span> {selectedProject.updated_at}</p>

                                                {/* Close Button */}
                                                <div className="mt-6 flex justify-end">
                                                    <button
                                                        onClick={() => setSelectedProject(null)}
                                                        className="w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}


                            {/* END TAB 1*/}
                        </div>
                        {/*END  BOX1 */}
                    </div>

                    { /* Box 2: Can be results or other content */}
                    <div className="flex-[1]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <div
                            className={`transition-all duration-2500 transform ${
                            loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                            }`}
                            >
                                <h2 className="text-xl font-semibold mb-4">Hiley Formula Image</h2>
                                <p>Image will show here...</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet asperiores commodi consequuntur, cumque est exercitationem nemo nostrum nulla odio officia omnis perferendis placeat quis repellat sapiente sit vero voluptatem!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
            <div className="md:col-span-4">
                &nbsp;
            </div>
    </AuthenticatedLayout>
)
;
}
