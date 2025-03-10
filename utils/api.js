import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const startMeeting = async (meetingId) => {
    return await axios.post(`${API_URL}/start_meeting/`, { meeting_id: meetingId });
};

export const getMeetingSummary = async (meetingId) => {
    return await axios.get(`${API_URL}/meeting_summary/${meetingId}`);
};