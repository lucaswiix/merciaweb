import React from 'react';
import Construction from 'src/components/Construction/Construction';

// import { Container } from './styles';

const ObrasPage: React.FC = () => {
  return (
    <div className="list-secondary ">
      <div className="list-secondary--content">
        <div className="list-secondary--section">
          <h1 className="list-secondary--title">Obras</h1>
        </div>
        <Construction />
      </div>
    </div>);
}

export default ObrasPage;