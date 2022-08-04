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
        <RouterLink to="/admin/users">Personal Data </RouterLink>
        <RouterLink to="/admin/users">Cars</RouterLink>
        <RouterLink to="/admin/users">Repairs</RouterLink>
        <RouterLink to="/admin/users">Time Table</RouterLink>
      </div>
      <div>
        <RouterLink to="/admin/users">Logout</RouterLink>
      </div>
    </div>
    <div class="admin_content container">
      <img src="../../assets/book.png" alt="book a date" />
    </div>

    <div class="admin">
      <h1>Admin Panel</h1>
      <div class="container flex"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPanel",
};
</script>

<style scoped></style>
