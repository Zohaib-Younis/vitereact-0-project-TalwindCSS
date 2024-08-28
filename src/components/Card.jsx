import React from 'react'

function Card({name,email,namej,jemail,title}) {
    // console.log("props:",props);
    console.log(name)
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
      <div>
        <h2 className="text-lg font-semibold">Employees</h2>
        <p className="mt-1 text-sm text-gray-700">
          This is a list of all employees. You can add new employees, edit or
          delete existing ones.<br/>
          Add new employees button didn't working yet as well as you can't adit data.
        </p>
      </div>
      <div>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add new employee
        </button>
      </div>
    </div>
    <div className="mt-6 flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    <span>Employee</span>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-4 py-3.5">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src="https://scontent.flhe32-1.fna.fbcdn.net/v/t39.30808-6/441154060_407376602218306_3329436502347982520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEn1wx8UTTqi0Fw4RVZQe20QbnRJxDYohVBudEnENiiFYtj9dT0Ywj8-gY54wzwqngn461TQhaugsW-beHBwQfJ&_nc_ohc=E4pN2rs0TJwQ7kNvgH5bUCL&_nc_ht=scontent.flhe32-1.fna&oh=00_AYC7ndAmIV6yErU3zibvk8t3pLHafSz8j-8PHHa6HUTTvg&oe=66D4A80E"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {name}
                        </div>
                        <div className="text-sm text-gray-700">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-12 py-4">
                    <div className="text-sm text-gray-900 ">{title}</div>
                    <div className="text-sm text-gray-700">Engineering</div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                    Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                    <a href="#" className="text-gray-700">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src="https://scontent.flhe32-1.fna.fbcdn.net/v/t39.30808-6/351484341_779063826936261_7735055595065741516_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEdx9UCXmPMhfHZ_KOi45Wb5UGvyY3NhpDlQa_Jjc2GkPaDyi2Dj9YcgexeTcT80eBj6df4gQsOPk6IcYugQTLQ&_nc_ohc=J-aWObrCJ14Q7kNvgGVtmx9&_nc_ht=scontent.flhe32-1.fna&oh=00_AYAS6603SlHYvedbj3ilYAtTyZ9ftDyBn40gowGutt9xrg&oe=66D4A6A9"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {namej}
                        </div>
                        <div className="text-sm text-gray-700">{jemail}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-12 py-4">
                    <div className="text-sm text-gray-900 ">{title}</div>
                    <div className="text-sm text-gray-700">Engineering</div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                    Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                    <a href="#" className="text-gray-700">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Card