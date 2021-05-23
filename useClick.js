export const useClick = (onClick) => {
    if (typeof conClick !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        } // return 을 통해 반환되는 함수는 componentWillunmount시에 실행되는 함수이다
    }, []);
    return element;
}