import React from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import FileList from '../../components/FileList';
import FilesPage from '../../components/FilesPage';
import Pagination from '../../components/Pagination';

const FileListPage = ({ files, page, limit }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    const offset = Math.round(page * limit);
    router.push(`/files?offset=${offset > 0 ? offset : 0}&limit=${limit}`);
  };

  const handleLimitChange = (limit) => {
    router.push(`/files?offset=0&limit=${limit}`);
  };

  return (
    <FilesPage>
      <FileList files={files} />
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={page}
        handleLimitChange={handleLimitChange}
        filesLength={files.length}
      />
    </FilesPage>
  );
};

FileListPage.getInitialProps = async ({ query }) => {
  const { limit = 5, offset } = query;

  const resp = await fetch(
    `http://interview-api.snackable.ai/api/file/all?limit=${limit}&offset=${offset}`
  );
  const json = await resp.json();
  return { files: json, page: offset / limit, limit };
};

export default FileListPage;
