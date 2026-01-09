import Navbar from '../business/navbar/Navbar'
import Main from '../business/main/Main'
import Card from '../business/card/Card'
import Tiles from '../business/tiles/Tiles'
import Page from '../business/page/Page'
import Broker from '../business/broker/Broker'
import Government from '../business/government/Government'
import IndustryInsight from '../business/industry/IndustryInsights'
import FooterCard from '../business/footercard/FooterCard'
import Footer from '../business/footer/Footer'
import Explore from './exploreOurSolutions/explore/Explore'
import AllCards from './content/AllCards'
import ExploreFooter from './exploreOurSolutions/explorefooter/ExploreFooter'
import Signin from './signInPage/signin/Signin'
import Signcard from './signInPage/signincard/Signcard'
import CustomerPortals from './portal/CustomerPortals'
import FooterSign from './signInPage/signinfooter/FooterSign'


const Business= () => {
  return (
    <div>
        <Navbar />
      <Main />
      <Card />
      <Tiles />
      <Page />
      <Broker />
      <Government />
      <IndustryInsight/>
      <FooterCard />
      <Footer />
       {/* explore our solutions */}
      <AllCards />
       {/* explore our solutions */}
         {/* sign in */}
       {/* sign in */}
      <CustomerPortals />
       {/* sign in */}
    </div>
  )
}

export default Business