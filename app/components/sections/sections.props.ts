import { ViewStyle } from "react-native"

export interface SectionListNewsProps {
    horizontal?: boolean
    itemHorizontal?: boolean
    /**
     * @types {string} to be used to arrange the section items
     *
     * */
    styleSections?: ViewStyle
    /**
     *
     * */
    data: any
  
    children?: React.ReactNode
  }
  