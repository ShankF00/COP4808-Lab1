import './App.css';
import Card from './components/Card.jsx';

const App = () => {

  return (
    <div style ={{paddingTop: '75px'}}>
      <h1>Some games in my steam wishlist that I think look cool</h1>
      <a href='https://tenor.com/view/pattern-moving-infinity-loop-colorful-gif-17178714' target="_blank" rel="noopener noreferrer">
        <h2>Background from here</h2>
      </a>
      <div className="App" style ={{paddingTop: '75px'}}>
        <Card title = 'Peripeteia' dev = 'Ninth Exodus' img = 'src/assets/img/peripeteia.jpg' link = 'https://store.steampowered.com/app/1437760/Peripeteia/' textColor = '#b41a1c' cardBack = '#8f999f'/>
        <Card title = 'Big Walk' dev = 'House House' img = 'src/assets/img/bigWalk.jpg' link = 'https://store.steampowered.com/app/1478500/Big_Walk/' textColor = 'white' cardBack = '#4a72b0'/>
        <Card title = 'ENCHAIN' dev = 'mattlawr' img = 'src\assets\img\enchain.jpg' link = 'https://store.steampowered.com/app/1396870/ENCHAIN/' textColor = 'white' cardBack = '#540505'/>
        <Card title = 'Psycho Patrol R' dev = 'Consumer Softproducts' img = 'src\assets\img\psychoPatrolR.jpg' link = 'https://store.steampowered.com/app/1907590/Psycho_Patrol_R/' textColor = '#1e6efe' cardBack = '#d7d3ad'/>
        <Card title = 'AirFram Ultra' dev = 'Videocult' img = 'src\assets\img\ariframUltra.jpg' link = 'https://store.steampowered.com/app/2522120/Airframe_Ultra/' textColor = 'white' cardBack = '#002082'/>
        <Card title = "Lorn's Lure" dev = 'Rubeki' img = 'src\assets\img\lornsLure.jpg' link = 'https://store.steampowered.com/app/1417930/Lorns_Lure/' textColor = 'white' cardBack = '#656a84'/>
        <Card title = 'Slave Zero X' dev = 'Poppy Works' img = 'src\assets\img\slaveZeroX.jpg' link = 'https://store.steampowered.com/app/1903910/Slave_Zero_X/' textColor = '' cardBack = '#d50000'/>
        <Card title = 'V.A Proxy' dev = 'PryoLith' img = 'src\assets\img\vaProxy.jpg' link = 'https://store.steampowered.com/app/2063390/VA_Proxy/' textColor = '' cardBack = '#64596e'/>
        <Card title = 'Unrecord' dev = 'DRAMA' img = 'src\assets\img\Unrecord.jpg' link = 'https://store.steampowered.com/app/2381520/Unrecord/' textColor = 'white' cardBack = '#c883c4'/>
        <Card title = 'Into the Radius 2' dev = 'CM Games' img = 'src\assets\img\ITR2.jpg' link = 'https://store.steampowered.com/app/2307350/Into_the_Radius_2/' textColor = '' cardBack = '#fca161'/>
      </div>
    </div>
  )
}

export default App