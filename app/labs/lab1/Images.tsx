export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/Tesla-optimus-bot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Something I like:
      <br />
      <img
        id="wd-your-image"
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        width="300px"
        alt="A mountain landscape I like"
      />
      <br />
      A sample public image:
      <br />
      <img
        id="wd-ai-image"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/main_image_star-forming_region_carina_nircam_final-5mb.jpg"
        width="200px"
        alt="NASA image of a star-forming region"
      />
    </div>
  );
}