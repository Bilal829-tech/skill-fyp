import { useState } from "react";

interface Props {
  onClose: () => void;
}
const SwapRequestModal = ({ onClose }: Props) => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    offeredSkillId: "",
    requestedSkillId: "",
    message: "",
    scheduledDate: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.offeredSkillId || !formData.requestedSkillId) {
      alert("Please select both skills");
      return;
    }

    setLoading(true);
    setTimeout(()=>{
      alert("Request sent successfully");
      onClose();
      setLoading(false);
    },2000);
  };

  const mySkills = [
    { id: "1", name: "React" },
    { id: "2", name: "Node.js" }
  ];

  const targetSkills = [
    { id: "3", name: "UI/UX Design" },
    { id: "4", name: "Python" }
  ];
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="bg-white rounded-xl w-full max-w-lg shadow-xl p-5 border-2 border-secondary ">
          {/*  */}
          <div className="flex justify-center items-center p-4 border-b-2 border-secondary">
            <h2 className="text-gradient text-2xl font-bold tracking-wider ">Request Swap</h2>
          </div>

          {/*  */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
            <div className="flex flex-col gap-2">
              <label className="text-secondary font-semibold text-md ">Offered Skill</label>
              <select
                name="offeredSkillId"
                value={formData.offeredSkillId}
                onChange={handleChange}
                className="w-full border-2 border-secondary p-2 rounded-xl">
                <option value="">Select your skill</option>
                {
                  mySkills.map((skill, index) => (
                    <option key={index} value={skill.id}>
                      {skill.name}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-secondary font-semibold text-md ">Requested Skill</label>
              <select
                name="requestedSkillId"
                value={formData.requestedSkillId}
                onChange={handleChange}
                className="w-full border-2 border-secondary p-2 rounded-xl">
                <option value="">Select skill</option>
                {
                  targetSkills.map((skill, index) => (
                    <option key={index} value={skill.id}>
                      {skill.name}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-secondary font-semibold text-md ">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-secondary p-2 rounded-xl"
                rows={3} />
            </div>

             <div className="flex flex-col gap-2">
            <label className="text-secondary font-semibold text-md ">
              Preferred Date (optional)
            </label>
            <input
              type="datetime-local"
              name="scheduledDate"
              value={formData.scheduledDate}
              onChange={handleChange}
              min={new Date().toISOString().slice(0, 16)}
              className="w-full border-2 border-secondary p-2 rounded-xl"
            />
          </div>

            <div className="flex flex-col gap-4">
              <button type="button" onClick={onClose} className="btn-gradient-outline hover:cursor-pointer">Cancel</button>
              <button type="submit" disabled={loading || !formData.offeredSkillId || !formData.requestedSkillId} className="btn-gradient disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Sending..." : "Send Request"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default SwapRequestModal;