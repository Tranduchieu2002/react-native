import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { ms, ScaledSheet } from 'react-native-size-matters'

import { BookmarkSvg, ExportSvg } from '../../../assets/svgs'
import { AppScreenNames, NavigatorParamList } from '../../navigators/types'
import { color } from '../../theme'
import { fontFamily } from '../../theme/fonts'
import { timeFormatter } from '../../utils/timeFormat'
import { Text } from '../text/text'

interface newItemProps {
    item: any
    horizontal?: boolean
    children?: React.ReactNode
}

const widthHorizontal = 200
const heightHorizontal = widthHorizontal * 5 / 8 // scale ratio 10 / 18

const ListNewItem: FC<newItemProps> = ({ item, horizontal, children }: newItemProps) => {

    const { navigate } = useNavigation<StackNavigationProp<NavigatorParamList>>()

    const timeFormatted = timeFormatter(item.createdAt.milis)
    const onClickNew = () => {
        console.log("clicked")
        navigate(AppScreenNames.detailNew, {
            newId: item.id,
        })
    }
    return (
        <View style={[styles.item, horizontal && styles.horizontalItem]}>
            <Image
                source={{ uri: item.bannerImageUrl }}
                style={[styles.imageItem, horizontal && styles.horizontalImage]} />
            <View style={[{
                flexGrow: 1,
                width: "50%",
                justifyContent: "space-between",
            }, horizontal && {
                width: "100%",
            }]}>
                <View>
                    {item.label && !horizontal && <Text text={item.label.title} style={styles.textLabel}>
                    </Text>
                    }
                    <Text style={{
                        fontFamily: fontFamily.medium,
                        color: color.palette.black,
                        fontSize: ms(12),
                        fontWeight: "600",
                    }}
                        onPress={onClickNew}
                        textBreakStrategy="simple"
                        text={item.title}
                        numberOfLines={3}
                    >
                    </Text>
                </View>
                {!horizontal && (
                    <View style={styles.bottomItem}>
                        <Text style={styles.textTime} text={timeFormatted}></Text>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <ExportSvg style={[styles.iconSVG]} />
                            <BookmarkSvg style={[styles.iconSVG, { marginLeft: 19 }]} />
                        </View>

                    </View>
                )}
                {children}
            </View>
        </View>
    )
}

export default ListNewItem

const styles = ScaledSheet.create({
    item: {
        width: "100%",
        flexDirection: "row",
        marginVertical: "16@ms"
    },
    horizontalItem: {
        flexDirection: "column",
        marginVertical: 0,
        width: `${widthHorizontal}@ms`,
        marginHorizontal: "8@ms"
    },
    horizontalImage: {
        height: `${heightHorizontal}@ms`,
        width: "100%",
    },
    imageItem: {
        width: "42%",
        height: "85@ms",
        marginRight: 12,
        resizeMode: "cover",
        borderRadius: "5@ms",
    },
    imageFull: {
        width: "100%",
        height: `${heightHorizontal}@ms`,
    },
    textLabel: {
        color: color.palette.redNature,
        fontSize: "9@ms",
        fontWeight: "400",
        lineHeight: "13@ms",
        textTransform: "uppercase"
    },
    bottomItem: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    textTime: {
        color: color.palette.lightGrey,
        fontSize: "9@ms",
        fontWeight: "400",
    },
    iconSVG: {
        width: "24@ms",
        height: "24@ms",
    }
})