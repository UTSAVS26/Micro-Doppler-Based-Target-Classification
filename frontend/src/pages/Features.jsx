import React from "react";
import clock from '../assets/clock.png';
import dronebirds from '../assets/drone_with_birds.jpg'
import radar from '../assets/radar.png'
import ml from '../assets/ml.jpg'
import cust_scal from '../assets/custon_scal.png'

const Features = () => {
    return (
        <main className="flex-1 pt-16">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mt-10 mb-10 text-white">Features</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-center">Real-time detection</h2>
                        <img src={clock} alt="clock" />
                        <p className="text-white text-center">Real-time detection and tracking of targets.</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-center">High classification accuracy</h2>
                        <img src={dronebirds} alt="drones with birds" />
                        <p className="text-white">High accuracy in distinguishing between drones and birds.</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400">
                        <div className="grid grid-cols-1 gap-2">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-center">Radar sensor technology</h2>
                        <img src={radar} alt="radar" />
                        <p className="text-white text-center">Integration with modern radar sensor technology</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400 mb-12">
                        <div className="grid grid-cols-1 gap-2">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-center">Machine Learning</h2>
                        <img src={ml} alt="machine learning" />
                        <p className="text-white text-center">Machine learning algorithms for feature extraction and classification</p>
                        </div>
                    </div>
                    <div className="box shadow-md rounded-lg p-6 border-2 border-violet-400 mb-12">
                        <div className="grid grid-cols-1 gap-2">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-center">Flexibility</h2>
                        <img src={cust_scal} alt="customisable and scalable" />
                        <p className="text-white text-center">Customizable and scalable for various applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Features;