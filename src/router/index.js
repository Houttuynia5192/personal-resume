import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalView from '../components/PersonalView'
import EducationView from "../components/EducationView";
import ExperienceView from "../components/ExperienceView";
import testView from "@/components/test";
// import list from "../views/List"
import SkillView from "@/components/SkillView";

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   redirect:PersonalView
  // },
  {
    path: '/',
    name: 'personal',
    component: PersonalView
  },
  {
    path:'/experience',
    name:'experience',
    component: ExperienceView
  },
  {
    path:'/education',
    name:'education',
    component: EducationView
  },
  {
    path:'/skill',
    name:'skill',
    component: SkillView
  },
  {
    path:'/test',
    name:'test',
    component: testView
  }
]

const router = new VueRouter({
  routes
})

export default router
