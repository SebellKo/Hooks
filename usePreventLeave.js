export const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener) // beforeunload 이벤트 사용시 사용자가 페이지를 떠날 때 정말로 떠날 것인지 묻는 확인 대화 상자를 표시, 명세에 따라, 확인 대화 상자를  표히사려면 이벤트의 preventDefault()를 호출해야 한다.
    const disablePrevent = () => window.removeEventListener("beforeunload", listener)
    return { enablePrevent, disablePrevent };
};