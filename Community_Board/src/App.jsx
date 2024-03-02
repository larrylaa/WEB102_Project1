import './App.css';
import BillyBronco from "../src/assets/Bronco.png";
import Card from "../src/components/card.jsx"; // Import the Card component

const App = () => {

  const clubs = [
    {
      name: "Computer Science Society",
      description: "Computer Science Society is the oldest organization at Cal Poly Pomona. We are one of the largest clubs that host events regularly and advise our members on the next path to success.",
      imageUrl: "https://cppcss.club/images/logo.png",
      websiteLink: "https://cppcss.club/"
    },

    {
      name: "Software Engineering Association",
      description: "Become part of the largest software engineering community at Cal Poly Pomona. Put software lifecyles methodologies, version control, documentation, data structures & algorithms into practice. Work on projects ranging from web development to ML/AI!",
      imageUrl: "https://www.cppsea.com/assets/images/sealogo.png",
      websiteLink: "https://www.cppsea.com/"
    },

    {
      name: "Cal Poly FAST",
      description: "We study Digital Forensics, Cyber Crime, and Cybersecurity by working with government agencies, and private firms. Our goal is to better understand methods employed in network defense, penetration testing, forensic analysis and information intelligence. ",
      imageUrl: "https://www.cppfast.org/wp-content/uploads/2016/02/header.png",
      websiteLink: "https://www.cppfast.org/"
    },

    {
      name: "Cal Poly SWIFT",
      description: "We are Students With an Interest in the Future of Technology, SWIFT! Our goal is to provide a supportive and collaborative environment for individuals to learn about the latest technologies and techniques in cybersecurity.     ",
      imageUrl: "https://fragnite.calpolyswift.org/img/clubs/swift.png",
      websiteLink: "https://www.calpolyswift.org/"
    },

    {
      name: "Game Development Club",
      description: "We are the CPP Game Development Club. Our club's purpose is to promote and educate students about the world of game design and development. ",
      imageUrl: "https://www.cppgamedev.com/img/gamedevicon.png",
      websiteLink: "https://www.cppgamedev.com/"
    },


    {
      name: "MISSA",
      description: "MISSA (Management Information Systems Student Association) is a student-run organization at Cal Poly Pomona that was created to bring together students and IT professionals.    ",
      imageUrl: "https://www.calpolymissa.org/img/Missa+Logo.png",
      websiteLink: "https://www.calpolymissa.org/"
    },


    {
      name: "Google Developer Student Clubs",
      description: "Google Developer Student Club members are community oriented. Like Googlers, we are leaders who believe technology can do extraordinary things for the world. We will take on the responsibility to impact students and empower these students to impact our community.  ",
      imageUrl: "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg",
      websiteLink: "https://gdsc.community.dev/california-state-polytechnic-university/"
    },


    {
      name: "sheCodes",
      description: "sheCodes is Cal Poly Pomona’s ACM-W chapter. We aim to create a community for underrepresented groups within Computer Science by advocating.    ",
      imageUrl: "https://www.cppshecodes.com/images/logo.png",
      websiteLink: "https://www.cppshecodes.com/"
    },


    {
      name: "Alpfacpp",
      description: "ALPFA empowers and develops Latino men and women as leaders of character for the nation in every sector of the global economy. ",
      imageUrl: "https://alpfacpp.weebly.com/uploads/5/7/5/9/57595523/published/31ba164394bd3ec9b2f2762c8654784a9a6fd2d3-original.png?1531865997",
      websiteLink: "https://alpfacpp.weebly.com/"
    },


    {
      name: "CPP Hyperloop",
      description: "Season 4 of the CPP Hyperloop Collaboration Workshop Series is here! 12 new workshops, focused on multidisciplinary engineering project development principles are ready for students to apply and enjoy!",
      imageUrl: "https://lh3.googleusercontent.com/0VH_-UJELgxSvZFRJp5BndOXu8cC4fiS2youM7EOlqKqpbz89vI9Ph2lkVNctGIKeBv2FCh-fvzmvDqeqcx5VSQ=w16383",
      websiteLink: "https://www.cpphyperloop.tech/"
    },


    {
      name: "Science Council",
      description: "Science Council allocates ASI funding to our clubs with the intent of promoting student involvement in campus activities.   ",
      imageUrl: "https://se-images.campuslabs.com/clink/images/f34c2c4f-2523-44ff-a469-b8447b9de07802250022-abcb-49cf-874e-5c1678bb9a84.png?preset=med-sq",
      websiteLink: "https://calpolypomona.campuslabs.com/engage/organization/sciencecouncil"
    },


    {
      name: "./script",
      description: "We encourage computer science students to enhance their skills in cybersecurity through building a community of people interested in topics such as cryptography, reverse engineering, and secure coding.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*lUPhKKVlULLm1isLzY-sEg.png",
      websiteLink: "https://sites.google.com/view/dotslashscript"
    },


  ]


  return (
    <div className="App">
      <img className="Billy" id="left" src={BillyBronco} alt="Billy" />
      <img className="Billy" id="right" src={BillyBronco} alt="Billy" />
      <h1 className="Title">Cal Poly Pomona Clubs</h1>

      <div className="flex-container">
      {clubs.map((club, index) => (
      <Card key={index} name={club.name} description={club.description} imageUrl={club.imageUrl} websiteLink={club.websiteLink} />
    ))}
      </div>

    </div>
  )
}

export default App
