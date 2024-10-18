import React from "react";

const Features = () => {
    return (
        <main className="flex-1 pt-16">
            <div className="container mx-auto px-4 py-8">
                <div class="text-4xl font-bold text-center mt-10 mb-10">
                    <span class="text-white">How it </span>
                    <span class="text-orange-600">Works</span>
                    <span class="text-white">.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 text-white">
                    <div className="shadow-md rounded-lg p-6 border-2 border-green-400">
                        <div className="grid grid-cols-1 gap-2">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-left">Real-time detection</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus aliquet
lobortis. Pellentesque aliquet mauris id magna laoreet molestie. Aliquam rhoncus
magna ac auctor blandit. Curabitur ut purus vitae mi ultricies consequat. </p>
                    </div>
                    </div>
                    <div className="shadow-md rounded-lg p-6 border-2 border-blue-400">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-left">High classification accuracy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus aliquet
lobortis. Pellentesque aliquet mauris id magna laoreet molestie. Aliquam rhoncus
magna ac auctor blandit. Curabitur ut purus vitae mi ultricies consequat.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 border-2 border-yellow-400">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-left">Radar sensor technology</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus aliquet
lobortis. Pellentesque aliquet mauris id magna laoreet molestie. Aliquam rhoncus
magna ac auctor blandit. Curabitur ut purus vitae mi ultricies consequat.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 border-2 border-orange-400 mb-12">
                        <h2 className="text-2xl text-white font-semibold  mb-4 text-left">Machine Learning</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus aliquet
lobortis. Pellentesque aliquet mauris id magna laoreet molestie. Aliquam rhoncus
magna ac auctor blandit. Curabitur ut purus vitae mi ultricies consequat.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Features;