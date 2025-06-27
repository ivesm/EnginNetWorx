import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {useState} from "react";

export default function Test_tabs() {

    const [activeTab, setActiveTab] = useState('home');

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    TEST TABS
                </h2>
            }
        >
            <Head title="TEST TABS"/>
                <div className="w-full max-w-6xl mx-auto mt-10">
                    {/* Tab Headers */}
                    <div className="flex border-b border-gray-300">
                        {['home', 'profile', 'settings'].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 -mb-px text-sm font-medium text-gray-600 border-b-2 transition-colors duration-300 ${
                                    activeTab === tab
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent hover:text-blue-500'
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 bg-white shadow-md rounded-b-md">
                        {activeTab === 'home' && <div>🏠 Home Content

                            <div className="flex flex-wrap gap-2">
                                {/* Box 1: Form */}
                                <div className="flex-[2]">
                                    <h2 className="text-xl font-semibold mb-4">BOX 1</h2>
                                    <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                                            <div className="md:col-span-3 flex items-center">
                                                <label htmlFor="pilediameter">Pile Diameter: D :=</label>
                                            </div>
                                            <div className="md:col-span-8">
                                                <input type="number" name="pilediameter" id="pilediameter" required
                                                       placeholder="0"
                                                       step="any"
                                                       className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                                />
                                            </div>
                                            <div className="md:col-span-1">
                                                mm
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                { /* Box 2: Can be results or other content */}
                                <div className="flex-[1]">
                                    <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                                        <h2 className="text-xl font-semibold mb-4">BOX 2</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis cum doloribus itaque laborum minus natus nisi non, pariatur porro praesentium quidem ratione, repellat repellendus similique suscipit ullam unde. Beatae?</p>
                                    </div>
                                </div>
                            </div>

                        </div>}
                        {activeTab === 'profile' && <div>👤 Profile Content

                            <button className="w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                                Hover Me
                            </button>
                        </div>}
                        {activeTab === 'settings' && <div>⚙️ Settings Content</div>}
                    </div>
                </div>

        </AuthenticatedLayout>
)
    ;
}
