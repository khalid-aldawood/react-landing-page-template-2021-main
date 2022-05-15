import React from 'react';

//import config from '../config/index.json';
//import configa from '../config/indexa.json';

const Pricing = () => {

  if(localStorage.getItem('lang') == 'a'){
  //const { pricing } = configa;
  //const { items, title } = pricing;
  //const [firstPlan, secondPlan, thirdPlan] = items;

  return (
    <section className={`bg-background py-8`} id="about">
              <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
          style={{color:'black'}}
        >
          كن شريكنا
        </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="mt-10 sm:mt-0 self-center" >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        الاسم
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        البريد الالكتروني
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        اسم الشركة
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        رقم الجوال
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        رقم الهوية
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 inline-flex justify-center ">
                  <button
                    type="submit"
                    style={{"backgroundColor": '#D60000'}}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    سجل
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
  }

  else{

    //const { pricing } = config;
  //const { items, title } = pricing;
  //const [firstPlan, secondPlan, thirdPlan] = items;

  return (
    <section className={`bg-background py-8`} id="about">
              <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
          style={{color:'black'}}
        >
          Register with us
        </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="mt-10 sm:mt-0 self-center" >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Company name
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        ID number
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 inline-flex justify-center ">
                  <button
                    type="submit"
                    style={{"backgroundColor": '#D60000'}}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>

    </section>
  );

  }
};

export default Pricing;
