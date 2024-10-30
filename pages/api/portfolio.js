// pages/api/config.js
import config from '../../config';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json(config);
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}