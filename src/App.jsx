import './App.css';
import Accordian from './component/Accordian';

function App() {
  const ACCORDIONS = [{
    q: 'Can I use FrontendPro to prepare for a frontend job interview?',
    a: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.",
    c: 'orange'
  },
  {
    q: 'Do I need to have experience in frontend dev to use FrontendPro?',
    a: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone. FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.",
    c: 'indigo'
  },
  {
    q: 'How often are new challenges added to FrontendPro?',
    a: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.",
    c: 'violet'
  },
  {
    q: 'What kind of frontend challenges can I expect to find on FrontendPro?',
    a: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.",
    c: 'pink'
  },
  {
    q: 'Can I use libraries/frameworks on these projects?',
    a: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.",
    c: 'green'
  }

  ]
  return (
    <div className="App">
      <Accordian accords={ACCORDIONS} />
    </div>
  );
}

export default App;
