import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="relative group w-max p-6 text-gray-900">
                            You're logged in!
                            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded py-1 px-2 z-10">
                                Tooltip text here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
