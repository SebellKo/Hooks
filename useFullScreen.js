export const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullScreen();
            if (callback && typeof callback === "function") {
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullScreen();
        if (callback && typeof callback === "function") {
            callback(false);
        }
    }
    return { element, triggerFull, exitFull };
}

// const App = () => {
//     const onFullS = (isFull) => {
//         console.log(isFull ? "We are full" : "We are small")
//     }
//     const { element, triggerFull, exitFull } = useFullscreen(onFullS);
//     return (
//         <div className="App">
//             <div ref={element}>
//                 <img></img>
//                 <button onClick={exitFull}>Exit fullscreen</button>
//             </div>
//             <button onClick={triggerFull}>Make fullscreen</button>
//         </div>
//     );
// };