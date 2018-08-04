<template>
    <div class="container">
        <div class="item"
        v-for="(item,index) in steps"
        :key="index"
        :class="{active:currentIndex===index, finish:currentIndex>index}"
        @click="currentIndex>=index && handleClick(index)"
    >{{item.label}}</div>
    </div>
</template>
<script>
export default {
  name: "NavProgress",
  props: ["steps","currentIndex"],
  methods:{
      handleClick(index){
          console.log('当前点击index ', index);
      }
  }
};
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  .item{
    flex:1;
    position: relative;
    &:not(:first-child):before{
        position:absolute;
        content: '';
        top: 30%;
        left: -40%;
        border: 3px solid green;
        width: 80%;
    }
    &.finish{
        color: gray;
        &::before{
            border: 3px solid gray;
        }
    }
    &.active{
        color: red;
        &::before{
            border: 3px solid red;
        }
    }
  }
}
</style>


