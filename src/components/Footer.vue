<template>
    <div class="footer">
  <footer id=footerText>
      ©2021 Jayanth Mani
      <br>
      Built With:

        <div id="images">
            <a href="https://vuejs.org/">
                <img id = "image" src="../assets/logo.png" alt="Vue">
            </a>
            <a href="https://firebase.google.com/">
                <img id="image" src="../assets/firebase.png" alt="Firebase">
            </a>
        </div> 
    
    
</footer>
</div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style>
.footer{
     background-color: #248e91;
    color: white

}
    #footerText{

    background-color: #248e91;
}   

    #images {
        margin-top: 20px;
        
        
    }

    #image {
        height:70px;
        width: auto;
        margin-left: 50px;
        margin-right: 50px;
    }

    a :hover {
     opacity: 0.3;


}
</style>