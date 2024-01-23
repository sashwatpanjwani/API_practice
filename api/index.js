var searchBar = document.getElementById("myForm")

const naming = document.getElementById("naming")
const noRepos =document.getElementById("norepos")
const avatar = document.getElementById("avatars")
const followers= document.getElementById("followers")
const following = document.getElementById("following")
const repos = document.getElementById("repos")
const bio = document.getElementById("bio")

searchBar.addEventListener('submit',function(e){
    e.preventDefault();

    var userInput = document.getElementById("input").value;



    //generating final input 
    var finalInput = userInput.split(' ').join('')


    //Fetch Function
    fetch("https://api.github.com/users/" + finalInput)
    .then((result) => result.json())
    .then((data)=>{
    
      console.log(data)
      naming.innerHTML = `<h1> ${data.login}<h1/>`
      noRepos.innerHTML = `<h1>Repositories     ${data.public_repos}<h1/>`
      avatar.innerHTML =`<img src = "${data.avatar_url}"/>`
      followers.innerHTML =`<h2> Followers      ${data.followers}<h2/>`
      following.innerHTML =`<h2> Following      ${data.following}<h2/>`
      repos.innerHTML =`<a href="https://github.com/${data.login}?tab=repositories"><button>View Repos</button></a>`
      bio.innerHTML =`<h1>BIO<h1/> <br><p> ${data.bio}<p/>`
        

      
       /* try {
           
        } catch (error) {
            console.log(error.name)
            alert("User does not Exist")
            document.getElementById("name").innerHTML = `<h1>User Does Not Exist<h1/>`
            document.getElementById("avatars").innerHTML =`<h2> <h2/>`
            document.getElementById("followers").innerHTML =`<h2> <h2/>`
            document.getElementById("following").innerHTML =`<h2><h2/>`
            document.getElementById("repos").innerHTML =`<h2> <h2/>`
            document.getElementById("bio").innerHTML =`<p><p/>`
        } 
        */
        
        
        }).catch(error =>{
            naming.style.display = 'none';
            noRepos.style.display = 'none';
            
        })
   
    })



