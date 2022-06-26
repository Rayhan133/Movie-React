export default function Header() {
  return (
    <>
      <header className="overflow-hidden">
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-black  relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between text-white">
            <div className="col-span-2 ml-10">
              <img
                src="https://i.ibb.co/DkRDQf1/logo.png"
                alt="logo"
                border="0"
                width={200}
              />
            </div>
            <div className="col-span-3">
              <div
                className="navbar-collapse collapse grow items-center"
                id="navbarSupportedContentY"
              >
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                  <li className="nav-item">
                    <a
                      className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white-700 focus:text-white-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white-700 focus:text-white-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white-700 focus:text-white-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2 lg:mb-0">
                    <a
                      className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white-700 focus:text-white-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-2">
              <div class="flex space-x-2 justify-center">
                <div>
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
