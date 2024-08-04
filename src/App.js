import React from 'react';
import ImageGallery from './ImageGallery';

function App() {

  const images = [
    { url: 'https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151081.jpg', description: 'Beautiful sunset over the mountains' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvea-Pu-eUfo0Wt5U90vgOOAXF0QicOtcOg&s', description: 'Serene beach view' },
    { url: 'https://moewalls.com/wp-content/uploads/2023/11/green-forest-thumb.jpg', description: 'Lush green forest' },
    { url: 'https://c4.wallpaperflare.com/wallpaper/97/833/155/mountains-firewatch-green-forest-wallpaper-preview.jpg', description: 'Lush green forest'},
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1S_rQFV7Bad_B8ZHi1qCG2OUU_WTc9riGg&s', description: 'Lush green forest'},
    { url: 'https://cdn.openart.ai/stable_diffusion/b31ed9c7d0393735268576e5a31389c0a3c9f482_2000x2000.webp', description: 'Lush green forest'},
    { url: 'https://i.pinimg.com/originals/ac/cd/a5/accda556b9106fc2880965f0cae9d413.jpg', description: 'Lush green forest'},
    { url: 'https://wallpapers.com/images/hd/minimalist-mountain-wgpjwreazqlv5z24.jpg', description: 'Lush green forest'},
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoGRjVfq5Go8bEPJXVZbTBJexjwkTs3nVFw&s', description: 'Lush green forest'},
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXg9YL-vwDDBeHlWZhsGn3Bhx9bDZM09Cww&s', description: 'Lush green forest'},
    { url: 'https://images5.alphacoders.com/132/1328245.jpeg', description: 'Lush green forest'},
    { url: 'https://c4.wallpaperflare.com/wallpaper/267/710/388/buddhism-buddhist-digital-art-meditation-wallpaper-preview.jpg', description: 'Lush green forest'},
    { url: 'https://wallpapercave.com/wp/wp4194209.jpg', description: 'Lush green forest'}
  ];

  return (
    <div className="App">
      <h1 style={{textAlign: "center",margin: "3rem 0px"}}>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
