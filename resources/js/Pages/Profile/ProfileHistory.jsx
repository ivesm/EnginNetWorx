import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import { useState } from 'react';
export default function ProfileHistory({ result }) {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Saved Projects
                </h2>
            }
        >
            <Head title="Piles" />

            <div className="py-12">
                <div className="max-w-6xl mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-6">Profile History</h1>

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

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500 bg-opacity-90">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
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
        </AuthenticatedLayout>
    );
}
