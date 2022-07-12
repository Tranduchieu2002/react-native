import React, { RefObject } from 'react'
import { TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { color } from '../../theme'
import { data } from './CarouselSlider'

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
          paddingVertical: vs(8),
          paddingTop: 5,
          marginTop: vs(8),
          marginBottom: vs(8)
        }}
        renderDots={(activeIndex) =>
          entries.map((entrie: data, index: number) => (
            <TouchableOpacity
              style={{
                width: s(4),
                height: s(4),
                borderRadius: 99,
                marginHorizontal: vs(6),
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
