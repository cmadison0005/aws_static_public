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
          <p>
            Lorem barksum dolor sit amet, canine consectetur adipiscing elit. Pawsitively, the wagging tail vestibulum lacus, fetching the frisbee with joyful energy. Sniffing through the park, tail-high and ears perked, the loyal pup chases after dreams with boundless enthusiasm. Bone-shaped biscuits and cozy dog beds foster comfort and happy naps under the warm sun.
          </p>
          <p>
            Puppy ipsum dolor sit amet, tail wagging consectetur sit amet fetch elit. Sit stay roll over, the daily routine of joyful pups sniffing the air and bounding through fields. Squeaky toys and belly rubs bring endless delight, while the rhythmic pant and soft paws patter paint a picture of canine contentment. Life’s a walk in the park with loyal companions by your side.
          </p>
          <p>
            <a href="https://community.docusign.com/community-spotlights-154/developer-spotlight-randall-madison-forefront-technologies-llc-21804">
              A link to a thing
            </a>
          </p>
        </div>
        {/* <div className="bio-left">
          <img src={artemisPic} alt="Profile" />
        </div>
        <div className="bio-right">
          <h2>T I Moth y</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="bio-left">
          <img src={noodlePic} alt="Profile" />
        </div>
        <div className="bio-right">
          <h2>The Noodliest Noodle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div> */}
      </div>

    </div>
  );
};

export default Bio;