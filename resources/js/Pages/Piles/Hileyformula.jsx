import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function Hileyformula({ result = [] }) {

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
        elasticcompresion2: '',
        quake: '',
        totaltempcompresion: '',
        ultimatedrivingresistance:'',
        strenghtreductionfactor:'',
        designpileload:'',
    });

    const [selectedProject, setSelectedProject] = useState(null);
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
        setData('pilediameter', value);

        const numericDiameter = parseFloat(value);
        if (!isNaN(numericDiameter) && numericDiameter > 0) {
            const calculatedAreaMM = (Math.PI * Math.pow(numericDiameter, 2)) / 4;
            const calculatedArea = calculatedAreaMM / 1000000 ;
            setData('pilebasearea', calculatedArea); // round to 2 decimal places
        } else {
            setData('pilebasearea', null); // reset if input is invalid
        }
    };
    const handlElasticcomprsion = (e) => {
        const value = e.target.value;
        setData('pilelength', value);

        const calculatedRename = 0.00013 * parseFloat(value || 0);
        setData('elasticcompresion2', calculatedRename);
    }
    const handleEfficiency   = (e) => {

        const value = parseFloat( e.target.value );
        setData('coefficientrestitution',value);
        const tmpcoefficientrestitution = Math.pow(value, 2);
        const tmpweighthammer = parseFloat(data.weighthammer);
        const tmpweightpileanvilhelmet = parseFloat(data.weightpileanvilhelmet);
        const tmpeffectiveheightfall =  parseFloat(data.effectiveheight) ;
        const tmpfinalpenetration = parseFloat(data.finalpenetration) ;
        const tmppilebasearea = parseFloat(data.pilebasearea) ;

        const EfficiencyofBlow =
        (tmpweighthammer + (tmpweightpileanvilhelmet * tmpcoefficientrestitution))
        /(tmpweighthammer + tmpweightpileanvilhelmet) ;

        const Potentialenergyhammer = (tmpweighthammer  * tmpeffectiveheightfall) * 1000;

        const Drivingforce = ( tmpweighthammer *(tmpeffectiveheightfall/tmpfinalpenetration )) * 1000  ;

        const Stresspilesdrivingforce = (Potentialenergyhammer)/(tmpfinalpenetration*tmppilebasearea) ;

        setData('efficiencyblow', EfficiencyofBlow);
        setData('potentialenergyhammer', Potentialenergyhammer);
        setData('drivingforce', Drivingforce);
        setData('stresspilesdrivingforce', Stresspilesdrivingforce);
    };

    const  handlePileTotalWeight  = (e) => {

        const value = e.target.value;
        setData('pileunitweight', value);

        const unitWeight = parseFloat(value) || 0;
        const length = parseFloat(data.pilelength) || 0;
        const baseArea = parseFloat(data.pilebasearea) || 0;
        const anvilWeight = parseFloat(data.weightanvil) || 0;
        const helmetWeight = parseFloat(data.weighthelmet) || 0;

        const totalWeight = unitWeight * length * baseArea;
        setData('piletotalweight', totalWeight);

        const totalCombinedWeight = totalWeight + anvilWeight + helmetWeight;
        setData('weightpileanvilhelmet', totalCombinedWeight);
    };

    const  handleEffectiveHeightFall  = (e) => {

        const value = e.target.value;
        setData('efficiencyfall', value);
        const numericefficiencyfall = parseFloat(value)/100;
        const numericfreefallheight = parseFloat(data.freefallheight);

        const effectiveheightFall = (numericefficiencyfall * numericfreefallheight)/1000;

        setData('effectiveheight', effectiveheightFall);
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
                                            <label htmlFor="pilediameter">Projectname</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="text" name="projectname" id="projectname" required
                                                   placeholder="Project Name"
                                                   step="any"
                                                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   value={data.projectname}
                                                   onChange={(e) => setData('projectname', e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                                        <div className="md:col-span-12">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilediameter">Pile Diameter: D =</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="pilediameter" id="pilediameter" required
                                                placeholder="Pile Diameter"
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                value={data.pilediameter}
                                                onChange={handlePileDiameter}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            mm
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilelength">Pile Length: L :=</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="pilelength" id="pilelength"
                                                required
                                                placeholder="Pile Length"
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                value = {data.pilelength}
                                                onChange={handlElasticcomprsion}
                                            /> 
                                        </div>
                                        <div className="md:col-span-1">
                                            m
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weighthammer">Weight of hammer: W :=</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="weighthammer" id="weighthammer" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of hammer"
                                                value = {data.weighthammer}
                                                onChange={(e) =>  setData('weighthammer', e.target.value) }
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            kN
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weightanvil">Weight of Anvil: W<sub>a</sub> :=</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="weightanvil" id="weightanvil" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of Anvil"
                                                value = {data.weightanvil}
                                                onChange={(e) =>  setData('weightanvil', e.target.value) }
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            kN
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weighthelmet">Weight of Helmet: W<sub>H</sub> :=</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="weighthelmet" id="weighthelmet" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of Helmet"
                                                value = {data.weighthelmet}
                                                onChange={(e) =>  setData('weighthelmet', e.target.value) }
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                        kN
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pileunitweight">Pile Unit Weight: W<sub>p</sub> :=</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="pileunitweight" id="pileunitweight" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Pile Unit Weight"
                                                value={data.pileunitweight}
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
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="pilebasearea">Pile Base Area: A:= &pi; . D<sup>2</sup>/4</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="pilebasearea" id="pilebasearea" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Pile Base Area"
                                                value={data.pilebasearea ? parseFloat(data.pilebasearea).toFixed(3) : ''}

                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            m<sup>2</sup>
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="piletotalweight">Pile Total weight: W<sub>T</sub>:= W<sub>P</sub>
                                                . L . A </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="piletotalweight" id="piletotalweight" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Pile Total weight"
                                                value={data.piletotalweight ? parseFloat(data.piletotalweight).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                        kN
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="weightpileanvilhelmet">Weight of pile, anvil, & helmet: P :=
                                                W<sub>T</sub> + W<sub>A</sub> + W<sub>H</sub>
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="weightpileanvilhelmet" id="weightpileanvilhelmet"
                                                required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Weight of pile, anvil, & helmet"
                                                value={data.weightpileanvilhelmet ? parseFloat(data.weightpileanvilhelmet).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            kN
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
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
                                        <div className="md:col-span-4">
                                            <input type="number" name="freefallheight" id="freefallheight" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Free fall height of hammer"
                                                value={data.freefallheight}
                                                onChange={(e) => setData('freefallheight', e.target.value)}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            mm
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="efficiencyfall">Efficiency of fall E<sub>ff</sub> ≔</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="efficiencyfall" id="efficiencyfall" required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Efficiency of fall Eff"
                                                value = {data.efficiencyfall}
                                                onChange={handleEffectiveHeightFall}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            %
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="effectiveheight">
                                                Effective height of fall h ≔ ff ⋅ Eff =
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="effectiveheight" id="effectiveheight" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Effective height of fall"
                                                value={data.effectiveheight ? parseFloat(data.effectiveheight).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            m
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
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
                                                value={data.finalpenetration }
                                                onChange={(e) => setData('finalpenetration',e.target.value)}

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
                                        <div className="md:col-span-4">
                                            <input type="number" name="coefficientrestitution" id="coefficientrestitution"
                                                required
                                                step="any"
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Coefficient of restitution"
                                                value = {data.coefficientrestitution}
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
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="efficiencyblow">Efficiency of blow</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="efficiencyblow" id="efficiencyblow" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Efficiency of blow"
                                                value={data.efficiencyblow ? parseFloat(data.efficiencyblow).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-5">
                                        &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="potentialenergyhammer">Potential Energy of hammer in free falL</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="potentialenergyhammer" id="potentialenergyhammer"
                                                required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Potential Energy of hammer in free falL"
                                                value={data.potentialenergyhammer ? parseFloat(data.potentialenergyhammer).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            J
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="drivingforce">Driving Force</label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="drivingforce" id="drivingforce" required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Driving Force"
                                                value={data.drivingforce ? parseFloat(data.drivingforce).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                         kN
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="stresspilesdrivingforce">Stress in Piles due to Driving Force  &sigma;
                                                <sub>D</sub>
                                            </label>
                                        </div>
                                        <div className="md:col-span-5">
                                            <input type="number" name="stresspilesdrivingforce" id="stresspilesdrivingforce"
                                                required
                                                step="any" disabled
                                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                placeholder="Stress in Piles due to Driving Force"
                                                value={data.stresspilesdrivingforce ? parseFloat(data.stresspilesdrivingforce).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            MPa
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
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
                                                   value={data.elasticcompresion }
                                                   onChange={(e) => setData('elasticcompresion',e.target.value)}
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
                                                   value={data.elasticcompresion2 ? parseFloat(data.elasticcompresion2).toFixed(6) : ''}
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

                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>


                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="quake">Quake of ground beneath pile
                                                C<sub>q</sub> =
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="quake" id="quake"
                                                   required
                                                   step="any" disabled
                                                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   placeholder="Quake of ground beneath pile"
                                                   value={data.quake ? parseFloat(data.quake).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <div className="md:col-span-1">
                                                <div className="relative group inline-block">
                                                    mm
                                                    <QuestionMarkCircleIcon className="w-5 h-5 text-gray-500" />
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-200
					                                    text-xs bg-black text-white px-2 py-1 rounded shadow-lg z-10 text-center">
                                                        Medium driving (Table A1)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="totaltempcompresion">Total temporary compression C:= C<sub>c</sub> + C<sub>p</sub> + C<sub>q</sub>
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="totaltempcompresion" id="totaltempcompresion"
                                                   required
                                                   step="any" disabled
                                                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   placeholder="Stress in Piles due to Driving Force"
                                                   value={data.totaltempcompresion ? parseFloat(data.totaltempcompresion).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <div className="md:col-span-1">
                                                <div className="relative group inline-block">
                                                    mm
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="ultimatedrivingresistance">
                                                Ultimate driving resistance R =
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="ultimatedrivingresistance" id="ultimatedrivingresistance"
                                                   required
                                                   step="any" disabled
                                                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   placeholder="Ultimate driving resistance"
                                                   value={data.ultimatedrivingresistance ? parseFloat(data.ultimatedrivingresistance).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <div className="md:col-span-1">
                                                <div className="relative group inline-block">
                                                    kN

                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>


                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="strenghtreductionfactor">Strength Reduction Factor  &sigma; =
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="strenghtreductionfactor" id="strenghtreductionfactor"
                                                   required
                                                   step="any" disabled
                                                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   placeholder="Strength Reduction Factor"
                                                   value={data.strenghtreductionfactor ? parseFloat(data.strenghtreductionfactor).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <div className="md:col-span-1">
                                                <div className="relative group inline-block">
                                                    kN
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
                                        </div>


                                        <div className="md:col-span-3 flex items-center">
                                            <label htmlFor="designpileload">Design Pile Load  &sigma;N =  &sigma;*R =
                                            </label>
                                        </div>
                                        <div className="md:col-span-4">
                                            <input type="number" name="designpileload" id="designpileload"
                                                   required
                                                   step="any" disabled
                                                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                   placeholder="Design Pile Load"
                                                   value={data.designpileload ? parseFloat(data.designpileload).toFixed(3) : ''}
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <div className="md:col-span-1">
                                                <div className="relative group inline-block">
                                                    kN

                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-4">
                                            &nbsp;
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
                                        <div className="md:col-span-12">
                                            &nbsp;
                                        </div>
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

                                            {!Array.isArray(result) || result.length === 0 ? (
                                                <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded">
                                                    No history found.
                                                </div>
                                            ) : (
                                                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                                                    <table className="min-w-full border-collapse">
                                                        <thead>
                                                        <tr className="bg-gray-100 text-gray-700">
                                                            <th className="px-6 py-3 text-left text-sm font-semibold border-b">
                                                                Project name
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold border-b">
                                                                Created At
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {result.map((history, index) => (
                                                            <tr
                                                                key={history.id || index}
                                                                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                                            >
                                                                <td
                                                                    className="px-6 py-4 text-sm border-b cursor-pointer hover:text-blue-500"
                                                                    onClick={() => setSelectedProject(history)}
                                                                >
                                                                    {history.project_name}
                                                                </td>
                                                                <td className="px-6 py-4 text-sm border-b">
                                                                    {history.created_at}
                                                                </td>
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
                                                <h2 className="text-xl font-bold mb-4">
                                                    {selectedProject.project_name}
                                                </h2>
                                                <p>
                                                    <span className="font-semibold">ID:</span> {selectedProject.id}
                                                </p>
                                                <p>
                                                    <span className="font-semibold">Project ID:</span>{" "}
                                                    {selectedProject.project_id}
                                                </p>
                                                <p>
                                                    <span className="font-semibold">Created At:</span>{" "}
                                                    {selectedProject.created_at}
                                                </p>
                                                <p>
                                                    <span className="font-semibold">Updated At:</span>{" "}
                                                    {selectedProject.updated_at}
                                                </p>

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
