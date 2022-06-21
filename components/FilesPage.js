import React from 'react';
import Head from 'next/head';
import '../styles/main.css';

const FilesPage = ({ children }) => {
  return (
    <div className='flex flex-auto flex-col items-center justify-center'>
      <Head>
        <title>Snackable - File browser</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  );
};

export default FilesPage;
