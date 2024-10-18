import React from "react";
import blank_image from '../assets/image.png'

const Dashboard = () => {
    return (
        <main className="flex-1 pt-16">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-white mt-10 mb-8">Dashboard</h1>
                <p className="text-lg mb-4 text-white mb-9">
                    Welcome to the Dashboard. Here you can find an overview of the key metrics and activities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white mb-16">
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-2xl font-semibold mb-4">Metric 1</h2>
                            <img src={blank_image} alt="blank image"/>
                            <p>Details about Metric 1...</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-2xl font-semibold mb-4">Metric 2</h2>
                            <img src={blank_image} alt="blank image"/>
                            <p>Details about Metric 2...</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-2xl font-semibold mb-4">Metric 3</h2>
                            <img src={blank_image} alt="blank image"/>
                            <p>Details about Metric 3...</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-2xl font-semibold mb-4">Metric 4</h2>
                            <img src={blank_image} alt="blank image"/>
                            <p>Details about Metric 4...</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-2xl font-semibold mb-4">Metric 5</h2>
                            <img src={blank_image} alt="blank image"/>
                            <p>Details about Metric 5...</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                            <h2 className="text-2xl font-semibold mb-4">Metric 6</h2>
                            <img src={blank_image} alt="blank image"/>
                            <p>Details about Metric 6...</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;