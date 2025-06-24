import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {useState} from "react";

export default function Test_tabs() {

    const [activeTab, setActiveTab] = useState('home');

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    TEST PAGE
                </h2>
            }
        >
            <Head title="TEST"/>
            <div className="container mx-auto py-8" name="pilevalues_1" id="pilevalues_1">
                <div className="flex flex-wrap gap-2">
                    {/* Box 1: Form */}
                    <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                        <div className="flex-[2]">
                            test 1
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-md rounded-lg p-6">
                        <div className="flex-[1]">
                            test 2
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
)
    ;
}
