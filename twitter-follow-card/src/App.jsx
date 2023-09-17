import TwitterFollowCard from "./componentes/TwitterFollowCard"
import './App.css';

function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName='midudev' name='Midu' initialIsFollowing={true} />
      <TwitterFollowCard userName='vxnder' name='VanderHart' initialIsFollowing />
      <TwitterFollowCard name='Pablo Hernandez' initialIsFollowing={false} />
    </section>
  )
}


export default App
