import { Link } from "react-router-dom";

import { ArrowLeftRight ,
  ArrowRight,
  Users,
  BookOpen,
  MessageSquare,
  Star,

  CheckCircle,
  Zap,
  Globe } from 'lucide-react';

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

  return (
    <>
    <div className="navbar sticky top-0  z-999">
      <div className="nav flex justify-between text-center p-6 shadow-md shadow-blue-900 ">
        <div className="brand-logo flex gap-4 text-center">   
          <>
             <ArrowLeftRight color="navy" size={40}/>
          <span className="font-bold text-3xl text-gradient">
  Skill Swapper
</span>
          </>
        </div>
        <div className="flex gap-8">
          <Link to="/Login" className=" btn-gradient">Sign</Link>
          <Link to="/signIn" className=" btn-gradient flex gap-2  ">Explore Opportunities<ArrowRight/></Link>
        </div>
      </div>
    </div>

  
{/*  hero section  */}
<section className="w-full h-100 flex justify-center items-center my-2.5 p-10 bg-linear-to-r from-white to-secondary/40  backdrop-blur-lg">
  <div className="flex flex-col text-primary gap-8 items-center">
    <h1 className="text-5xl font-bold">Master Your Skills by {""}
      <span className="text-gradient">Sharing Your Knowledge</span>
      </h1>
    <p className="text-xl w-[70%] text-center font-semibold text-gray-900/50 ">
      Join a community where knowledge flows freely. Trade your expertise for new skills and build meaningful connections with learners worldwide.
    </p>

   <span className ="flex gap-4">
    <Link to="/signup " className="flex gap-0.5 btn-gradient">Start Learning Today <ArrowRight /> </Link>
    <Link to="/login" className="btn-gradient">Sign In</Link>
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
    </>
  );
}

export default Home;