import Header from './components/Header';
import Bookmark from './components/Bookmark';
import SpaceLine from './components/Spacer/SpaceLine';


//creare il componente BOTTONE con tanto di icone fighe e aggiungere il logo nell header
//necessario refactor di spacer con le props WebkitTransform:'-moz-initial',transform: 'skewX(-16deg)' per una maggiore pulizia del componente andra eliminato arrowL e arrowR e richiamato semplicemente l elemento filler con il margine adeguato e un flex fisso per i piu piccoli e via via piu grande man mano che ci si avvicina al centro

function App() {
  return (
    <div style={{backgroundColor:'#e90003',display:'flex',flexDirection:'column',alignItems:'center',width:'755px',maxHeight:'2600px'}}>
      <Header/>
      <Bookmark/>
      <div style={{display:'flex',justifyContent:'center', width:'100%', marginTop:'30px',flexDirection:'column',marginRight:'10px'}}>
      <SpaceLine  size='30px' color='white' borderColor='black'/>
      </div>
</div>
  );
}

export default App;
