<template>
  <DatePicker
    v-model="date"
    mode="dateTime"
    :minute-increment="30"
    :valid-hours="{ min: 8, max: 18 }"
    :disabledDates="{ weekdays: [1, 7] }"
    :min-date="new Date()"
    is24hr
  />
</template>

<script>
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";
export default {
  name: "BookDateWithCalendar",
  components: {
    DatePicker,
  },
  data() {
    let date = new Date();
    date.setMinutes(0, 0, 0);
    return {
      date,
      attrs: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
