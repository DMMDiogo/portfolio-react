import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Root from './components/root/Root.tsx'
import './index.css'
import {
	BrowserRouter,
	Link,
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
} from "react-router-dom";
import Homepage from './pages/homepage/index.tsx';


const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Root>
				<Homepage/>
			</Root>
		),
	},

	{
		path: "/About",
		element: (
			<Root>
				
			</Root>
		),
	},
	
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
      </>
);
