import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navigationbar';
export default function Home() {
 return (
   <div className='htmlAll'>
     <Head>
       <title>Movie List</title>
       <meta name="description" content="Movie List" />
       <link rel="icon" href="/favicon.ico" />
     </Head>

     <div className='myBG border'>
       <NavigationBar></NavigationBar>
     </div>
    
     
   </div>
 )
}