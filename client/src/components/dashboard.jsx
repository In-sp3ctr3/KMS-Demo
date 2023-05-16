import React from "react";

function Dashboard() {
  return (
    <div className="flex text-gray-800 min-h-screen">
      <link rel="stylesheet" href="https://www.unpkg.com/tailwindcss@1.8.10/dist/tailwind-experimental.min.css"></link>
  <aside className="hidden md:block bg-white px-6 py-5 h-full w-full sm:relative sm:w-64 lg:w-1/5">
    <a href="http://" className="flex min-w-max-content items-center font-bold text-sm p-2 mb-12 ">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20pt" height="20pt" viewBox="0 0 132.000000 160.000000" preserveAspectRatio="xMidYMid meet" className="mr-2">
<g transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)" fill="#ED1B2F" stroke="none">
<path d="M234 1536 c-69 -69 -26 -176 71 -176 62 0 105 45 105 110 0 47 -56 100 -105 100 -29 0 -45 -8 -71 -34z"/>
<path d="M985 1561 c-39 -16 -60 -51 -60 -98 0 -38 5 -49 33 -74 71 -63 172 -20 172 73 -1 80 -72 129 -145 99z"/>
<path d="M12 858 c4 -280 7 -321 26 -391 50 -182 161 -322 313 -395 141 -68 302 -88 461 -58 241 46 414 207 484 451 14 50 18 115 21 383 l4 322 -656 0 -657 0 4 -312z m1046 -130 c-3 -164 -5 -176 -31 -234 -35 -76 -94 -135 -172 -171 -51 -23 -76 -28 -167 -31 -90 -4 -117 -1 -172 18 -93 31 -157 84 -195 162 -41 83 -51 144 -51 299 l0 129 396 0 396 0 -4 -172z"/>
</g>
</svg>
      {/* <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 mr-2 text-red-700">
        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
      </svg> */}
      Digicel Learning Center
    </a>
    <nav className="text-gray-600 text-lg font-semibold min-w-max-content space-y-2">
      <a href="http://" className="flex items-center flex-shrink-0 px-5 py-3 rounded-full text-red-700 bg-red-100 bg-opacity-25">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7 mr-2.5 flex-shrink-0">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
        Dashboard
      </a>
      <a href="http://" className="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        Objects
      </a>
      <a href="http://" className="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Contacts
      </a>
      <a href="http://" className="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Finances
      </a>
      <a href="http://" className="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
        </svg>
        Messages
      </a>
      <a href="http://" className="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
        Documents
      </a>
    </nav>
  </aside>
  <div className="flex-grow bg-gray-100">
    <header className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto mb-4">
      <button className="block md:hidden p-2 text-gray-700 mr-2">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="relative w-full max-w-4xl mr-6 sm:mr-8 md:mr-16 lg:mr-24">
        <svg viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 text-gray-400 mt-2 ml-3">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
        <input type="text" placeholder="Search for objects, contacts, documents etc." className="pl-10 w-full pr-4 py-2 border border-gray-300 shadow-sm rounded-lg" />
      </div>
      <div className="flex flex-shrink-0">
        <button className="flex items-center p-2 sm:mr-2">
          Jadan Jones
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ml-2">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="h-10 w-10 hidden sm:block border border-gray-400 bg-gray-300 overflow-hidden rounded-full">
          <img src="https://userstock.io/data/wp-content/uploads/2020/06/philipe-cavalcante-xe68QiMaDrQ-2-300x300.jpg" alt="user avatar" className="object-cover" />
        </div>
      </div>
    </header>
    <main className="flex flex-col space-y-10 px-6 py-5 max-w-6xl mx-auto">
      <h1 className="text-3xl">
        <span className="text-gray-500">Welcome back, </span>
        <span className="font-semibold">Jadan</span>    
      </h1>
      <section className="p-6 sm:p-8 flex items-center bg-red-700 shadow-md rounded-lg">
        <div className="mr-6">
          <header className="text-xl text-indigo-50 mb-3">Get Started with Learning</header>
          <p className="sm:max-w-md text-red-300 leading-tight mb-5">Get a better understand of the apps and tools internal to the department.</p>
          <div className="flex flex-wrap">
            <button className="py-2 px-5 text-red-700 font-semibold bg-white rounded-full  mb-3 mr-5">Start Onboarding</button>
            <button className="py-2 px-5 text-white font-semibold bg-red-900 rounded-full mb-3 mr-5">Later</button>
          </div>
        </div>
        <div className="hidden sm:block mr-0 ml-auto md:mr-8">
          <div className="h-32 w-32 flex items-center justify-center text-3xl text-white font-semibold border-4 border-white rounded-full">
            100%
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center mb-6">
          <header className="text-xl font-semibold">Top Documents</header>
          <a href="http://" className="hidden sm:flex flex-shrink-0 items-center text-lg font-medium text-gray-500">
            More about the learning center
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ml-1 mt-1">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="http://" className="flex sm:hidden flex-shrink-0 items-center text-lg font-medium text-gray-500">
            More
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ml-1 mt-1">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="h-64 bg-white border rounded-lg shadow-md py-4 px-6">
          <div className="text-lg font-semibold">TCRM</div>
        </div>
      </section>
    </main>
  </div>
</div>

  );
}

export default Dashboard;