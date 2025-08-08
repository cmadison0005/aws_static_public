import './Bio.css';
import dogsPic from '../assets/dogs.jpg';


const Bio = () => {
  return (
    <div className='content-area'>
      <div className="bio-layout">
        <div className="bio-left">
          <img src={dogsPic} alt="Profile" />
        </div>
        <div className="bio-right">
          <h2>Look at all these dogs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu varius turpis, ac pretium ipsum. Sed tincidunt orci et lorem vehicula, ac porta nisi condimentum. Pellentesque mattis at lectus ac aliquet. Vivamus venenatis convallis aliquet. Suspendisse potenti. Vestibulum metus lectus, accumsan ac est non, porta efficitur enim. Suspendisse faucibus ornare quam, eu congue odio interdum id. Cras vel justo interdum, dignissim lacus eu, ornare ipsum. Pellentesque hendrerit est est, vel pellentesque diam porttitor ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et porttitor massa. Maecenas sed mattis justo, ac viverra augue. Praesent vel ipsum luctus, ultricies lorem et, auctor mi. Sed pellentesque, dui sed semper euismod, est elit lobortis magna, non gravida felis dolor porta mi. Aliquam placerat pretium commodo. Quisque tempus vel nisi ac ultrices.</p>
          <p>Quisque suscipit orci tempus neque dictum, nec posuere diam congue. Etiam laoreet nulla vulputate risus vehicula semper. In sapien ligula, tincidunt molestie mi finibus, vehicula posuere urna. Maecenas commodo vehicula blandit. In placerat tortor interdum elementum aliquam. Vestibulum ut molestie tellus. Nulla luctus, dolor sed eleifend congue, orci elit fringilla mauris, ut consectetur erat magna quis lorem. Sed non sodales elit, ac bibendum lacus. Cras eu sodales diam. Etiam in justo sed est vulputate rhoncus. Fusce nulla elit, facilisis facilisis congue ac, ornare id lorem. Donec id tellus pretium, varius leo sed, sodales quam. Phasellus finibus magna enim, id maximus felis vulputate non.</p>
          <p>Ut ornare aliquam elit sed ultrices. Aliquam a eleifend dolor, eget laoreet ipsum. Nunc non turpis rhoncus nisi elementum condimentum. Praesent elementum velit ut fermentum ultricies. Ut mattis ornare justo at faucibus. Morbi malesuada augue a hendrerit euismod. Nam bibendum lectus in ultrices consectetur.</p>
          <p>
            <a href="https://community.docusign.com/community-spotlights-154/developer-spotlight-randall-madison-forefront-technologies-llc-21804" target="_blank" rel="noopener noreferrer">
              A link to a thing
            </a>
          </p>
        </div>        
      </div>

    </div>
  );
};

export default Bio;