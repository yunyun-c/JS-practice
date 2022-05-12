const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile-img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 1500)

function getData() {
    header.innerHTML = '<img src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="from https://www.pexels.com/zh-tw/@lemonzandtea/">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae quidem voluptates quia officiis voluptatibus praesentium minus sapiente quibusdam. Itaque!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/60.jpg" alt="">'
    name.innerHTML = 'Cassie Night'
    date.innerHTML = 'Oct 29, 2022'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}