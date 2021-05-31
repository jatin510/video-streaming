import { Router } from 'express';

import { videoStream } from '../controller/videoStreaming';

const apiRoutes = Router();

apiRoutes.get('/video', (req, res) => {
  videoStream(req, res);
});

export default apiRoutes;
