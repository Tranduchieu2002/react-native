import React, { useMemo } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { CarouselSlider } from '../../../components'
import SectionListNews from '../../../components/sections/sections'
import { color } from '../../../theme'
const ImageDemo = require("../../../../assets/images/app-notFoundImage.png")

const TabAllVideoScreen = () => {
    const data = useMemo(() => {
        return [
            {
                title: "Tin mới nhất",
                data: [{
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "GD & ĐT",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "GD & ĐT",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "KT & XH",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "Chính trị",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "QP & AN",
                    image: ImageDemo
                }],
            },
            {
                title: "Tin Xem Nhiều",
                data: [{
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "GD & ĐT",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "GD & ĐT",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "KT & XH",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "Chính trị",
                    image: ImageDemo
                }, {
                    titleContent: "PM demands TikTok take down graphic video",
                    tag: "QP & AN",
                    image: ImageDemo
                }],
            },
        ]
    }, [])
    return (<>
        <CarouselSlider type="images" />
        <View style={styles.contentContainer}>
            <SectionListNews data={data}
                horizontal={false}
                styleSections={{
                    paddingLeft: 16,
                    paddingRight: 16,
                }}
                itemHorizontal={true}
            />
        </View>
    </>
    )
}

export default TabAllVideoScreen

const styles = ScaledSheet.create({
    contentContainer: {
        flex: 1,
        borderTopLeftRadius: "20@ms",
        borderTopRightRadius: "20@ms",
        backgroundColor: color.palette.white
    },
})