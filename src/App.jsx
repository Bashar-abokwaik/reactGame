import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge ttitle="Easy" targetTime={1} />
        <TimerChallenge ttitle="Not easy" targetTime={5} />
        <TimerChallenge ttitle="Getting tough" targetTime={10} />
        <TimerChallenge ttitle="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
