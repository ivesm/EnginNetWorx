import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
export default function Hileyformula() {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
    setLoaded(true);
    }, []);

    const { data, setData, post, processing, errors } = useForm({
        projectname : '' ,
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

    const [pilediameter, setpilediameter] = useState(0);
    const [pilebasearea, setpilebasearea] = useState(0);
    const [projectname, setprojectname] = useState(0);




    const [tabIndex, setTabIndex] = useState("1");
    const handlePileDiameter = (e) => {
        const value = e.target.value;
        setpilediameter(value);
        setData('pilediameter', value);
        const area = Math.PI * Math.pow(value / 1000, 2) / 4; // e.g. area in m²
        setpilebasearea(area.toFixed(4)); // if you're storing this locally
        setData('pilebasearea', area.toFixed(4));

    };

    const handleSubmit  = (e) => {
        e.preventDefault();


        post(route('hiley.test'));
    };

    const handleDownLoad = async (e) => {
        alert(" THIS  WILL  DOWN LOAD THE  VALUES  AS A PDF ");
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
                                    TEST PAGE
                                </div>
                            </h2>
                            <div className="flex border-b border-gray-300 mb-6">
                                {[
                                { key: '1', label: 'Hiley Form' },
                                { key: '2', label: 'Info' }
                                ].map((tab) => (
                                <button
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
                                                   placeholder="ProjectName"
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
                                        <div className="md:col-span-3">
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
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
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
                                    </div>

                                    <div className="md:col-span-4">
                                        &nbsp;
                                        <button
                                            type="submit"
                                            className={`w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 }`}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* TAB: Info Content */}
                            {tabIndex === '2' && (
                                <>
                                    <div className="text-gray-700">
                                        <h3 className="text-lg font-semibold mb-4">Formula Info</h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li><strong>e</strong> = coefficient of restitution</li>
                                            <li><strong>Eff</strong> = hammer efficiency (%)</li>
                                            <li><strong>S</strong> = set per blow (mm)</li>
                                            <li><strong>Wp</strong> = pile weight</li>
                                        </ul>
                                    </div>
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
