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
                <div className="w-full max-w-4xl mx-auto mt-10">
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
                        {activeTab === 'home' && <div>🏠 Home Content</div>}
                        {activeTab === 'profile' && <div>👤 Profile Content</div>}
                        {activeTab === 'settings' && <div>⚙️ Settings Content</div>}
                    </div>
                </div>

        </AuthenticatedLayout>
)
    ;
}
