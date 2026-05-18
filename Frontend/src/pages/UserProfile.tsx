import { useState } from "react";
import FeedbackDisplay from "../components/FeedbackDisplay";
import SwapRequestModal from "../components/SwapRequestModel";

const UserProfile = () => {

  const [showModal, setShowModal] = useState(false);
  const feedbackData = [
    {
      id: "1",
      giverId: "user123",
      name: "Ali Khan",
      rating: 5,
      date: "Apr 10, 2024",
      review: "Great experience!"
    },
    {
      id: "2",
      giverId: "user456",
      name: "Sara Khan",
      rating: 4,
      date: "Apr 11, 2024",
      review: "Very helpful session!"
    }
  ];

  return (
    <div className="bg-linear-to-r from-white to-secondary/40 p-10">
      <h1 className="text-gradient text-4xl font-bold tracking-wider text-center mb-6">User Profile</h1>
      <FeedbackDisplay feedback={feedbackData} currentUserId="user123" />

      <br className="mb-2"/>
      <hr className="border-secondary w-full" />
      <br className="mb-4"/>
      <button onClick={() => setShowModal(true)} className="w-full cursor-pointer btn-gradient mb-8">
        {
          showModal? "For Close Click Cancel In Form": "Request Swap"
        }
        </button>
      {showModal && <SwapRequestModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default UserProfile;