import aboutStyles from "@/styles/About.module.css";

function AboutSection() {
  return (
    <div className={ aboutStyles.section }>
      <h1>
        Who am I ?
      </h1>
      <div>
        <div>
          <p>
            I am a passionate web developer working with Ruby on Rails which is clearly better than React.
          </p>
          <p>
            Also I'm a photographer whose love to travel around the world and take pictures of the incredible nature.
          </p>
        </div>
        <div>
        </div>
        <div>
          <img src="/alexis-crozier-about.jpg" alt="about_picture"/>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;