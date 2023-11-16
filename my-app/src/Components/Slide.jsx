import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.css';
import { FaPlay } from 'react-icons/fa';
import Iframe from './Iframe';
function MovieSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    {/* ********slide 1 new movie *****0 */}
   <h1 className='heading'>New Movies</h1>
<div className="home " >
<Slider {...settings}>
     {/* ********** slide first image 1 ******* */}
<div className="home__sliderItem sliderBox">
<a href='./Iframe.jsx'>
      <img
      src="https://tse1.mm.bing.net/th?id=OIP.MaUFSYTWpuphKF-s_5h9FgHaKf&pid=Api&P=0&h=180" className='imageMovieImage'alt="Movie 1" />
</a>
  <center>
  <button className='custom-btn'>
    
    <FaPlay className="play-icon" />
    </button>
</center>

  <h2>Black widow</h2>
    <p>Black Widow follows Natasha Romanoff as she confronts her dark past and unravels a conspiracy tied to the Red Room, testing her loyalties and skills as a former Russian spy.</p>
</div>


    {/* ****** slide 1 image 2 **** */}
    <div className="movieImage sliderBox">
    
    <img
    src="https://tse1.mm.bing.net/th?id=OIP.42HnbNptnsb-_5iKr0cvfgHaKj&pid=Api&P=0&h=180" className='imageMovieImage' 
  alt="Movie 1"/>
  <h2>Eclipse of Destiny</h2>
<p>
In "Eclipse of Destiny," a chosen hero must unravel ancient secrets and confront dark adversaries to prevent a cosmic catastrophe foretold by prophecies, deciding the fate of their world amid a celestial convergence.</p>
   
</div>

    {/* slide 1 image 3  */}
<div className="movieImage sliderBox">
    
    <img
    src="https://tse2.mm.bing.net/th?id=OIP.8qetynxHDbMUg0yHuMInFAAAAA&pid=Api&P=0&h=180" className='imageMovieImage' 
  alt="Movie 1"/>
  <h2>whispers in the wind movie</h2>
<p>
"In 'Whispers in the Wind,' a protagonist follows mysterious whispers, unraveling hidden truths in a journey of secrets and unexpected connections."
</p>
</div>

{/* *** slide 1 image 4 ** */}
<div className="movieImage sliderBox">
    
    <img
    src="https://m.media-amazon.com/images/I/51c4QW3+HfL.jpg" className='imageMovieImage' 
  alt="Movie 1"/>
  <h2>"Quantum Paradox"</h2>
<p>
"In 'Quantum Paradox,' a mind-bending thriller explores the intricate dance between parallel universes and the consequences of challenging the boundaries of reality."
</p> 
</div>

<div className="movieImage sliderBox">
    
        <img
        src="https://tse1.mm.bing.net/th?id=OIP.42HnbNptnsb-_5iKr0cvfgHaKj&pid=Api&P=0&h=180" className='imageMovieImage' 
      alt="Movie 1"/>
      <h2>Eclipse of Destiny</h2>
    <p>
In "Eclipse of Destiny," a chosen hero must unravel ancient secrets and confront dark adversaries to prevent a cosmic catastrophe foretold by prophecies, deciding the fate of their world amid a celestial convergence.</p>
       
 </div>

<div className="movieImage sliderBox">
  
    <img
      src="https://tse3.explicit.bing.net/th?id=OIP.zDWIRDoy9OLgwtAaZW6QCwHaET&pid=Api&P=0&h=180"
      alt="Movie 1"
    />
     <h2>Movie 4</h2>
    <p>Description of Movie 4</p>
</div>
 
<div className="movieImage sliderBox">
    <img
      src="https://tse3.explicit.bing.net/th?id=OIP.zDWIRDoy9OLgwtAaZW6QCwHaET&pid=Api&P=0&h=180"
      alt="Movie 1"
    />
       <h2>Movie 5</h2>
    <p>Description of Movie 5</p>
</div>

<div className="movieImage sliderBox">
    <img
      src="https://tse3.explicit.bing.net/th?id=OIP.zDWIRDoy9OLgwtAaZW6QCwHaET&pid=Api&P=0&h=180"
      alt="Movie 1"
    />
       <h2>Movie 6</h2>
    <p>Description of Movie 6</p>
</div> 



      </Slider>
</div>

{/* ********slide 2 new movie *****0 */}
<h1>hl</h1>
<div className="home " >


<Slider {...settings}>
     {/* ********** slide first image 1 ******* */}
