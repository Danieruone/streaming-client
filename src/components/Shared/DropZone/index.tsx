import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// UI
import AddIcon from '@mui/icons-material/Add';

interface Props {
  setCurrentImage: any;
  setIsEditing: any;
}

const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const DropZone: FC<Props> = ({ setCurrentImage, setIsEditing }) => {
  const onDrop = useCallback((acceptedFiles) => {
    toBase64(acceptedFiles[0]).then((data) => {
      setCurrentImage({
        base64: data,
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
      setIsEditing(false);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <div
        style={{
          width: 100,
          height: 100,
          border: '1px solid black',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <AddIcon sx={{ color: 'gray', width: 50, height: 50 }} />
      </div>
    </div>
  );
};
