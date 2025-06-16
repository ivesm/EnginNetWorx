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
    const [isVisible6, setIsVisible6] = useState(false);

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
                                    Block 1
                                    &nbsp;
                                </div>
                                <div className="md:col-span-3 flex items-center">
                                    <label htmlFor="pilediameter">Pile Diameter: D :=</label>
                                </div>
                                <div className="md:col-span-8">
                                    <input type="number" name="pilediameter" id="pilediameter" required
                                           placeholder="0"
                                           step="any"
                                           className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                           value={pilediameter}
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
                                           placeholder="0"
                                           step="any"
                                           className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                           value={pilelength}
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
                                           placeholder="0"
                                           value={weighthammer}
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
                                           placeholder="0"
                                           value={weightanvil}
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
                                           placeholder="0"
                                           value={weighthelmet}
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
                                           placeholder="0"
                                           value={pileunitweight}
                                           onChange={handlePileTotalWeight}
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    kN.m<sup>-3</sup>
                                </div>

                                <div className="md:col-span-3 flex items-center">
                                    <label htmlFor="pilebasearea">Pile Base Area: A:= &pi; . D<sup>2</sup>/4</label>
                                </div>
                                <div className="md:col-span-8">
                                    <input type="number" name="pilebasearea" id="pilebasearea" required
                                           step="any" disabled
                                           className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                           placeholder="0"
                                           value={parseFloat(pilebasearea).toFixed(3)}
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
                                           placeholder="0"
                                           value={parseFloat(piletotalweight).toFixed(3)}
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    kN
                                </div>

                                <div className="md:col-span-3 flex items-center">
                                    <label htmlFor="weightpileanvilhelmet">Weight of pile, anvil, & helmet: P :=
                                        W<sub>T</sub> + W<sub>A</sub> + W<sub>H</sub> </label>
                                </div>
                                <div className="md:col-span-8">
                                    <input type="number" name="weightpileanvilhelmet" id="weightpileanvilhelmet"
                                           required
                                           step="any" disabled
                                           className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                           placeholder="0"
                                           value={parseFloat(weightpileanvilhelmet).toFixed(3)}
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    kN
                                </div>

                                <button
                                    onClick={() => {
                                        setIsVisible2(!isVisible2);
                                        setIsVisibleBT2(!isVisibleBT2);
                                        setIsVisibleBT1(!isVisibleBT1);
                                    }}
                                    className={`w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT1 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                                <div className="md:col-span-12">
                                    &nbsp;
                                    {/*Block1 End*/}
                                </div>
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible2 ? '' : 'hidden'}`}>
                                <div className="md:col-span-12">
                                    <br/> &nbsp;
                                    {/*Block2*/}
                                </div>

                                <div className="md:col-span-3 flex items-center">
                                    <label htmlFor="freefallheight">Free fall height of hammer ff ≔</label>
                                </div>
                                <div className="md:col-span-8">
                                    <input type="number" name="freefallheight" id="freefallheight" required
                                           step="any"
                                           className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                           value={freefallheight}
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
                                           value={efficiencyfall}
                                           onChange={handleEffectiveHeightFall}
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    %
                                </div>

                                <div className="md:col-span-3 flex items-center">
                                    <label htmlFor="effectiveheight">Effective height of fall h ≔ ff ⋅ Eff =</label>
                                </div>
                                <div className="md:col-span-8">
                                    <input type="number" name="effectiveheight" id="effectiveheight" required
                                           step="any" disabled
                                           className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                           placeholder="0"
                                           value={parseFloat(effectiveheight).toFixed(2)}
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    m
                                </div>
                                <button
                                    onClick={() => {
                                        setIsVisible3(!isVisible3)
                                        setIsVisibleBT3(!isVisibleBT3);
                                        setIsVisibleBT2(!isVisibleBT2);
                                    }}
                                    className={`w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT2 ? '' : 'hidden'}`}
                                >
                                    Continue
                                </button>
                                <div className="md:col-span-12">
                                    &nbsp;
                                    {/*Block2  eD*/}
                                </div>
                            </div>

                        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible3 ? '' : 'hidden'}`}>
                            <div className="md:col-span-12">
                                &nbsp;
                                <br/>Block 3
                            </div>

                            <div className="md:col-span-3 flex items-center">
                                <label htmlFor="effectiveheight">Final set or penetration per blow
                                    (mean of final 10 blows) S ≔</label>
                            </div>
                            <div className="md:col-span-8">
                                <input type="number" name="finalpenetration" id="finalpenetration" required
                                       step="any"
                                       className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                       value={finalpenetration}
                                       onChange={(e) => setfinalpenetration(e.target.value)}
                                />
                            </div>
                            <div className="md:col-span-1">
                                mm Vary set to achieve design load
                            </div>

                            <div className="md:col-span-3 flex items-center">
                                <label htmlFor="effectiveheight">Coefficient of restitution e ≔</label>
                            </div>
                            <div className="md:col-span-8">
                                <input type="number" name="coefficientrestitution" id="coefficientrestitution"
                                       required
                                       step="any"
                                       className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                       value={coefficientrestitution}
                                       onChange={handleEfficiency}
                                />
                            </div>
                            <div className="md:col-span-1">
                                Single Acting Hammer Timber piles
                            </div>

                            <div className="md:col-span-3 flex items-center">
                                <label htmlFor="efficiencyblow">Efficiency of blow</label>
                            </div>
                            <div className="md:col-span-8">
                                <input type="number" name="efficiencyblow" id="efficiencyblow" required
                                       step="any" disabled
                                       className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                       placeholder="0"
                                       value={parseFloat(efficiencyblow).toFixed(3)}
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
                                       placeholder="0"
                                       value={parseFloat(potentialenergyhammer).toFixed(3)}
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
                                       placeholder="0"
                                       value={parseFloat(drivingforce).toFixed(3)}
                                />
                            </div>
                            <div className="md:col-span-1">
                                kN
                            </div>

                            <div className="md:col-span-3 flex items-center">
                                <label htmlFor="stresspilesdrivingforce">Stress in Piles due to Driving Force  &sigma;
                                    <sub>D</sub></label>
                            </div>
                            <div className="md:col-span-8">
                                <input type="number" name="stresspilesdrivingforce" id="stresspilesdrivingforce"
                                       required
                                       step="any" disabled
                                       className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                       placeholder="0"
                                       value={parseFloat(stresspilesdrivingforce).toFixed(3)}
                                />
                            </div>
                            <div className="md:col-span-1">
                                MPa
                            </div>

                            <div className="md:col-span-12">
                                if &sigma;<sub>D</sub> {'>'} 9.9 MPa , "Check Driving Type" , "Medium" = "Medium"
                            </div>

                            <button
                                onClick={() => {
                                    setIsVisible4(!isVisible4)
                                    setIsVisibleBT4(!isVisibleBT4);
                                    setIsVisibleBT3(!isVisibleBT3);
                                }}

                                className={`w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT3 ? '' : 'hidden'}`}
                            >
                                Continue
                            </button>
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible4 ? '' : 'hidden'}`}>
                            <div className="md:col-span-12">
                                &nbsp;
                                Block 4
                                &nbsp;
                            </div>

                            <button
                                onClick={() => {
                                    setIsVisible5(!isVisible5)
                                    setIsVisibleBT5(!isVisibleBT5);
                                    setIsVisibleBT4(!isVisibleBT4);
                                }}
                                className={`w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT4 ? '' : 'hidden'}`}
                            >
                                Continue
                            </button>
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${isVisible5 ? '' : 'hidden'}`}>
                            <div className="md:col-span-12">
                                &nbsp;
                                Block 5
                                &nbsp;
                            </div>

                            <button
                                onClick={() => {
                                    setIsVisible6(!isVisible6)
                                }}

                                className={`w-64 bg-blue-500 text-white py-2 px-4 rounded ${isVisibleBT5 ? '' : 'hidden'}`}
                            >
                                Continue
                            </button>
                        </div>
                        </div>
                    {/*END  BOX1 */}
                    </div>

                 { /* Box 2: Can be results or other content */}
                    <div className="flex-[1]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Hiley Formula Output</h2>
                            <p>Image will show here...</p>
                        </div>
                    </div>

                </div>
            </div>
            <div
                 className={`container mx-auto py-8 ${isVisible6 ? '' : 'hidden'}`}
                 name="pilevalues_2" id="pilevalues_2">
                <div className="flex flex-wrap gap-2">
                    {/* Box 1: Form */}
                    <div className="flex-[2]">
                        <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                            <p>Image will show here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
)
    ;
}
