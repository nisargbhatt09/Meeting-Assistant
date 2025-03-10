import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getMeetingSummary } from '../utils/api';

export default function Summary() {
    const router = useRouter();
    const { meetingId } = router.query;
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        if (meetingId) {
            getMeetingSummary(meetingId).then((response) => {
                setSummary(response.data.summary);
            }).catch(() => {
                setSummary("No summary available.");
            });
        }
    }, [meetingId]);

    return (
        <div>
            <h1>Meeting Summary</h1>
            {summary ? <p>{summary}</p> : <p>Loading...</p>}
        </div>
    );
}