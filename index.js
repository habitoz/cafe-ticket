import './config/database';
import server from './config/server';

const PORT = process.env.PORT || 8000;
server.listen(PORT,'0.0.0.0', () => {
  console.log(`app running on port ${PORT}`);
});