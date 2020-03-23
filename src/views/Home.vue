<template>
  <div class="home">
    <SliderProgress/>
    <JumboArea/>
    <Testify class="py-5"/>
  </div>
</template>

<script>

  import SliderProgress from "../components/commons/slider/SliderProgress";
  import JumboArea from './components/JumboArea'
import Testify from './components/Testify'

export default {
  name: 'home',
  components: {
    SliderProgress,
    JumboArea,
    Testify
  }
}
</script>
