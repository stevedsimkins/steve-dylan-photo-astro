import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(isOpen ? false : true)
  };

  return (
    <div class="sticky top-0 bg-white md:hidden">
      <nav class="flex justify-center items-center relative py-2">

        <h1 class="text-2xl font-semibold underline">Steve Simkins</h1>
        <button
          type="button"
          className="text-black hover:text-gray-400 focus:outline-none focus:text-black absolute right-4 top-3"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XIcon className="h-7 w-7 z-20" aria-hidden="true" />
          ) : (
            <MenuIcon className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>
      {isOpen && (
        <div class="w-full h-screen bg-white z-10 flex flex-col gap-10 justify-center items-center">
          <a class="text-xl font-bold hover:underline" href="#">Home</a>
          <a class="text-xl font-bold hover:underline" href="#">Home</a>
          <a class="text-xl font-bold hover:underline" href="#">Home</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
