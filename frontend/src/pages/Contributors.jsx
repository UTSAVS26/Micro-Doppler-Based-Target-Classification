import React from 'react';
import ContributorsList from '../Components/Contributors/ContributorsList';

const Contributors = () => {
  return (
    <main className="flex-1 pt-16">
        <h1 className="text-4xl font-bold text-center mt-10 mb-5 text-white">Contributors</h1>
        <div className="contributors-section mt-5">
            <ContributorsList />
        </div>
    </main> 
  );
};

export default Contributors;