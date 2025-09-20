import tw, { css, styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    ${tw`m-0 p-0 box-sizing[border-box] border[0 solid] font-sans`};
  }
  
  body {
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    color: #e2e8f0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    overflow-x: hidden;
    position: relative;
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
    animation: backgroundShift 20s ease-in-out infinite;
    z-index: -1;
  }
  
  @keyframes backgroundShift {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
`;
export const Layout = tw.div`width[100vw] height[100vh] flex flex-col justify-center items-center relative overflow-hidden min-h-screen`;
export const LeftSide = tw.div`px-4 md:px-8 flex-1 flex flex-col items-end space-y-4 max-w-sm`;
export const MiddleSide = tw.div`flex flex-col items-center z-10 flex-1 max-w-4xl`;
export const RightSide = tw.div`px-4 md:px-8 flex-1 max-w-sm`;
export const Parag = tw.p`text-gray-200 text-sm font-medium leading-relaxed`;
export const Title = tw.div`text-white font-size[2.5rem] font-bold mb-7 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`;
export const Footer = styled.div(({ smaller }) => [tw`text-gray-400 font-size[.9rem] font-light mb-2`, smaller && tw`font-size[.8rem]`]);
export const Link = tw.a`text-decoration[none] text-blue-400 hover:text-blue-300 transition-colors`;
export const SpanBold = tw.span`font-bold text-white`;
export const Container = tw.div`relative flex flex-col items-center border-width[2px] border-gray-600 rounded-2xl box-shadow[0 25px 50px rgba(0,0,0,0.5)] mb-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm w-full max-w-4xl mx-auto`;
export const TopBarContainer = tw.div`absolute flex flex-col items-center w-full z-20`;
export const StatusContainer = tw.div`w-full flex px-6 py-6 justify-between items-center mb-6`;
export const Canvas = tw.canvas`block rounded-lg`;

export const PlayerOneBar = tw.div`bg-gradient-to-r from-red-600 to-red-500 w-full h-16 rounded-l-2xl relative overflow-hidden border-width[3px] border-right-width[0] border-gray-300 box-shadow[0 4px 15px rgba(239, 68, 68, 0.3)]`;
export const PlayerOneInner = styled.div(({ health }) => [
  tw`absolute h-full right-0 transition[all 0.4s ease-out] box-shadow[0 0 20px rgba(34, 197, 94, 0.5)]`,
  css`
    width: ${health}%;
    background: ${health > 60 ? 'linear-gradient(to right, #4ade80, #22c55e)' : 
                 health > 30 ? 'linear-gradient(to right, #fbbf24, #f59e0b)' : 
                 'linear-gradient(to right, #ef4444, #dc2626)'};
    animation: ${health < 30 ? 'pulse 1s infinite' : 'none'};
  `,
]);

export const PlayerTwoBar = tw.div`bg-gradient-to-r from-red-600 to-red-500 w-full h-16 rounded-r-2xl relative overflow-hidden border-width[3px] border-left-width[0] border-gray-300 box-shadow[0 4px 15px rgba(239, 68, 68, 0.3)]`;
export const PlayerTwoInner = styled.div(({ health }) => [
  tw`absolute h-full transition[all 0.4s ease-out] box-shadow[0 0 20px rgba(34, 197, 94, 0.5)]`,
  css`
    width: ${health}%;
    background: ${health > 60 ? 'linear-gradient(to right, #4ade80, #22c55e)' : 
                 health > 30 ? 'linear-gradient(to right, #fbbf24, #f59e0b)' : 
                 'linear-gradient(to right, #ef4444, #dc2626)'};
    animation: ${health < 30 ? 'pulse 1s infinite' : 'none'};
  `,
]);

export const Timer = tw.div`flex justify-center items-center rounded-2xl w-24 h-24 flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 border-width[3px] border-gray-600 box-shadow[0 8px 25px rgba(0,0,0,0.3)]`;
export const Counter = tw.div`flex justify-center items-center bg-gradient-to-br from-yellow-400 to-yellow-500 w-20 h-20 rounded-full font-size[2.5rem] font-bold text-gray-900 box-shadow[0 4px 15px rgba(251, 191, 36, 0.4)]`;

export const Result = tw.div`font-size[4.5rem] font-bold text-white text-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse`;
export const Overlay = styled.div(({ isStarted }) => [
  tw`absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 background-color[rgba(0,0,0,0.8)] transition[all 0.5s ease-out] backdrop-blur-sm`,
  isStarted && tw`opacity-0 pointer-events-none`,
]);
export const StartOver = styled.div`  
  ${tw`bg-gradient-to-br from-gray-800 to-gray-900 border-width[3px] border-gray-500 width[450px] flex justify-center items-center p-8 font-bold font-size[2.5rem] text-white rounded-3xl cursor-pointer box-shadow[0 20px 40px rgba(0,0,0,0.4)] transition[all 0.3s ease-in-out] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:border-blue-400 relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400`}
  :hover {
    transform: scale(1.08) translateY(-2px);
  }
  :active {
    transform: scale(1.02) translateY(0px);
  }
  :focus {
    transform: scale(1.05) translateY(-1px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  :hover::before {
    left: 100%;
  }
`;
