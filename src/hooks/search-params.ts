import {useLocation} from "react-router-dom";

const useSearchParams = (props) => {
    const location = useLocation();
    const parma = new URLSearchParams(location.search).get(props)
    return parma
}

export default useSearchParams
