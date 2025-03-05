export default function PageDashboard() {

    return (
            <div className="flex flex-col h-screen bg-[#F7F7F7] font-sans">
              {/* Header */}
              <header className="flex justify-between items-center h-[10%] px-8 bg-white shadow-md">
                {/* Logo */}
                <div className="flex items-center gap-2 text-[#58B788] font-bold text-2xl transition-all duration-300 ease-in-out hover:text-shadow-[0_0_2px_#58B788] active:scale-95 active:opacity-80">
                  <img
                    src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
                    alt="Profile Icon"
                    className="w-8 h-8"
                  />
                  <span>Infinity</span>
                </div>
        
                {/* Search Bar */}
                <div className="relative w-1/2">
                  <label
                    htmlFor="search"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AFAFAF] text-xl transition-all duration-300 ease-in-out peer-focus:text-[#58B788]"
                  >
                    🔍
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    className="peer w-full h-[5.8vh] pl-12 pr-4 bg-[#F9F9F9] border-2 border-[#CCCCCC] rounded-md transition-all duration-300 ease-in-out focus:border-[#58B788] focus:shadow-[0_0_5px_#58B78877]"
                  />
                </div>
        
                {/* Menu Buttons */}
                <div className="flex items-center gap-5">
                  <button className="text-[#333333] text-2xl transition-all duration-300 ease-in-out hover:text-[#58B788] hover:text-shadow-[0_0_3px_#58B78899] active:scale-95 active:opacity-80">
                    ☰
                  </button>
                  <button className="text-[#333333] text-2xl transition-all duration-300 ease-in-out hover:text-[#58B788] hover:text-shadow-[0_0_3px_#58B78899] active:scale-95 active:opacity-80">
                    🔔
                  </button>
                </div>
              </header>
        
              {/* Main Content */}
              <main className="flex flex-1">
                {/* Side Menu */}
                <aside className="w-[20%] bg-white p-4 shadow-md">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      📊 Dashboard
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      📋 Forms
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      💳 Cards
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      📈 Charts
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      ⚡ Buttons
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      🗂️ Modals
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      📑 Tables
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      📄 Pages
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[#58B788] hover:text-white">
                      🆕 Create Account
                    </li>
                  </ul>
                  <button className="mt-4 w-full bg-[#58B788] text-white py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#58B788] hover:border-2 hover:border-[#58B788] active:scale-97 active:opacity-90">
                    Create Account
                  </button>
                </aside>
        
                {/* Main Section */}
                <section className="flex-1 p-6 space-y-6">
                  {/* Banner */}
                  <div className="flex justify-between items-center p-4 bg-[#58B788] rounded-lg text-white">
                    <h2 className="text-lg">Star this project on GitHub</h2>
                    <a
                      href="#"
                      className="transition-all duration-300 ease-in-out hover:text-[#CCCCCC] active:scale-97 active:opacity-80"
                    >
                      View more
                    </a>
                  </div>
        
                  {/* Cards Section */}
                  <div className="grid grid-cols-4 gap-4">
                    {/* Total Clients */}
                    <div className="bg-[#F9F9F9] border-2 border-[#CCCCCC] rounded-lg p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FF6A003F] flex items-center justify-center text-[#FF6A00] text-xl">
                        👥
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Total Clients</h3>
                        <p className="text-sm text-gray-600">7779</p>
                      </div>
                    </div>
        
                    {/* Account Balance */}
                    <div className="bg-[#F9F9F9] border-2 border-[#CCCCCC] rounded-lg p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#00961E3F] flex items-center justify-center text-[#00961E] text-xl">
                        💰
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Account Balance</h3>
                        <p className="text-sm text-gray-600">$37,891.00</p>
                      </div>
                    </div>
        
                    {/* New Sales */}
                    <div className="bg-[#F9F9F9] border-2 border-[#CCCCCC] rounded-lg p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0007963F] flex items-center justify-center text-[#000796] text-xl">
                        🛒
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">New Sales</h3>
                        <p className="text-sm text-gray-600">273</p>
                      </div>
                    </div>
        
                    {/* Pending Contacts */}
                    <div className="bg-[#F9F9F9] border-2 border-[#CCCCCC] rounded-lg p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#005FB23F] flex items-center justify-center text-[#005FB2] text-xl">
                        ✉️
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Pending Contacts</h3>
                        <p className="text-sm text-gray-600">187</p>
                      </div>
                    </div>
                  </div>
        
                  {/* Table Section */}
                  <div className="bg-[#CCCCCC] rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-[#F4F4F4] text-[#7B7B7B]">
                        <tr>
                          <th className="text-left pl-2">CLIENT</th>
                          <th className="w-[150px]">AMOUNT</th>
                          <th className="w-[110px]">STATUS</th>
                          <th className="w-[110px]">DATE</th>
                        </tr>
                      </thead>
                      <tbody className="bg-[#F9F9F9] text-[#333333]">
                        <tr>
                          <td className="border border-[#CCCCCC] p-2">
                            <div className="flex flex-col gap-1">
                              <span>Taldo Fulano</span>
                              <span className="text-xs text-gray-500">
                                Chief Financial Officer (CFO)
                              </span>
                            </div>
                          </td>
                          <td className="border border-[#CCCCCC] p-2">$794.00</td>
                          <td className="border border-[#CCCCCC] p-2">
                            <span className="bg-[#FFFF0055] text-[#FF9900] px-2 py-1 rounded-full text-xs font-bold">
                              Pending
                            </span>
                          </td>
                          <td className="border border-[#CCCCCC] p-2 text-center">
                            03/12/2024
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#CCCCCC] p-2">
                            <div className="flex flex-col gap-1">
                              <span>Fulano de Tal</span>
                              <span className="text-xs text-gray-500">
                                Chief Marketing Officer (CMO)
                              </span>
                            </div>
                          </td>
                          <td className="border border-[#CCCCCC] p-2">$844.00</td>
                          <td className="border border-[#CCCCCC] p-2">
                            <span className="bg-[#FFFF0055] text-[#FF9900] px-2 py-1 rounded-full text-xs font-bold">
                              Pending
                            </span>
                          </td>
                          <td className="border border-[#CCCCCC] p-2 text-center">
                            28/11/2024
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#CCCCCC] p-2">
                            <div className="flex flex-col gap-1">
                              <span>Ciclano de Souza</span>
                              <span className="text-xs text-gray-500">
                                General Manager
                              </span>
                            </div>
                          </td>
                          <td className="border border-[#CCCCCC] p-2">$284.00</td>
                          <td className="border border-[#CCCCCC] p-2">
                            <span className="bg-[#00961E55] text-[#00961E] px-2 py-1 rounded-full text-xs font-bold">
                              Approved
                            </span>
                          </td>
                          <td className="border border-[#CCCCCC] p-2 text-center">
                            10/11/2024
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#CCCCCC] p-2">
                            <div className="flex flex-col gap-1">
                              <span>Beltrano da Silva</span>
                              <span className="text-xs text-gray-500">Inspector</span>
                            </div>
                          </td>
                          <td className="border border-[#CCCCCC] p-2">$899.00</td>
                          <td className="border border-[#CCCCCC] p-2">
                            <span className="bg-[#FF000055] text-[#E70000] px-2 py-1 rounded-full text-xs font-bold">
                              Denied
                            </span>
                          </td>
                          <td className="border border-[#CCCCCC] p-2 text-center">
                            30/10/2024
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </main>
            </div>
    )
}