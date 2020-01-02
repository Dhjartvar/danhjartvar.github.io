<template>
  <q-scroll-area :thumb-style="thumbStyle" style="height: 850px;">
    <div class="q-px-lg q-pb-md text-white">
      <q-timeline dark color="secondary">
        <q-timeline-entry
          title="Masters in Software Engineering"
          subtitle="2016-2018 @ University of Southern Denmark (SDU)"
          @click="expandMasters = !expandMasters"
          :color="expandMasters ? 'accent' : 'green-4'"
          icon="done_all"
          style="cursor: pointer;"
        >
          <div v-show="mastersExpanded">
            <i>Compulsory Courses</i>
            <q-list>
              <Course label="Thesis Project" />
              <Course label="Data Science" />
              <Course label="Scientific Methods" />
              <Course label="Innovative Software Solution" />
              <Course label="Model-driven Software Development" />
              <Course label="Software Engineering of Mobile Systems" />
              <Course label="Ubiquitous Computing and Internet of Things" />
            </q-list>
            <br />
            <i>Electives</i>
            <q-list>
              <Course label="Social Data Mining" />
              <Course label="In-Company Period" />
              <Course label="Statistical Machine Learning" />
              <Course label="Selected Topics in Modeling and Simulation" />
            </q-list>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Bachelors in Software Engineering"
          subtitle="2013-2016 @ University of Southern Denmark (SDU)"
          @click="expandBachelors = !expandBachelors"
          :color="expandBachelors ? 'accent' : 'green-4'"
          icon="done_all"
          style="cursor: pointer;"
        >
          <div v-show="bachelorsExpanded">
            <i>Compulsory Courses</i>
            <q-list>
              <Course label="Bachelor Project" />
              <Course label="Experts in Teams" />
              <Course label="Artificial Intelligence" />
              <Course label="User Centered Design" />
              <Course label="Discrete Mathematics" />
              <Course label="Software Maintenance" />
              <Course label="Software System Design" />
              <Course label="Algorithms and Data Structures" />
              <Course label="Emperical Methods and Statistics" />
              <Course label="Project Organization \& Management" />
              <Course label="Object-Oriented Programming Continued" />
              <Course label="Fundamental Object Oriented Programming" />
              <Course label="Software System Design in a Global Context" />
              <Course label="Organization Oriented Software Development" />
            </q-list>
            <br />
            <i>Electives</i>
            <q-list>
              <Course label="Internet Technology" />
              <Course label="Android Programming" />
              <Course label="C# And the .NET Platform" />
            </q-list>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Mathematics A"
          subtitle="2013 @ VUCFYN"
          color="green-4"
          icon="done_all"
        ></q-timeline-entry>

        <q-timeline-entry
          title="Technical College (HTX)"
          subtitle="2009-2012 @ Odense Tekniske Gymnasium (OTG)"
          @click="expandHTX = !expandHTX"
          :color="expandHTX ? 'accent' : 'green-4'"
          icon="done_all"
          style="cursor: pointer;"
        >
          <div v-show="HTXExpanded">
            <q-list>
              <Course label="English A" />
              <Course label="Communication/IT A" />
              <Course label="Technical Science A" />
              <Course label="Physics B" />
              <Course label="Chemistry B" />
              <Course label="Mathematics B" />
              <Course label="Technology B" />
              <Course label="Biology C" />
              <Course label="International Technology and Culture C" />
              <Course label="Programming C" />
              <Course label="Social Science C" />
              <Course label="History of Technology C" />
            </q-list>
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-scroll-area>
</template>

<script>
import Course from './Course'

export default {
  name: 'EducationTimeline',
  components: {
    Course
  },
  data() {
    return {
      expandMasters: true,
      expandBachelors: false,
      expandHTX: false
    }
  },
  computed: {
    small() {
      return this.$q.screen.lt.md
    },
    mastersExpanded() {
      return this.expandMasters
    },
    bachelorsExpanded() {
      return this.expandBachelors
    },
    HTXExpanded() {
      return this.expandHTX
    },
    thumbStyle() {
      return {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#388e3c',
        width: '5px',
        opacity: 0.75
      }
    }
  }
}
</script>
