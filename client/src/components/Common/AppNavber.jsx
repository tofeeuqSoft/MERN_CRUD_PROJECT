import {NavLink} from 'react-router-dom'

const AppNavber = () => {
    return (
        <>
              <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-2xl sticky top-0 z-50 border-b border-white/10">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                          <NavLink
                           to="/create"
                              className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                            >
                            Create
                           </NavLink>
                           <NavLink
                           to="/create"
                              className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                            >
                            Update
                           </NavLink>
                        </div>
                    </div>
              </nav>
            
        </>
    );
};

export default AppNavber;