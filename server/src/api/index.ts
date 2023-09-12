import { Router } from 'express';
import { fetchResponse, generateResponse } from './ml-model';
function delay(milliseconds: number): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}
export default (): Router => {
  const app = Router();

  app.post('/generate', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];
    const body = req.body.msg;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    if (!body) {
      return res.status(400).json({ message: 'No body provided' });
    }
    const { process_id } = await generateResponse(token, body);
    delay(3000);
    const response = await fetchResponse(token, process_id);
    return res.json({ message: response });
  });

  return app;
};
