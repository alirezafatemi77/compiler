<template>
  <div id="app" >
    <div class="whole">
      <div class="input">
        <textarea name="" @keyup="myfunc" class="textt" id="" cols="56" rows="32" ></textarea>
      </div>
      <div class="show">
        <div v-for="arr in result" :key="arr.token" class="holder">

          <p> 
            <span  class="padd color" v-if="arr.type!='value' || arr.type=='both'">   {{arr.token}}</span>
            <span class="padd" v-if=" arr.type!='token' || arr.type=='both'" >     {{arr.value}}</span>
            <span v-if="arr.err" class="err">{{arr.err}}</span>
          </p>
        
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import res1 from './main'
import parses from './parse'
export default {
  name: 'App',
  data() {
    return {
      result: res1,
      texttoparse:''
    }
  },
  computed:{


  },
  methods: {
    myfunc(e){
      //this.$store.commit('getdata', e.target.value)
      this.result= parses(e.target.value)
      console.log(this.result)
    }
  },

  mounted() {
    console.log(res1)

  },
  watch:{
 
  }
}
</script>

<style>
*{
  margin: 0 !important;
}
html{
  margin: 0!important;
}
body{
  margin: 0 !important;
}
.whole{
  min-height: 100vh;
  height: 100%;
  background-color: rgb(36, 36, 36);
  color: white;
   position: relative;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.input{
width: 50%; position: relative;
float: left;
padding: 20px;
box-sizing: border-box;
 min-height: 100vh;
  height: 100%;

}
.err{
  color: red;
}
.show{
background-color: rgb(65, 65, 65);
float: right;
width: 50%;
padding: 40px;
box-sizing: border-box;
 min-height: 100vh;
  height: 100%;

  position: relative;
}
.textt{
    background-color: rgb(36, 36, 36);
    border: none;
    color: white;
    font-size: 17px;
    padding: 10px;
      resize: none;
}
.textt:focus{
    border: 0 none #FFF;
    overflow: hidden;
    outline:none;
}
.token{
width: 50%;
float: left;
}
.value{
width: 50%;
float: right;
}
.holder{

}
.color{
  color: rgb(72, 238, 238);
  font-size: 14pt;

}
.padd{
 font-size: 14pt;
 line-height: 10px;
}
</style>
