import { Link } from "react-router-dom";
import { useState } from 'react';

import { ArrowLeftRight ,
  ArrowRight,
  Users,
  BookOpen,
  MessageSquare,
  Star,
  CheckCircle,
  Zap,
  Globe, 
  Menu,
  X} from 'lucide-react';

function Home() {
const features = [
    {
      icon: Users,
      title: 'Connect with Learners',
      description: 'Find people who want to learn what you know and teach what you want to learn.',
    },
    {
      icon: BookOpen,
      title: 'Skill Exchange',
      description: 'Trade your expertise for new knowledge in a fair, collaborative environment.',
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      description: 'Chat directly with potential skill partners and arrange your learning sessions.',
    },
    {
      icon: Star,
      title: 'Build Reputation',
      description: 'Earn ratings and reviews to build trust within the community.',
    },
]
 const benefits = [
    'Learn new skills without paying for expensive courses',
    'Share your expertise and help others grow',
    'Build meaningful connections in your field',
    'Flexible scheduling that works for you',
    'Safe and verified community members',
    'Track your learning progress and achievements',
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="navbar sticky top-0 z-999">
      <div className="nav flex justify-between items-center px-6 py-4 bg-white shadow-md shadow-blue-900">
        <div className="brand-logo flex gap-3 items-center">
          <ArrowLeftRight color="navy" size={32} />
          <span className="font-bold text-2xl text-gradient">Skill Swapper</span>
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          <Link to="/Login" className="btn-gradient">Sign in</Link>
          <Link to="/signIn" className="btn-gradient flex gap-2 items-center">
            Explore Opportunities <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="sm:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-3 px-6 pb-4 my-4 shadow-md shadow-blue-900">
          <Link
            to="/Login"
            className="btn-gradient text-center"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </Link>
          <Link
            to="/signIn"
            className="btn-gradient flex justify-center gap-2 items-center"
            onClick={() => setMenuOpen(false)}
          >
            Explore Opportunities <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  


  
{/*  hero section  */}
<section className="w-full min-h-screen flex justify-center items-center my-2 px-6 py-16 sm:p-10 bg-linear-to-r from-white to-secondary/40 backdrop-blur-lg">
  <div className="flex flex-col text-primary gap-6 sm:gap-8 items-center text-center">
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      Master Your Skills by{" "}
      <span className="text-gradient">Sharing Your Knowledge</span>
    </h1>

    <p className="text-base sm:text-lg md:text-xl w-full sm:w-[80%] md:w-[70%] font-semibold text-gray-900/50">
      Join a community where knowledge flows freely. Trade your expertise for
      new skills and build meaningful connections with learners worldwide.
    </p>

    <span className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      <Link
        to="/signup"
        className="flex justify-center items-center gap-1 btn-gradient"
      >
        Start Learning Today <ArrowRight size={18} />
      </Link>
      <Link to="/login" className="btn-gradient text-center">
        Sign In
      </Link>
    </span>

  </div>
</section>

{/* features section  */}
<section className="w-full flex flex-col justify-center items-center my-5 p-10">
  <div className="text-center mb-8">
    <h1 className="text-4xl text-gradient font-bold mb-6">How Skill Swapper Works</h1>
    <p className="text-2xl text-center font-semibold text-gray-900/50 ">A simple, effective way to exchange knowledge and grow together</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-col items-center text-center gap-4">
        <feature.icon color="blue" size={40}/>
        <h3 className="text-2xl font-semibold text-gradient ">{feature.title}</h3>
        <p className=" text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>  
</section>

{/* benefits section */}

<section className="w-full  flex justify-center items-center px-6 py-16 sm:p-10 bg-linear-to-r from-white to-secondary/40 backdrop-blur-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col items-start text-start gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
          Why Choose Skill Swapper
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-gray-600">
          Join thousands of learners already benefiting from our skill exchange platform.
        </p>
        <div className="flex flex-col gap-3 w-full">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle size={20} color="blue" className="shrink-0" />
              <span className="text-gray-600 text-base">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-5">
        <Zap color="blue" size={40} />
        <h2 className="text-2xl sm:text-3xl font-bold text-gradient">
          Ready to Start?
        </h2>
        <p className="font-semibold text-gray-600 text-xl">
          Create your profile, list your skills, and start connecting with learners today.
        </p>
        <Link
          to="/signup"
          className="w-full flex justify-center items-center gap-2 btn-gradient"
        >
          Create Free Account <ArrowRight size={18} />
        </Link>
      </div>

    </div>
  </div>
</section>

{/* stats section  */}

<section className="my-2">
  <div className=" p-10  sm:p-10">
    <div className="flex flex-col lg:flex-row gap-7 justify-center items-center">
       <div className="flex flex-col justify-center items-center p-8 w-sm  ">
      <h1 className="text-gradient font-bold text-3xl">1000+</h1>
      <p className=" text-gray-600 font-semibold">Active Learners</p>
    </div>
    <div className="flex flex-col justify-center items-center p-8 w-sm ">
      <h1 className="text-gradient font-bold text-3xl">500+</h1>
      <p className=" text-gray-600 font-semibold">Skills Available</p>
    </div>
    <div className="flex flex-col justify-center items-center p-8 w-sm ">
      <h1 className="text-gradient font-bold text-3xl">200+</h1>
      <p className=" text-gray-600 font-semibold">Successful Exchanges</p>
    </div>
    </div>
   
  </div>
</section>

{/* footer section  */}

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
     
 </>
  );
}

export default Home;