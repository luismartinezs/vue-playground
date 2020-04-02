<template>
  <div>
    <child-component>
      <h1 slot="title">
        This is a title
      </h1>
    </child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
export default {
  name: 'ParentComponent',
  components: { ChildComponent }
}
</script>
