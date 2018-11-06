import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false


  
  
    import  { faChevronDown as fortawesomefreesolidsvgicons_faChevronDown } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronDown)
  
    import  { faChevronUp as fortawesomefreesolidsvgicons_faChevronUp } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronUp)
  
    import  { faAngleRight as fortawesomefreesolidsvgicons_faAngleRight } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faAngleRight)
  
    import  { faCaretDown as fortawesomefreesolidsvgicons_faCaretDown } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faCaretDown)
  


Vue.component('fa', FontAwesomeIcon)