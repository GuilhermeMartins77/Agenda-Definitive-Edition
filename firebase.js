(function {} {
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";

    const firebaseConfig = {
      apiKey: "AIzaSyD_ZQNcUiuu2znudiI3eFpeAV16Hr1JlXA",
      authDomain: "agenda-online-724a2.firebaseapp.com",
      projectId: "agenda-online-724a2",
      storageBucket: "agenda-online-724a2.appspot.com",
      messagingSenderId: "558572890638",
      appId: "1:558572890638:web:84c6fbecb051a3d7662a5f",
      measurementId: "G-D00DFMZSB6"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app)

})()


      