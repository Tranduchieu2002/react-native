import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ms, ScaledSheet } from 'react-native-size-matters'
import { color } from '../../theme'
import { fontFamily } from '../../theme/fonts'
import BackgroundImageItem from '../backgroundImage/BackgroundImage'
import { SectionItemProps } from './news/SectionItems'

const ItemHorizontal: FC<SectionItemProps> = ({ item, children }) => {
    return (
        <View style={styles.item}>
            <BackgroundImageItem image={item.image} style={styles.imageItem} />
            <View style={[{
                flex: 1,
                alignItems: "baseline"
            }]}>
                <Text style={{
                    fontFamily: fontFamily.medium,
                    color: color.palette.black
                }}
                    numberOfLines={2}
                >
                    {
                        item.titleContent
                    }
                </Text>
                {children}
            </View>
        </View>
    )
}

export default ItemHorizontal

const styles = ScaledSheet.create({
    item: {
        width: "141@s",
        marginHorizontal: 24 / 4
    },
    imageItem: {
        width: "100%",
        height: "95@s",
        resizeMode: "cover"
    }
})