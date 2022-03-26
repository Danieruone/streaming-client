// UI
import Skeleton from '@mui/material/Skeleton';

export const SkeletonStreamPreview = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <Skeleton
        variant='rectangular'
        width={300}
        height={180}
        style={{ marginBottom: 10 }}
      />
      <div style={{ display: 'flex' }}>
        <Skeleton
          variant='circular'
          width={40}
          height={40}
          style={{ marginRight: 10 }}
        />
        <Skeleton variant='text' width={225} />
      </div>
    </div>
  );
};
