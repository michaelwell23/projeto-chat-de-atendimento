import { http } from './http';

import './websocket/client';
import './websocket/admin';

const port = 3000;

http.listen(port, () =>
  console.log(`Example app listening on in http://localhost:${port}`)
);
