import { Smile, Meh, Frown, Star } from "lucide-react";
type FeedbackItems = {
  id: string;
  giverId: string;
  name: string;
  rating: number;
  date: string;
  review: string;
}
type props = {
  feedback: FeedbackItems[];
  currentUserId: string;
  onDelete?: (id: string) => void;
}
const FeedbackDisplay = ({ feedback, currentUserId, onDelete }: props) => {

    const getRatingIcon = (rating: number) => {
    if (rating >= 4) return <Smile className="w-4 h-4 text-green-600" />;
    if (rating >= 3) return <Meh className="w-4 h-4 text-yellow-600" />;
    return <Frown className="w-4 h-4 text-red-600" />;
  };

  const canDelete = (item: FeedbackItems) => {
    return (
      item.id &&
      item.giverId === currentUserId &&
      (new Date().getTime() - new Date(item.date).getTime()) <
      24 * 60 * 60 * 1000
    );
  };

  return (
    <>
      {!feedback || feedback.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-md text-secondary">No feedback available</p>
        </div>
      ) : (
        <div className="p-4 space-y-4">

          {feedback.map((item) => (
            <div key={item.id} className="border-2 border-secondary rounded-2xl p-4 hover:shadow-xl cursor-pointer">

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gradient text-2xl font-bold">{item.name}</h3>

                 <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < item.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">({item.rating}/5)</span>
            <div className="ml-2">
              {getRatingIcon(item.rating)}
            </div>
          </div>
              </div>

              <div className="mb-2">
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">{item.review}</p>
              </div>




              {canDelete(item) && (
                <button
                  onClick={() => onDelete?.(item.id)}
                  className="btn-gradient-outline hover:cursor-pointer mt-2"
                >
                  Delete
                </button>
              )}
            </div>
          ))}

        </div>
      )}
    </>
  );
};

export default FeedbackDisplay;