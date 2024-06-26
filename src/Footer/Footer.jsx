import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
// import "./Footer.css";

function FooterComponent() {
  const about =
    "Your one-stop destination for delectable, handcrafted cupcakes that are as beautiful as they are delicious. At Mel Bakes, we believe in the magic of baking and the joy it brings to every celebration. Our cupcakes are made with the finest ingredients, from rich, creamy butter to fresh, seasonal fruits, ensuring every bite is a burst of flavor. Whether you're looking for classic vanilla, decadent chocolate, or unique seasonal creations, our cupcakes are perfect for any occasion. Join us at Mel Bakes, where every cupcake is a sweet masterpiece baked with love and passion.";

  // const ceo =
  //   "Melia, the inspiring CEO of Mel Bakes, has turned a small local cupcake store into a renowned international cupcake producer. With a blend of business savvy and a deep love for baking, she skillfully manages every part of the business. Melia ensures every cupcake meets the highest quality standards, overseeing everything from product development to marketing and customer service. Her creative strategies include expanding the product range, adopting eco-friendly practices, and using social media to reach a global audience. Thanks to Melia's passionate and innovative leadership, Mel Bakes has grown from a favorite local bakery into a leading name in the cupcake world, bringing joy to customers worldwide with delicious, beautifully crafted treats.";

  // const handleAbout = () => {
  //   document.querySelector("#content").innerHTML = about;
  //   document.getElementById("aboutButton").style.backgroundColor = "#2b2a35";
  //   document.getElementById("ceoButton").style.backgroundColor = "transparent";
  //   document.getElementById("ceoButton").style.color = "rgb(212, 170, 65)";
  //   document.getElementById("aboutButton").style.color = "goldenrod";
  // };
  // const handleCeo = () => {
  //   document.querySelector("#content").innerHTML = ceo;
  //   document.getElementById("ceoButton").style.backgroundColor = "#2b2a35";
  //   document.getElementById("aboutButton").style.backgroundColor =
  //     "transparent";
  //   document.getElementById("aboutButton").style.color = "rgb(212, 170, 65)";
  //   document.getElementById("ceoButton").style.color = "goldenrod";
  // };
  return (
    <footer className="h-max w-full max-w-7xl px-4 py-4 sm:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 md:gap-8">
        <div className="mb-8 flex w-full flex-col gap-2 sm:w-1/3 md:w-1/2">
          <h1 className="text-[goldenrod]">About us</h1>
          <p className="h-auto text-justify text-sm text-white">{about}</p>
          {/* <h1>The Ceo</h1>
          <p className='content'>{ceo}</p> */}
        </div>

        <div className="mb-8 flex h-max w-auto flex-col gap-4 sm:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="text-[goldenrod]">Contact Us</h1>
            <a className="text-white" href="/">
              MelBakes@gmail.com
            </a>
            <a className="text-white" href="https://www.facebook.com/MelBakes">
              www.facebook.com/MelBakes
            </a>
            <h3 className="text-white">(+63) 091223456789</h3>
            <a href="/" className="text-white">
              Branches
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[goldenrod]">FAQ`S</h1>
            <a href="/" className="text-white">
              <FontAwesomeIcon icon={faLink} className="linkIcon md-3 mr-2" />
              Order Process
            </a>
            <a href="/" className="text-white">
              <FontAwesomeIcon icon={faLink} className="linkIcon md-3 mr-2" />
              Payment Methods
            </a>
            <a href="/" className="text-white">
              <FontAwesomeIcon icon={faLink} className="linkIcon md-3 mr-2" />
              Returns and Refund
            </a>
            <a href="/" className="text-white">
              <FontAwesomeIcon icon={faLink} className="linkIcon md-3 mr-2" />
              Allergy Information
            </a>
            <a href="/" className="text-white">
              <FontAwesomeIcon icon={faLink} className="linkIcon md-3 mr-2" />
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          className="w-max self-end rounded-md bg-primary px-3 py-1 align-middle text-sm text-gray-300 hover:text-white hover:shadow-lg hover:shadow-primary"
          id="logoutButton"
        >
          Log out
        </button>
      </div>

      <h1
        className="text-center text-xs text-gray-950 text-opacity-50"
        id="author"
      >
        CODED BY JAMES LEO
        <FontAwesomeIcon
          className="ml-2 text-opacity-50"
          icon={faCode}
          id="endTag"
        />
      </h1>
    </footer>
  );
}
export default FooterComponent;
