import Subnav from '../components/Subnav'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import DevExperience from '../components/DevExperience'
import Build from '../components/Build'
import Services from '../components/Services'
import Recommendation from '../components/Recommendation'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <Subnav />
      <Navbar />
      <Header />
      <DevExperience /> 
      <Build />  
      <Services />  
      <Recommendation />
      <Footer />
    </main>
  )
}

export default Home