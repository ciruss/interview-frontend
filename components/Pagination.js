import { useRouter } from 'next/router';

export default ({ handlePageChange, currentPage, handleLimitChange, filesLength }) => {
  const {
    query: { limit },
  } = useRouter();

  return (
    <div className='mt-2'>
      <div className='flex justify-center'>
        <button
          className='mr-2'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          {'<--'}
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={filesLength < limit}>
          {'-->'}
        </button>
      </div>
      <div>
        <label htmlFor='fileLimit'>File limit:</label>
        <select id='fileLimit' onChange={(e) => handleLimitChange(e.target.value)} value={limit}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
    </div>
  );
};
