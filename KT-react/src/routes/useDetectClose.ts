import { useEffect } from "react";
import { useRef, useState } from "react";

    
    const useDetectClose = (initialState: any) => {
        const [isOpen, setIsOpen] = useState(initialState);
        const ref = useRef(null);
        
        const removeHandler = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() =>  {
        const onClick = (e:React.ChangeEvent<HTMLInputElement>) => {
            if (ref.current !== null && !ref.current){
                setIsOpen(!isOpen)
            }
        };
    },[isOpen])

    
    }