import * as React from "react"
import {
  ActivityIndicator, FlatList,
  SectionList, StyleSheet, View
} from "react-native"
import { color, spacing } from "../../theme"
import { fontFamily } from "../../theme/fonts"
import ItemHorizontal from "./itemHorizontal"
import SectionsHeader from "./news/HeaderSection"
import SectionItem from "./news/SectionItems"
import { SectionListNewsProps } from "./sections.props"

const SeparatorCpn = (props) => {
  if (props.leadingItem)
    return (<View style={styles.separator}></View>)
  return null
}

const SectionListNews: React.FC<SectionListNewsProps> = ({ styleSections, horizontal, itemHorizontal, data, ...props }) => {
  const style = [styles.container, styleSections]

  const renderHeaderSections = React.useCallback(({ section: { title, data } }) => {
    return (<View style={styles.sectionHeaderWrap}>
      <SectionsHeader title={title} />
      {itemHorizontal ? (
        <FlatList
          horizontal
          contentContainerStyle={{ marginHorizontal: 24 / -4, }}
          data={data}
          renderItem={({ item }) => <ItemHorizontal item={item} />}
          showsHorizontalScrollIndicator={false} 
        />
      ) : null}
    </View>)
  }, [])

  const renderItem = React.useCallback((props) => {
    if (itemHorizontal)
      return null
    return <SectionItem item={props.item} />
  }, [])

  return (

    <SectionList
      sections={data}
      stickyHeaderHiddenOnScroll={false}
      horizontal={horizontal}
      stickySectionHeadersEnabled
      SectionSeparatorComponent={SeparatorCpn}
      style={[style, ]}
     /*  onScroll={(event) => {
        const currentYPosition = event.nativeEvent.contentOffset.y
        const oldPosition = scrollYRef.current

        if (oldPosition < currentYPosition) {
          // we scrolled down
          console.log('down')
        } else {
          // we scrolled up
          console.log('up')

        }
        // save the current position for the next onScroll event
        scrollYRef.current = currentYPosition
      }} */
      scrollEventThrottle={16}
      renderSectionHeader={renderHeaderSections}
      ListEmptyComponent={() => <ActivityIndicator />}
      renderItem={renderItem}
      snapToEnd
      {...props}
    ></SectionList>
  )
}

export default SectionListNews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionHeader: {
    /* 14px/bd1 semibold */
    fontFamily: fontFamily.medium,
    fontWeight: "600",
    backgroundColor: "#fff",
    zIndex: 10,
    color: color.palette.black,
    fontSize: 14,
    lineHeight: 18,
    paddingBottom: spacing[3],
    paddingTop: spacing[4] + 4, // 20
  },
  sectionHeaderWrap: {
    paddingBottom: spacing[3],
    paddingTop: spacing[4] + 4,
    backgroundColor: color.palette.white
  },
  separator: {
    height: 1,
    flex: 1,
    width: "100%",
    backgroundColor: "#DEDEDE"
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  }
})