<div className="home__sliderItem sliderBox">
    <a href=''>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.MaUFSYTWpuphKF-s_5h9FgHaKf&pid=Api&P=0&h=180" className='imageMovieImage'alt="Movie 1"
        />
    </a>
      
    <center>
      <button className='custom-btn'>
        
        <FaPlay className="play-icon" />
        </button>
    </center>

      <h2>Black widow</h2>
        <p>Black Widow follows Natasha Romanoff as she confronts her dark past and unravels a conspiracy tied to the Red Room, testing her loyalties and skills as a former Russian spy.</p>
</div>

    {/* ****** slide 1 image 2 **** */}
    <div className="movieImage sliderBox">
    
    <img
    src="https://tse1.mm.bing.net/th?id=OIP.42HnbNptnsb-_5iKr0cvfgHaKj&pid=Api&P=0&h=180" className='imageMovieImage' 
  alt="Movie 1"/>
  <h2>Eclipse of Destiny</h2>
<p>
In "Eclipse of Destiny," a chosen hero must unravel ancient secrets and confront dark adversaries to prevent a cosmic catastrophe foretold by prophecies, deciding the fate of their world amid a celestial convergence.</p>
   
</div>

    {/* slide 1 image 3  */}
<div className="movieImage sliderBox">
    
    <img
    src="https://tse2.mm.bing.net/th?id=OIP.8qetynxHDbMUg0yHuMInFAAAAA&pid=Api&P=0&h=180" className='imageMovieImage' 
  alt="Movie 1"/>
  <h2>whispers in the wind movie</h2>
<p>
"In 'Whispers in the Wind,' a protagonist follows mysterious whispers, unraveling hidden truths in a journey of secrets and unexpected connections."
</p>
</div>

{/* *** slide 1 image 4 ** */}
<div className="movieImage sliderBox">
    
    <img
    src="https://m.media-amazon.com/images/I/51c4QW3+HfL.jpg" className='imageMovieImage' 
  alt="Movie 1"/>
  <h2>"Quantum Paradox"</h2>
<p>
"In 'Quantum Paradox,' a mind-bending thriller explores the intricate dance between parallel universes and the consequences of challenging the boundaries of reality."
</p> 
</div>

<div className="movieImage sliderBox">
    
        <img
        src="https://tse1.mm.bing.net/th?id=OIP.42HnbNptnsb-_5iKr0cvfgHaKj&pid=Api&P=0&h=180" className='imageMovieImage' 
      alt="Movie 1"/>
      <h2>Eclipse of Destiny</h2>
    <p>
In "Eclipse of Destiny," a chosen hero must unravel ancient secrets and confront dark adversaries to prevent a cosmic catastrophe foretold by prophecies, deciding the fate of their world amid a celestial convergence.</p>
       
 </div>

<div className="movieImage sliderBox">
  
    <img
      src="https://tse3.explicit.bing.net/th?id=OIP.zDWIRDoy9OLgwtAaZW6QCwHaET&pid=Api&P=0&h=180"
      alt="Movie 1"
    />
     <h2>Movie 4</h2>
    <p>Description of Movie 4</p>
</div>
 
<div className="movieImage sliderBox">
    <img
      src="https://tse3.explicit.bing.net/th?id=OIP.zDWIRDoy9OLgwtAaZW6QCwHaET&pid=Api&P=0&h=180"
      alt="Movie 1"
    />
       <h2>Movie 5</h2>
    <p>Description of Movie 5</p>
</div>

<div className="movieImage sliderBox">
    <img
      src="https://tse3.explicit.bing.net/th?id=OIP.zDWIRDoy9OLgwtAaZW6QCwHaET&pid=Api&P=0&h=180"
      alt="Movie 1"
    />
       <h2>Movie 6</h2>
    <p>Description of Movie 6</p>
</div> 



      </Slider>
</div>
</>
    
  
  );
}

export default MovieSlider;






// ************image 
// 'https://tse3.mm.bing.net/th?id=OIP.Nf4HBjqFmfH7RJWb-dJCPQHaEo&pid=Api&P=0&h=180',
// 'https://tse4.mm.bing.net/th?id=OIP.1mywxCeMahOqUp7teJJrVAHaE7&pid=Api&P=0&h=180',
// 'https://tse3.mm.bing.net/th?id=OIP.1urZZbVXSmZaSnvSAPGvmQHaEK&pid=Api&P=0&h=180',
// 'https://tse3.mm.bing.net/th?id=OIP.k8qsGkANTtUvft8BAjgIPQHaDt&pid=Api&P=0&h=180',
// 'https://tse1.mm.bing.net/th?id=OIP.4pHFw6q748ZUNyWYWoJobQHaE7&pid=Api&P=0&h=180',
// 'https://tse4.mm.bing.net/th?id=OIP.2X6amKBpCfjEe_QamUaeWwHaEJ&pid=Api&P=0&h=180'