import axios from 'axios';

export const getAllMoodTrackersByUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3001/api/mood-trackers', {
      params: {
        orderField: 'created_at',
        order: 'DESC',
        limit: 30,
        offset: 0,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const moodTrackers = response.data;

    return moodTrackers;
  } catch (error) {
    console.error('Error getting all mood trackers:', error);
    throw new Error('Error getting all mood trackers. Please try again.');
  }
};