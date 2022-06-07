import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from '../components/Intro';
import NavigationBar from '../components/Navigationbar';
import { Container, Row,Col } from 'react-bootstrap';
export default function Home() {
 return (
   <div className='htmlAll'>
     <Head>
       <title>Movie List</title>
       <meta name="description" content="Movie List" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <div className='myBG'>
       <NavigationBar></NavigationBar>
       <Intro></Intro>
     </div>
   </div>
 )
}