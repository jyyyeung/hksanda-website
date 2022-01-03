// https://dev.to/dnature/file-uploads-with-react-and-apollo-part-2-3fja
// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// const FileUpload = () => {
//   const onDrop = useCallback((acceptedFiles) => {
//     // do something here
//     console.log(acceptedFiles);
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//   });
//   return (
//     <>
//       <div
//         {...getRootProps()}
//         className={`dropzone ${isDragActive && "isActive"}`}
//       >
//         <input {...getInputProps()} />
//         {isDragActive ? (
//           <p>Drop the files here ...</p>
//         ) : (
//           <p>Drag 'n' drop some files here, or click to select files</p>
//         )}
//       </div>
//     </>
//   );
// };
// export default FileUpload;
