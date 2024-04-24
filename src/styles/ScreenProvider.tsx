import { createContext, ReactNode, useEffect, useState } from "react";
import {useMediaQuery, useTheme} from "@mui/material";

type ScreenSizeType = {
    SMALL: boolean,
    MEDIUM: boolean,
    LARGE: boolean,
    EXTRA_LARGE: boolean
}

const FONT_SIZE_CONFIG ={
    small: 8,
    base: 12,
    large:16,
    extraLarge: 18
}

const initials = {
    FONT_SIZE: `${FONT_SIZE_CONFIG.base}px`,
    SCREEN_SIZE: {
        SMALL: false,
        MEDIUM: true,
        LARGE: false,
        EXTRA_LARGE: false
    }
}

const ScreenContentContext = createContext({
    FONT_SIZE: initials.FONT_SIZE,
    SCREEN_SIZE: initials.SCREEN_SIZE
})

type ScreenProviderProps = {
    children: ReactNode | undefined
}

export const ScreenProvider = (props: ScreenProviderProps) => {
    const {children} = props;
    const [fontSize, setFontSize] = useState<string>(initials.FONT_SIZE);
    const [screenSize, setScreenSize] = useState<ScreenSizeType>(initials.SCREEN_SIZE);
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.between("xs", 'md'));
    const matchesMD = useMediaQuery(theme.breakpoints.between("md", 'lg'));
    const matchesLG = useMediaQuery(theme.breakpoints.between("lg", 'xl'));
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));


    useEffect(() => {
        if(matchesXL){
            setScreenSize({
                SMALL: false,
                MEDIUM: false,
                LARGE:false,
                EXTRA_LARGE:true
            });
            setFontSize(document.documentElement.style.fontSize = `${FONT_SIZE_CONFIG.extraLarge}px`);
        }else if(matchesLG){
            setScreenSize({
                SMALL: false,
                MEDIUM: false,
                LARGE:true,
                EXTRA_LARGE:false
            });
            setFontSize(document.documentElement.style.fontSize = `${FONT_SIZE_CONFIG.large}px`);
        }else if(matchesMD){
            setScreenSize({
                SMALL: false,
                MEDIUM: true,
                LARGE:false,
                EXTRA_LARGE:false
            });
            setFontSize(document.documentElement.style.fontSize = `${FONT_SIZE_CONFIG.base}px`);
        }else if(matchesSM){
            setScreenSize({
                SMALL: true,
                MEDIUM: false,
                LARGE:false,
                EXTRA_LARGE:false
            });
            setFontSize(document.documentElement.style.fontSize = `${FONT_SIZE_CONFIG.small}px`);
        }
    },[matchesXL, matchesLG, matchesMD, matchesSM]);

    return <ScreenContentContext.Provider value={{FONT_SIZE: fontSize, SCREEN_SIZE:screenSize}}>
        {children}
    </ScreenContentContext.Provider>
}

export default ScreenContentContext;

