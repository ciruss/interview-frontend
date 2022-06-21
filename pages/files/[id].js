import React from 'react';
import fetch from 'isomorphic-unfetch';
import FilesPage from '../../components/FilesPage';
import FileDetail from '../../components/FileDetail';

const FileDetailPage = ({ file, segments }) => {
  return (
    <FilesPage>
      <FileDetail file={file} segments={segments} />
    </FilesPage>
  );
};

FileDetailPage.getInitialProps = async ({ req, query }) => {
  const fileId = query.id;
  const fileDetails = await (
    await fetch(`http://interview-api.snackable.ai/api/file/details/${fileId}`)
  ).json();
  const segments = await (
    await fetch(`http://interview-api.snackable.ai/api/file/segments/${fileId}`)
  ).json();
  return { file: fileDetails, segments };
};

export default FileDetailPage;
