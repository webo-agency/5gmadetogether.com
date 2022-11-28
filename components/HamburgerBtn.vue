<template>
  <div class="wrapper-menu desktop:hidden tablet:" :class="{ open: btnActive }">
    <div class="line-menu start"></div>
    <div class="line-menu middle"></div>
    <div class="line-menu end"></div>
  </div>
</template>

<script>
export default {
  name: "HamburgerBtn",
  props: { btnActive: Boolean }
};
</script>

<style>
.wrapper-menu {
  width: 26px;
  height: 20px;
  cursor: pointer;
}

.line-menu {
  width: 100%;
  height: 2px;
  background-color: #39e8ea;
  transition: width 250ms ease;
}

.open .line-menu.middle {
  /* display: hidden;
  opacity: 0; */
  width: 0%;
}

.line-menu.start {
  transition: transform 250ms ease;
  transform-origin: left;
}

.open .line-menu.start {
  transform: rotate(45deg);
  width: 26px;
}

.line-menu.end {
  /* align-self: flex-end; */
  transition: transform 250ms ease;
  transform-origin: left;
}

.open .line-menu.end {
  transform: rotate(-45deg);
  width: 26px;
}
</style>
