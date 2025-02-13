import { Link, useLocation } from "react-router-dom";
import { Bell, BookOpen, Menu, Search, User } from "lucide-react";

export const Appbar = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <Link to="/blogs">
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Medium
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              {location.pathname === "/publish" ? null : (
                <div className="hidden md:block">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              )}

              <button className="ml-4 p-2 text-gray-600 hover:text-gray-900">
                <Bell className="h-6 w-6" />
              </button>

              <button className="ml-4 flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </button>

              <button className="md:hidden ml-4">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
