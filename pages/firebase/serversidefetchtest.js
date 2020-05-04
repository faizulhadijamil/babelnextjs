import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
// import { getSortedPostsData } from '../../lib/posts';
import { getAllUsers } from '../../lib/posts'
import UserList from '../../components/UserList';

// this page is for static props    
export default function serversidefetchtest({ usersdata }) {
    console.log('allpostdata: ', usersdata)
  return (
    <div>

    </div>
  )
}

export async function getServerSideProps() {
    const usersdata = getAllUsers()
    // const usersdata = [{name:'faizul'}]
    return {
      props: {
        usersdata
      }
    }
}