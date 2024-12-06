import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

const ChartsSection= () => {
  return (
    <div className="">
        <h2 className="text-xl ms-40 text-gray-500  mt-20 border-l-2 ps-2 border-orange-500">There are 1,583 legislative measures across 193 countries to address violence against women.</h2>
        <div className="grid md:grid-cols-2 gap-10 ms-20">
        <BarChart />
        <PieChart  />
      </div>
      {/* <p className='text-gray-400 text-center'>* The Violence Against Women and Girls category includes legislations that are not specifically addressing one or several particular forms of violence.</p> */}

    </div>
  );
};

export default ChartsSection;