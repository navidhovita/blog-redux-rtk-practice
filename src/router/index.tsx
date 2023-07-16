import { createBrowserRouter } from 'react-router-dom'
import Root from '@/pages/root';
import Blog from '@/pages/blog';
import SingleBlog from '@/pages/single-blog';
import Categories from '@/pages/categories';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/blog/:id",
        element: <SingleBlog />,
    },
    {
        path: "/categories",
        element: <Categories />
    }
]);

export default router;