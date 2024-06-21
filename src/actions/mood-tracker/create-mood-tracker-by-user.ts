import axios from 'axios';

export const createMoodTrackerByUser = async (mood: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:3001/api/mood-trackers', {
      type: mood,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const moodTracker = response.data;

    return moodTracker;
  } catch (error) {
    console.error('Error creating mood trackers:', error);
    throw new Error('Error creating mood tracker. Please try again.');
  }
};