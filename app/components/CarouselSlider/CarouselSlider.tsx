import React, { FC, useCallback, useMemo, useRef, useState } from "react"

import { Dimensions, View } from "react-native"
import { ms, s, ScaledSheet } from "react-native-size-matters"
import Carousel from "react-native-snap-carousel"
import { PlaySvg } from "../../../assets/svgs"
import { data } from "../../screens/live/tabViews/allScreen"
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
  type: "images" | "video",
  data: data[]
}


export const CarouselSlider: FC<CarouselSliderProps> = ({ type, data }: CarouselSliderProps) => {
  const { width } = Dimensions.get("window")
  let [state, setState] = useState<initial>(initialState)

  const height = 250
  let carouselRef = useRef<any>(null)

  const handleSlideChange = useCallback((indexSlide: number): void => {
    carouselRef.current._snapToItem(carouselRef.current._getPositionIndex(indexSlide))
  }, [])


  const renderItem: any = useCallback(({ item }) => {
    if (type === "images") return <CarouselSlide item={item} />
    return <CarouselSlideVideo />
  }, [])
  return (
    <>
      <View style={styles.swiperContainer}>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          style={styles.swiper}
          data={data}
          renderItem={renderItem}
          sliderHeight={s(height)}
          itemHeight={s(width * 4 / 3)}
          sliderWidth={s(width)}
          itemWidth={(width - 30)}
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
        entriesLength={data.length}
        entries={data}
        handleSlideChange={handleSlideChange} />
    </>
  )
}

const styles = ScaledSheet.create({
  swiperContainer: {
    width: '100%',
    height: "250@s",
    justifyContent: 'center',
    alignItems: 'center',
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
