import { useGame } from './hooks/useGame';
import {
  Link,
  Timer,
  Parag,
  Canvas,
  Result,
  Layout,
  Footer,
  Counter,
  SpanBold,
  Container,
  MiddleSide,
  GlobalStyles,
  LeftSide,
  RightSide,
  PlayerOneBar,
  PlayerTwoBar,
  PlayerOneInner,
  PlayerTwoInner,
  TopBarContainer,
  StatusContainer,
  StartOver,
  Overlay,
  Title,
} from './styles';
import 'twin.macro';

function App() {
  const { canvasRef, playerOneHealth, playerTwoHealth, isStarted, timer, result, handleStartButton } = useGame();

  const renderHealthBar = () => (
    <TopBarContainer>
      <StatusContainer>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white font-bold text-sm">PLAYER 1</span>
          <PlayerOneBar>
            <PlayerOneInner health={playerOneHealth} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm drop-shadow-lg">
                {playerOneHealth}%
              </span>
            </div>
          </PlayerOneBar>
        </div>
        <Timer>
          <Counter>{timer}</Counter>
        </Timer>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white font-bold text-sm">PLAYER 2</span>
          <PlayerTwoBar>
            <PlayerTwoInner health={playerTwoHealth} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm drop-shadow-lg">
                {playerTwoHealth}%
              </span>
            </div>
          </PlayerTwoBar>
        </div>
      </StatusContainer>
      {result && (
        <Result>
          {result}
        </Result>
      )}
    </TopBarContainer>
  );

  const renderStartOverlay = () => (
    <Overlay isStarted={isStarted}>
      <StartOver 
        onClick={!isStarted ? handleStartButton : null}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!isStarted) handleStartButton();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Start the game"
      >
        PLAY
      </StartOver>
    </Overlay>
  );

  return (
    <Layout>
      <GlobalStyles />
      <div className="absolute top-0 left-0 right-0 z-30 pt-4 md:pt-8">
        <Title className="text-center text-2xl md:text-4xl">
          FINAL FIGHTER
        </Title>
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 pt-20">
        <LeftSide>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-xl">
          <h3 className="text-white font-bold text-lg mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CONTROLS
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Parag><SpanBold>Player 1:</SpanBold></Parag>
              <div className="space-y-1">
                <Parag>• <span className="text-blue-400">A/D</span> - Move</Parag>
                <Parag>• <span className="text-blue-400">W</span> - Jump</Parag>
                <Parag>• <span className="text-red-400">Space</span> - Attack</Parag>
              </div>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <div className="space-y-1">
                <Parag><SpanBold>Player 2:</SpanBold></Parag>
                <div className="space-y-1">
                  <Parag>• <span className="text-green-400">←/→</span> - Move</Parag>
                  <Parag>• <span className="text-green-400">↑</span> - Jump</Parag>
                  <Parag>• <span className="text-orange-400">Enter</span> - Attack</Parag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LeftSide>
      <MiddleSide>
        <Container>
          {renderHealthBar()}
          {renderStartOverlay()}
          <Canvas 
            ref={canvasRef} 
            aria-label="Fighting game arena"
            role="img"
          />
        </Container>
      </MiddleSide>
      <RightSide>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-xl">
          <h3 className="text-white font-bold text-lg mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            GAME INFO
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <Parag className="text-gray-300 text-sm">
                First to reduce opponent's health to 0 wins!
              </Parag>
            </div>
            <div className="space-y-2">
              <Parag><SpanBold>Timer:</SpanBold> {timer}s</Parag>
              <Parag><SpanBold>Status:</SpanBold> {isStarted ? 'Fighting!' : 'Ready to Start'}</Parag>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <Parag className="text-xs text-gray-400 text-center">
                Press PLAY to start the battle!
              </Parag>
            </div>
          </div>
        </div>
      </RightSide>
      </div>
    </Layout>
  );
}

export default App;
