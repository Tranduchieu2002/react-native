import React, { FC, useCallback, useMemo, useRef, useState } from "react"

import { Dimensions, View } from "react-native"
import { ms, s, ScaledSheet } from "react-native-size-matters"
import Carousel from "react-native-snap-carousel"
import { PlaySvg } from "../../../assets/svgs"
import { CarouselPagination } from "./CarouselPagination"
import CarouselSlide from "./CarouselSlide"
import CarouselSlideVideo from "./CarouselSlideVideo"

const initialState = {
  activeImageIndex: 0,
}

interface initial {
  activeImageIndex: number
}

interface CarouselSliderProps {
  type: "images" | "video"
}

export type data = {
  id: string
  image: string
  name: string
  jobTitle: string
  email: string
}
export const CarouselSlider: FC<CarouselSliderProps> = ({ type }: CarouselSliderProps) => {
  const { width } = Dimensions.get("window")
  let [state, setState] = useState<initial>(initialState)
  /* const activeImage = useMemo(
    () => photos[photos.activeImageIndex],
    [photos.activeImageIndex, photos],
  ) */
  const height = 200
  let carouselRef = useRef<any>(null)

  const handleSlideChange = useCallback((indexSlide: number): void => {
    carouselRef.current._snapToItem(carouselRef.current._getPositionIndex(indexSlide))
  }, [])

  const DATA: data[] = useMemo(
    () =>
      [...Array(4)].map(() => {
        return {
          id: String(Math.random() * 999),
          /* https://randomuser.me/api/portraits/women/11.jpg */
          image: require("../../../assets/images/app-notFoundImage.png"),
          name: "Tran Hieu",
          jobTitle:
            "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          email: "Hieu@gmail.cómn",
        }
      }),
    [],
  )
  const renderItem = ({ item }) => {
    if (type === "images") return <CarouselSlide item={item} />
    return <CarouselSlideVideo />
  }
  return (
    <>
      <View style={styles.swiperContainer}>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          style={styles.swiper}
          data={DATA}
          renderItem={renderItem}
          sliderHeight={s(height)}
          itemHeight={s(height)}
          sliderWidth={width}
          itemWidth={width}
          autoplay
          loop={true}
          onSnapToItem={(index) =>
            setState({
              activeImageIndex: index,
            })
          }
        ></Carousel>
        {
          type === "video" && <PlaySvg style={styles.buttonFakePlay} height={ms(46)} />
        }
      </View>
      <CarouselPagination
        activeImageIndex={state.activeImageIndex}
        entriesLength={DATA.length}
        entries={DATA}
        handleSlideChange={handleSlideChange} />
    </>
  )
}

const styles = ScaledSheet.create({
  swiperContainer: {
    width: Dimensions.get("window").width,
    height: "200@s"
  },
  swiper: {
    position: "relative",
  },
  buttonFakePlay: {
    position: "absolute",
    left: "50%",
    top: "50%",
    translateX: "-50%",
    zIndex: 100,
    aspectRatio: 1
  }
})
