import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <h1>
          <FeedbackList feedback={feedback} />
        </h1>
      </div>
    </>
  );
}
export default App;
