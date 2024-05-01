import React from 'react';

function Portfolio() {
    return (<>
        <button className='px-4 py-2 bg-green-400 fixed right-10 bottom-10 rounded-md shadow-lg text-white font-semibold hover:bg-green-500 transition duration-300 z-50'>Contact Us</button>


        
        <div className='bg-gradient-to-r from-pink-500 to-purple-600 py-12'> {/* Royal blue background color */}
            <div className='container mx-auto'>
                <h2 className='text-3xl font-semibold text-center text-white mb-8'>Explore Our Premium Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <button className='bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-900 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 px-8 py-6 text-lg font-semibold text-center transition duration-300'>Birthday Parties</button>
                    <button className='bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-900 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 px-8 py-6 text-lg font-semibold text-center transition duration-300'>Corporate Parties</button>
                    <button className='bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-900 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 px-8 py-6 text-lg font-semibold text-center transition duration-300'>Holiday Parties</button>
                    <button className='bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-900 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 px-8 py-6 text-lg font-semibold text-center transition duration-300'>Charity Events</button>
                    <button className='bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-900 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 px-8 py-6 text-lg font-semibold text-center transition duration-300'>Weddings</button>
                    <button className='bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-900 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 px-8 py-6 text-lg font-semibold text-center transition duration-300'>Themed Parties</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Portfolio;
