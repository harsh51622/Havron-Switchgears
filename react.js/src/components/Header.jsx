let darkMode = false;

    const toggleTheme=()=> {
      darkMode = !darkMode;

      document.body.classList.toggle('dark', darkMode);

      const img = document.getElementById('img-logo');
     

      if (darkMode) {
        img.src = '/LOGo/new white 1.png'; // Replace with your dark mode image
      
      } else {
        img.src = '/LOGO/new.png'; // Replace with your light mode image
        
      }}
function searchPage() {
      const input = document.getElementById("searchInput").value.trim().toLowerCase();
      const keywords = input.split(/\s+/); // Split by spaces

      // Map of keywords to files (can include multiple keywords for each file)
      const fileMap = {
        "/MAIN//CONTACT US/contact us.html": ["about", "team", "company"],
        "contact.html": ["contact", "support", "email"],
        "services.html": ["services", "pricing", "plans"]
      };

      // Try to find the one file that matches ALL keywords
      let matchedFile = null;

      for (let file in fileMap) {
        const fileKeywords = fileMap[file];
        const matchesAll = keywords.every(word => fileKeywords.includes(word));

        if (matchesAll) {
          matchedFile = file;
          break; // stop at the first match
        }
      }

      if (matchedFile) {
        window.location.href = matchedFile;
      } else {
        alert("No matching page found for all keywords.");
      }
    }
  return (
    <div className="header-container font-['Segoe UI'] transition-all">
      <nav className="flex justify-between items-center h-[60px] px-4 md:px-6 bg-gray-100 dark:bg-black relative">
        {/* Logo */}
        <div className="logo text-xl font-bold text-blue-600 dark:text-cyan-400">
          <img
            ref={logoRef}
            src={LOGO}
            alt="Logo"
            className="w-[142px] h-[33px] md:w-[175px] md:h-[40px]"
          />
        </div>

        {/* Navigation Links */}
        <ul
          className={`nav-links list-none transition-transform gap-6 md:flex md:static fixed top-[60px] right-0 h-screen md:h-auto w-[250px]
           md:w-auto bg-white dark:bg-black p-4 md:p-0 flex-col md:flex-row z-10 ${  isMenuOpen ? 'flex' : 'hidden' }`} >


        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/product">About</Link></li>
        <li><Link to="/media">Contact</Link></li>
      
      </ul>
       
         {/* Right Controls */}
        <div className="flex items-center gap-4">

          {/* Search Toggle */}
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="text-lg">🔍</button>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} 
          className="text-lg">🌓</button>

          {/* Hamburger Menu */}
          <button
            className="hamburger flex flex-col gap-[4px] cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}>
            <span className="w-[25px] h-[3px] bg-current transition-all"></span>
            <span className="w-[25px] h-[3px] bg-current transition-all"></span>
            <span className="w-[25px] h-[3px] bg-current transition-all"></span>
          </button>
        </div>

        {/* Search Box */}
        {isSearchOpen && (
          <div className="absolute top-[60px] right-4 bg-white dark:bg-black p-2 border border-black
           dark:border-white rounded-md flex items-center z-[1000] transition-all">
            <input type="text" value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
              className="px-2 py-1 border border-gray-300 rounded w-[180px]"/>
            <button
              onClick={searchPage}
              className="ml-1 px-3 py-1 text-white bg-blue-600 dark:bg-cyan-500 border-none rounded">
              Go
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
