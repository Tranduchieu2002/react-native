import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { color, spacing } from '../../../theme'
import { fontFamily } from '../../../theme/fonts'
import { Text } from '../../text/text'

interface sectionHeaderProps {
    title?: string,
    children?: React.ReactNode
}

const SectionsHeader: React.FC<sectionHeaderProps> = ({ title, children }) => {
    return (
        <>
            <Text text={title} style={styles.sectionHeader} >
                {children}
            </Text>
        </>
    )
}

const styles = ScaledSheet.create({
    sectionHeader: {
        /* 14px/bd1 semibold */
        fontFamily: fontFamily.semiBold,
        fontWeight: "bold",
        backgroundColor: "#fff",
        zIndex: 10,
        color: color.palette.black,
        fontSize: "14@ms",
        lineHeight: "18@ms",
        // 20
    },
})
export default SectionsHeader