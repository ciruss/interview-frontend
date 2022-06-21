import Link from 'next/link';
import { useEffect, useState } from 'react';

export default ({ files }) => {
  const [filteredFiles, setFilteredFiles] = useState(files);
  const [processingStatus, setProcessingStatus] = useState('ALL');

  useEffect(() => {
    setFilteredFiles(files);
    setProcessingStatus('ALL');
  }, [files]);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setProcessingStatus(filterValue);

    if (filterValue === 'ALL') {
      setProcessingStatus(filterValue);
      setFilteredFiles(files);
      return;
    }

    const filteredFiles = files.filter((file) => file.processingStatus === filterValue);
    setFilteredFiles(filteredFiles);
  };

  return (
    <table className='border-collapse border-2 border-gray-500'>
      <thead>
        <tr>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>File ID</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>
            Processing Status
            <select onChange={handleFilterChange} name='processFilter' value={processingStatus}>
              <option value='ALL'>No filter</option>
              <option value='FINISHED'>Finished</option>
              <option value='FAILED'>Failed</option>
              <option value='PROCESSING'>Processing</option>
            </select>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredFiles.map((file) => {
          return (
            <Link key={file.fileId} href={`/files/${file.fileId}`}>
              <tr className='hover:bg-gray-100 cursor-pointer'>
                <td className='border border-gray-400 px-4 py-2'>{file.fileId}</td>
                <td className='border border-gray-400 px-4 py-2'>{file.processingStatus}</td>
              </tr>
            </Link>
          );
        })}
      </tbody>
    </table>
  );
};
