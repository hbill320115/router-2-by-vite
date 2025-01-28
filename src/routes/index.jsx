import App from '../App.jsx'
import {Home,About,AlbumIndex,AlbumLayout,AlbumPhoto,AlbumSearch,NotFound} from "../pages"
import { createHashRouter } from "react-router-dom";
import SwiperPage from '../pages/SwiperPage.jsx';
  const routes = [
    {
      path : '/',
      element : <App />,
      children:[
        {
          index : true,
          element : <Home />
        },
        {
          path : 'about',
          element : <About />
        },
        {
          path : 'swiperPage',
          element : <SwiperPage />
        },
        {
          path : 'album',
          element : <AlbumLayout />,
          children:[
            {
              index:true,
              element : <AlbumIndex />
            },
            {
              path : 'Search',
              element : <AlbumSearch />
            },
            {
              path : ':id',
              element : <AlbumPhoto />
            },
          ]
        },
        {
          path:'*',
          element : <NotFound />
        },
      ]
    },
  ]
  const router = createHashRouter(routes)
  export default router ;