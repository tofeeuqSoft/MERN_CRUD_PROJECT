import {NavLink} from 'react-router-dom'

const AppNavber = () => {
    return (
        <>
              <nav className="bg-gradient-to-r  bg-blue-800 shadow-2xl  top-0 z-50 border-b border-white/10">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex  items-center h-16">
            <div className="flex-shrink-0 flex items-center">
                <span className="bg-gradient-to-r PX-4 gap-1 from-white to-cyan-100 bg-clip-text text-transparent">
                  CRUD
                </span>
            
            </div>
                          <NavLink
                           to="/"
                              className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                            >
                            List
                           </NavLink>
                           <NavLink
                           to="/create"
                              className="text-white hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                            >
                            Create
                           </NavLink>
                        </div>
                    </div>
              </nav>
            
        </>
    );
};

export default AppNavber;