import cx from 'classnames';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const PrivateLayout: React.FC<{ children: any; className?: string }> = ({ children, className }) => {
  return (
    <div className={cx(className)}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PrivateLayout;
