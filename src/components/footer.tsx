import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
function Footer() {
    return (
        <footer className="w-full flex justify-center items-center px-6 py-16 sm:p-10 bg-linear-to-r from-white to-secondary/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-start text-start space-x-2 mb-4">
                <div className="flex ">
                   <h3 className="text-gradient text-xl font-bold">Skill Swapper</h3>
                </div>
              </div>
              <p className="text-gray-500 mb-4">
                Connect, learn, and grow through skill swapping. Join our community of learners 
                and teachers who believe in the power of knowledge exchange.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="w-5 h-5 text-gray-500" />
                <span className="text-gray-500">Global Community</span>
              </div>
            </div>
            <div>
              <h3 className="text-gradient text-lg font-bold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-500">
                <li><Link to="/skills" className="hover:text-secondary">Skills</Link></li>
                <li><Link to="/users" className="hover:text-secondary">Find Users</Link></li>
                <li><Link to="/swaps" className="hover:text-secondary">Swaps</Link></li>
                <li><Link to="/feedback" className="hover:text-secondary">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gradient text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-secondary">Help Center</a></li>
                <li><a href="#" className="hover:text-secondary">Contact Us</a></li>
                <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-primary mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Skill Barter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer