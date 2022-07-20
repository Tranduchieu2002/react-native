import React, { RefObject } from 'react'
import { TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { data } from '../../screens/live/tabViews/allScreen'
import { color } from '../../theme'

interface PaginationProps {
  entriesLength: number
  activeImageIndex: number
  entries: data[]
  handleSlideChange: Function
}

export const CarouselPagination = React.forwardRef<RefObject<Carousel<data>>, PaginationProps>(
  (props, ref) => {
    const { entriesLength, activeImageIndex, entries, handleSlideChange } = props
    return (
      <Pagination
        dotsLength={entriesLength}
        activeDotIndex={activeImageIndex}
        containerStyle={{
          position: 'absolute', 
          top: "88%",
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        renderDots={(activeIndex) =>
          entries.map((entrie: data, index: number) => (
            <TouchableOpacity
              style={{
                width: s(13.5),
                height: s(2),
                borderRadius: 99,
                marginHorizontal: s(4),
                backgroundColor:
                  activeIndex === index ? color.palette.white : color.palette.lightGrey,
              }}
              key={index}
              onPress={() => {
                handleSlideChange(index)
              }}
            ></TouchableOpacity>
          ))
        }
      />
    )
  },
)
