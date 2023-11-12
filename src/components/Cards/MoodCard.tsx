import { useState } from "react";
import { Card, CardTitle } from "../ui/card";
export const MoodCard = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const moods = ["😞", "😔", "😐", "😊", "😄"];
  return (
    <Card className="my-4 rounded-xl p-4">
      <CardTitle>{"Today's Mood"}</CardTitle>
      <div className="flex items-center justify-between px-4 pt-4">
        {moods.map((mood, index) => (
          <button
            key={index}
            className={`rounded-xl p-2 text-3xl hover:bg-gray-100 focus:outline-none ${
              selectedMood === index ? " bg-gray-200" : ""
            }`}
            onClick={() =>
              setSelectedMood(selectedMood === index ? null : index)
            }
          >
            {mood}
          </button>
        ))}
      </div>
    </Card>
  );
};
