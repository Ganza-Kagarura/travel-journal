import { FaGlobeAfrica } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-red-400 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <FaGlobeAfrica className="mr-2" />
          <span className="text-white text-lg font-bold">my travel journal.</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
