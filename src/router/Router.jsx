 import { Outlet } from "react-router-dom";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Header from "../component/Header.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import Authenticated from "../component/Authenticated.jsx";
import RedirectIfAuthenticated from "../component/RedirectIfAuthenticate.jsx";


const router = createBrowserRouter(
    [   
        {path:"/",element:(
        //layout
        <div className="bg-gray-300 h-screen">
           <Header/>
           <div className="p-8 max-w-xl mx-auto">
           <Outlet />
           </div>
            
        </div>
        ),
        children:[//element จะไปแทนที outlet ตาม path
        {path:"/",element:
        <Authenticated>
            <HomePage/>
        </Authenticated>
        },
        {path:"/login",element:
        <RedirectIfAuthenticated>
            <LoginPage/>
        </RedirectIfAuthenticated>
    },
        {path:"/register",element:<RegisterPage/>}
        ]
            
    }
        // {path:"/",element:<h1>Home Page</h1>},
        // {path:"/login",element:<h1>Login page</h1>},
        // {path:"/register",element:<h1>Register page</h1>}
    ]
);

export default function Router() {
    return <RouterProvider router ={router}></RouterProvider>;
}
  