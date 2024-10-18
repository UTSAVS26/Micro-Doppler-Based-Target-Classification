import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-vertical-timeline-component/style.min.css';
import { MdPerson } from 'react-icons/md';

import { contributorsData } from './contributorsData';

const ContributorsList = () => {
  return (
    <div style={{ marginTop: '45px', marginBottom: '45px'}}>
      <VerticalTimeline lineColor="#ccc">
        {contributorsData.map((contributor) => (
          <VerticalTimelineElement
            key={contributor.id}
            contentStyle={{ backgroundColor: "#bddcef", color: "#000", padding: '20px' }} // Increased padding
            icon={<MdPerson />}
            iconStyle={{ backgroundColor: "#007bff", color: "#fff" }} // Adjusted icon style
            contentArrowStyle={{ borderRight: "7px solid #007bff" }} // Arrow color
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-black flex items-center justify-center">
                <img src={contributor.image} alt={contributor.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#007bff', fontWeight: 'bold' }}>{contributor.name}</h3>
                <p className="text-black mb-1 text-sm"><strong>Work:</strong> {contributor.work}</p>
                <p className="text-black mt-2 mb-4 text-sm" style={{ textAlign: 'justify' }}>{contributor.content}</p>
                <div className="flex space-x-4 mt-2 justify-center">
                  <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    <i className="fab fa-linkedin fa-lg"></i> {/* Smaller icon size */}
                  </a>
                  <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                    <i className="fab fa-github fa-lg"></i> {/* Smaller icon size */}
                  </a>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ContributorsList;