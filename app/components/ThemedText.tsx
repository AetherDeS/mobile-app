import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/app/hooks/useThemeColor';

import {darkTheme} from "../../colors/colors";
const { primary, secondary, accentLight, accentContrast, white } = darkTheme;

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'appTitle' | 'newsCardDate' | 'newsCardTitle' | 'newsCardDefinition' | 'newsCardLink';
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
            style={[
                { color }, 
                type === 'appTitle' ? styles.appTitle : undefined,
                // -- Типы для страницы с новостями -- 
                type === 'newsCardDate' ? styles.newsCardDate : undefined,
                type === 'newsCardTitle' ? styles.newsCardTitle : undefined,
                type === 'newsCardDefinition' ? styles.newsCardDefinition : undefined,
                type === 'newsCardLink' ? styles.newsCardLink : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'Comfortaa',
        fontSize: 16,
        lineHeight: 4,
        color: '#f1FFF1F'
    },
    title: {
        fontFamily: 'Comfortaa',
        fontSize: 20,
        fontWeight: 'regular',
        lineHeight: 24,
        color: '#f1FFF1F',
        textAlign: 'center',

        marginBottom: 10
    },
    appTitle: {
        fontFamily: 'Comfortaa',
        fontSize: 24,
        color: "#fff",
        
    },
    newsCardDate: {
        fontFamily: 'Comfortaa',
        fontSize: 14,
        lineHeight: 16,
        color: accentContrast,

        textShadowColor: "rgba(36, 36, 36, 0.67)",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    newsCardTitle: {
        fontFamily: 'Comfortaa',
        fontSize: 24,
        lineHeight: 27,
        color: white,

    },
    newsCardDefinition: {
        fontFamily: 'Comfortaa',
        fontSize: 10,
        color: white,
    },
    newsCardLink: {
        fontFamily: 'Comfortaa',
        fontSize: 18,
        color: accentLight,

        textShadowColor: "rgba(36, 36, 36, 0.67)",
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 4,
    },
});
