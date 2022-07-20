import React, { useMemo, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { CarouselSlider, Text } from '../../../components'
import ListNews from '../../../components/ListNews/ListNews'
import { color, spacing } from '../../../theme'
export type data = {
    id: string
    image: string
    name: string
    jobTitle: string
    email: string
}
const AllScreen = () => {
    const [isRefeshing, setIsRefeshing] = useState(false)

    const DATA: data[] = useMemo(
        () =>
            [...Array(4)].map(() => {
                return {
                    id: String(Math.random() * 999),
                    /* https://randomuser.me/api/portraits/women/11.jpg */
                    image: require("../../../../assets/images/app-notFoundImage.png"),
                    name: "Tran Hieu",
                    jobTitle:
                        "Tổng thư ký Liên hợp quốc đánh giá cao nỗ lực của Việt Nam trong chống biến đổi khí hậu",
                    email: "Hieu@gmail.cómn",
                }
            }),
        [],
    )

    const news = [
        {
            id: 2,
            title: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            content: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            bannerImageUrl: "https://s3-alpha-sig.figma.com/img/f2e8/8112/1773231672472d39c79c78791b279214?Expires=1659312000&Signature=WUKdBxWiejx34ar0adKPOY~i8ot3a2OoQXRx1xAziGjh2UvzJ37olwOXXkxgNTKo99RWOdBx4iU~Z2grMwV5H0JiQ821SpwkN~pDVxNQ2j~Dvgy9XXjoZY9dNwdd7BMlU4yyiDy33MsMJueNvCm9QWMYZbArjS4ykEMN~9R39uXHmfl6Lg7oNichdKYKOK00IYV14DAdldVvSXwQ3IrIqoVI5gz21SJaio-p2gcd8kYqauEDObznHT9LICpsQvZKglQ9Ahe0~jTZ4tfjKWKTkP4OyqgnmvBf4VhCUOGQ4Ce4r877KXxM-cqebJ6Is30cWbZsqne6Vg0N0qvPNOrLIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdAt: {
                milis: 1658131751576,
                seconds: 1658131751
            },
            label: {
                title: "tin tức - sự kiện"
            }
        },
        {
            id: 3,
            title: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            content: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            bannerImageUrl: "https://s3-alpha-sig.figma.com/img/f2e8/8112/1773231672472d39c79c78791b279214?Expires=1659312000&Signature=WUKdBxWiejx34ar0adKPOY~i8ot3a2OoQXRx1xAziGjh2UvzJ37olwOXXkxgNTKo99RWOdBx4iU~Z2grMwV5H0JiQ821SpwkN~pDVxNQ2j~Dvgy9XXjoZY9dNwdd7BMlU4yyiDy33MsMJueNvCm9QWMYZbArjS4ykEMN~9R39uXHmfl6Lg7oNichdKYKOK00IYV14DAdldVvSXwQ3IrIqoVI5gz21SJaio-p2gcd8kYqauEDObznHT9LICpsQvZKglQ9Ahe0~jTZ4tfjKWKTkP4OyqgnmvBf4VhCUOGQ4Ce4r877KXxM-cqebJ6Is30cWbZsqne6Vg0N0qvPNOrLIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdAt: {
                milis: 1658131751576,
                seconds: 1658131751
            },
            label: {
                title: "tin tức - sự kiện"
            }
        },
        {
            id: 4,
            title: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            content: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            bannerImageUrl: "https://s3-alpha-sig.figma.com/img/f2e8/8112/1773231672472d39c79c78791b279214?Expires=1659312000&Signature=WUKdBxWiejx34ar0adKPOY~i8ot3a2OoQXRx1xAziGjh2UvzJ37olwOXXkxgNTKo99RWOdBx4iU~Z2grMwV5H0JiQ821SpwkN~pDVxNQ2j~Dvgy9XXjoZY9dNwdd7BMlU4yyiDy33MsMJueNvCm9QWMYZbArjS4ykEMN~9R39uXHmfl6Lg7oNichdKYKOK00IYV14DAdldVvSXwQ3IrIqoVI5gz21SJaio-p2gcd8kYqauEDObznHT9LICpsQvZKglQ9Ahe0~jTZ4tfjKWKTkP4OyqgnmvBf4VhCUOGQ4Ce4r877KXxM-cqebJ6Is30cWbZsqne6Vg0N0qvPNOrLIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdAt: {
                milis: 1658131751576,
                seconds: 1658131751
            },
            label: {
                title: "tin tức - sự kiện"
            }
        },
        {
            id: 5,
            title: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            content: "Những dấu ấn nổi bật của công tác lập pháp trong 6 tháng đầu năm",
            bannerImageUrl: "https://s3-alpha-sig.figma.com/img/f2e8/8112/1773231672472d39c79c78791b279214?Expires=1659312000&Signature=WUKdBxWiejx34ar0adKPOY~i8ot3a2OoQXRx1xAziGjh2UvzJ37olwOXXkxgNTKo99RWOdBx4iU~Z2grMwV5H0JiQ821SpwkN~pDVxNQ2j~Dvgy9XXjoZY9dNwdd7BMlU4yyiDy33MsMJueNvCm9QWMYZbArjS4ykEMN~9R39uXHmfl6Lg7oNichdKYKOK00IYV14DAdldVvSXwQ3IrIqoVI5gz21SJaio-p2gcd8kYqauEDObznHT9LICpsQvZKglQ9Ahe0~jTZ4tfjKWKTkP4OyqgnmvBf4VhCUOGQ4Ce4r877KXxM-cqebJ6Is30cWbZsqne6Vg0N0qvPNOrLIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            createdAt: {
                milis: 1658131751576,
                seconds: 1658131751
            },
            label: {
                title: "tin tức - sự kiện"
            }
        }
    ]
    return (
        <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={isRefeshing} onRefresh={() => {
        }} />}
        >
            <View style={{ width: '100%' }}>
                <View style={{ marginTop: 12, marginBottom: 12 }}>
                    <Text text="Tin mới" style={{ fontSize: 18, lineHeight: 22, color: color.palette.black, fontWeight: "800" }} />
                </View>
                <CarouselSlider type="images" data={DATA} />
            </View>
            <View style={{ marginTop: spacing[6] }}>
                <Text text="Tin nổi bật" style={{ fontSize: 18, lineHeight: 22, color: color.palette.black, fontWeight: "800" }} />
            </View>
            <ListNews news={news} />
            <View style={{ marginTop: spacing[6] ,  marginBottom: 12 }}>
                <Text text="Tin nổi bật" style={{ fontSize: 18, lineHeight: 22, color: color.palette.black, fontWeight: "800" }} />
            </View>
            <ListNews horizontal={true} news={news} />
        </ScrollView>
    )
}

export default AllScreen

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        paddingLeft: "15@ms",
        paddingRight: "15@ms",
    }
})