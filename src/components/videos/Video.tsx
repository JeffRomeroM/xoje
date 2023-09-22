import React from 'react';

export const Video = () => {
  
  return (
    <div className="videos">
      
      
      <h1>Videos</h1>
      <div className="video-container">
        <video controls>
            <source src="https://www.youtube.com/watch?v=tLfi_5tn0a0" type="video/mp4"></source>
            Tu navegador no admite la reproducción de videos.
        </video>
    </div>
    </div>
  );
};
