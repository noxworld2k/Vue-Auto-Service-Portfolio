<template>
  <div class="full_width_admin">
    <div class="admin_menu container">
      <div class="client__logo">
        <img src="../../assets/Client3.JPG" alt="admin_logo" />
      </div>
      <div>
        <h2>User Name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="admin_menu_item">
        <RouterLink to="/user">Personal Data </RouterLink>
        <RouterLink to="/user/cars">Cars</RouterLink>
        <RouterLink to="/user/repairs">Repairs</RouterLink>
        <RouterLink to="/user/calendar">Book a date</RouterLink>
      </div>
      <div>
        <RouterLink to="/admin/users">Logout</RouterLink>
      </div>
    </div>
    <div class="admin_content container">
      <BookDateWithCalendar />
    </div>
  </div>
</template>

<script>
import BookDateWithCalendar from "./BookDateWithCalendar.vue";
export default {
  name: "UserPanel",
  components: {
    BookDateWithCalendar,
  },
};
</script>

<style scoped></style>
