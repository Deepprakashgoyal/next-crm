import React from 'react'
const getStudents = async () => {
  const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=100')
  return await response.json();
}

const Students = async () => {
  const students = await getStudents();
  const studentsData = await students.data;
  return (
    <div className=''>
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">#</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Name</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Age</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Email</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Phone</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">City</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Action</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-200">
                {
                  studentsData.data.map((student: any) => (
                    <tr key={student.id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#{student.id}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{student.name.first} {student.name.last}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{student.dob.age} yrs</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{student.email}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{student.phone}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{student.location.city}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        <a href="#" className="inline-block rounded-lg  px-2 py-2 text-xs text-white hover:bg-slate-100">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" strokeWidth="1.5"/>
                        </svg>
                        </a>

                        <a href="#" className="inline-block rounded-lg  px-2 py-2 text-xs text-white hover:bg-slate-100">
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5H9C7.11438 5 6.17157 5 5.58579 5.58579C5 6.17157 5 7.11438 5 9V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V12M9.31899 12.6911L15.2486 6.82803C15.7216 6.36041 16.4744 6.33462 16.9782 6.76876C17.5331 7.24688 17.5723 8.09299 17.064 8.62034L11.2329 14.6702L9 15L9.31899 12.6911Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </a>

                        <a href="#" className="inline-block rounded-lg  px-2 py-2 text-xs text-white hover:bg-slate-100">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5001 6H3.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M9.5 11L10 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M14.5 11L14 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#1C274C" strokeWidth="1.5"/>
                        <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        </a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  1
                </a>
              </li>

              <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                  4
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
    </div>
  )
}

export default Students