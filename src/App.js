import React, { useEffect } from 'react';
import * as braze from '@braze/web-sdk';

const App = () => {
  useEffect(() => {
    braze.initialize('bfe1d7a8-2c42-428e-a5fd-5757c0f6507d', {
      baseUrl: 'sdk.fra-02.braze.eu',
      enableLogging: true,
    });
  }, []);

  return (
    <div>
      {/* Your app components */}
    </div>
  );
};

export default App;
