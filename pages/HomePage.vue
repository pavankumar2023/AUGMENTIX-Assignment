<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <div class="mainContentSection">
    <div class="section1">

        <img src="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=600" alt="image1">
        <div class="content">
            <h3>Welcome to To Do List Website</h3> 
            <p>A To-Do List application helps users manage tasks efficiently by adding, editing, and deleting tasks, enhancing productivity and organization.</p>
            <div class="authorInfo">
                <router-link to="/TodoList" class="cta-button"> <i class="fa-sharp fa-solid fa-arrow-right"></i>  Click me!</router-link>
              </div>
        </div>
    </div>
    </div>

    <div class="section2">
        <div class="subcard">
            <img src="https://cdn-icons-png.flaticon.com/128/15198/15198197.png" alt="image1">
            <div class="content">
                <button class="contentBtn blueBtn">To-Do List</button>
            </div>
        </div>
        </div>



  
    <footer class="footer">
      <p1>&copy; 2024 To do list. All rights reserved.</p1>
    </footer>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      // Your data properties here...
    }
  },
  methods: {
    // Your methods here...
    }
  }

</script>

<style scoped>
html, body {
  width: 100%;
  overflow-x: hidden; /* This will hide any horizontal overflow */
}

.mainContentSection{
  background-color: white;
  display: flex;
  flex-direction: column;
}
.mainContentSection .section1 {
  display: flex;
  padding: 5px;
  margin: 30px 65px 10px 65px;
  background-color: white;
  border-radius: 10px;

}
.mainContentSection .section2 {
  display: flex;
  padding: 10px;
  margin: 5px 38px  20px 38px; 
}

.mainContentSection .section2 .subcard{
  background-color: white;
  margin: 5px 20px;
  padding: 5px;
  display: flex;
  border-radius: 10px;
  
}


.mainContentSection .section1 img{
  width: 900px;
  height: 250px;
  /* object-fit: cover; */
  border-radius: 10px;
}
.mainContentSection .section1 .content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align: justify;

}
.subcard img{
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.mainContentSection .section2 .blueBtn{
  color: blue;
  background-color: rgb(192, 192, 233);
}
.mainContentSection .section2 .greenBtn{
  color: darkgreen;
  background-color: rgb(202, 239, 202);
}
.section2 .subcard p{
  font-size: 10px;
  margin-top: 10px;
}

.content .contentBtn{
  width: 65px;
  padding: 5px;
  border-radius: 25px;
  border: none;
  color: blueviolet;
  background-color: rgb(216, 189, 241);
  margin-bottom: 10px;
  font-size: 10px;
}
.content h3{
  margin-bottom: 8px;
}
.content p{
  margin-top: 5px;
  font-size: 13px;
  margin-bottom: 10px;
}
.content .authorInfo{
  display: flex;
  align-items: center;
}
.content .authorInfo p{
  font-size: 10px;
  padding: 10px;
  margin-top: 5px;
  margin-right: 100px;
  margin-bottom: -8.5px;
}


.content-wrapper {
  width: fit-content;
  height: auto;
  padding: 10px;
  margin-left: 100px;
  
  transition: transform 0.3s ease-in-out;
}

.content-wrapper:hover {
  transform: translateY(-10px);
}

.home h1 {
  text-align: center;
  align-items: center;
  margin-top: 50px;
  font-size: 3rem;
  color: #0f0502;
}

.home p {
  margin: 20px auto;
  font-size: 1.2rem;
  color: #a10cf2;
}

.cta-button {
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  background-color: #388e3c;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.cta-button:hover {
  background-color: #2a23e1;
}
.footer {
  margin-top: 180px;
  padding: 10px 0;
  background-color: #eff5f5;
  color: #070606;
  text-align: center;
  width: 100%;
  position: relative; /* Ensure it's relative if you're not using fixed */
  bottom: 0;
}

.footer p1 {
  margin: 0;
  font-size: 0.9rem;
}
</style>
