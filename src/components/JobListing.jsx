// ****************************************************************************************************************
// The purpose of this component is to display a single box, containing details of a single job object
// ****************************************************************************************************************

import { useState } from "react";
import {FaMapMarker} from 'react-icons/fa'
import { Link } from "react-router-dom";

const JobListing = ({ job_obj }) => {
    // Create a state to toggle whether to show full or stripped job description
    const [showFullDesc, setShowFullDesc] = useState(false)
    
    let description = job_obj.description // Get the description of the current job object

    // Show half description if showFullDesc is false
    if (!showFullDesc) {
        description = description.substring(0, 90) + "...";
    }


    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job_obj.type}</div>
                    <h3 className="text-xl font-bold">{job_obj.title}</h3>
                </div>

                <div className="mb-5">
                    {description}
                </div>

                <button className="text-indigo-500 mb-5 hover:text-indigo-600" onClick={() =>
                    // state setter method setShowFullDesc will call the provided arrow function by passing 
                    // value or previous state to it
                    setShowFullDesc((prevState) => (!prevState))
                }>
                    {/* Show button value based on the current state value */}
                    {showFullDesc ? 'Less' : 'More'}
                    
                </button>

                <h3 className="text-indigo-500 mb-2">{job_obj.salary} / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className="inline text-lg mb-1 mr-1"/>
                        {job_obj.location}
                    </div>
                    <Link
                        to={`/jobs/${job_obj.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobListing
