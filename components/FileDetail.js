export default ({ file, segments }) => (
  <div className='flex flex-col flex-auto items-center justify-center'>
    <p>
      <strong>File name:</strong> {file.fileName}
    </p>
    <p>
      <strong>File length:</strong> {file.fileLength}
    </p>
    <p>
      <strong>Series title:</strong> {file.seriesTitle}
    </p>
    {segments.map((segment) => (
      <div className='w-3/4 mt-3 mb-3' key={segment.fileSegmentId}>
        <p>
          <strong>Segment id:</strong> {segment.fileSegmentId}
        </p>
        <p>
          <strong>Segment start:</strong> {segment.startTime}
        </p>
        <p>
          <strong>Segment end:</strong> {segment.endTime}
        </p>
        <p>
          <strong>Segment text:</strong> {segment.segmentText}
        </p>
      </div>
    ))}
  </div>
);
