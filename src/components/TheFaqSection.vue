<template>
  <div class="bg-primary text-center border-b-borderColor border-b">
    <div class="flex justify-between mt-5 mb-2">
      <h2 class="text-left max-w-[79%]">{{ heading }}</h2>
      <button @click="showSubText">
        <i
          class="fa fa-angle-down"
          :class="subTextIsVisible ? 'rotateUp' : 'rotateDown'"
        ></i>
      </button>
    </div>
    <p
      class="text-secondary text-left mb-5 max-h-0 overflow-hidden transition-height2 duration-0.5 ease-out"
      :class="{ ['max-h-[100px]']: subTextIsVisible }"
    >
      {{ subHeading }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['heading', 'subHeading'],
  data() {
    return {
      subTextIsVisible: false,
    };
  },
  methods: {
    showSubText() {
      this.subTextIsVisible = !this.subTextIsVisible;
    },
  },
};
</script>

<!-- <style scoped>
section {
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 45%;
  padding: 0.4rem 1.2rem;
  border: none;
  border-radius: 20px;
  background: #f7f7f7;
}

.title {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.heading {
  font-size: 1.2rem;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}

.rotateUp {
  transform: rotate(-180deg);
}
.rotateDown {
  transform: rotate(0deg);
}

i {
  font-size: 22px;
  font-weight: bolder;
  transition: 0.5s;
}

.subText {
  width: 100%;
  margin: 0;
  margin-bottom: 0.7rem;
  text-align: left;
  line-height: 0.75cm;
  transition: 0.6s;
}
</style> -->
