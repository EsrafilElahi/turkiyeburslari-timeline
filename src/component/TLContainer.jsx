import React, { useState } from 'react'
import { StateContext } from './StateContext'
import TLMap from './TLMap'


const TLContainer = () => {

  const [infos] = useState([
    { date: '01-2021', title: '1st Period Applications Open - Research', desc: 'Research Scholarships' },
    { date: '01-2021', title: '4th Period Announcement of Results - Research', desc: 'Research Scholarships' },
    { date: '10-01-2021', title: 'Applications Open - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '20-02-2021', title: 'Applications Close - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '02-2021', title: 'Evaluation Process - Start - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '03-2021', title: 'Interview Period - Start - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '03-2021', title: '1st Period Applications Close - Research', desc: 'Research Scholarships' },
    { date: '04-2021', title: '2nd Period Applications Open - Research', desc: 'Research Scholarships' },
    { date: '04-2021', title: '1st Period Announcement of Results - Research', desc: 'Research Scholarships' },
    { date: '05-2021', title: 'Evaluation Process - End - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '30-06-2021', title: '2nd Period Applications Close - Research', desc: 'Research Scholarships' },
    { date: '06-2021', title: 'Interview Period - End - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '07-2021', title: '3rd Period Applications Open - Research', desc: 'Research Scholarships' },
    { date: '07-2021', title: '2nd Period Announcement of Results - Research', desc: 'Research Scholarships' },
    { date: '07-2021', title: 'Announcement of Results - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '07-2021', title: 'Scholarship Agreement and Visa Procedures - Start - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '08-2021', title: 'Scholarship Agreement and Visa Procedures - End - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '09-2021', title: 'Travel of New Students to Turkey / Beginning of the Academic Year - Start - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '09-2021', title: 'Travel of New Students to Turkey / Beginning of the Academic Year - End - Undergraduate and Postgraduate', desc: 'Undergraduate and Postgraduate Scholarships' },
    { date: '09-2021', title: '3rd Period Applications Close - Research', desc: 'Research Scholarships' },
    { date: '10-2021', title: '3rd Period Announcement of Results - Research', desc: 'Research Scholarships' },
    { date: '10-2021', title: '4th Period Applications Open - Research', desc: 'Research Scholarships' },
    { date: '10-2021', title: 'Applications Open - Success', desc: 'Success Scholarships' },
    { date: '10-2021', title: 'Evaluation Process - Start - Success', desc: 'Success Scholarships' },
    { date: '11-2021', title: 'Applications Close - Success', desc: 'Success Scholarships' },
    { date: '11-2021', title: 'Evaluation Process - End - Success', desc: 'Success Scholarships' },
    { date: '11-2021', title: 'Announcement of Results - Success', desc: 'Success Scholarships' },
    { date: '12-2021', title: '4th Period Applications Close - Research', desc: 'Research Scholarships' }
  ]);

  return (
    <div>
      <StateContext.Provider value={{ state: infos }}>
        <TLMap />
      </StateContext.Provider> 
    </div>
  )
}

export default TLContainer
