<template>
  <footer id=footerText>
      ©2021 Jayanth Mani
      <br>
      Built With:

        <div id="images">
            <a href="https://vuejs.org/">
                <img id = "vueImage" src="../assets/logo.png" alt="Vue">
            </a>
            <a href="https://firebase.google.com/">
                <img id="vueImage" src="../assets/firebase.png" alt="Firebase">
            </a>
        </div>  
</footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style>
    #footerText{
    bottom: 0;
    width: 100%;
    height: auto;   
    background-color: #248e91;
}   

    #images {
        margin-top: 20px;
        
        
    }

    #vueImage {
        height:70px;
        width: auto;
        margin-left: 50px;
        margin-right: 50px;
    }

    a :hover {
     opacity: 0.3;


}
</style>